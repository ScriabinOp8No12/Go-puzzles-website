import json
from heapq import heappush, heappop

# Finds mistakes from KataGo Analysis output based on largest point loss, with mistakes grabbed from each stage of the game

# Helper function to process each turn's data
def process_turn_data(data, prev_score, heap, num_mistakes, correct_moves):
    turn_number = data['turnNumber']
    score_lead = data['rootInfo']['scoreLead']

    # Calculate the score difference and add to heap
    if prev_score is not None:
        score_diff = abs(prev_score - score_lead)
        heappush(heap, (score_diff, turn_number))
        if len(heap) > num_mistakes:
            heappop(heap)

    # Extract moves information
    move_infos = data['moveInfos']
    if move_infos:
        best_move_info = [info for info in move_infos if info['order'] == 0][0]
        best_score_lead = best_move_info['scoreLead']
        correct_moves_current_turn = [(best_move_info['move'], best_move_info['pv'])]

        for move_info in move_infos:
            if move_info != best_move_info and abs(move_info['scoreLead'] - best_score_lead) <= 1:
                correct_moves_current_turn.append((move_info['move'], move_info['pv']))

        correct_moves.append((turn_number, correct_moves_current_turn))

    return score_lead

def find_mistakes_and_correct_moves(katago_output, num_mistakes, start_turn, end_turn):
    mistakes = []
    correct_moves = []
    heap = []
    prev_score = None
    data_list = []

    # Case 1: Single line of JSON output
    if "\n" not in katago_output:
        data = json.loads(katago_output)
        if start_turn <= data['turnNumber'] <= end_turn:
            prev_score = process_turn_data(data, prev_score, heap, num_mistakes, correct_moves)

    # Case 2: Multiple lines of JSON output
    for line in katago_output.split('\n'):
        if not line:
            continue
        data = json.loads(line)
        if start_turn <= data['turnNumber'] <= end_turn:
            data_list.append((data['turnNumber'], data))

    data_list.sort()
    for _, data in data_list:
        prev_score = process_turn_data(data, prev_score, heap, num_mistakes, correct_moves)

    # Extract mistakes from heap
    while heap:
        score = heappop(heap)
        mistakes.append((score[1], score[0]))

    return list(reversed(mistakes)), correct_moves


# kataOutput = '''{"id":"sgfTest3","isDuringSearch":false,"moveInfos":[{"lcb":0.949013928,"move":"P18","order":0,"prior":0.976692855,"pv":["P18","O16","O6","O3","S9","N17"],"scoreLead":5.99942999,"scoreMean":5.99942999,"scoreSelfplay":8.20637113,"scoreStdev":14.8662875,"utility":0.860247985,"utilityLcb":0.94995461,"visits":24,"weight":33.727346109796486,"winrate":0.916975848},{"lcb":2.22026222,"move":"O6","order":1,"prior":0.00243354216,"pv":["O6"],"scoreLead":11.0965338,"scoreMean":11.0965338,"scoreSelfplay":12.2656183,"scoreStdev":14.1527813,"utility":1.00624334,"utilityLcb":4.50624335,"visits":1,"weight":1.7309293680954236,"winrate":0.970262213},{"lcb":2.21397983,"move":"Q15","order":2,"prior":0.000757954607,"pv":["Q15"],"scoreLead":11.4115992,"scoreMean":11.4115992,"scoreSelfplay":12.1958847,"scoreStdev":14.7406811,"utility":0.991983072,"utilityLcb":4.49198309,"visits":1,"weight":1.396496100075482,"winrate":0.963979824}],"rootInfo":{"currentPlayer":"W","rawStScoreError":2.25268579,"rawStWrError":0.0590167567,"rawVarTimeLeft":13.9276733,"scoreLead":5.99019091,"scoreSelfplay":8.21751597,"scoreStdev":14.8843515,"symHash":"2AF36EB1A416AE50BABC01DE5A7E2419","thisHash":"8ECBE553F76CD9539F7F5E5D1BA26FEF","utility":0.859766102,"visits":27,"weight":36.47822977892508,"winrate":0.916724168},"turnNumber":0}'''
# turn, move = find_mistakes_and_correct_moves(kataOutput, 5, 0, 100)

# print(turn, move)
