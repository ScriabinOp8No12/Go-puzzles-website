import time
startTime = time.time()

import os
import json
import subprocess
from parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves

# Set the path to the jsonDictionaryOutput folder
json_folder_path = 'katago/json_Dict_ALL_TURNS'

# Set the command to run KataGo
katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'

# Set the path to the output text file
output_file_path = 'katago/text_Outputs/mistake_move_numbers_output15_4_16_mistakes.txt'

# Open the output text file for writing
with open(output_file_path, 'w') as output_file:
    # Iterate over each file in the jsonDictionaryOutput folder
    for filename in os.listdir(json_folder_path):
        # Construct the full path to the file
        file_path = os.path.join(json_folder_path, filename)

        # Open the file and read its contents
        with open(file_path, 'r') as f:
            file_contents = f.read()
            print(file_contents)
        # Load the JSON dictionary from the file contents
        json_dict = json.loads(file_contents)

        # Pass the JSON dictionary to KataGo for analysis
        p = subprocess.Popen(katago_command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout_data, stderr_data = p.communicate(input=json.dumps(json_dict).encode('utf-8'))

        # Call the find_mistakes function and pass it the stdout_data from KataGo as an argument for the katago_output
        # the 2nd arg is the number of mistakes to grab, and the 3rd to 4th arg are the move ranges to find mistakes from
        first_50_mistakes, first_50_correct_moves = find_mistakes_and_correct_moves(stdout_data.decode('utf-8'), 3, 0, 50)
        next_50_100_mistakes, next_50_100_correct_moves = find_mistakes_and_correct_moves(stdout_data.decode('utf-8'), 5, 51, 100)
        next_100_150_mistakes, next_100_150_correct_moves = find_mistakes_and_correct_moves(stdout_data.decode('utf-8'), 5, 101, 150)
        last_mistakes, last_correct_moves = find_mistakes_and_correct_moves(stdout_data.decode('utf-8'), 3, 151, float('inf'))

        # Write the mistakes and correct moves to the output text file
        output_file.write("Moves 0 - 50 moves (Opening):\n")
        for turn, points in first_50_mistakes:
            output_file.write(f"Turn: {turn}, Points lost: {points:.1f}\n")
        for turn, moves in first_50_correct_moves:
            output_file.write(f"Turn: {turn}, Correct moves: {', '.join(moves)}\n")

        output_file.write("Moves 51 - 100 moves (Early middlegame):\n")
        for turn, points in next_50_100_mistakes:
            output_file.write(f"Turn: {turn}, Points lost: {points:.1f}\n")
        for turn, moves in next_50_100_correct_moves:
            output_file.write(f"Turn: {turn}, Correct moves: {', '.join(moves)}\n")

        output_file.write("Moves 101 - 150 moves (Mid middlegame):\n")
        for turn, points in next_100_150_mistakes:
            output_file.write(f"Turn: {turn}, Points lost: {points:.1f}\n")
        for turn, moves in next_100_150_correct_moves:
            output_file.write(f"Turn: {turn}, Correct moves: {', '.join(moves)}\n")

        output_file.write("Moves after 150 (Late middlegame and endgame):\n")
        for turn, points in last_mistakes:
            output_file.write(f"Turn: {turn}, Points lost: {points:.1f}\n")
        for turn, moves in last_correct_moves:
            output_file.write(f"Turn: {turn}, Correct moves: {', '.join(moves)}\n")

endTime = time.time()
print("time to execute code: ", endTime-startTime)
