import time
startTime = time.time()


import os
import json
import subprocess
from parse_katago_largest_point_mistakes import find_mistakes


# Set the path to the jsonDictionaryOutput folder
json_folder_path = 'katago/json_Dict_ALL_TURNS'

# Set the command to run KataGo
katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'

# Set the path to the output text file
output_file_path = 'katago/text_Outputs/mistake_move_numbers_output25_4_16_sort.txt'

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
        first_50 = find_mistakes(stdout_data.decode('utf-8'), 3, 0, 50)
        next_50_100 = find_mistakes(stdout_data.decode('utf-8'), 5, 51, 100)
        next_100_150 = find_mistakes(stdout_data.decode('utf-8'), 5, 101, 150)
        last = find_mistakes(stdout_data.decode('utf-8'), 3, 151, float('inf'))

        # Write the mistakes to the output text file
        output_file.write("Moves 0 - 50 moves (Opening):\n")
        for turn, points in first_50:
            output_file.write(f"Turn: {turn}, Points lost: {points:.1f}\n")

        output_file.write("Moves 51 - 100 moves (Early middlegame):\n")
        for turn, points in next_50_100:
            output_file.write(f"Turn: {turn}, Points lost: {points:.1f}\n")

        output_file.write("Moves 101 - 150 moves (Mid middlegame):\n")
        for turn, points in next_100_150:
            output_file.write(f"Turn: {turn}, Points lost: {points:.1f}\n")

        output_file.write("Moves after 150 (Late middlegame and endgame):\n")
        for turn, points in last:
            output_file.write(f"Turn: {turn}, Points lost: {points:.1f}\n")


endTime = time.time()
print("time to execute code: ", endTime-startTime)
