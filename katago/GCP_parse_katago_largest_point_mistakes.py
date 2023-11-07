import json

# Helper function to process each turn's data
def process_turn_data(data, prev_score, mistakes, num_mistakes, correct_moves):
    turn_number = data['turnNumber']
    score_lead = data['rootInfo']['scoreLead']

    # Extract moves information
    move_infos = data['moveInfos']
    if move_infos:
        best_move_info = next((info for info in move_infos if info['order'] == 0), None)
        if best_move_info:
            best_score_lead = best_move_info['scoreLead']
            # Create a list to keep track of correct moves for the current turn
            correct_moves_current_turn = []

            for move_info in move_infos:
                # Check the score difference from the best move
                move_score_diff = abs(move_info['scoreLead'] - best_score_lead)
                # If the move score difference is greater than 1, it's a mistake
                if move_score_diff > 1:
                    if prev_score is not None:
                        score_diff = abs(prev_score - score_lead)
                        # Add to mistakes if the score difference is greater than 1
                        if score_diff > 1:
                            mistakes.append((score_diff, turn_number))
                    break  # We break out of the loop because we found a mistake
                else:
                    # If it's within 1 point, it's considered a correct move
                    correct_moves_current_turn.append((move_info['move'], move_info['pv']))

            # Only add to the correct_moves list if no mistakes were found
            if correct_moves_current_turn and (not mistakes or mistakes[-1][1] != turn_number):
                correct_moves.append((turn_number, correct_moves_current_turn))

    # Ensure we don't track more mistakes than the specified number
    mistakes.sort(reverse=True)
    mistakes = mistakes[:num_mistakes]

    return score_lead

def find_mistakes_and_correct_moves(katago_output, num_mistakes, start_turn, end_turn):
    mistakes = []
    correct_moves = []
    prev_score = None
    data_list = []

    # Case 1: Single line of JSON output
    if "\n" not in katago_output:
        data = json.loads(katago_output)
        if start_turn <= data['turnNumber'] <= end_turn:
            prev_score = process_turn_data(data, prev_score, mistakes, num_mistakes, correct_moves)

    # Case 2: Multiple lines of JSON output
    else:
        for line in katago_output.split('\n'):
            if not line:
                continue
            data = json.loads(line)
            if start_turn <= data['turnNumber'] <= end_turn:
                data_list.append((data['turnNumber'], data))

        data_list.sort()
        for _, data in data_list:
            prev_score = process_turn_data(data, prev_score, mistakes, num_mistakes, correct_moves)

    return mistakes, correct_moves
