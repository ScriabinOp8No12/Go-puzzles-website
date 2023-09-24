from sgfmill import sgf
import json
from ast import literal_eval

def clean_sgf(sgf_data, move_limit=None):
    game = sgf.Sgf_game.from_string(sgf_data)
    cleaned_sgf = []
    cleaned_sgf.append("(")
    root_node = game.get_root()
    cleaned_sgf.append(";")
    for prop, values in root_node.get_raw_property_map().items():
        # These are properties that we do NOT want in our new cleaned SGF, we are mainly removing the comments, because they may interfere with glift's ability to determine what's a correct/incorrect moves
        # We are using FF[4] sgf properties: https://www.red-bean.com/sgf/properties.html, glift doesn't know about KTV, RL, RN, TT, or TC properties, and these are not valid FF[4] SGF properties either
        if prop not in ['C', 'GC', 'GB', 'GW', 'TR', 'SQ', 'KTV', 'RL', 'RN', 'TT', 'TC']:
            for value in values:
                cleaned_sgf.append(f"{prop}[{value.decode('utf-8')}]")
    node = root_node
    move_count = 0
    while node:
        if move_limit is not None and move_count >= move_limit:
            break
        child = node[0]
        cleaned_sgf.append(";")
        for prop, values in child.get_raw_property_map().items():
            if prop not in ['C', 'GC', 'GB', 'GW', 'TR', 'SQ']:
                for value in values:
                    cleaned_sgf.append(f"{prop}[{value.decode('utf-8')}]")
        node = child
        move_count += 1
    cleaned_sgf.append(")")
    cleaned_sgf_str = "".join(cleaned_sgf)
    return cleaned_sgf_str

def convert_to_sgf(coord, board_size):
    col, row = coord[0], int(coord[1:])
    x = ord(col) - ord('A')
    if col > 'I':
        x -= 1
    y = board_size - row
    sgf_col = chr(ord('a') + x)
    sgf_row = chr(ord('a') + y)
    return sgf_col + sgf_row

# Katago output processing based on new format
def process_katago_output(json_output):
    katago_data = json.loads(json_output)
    correct_moves_dictionary = {}

    for puzzle in katago_data["createdPuzzles"]:

      move_number = puzzle["move_number"]
      # Evaluate the string as a Python dictionary
      correct_moves = literal_eval(puzzle["solution_coordinates"])
      correct_moves_dictionary[move_number] = correct_moves

    return correct_moves_dictionary, move_number

def add_comments_to_sgf(cleaned_sgf_string, correct_moves_dictionary):
    original_sgf_game = sgf.Sgf_game.from_string(cleaned_sgf_string)
    board_size = original_sgf_game.get_size()

    for key in correct_moves_dictionary:
        index = cleaned_sgf_string.find(';')
        for _ in range(key):
            index = cleaned_sgf_string.find(';', index + 1)
        semicolon_index = index
        # Color is determined by ;B or ;W, which is one character after the ;
        color = cleaned_sgf_string[index + 1]
        # print("color:", color)
        index = cleaned_sgf_string.find(']', index)
        sgf_with_incorrect_move_comment = cleaned_sgf_string[:semicolon_index] + \
            "\n(" + cleaned_sgf_string[semicolon_index:index + 1] + \
            "C[Incorrect - This was the actual move played in the game!])"

        inner_dict = correct_moves_dictionary[key]

        correct_move_comments = []

        for inner_key in inner_dict:
            # converting katago move coordinates to sgf coordinates requires the board size, which we are getting from the sgf
            converted_inner_key = convert_to_sgf(inner_key, board_size)

            # If the solution variation only has one move in it, then that means no solution variation is provided because the first move in the solution coordinates is always the same as the starting move
            # For example, our correct_moves_dictionary looks like this: {31: {'J4': ['J4', 'J2', 'J1'], 'S2': ['S2', 'P6', 'J4'], 'R3': ['R3']}}
            if len(inner_dict[inner_key]) == 1:
                # Can't use f strings because otherwise python will add quotes around the sgf moves
                correct_move_comments.append("(;{}[{}]C[CORRECT])".format(color, converted_inner_key))
                continue

            correct_move_comments.append("(;{}[{}]C[CORRECT]".format(color, converted_inner_key))

            for idx, correct_sequence in enumerate(inner_dict[inner_key][1:], start=1):  # Start index from 1 because you're skipping the first element
                converted_correct_sequence = convert_to_sgf(correct_sequence, board_size)
                if color == "B":
                    color = "W"
                elif color == "W":
                    color = "B"

                # Check if we are at the last index of the sequence, since the last move in the comment branch needs a closing )
                if idx == len(inner_dict[inner_key]) - 1:
                    correct_move_comments.append(";{}[{}]C[CORRECT])".format(color, converted_correct_sequence))
                else:
                    correct_move_comments.append(";{}[{}]C[CORRECT]".format(color, converted_correct_sequence))
        # Final content needs to add the correct move comments at the end of the file, then include an extra closing )
        # The last comment line of the SGF always needs to have two ))
        final_sgf_content = sgf_with_incorrect_move_comment + \
            '\n' + '\n'.join(correct_move_comments) + ')'


    return final_sgf_content

# ****************** Testing locally ******************** #

sgf_data = "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[7.50]TM[300] GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]C[SGF generated by KaTrain 1.12.3ㅤ​]RE[B+Resign]KTV[1.0]RL[0]RN[3]TC[3]TT[30] ;B[qd] ;W[dp] ;B[pq] ;W[dd] ;B[cc] ;W[dc] ;B[cd] ;W[ce] ;B[be] ;W[bf] ;B[cf] ;W[de] ;B[bg] ;W[bd] ;B[af] ;W[bc] ;B[nc] ;W[qo] ;B[ql] ;W[op] ;B[oq] ;W[np] ;B[mr] ;W[lq] ;B[mq] ;W[mp] ;B[lp] ;W[kq] ;B[lo] ;W[rq] ;B[qr]C[Move 31: B R2 Score: W+3.9 Win rate: W 71.1% Estimated point loss: 4.3 Predicted top move was S2 (B+0.5). PV: BS2 K4 O6 P6 P7 O7 Q6 P5 P8 R3 R2 M6 Move was #96 according to policy (0.00%). Top policy move was K4 (40.0%). ㅤ​] ;W[rr] ;B[lr] ;W[kr] ;B[nq]C[Move 35: B O3 Score: W+8.9 Win rate: W 87.0% Estimated point loss: 4.4 Predicted top move was J4 (W+4.2). PV: BJ4 K4 K5 J3 H4 H3 G3 G4 G2 J5 H5 L5 J6 M6 N5 L4 Move was #33 according to policy (0.03%). Top policy move was J4 (29.8%). ㅤ​] ;W[on] ;B[jp] ;W[iq] ;B[ip] ;W[hq] ;B[go] ;W[fp] ;B[ol] ;W[nm] ;B[mk] ;W[rd] ;B[re] ;W[qc] ;B[rc] ;W[pd] ;B[qe] ;W[rb] ;B[sd] ;W[pe] ;B[pc] ;W[oc] ;B[qb] ;W[nd] ;B[ob] ;W[od]C[Move 60: W P16 Score: W+5.4 Win rate: W 78.3% Estimated point loss: 4.8 Predicted top move was M7 (W+10.4). PV: WM7 K7 L8 K8 L9 K9 L10 N12 Move was #134 according to policy (0.01%). Top policy move was M7 (32.0%). ㅤ​] ;B[mc] ;W[md] ;B[ld] ;W[le] ;B[ke] ;W[kf]C[Move 66: W L14 Score: W+0.5 Win rate: W 55.3% Estimated point loss: 5.4 Predicted top move was M14 (W+6.0). PV: WM14 F5 E5 L14 M13 P13 L13 L16 M7 K7 L9 Move was #3 according to policy (1.72%). Top policy move was M14 (75.8%). ㅤ​] ;B[kd])"

katago_json_output = '''{
    "createdPuzzles": [
        {
            "id": 1,
            "sgf_id": 1,
            "sgf_data": "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[7.50]TM[300] GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]C[SGF generated by KaTrain 1.12.3ㅤ​]RE[B+Resign]KTV[1.0]RL[0]RN[3]TC[3]TT[30] ;B[qd] ;W[dp] ;B[pq] ;W[dd] ;B[cc] ;W[dc] ;B[cd] ;W[ce] ;B[be] ;W[bf] ;B[cf] ;W[de] ;B[bg] ;W[bd] ;B[af] ;W[bc] ;B[nc] ;W[qo] ;B[ql] ;W[op] ;B[oq] ;W[np] ;B[mr] ;W[lq] ;B[mq] ;W[mp] ;B[lp] ;W[kq] ;B[lo] ;W[rq] ;B[qr]C[Move 31: B R2 Score: W+3.9 Win rate: W 71.1% Estimated point loss: 4.3 Predicted top move was S2 (B+0.5). PV: BS2 K4 O6 P6 P7 O7 Q6 P5 P8 R3 R2 M6 Move was #96 according to policy (0.00%). Top policy move was K4 (40.0%). ㅤ​] ;W[rr] ;B[lr] ;W[kr] ;B[nq]C[Move 35: B O3 Score: W+8.9 Win rate: W 87.0% Estimated point loss: 4.4 Predicted top move was J4 (W+4.2). PV: BJ4 K4 K5 J3 H4 H3 G3 G4 G2 J5 H5 L5 J6 M6 N5 L4 Move was #33 according to policy (0.03%). Top policy move was J4 (29.8%). ㅤ​] ;W[on] ;B[jp] ;W[iq] ;B[ip] ;W[hq] ;B[go] ;W[fp] ;B[ol] ;W[nm] ;B[mk] ;W[rd] ;B[re] ;W[qc] ;B[rc] ;W[pd] ;B[qe] ;W[rb] ;B[sd] ;W[pe] ;B[pc] ;W[oc] ;B[qb] ;W[nd] ;B[ob] ;W[od]C[Move 60: W P16 Score: W+5.4 Win rate: W 78.3% Estimated point loss: 4.8 Predicted top move was M7 (W+10.4). PV: WM7 K7 L8 K8 L9 K9 L10 N12 Move was #134 according to policy (0.01%). Top policy move was M7 (32.0%). ㅤ​] ;B[mc] ;W[md] ;B[ld] ;W[le] ;B[ke] ;W[kf]C[Move 66: W L14 Score: W+0.5 Win rate: W 55.3% Estimated point loss: 5.4 Predicted top move was M14 (W+6.0). PV: WM14 F5 E5 L14 M13 P13 L13 L16 M7 K7 L9 Move was #3 according to policy (1.72%). Top policy move was M14 (75.8%). ㅤ​] ;B[kd])",
            "category": "other",
            "move_number": 31,
            "solution_coordinates": "{'J4': ['J4', 'J2', 'H2'], 'S2': ['S2', 'P6', 'J4'], 'R3': ['R3'] }",
            "difficulty": 1500,
            "status": "queued",
            "job_id": null,
            "updatedAt": "2023-09-22 22:24:59",
            "createdAt": "2023-09-22 22:24:59"
        }
    ]
}'''

correct_moves_dictionary, move_number = process_katago_output(katago_json_output)
cleaned_sgf_string = clean_sgf(sgf_data, move_number)
# print(cleaned_sgf_string)

final_sgf_string = add_comments_to_sgf(cleaned_sgf_string, correct_moves_dictionary)
# final_sgf_string = inject_sgf_copy(cleaned_sgf_string, correct_moves_dictionary)
print(final_sgf_string)



    # original_sgf_game = sgf.Sgf_game.from_string(sgf_content)
    # board_size = original_sgf_game.get_size()

    # for key in correct_moves_dictionary:
    #     index = sgf_content.find(';')
    #     for _ in range(key):
    #         index = sgf_content.find(';', index + 1)
    #     semicolon_index = index
    #     color = sgf_content[index + 1]
    #     index = sgf_content.find(']', index)

    #     new_sgf_content = sgf_content[:semicolon_index] + \
    #         "\n(" + sgf_content[semicolon_index:index + 1] + \
    #         "C[Incorrect - This was the actual move played in the game!])"

    #     correct_comments = []
    #     for move, variations in correct_moves_dictionary[key].items():
    #         sgf_move = convert_to_sgf(move, board_size)
    #         variation_sgf = " ".join(
    #             [convert_to_sgf(var, board_size) for var in variations])
    #         comment = f"CORRECT. Variations: {variation_sgf}" if sgf_move != variation_sgf else "CORRECT"
    #         correct_comments.append(f'(;{color}[{sgf_move}]C[{comment}])')

    #     correct_comments.reverse()
    #     final_sgf_content = new_sgf_content + \
    #         '\n' + '\n'.join(correct_comments) + ')'
    #     return final_sgf_content
