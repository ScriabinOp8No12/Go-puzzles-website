from sgfmill import sgf, boards
import re

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

    # print(first_part)
    second_part = ab_string + aw_string

    # print(first_part+second_part)

    last_part_index_b = original_sgf_data.find("(;B")
    last_part_index_w = original_sgf_data.find("(;W")

    # If neither ';B' nor ';W' is found, slice_index will be -1
    slice_index_end = min(last_part_index_b if last_part_index_b != -1 else float('inf'),
                      last_part_index_w if last_part_index_w != -1 else float('inf'))

    if slice_index_end != float('inf'):
        third_part = original_sgf_data[slice_index_end:]
    else:
        third_part = original_sgf_data

    return first_part + second_part + third_part

# Convert the SGF data
converted_sgf_data = convert_sgf_data_to_AB_AW("(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))")

print(converted_sgf_data)
