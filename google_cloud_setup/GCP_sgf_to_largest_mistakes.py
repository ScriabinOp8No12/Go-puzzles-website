import time
import subprocess
import json

# added GCP to match new python script name
from GCP_parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves

# Modified build command to not include .gz at the end of the model name, note that /cpp is in the openCL VM version (see commented out katago_command one line lower)
katago_command = '~/katago/KataGo/katago analysis -model ~/katago/models/kata1-b18c384nbt-s7529928448-d3667707199.bin -config ~/katago/KataGo/configs/analysis_example.cfg'

# katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s7529928448-d3667707199.bin -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'
# This line below works locally!
# katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'

def process_range(stdout_data, n, start, end):
    mistakes, correct_moves = find_mistakes_and_correct_moves(stdout_data, n, start, end)
    results = []

    # Create a list of "significant" mistakes (mistake over 1 point loss)
    significant_mistakes = [(turn, points) for turn, points in mistakes if points >= 1]

    # Reduce the number of puzzles to generate if there aren't enough significant mistakes
    num_puzzles = min(n, len(significant_mistakes))

    correct_moves_dict = {turn: moves for turn, moves in correct_moves}

    for turn, points in significant_mistakes[:num_puzzles]:
        moves = correct_moves_dict.get(turn-1, [])
        formatted_correct_moves = {}
        for move, pv in moves:
            formatted_correct_moves[move] = pv
        results.append({
            "move": turn, # Not turn - 1 anymore apparently
            "points_lost": round(points, 1), # Not points_lost_on_next_move anymore, it's points lost on the played move
            "correct_moves": formatted_correct_moves
        })

    return results

def define_ranges(stdout_data, startMove):
    ranges = [
        (startMove, 50, 3, 'Opening'),
        (51, 100, 3, 'Early middlegame'),
        (101, 150, 3, 'Mid middlegame'),
        (151, float('inf'), 3, 'Late middlegame and endgame')
    ]
    results = []
    for start, end, n, _ in ranges:
        data = process_range(stdout_data.decode('utf-8'), n, start, end)
        # Now we won't necessarily extend the results by the number of mistakes we wanted if there aren't enough significant ones
        results.extend(data)

    return results


def run_katago_analysis(json_string):
    startTime = time.time()
    try:
        p = subprocess.Popen(katago_command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout_data, _ = p.communicate(input=json_string.encode('utf-8'))
    except Exception as e:
        print(f"Error processing input: {e}")
        return None
    katago_output_dictionary = json.loads(json_string)
    # print("katago_output_dictionary: ", katago_output_dictionary)
    if not katago_output_dictionary["moves"]:
        startMove = 0
    else:
        startMove = 1

    analysis_results = define_ranges(stdout_data, startMove)

    # Serialize analysis_results to JSON format
    json_output = json.dumps(analysis_results, indent=4)

    endTime = time.time()
    print("time to execute code: ", endTime - startTime)
    return json_output
