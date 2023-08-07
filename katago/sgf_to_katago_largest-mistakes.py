import time
startTime = time.time()

import os
import json
import subprocess
from parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves
from sgf2OneLineJSON_ALL_MOVES import sgf_to_one_line_json

# Set the path to the jsonDictionaryOutput folder
json_folder_path = 'katago/json_Dict_ALL_TURNS'

# Set the command to run KataGo
katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'

# Set the path to the output text file
output_file_path = 'katago/text_Outputs/mistake_move_numbers_output15_4_16_mistakes_2.txt'

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
        # stdout stands for standard output, it's the output we are getting from KataGo after we run the KataGo analysis
        p = subprocess.Popen(katago_command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout_data, stderr_data = p.communicate(input=json.dumps(json_dict).encode('utf-8'))

        # Define a function to process a given range of turns, we pass in the stdout_data we got from KataGo above
        # stderr_data is standard error data
        def process_range(stdout_data, n, start, end):
            # This function should find the top n mistakes in the range from start to end (inclusive),
            # along with the corresponding correct moves from the turn before each mistake.
            # It should return a list of tuples, each of the form (turn, points_lost, correct_moves),
            # where turn is the turn number, points_lost is the number of points lost on that turn,
            # and correct_moves is a list of the correct moves from the previous turn.

            # This is known as "value unpacking" since our function will return 2 lists of tuples, unpacking = destructuring in JavaScript
            mistakes, correct_moves = find_mistakes_and_correct_moves(stdout_data, n, start, end)

            # Assuming that mistakes and correct_moves are lists of tuples of the form (turn, value),
            # where turn is the turn number and value is the points lost or the correct moves, respectively,
            # we first need to sort mistakes in descending order of points lost
            # lambda functions are anonymous functions, which are equivalent to anonymous functions in JavaScript!
            # We are sorting the list by the 2nd element of each tuple, which in this case is the points lost value of the tuple -> (mistakes, points lost)
            mistakes.sort(key=lambda x: x[1], reverse=True)

            # Then we create a dictionary mapping turn numbers to correct moves,
            # Use dictionary comprehension (similar to list comprehension),
            # dictionary name = {<key>: <value> for (tuple unpacking) in list of tuples}
            correct_moves_dict = {turn: moves for turn, moves in correct_moves}

            # Now we can create our result list
            result = []
            for turn, points in mistakes[:n]:
                # We use the get method to get the correct moves for the previous turn,
                # or an empty list if there were no correct moves
                moves = correct_moves_dict.get(turn-1, [])
                result.append((turn, points, moves))

            return result

        # Define the ranges to process, specifying the number of mistakes to grab from each range, sorted in descending order from greatest to smallest
        ranges = [(0, 50, 3, 'Opening'), (51, 100, 5, 'Early middlegame'), (101, 150, 5, 'Mid middlegame'), (151, float('inf'), 3, 'Late middlegame and endgame')]

        # Process each range
        for start, end, n, name in ranges:
            data = process_range(stdout_data.decode('utf-8'), n, start, end)
            end_text = "end" if end == float('inf') else str(end)
            # Write the data to the output file, ensuring that the puzzle starts on the previous turn before the mistake
            output_file.write(f"Moves {start} - {end_text} moves ({name}):\n")
            for turn, points, moves in data:
                output_file.write(f"Turn: {turn-1}, Points lost on next move: {points:.1f}, Correct moves: {', '.join(moves)}\n")


endTime = time.time()
print("time to execute code: ", endTime-startTime)
