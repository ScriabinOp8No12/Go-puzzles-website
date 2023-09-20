import time
startTime = time.time()

import os
import subprocess
import json
from parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves
from sgf2OneLineJson_all_moves import sgf_to_one_line_json

sgf_folder_path = "katago/positions_both_test"
katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'
output_folder = "katago/text_Outputs_both_REFACTORED2"

def process_range(stdout_data, n, start, end, output_file, json_string):

    mistakes, correct_moves = find_mistakes_and_correct_moves(stdout_data, n, start, end)
    if not mistakes:
        if correct_moves:
            katago_input_dictionary = json.loads(json_string)
            next_player = katago_input_dictionary["initialPlayer"].upper()
            moves = correct_moves[0][1]
            output_file.write(f"Turn: 0, Player: {next_player}, Correct moves: {', '.join(moves)}\n")
        return []

    else:
        mistakes.sort(key=lambda x: x[1], reverse=True)
        correct_moves_dict = {turn: moves for turn, moves in correct_moves}
        result = []
        for turn, points in mistakes[:n]:
            moves = correct_moves_dict.get(turn-1, [])
            result.append((turn, points, moves))
        return result

def define_ranges(stdout_data, startMove, output_file, json_string):

    ranges = [(startMove, 50, 3, 'Opening'), (51, 100, 5, 'Early middlegame'), (101, 150, 5, 'Mid middlegame'), (151, float('inf'), 3, 'Late middlegame and endgame')]

    for start, end, n, name in ranges:
        data = process_range(stdout_data.decode('utf-8'), n, start, end, output_file, json_string)

        if not data:
            continue
        end_text = "end" if end == float('inf') else str(end)

        output_file.write(f"Moves {start} - {end_text} moves ({name}):\n")
        for turn, points, moves in data:
            output_file.write(f"Turn: {turn-1}, Points lost on next move: {points:.1f}, Correct moves: {', '.join(moves)}\n")

for filename in os.listdir(sgf_folder_path):
    file_path = os.path.join(sgf_folder_path, filename)

    if not os.path.exists(output_folder):
      os.makedirs(output_folder)

    output_file_name = filename.split('.')[0] + '_mistakes.txt'
    output_file_path = os.path.join(output_folder, output_file_name)

    json_string = sgf_to_one_line_json(file_path)

    with open(output_file_path, 'w') as output_file:
        try:
            p = subprocess.Popen(katago_command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            stdout_data, stderr_data = p.communicate(input=json_string.encode('utf-8'))

        except Exception as e:
            print(f"Error processing file {filename}: {e}")

        katago_output_dictionary = json.loads(json_string)

        if not katago_output_dictionary["moves"]:
            startMove = 0
        else:
            startMove = 1

        define_ranges(stdout_data, startMove, output_file, json_string)

endTime = time.time()
print("time to execute code: ", endTime-startTime)
