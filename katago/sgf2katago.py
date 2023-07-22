# Converts a SGF into a single line JSON dictionary to feed into the Katago engine
# Looks like difference is SGF has "B" and "W" for the stones, and not "AB" and "AW"
# Komi on Fox games messed up (like 375 komi) -> If komi above 50, drop it to 7.5

# Make sure conversion works on different SGF formats.
# 1. Katago / AI analysis with variations also in SGF
# 2. Comments and words added into SGF
# 3. Test 9by9 and 13by13 boards too!

# JSON dictionary output should be able to allow initial stones, but the new format is shown below:
# analyzeTurns needs to be every single turn, if left blank, it will only check the last move played! (need to use a loop here)

# {"id": "testSGF", "moves": [["B", "R16"], ["W", "D4"], ["B", "C15"], ["W", "R4"], ["B", "P3"], ["W", "N3"], ["B", "P5"], ["W", "Q2"], ["B", "Q6"], ["W", "R6"], ["B", "R7"], ["W", "S6"], [
#     "B", "S7"], ["W", "P2"], ["B", "Q11"], ["W", "R17"]], "rules": "tromp-taylor", "komi": 7.5, "boardXSize": 19, "boardYSize": 19, "analyzeTurns": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}

from sgfmill import sgf
import json


def sgf_to_katago(input_file, player_turn):
    # Load the SGF file
    with open(input_file, 'r') as f:
        sgf_game = sgf.Sgf_game.from_string(f.read())

    root_node = sgf_game.get_root()

    # Extract relevant properties from SGF
    size = sgf_game.get_size()
    komi = root_node.get('KM')
    rules = root_node.get('RU').lower()
    # Need to make sure that if there's no AB or AW property (like in an even game) that there's no error
    black_stones = root_node.get(
        'AB') if root_node.has_property('AB') else None
    white_stones = root_node.get(
        'AW') if root_node.has_property('AW') else None

    # Convert coordinates to KataGo 1 line JSON dictionary format
    def convert_coord(coord):
        x, y = coord
        col = chr(ord('A') + y)
        if col >= 'I':
            col = chr(ord(col) + 1)
        row = x + 1
        return col + str(row)

    # Create initial stones list
    initial_stones = []
    if black_stones:
        for stone in black_stones:
            initial_stones.append(['B', convert_coord(stone)])
    if white_stones:
        for stone in white_stones:
            initial_stones.append(['W', convert_coord(stone)])

    # Create moves list
    moves = []
    main_sequence = sgf_game.get_main_sequence()
    for node in main_sequence:
        if node.has_property('B'):
            move = node.get('B')
            if move is not None:
                moves.append(['B', convert_coord(move)])
        elif node.has_property('W'):
            move = node.get('W')
            if move is not None:
                moves.append(['W', convert_coord(move)])

    # Create JSON dictionary
    result = {
        'id': 'sgfTest',
        'rules': rules,
        'boardXSize': size,
        'boardYSize': size,
        'initialPlayer': player_turn
    }

    # Add initial stones or moves to JSON dictionary
    if moves:
        result['moves'] = moves
    else:
        result['initialStones'] = initial_stones

    # Set komi in JSON dictionary
    if komi and float(komi) > 50:
        result['komi'] = 7.5
    else:
        result['komi'] = komi

    return result


# Change path to input position / sgf
input_file = 'katago/positionsAsSGFs/puzzle4_7_20_23.sgf'
# Change player's turn to W or B
player_turn = 'B'
result = sgf_to_katago(input_file, player_turn)

# Convert dictionary to JSON-formatted string
result_string = json.dumps(result)

# Save JSON-formatted string to file

output_file = 'katago/jsonDictionaryOutput/output4.json'
with open(output_file, 'w') as f:
    f.write(result_string)

# Print JSON-formatted string
print(result_string)
