export const readingLadderPuzzles = [
    {
      // Reading puzzle 1
      sgfString:
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] CR[fc]AW[ha][hb][ib][dc][fc][hc][cd][ed][fd][hd][ce][he][cf][ef][dg][dh]AB[gb][bc][ec][gc][bd][gd][be][ge][bf][hf][cg][gg][ch][fh]TR[ec]C[Save the black stone! Try your best to visualize the different sequences without placing stones on the board, then give it a try. ] ;B[eb] ;W[fb]C[Good start, white has to play F8 to cut black off otherwise black connects to the right side group and survives.] (;B[db] ;W[cb]C[Nice, white needs to play here otherwise black would connect up to the left side group.] ;B[cc] ;W[dd]C[Excellent! That was atari on a stone that was cutting black off (aka cutting stone), so white is forced to capture.] (;B[bb]C[Well done! ]GB[1]) (;B[ca]C[Well done! ]GB[1])) (;B[fa] ;W[db] ;B[ea] ;W[ga]C[Good try, but black is cut off and at 1 liberty]) (;B[cb] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[cc] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[da] ;W[db] ;B[ea] ;W[ca]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[ea] ;W[fa] (;B[db] ;W[cb]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[cb] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead])))",
      problemConditions: { GB: [] },
      widgetType: "STANDARD_PROBLEM",
    },
    // Ladder puzzle 2
    {
      sgfString:
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[gc][gf][gg]AB[hf][fg][hg][gh]TR[gf][gg]C[Capture the 2 white stones!] (;B[ge] ;W[ff]C[Great start, keep going] ;B[ef] ;W[fe]C[This is starting to look familiar...] ;B[fd] ;W[ee]C[What was this pattern / shape called again? ] ;B[de] ;W[ed]C[I think it was called...] ;B[ec] ;W[dd]C[Ladder!] ;B[cd] ;W[dc] ;B[db] ;W[cc] ;B[bc] ;W[cb] (;B[bb] ;W[ca] (;B[da] ;W[fc]C[Be careful here (that's double atari)] ;B[ba]C[Great job! ]GB[1]) (;B[ba] ;W[gd]C[Be careful here (that's double atari)] ;B[da]C[Great job!]GB[1])) (;B[ca] ;W[bb] ;B[ab] ;W[eb]C[Be careful here (that's double atari)] ;B[ba]C[Great job!]GB[1])) (;B[ff] ;W[ge]C[Uh oh, white connects up to the G7 stone]))",
      problemConditions: { GB: [] },
      widgetType: "STANDARD_PROBLEM",
    },

//     // Capturing puzzle 3
//     {
//       sgfString:
//         "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[9]KM[6.50]AW[fd][fe]AB[fc][ed][gd][ee][ge]C[You can capture more than one stone at a time if the stones are connected by a straight line.];B[ff]C[Nice!]GB[1])",
//       problemConditions: { GB: [] },
//       widgetType: "STANDARD_PROBLEM",
//     },
//     // Capturing puzzle 4
//     {
//       sgfString:
//         "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ec][fc][dd][ed][de][df]AB[eb][fb][gc][cd][fd][gd][ce][ee][cf][ef][dg]C[Capture all 6 stones together!] ;B[dc]TR[db][gb][cc][fe][cg][eg]C[It seems like you are getting the hang of this now. 😀 Remember that you do NOT need to take away the diagonals coming off the stone or stones (see marked triangles). Only the straight lines (liberties) are needed for capturing. Alright, let's bump up the difficulty!]GB[1])",
//       problemConditions: { GB: [] },
//       widgetType: "STANDARD_PROBLEM",
//     },
//     // Capturing puzzle 5
//     {
//       sgfString:
//         "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[he][eg][fg][gg][hg]AB[gd][hd][ge]TR[he]C[The white stone has 2 liberties right now, but black can still capture it after a few moves.] (;B[hf] ;W[ie]C[Good start, running the opponent into the edge of the board is a very common technique for capturing stones.] (;B[if] ;W[id]C[Keeping the white stones in atari (at one liberty) is a good plan.] ;B[ic]C[Well done! ]GB[1]) (;B[id] ;W[if]C[Keeping the white stones in atari (at one liberty) is a good plan.] ;B[ig]C[Well done! ]GB[1]) (;B[ig] ;W[gf] ;B[id] ;W[if] ;B[hf]C[This works too (it's a snapback), are you sure you are a beginner? ]GB[1])) (;B[ie] ;W[hf]C[White connects back to their friends 😭]))",
//       problemConditions: { GB: [] },
//       widgetType: "STANDARD_PROBLEM",
//     },
//     // Capturing puzzle 6
//     {
//       sgfString:
//         "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ae][bf][cf][df][ef]AB[af][ag][bg][cg][dg] (;B[be] ;W[ad]TR[be]SQ[ae][bf][cf][df][ef]C[Good, the B5 move you played is known as a cut because it separates the A5 white stone from the other white stones. ] ;B[bd] ;W[ac]C[White is in trouble.] ;B[bc] ;W[ab] ;B[bb] ;W[aa] ;B[ba]C[What a beautiful sequence to capture the white stones! This pattern or 'shape' happens a lot in real games! ]GB[1]) (;B[ad] ;W[be]C[White connects up, we had a better starting move.]))",
//       problemConditions: { GB: [] },
//       widgetType: "STANDARD_PROBLEM",
//     },
  ];
