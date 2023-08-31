import time
startTime = time.time()

import os
import subprocess
import json
from parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves
from sgf2OneLineJson_all_moves import sgf_to_one_line_json

# sgf_folder_path = 'katago/positionsWithMoveOrder'
# sgf_folder_path = 'katago/positions_test'
# sgf_folder_path = 'katago/positions'
sgf_folder_path = "katago/positions_both_test"

# Command to run KataGo (this will be a subprocess)
katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'

# output_folder = "katago/text_Outputs_move_order"
output_folder = "katago/text_Outputs_both_REFACTORED2"

# Process a given range of turns, we pass in the stdout_data we get from KataGo's analysis engine
def process_range(stdout_data, n, start, end, output_file, json_string):
    # This function finds the top n mistakes in the range from start to end (inclusive), along with the corresponding correct moves from the turn before each mistake.
    # It should return a list of tuples, each of the form (turn, points_lost, correct_moves), where turn is the turn number, points_lost is the number of points lost on that turn,
    # and correct_moves is a list of the correct moves from the previous turn.

    # Unpack the 2 lists of tuples, unpacking = destructuring in JavaScript
    mistakes, correct_moves = find_mistakes_and_correct_moves(stdout_data, n, start, end)

    # If the mistakes list is empty, then we change the format of the text output to be a single line, instead of multiple lines of turns
    if not mistakes:
        if correct_moves:
            # grab the initial player value from the returned result object of the imported function: sgf_to_one_line_json
            katago_input_dictionary = json.loads(json_string)
            next_player = katago_input_dictionary["initialPlayer"].upper()
            # print("mistakes, correct_moves: ", mistakes, correct_moves)
            moves = correct_moves[0][1]
            output_file.write(f"Turn: 0, Player: {next_player}, Correct moves: {', '.join(moves)}\n")
        return []

    else:
        # Assuming that mistakes and correct_moves are lists of tuples of the form (turn, value),
        # where turn is the turn number and value is the points lost or the correct moves, respectively,
        # we first need to sort mistakes in descending order of points lost
        # lambda functions are anonymous functions, which are equivalent to anonymous functions in JavaScript
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


def define_ranges(stdout_data, startMove, output_file, json_string):

    # Define the ranges to process, specifying the number of mistakes to grab from each range, sorted in descending order from greatest to smallest
    # ranges = [(0, 50, 3, 'Opening'), (51, 100, 5, 'Early middlegame'), (101, 150, 5, 'Mid middlegame'), (151, float('inf'), 3, 'Late middlegame and endgame')]
    ranges = [(startMove, 50, 3, 'Opening'), (51, 100, 5, 'Early middlegame'), (101, 150, 5, 'Mid middlegame'), (151, float('inf'), 3, 'Late middlegame and endgame')]

    # Process each range
    for start, end, n, name in ranges:
        data = process_range(stdout_data.decode('utf-8'), n, start, end, output_file, json_string)
        # if data is empty then skip to the next iteration
        if not data:
            continue
        end_text = "end" if end == float('inf') else str(end)
        # Write the data to the output file, ensuring that the puzzle starts on the previous turn before the mistake
        output_file.write(f"Moves {start} - {end_text} moves ({name}):\n")
        for turn, points, moves in data:
            output_file.write(f"Turn: {turn-1}, Points lost on next move: {points:.1f}, Correct moves: {', '.join(moves)}\n")


# Iterate over each file in the SGF files folder
for filename in os.listdir(sgf_folder_path):

    # Construct the full path to the file
    file_path = os.path.join(sgf_folder_path, filename)

    # Check if folder exists, if not create it
    if not os.path.exists(output_folder):
      os.makedirs(output_folder)

    # Set the path to the output text file for the current SGF, and add mistakes.txt to the end of it
    output_file_name = filename.split('.')[0] + '_mistakes.txt'  # This will give names like puzzle8_7_20_23_mistakes.txt
    output_file_path = os.path.join(output_folder, output_file_name)

    # Convert the SGF to a one line JSON string
    json_string = sgf_to_one_line_json(file_path)
    # print("json_string: ", json_string)

    # Open the current output text file for writing
    with open(output_file_path, 'w') as output_file:
        # wrap KataGo subprocess in a try catch block
        try:
            # Pass the one line JSON string to KataGo for analysis
            # stdout stands for standard output, it's the output we are getting from KataGo after we run the KataGo analysis, stderr_data is standard error data
            p = subprocess.Popen(katago_command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            # stdout_data, stderr_data = p.communicate(input=json.dumps(json_dict).encode('utf-8'))
            stdout_data, stderr_data = p.communicate(input=json_string.encode('utf-8'))

        # ********** NEED TO SHOW ERROR ON FRONTEND LATER ****************
        except Exception as e:
            print(f"Error processing file {filename}: {e}")

        # If the moves property is an empty list, then that means there was no move order, so we simply set our starting range to moves 0 in the (0, 50) range instead of from (1, 50)
        # First convert the json string to a Python dictionary so we can key into the "moves" property to see if it contains an empty list or not
        katago_output_dictionary = json.loads(json_string)

        if not katago_output_dictionary["moves"]:
            startMove = 0
        else:
            startMove = 1

        define_ranges(stdout_data, startMove, output_file, json_string)

endTime = time.time()
print("time to execute code: ", endTime-startTime)
