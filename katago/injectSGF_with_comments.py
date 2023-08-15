import os
from sgfmill import sgf

# This python module takes an uploaded SGF, creates a new clean copy that has no comments, symbols, or branches, etc.
# Determines where the puzzles should be based on KataGo's analysis (largest point mistakes per section of game, correct moves are within 1 point KataGo best move),
# Removes the rest of the SGF after that puzzle / point in SGF to avoid weird behavior with the glift library
# Adds the comment "Incorrect - This was the actual move played in the game!" to the move played in the game
# Adds the comment "CORRECT" to the very end of the SGF, with the correct move(s) determined by Katago.
# These go in reverse order so that lower number on glift will correspond with a better move
# The glift library takes a problemConditions object, where we can tell it to look for the comment with the keyword "CORRECT" so it can mark these moves as correct, everything else is therefore considered incorrect
# Since KataGo takes in different coordinates for the moves, we need to convert these KataGo coordinates back into SGF format - this is done before adding the comment


# Add "puzzle" to the end of the file name, later we append the move number after "puzzle" in the file name
def generate_puzzle_filename(original_sgf_name):
    directory, filename_with_extension = os.path.split(original_sgf_name)
    filename, extension = os.path.splitext(filename_with_extension)
    cleaned_filename = os.path.join(directory, f"{filename}_puzzle{extension}")
    return cleaned_filename


# Add "move_number" to end of file name and save the sgf puzzle to the output_folder specified below
def generate_output_filename(original_sgf_name, move_number):
    # ******************** Folder to save the sgf puzzles to ******************************
    output_folder = 'backend/glift/puzzle_outputs_for_glift3'
    # Create the folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    # Extract the original filename without extension
    filename, extension = os.path.splitext(os.path.basename(original_sgf_name))
    # Combine the folder, original filename, and move number to create the new filename
    output_filename = os.path.join(
        output_folder, f"{filename}_move_{move_number}{extension}")
    return output_filename


# Reads sgf data using sgfmill, takes sgf in as a string, removes comments, good for black/white add black/white stones, etc.
# so that there isn't interference when using glift to render the sgf and create a working puzzle
def clean_sgf(input_file_path):
    with open(input_file_path, 'r', encoding='utf-8') as file:
        sgf_text = file.read()
    game = sgf.Sgf_game.from_string(sgf_text)

    cleaned_sgf = []
    # Add root properties (build cleaned_sgf from scratch / nodes)
    cleaned_sgf.append("(")
    root_node = game.get_root()
    cleaned_sgf.append(";")
    for prop, values in root_node.get_raw_property_map().items():
        # exclude comments, game comment, good for black/white, triangle and square symbol
        if prop not in ['C', 'GC', 'GB', 'GW', 'TR', 'SQ']:
            for value in values:
                # Decode bytes object
                cleaned_sgf.append(f"{prop}[{value.decode('utf-8')}]")

    # Add main branch nodes
    node = root_node
    while node:
        if node:  # Check if node has children
            child = node[0]  # Consider only the first child (main branch)
            cleaned_sgf.append(";")
            for prop, values in child.get_raw_property_map().items():
                # exclude comments, game comment, good for black/white, triangle and square symbol
                if prop not in ['C', 'GC', 'GB', 'GW', 'TR', 'SQ']:
                    for value in values:
                        # Decode bytes object
                        cleaned_sgf.append(f"{prop}[{value.decode('utf-8')}]")
            node = child
        else:
            node = None
    # add a final ) because that's required for proper SGF format
    cleaned_sgf.append(")")

    cleaned_sgf_str = "".join(cleaned_sgf)

    cleaned_filename = generate_puzzle_filename(input_file_path)
    with open(cleaned_filename, 'w', encoding='utf-8') as file:
        file.write(cleaned_sgf_str)

    return cleaned_filename


# Convert KataGo output solution coordinates into sgf coordinates. Use sgfmill to find and then dynamically pass in the board_size
def convert_to_sgf(coord, board_size):

    col, row = coord[0], int(coord[1:])
    x = ord(col) - ord('A')
    # SGF format has the letter I, but KataGo coordinates skip the letter I because it looks too similar to L
    if col > 'I':
        x -= 1
    y = board_size - row

    sgf_col = chr(ord('a') + x)
    sgf_row = chr(ord('a') + y)
    return sgf_col + sgf_row


# Process KataGo output and convert output into a dictionary with: turn number as the key, and the KataGo coordinates of the answers as the value
def process_katago_output(output_file_path):

    with open(output_file_path) as f:
        katago_output = f.read()

    lines = katago_output.strip().split("\n")
    correct_moves_dictionary = {}

    for line in lines:
        if line.startswith("Turn:"):
            parts = line.split(',')
            # add 1 to turn number, because the mistake occurs on the move after
            # we will remove the rest of the SGF after the mistake (not including the mistake turn number)
            turn = int(parts[0].split(':')[1].strip()) + 1
            correct_moves = line.split("moves:")[1].strip()
            correct_moves_dictionary[turn] = correct_moves

    return correct_moves_dictionary


# Add comments of "CORRECT" to end of SGF file for glift, and "Incorrect - This was the actual move played in the game!" for the move played in the actual game
def inject_sgf_copy(file_path, correct_moves_dictionary):
    with open(file_path, 'rb') as file:
        sgf_content_bytes = file.read()

    original_sgf_game = sgf.Sgf_game.from_bytes(sgf_content_bytes)
    # dynamically get the board size
    board_size = original_sgf_game.get_size()
    sgf_content = sgf_content_bytes.decode('utf-8')

    # create new copy of this blank SGF up to first move in the move_number with mistake (include it)
    # loop through dictionary's keys, for each key, create a copy of an SGF that includes moves up to and including that move
    for key in correct_moves_dictionary:
        index = sgf_content.find(';')
        # each key in the dictionary is an integer representing the move where the mistake was made
        # this key has values of the correct moves
        for _ in range(key):
            # find method 2nd argument takes in the starting index for the search, so when we do
            # index + 1, this starts the search just after the current index of the semicolon that was found in the previous loop
            index = sgf_content.find(';', index + 1)
        # save the value of this last index so we can add an opening parenthesis in our final sgf format without
        # index getting a new value lower down in our code (index number will be the last ; for our last move)
        semicolon_index = index
        # Extracting the player's color from the mistake move and storing it
        color = sgf_content[index + 1]
        # index of closing BRACKET for specified move
        index = sgf_content.find(']', index)
        # slice and grab the first half of the sgf at that index + 1 (for move 35 in our example, index is at 397)
        # then add a comment saying that this move is incorrect and it was the move played in the actual game
        new_sgf_content = sgf_content[:semicolon_index] + \
            "\n(" + sgf_content[semicolon_index:index + 1] + \
            "C[Incorrect - This was the actual move played in the game!])"

        correct_moves = correct_moves_dictionary[key].split(', ')
        correct_comments = []

        for move in correct_moves:
            # This should dynamically add 19 here, not manually input it
            sgf_move = convert_to_sgf(move, board_size)
            correct_comments.append(
                '(;{}[{}]C[CORRECT])'.format(color, sgf_move))

        # Reverse the order of the comments, so that glift uses lower numbers for the more preferred AI moves
        correct_comments.reverse()

        # Final content needs to add the correct move comments at the end of the file, then include an extra closing )
        # The last comment line of the SGF always needs to have two ))
        final_sgf_content = new_sgf_content + \
            '\n' + '\n'.join(correct_comments) + ')'

        # write each file to a new name, which is given by a combination of the file path and the key (turn number)
        output_filename = generate_output_filename(file_path, key)
        with open(output_filename, 'w') as f:
            f.write(final_sgf_content)


input_sgf = "backend/glift/testSgfsToConvert/adding_random_comments_to_arthur_game_for_testing.sgf"
katago_output_path = "katago/text_Outputs/mistake_move_numbers_output15_4_16_mistakes.txt"
correct_moves = process_katago_output(katago_output_path)
cleaned_sgf_path = clean_sgf(input_sgf)
inject_sgf_copy(cleaned_sgf_path, correct_moves)
