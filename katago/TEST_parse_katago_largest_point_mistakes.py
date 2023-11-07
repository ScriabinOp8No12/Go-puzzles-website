import json

def process_turn_data(data, prev_score, mistakes, num_mistakes, correct_moves):
    turn_number = data['turnNumber']
    score_lead = data['rootInfo']['scoreLead']
    move_infos = data['moveInfos']

    # Assuming the move_infos are sorted with the best move first
    if move_infos:
        best_move_info = move_infos[0]  # The top AI move
        best_score_lead = best_move_info['scoreLead']

        # Determine if the move played was a mistake
        move_played = data['move']
        move_played_info = next((info for info in move_infos if info['move'] == move_played), None)

        if move_played_info:
            move_played_score_diff = abs(move_played_info['scoreLead'] - best_score_lead)

            # If the score difference is greater than 1 for the played move and it's not the best move, it's a mistake
            if move_played_score_diff > 1 and move_played_info['order'] != 0:
                mistakes.append((turn_number, move_played_score_diff))

    # The correct move for the current turn is the best move
    correct_moves.append((turn_number, [(best_move_info['move'], best_move_info['pv'])]))

    return score_lead

def find_mistakes_and_correct_moves(katago_output, num_mistakes, start_turn, end_turn):
    mistakes = []
    correct_moves = []
    prev_score = None

    # Parse JSON output
    # Case 1: Single line of JSON output
    if "\n" not in katago_output:
        data = json.loads(katago_output)
        if start_turn <= data['turnNumber'] <= end_turn:
            prev_score = process_turn_data(data, prev_score, mistakes, num_mistakes, correct_moves)

    # Case 2: Multiple lines of JSON output
    else:
        data_list = [(json.loads(line)['turnNumber'], json.loads(line))
                     for line in katago_output.split('\n') if line]
        data_list.sort()
        for _, data in data_list:
            if start_turn <= data['turnNumber'] <= end_turn:
                prev_score = process_turn_data(data, prev_score, mistakes, num_mistakes, correct_moves)

    # Keep only the top N mistakes
    mistakes.sort(key=lambda x: x[1], reverse=True)
    mistakes = mistakes[:num_mistakes]

    return mistakes, correct_moves
