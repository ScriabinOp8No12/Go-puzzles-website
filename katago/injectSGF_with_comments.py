import re
from sgfmill import sgf

# def create_moves_only_sgf_copy(input_sgf, output_sgf):
#     # Read the original SGF file
#     with open(input_sgf, 'rb') as f:
#         sgf_data = f.read()

#     # Parse the SGF data
#     original_sgf_game = sgf.Sgf_game.from_bytes(sgf_data)
#     board_size = original_sgf_game.get_size()

#     # Read the original SGF file as text
#     with open(input_sgf, 'r') as f:
#         sgf_text_data = f.read()

#     # Extract only the moves using regular expressions
#     moves = re.findall(r';[BW]\[[a-z]+\]', sgf_text_data)
#     moves_only_sgf_data = f"(;FF[4]CA[UTF-8]GM[1]SZ[{board_size}]" + "".join(moves) + ")"

#     # print(moves_only_sgf_data)

#     # Write the moves-only SGF data to a new file
#     with open(output_sgf, 'w') as f:
#         f.write(moves_only_sgf_data)

# input_sgf = "backend/glift/aaron_game_with_comments.sgf"
# output_sgf = "backend/glift/aaron_game_with_no_comments.sgf"

# create_moves_only_sgf_copy(input_sgf, output_sgf)


# # Convert KataGo solution coordinates into sgf coordinates
def convert_to_sgf(coord, board_size):

    col, row = coord[0], int(coord[1:])
    x = ord(col) - ord('A')
    if col > 'I':
        x -= 1
    y = board_size - row

    sgf_col = chr(ord('a') + x)
    sgf_row = chr(ord('a') + y)
    return sgf_col + sgf_row

# kata_coord = "J4"
# col_letter, row_letter = convert_to_sgf(kata_coord, 19)
# print(col_letter, row_letter)

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

# Example usage
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

correct_moves_list = process_katago_output(katago_output)

def inject_sgf_copy(file_path, correct_moves_dictionary):
    with open(file_path, 'rb') as file:
        sgf_content_bytes = file.read()
    original_sgf_game = sgf.Sgf_game.from_bytes(sgf_content_bytes)
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

        # Extracting the player's color from the mistake move and storing it
        color = sgf_content[index + 1]
        # print(color)
        # index of closing bracket for specified move
        index = sgf_content.find(']', index)
        # slice and grab the first half of the sgf at that index + 1 (for move 35 in our example, index is at 397)
        # then add a comment saying that this move is incorrect and it was the move played in the actual game
        new_sgf_content = sgf_content[:index + 1] + "C[Incorrect - This was the actual move played in the game!])"
        # print(new_sgf_content)

        correct_moves = correct_moves_dictionary[key].split(', ')
        correct_comments = []

        for move in correct_moves:
            # This should dynamically add 19 here, not manually input it
            sgf_move = convert_to_sgf(move, board_size)
            correct_comments.append('(;{}[{}]C[CORRECT])'.format(color, sgf_move))

        final_sgf_content = new_sgf_content + '\n' + '\n'.join(correct_comments)
        print(final_sgf_content)

sgf_file = 'backend/glift/arthur_game_blank.sgf'

correct_moves = process_katago_output(katago_output)
inject_sgf_copy(sgf_file, correct_moves)
