from sgfmill import sgf

# Converts a SGF into a single line JSON dictionary to feed into the Katago analysis engine on the command line
# NOTE: the convert_coord function takes in a tuple of INTEGERS, not letters.


def sgf_to_one_line_json(input_file, player_turn):
    # Load the SGF file
    with open(input_file, 'r') as f:
        sgf_game = sgf.Sgf_game.from_string(f.read())

    root_node = sgf_game.get_root()

    # Extract relevant properties from SGF
    try:
      size = sgf_game.get_size()
      # if no size property found in SGF, default size to 19 by 19
    except ValueError:
      size = 19
    komi = root_node.get('KM') if root_node.has_property('KM') else 0.5
    rules = root_node.get('RU').lower() if root_node.has_property('RU') else "?"
    # Need to make sure that if there's no AB or AW property (like in an even game) that there's no error
    # *** This must be converting the stones into integer coordinates instead of using sgf letter coordinates
    black_stones = root_node.get(
        'AB') if root_node.has_property('AB') else None
    print("black stones: ", black_stones)
    white_stones = root_node.get(
        'AW') if root_node.has_property('AW') else None

    # Convert coordinates to KataGo 1 line JSON dictionary format
    # coord is now in integers, not letters!
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
            # Move is in number format, like this: (15, 16), (13, 0) (15, 18)
            move = node.get('B')
            if move is not None:
                # print("move: ", move)
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
    # Fox games sometimes take the komi and sets it to 0.25, which shows up as 0.0 in the SGF
    # Also when forking from a puzzle or downloading it without the moves, it will set the komi to 0.0
    elif 0 <= float(komi) < 0.5:
        result['komi'] = 0.5
    else:
        result['komi'] = float(komi)

    return result

result = sgf_to_one_line_json('backend/uploads/manipulating arthur sgf to have comments 8_10_23.sgf', 'B')

print(result)
