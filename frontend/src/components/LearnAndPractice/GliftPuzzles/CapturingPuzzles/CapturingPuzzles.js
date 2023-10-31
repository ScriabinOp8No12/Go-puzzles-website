export const capturingPuzzles = [
  {
    // Capturing puzzle 1
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ee]AB[ed][de][ef]C[Capture the single white stone in one move! ] ;B[fe]C[Good job! Click the arrow on the right of the green check mark to try the next puzzle.]GB[1])",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Capturing puzzle 2
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[fd][ee]AB[fc][ed][gd]C[The 2 white stones are not connected by a straight line, so black can capture the white stones separately. ] ;B[fe]C[Well done! ]GB[1])",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },

  // Capturing puzzle 3
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[9]KM[6.50]AW[fd][fe]AB[fc][ed][gd][ee][ge]C[You can capture more than one stone at a time if the stones are connected by a straight line.];B[ff]C[Nice!]GB[1])",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Capturing puzzle 4
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ec][fc][dd][ed][de][df]AB[eb][fb][gc][cd][fd][gd][ce][ee][cf][ef][dg]C[Capture all 6 stones together!] ;B[dc]TR[db][gb][cc][fe][cg][eg]C[It seems like you are getting the hang of this now. 😀 Remember that you do NOT need to take away the diagonals coming off the stone or stones (see marked triangles). Only the straight lines (liberties) are needed for capturing. Alright, let's bump up the difficulty!]GB[1])",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Capturing puzzle 5
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[he][eg][fg][gg][hg]AB[gd][hd][ge]TR[he]C[The white stone has 2 liberties right now, but black can still capture it after a few moves.] (;B[hf] ;W[ie]C[Good start, running the opponent into the edge of the board is a very common technique for capturing stones.] (;B[if] ;W[id]C[Keeping the white stones in atari (at one liberty) is a good plan.] ;B[ic]C[Well done! ]GB[1]) (;B[id] ;W[if]C[Keeping the white stones in atari (at one liberty) is a good plan.] ;B[ig]C[Well done! ]GB[1]) (;B[ig] ;W[gf] ;B[id] ;W[if] ;B[hf]C[This works too (it's a snapback), are you sure you are a beginner? ]GB[1])) (;B[ie] ;W[hf]C[White connects back to their friends 😭]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Capturing puzzle 6
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ae][bf][cf][df][ef]AB[af][ag][bg][cg][dg] (;B[be] ;W[ad]TR[be]SQ[ae][bf][cf][df][ef]C[Good, the B5 move you played is known as a cut because it separates the A5 white stone from the other white stones. ] ;B[bd] ;W[ac]C[White is in trouble.] ;B[bc] ;W[ab] ;B[bb] ;W[aa] ;B[ba]C[What a beautiful sequence to capture the white stones! This pattern or 'shape' happens a lot in real games! ]GB[1]) (;B[ad] ;W[be]C[White connects up, we had a better starting move.]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
];
