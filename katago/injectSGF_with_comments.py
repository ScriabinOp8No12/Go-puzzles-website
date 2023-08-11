# Inject SGF with comment so glift can determine if the puzzle is right or wrong

# Steps:

# 0. Read from the SGF, then write stuff to it at specific points (mistake move numbers, and comments at the end)

# 1. Add ( in front of the move number where we need a comment for the correct move, this will be a branch
# Ex. if move 3 is where the player made the mistake, we need to add the ( in front of the ; symbol for that move

# 2. Inject this format at the very bottom of the file, after the last )
# We can add them all in order at the end, then reverse the order of the comments at the very end

# (;B[jp]C[CORRECT])
# (;B[ip]C[CORRECT]))

# 2a. If there's only 1 comment, it still needs )) so basically the first comment we add will be in this format (move info and C[CORRECT]))
# 2b. We need to reconvert the KataGo coordinate output back to the SGF output for the moves, ex. [jp]

# Need to reverse this function below, which converted SGF formatting of moves to KataGo formatting of moves:

  # Convert coordinates to KataGo 1 line JSON dictionary format
    # def convert_coord(coord):
    #     x, y = coord
    #     col = chr(ord('A') + y)
    #     if col >= 'I':
    #         col = chr(ord(col) + 1)
    #     row = x + 1
    #     return col + str(row)


# Next steps:

# 3. Create an html page with the injected javascript in it, remember to set the initialPosition: property value
# to be one move before the puzzle happens.

# Ex. If move 3 is the mistake, we need to do this (go one move before the mistake).  initialPosition: 2

# Works, but is hard coded to 19 by 19 board
# def convert_to_sgf(coord):
#     col, row = coord[0], int(coord[1:])
#     x = ord(col) - ord('A')
#     if col > 'I':
#         x -= 1
#     y = 19 - row

#     sgf_col = chr(ord('a') + x)
#     sgf_row = chr(ord('a') + y)
#     return sgf_col + sgf_row

def convert_to_sgf(kata_coord):

  col, row_str = kata_coord[0], kata_coord[1:]
  row = int(row_str)

  max_row = row

  ord_col = ord(col)
  if ord_col >= ord('I'):
    ord_col += 1

  sgf_col = chr(ord_col)
  sgf_col = sgf_col.lower()

  y = max_row - row
  sgf_row = chr(ord('A') + y)
  sgf_row = sgf_row.lower()

  return sgf_col + sgf_row

kata_coord = "D16"
col_letter, row_letter = convert_to_sgf(kata_coord)
print(col_letter, row_letter)


# def process_katago_output(output):
#     lines = output.strip().split("\n")
#     mistake_moves = []
#     correct_moves_list = []

#     for line in lines:
#         if line.startswith("Turn:"):
#             parts = line.split(',')
#             # should be +1 instead of -1 right?
#             turn = int(parts[0].split(':')[1].strip()) + 1
#             correct_moves = parts[2].split(':')[1].strip().split(', ')
#             print("correct_moves: ", correct_moves)
#             mistake_moves.append(turn)
#             correct_moves_list.append(correct_moves)

#     return mistake_moves, correct_moves_list

# def inject_sgf(file_path, mistake_moves, correct_moves_list):
#     with open(file_path, 'r') as file:
#         sgf_content = file.read()

#     mistake_moves_with_color = []

#     for move_number in mistake_moves:
#         index = sgf_content.find(';')
#         for _ in range(move_number):
#             index = sgf_content.find(';', index + 1)

#         color = sgf_content[index + 1]
#         mistake_moves_with_color.append((move_number, color))
#         sgf_content = sgf_content[:index] + '(' + sgf_content[index:]

#     correct_comments = []
#     last_color_added = None

#     # Loop through the mistakes and correct moves in the original order
#     for (move_number, color), correct_moves in list(zip(mistake_moves_with_color, correct_moves_list)):
#         for move in correct_moves:
#             correct_move = convert_to_sgf(move)

#             # If it's the first comment of that color, it gets two )), otherwise one )
#             if color != last_color_added:
#                 comment_format = '))'
#             else:
#                 comment_format = ')'

#             correct_comments.append('(;{}[{}{}]C[CORRECT]{}'.format(color, correct_move[1], correct_move[0], comment_format))
#             last_color_added = color

#     correct_comments.reverse()  # Reverse the correct comments to be in the original order
#     sgf_content += '\n'.join(correct_comments)

#     with open(file_path, 'w') as file:
#         file.write(sgf_content)


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

# process_katago_output(katago_output)

# file_path = 'katago/injection_sgf_test/arthur_game_inject_comment copy 4.sgf'

# mistake_moves, correct_moves_list = process_katago_output(katago_output)
# inject_sgf(file_path, mistake_moves, correct_moves_list)

# ------------------------

# def inject_sgf(file_path, mistake_moves, correct_moves_list):
#     with open(file_path, 'r') as file:
#         sgf_content = file.read()

#     mistake_moves_with_color = []

#     for move_number in mistake_moves:
#         index = sgf_content.find(';')
#         for _ in range(move_number):
#             index = sgf_content.find(';', index + 1)

#         # Extracting the player's color from the move and storing it
#         color = sgf_content[index + 1]
#         mistake_moves_with_color.append((move_number, color))
#         sgf_content = sgf_content[:index] + '(' + sgf_content[index:]

#     correct_comments = []
#     previous_color = None
#     comment_format = ''

#     # Loop through the mistakes and correct moves in reverse order
#     for (move_number, color), correct_moves in reversed(list(zip(mistake_moves_with_color, correct_moves_list))):
#         for move in correct_moves:
#             correct_move = convert_to_sgf(move)

#             # If the previous move's color is the same, use only one closing parenthesis
#             if previous_color == color:
#                 comment_format = ')'
#             else:
#                 comment_format = '))'

#             correct_comments.append('(;{}[{}{}]C[CORRECT]{}'.format(color, correct_move[1], correct_move[0], comment_format))
#             previous_color = color

#     # To get the final two closing parentheses
#     # correct_comments[-1] = correct_comments[-1].rstrip(')') + '))'

#     # Reverse the correct comments to be in the original order
#     # correct_comments.reverse()
#     sgf_content += '\n'.join(correct_comments)

#     with open(file_path, 'w') as file:
#         file.write(sgf_content)
