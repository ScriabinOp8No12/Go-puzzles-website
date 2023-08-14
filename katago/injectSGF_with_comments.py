import os
from sgfmill import sgf

def generate_cleaned_filename(original_sgf_name):
    directory, filename_with_extension = os.path.split(original_sgf_name)
    filename, extension = os.path.splitext(filename_with_extension)
    cleaned_filename = os.path.join(directory, f"cleaned_{filename}{extension}")
    return cleaned_filename

def generate_output_filename(original_sgf_name, move_number):
    # Folder to save the files to
    output_folder = 'backend/glift/puzzle_outputs_for_glift3'

    # Create the folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Extract the original filename without extension
    filename, extension = os.path.splitext(os.path.basename(original_sgf_name))

    # Combine the folder, original filename, and move number to create the new filename
    output_filename = os.path.join(output_folder, f"{filename}_move_{move_number}{extension}")

    return output_filename

def clean_sgf(input_file_path):
    with open(input_file_path, 'r', encoding='utf-8') as file:
        sgf_text = file.read()
    game = sgf.Sgf_game.from_string(sgf_text)
    cleaned_sgf = []

    # Add root properties
    cleaned_sgf.append("(")
    root_node = game.get_root()
    cleaned_sgf.append(";")
    for prop, values in root_node.get_raw_property_map().items():
        # exclude comments, game comment, good for black/white, add black/white stones, add empty (delete move in branch), triangle and square symbol
        if prop not in ['C', 'GC', 'GB', 'GW', 'AB', 'AW', 'AE', 'TR', 'SQ' ]:
            for value in values:
                cleaned_sgf.append(f"{prop}[{value.decode('utf-8')}]")  # Decode bytes object

    # Add main branch nodes
    node = root_node
    while node:
        if node:  # Check if node has children
            child = node[0]  # Consider only the first child (main branch)
            cleaned_sgf.append(";")
            for prop, values in child.get_raw_property_map().items():
                # exclude comments, game comment, good for black/white, add black/white stones, triangle and square symbol, add empty (delete move in branch)
                if prop not in ['C', 'GC', 'GB', 'GW', 'AB', 'AW', 'TR', 'SQ', 'AE']:
                    for value in values:
                        cleaned_sgf.append(f"{prop}[{value.decode('utf-8')}]")  # Decode bytes object
            node = child
        else:
            node = None

    cleaned_sgf.append(")")

    cleaned_sgf_str = "".join(cleaned_sgf)
    # print(cleaned_sgf_str)  # Print the cleaned SGF string

    cleaned_filename = generate_cleaned_filename(input_file_path)
    with open(cleaned_filename, 'w', encoding='utf-8') as file:
        file.write(cleaned_sgf_str)

    return cleaned_filename

# Convert KataGo solution coordinates into sgf coordinates
def convert_to_sgf(coord, board_size):

    col, row = coord[0], int(coord[1:])
    x = ord(col) - ord('A')
    if col > 'I':
        x -= 1
    y = board_size - row

    sgf_col = chr(ord('a') + x)
    sgf_row = chr(ord('a') + y)
    return sgf_col + sgf_row

def process_katago_output(output):
    lines = output.strip().split("\n")
    # {turn#: coordinates}
    # mistake_moves = {}
    correct_moves_dictionary = {}

    for line in lines:
        if line.startswith("Turn:"):
            parts = line.split(',')
            # add 1 to turn number, and that's the mistake move that we need to remove every line in the SGF after that
            turn = int(parts[0].split(':')[1].strip()) + 1
            # print("turn: ", turn)

            correct_moves = line.split("moves:")[1].strip()
            # print(correct_moves)

            correct_moves_dictionary[turn] = correct_moves
    # print(correct_moves_dictionary)

    return correct_moves_dictionary

def inject_sgf_copy(file_path, correct_moves_dictionary):
    with open(file_path, 'rb') as file:
        sgf_content_bytes = file.read()

    original_sgf_game = sgf.Sgf_game.from_bytes(sgf_content_bytes)
    # dynamically get the board size
    board_size = original_sgf_game.get_size()
    sgf_content = sgf_content_bytes.decode('utf-8')

    # create new copy of this blank SGF up to first move in the move_number with mistake (include it)
    # loop through dictionary's keys, for each key, create a copy of an SGF that includes moves up to and including that number
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
        # print(color)
        # index of closing bracket for specified move
        index = sgf_content.find(']', index)
        # slice and grab the first half of the sgf at that index + 1 (for move 35 in our example, index is at 397)
        # then add a comment saying that this move is incorrect and it was the move played in the actual game
        new_sgf_content = sgf_content[:semicolon_index] + "(" + sgf_content[semicolon_index:index + 1] + "C[Incorrect - This was the actual move played in the game!])"
        # print(new_sgf_content)

        correct_moves = correct_moves_dictionary[key].split(', ')
        correct_comments = []

        for move in correct_moves:
            # This should dynamically add 19 here, not manually input it
            sgf_move = convert_to_sgf(move, board_size)
            correct_comments.append('(;{}[{}]C[CORRECT])'.format(color, sgf_move))

        # Reverse the order of the comments, so that glift has lower numbers for the slightly more preferred AI moves
        correct_comments.reverse()

        # Final content needs to add the correct move comments at the end of the file, then include an extra closing )
        # The last comment line of the SGF always needs to have two ))
        final_sgf_content = new_sgf_content + '\n' + '\n'.join(correct_comments) + ')'

        # write each file to a new name, which is given by a combination of the file path and the key (turn number)
        output_filename = generate_output_filename(file_path, key)
        with open(output_filename, 'w') as f:
            f.write(final_sgf_content)


# Example usages

# VERIFY BELOW BLANK SGF SENT IN ACTUALLY WORKS WITH GLIFT
# input_sgf = "backend/glift/arthur_game_blank.sgf"
# ------------------------------------------------------------
# input_sgf = "backend/glift/random_comments_added_arthur_testing.sgf"
# input_sgf = "random_comments_and_branches_added_arthur_testing.sgf"

katago_output = """
Moves 0 - 50 moves (Opening):
Turn: 34, Points lost on next move: 6.5, Correct moves: J4
Turn: 30, Points lost on next move: 3.5, Correct moves: K4, C18, S2, O6, R3, P6
Turn: 38, Points lost on next move: 2.9, Correct moves: S5, E4, E3, R4, C18
Moves 51 - 100 moves (Early middlegame):
Turn: 92, Points lost on next move: 20.8, Correct moves: N8
Turn: 93, Points lost on next move: 16.8, Correct moves: N8
Turn: 90, Points lost on next move: 9.1, Correct moves: O9
Turn: 95, Points lost on next move: 7.0, Correct moves: L9
Turn: 78, Points lost on next move: 7.0, Correct moves: M13
Moves 101 - 150 moves (Mid middlegame):
Turn: 126, Points lost on next move: 67.1, Correct moves: G10, K10, Q11, R12
Turn: 127, Points lost on next move: 58.0, Correct moves: K7
Turn: 121, Points lost on next move: 30.8, Correct moves: F10
Turn: 118, Points lost on next move: 26.4, Correct moves: F8
Turn: 101, Points lost on next move: 24.3, Correct moves: J10
Moves 151 - end moves (Late middlegame and endgame):
"""

input_sgf = "backend/glift/adding_random_comments_to_arthur_game_for_testing.sgf"
correct_moves = process_katago_output(katago_output)

# Clean the SGF file and get the path to the cleaned file
cleaned_sgf_path = clean_sgf(input_sgf)

# Inject the correct moves into the cleaned SGF file
inject_sgf_copy(cleaned_sgf_path, correct_moves)
