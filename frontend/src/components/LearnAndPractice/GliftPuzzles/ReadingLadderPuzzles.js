export const readingLadderPuzzles = [
    {
      sgfString:
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] CR[fc]AW[ha][hb][ib][dc][fc][hc][cd][ed][fd][hd][ce][he][cf][ef][dg][dh]AB[gb][bc][ec][gc][bd][gd][be][ge][bf][hf][cg][gg][ch][fh]TR[ec]C[Save the black stone! Try your best to visualize the different sequences without placing stones on the board, then give it a try. ] ;B[eb] ;W[fb]C[Good start, white has to play F8 to cut black off otherwise black connects to the right side group and survives.] (;B[db] ;W[cb]C[Nice, white needs to play here otherwise black would connect up to the left side group.] ;B[cc] ;W[dd]C[Excellent! That was atari on a stone that was cutting black off (aka cutting stone), so white is forced to capture.] (;B[bb]C[Well done! ]GB[1]) (;B[ca]C[Well done! ]GB[1])) (;B[fa] ;W[db] ;B[ea] ;W[ga]C[Good try, but black is cut off and at 1 liberty]) (;B[cb] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[cc] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[da] ;W[db] ;B[ea] ;W[ca]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[ea] ;W[fa] (;B[db] ;W[cb]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[cb] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead])))",
      problemConditions: { GB: [] },
      widgetType: "STANDARD_PROBLEM",
    },
    {
      sgfString:
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[gc][gf][gg]AB[hf][fg][hg][gh]TR[gf][gg]C[Capture the 2 white stones!] (;B[ge] ;W[ff]C[Great start, keep going] ;B[ef] ;W[fe]C[This is starting to look familiar...] ;B[fd] ;W[ee]C[What was this pattern / shape called again? ] ;B[de] ;W[ed]C[I think it was called...] ;B[ec] ;W[dd]C[Ladder!] ;B[cd] ;W[dc] ;B[db] ;W[cc] ;B[bc] ;W[cb] (;B[bb] ;W[ca] (;B[da] ;W[fc]C[Be careful here (that's double atari)] ;B[ba]C[Great job! ]GB[1]) (;B[ba] ;W[gd]C[Be careful here (that's double atari)] ;B[da]C[Great job!]GB[1])) (;B[ca] ;W[bb] ;B[ab] ;W[eb]C[Be careful here (that's double atari)] ;B[ba]C[Great job!]GB[1])) (;B[ff] ;W[ge]C[Uh oh, white connects up to the G7 stone]))",
      problemConditions: { GB: [] },
      widgetType: "STANDARD_PROBLEM",
    },
    {
      sgfString:
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[db][gd][de][df]AB[cd][ce][cf][ef][dg]LB[gg:A]C[Capture the 2 white stones, if it's not possible, click A] (;B[dd] ;W[ee]C[This ladder won't work, but you can keep trying] ;B[fe] ;W[ed] (;B[ec] ;W[fd]C[White connects]) (;B[fd] ;W[ec]C[White connects to the D8 stone, and can't be laddered anymore])) (;B[ee] ;W[dd]C[This ladder won't work, but you can keep trying] (;B[ed] ;W[dc]C[White connects]) (;B[dc] ;W[ed] (;B[ec] ;W[fd]C[White connects]) (;B[fd] ;W[ec] (;B[eb] ;W[cc]C[White captures the stone and is connected with more than 2 liberties now]) (;B[fc] ;W[eb]C[White connects])))) (;B[ed] ;W[ee]C[Nice net!] ;B[fe] ;W[dd]C[And now?] ;B[dc]C[Solved, no ladder needed, white still got captured!]GB[1]) (;B[gg]C[White can be captured, but both the ladders don't work!]))",
      problemConditions: { GB: [] },
      widgetType: "STANDARD_PROBLEM",
    },
    {
      sgfString:
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] CR[dd]AW[dd][fd][ge][df][gf][cg][eg][fg][hg]AB[db][cc][gd][hd][be][ee][fe][ef][ff]LB[gb:A]TR[ee][fe][ef][ff]C[Can black save the 4 stones that were just net? Click A if it's not possible] (;B[gb]C[Black can save the group, this is an example of a net that doesn't work!]) (;B[de] ;W[ce]C[This won't work, but you can keep trying] ;B[ed] ;W[ec]C[Black gets captured now]) (;B[ed] ;W[ec]C[Great, now what?] (;B[fc] ;W[de]C[The net didn't work so you solved it, but white has another trick up their sleeves] ;B[fd]C[You've successfully saved the 4 black stones, nice!]GB[1]) (;B[de] ;W[ce]C[This doesn't work])))",
      problemConditions: { GB: [] },
      widgetType: "STANDARD_PROBLEM",
    },
    {
      sgfString:
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] CR[di]AW[aa][ba][bb][cb][db][eb][fb][fc][hc][gd][ge][gf][gg][hg][eh][fh][di]AB[ab][ac][bc][cc][dc][ec][ed][fd][fe][ff][dg][eg][fg][ch][dh]C[White just made a very common mistake, how can black punish white?] (;B[ci] (;W[ei]C[Great start, now what?] ;B[gh]C[Nice cut!] (;W[fi] ;B[gi]C[Nice job!]GB[1]) (;W[hh] ;B[fi]C[Great!]GB[1])) (;W[gh] ;B[ei]C[Nice capture]GB[1])) (;B[gh] ;W[hh]C[This works, I don't think you are a beginner...] ;B[ci] ;W[ei] ;B[fi]C[Nice]GB[1]))",
      problemConditions: { GB: [] },
      widgetType: "STANDARD_PROBLEM",
    },
    {
      sgfString:
        "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[gb][gd][fe][ge][ff]AB[hd][ee][he][ef][gf][hf][fg]TR[gd][fe][ge][ff]C[Capture the 4 white stones in a ladder!] (;B[gc] ;W[fd]C[Great start, keep going, which way should we atari from? Or do both work?] (;B[ed] ;W[fc]TR[gc]C[Oops, this ladder won't work now since G7 is in atari]) (;B[fc] ;W[ed]C[Nice decision, what now?] ;B[dd] ;W[ec] ;B[eb] ;W[dc] ;B[cc] ;W[db] (;B[da] ;W[cb] ;B[bb] ;W[fb] ;B[ca]C[Nice one!]GB[1]) (;B[cb] ;W[da] (;B[ca] ;W[fb] ;B[ea]C[Nice one!]GB[1]) (;B[ea] ;W[fb] ;B[ca]C[Nice one!]GB[1])))) (;B[fd] ;W[gc]C[Nope, that won't work, white connects up]))",
      problemConditions: { GB: [] },
      widgetType: "STANDARD_PROBLEM",
    },
    // {
    //     sgfString:
    //       "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[gb][gd][fe][ge][ff]AB[hd][ee][he][ef][gf][hf][fg]TR[gd][fe][ge][ff]C[Capture the 4 white stones in a ladder!] (;B[gc] ;W[fd]C[Great start, keep going, which way should we atari from? Or do both work?] (;B[ed] ;W[fc]TR[gc]C[Oops, this ladder won't work now since G7 is in atari]) (;B[fc] ;W[ed]C[Nice decision, what now?] ;B[dd] ;W[ec] ;B[eb] ;W[dc] ;B[cc] ;W[db] (;B[da] ;W[cb] ;B[bb] ;W[fb] ;B[ca]C[Nice one!]GB[1]) (;B[cb] ;W[da] (;B[ca] ;W[fb] ;B[ea]C[Nice one!]GB[1]) (;B[ea] ;W[fb] ;B[ca]C[Nice one!]GB[1])))) (;B[fd] ;W[gc]C[Nope, that won't work, white connects up]))",
    //     problemConditions: { GB: [] },
    //     widgetType: "STANDARD_PROBLEM",
    //   },
  ];
