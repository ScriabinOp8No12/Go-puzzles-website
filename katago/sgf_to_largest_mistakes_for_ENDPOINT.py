import time
import subprocess
import json
from parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves

katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'

def process_range(stdout_data, n, start, end):
    mistakes, correct_moves = find_mistakes_and_correct_moves(stdout_data, n, start, end)
    results = []
    if mistakes:
        mistakes.sort(key=lambda x: x[1], reverse=True)
        correct_moves_dict = {turn: moves for turn, moves in correct_moves}
        for turn, points in mistakes[:n]:
            moves = correct_moves_dict.get(turn-1, [])
            results.append((turn, points, moves))
    return results

def define_ranges(stdout_data, startMove):
    ranges = [(startMove, 50, 3, 'Opening'), (51, 100, 5, 'Early middlegame'), (101, 150, 5, 'Mid middlegame'), (151, float('inf'), 3, 'Late middlegame and endgame')]
    results = []
    for start, end, n, name in ranges:
        data = process_range(stdout_data.decode('utf-8'), n, start, end)
        if not data:
            continue

        end_text = "end" if end == float('inf') else str(end)
        section_header = f"Moves {start} - {end_text} moves ({name})"
        formatted_moves = []
        for turn, points, moves in data:
            formatted_move = f"Turn: {turn-1}, Points lost on next move: {points:.1f}, Correct moves: {', '.join([f'{move} (PV: {pv})' for move, pv in moves])}"
            formatted_moves.append(formatted_move)

        section_data = {
            "section_header": section_header,
            "formatted_moves": formatted_moves
        }
        results.append(section_data)
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
    if not katago_output_dictionary["moves"]:
        startMove = 0
    else:
        startMove = 1

    analysis_results = define_ranges(stdout_data, startMove)
    endTime = time.time()
    print("time to execute code: ", endTime - startTime)
    return analysis_results

# ************** TESTING LOCALLY ****************** #

# Pass in Postman 1 line json output
test_json_string = '{"id":"sgfTest3","rules":"chinese","komi":7.5,"boardXSize":19,"boardYSize":19,"initialPlayer":"W","analyzeTurns":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"initialStones":[],"moves":[["B","R16"],["W","D4"],["B","Q3"],["W","D16"],["B","C17"],["W","D17"],["B","C16"],["W","C15"],["B","B15"],["W","B14"],["B","C14"],["W","D15"],["B","B13"],["W","B16"],["B","A14"],["W","B17"],["B","O17"],["W","R5"],["B","R8"],["W","P4"],["B","P3"],["W","O4"],["B","N2"],["W","M3"],["B","N3"],["W","N4"],["B","M4"],["W","L3"],["B","M5"],["W","S3"],["B","R2"],["W","S2"],["B","M2"],["W","L2"],["B","O3"],["W","P6"],["B","K4"],["W","J3"],["B","J4"],["W","H3"],["B","G5"],["W","F4"],["B","P8"],["W","O7"],["B","N9"],["W","S16"],["B","S15"],["W","R17"],["B","S17"],["W","Q16"],["B","R15"],["W","S18"],["B","T16"],["W","Q15"],["B","Q17"],["W","P17"],["B","R18"],["W","O16"],["B","P18"],["W","P16"],["B","N17"],["W","N16"],["B","M16"],["W","M15"],["B","L15"],["W","L14"],["B","L16"]]}'

# Run the analysis
analysis_results = run_katago_analysis(test_json_string)

formatted_output = []

# Format the analysis results
if analysis_results:
    for section in analysis_results:
        formatted_output.append(section["section_header"])
        for move in section["formatted_moves"]:
            formatted_output.append(move)

# Print final formatted output as a single string
if formatted_output:
    final_output = "\n".join(formatted_output)
    print(final_output)
else:
    print("An error occurred during analysis.")

# Output from 50 visits, 4/16 analysis threads [*** OFF BY 1 ERROR ***]
# time to execute code:  205.2147970199585
# Moves 1 - 50 moves (Opening)
# Turn: 34, Points lost on next move: 6.4, Correct moves: J4
# Turn: 30, Points lost on next move: 3.3, Correct moves: C18, K4, R3, P6, N6, O6, S2, J4
# Turn: 36, Points lost on next move: 2.9, Correct moves: J4, C18
# Moves 51 - 100 moves (Early middlegame)
# Turn: 59, Points lost on next move: 4.6, Correct moves: M8, M7, O8, Q9, R1, L7
# Turn: 65, Points lost on next move: 3.5, Correct moves: M14, L16, Q18
# Turn: 53, Points lost on next move: 2.2, Correct moves: P2, M7
# Turn: 57, Points lost on next move: 1.8, Correct moves: M7, M8, P2, O8, Q9
# Turn: 54, Points lost on next move: 0.5, Correct moves: Q17, C18

# With off by one error fixed!
# time to execute code:  217.7883744239807
# Moves 1 - 50 moves (Opening)
# Turn: 34, Points lost on next move: 6.6, Correct moves: J4
# Turn: 30, Points lost on next move: 3.8, Correct moves: C18, K4, R3, S2, P6, N6, O6
# Turn: 38, Points lost on next move: 3.2, Correct moves: E4, E3, S5, R4, C18, G4
# Moves 51 - 100 moves (Early middlegame)
# Turn: 59, Points lost on next move: 4.7, Correct moves: P2, M8
# Turn: 66, Points lost on next move: 4.1, Correct moves: M14
# Turn: 65, Points lost on next move: 3.6, Correct moves: M14, Q18
# Turn: 53, Points lost on next move: 2.5, Correct moves: M8, O8, M7, P17, R1, Q18
# Turn: 57, Points lost on next move: 1.6, Correct moves: M8, M7, P2, O8, Q9, L7
