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
        # If the solution coordinates's key value is "pass" then skip that as it is not a valid puzzle. Also, if any of the moves in the sequence contain "pass", also skip it.
        # Basically this happens when a user protects their own territory at the end of the game unnecessarily, or tries to do something when they are behind, by throwing a stone in the opponent's territory when it's gote,
        # they thus lose ~1 point, and KataGo deems this as a mistake
        # However, we do not want to implement "pass" as a solution on the frontend, as this would be challenging, and this does not make a good puzzle (to "pass") as this means the game is almost always already over and one player has won
        if "pass" in puzzle["solution_coordinates"] or any("pass" in value for value in puzzle["solution_coordinates"].values()): # any() is using a generator expression -> more memory efficient as it doesn't create the list in memory
          continue
        correct_moves_dictionary = {}
        move_number = puzzle["move_number"]
        correct_moves = puzzle["solution_coordinates"]
        correct_moves_dictionary[move_number] = correct_moves
        puzzles_data.append(correct_moves_dictionary)
    return puzzles_data

def add_comments_to_sgfs(cleaned_sgf_strings, correct_moves_dictionaries_list):

    final_sgf_strings = []

    for cleaned_sgf_string, correct_moves_dictionary in zip(cleaned_sgf_strings, correct_moves_dictionaries_list):
        original_sgf_game = sgf.Sgf_game.from_string(cleaned_sgf_string)
        board_size = original_sgf_game.get_size()

        for key in correct_moves_dictionary:
            index = cleaned_sgf_string.find(';')
            for _ in range(key):
                index = cleaned_sgf_string.find(';', index + 1)
            semicolon_index = index
            # Color is determined by ;B or ;W, which is one character after the ;
            original_color = cleaned_sgf_string[index + 1]
            # print("original color in outer for loop", original_color)

            # print("color:", color)
            index = cleaned_sgf_string.find(']', index)
            sgf_with_incorrect_move_comment = cleaned_sgf_string[:semicolon_index] + \
                "\n(" + cleaned_sgf_string[semicolon_index:index + 1] + \
                "C[Incorrect - This was the actual move played in the game!])"

            inner_dict = correct_moves_dictionary[key]

            correct_move_comments = []

            for inner_key in inner_dict:
                # Create a local copy of original_color for use in inner loop
                color = original_color
                # converting katago move coordinates to sgf coordinates requires the board size, which we are getting from the sgf
                converted_inner_key = convert_to_sgf(inner_key, board_size)

                # If the solution variation only has one move in it, then that means no solution variation is provided because the first move in the solution coordinates is always the same as the starting move
                # For example, our correct_moves_dictionary looks like this: {31: {'J4': ['J4', 'J2', 'J1'], 'S2': ['S2', 'P6', 'J4'], 'R3': ['R3']}}
                if len(inner_dict[inner_key]) == 1:
                    # Can't use f strings because otherwise python will add quotes around the sgf moves
                    # print("color right before we exit block early: ", original_color)
                    correct_move_comments.append("(;{}[{}]C[CORRECT])".format(original_color, converted_inner_key))
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

            final_sgf_strings.append(final_sgf_content)

    return final_sgf_strings
