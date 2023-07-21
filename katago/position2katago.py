from sgfmill import sgf
import json

# Do different board sizes have DIFFERENT coordinate systems for the one line JSON dictionary?


def position_to_katago(input_file, player_turn):
    # Load the SGF file
    with open(input_file, 'r') as f:
        sgf_game = sgf.Sgf_game.from_string(f.read())

    root_node = sgf_game.get_root()

    # Extract relevant properties from SGF
    size = sgf_game.get_size()
    komi = root_node.get('KM')
    rules = root_node.get('RU').lower()
    black_stones = root_node.get('AB')
    white_stones = root_node.get('AW')

    # Convert coordinates to KataGo 1 line JSON dictionary format
    def convert_coord(coord):
        x, y = coord
        col = chr(ord('A') + y)
        if col >= 'I':
            col = chr(ord(col) + 1)
            # It used to have size below, but now it's kind of hard coded?  Actually it seems fine
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

    # Create JSON dictionary
    result = {
        'id': 'test',
        'initialStones': initial_stones,
        'moves': [],
        'rules': rules,
        # 'komi': komi,
        'komi': 6.5,
        'boardXSize': size,
        'boardYSize': size,
        'initialPlayer': player_turn
    }

    return result


# Change path to input position / sgf
input_file = 'katago/positions/puzzle4_7_20_23.sgf'
# Change player's turn to W or B
player_turn = 'B'
result = position_to_katago(input_file, player_turn)

# Convert dictionary to JSON-formatted string
result_string = json.dumps(result)

# Save JSON-formatted string to file

output_file = 'katago/analysisOutput/output4.json'
with open(output_file, 'w') as f:
    f.write(result_string)

# Print JSON-formatted string
print(result_string)
