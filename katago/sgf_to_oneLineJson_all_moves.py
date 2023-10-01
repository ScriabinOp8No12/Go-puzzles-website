from sgfmill import sgf
import json

# Converts a SGF into a single line JSON dictionary to feed into the Katago analysis engine on the command line
# NOTE: the convert_coord function takes in a tuple of INTEGERS, not letters.


def sgf_to_one_line_json(sgf_data):

    sgf_game = sgf.Sgf_game.from_string(sgf_data)

    root_node = sgf_game.get_root()

    # Extract relevant properties from SGF
    try:
        size = sgf_game.get_size()
        # if no size property found in SGF, throw an error with a message!
    except ValueError:
        print("Invalid SGF, size of board unknown!")

    komi = root_node.get('KM') if root_node.has_property('KM') else 0.5
    # Since rules are required to feed into KataGo, we will default it to japanese if we can't find the rule property in the sgf
    rules = root_node.get('RU').lower(
    ) if root_node.has_property('RU') else "japanese"
    # Need to make sure that if there's no AB or AW property (like in an even game) that there's no error
    # *** This must be converting the stones into integer coordinates instead of using sgf letter coordinates
    black_stones = root_node.get(
        'AB') if root_node.has_property('AB') else None
    white_stones = root_node.get(
        'AW') if root_node.has_property('AW') else None

    # Convert coordinates to KataGo 1 line JSON dictionary format
    # coord will be a tuple of INTEGERS, not letters!
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
            # Move is in integer tuple format, like this: (15, 16), (13, 0) (15, 18)
            move = node.get('B')
            if move is not None:
                # print("move: ", move)
                moves.append(['B', convert_coord(move)])
        elif node.has_property('W'):
            move = node.get('W')
            if move is not None:
                moves.append(['W', convert_coord(move)])

    # Create analyzeTurns list (off by one error unless we add the + 1 here since we start at move 0 and not 1)
    analyzeTurns = list(range(len(moves) + 1))

    # next_player is set to None if there is no move order to the game, AND the player's turn isn't specified
    next_player = None
    next_player_detected = False

    # If there's no move order and there's also a PL property, set player_turn (black or white) to that value (override above default value)
    if root_node.has_property('PL') and not moves:
        next_player = root_node.get('PL')
        next_player_detected = True

    elif moves:
        last_move = moves[-1]
        next_player = 'B' if last_move == 'W' else 'W'
        next_player_detected = True

    if not next_player_detected:
        next_player = input(
            "Select next player, please input B for black and W for white: ")

    # Set komi in JSON dictionary
    if komi and float(komi) > 100:
        komi = 7.5
    # Fox games sometimes take the komi and sets it to 0.25, which shows up as 0.0 in the SGF
    # Also when forking from a puzzle or downloading it without the moves, it will set the komi to 0.0
    elif 0 <= float(komi) < 0.5:
        komi = 0.5
    else:
        komi = float(komi)

    # Create JSON dictionary
    result = {
        "id": 'sgfTest',
        "rules": rules,  # Code above sets rules to "japanese" if it can't find the rules property
        "komi": komi,
        "boardXSize": size,
        "boardYSize": size,
        "initialPlayer": next_player, # Json formatting auto converts initialPlayer to a capital B/W instead of a lowercase B/W
        "analyzeTurns": analyzeTurns or [0], # Set to an empty list with the move 0 in it to analyze positions with no move property
        "initialStones": initial_stones,
        "moves": moves
    }
    # Convert dictionary to JSON-formatted string -> double quotes around property name is crucial, otherwise KataGo throws a syntax error
    result_json_format = json.dumps(result)

    return result_json_format
