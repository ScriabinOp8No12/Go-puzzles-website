from sgfmill import sgf, boards
import re

def format_point(col, row):
    """Format row and column into SGF point string."""
    return chr(97 + col) + chr(97 + row)

def convert_sgf_data_to_AB_AW(sgf_data):
    game = sgf.Sgf_game.from_string(sgf_data)
    board_size = game.get_size()
    root_node = game.get_root()

    go_board = boards.Board(board_size)

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

    # Create sets for black and white stones based on the final board state
    b_stones, w_stones = set(), set()
    for row in range(board_size):
        for col in range(board_size):
            stone = go_board.get(col, row)
            if stone == "b":
                b_stones.add((col, row))
            elif stone == "w":
                w_stones.add((col, row))

    # Convert sets of stones to SGF format
    ab_sequence = 'AB' + ''.join([f'[{format_point(row, col)}]' for row, col in b_stones]) if b_stones else ''
    aw_sequence = 'AW' + ''.join([f'[{format_point(row, col)}]' for row, col in w_stones]) if w_stones else ''

    # Find the position to insert AB and AW sequences
    first_semicolon = sgf_data.find(';')
    second_semicolon = sgf_data.find(';', first_semicolon + 1)

    # Insert AB and AW sequences after the second semicolon
    modified_sgf_data = sgf_data[:second_semicolon+1] + ab_sequence + aw_sequence + sgf_data[second_semicolon+1:]

    return modified_sgf_data

# Convert the SGF data, excluding variations
converted_sgf_data = convert_sgf_data_to_AB_AW("(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))")

print(converted_sgf_data)
