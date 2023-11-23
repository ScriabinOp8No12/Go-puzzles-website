from katago.convert_to_AB_AW import convert_sgf_data_to_AB_AW

def test_puzzle_to_AB_AW():
  ''' This function tests to make sure a puzzle for glift that has a move order,
  denoted by ;B and ;W is converted to the exact same puzzle, but without move order,
  this is because glift renders certain ghost stones sometimes, which may be causing some nasty
  rendering bugs.

  Copy the output into a SGF editor, or render it on localhost:5500
  with glift by creating a file and referencing it in /glift/sgfUp2Puzzle.html
  '''

  converted_13_by_13_sgf_data = convert_sgf_data_to_AB_AW("(;FF[4]CA[UTF-8]GM[1]DT[2023-09-05]PC[OGS: https://online-go.com/game/56820296]GN[Vriendschappelijke Wedstrijd]PB[goloveye2]PW[erikdeviking]BR[6k]WR[6k]TM[150]OT[5x60 byo-yomi]RE[B+2.5]SZ[13]KM[5.5]RU[Japanese];B[dd];W[jj];B[kd];W[cj];B[gk];W[ek];B[jk];W[kk];B[jl];W[kl];B[ij];W[ji];B[fi];W[dh];B[cg];W[ch];B[gd];W[dg];B[cf];W[jc];B[kc];W[kb];B[lb];W[ib];B[ka];W[gb];B[fc];W[fb];B[eb];W[gc];B[fd];W[jb];B[jd];W[id];B[ie];W[hd];B[he];W[ea];B[db];W[ja] (;B[fa]C[Incorrect - This was the actual move played in the game!]) (;B[li]C[CORRECT] ;W[lj]C[CORRECT] ;B[ki]C[CORRECT] ;W[kj]C[CORRECT] ;B[kg]C[CORRECT] ;W[jg]C[CORRECT] ;B[kf]C[CORRECT] ;W[ii]C[CORRECT]) (;B[hc]C[CORRECT] ;W[ic]C[CORRECT] ;B[li]C[CORRECT] ;W[lj]C[CORRECT] ;B[ki]C[CORRECT] ;W[kj]C[CORRECT]))")

  print(converted_13_by_13_sgf_data)
