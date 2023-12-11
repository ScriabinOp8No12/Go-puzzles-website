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
            "move": turn - 1, # Mistake occurs on this move, so we have to go back one move for the puzzle position
            "points_lost_on_next_move": round(points, 1),
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

test_json_string = '{"id":"sgfTest","rules":"japanese","komi":0.5,"boardXSize":13,"boardYSize":13,"initialPlayer":"W","analyzeTurns":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128],"initialStones":[["B","K10"]],"moves":[["W","C3"],["B","K4"],["W","D11"],["B","D2"],["W","C2"],["B","F3"],["W","L11"],["B","L10"],["W","M10"],["B","M9"],["W","N10"],["B","N9"],["W","M12"],["B","K7"],["W","K8"],["B","L8"],["W","K9"],["B","J8"],["W","J9"],["B","J7"],["W","J10"],["B","L9"],["W","K11"],["B","H9"],["W","H10"],["B","H4"],["W","L4"],["B","L5"],["W","M5"],["B","L3"],["W","L7"],["B","M7"],["W","L6"],["B","M4"],["W","M6"],["B","N6"],["W","N8"],["B","K6"],["W","M8"],["B","F8"],["W","G9"],["B","G8"],["W","H8"],["B","H7"],["W","H9"],["B","F9"],["W","E4"],["B","F10"],["W","F11"],["B","E6"],["W","F6"],["B","F5"],["W","E5"],["B","F7"],["W","D6"],["B","G6"],["W","E7"],["B","F6"],["W","E8"],["B","E9"],["W","D9"],["B","D10"],["W","C10"],["B","D8"],["W","E10"],["B","D7"],["W","G11"],["B","C6"],["W","D5"],["B","C5"],["W","D3"],["B","E2"],["W","E3"],["B","C7"],["W","B4"],["B","C4"],["W","D1"],["B","E1"],["W","F2"],["B","C1"],["W","F1"],["B","F4"],["W","G2"],["B","H2"],["W","G3"],["B","G4"],["W","H3"],["B","J3"],["W","D1"],["B","J1"],["W","B5"],["B","C9"],["W","D10"],["B","B6"],["W","B9"],["B","C8"],["W","A5"],["B","A6"],["W","B3"],["B","B7"],["W","A9"],["B","H1"],["W","G10"],["B","G1"],["W","B1"],["B","N5"],["W","N7"],["B","N4"],["W","A8"],["W","D4"],["W","A7"],["B","E7"],["W","B10"],["W","B8"],["W","J5"],["W","J4"],["B","K3"],["W","K5"],["B","L4"],["W","H6"],["B","H5"],["W","K1"],["B","J2"],["W","L1"],["B","J6"],["W","M2"],["W","M3"],["B","N3"]]}'
json_analysis_results = run_katago_analysis(test_json_string)
print(json_analysis_results)
