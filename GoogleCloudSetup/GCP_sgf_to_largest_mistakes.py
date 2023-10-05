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

    # Determine the number of puzzles to generate based on the available mistakes
    num_puzzles = min(n, len(mistakes))
    # if mistakes:
        # mistakes.sort(key=lambda x: x[1], reverse=True) # If we want to sort the mistakes in reverse order by the 2nd column (mistake amount)
    correct_moves_dict = {turn: moves for turn, moves in correct_moves}
    # for turn, points in mistakes[:n]:
    for turn, points in mistakes[:num_puzzles]:
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
    # 3 mistakes in moves 1-50, 3 mistakes in moves 51-100, 3 mistakes in moves 101-150, and 3 mistakes in moves 151 to the end of the game
    ranges = [(startMove, 50, 3, 'Opening'), (51, 100, 3, 'Early middlegame'), (101, 150, 3, 'Mid middlegame'), (151, float('inf'), 3, 'Late middlegame and endgame')]
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

#  ****** Testing locally on GPU VM, should probably setup pytest working on the VM instead

test_json_string = '{"id":"sgfTest3","rules":"chinese","komi":7.5,"boardXSize":19,"boardYSize":19,"initialPlayer":"W","analyzeTurns":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"initialStones":[],"moves":[["B","R16"],["W","D4"],["B","Q3"],["W","D16"],["B","C17"],["W","D17"],["B","C16"],["W","C15"],["B","B15"],["W","B14"],["B","C14"],["W","D15"],["B","B13"],["W","B16"],["B","A14"],["W","B17"],["B","O17"],["W","R5"],["B","R8"],["W","P4"],["B","P3"],["W","O4"],["B","N2"],["W","M3"],["B","N3"],["W","N4"],["B","M4"],["W","L3"],["B","M5"],["W","S3"],["B","R2"],["W","S2"],["B","M2"],["W","L2"],["B","O3"],["W","P6"],["B","K4"],["W","J3"],["B","J4"],["W","H3"],["B","G5"],["W","F4"],["B","P8"],["W","O7"],["B","N9"],["W","S16"],["B","S15"],["W","R17"],["B","S17"],["W","Q16"],["B","R15"],["W","S18"],["B","T16"],["W","Q15"],["B","Q17"],["W","P17"],["B","R18"],["W","O16"],["B","P18"],["W","P16"],["B","N17"],["W","N16"],["B","M16"],["W","M15"],["B","L15"],["W","L14"],["B","L16"]]}'

# Run the analysis
json_analysis_results = run_katago_analysis(test_json_string)

print(json_analysis_results)
