import os
import re

# Set the directory containing the SGF files
sgf_dir = './backend/uploads'

# Get a list of all the SGF (now .txt) files in the directory
text_files = [f for f in os.listdir(sgf_dir)]

# Process each SGF file
for text_file in text_files:
    # Construct the full path to the text file
    text_path = os.path.join(sgf_dir, text_file)

    # Open the SGF file and read its contents
    with open(text_path, 'r') as f:
        text_data = f.read()

    # Process the text data below!

    # Regex for PB and PW properties (Player Black and Player White)
    black_player_match = re.search(r'PB\[([^\]]*)\]', text_data)
    white_player_match = re.search(r'PW\[([^\]]*)\]', text_data)

    # Extract Black and White player names
    black_player = black_player_match.group(1) if black_player_match else None
    white_player = white_player_match.group(1) if white_player_match else None

    # Regex for BR and WR properties (Black Rank and White Rank)
    rank_match = re.search(r'BR\[(.*?)\].*WR\[(.*?)\]', text_data, re.DOTALL)

    # Extract the black and white player's ranks
    black_rank = rank_match.group(1) if rank_match else "?"
    white_rank = rank_match.group(2) if rank_match else "?"

    # Regex for RE property (Result)
    result_match = re.search(r'RE\[([^\]]*)\]', text_data)

    # Extract the game result
    result = result_match.group(1) if result_match else "?"

    # Print the extracted information
    print("Black Player:", black_player, "------- ",
          "Black rank:", black_rank, "Result:", result)
    print("White Player:", white_player, "------- ",
          "White rank:", white_rank, "Result:", result)
