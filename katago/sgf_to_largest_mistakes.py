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

# test_json_string = '{"id":"sgfTest","rules":"japanese","komi":6.5,"boardXSize":19,"boardYSize":19,"initialPlayer":"W","analyzeTurns":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187],"initialStones":[],"moves":[["B","R16"],["W","D4"],["B","C16"],["W","R4"],["B","C3"],["W","C4"],["B","D3"],["W","F3"],["B","F2"],["W","Q16"],["B","Q17"],["W","R15"],["B","P16"],["W","Q15"],["B","R17"],["W","G2"],["B","E2"],["W","G4"],["B","E4"],["W","E3"],["B","B4"],["W","B5"],["B","B3"],["W","C6"],["B","P3"],["W","M3"],["B","R11"],["W","Q12"],["B","Q11"],["W","P11"],["B","P10"],["W","R12"],["B","Q5"],["W","R5"],["B","Q6"],["W","R7"],["B","Q7"],["W","R8"],["B","Q9"],["W","O11"],["B","O10"],["W","Q3"],["B","N11"],["W","O13"],["B","N14"],["W","E17"],["B","P15"],["W","P14"],["B","O14"],["W","P13"],["B","N13"],["W","S11"],["B","H17"],["W","D15"],["B","C15"],["W","D14"],["B","B13"],["W","H15"],["B","J15"],["W","H16"],["B","J16"],["W","J17"],["B","K17"],["W","J18"],["B","K18"],["W","H18"],["B","G17"],["W","G18"],["B","H14"],["W","G16"],["B","Q2"],["W","R2"],["B","E5"],["W","D6"],["B","K3"],["W","F6"],["B","H3"],["W","G3"],["B","Q4"],["W","R3"],["B","K5"],["W","J14"],["B","K14"],["W","J13"],["B","O2"],["W","C12"],["B","J8"],["W","B12"],["B","C13"],["W","D13"],["B","D18"],["W","J6"],["B","E18"],["W","F18"],["B","K6"],["W","J7"],["B","K7"],["W","H8"],["B","J9"],["W","H9"],["B","H10"],["W","J10"],["B","K10"],["W","J11"],["B","J12"],["W","K11"],["B","K13"],["W","L10"],["B","K8"],["W","H11"],["B","H13"],["W","Q1"],["B","E12"],["W","F12"],["B","E6"],["W","E7"],["B","D7"],["W","D8"],["B","F7"],["W","C7"],["B","G6"],["W","F8"],["B","G12"],["W","G7"],["B","F11"],["W","G11"],["B","F13"],["W","N2"],["B","D12"],["W","N5"],["B","N7"],["W","O1"],["B","D16"],["W","E16"],["B","F10"],["W","G10"],["B","F15"],["W","J19"],["B","C9"],["W","R9"],["B","S15"],["W","S14"],["B","S16"],["W","M9"],["B","N9"],["W","K19"],["B","M18"],["W","M19"],["B","N19"],["W","L19"],["B","N17"],["W","B9"],["B","B10"],["W","B8"],["B","D10"],["W","T14"],["B","O4"],["W","M6"],["B","M7"],["W","O5"],["B","P2"],["W","P1"],["B","H5"],["W","M11"],["B","F5"],["W","G5"],["B","H6"],["W","H4"],["B","J4"],["W","H2"],["B","F7"],["W","H7"],["B","J5"],["W","O7"],["B","O8"],["W","O6"],["B","M5"],["W","L5"],["B","Q8"],["W","M8"],["B","N8"],["W","M4"],["B","L8"],["W","F6"],["B","L9"],["W","M10"],["B","M12"]]}'
# json_analysis_results = run_katago_analysis(test_json_string)
# print(json_analysis_results)
