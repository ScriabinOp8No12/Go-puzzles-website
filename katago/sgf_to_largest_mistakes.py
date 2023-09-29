import time
import subprocess
import json
# Absolute import instead of relative import is necessary otherwise pytest can't find the module,
# but then pythonia throws an error "can't find module: katago"
# from katago.parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves
from parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves

katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'

def process_range(stdout_data, n, start, end):
    mistakes, correct_moves = find_mistakes_and_correct_moves(stdout_data, n, start, end)
    results = []
    if mistakes:
        # mistakes.sort(key=lambda x: x[1], reverse=True) # If we want to sort the mistakes in reverse order by the 2nd column (mistake amount)
        correct_moves_dict = {turn: moves for turn, moves in correct_moves}
        for turn, points in mistakes[:n]:
            moves = correct_moves_dict.get(turn-1, [])
            formatted_correct_moves = {}
            for move, pv in moves:
                formatted_correct_moves[move] = pv
            results.append({
                "move": turn,
                "points_lost_on_next_move": round(points, 1),
                "correct_moves": formatted_correct_moves
            })
    return results

def define_ranges(stdout_data, startMove):
    # 3 mistakes in moves 1-50, 5 mistakes in moves 51-100, 5 mistakes in moves 101-150, and 3 mistakes in moves 151 to the end of the game
    ranges = [(startMove, 50, 3, 'Opening'), (51, 100, 5, 'Early middlegame'), (101, 150, 5, 'Mid middlegame'), (151, float('inf'), 3, 'Late middlegame and endgame')]
    results = []
    for start, end, n, _ in ranges:
        data = process_range(stdout_data.decode('utf-8'), n, start, end)
        if not data:
            continue
        data.sort(key=lambda x: x['move'])  # Sort the data by move number
        results.extend(data)  # Directly extend the results list with the processed data
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
