from katago.convert_to_AB_AW import convert_sgf_data_to_AB_AW

def test_puzzle_to_AB_AW():
  ''' This function tests to make sure a puzzle for glift that has a move order,
  denoted by ;B and ;W is converted to the exact same puzzle, but without move order,
  this is because glift renders certain ghost stones sometimes, which may be causing some nasty
  rendering bugs.

  Copy the output into a SGF editor, or render it on localhost:5500
  with glift by creating a file and referencing it in /glift/sgfUp2Puzzle.html
  '''

  converted_9_by_9_sgf_data = convert_sgf_data_to_AB_AW("(;FF[4]CA[UTF-8]GM[1]DT[2023-09-03]PC[OGS: https://online-go.com/game/56766164]GN[play for fun]PB[iself101]PW[erikdeviking]BR[7k]WR[6k]TM[0]OT[15 simple]RE[B+16.5]SZ[9]KM[5.5]RU[Japanese];B[gc];W[df];B[gg];W[ge];B[dg];W[ef];B[eg];W[ec];B[cc];W[db];B[bf];W[cf];B[be];W[cg];B[ff];W[fe];B[gf];W[cb];B[bb];W[ba];B[bc];W[bg];B[ag];W[ad];B[ce];W[ed];B[dd];W[de];B[dc];W[bd];B[bh];W[ch];B[ah];W[bi];B[dh];W[di];B[ei];W[ci];B[fd];W[gd];B[fc];W[hc];B[eb];W[ee];B[fb];W[af];B[ae];W[ai];B[da];W[af];B[ag];W[fh];B[fg];W[eh];B[gh] (;W[fi]C[Incorrect - This was the actual move played in the game!]) (;W[he]C[CORRECT] ;B[hf]C[CORRECT] ;W[fi]C[CORRECT] ;B[gi]C[CORRECT] ;W[ei]C[CORRECT] ;B[if]C[CORRECT] ;W[ih]C[CORRECT]))")

  print(converted_9_by_9_sgf_data)

  # Failed on first try because it got the player's turn wrong, it set it to ;W instead of ;B
