import os
import re

# Set the directory containing the SGF files
sgf_dir = './backend/uploads'

# Get a list of all the SGF files in the directory
sgf_files = [f for f in os.listdir(sgf_dir)]

# Process each SGF file
for sgf_file in sgf_files:
    # Construct the full path to the SGF file
    sgf_path = os.path.join(sgf_dir, sgf_file)

    # Open the SGF file and read its contents
    with open(sgf_path, 'r') as f:
        sgf_data = f.read()

    # Process the SGF data below!
    # ----------------------------------

    # Use regular expressions to search for the PB and PW properties (Player Black and Player White)
    black_match = re.search(r'PB\[([^\]]+)\]', sgf_data)
    white_match = re.search(r'PW\[([^\]]+)\]', sgf_data)

    # Extract the black and white player's names
    black_player = black_match.group(1)
    white_player = white_match.group(1)

    # Breaks on any special characters, almost nothing gets printed out...
    # it was fixed by converting the .sgf file to .txt instead!
    print("black: ", black_player)
    print("white: ", white_player)
