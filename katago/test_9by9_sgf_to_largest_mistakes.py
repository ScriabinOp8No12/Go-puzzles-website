import time
import subprocess
import json
# Absolute import instead of relative import is necessary otherwise pytest can't find the module,
# but then pythonia throws an error "can't find module: katago"
# from katago.parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves
from test_9by9_parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves

katago_command = '~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s6981484800-d3524616345.bin.gz -config ~/katago/KataGo/cpp/configs/analysis_example.cfg'

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

test_json_string = '{"id": "sgfTest", "rules": "japanese", "komi": 6.5, "boardXSize": 9, "boardYSize": 9, "initialPlayer": "B", "analyzeTurns": [0], "initialStones": [["B", "G5"], ["B", "G8"], ["B", "G3"], ["B", "G6"], ["B", "G9"], ["B", "G4"], ["B", "G7"], ["W", "E5"], ["W", "C7"], ["W", "E4"], ["W", "E6"], ["W", "E7"], ["W", "C4"], ["W", "F8"], ["W", "F9"]], "moves": []}'

# Run the analysis
json_analysis_results = run_katago_analysis(test_json_string)

print(json_analysis_results) # Blank right now, logic must not work when there's only one move, it doesn't calculate it as a mistake

# {"id":"sgfTest","isDuringSearch":false,"moveInfos":[{"lcb":-0.00715437168,"move":"E2","order":0,"prior":0.565698802,"pv":["E2","F2","C2","E3","D2"],"scoreLead":-11.5642389,"scoreMean":-11.5642389,"scoreSelfplay":-11.0495394,"scoreStdev":2.98902566,"utility":-1.06876719,"utilityLcb":-1.09068583,"visits":31,"weight":97.18561066984348,"winrate":0.000673712643},{"lcb":-0.0380095783,"move":"D3","order":1,"prior":0.322073609,"pv":["D3","E3","E2","F2","C2","E1"],"scoreLead":-14.7871583,"scoreMean":-14.7871583,"scoreSelfplay":-14.2412864,"scoreStdev":6.3853132,"utility":-1.11862186,"utilityLcb":-1.22736534,"visits":15,"weight":50.780017114831985,"winrate":0.000827380003},{"lcb":-0.172798585,"move":"E3","order":2,"prior":0.0341058187,"pv":["E3","D3","E2"],"scoreLead":-12.6090544,"scoreMean":-12.6090544,"scoreSelfplay":-12.0096677,"scoreStdev":2.4458956,"utility":-1.09310658,"utilityLcb":-1.57868279,"visits":4,"weight":15.420183350679645,"winrate":0.000621491215},{"lcb":-0.545548581,"move":"D2","order":3,"prior":0.0380477905,"pv":["D2","E2"],"scoreLead":-16.8769188,"scoreMean":-16.8769188,"scoreSelfplay":-16.7030179,"scoreStdev":3.54898147,"utility":-1.18638166,"utilityLcb":-2.71643546,"visits":2,"weight":7.985383092446616,"winrate":0.000899206701},{"lcb":-1.24794915,"move":"F7","order":4,"prior":0.00438546529,"pv":["F7"],"scoreLead":-17.3484707,"scoreMean":-17.3484707,"scoreSelfplay":-16.736721,"scoreStdev":2.55837552,"utility":-1.19079061,"utilityLcb":-4.69079063,"visits":1,"weight":5.142741751083311,"winrate":0.00205085205},{"lcb":-1.24718425,"move":"C3","order":5,"prior":0.00412781956,"pv":["C3"],"scoreLead":-20.3018837,"scoreMean":-20.3018837,"scoreSelfplay":-19.3809757,"scoreStdev":4.13181586,"utility":-1.21805593,"utilityLcb":-4.71805594,"visits":1,"weight":4.757873196145383,"winrate":0.00281576009}],"rootInfo":{"currentPlayer":"B","rawStScoreError":0.942444861,"rawStWrError":0.00399268046,"rawVarTimeLeft":0.000851160905,"scoreLead":-12.2171562,"scoreSelfplay":-11.7016988,"scoreStdev":3.99489292,"symHash":"04CC6BD6CC927B758B8B490ADE6220FA","thisHash":"9443217DA5420E7F718B2777BC5F9C7F","utility":-1.07976743,"visits":55,"weight":181.47578862711825,"winrate":0.000684007273},"turnNumber":0}
