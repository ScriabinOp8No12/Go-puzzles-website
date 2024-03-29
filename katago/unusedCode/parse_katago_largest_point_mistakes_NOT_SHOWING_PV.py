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
        # Only count it as a mistake if the point loss is greater than 1
        if score_diff <= 1:
          return score_lead

        heappush(heap, (score_diff, turn_number))
        if len(heap) > num_mistakes:
            heappop(heap)

    # Extract moves information
    move_infos = data['moveInfos']
    if move_infos:
        # The best AI move has an "order" key of 0, the next best moves have order values of: 1, 2, 3, etc.
        best_move_info = [info for info in move_infos if info['order'] == 0][0]
        best_score_lead = best_move_info['scoreLead']

        # Check if the best move is not 'pass' and 'pass' isn't in its pv
        if best_move_info['move'] != "pass" and "pass" not in best_move_info['pv']:
            # The pv value shows the follow up sequence or variation
            correct_moves_current_turn = [(best_move_info['move'], best_move_info['pv'])]
        else:
            correct_moves_current_turn = []

        for move_info in move_infos:
            # If the point loss between the move and the best move less than 1, then it's also considered correct
            if move_info != best_move_info and abs(move_info['scoreLead'] - best_score_lead) <= 1:
                # Check if the move isn't 'pass' and 'pass' isn't in its pv
                if move_info['move'] != "pass" and "pass" not in move_info['pv']:
                    correct_moves_current_turn.append((move_info['move'], move_info['pv']))
        # Only append to correct moves if correct_moves_current_turn is NOT empty (we don't want to add an empty [] to the correct moves sequence)
        if correct_moves_current_turn:
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

    return list(mistakes), correct_moves
