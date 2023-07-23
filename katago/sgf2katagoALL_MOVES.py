from sgfmill import sgf
import json

# Converts a SGF into a single line JSON dictionary to feed into the Katago analysis engine on the command line


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

    # Create analyzeTurns list
    analyzeTurns = list(range(len(moves)))

    # Determine next player based on SGF file
    # Default to the hard coded value lower down if there are no moves in the SGF
    next_player = player_turn
    if moves:
        last_move = moves[-1]
        last_player = last_move[0]
        next_player = 'B' if last_player == 'W' else 'W'

    # Create JSON dictionary
    result = {
        'id': 'sgfTest',
        'rules': rules,
        'boardXSize': size,
        'boardYSize': size,
        'initialPlayer': next_player,
        # analyzeTurns list gets added to the JSON dictionary result
        'analyzeTurns': analyzeTurns
    }

    # Add initial stones or moves to JSON dictionary
    if moves:
        result['moves'] = moves
    else:
        result['initialStones'] = initial_stones

    # Set komi in JSON dictionary
    if komi and float(komi) > 150:
        result['komi'] = 7.5
    # Fox games sometimes take the komi and set it to 0.25, which shows up as 0.0 in the SGF
    # Also when forking from a puzzle or downloading it without the moves, it will set the komi to 0.0
    elif 0 <= float(komi) < 0.5:
        result['komi'] = 0.5
    else:
        result['komi'] = float(komi)

    return result


# Change path to input position / sgf
input_file = 'katago/positionsWithMoveOrder/puzzle8_7_20_23.sgf'
# Change player's turn to W or B (hard coded for games that are positions and turn not specified)
player_turn = 'B'
result = sgf_to_katago(input_file, player_turn)

# Convert dictionary to JSON-formatted string
result_string = json.dumps(result)

# Save JSON-formatted string to file
output_file = 'katago/jsonDictionaryOutput/output8_analyze_entire_game.json'
with open(output_file, 'w') as f:
    f.write(result_string)

# Print JSON-formatted string
print(result_string)
