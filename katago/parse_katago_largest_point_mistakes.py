import time
import json
from heapq import heappush, heappop

startTime = time.time()


# Finds mistakes based on largest point loss, with mistakes grabbed from each stage of the game


def find_mistakes_and_correct_moves(katago_output, num_mistakes, start_turn, end_turn):
    mistakes = []
    correct_moves = []
    # Initialize an empty heap to store the score
    heap = []
    prev_score = None
    # Create a list to store all data (for sorting turnNumber b/c multiple analysis at same time might make it go out of order)
    data_list = []

    # **********
    if "\n" not in katago_output:
        data=json.loads(katago_output)
        turn_number = 0
        if turn_number >= start_turn and turn_number <= end_turn:
            # Get the score lead value from the root info data
            score_lead = data['rootInfo']['scoreLead']
            # If there is a previous score, calculate the absolute difference between previous and current score
            # then push the score difference into the heap
            if prev_score is not None:
                score_diff = abs(prev_score - score_lead)
                heappush(heap, (score_diff, turn_number))
                # If the heap has more than the number of mistakes specified, remove the smallest element (point mistake) from the heap
                if len(heap) > num_mistakes:
                    heappop(heap)
            # Set the previous score (starts initially at None) to the current score lead
            prev_score = score_lead
            # Secondary analysis for correct moves
            move_infos = data['moveInfos']
            if move_infos:
                # Grab the best move deemed by KataGo, which is the order key with value of 0, this should always be the first item in the moveInfos list
                best_move_info = [info for info in move_infos if info['order'] == 0][0]
                # Also grab the current scoreLead of the best move
                best_score_lead = best_move_info['scoreLead']
                correct_moves_current_turn = [best_move_info['move']]
                for move_info in move_infos:
                    # loop through all the possible moves, and if they are within 1 point of the best move's scoreLead, then that's also a correct move
                    if move_info != best_move_info and abs(move_info['scoreLead'] - best_score_lead) <= 1:
                        correct_moves_current_turn.append(move_info['move'], move_info['pv'])
                correct_moves.append((turn_number, correct_moves_current_turn))

    # While there are elements in the heap, pop an element from the heap and append a tuple of:
    # (turn number, score difference) to the mistakes list
    while heap:
        score = heappop(heap)
        mistakes.append((score[1], score[0]))


    # Iterate over each line in the katago_output
    for line in katago_output.split('\n'):
        # If the line is empty, skip it
        if not line:
            continue
        # Load the data from the line as a JSON object
        data = json.loads(line)
        # Get the turn number from the data ************* If position setup, don't have a turn number, it'll be just one puzzle! *******************
        turn_number = data['turnNumber']
        # append the turn_number and data as a tuple into data_list
        data_list.append((turn_number, data))
    # Sort data by turn number, Python uses Timsort, which is hybrid sorting algorithm derived from merge sort and insertion sort
    # Worst case time complexity is O(nlogn) where n is the number of elements in the list
    data_list.sort()
    # Proceed with processing, the _ means a throwaway variable that we don't need to loop over
    # We already used it for sorting
    for _, data in data_list:
        turn_number = data['turnNumber']
        # If the turn number is within the specified range
        if turn_number >= start_turn and turn_number <= end_turn:
            # Get the score lead value from the root info data
            score_lead = data['rootInfo']['scoreLead']
            # If there is a previous score, calculate the absolute difference between previous and current score
            # then push the score difference into the heap
            if prev_score is not None:
                score_diff = abs(prev_score - score_lead)
                heappush(heap, (score_diff, turn_number))
                # If the heap has more than the number of mistakes specified, remove the smallest element (point mistake) from the heap
                if len(heap) > num_mistakes:
                    heappop(heap)
            # Set the previous score (starts initially at None) to the current score lead
            prev_score = score_lead
            # Secondary analysis for correct moves
            move_infos = data['moveInfos']
            if move_infos:
                # Grab the best move deemed by KataGo, which is the order key with value of 0, this should always be the first item in the moveInfos list
                best_move_info = [info for info in move_infos if info['order'] == 0][0]
                # Also grab the current scoreLead of the best move
                best_score_lead = best_move_info['scoreLead']
                # correct_moves_current_turn = [best_move_info['move']]
                # Append pv value (principal variation) from KataGo onto the move as a tuple
                correct_moves_current_turn = [(best_move_info['move'], best_move_info['pv'])]
                for move_info in move_infos:
                    # loop through all the possible moves, and if they are within 1 point of the best move's scoreLead, then that's also a correct move
                    if move_info != best_move_info and abs(move_info['scoreLead'] - best_score_lead) <= 1:
                        correct_moves_current_turn.append((move_info['move'], move_info['pv']))
                correct_moves.append((turn_number, correct_moves_current_turn))

    # While there are elements in the heap, pop an element from the heap and append a tuple of:
    # (turn number, score difference) to the mistakes list
    while heap:
        score = heappop(heap)
        mistakes.append((score[1], score[0]))

    # Return the mistake list in reverse order (desc.) so the largest mistakes are outputted first
    return list(reversed(mistakes)), correct_moves


# kataOutput = '''{"id":"sgfTest3","isDuringSearch":false,"moveInfos":[{"lcb":0.949013928,"move":"P18","order":0,"prior":0.976692855,"pv":["P18","O16","O6","O3","S9","N17"],"scoreLead":5.99942999,"scoreMean":5.99942999,"scoreSelfplay":8.20637113,"scoreStdev":14.8662875,"utility":0.860247985,"utilityLcb":0.94995461,"visits":24,"weight":33.727346109796486,"winrate":0.916975848},{"lcb":2.22026222,"move":"O6","order":1,"prior":0.00243354216,"pv":["O6"],"scoreLead":11.0965338,"scoreMean":11.0965338,"scoreSelfplay":12.2656183,"scoreStdev":14.1527813,"utility":1.00624334,"utilityLcb":4.50624335,"visits":1,"weight":1.7309293680954236,"winrate":0.970262213},{"lcb":2.21397983,"move":"Q15","order":2,"prior":0.000757954607,"pv":["Q15"],"scoreLead":11.4115992,"scoreMean":11.4115992,"scoreSelfplay":12.1958847,"scoreStdev":14.7406811,"utility":0.991983072,"utilityLcb":4.49198309,"visits":1,"weight":1.396496100075482,"winrate":0.963979824}],"rootInfo":{"currentPlayer":"W","rawStScoreError":2.25268579,"rawStWrError":0.0590167567,"rawVarTimeLeft":13.9276733,"scoreLead":5.99019091,"scoreSelfplay":8.21751597,"scoreStdev":14.8843515,"symHash":"2AF36EB1A416AE50BABC01DE5A7E2419","thisHash":"8ECBE553F76CD9539F7F5E5D1BA26FEF","utility":0.859766102,"visits":27,"weight":36.47822977892508,"winrate":0.916724168},"turnNumber":0}'''
# turn, move = find_mistakes_and_correct_moves(kataOutput, 5, 0, 100)

# print(turn, move)
