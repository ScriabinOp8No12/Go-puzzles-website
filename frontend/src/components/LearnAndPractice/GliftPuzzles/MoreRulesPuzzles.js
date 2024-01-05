export const moreRulesPuzzles = [
  {
    // More Rules puzzle 1
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ba][ab][bb][bc][ad][bd]AB[ca][cb][cc][cd][ae][be][ce]LB[gc:A][ge:B]C[Is white alive or can they be killed? Place a stone at A if white can be killed. Place a stone at B if white can NOT be killed.] (;B[gc]C[Nice, white is already alive since they have 2 eyes. Black is literally not allowed to place a stone at A9 or A7, meaning white can never be killed.]GB[1]) (;B[ge]C[Unfortunately for black, white is already alive. You can go back to the original puzzle and try to click A7 and A9, but it won't let you since those are illegal moves (you are not allowed to capture yourself) ]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More Rules puzzle 2
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ha][hb][hc][hd][he][ie]AB[ga][gb][gc][gd][ge][gf][hf][if]LB[cc:A]C[How would black stop white from getting 2 eyes and living? If white is already alive, click A. ] (;B[cc]C[Correct, white is not killable, go back to the original puzzle to explore why!]GB[1]) (;B[ia] ;W[ib]C[White can not be killed from here, but you can keep trying. ] (;B[ic] ;W[id]C[White has 2 eyes]) (;B[id] ;W[ic]C[White has 2 eyes])) (;B[ib] ;W[ic]C[White has 2 eyes, black is not allowed to suicide with J9]) (;B[ic] ;W[ib]C[White is alive with 2 eyes, black is not allowed to suicide with J6.]) (;B[id] ;W[ic]C[White cannot be killed from here, but you can keep trying.] (;B[ib] ;W[ia]C[White has 2 eyes.]) (;B[ia] ;W[ib]C[White has 2 eyes.])))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },

  // More Rules puzzle 3
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[da][ha][db][gb][hb][dc][gc][hc][dd][ed][fd][gd]AB[ca][ea][ia][cb][eb][ib][cc][ec][fc][ic][cd][hd][id][ce][de][ee][fe][ge][he]LB[cg:A]C[Place a stone at A if black can't do anything good.] (;B[fa]TR[ga][fb]C[Good job, you found the seki! If either player places a stone at the triangle, the opponent can immediately capture them. Although both players don't have 2 eyes, they are both alive!]GB[1]) (;B[fb] ;W[fa]C[White captures and has 2 eyes (and lives), there's one eye at G9 and the other space is enough for at least another eye. ]) (;B[ga] ;W[fa]C[White lives with 2 eyes, black is not allowed to play F8 because they would be capturing themselves with that move. ]) (;B[cg]C[Nope, black can find a seki! ]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More Rules puzzle 4
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ec][fc][dd][ed][de][df]AB[eb][fb][gc][cd][fd][gd][ce][ee][cf][ef][dg]C[Capture all 6 stones together!] ;B[dc]TR[db][gb][cc][fe][cg][eg]C[It seems like you are getting the hang of this now. 😀 Remember that you do NOT need to take away the diagonals coming off the stone or stones (see marked triangles). Only the straight lines (liberties) are needed for capturing. Alright, let's bump up the difficulty!]GB[1])",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More Rules puzzle 5
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[he][eg][fg][gg][hg]AB[gd][hd][ge]TR[he]C[The white stone has 2 liberties right now, but black can still capture it after a few moves.] (;B[hf] ;W[ie]C[Good start, running the opponent into the edge of the board is a very common technique for capturing stones.] (;B[if] ;W[id]C[Keeping the white stones in atari (at one liberty) is a good plan.] ;B[ic]C[Well done! ]GB[1]) (;B[id] ;W[if]C[Keeping the white stones in atari (at one liberty) is a good plan.] ;B[ig]C[Well done! ]GB[1]) (;B[ig] ;W[gf] ;B[id] ;W[if] ;B[hf]C[This works too (it's a snapback), are you sure you are a beginner? ]GB[1])) (;B[ie] ;W[hf]C[White connects back to their friends 😭]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More Rules puzzle 6
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ae][bf][cf][df][ef]AB[af][ag][bg][cg][dg] (;B[be] ;W[ad]TR[be]SQ[ae][bf][cf][df][ef]C[Good, the B5 move you played is known as a cut because it separates the A5 white stone from the other white stones. ] ;B[bd] ;W[ac]C[White is in trouble.] ;B[bc] ;W[ab] ;B[bb] ;W[aa] ;B[ba]C[What a beautiful sequence to capture the white stones! This pattern or 'shape' happens a lot in real games! ]GB[1]) (;B[ad] ;W[be]C[White connects up, we had a better starting move.]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
];
