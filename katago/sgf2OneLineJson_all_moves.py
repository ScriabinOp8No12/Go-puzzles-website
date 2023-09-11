from sgfmill import sgf
import json

# Converts a SGF into a single line JSON dictionary to feed into the Katago analysis engine on the command line
# NOTE: the convert_coord function takes in a tuple of INTEGERS, not letters.


def sgf_to_one_line_json(input_file):
    # Load the SGF file
    with open(input_file, 'r') as f:
        sgf_game = sgf.Sgf_game.from_string(f.read())

    root_node = sgf_game.get_root()

    # Extract relevant properties from SGF
    try:
      size = sgf_game.get_size()
      # if no size property found in SGF, throw an error with a message!
    except ValueError:
      print("Invalid SGF, size of board unknown!")

    komi = root_node.get('KM') if root_node.has_property('KM') else 0.5
    rules = root_node.get('RU').lower() if root_node.has_property('RU') else "?"
    # Need to make sure that if there's no AB or AW property (like in an even game) that there's no error
    # *** This must be converting the stones into integer coordinates instead of using sgf letter coordinates
    black_stones = root_node.get(
        'AB') if root_node.has_property('AB') else None
    white_stones = root_node.get(
        'AW') if root_node.has_property('AW') else None

    # Convert coordinates to KataGo 1 line JSON dictionary format
    # coord will be a tuple of INTEGERS, not letters!
    def convert_coord(coord):
        # unpack x and y integers from the coord we pass in
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

    # Create analyzeTurns list
    analyzeTurns = list(range(len(moves)))

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
      next_player = input("Select next player, please input B for black and W for white: ")

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
        "id": 'sgfTest3',
        "rules": rules,
        "komi": komi,
        "boardXSize": size,
        "boardYSize": size,
        # Json formatting below automatically converts initialPlayer to a capital B/W instead of a lowercase B/W
        "initialPlayer": next_player,
        # We need analyzeTurns to be set to an empty list with the move 0 in it to analyze positions with no move property
        "analyzeTurns": analyzeTurns or [0],
        "initialStones": initial_stones,
        "moves": moves
    }
    # Convert dictionary to JSON-formatted string -> double quotes around property name is crucial, otherwise KataGo throws a syntax error
    result_json_format = json.dumps(result)

    return result_json_format

# Testing SGFs:
# This one has no move order and no PL property
# result = sgf_to_one_line_json('katago/positions/puzzle3_7_20_23.sgf')
result = sgf_to_one_line_json('katago/positionsWithMoveOrder/puzzle4_7_20_23.sgf')

# result = sgf_to_one_line_json('katago/positions/puzzle2_7_20_23.sgf')
# result = sgf_to_one_line_json('katago/positions/puzzle4_as_position_8_18_23.sgf')

print(result)

# puzzle2 result below
# {"id":"sgfTest3","isDuringSearch":false,"moveInfos":[{"lcb":0.949013928,"move":"P18","order":0,"prior":0.976692855,"pv":["P18","O16","O6","O3","S9","N17"],"scoreLead":5.99942999,"scoreMean":5.99942999,"scoreSelfplay":8.20637113,"scoreStdev":14.8662875,"utility":0.860247985,"utilityLcb":0.94995461,"visits":24,"weight":33.727346109796486,"winrate":0.916975848},{"lcb":2.22026222,"move":"O6","order":1,"prior":0.00243354216,"pv":["O6"],"scoreLead":11.0965338,"scoreMean":11.0965338,"scoreSelfplay":12.2656183,"scoreStdev":14.1527813,"utility":1.00624334,"utilityLcb":4.50624335,"visits":1,"weight":1.7309293680954236,"winrate":0.970262213},{"lcb":2.21397983,"move":"Q15","order":2,"prior":0.000757954607,"pv":["Q15"],"scoreLead":11.4115992,"scoreMean":11.4115992,"scoreSelfplay":12.1958847,"scoreStdev":14.7406811,"utility":0.991983072,"utilityLcb":4.49198309,"visits":1,"weight":1.396496100075482,"winrate":0.963979824}],"rootInfo":{"currentPlayer":"W","rawStScoreError":2.25268579,"rawStWrError":0.0590167567,"rawVarTimeLeft":13.9276733,"scoreLead":5.99019091,"scoreSelfplay":8.21751597,"scoreStdev":14.8843515,"symHash":"2AF36EB1A416AE50BABC01DE5A7E2419","thisHash":"8ECBE553F76CD9539F7F5E5D1BA26FEF","utility":0.859766102,"visits":27,"weight":36.47822977892508,"winrate":0.916724168},"turnNumber":0}

#puzzle4 result below (as a position)
# {"id":"sgfTest3","isDuringSearch":false,"moveInfos":[{"lcb":0.46302867,"move":"K4","order":0,"prior":0.272438973,"pv":["K4","K3","J4","J3","H3","H2"],"scoreLead":-0.313323802,"scoreMean":-0.313323802,"scoreSelfplay":0.24193441,"scoreStdev":15.437359,"utility":-0.00833881157,"utilityLcb":-0.134263522,"visits":9,"weight":12.65090231312707,"winrate":0.50800178},{"lcb":0.432533159,"move":"C18","order":1,"prior":0.114773631,"pv":["C18","B18","K4","K3","R3"],"scoreLead":-0.259766435,"scoreMean":-0.259766435,"scoreSelfplay":0.246033099,"scoreStdev":15.0646603,"utility":0.0040088496,"utilityLcb":-0.215350416,"visits":6,"weight":8.70262502875891,"winrate":0.510875754},{"lcb":0.32764284,"move":"R3","order":2,"prior":0.160409063,"pv":["R3","K4","Q5"],"scoreLead":-0.473317291,"scoreMean":-0.473317291,"scoreSelfplay":-0.306698143,"scoreStdev":14.7956536,"utility":-0.0339995497,"utilityLcb":-0.466657964,"visits":4,"weight":6.510494146550048,"winrate":0.482163703},{"lcb":0.175390542,"move":"O6","order":3,"prior":0.151812956,"pv":["O6","P6","P7"],"scoreLead":-0.749925731,"scoreMean":-0.749925731,"scoreSelfplay":-0.635109075,"scoreStdev":15.4818797,"utility":-0.103312363,"utilityLcb":-0.909246749,"visits":3,"weight":4.313306039857786,"winrate":0.463224252},{"lcb":-0.085037469,"move":"S2","order":4,"prior":0.150102898,"pv":["S2","K4"],"scoreLead":-0.764805304,"scoreMean":-0.764805304,"scoreSelfplay":-0.870612769,"scoreStdev":15.0723651,"utility":-0.117094164,"utilityLcb":-1.60683253,"visits":2,"weight":3.8047616958624433,"winrate":0.447011947},{"lcb":-0.060185966,"move":"P6","order":5,"prior":0.0488170125,"pv":["P6","O6"],"scoreLead":-0.560132638,"scoreMean":-0.560132638,"scoreSelfplay":-0.310113072,"scoreStdev":15.581634,"utility":-0.0397793086,"utilityLcb":-1.56028838,"visits":2,"weight":2.924092681922522,"winrate":0.482852988}],"rootInfo":{"currentPlayer":"B","rawStScoreError":1.20297849,"rawStWrError":0.0585551001,"rawVarTimeLeft":42.6128311,"scoreLead":-0.382525962,"scoreSelfplay":0.014491093,"scoreStdev":15.2210871,"symHash":"3DFE41D3E9B0D27DE8C58FADBD2A3E81","thisHash":"D05F3C829BC7E6C3353107038A41311C","utility":-0.0213231855,"visits":27,"weight":40.40770182542609,"winrate":0.497513597},"turnNumber":0}
