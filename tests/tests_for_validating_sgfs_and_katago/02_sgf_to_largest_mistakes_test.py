# Importing error causes this test to fail.
# NOTE Within sgf_to_largest_mistakes.py, if we change the import (from relative to absolute)
# to the following line instead of the original line below it, this test works, but pythonia on the backend throws an error...

# from katago.parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves
# from parse_katago_largest_point_mistakes import find_mistakes_and_correct_moves

# **************************** #

# from katago.sgf_to_largest_mistakes import run_katago_analysis

# def test_run_katago_analysis():

#   ''' This operation takes a while, and will block the rest of the pytests, I've temporarily
#       made the number of visits 2 (smallest amount to still run the analysis properly) to make this
#       go as quickly as possible for testing.

#       NOTE: This has no assertions, please manually verify that the output is valid and the AI recommended
#       moves are decent.  At 2 visits, the recommended moves should still be reasonable, it's just that the
#       follow up answer variations might be short or non-existent.
#   '''

# test_json_string = '{"id":"sgfTest","rules":"japanese","komi":6.5,"boardXSize":19,"boardYSize":19,"initialPlayer":"W","analyzeTurns":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187],"initialStones":[],"moves":[["B","R16"],["W","D4"],["B","C16"],["W","R4"],["B","C3"],["W","C4"],["B","D3"],["W","F3"],["B","F2"],["W","Q16"],["B","Q17"],["W","R15"],["B","P16"],["W","Q15"],["B","R17"],["W","G2"],["B","E2"],["W","G4"],["B","E4"],["W","E3"],["B","B4"],["W","B5"],["B","B3"],["W","C6"],["B","P3"],["W","M3"],["B","R11"],["W","Q12"],["B","Q11"],["W","P11"],["B","P10"],["W","R12"],["B","Q5"],["W","R5"],["B","Q6"],["W","R7"],["B","Q7"],["W","R8"],["B","Q9"],["W","O11"],["B","O10"],["W","Q3"],["B","N11"],["W","O13"],["B","N14"],["W","E17"],["B","P15"],["W","P14"],["B","O14"],["W","P13"],["B","N13"],["W","S11"],["B","H17"],["W","D15"],["B","C15"],["W","D14"],["B","B13"],["W","H15"],["B","J15"],["W","H16"],["B","J16"],["W","J17"],["B","K17"],["W","J18"],["B","K18"],["W","H18"],["B","G17"],["W","G18"],["B","H14"],["W","G16"],["B","Q2"],["W","R2"],["B","E5"],["W","D6"],["B","K3"],["W","F6"],["B","H3"],["W","G3"],["B","Q4"],["W","R3"],["B","K5"],["W","J14"],["B","K14"],["W","J13"],["B","O2"],["W","C12"],["B","J8"],["W","B12"],["B","C13"],["W","D13"],["B","D18"],["W","J6"],["B","E18"],["W","F18"],["B","K6"],["W","J7"],["B","K7"],["W","H8"],["B","J9"],["W","H9"],["B","H10"],["W","J10"],["B","K10"],["W","J11"],["B","J12"],["W","K11"],["B","K13"],["W","L10"],["B","K8"],["W","H11"],["B","H13"],["W","Q1"],["B","E12"],["W","F12"],["B","E6"],["W","E7"],["B","D7"],["W","D8"],["B","F7"],["W","C7"],["B","G6"],["W","F8"],["B","G12"],["W","G7"],["B","F11"],["W","G11"],["B","F13"],["W","N2"],["B","D12"],["W","N5"],["B","N7"],["W","O1"],["B","D16"],["W","E16"],["B","F10"],["W","G10"],["B","F15"],["W","J19"],["B","C9"],["W","R9"],["B","S15"],["W","S14"],["B","S16"],["W","M9"],["B","N9"],["W","K19"],["B","M18"],["W","M19"],["B","N19"],["W","L19"],["B","N17"],["W","B9"],["B","B10"],["W","B8"],["B","D10"],["W","T14"],["B","O4"],["W","M6"],["B","M7"],["W","O5"],["B","P2"],["W","P1"],["B","H5"],["W","M11"],["B","F5"],["W","G5"],["B","H6"],["W","H4"],["B","J4"],["W","H2"],["B","F7"],["W","H7"],["B","J5"],["W","O7"],["B","O8"],["W","O6"],["B","M5"],["W","L5"],["B","Q8"],["W","M8"],["B","N8"],["W","M4"],["B","L8"],["W","F6"],["B","L9"],["W","M10"],["B","M12"]]}'
# json_analysis_results = run_katago_analysis(test_json_string)
# print(json_analysis_results)

# 50 visits is good, but the move number is 1 too high now, it's now fixed in the code

# time to execute code:  631.5813567638397
# [
#     {
#         "move": 99,
#         "points_lost_on_next_move": 1.7,
#         "correct_moves": {
#             "H9": [
#                 "H9",
#                 "J9",
#                 "K8",
#                 "J10",
#                 "G9",
#                 "G8",
#                 "J12",
#                 "K13"
#             ]
#         }
#     },
#     {
#         "move": 98,
#         "points_lost_on_next_move": 1.8,
#         "correct_moves": {
#             "K13": [
#                 "K13",
#                 "F7",
#                 "E7",
#                 "G6",
#                 "F8"
#             ],
#             "K16": [
#                 "K16",
#                 "K15",
#                 "L16",
#                 "M17",
#                 "K13",
#                 "L14",
#                 "H8"
#             ]
#         }
#     },
#     {
#         "move": 132,
#         "points_lost_on_next_move": 1.8,
#         "correct_moves": {
#             "C10": [
#                 "C10",
#                 "D17",
#                 "E16",
#                 "P1",
#                 "P2"
#             ],
#             "O7": [
#                 "O7",
#                 "O6",
#                 "M7",
#                 "M8"
#             ],
#             "K19": [
#                 "K19",
#                 "J19",
#                 "H19",
#                 "L18"
#             ],
#             "G1": [
#                 "G1",
#                 "D2"
#             ]
#         }
#     },
#     {
#         "move": 137,
#         "points_lost_on_next_move": 2.0,
#         "correct_moves": {
#             "C9": [
#                 "C9",
#                 "C10",
#                 "D9",
#                 "B9",
#                 "B8",
#                 "B11"
#             ]
#         }
#     },
#     {
#         "move": 124,
#         "points_lost_on_next_move": 2.0,
#         "correct_moves": {
#             "F11": [
#                 "F11",
#                 "F5",
#                 "H5",
#                 "H7",
#                 "H6",
#                 "G10",
#                 "G11",
#                 "G8",
#                 "G7",
#                 "G15",
#                 "F17"
#             ],
#             "G1": [
#                 "G1",
#                 "D2",
#                 "F11",
#                 "F5"
#             ],
#             "A13": [
#                 "A13",
#                 "B14"
#             ],
#             "H5": [
#                 "H5",
#                 "F11"
#             ],
#             "D16": [
#                 "D16",
#                 "C17"
#             ],
#             "J4": [
#                 "J4"
#             ],
#             "P2": [
#                 "P2"
#             ],
#             "H4": [
#                 "H4"
#             ]
#         }
#     },
#     {
#         "move": 164,
#         "points_lost_on_next_move": 1.7,
#         "correct_moves": {
#             "E15": [
#                 "E15",
#                 "F5",
#                 "G5",
#                 "H6"
#             ],
#             "D17": [
#                 "D17",
#                 "C17",
#                 "E15",
#                 "F5"
#             ],
#             "C14": [
#                 "C14",
#                 "B14",
#                 "D17",
#                 "C17"
#             ],
#             "F1": [
#                 "F1",
#                 "D2",
#                 "E15"
#             ],
#             "L18": [
#                 "L18",
#                 "L17",
#                 "E15"
#             ],
#             "J5": [
#                 "J5",
#                 "J4"
#             ],
#             "G1": [
#                 "G1",
#                 "D2",
#                 "E15"
#             ],
#             "N18": [
#                 "N18"
#             ]
#         }
#     },
#     {
#         "move": 174,
#         "points_lost_on_next_move": 1.9,
#         "correct_moves": {
#             "F6": [
#                 "F6",
#                 "R6",
#                 "S6",
#                 "F7"
#             ],
#             "K2": [
#                 "K2",
#                 "L2",
#                 "J3",
#                 "L3"
#             ],
#             "D17": [
#                 "D17",
#                 "C17",
#                 "F6"
#             ],
#             "F1": [
#                 "F1",
#                 "D2"
#             ]
#         }
#     },
#     {
#         "move": 160,
#         "points_lost_on_next_move": 2.8,
#         "correct_moves": {
#             "E15": [
#                 "E15",
#                 "P2",
#                 "P1",
#                 "H5"
#             ],
#             "J5": [
#                 "J5",
#                 "E15",
#                 "K4"
#             ],
#             "P2": [
#                 "P2",
#                 "E15",
#                 "J5"
#             ],
#             "J4": [
#                 "J4",
#                 "J5",
#                 "H5"
#             ],
#             "D17": [
#                 "D17",
#                 "C17",
#                 "E15",
#                 "P2"
#             ],
#             "F1": [
#                 "F1",
#                 "D2"
#             ],
#             "L18": [
#                 "L18",
#                 "L17",
#                 "E15"
#             ],
#             "A10": [
#                 "A10",
#                 "P2"
#             ],
#             "B1": [
#                 "B1",
#                 "F1"
#             ],
#             "C14": [
#                 "C14",
#                 "B14"
#             ]
#         }
#     }
# ]
