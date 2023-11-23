from sgfmill import sgf, boards

def to_go_coordinates(row, col):
    # Adjust the column index to skip 'I'
    if col >= 8:
        col += 1
    column_letter = chr(col + ord('A'))

    # Convert row index to Go board row number
    go_row = row + 1

    return f"{column_letter}{go_row}"

def convert_to_sgf(coord, board_size):
    col, row = coord[0], int(coord[1:])
    x = ord(col) - ord('A')
    if col > 'I':
        x -= 1
    y = board_size - row
    sgf_col = chr(ord('a') + x)
    sgf_row = chr(ord('a') + y)
    return sgf_col + sgf_row

def convert_sgf_data_to_AB_AW(sgf_data):
    # Find the second occurrence of "("
    split_index = sgf_data.find("(", sgf_data.find("(") + 1)

    original_sgf_data = sgf_data
    # Only pass in a specific slice of the string to sgf mill
    sgf_data = sgf_data[:split_index-1] + ")"

    game = sgf.Sgf_game.from_string(sgf_data)
    board_size = game.get_size()
    root_node = game.get_root()

    go_board = boards.Board(board_size)
    black_stones, white_stones = [], []

    # Iterate through the game from the root node
    node = root_node
    while True:
        try:
            node = node[0]
        except IndexError:
            break

        color, move = node.get_move()
        if move is not None:
            row, col = move
            try:
                go_board.play(col, row, color)
            except Exception as e:
                print(f'Error playing move: {e}')

    # Iterate over rows and columns of Go board to draw stones based on state of Board object
    for row in range(board_size):
        for col in range(board_size):
            # Gets the state of the intersection at the current row and column by calling the get() method of the go_board object
            # The method returns "b" if there is a black stone at the intersection, "w" if there is a white stone, and None if the intersection is empty
            stone = go_board.get(col, row)
            if stone == "b" or stone == "w":
                coord = to_go_coordinates(row, col)
                if stone == "b":
                    sgf_coord = convert_to_sgf(coord, board_size)
                    black_stones.append(sgf_coord)
                elif stone == "w":
                    sgf_coord = convert_to_sgf(coord, board_size)
                    white_stones.append(sgf_coord)
    ab_string = "AB" + "".join(["[{}]".format(coord) for coord in black_stones])
    aw_string = "AW" + "".join(["[{}]".format(coord) for coord in white_stones])

    # ***** Concatenate the initial portion of the sgf_data string, then add the converted ;B ;W into AB and AW, then add the last portion
    # of the string with all the comments including the incorrect and correct move variations *****
    index_B = original_sgf_data.find(";B")
    index_W = original_sgf_data.find(";W")

    # If neither ';B' nor ';W' is found, slice_index will be -1
    slice_index = min(index_B if index_B != -1 else float('inf'),
                      index_W if index_W != -1 else float('inf'))

    if slice_index != float('inf'):
        first_part = original_sgf_data[:slice_index]
    else:
        first_part = original_sgf_data

    second_part = ab_string + aw_string

    last_part_index_b = original_sgf_data.find("(;B")
    last_part_index_w = original_sgf_data.find("(;W")

    # If neither '(;B' nor '(;W' is found, slice_index will be -1
    slice_index_end = min(last_part_index_b if last_part_index_b != -1 else float('inf'),
                      last_part_index_w if last_part_index_w != -1 else float('inf'))

    # Determine which substring is found first and add the appropriate "PL" property
    if slice_index_end != float('inf'):
        if slice_index_end == last_part_index_b:
            player_move = "PL[B]"
        else:  # This will be last_part_index_w
            player_move = "PL[W]"
    else:
        # Default behavior when neither is found
        player_move = "PL[B]"

    # Assign third_part
    third_part = original_sgf_data[slice_index_end:]

    return first_part + player_move + second_part + third_part

def process_sgf_data(input_data):
    """
    Process either a single sgf_data string or a list of sgf_data strings.

    Args:
    input_data (str or list): A single sgf_data string or a list of sgf_data strings.

    Returns:
    str or list: The converted sgf_data string or a list of converted sgf_data strings.
    """
    if isinstance(input_data, str):
        # Single sgf_data string
        return convert_sgf_data_to_AB_AW(input_data)
    elif isinstance(input_data, list):
        # List of sgf_data strings
        return [convert_sgf_data_to_AB_AW(sgf_data) for sgf_data in input_data]
    else:
        raise TypeError("Input must be a string or a list of strings.")

# # For a single sgf_data string
# converted_data = process_sgf_data(single_sgf_data_string)

# # For a list of sgf_data strings
# converted_data_list = process_sgf_data(list_of_sgf_data_strings)
