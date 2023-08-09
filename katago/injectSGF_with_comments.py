# Inject SGF with comment so glift can determine if the puzzle is right or wrong

# Steps:

# 0. Read from the SGF, then write stuff to it at specific points (mistake move numbers, and comments at the end)

# 1. Add ( in front of the move number where we need a comment for the correct move, this will be a branch
# Ex. if move 3 is where the player made the mistake, we need to add the ( in front of the ; symbol for that move

# 2. Inject this format at the very bottom of the file, after the last )

# (;B[jp]C[CORRECT])
# (;B[ip]C[CORRECT]))

# 2a. If there's only 1 comment, it still needs ))
# 2b. We need to reconvert the KataGo coordinate output back to the SGF output for the moves, ex. [jp]

# 3. Create an html page with the injected javascript in it, remember to set the initialPosition: property value
# to be one move before the puzzle happens.

# Ex. If move 3 is the mistake, we need to do this (go one move before the mistake).  initialPosition: 2

def injectSGF(mistake_moves, correct_moves, comment):

  # grab the SGFs from the same place we grabbed them from to analyze, in this case, the uploads folder
  sgf_folder_path = 'backend/uploads'
