from sgfmill import sgf
import json

# Clean the sgf of comments and unwanted / invalid properties so that glift can render the sgf as a puzzle later
# move_limit is the move the puzzle is on, so we only want the sgf up to that move number
def clean_sgf(sgf_data, move_limit=None):
    game = sgf.Sgf_game.from_string(sgf_data)
    cleaned_sgf = []
    cleaned_sgf.append("(")
    root_node = game.get_root()
    cleaned_sgf.append(";")
    for prop, values in root_node.get_raw_property_map().items():
        # These are properties that we do NOT want in our new cleaned SGF, we are mainly removing the comments, because they may interfere with glift's ability to determine what's a correct/incorrect moves
        # We are using FF[4] sgf properties: https://www.red-bean.com/sgf/properties.html, glift doesn't know about KTV, RL, RN, TT, or TC properties, and these are not valid FF[4] SGF properties either
        # NOTE: BL and WL are valid, and display the time remaining for the player, but we don't need that when we are rendering the puzzle, so we are removing it
        if prop not in ['C', 'GC', 'GB', 'GW', 'TR', 'SQ', 'KTV', 'RL', 'RN', 'TT', 'TC', 'BL', 'WL']:
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
            if prop not in ['C', 'GC', 'GB', 'GW', 'TR', 'SQ', 'KTV', 'RL', 'RN', 'TT', 'TC', 'BL', 'WL']:
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

# Processing KataGo AI Analysis output
def process_katago_output(json_output):
    katago_data = json.loads(json_output)
    puzzles_data = []
    for puzzle in katago_data["createdPuzzles"]:
        correct_moves_dictionary = {}
        move_number = puzzle["move_number"]
        correct_moves = puzzle["solution_coordinates"]
        correct_moves_dictionary[move_number] = correct_moves
        puzzles_data.append(correct_moves_dictionary)
    return puzzles_data

def add_comments_to_sgfs(cleaned_sgf_strings, correct_moves_dictionaries_list):
    final_sgf_strings = []

    for cleaned_sgf_string, correct_moves_dictionary in zip(cleaned_sgf_strings, correct_moves_dictionaries_list):
        # original_sgf_game = sgf.Sgf_game.from_string(cleaned_sgf_string)
        board_size = 9

        # if board_size not in [9, 13]:
            # Logic for 19x19 board placeholder
            # print("hit this block for 19 by 19 boards")
            # pass
        # else:
        # New logic for 9x9 and 13x13 boards
        num_aw = cleaned_sgf_string.count('AW[')
        num_ab = cleaned_sgf_string.count('AB[')
        total_stones = num_aw + num_ab

        # Determine whose turn it is based on the total number of AW and AB stones
        original_color = 'B' if total_stones % 2 == 0 else 'W'

        correct_move_comments = []

        for key in correct_moves_dictionary:
            inner_dict = correct_moves_dictionary[key]

            for inner_key in inner_dict:
                color = original_color
                converted_inner_key = convert_to_sgf(inner_key, board_size)

                if len(inner_dict[inner_key]) == 1:
                    correct_move_comments.append("(;{}[{}]C[CORRECT])".format(color, converted_inner_key))
                    continue

                correct_move_comments.append("(;{}[{}]C[CORRECT]".format(color, converted_inner_key))

                for idx, correct_sequence in enumerate(inner_dict[inner_key][1:], start=1):
                    converted_correct_sequence = convert_to_sgf(correct_sequence, board_size)
                    if color == "B":
                        color = "W"
                    elif color == "W":
                        color = "B"

                    if idx == len(inner_dict[inner_key]) - 1:
                        correct_move_comments.append(";{}[{}]C[CORRECT])".format(color, converted_correct_sequence))
                    else:
                        correct_move_comments.append(";{}[{}]C[CORRECT]".format(color, converted_correct_sequence))

        final_sgf_content = cleaned_sgf_string.rstrip(')') + '\n' + '\n'.join(correct_move_comments) + ')'
        final_sgf_strings.append(final_sgf_content)

    return final_sgf_strings


cleaned_9by9 = "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[fa][fb][cc][ec][ed][ee][cf][ef]AB[ga][gb][gc][gd][ge][gf][gg])"
correct_moves_dictionaries_list = [{0: {'E2': ["E2","F2","C2","E3","D2"]}}]

print(add_comments_to_sgfs(cleaned_9by9, correct_moves_dictionaries_list))
