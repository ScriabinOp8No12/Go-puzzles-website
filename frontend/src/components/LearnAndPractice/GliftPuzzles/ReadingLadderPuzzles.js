export const readingLadderPuzzles = [
  // Puzzle 1
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] CR[fc]AW[ha][hb][ib][dc][fc][hc][cd][ed][fd][hd][ce][he][cf][ef][dg][dh]AB[gb][bc][ec][gc][bd][gd][be][ge][bf][hf][cg][gg][ch][fh]TR[ec]C[Save the black stone! Try your best to visualize the different sequences without placing stones on the board, then give it a try. ] ;B[eb] ;W[fb]C[Good start, white has to play F8 to cut black off otherwise black connects to the right side group and survives.] (;B[db] ;W[cb]C[Nice, white needs to play here otherwise black would connect up to the left side group.] ;B[cc] ;W[dd]C[Excellent! That was atari on a stone that was cutting black off (aka cutting stone), so white is forced to capture.] (;B[bb]C[Well done! ]GB[1]) (;B[ca]C[Well done! ]GB[1])) (;B[fa] ;W[db] ;B[ea] ;W[ga]C[Good try, but black is cut off and at 1 liberty]) (;B[cb] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[cc] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[da] ;W[db] ;B[ea] ;W[ca]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[ea] ;W[fa] (;B[db] ;W[cb]C[This wasn't enough to connect back, black is now cut off and dead]) (;B[cb] ;W[db]C[This wasn't enough to connect back, black is now cut off and dead])))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 2
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[gc][gf][gg]AB[hf][fg][hg][gh]TR[gf][gg]C[Capture the 2 white stones!] (;B[ge] ;W[ff]C[Great start, keep going] ;B[ef] ;W[fe]C[This is starting to look familiar...] ;B[fd] ;W[ee]C[What was this pattern / shape called again? ] ;B[de] ;W[ed]C[I think it was called...] ;B[ec] ;W[dd]C[Ladder!] ;B[cd] ;W[dc] ;B[db] ;W[cc] ;B[bc] ;W[cb] (;B[bb] ;W[ca] (;B[da] ;W[fc]C[Be careful here (that's double atari)] ;B[ba]C[Great job! ]GB[1]) (;B[ba] ;W[gd]C[Be careful here (that's double atari)] ;B[da]C[Great job!]GB[1])) (;B[ca] ;W[bb] ;B[ab] ;W[eb]C[Be careful here (that's double atari)] ;B[ba]C[Great job!]GB[1])) (;B[ff] ;W[ge]C[Uh oh, white connects up to the G7 stone]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 3
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[db][gd][de][df]AB[cd][ce][cf][ef][dg]LB[gg:A]C[Capture the 2 white stones, if it's not possible, click A] (;B[dd] ;W[ee]C[This ladder won't work, but you can keep trying] ;B[fe] ;W[ed] (;B[ec] ;W[fd]C[White connects]) (;B[fd] ;W[ec]C[White connects to the D8 stone, and can't be laddered anymore])) (;B[ee] ;W[dd]C[This ladder won't work, but you can keep trying] (;B[ed] ;W[dc]C[White connects]) (;B[dc] ;W[ed] (;B[ec] ;W[fd]C[White connects]) (;B[fd] ;W[ec] (;B[eb] ;W[cc]C[White captures the stone and is connected with more than 2 liberties now]) (;B[fc] ;W[eb]C[White connects])))) (;B[ed] ;W[ee]C[Nice net!] ;B[fe] ;W[dd]C[And now?] ;B[dc]C[Solved, no ladder needed, white still got captured!]GB[1]) (;B[gg]C[White can be captured, but both the ladders don't work!]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 4
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] CR[dd]AW[dd][fd][ge][df][gf][cg][eg][fg][hg]AB[db][cc][gd][hd][be][ee][fe][ef][ff]LB[gb:A]TR[ee][fe][ef][ff]C[Can black save the 4 stones that were just net? Click A if it's not possible] (;B[gb]C[Black can save the group, this is an example of a net that doesn't work!]) (;B[de] ;W[ce]C[This won't work, but you can keep trying] ;B[ed] ;W[ec]C[Black gets captured now]) (;B[ed] ;W[ec]C[Great, now what?] (;B[fc] ;W[de]C[The net didn't work so you solved it, but white has another trick up their sleeves] ;B[fd]C[You've successfully saved the 4 black stones, nice!]GB[1]) (;B[de] ;W[ce]C[This doesn't work])))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 5
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] CR[di]AW[aa][ba][bb][cb][db][eb][fb][fc][hc][gd][ge][gf][gg][hg][eh][fh][di]AB[ab][ac][bc][cc][dc][ec][ed][fd][fe][ff][dg][eg][fg][ch][dh]C[White just made a very common mistake, how can black punish white?] (;B[ci] (;W[ei]C[Great start, now what?] ;B[gh]C[Nice cut!] (;W[fi] ;B[gi]C[Nice job!]GB[1]) (;W[hh] ;B[fi]C[Great!]GB[1])) (;W[gh] ;B[ei]C[Nice capture]GB[1])) (;B[gh] ;W[hh]C[This works, I don't think you are a beginner...] ;B[ci] ;W[ei] ;B[fi]C[Nice]GB[1]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 6
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[gb][gd][fe][ge][ff]AB[hd][ee][he][ef][gf][hf][fg]TR[gd][fe][ge][ff]C[Capture the 4 white stones in a ladder!] (;B[gc] ;W[fd]C[Great start, keep going, which way should we atari from? Or do both work?] (;B[ed] ;W[fc]TR[gc]C[Oops, this ladder won't work now since G7 is in atari]) (;B[fc] ;W[ed]C[Nice decision, what now?] ;B[dd] ;W[ec] ;B[eb] ;W[dc] ;B[cc] ;W[db] (;B[da] ;W[cb] ;B[bb] ;W[fb] ;B[ca]C[Nice one!]GB[1]) (;B[cb] ;W[da] (;B[ca] ;W[fb] ;B[ea]C[Nice one!]GB[1]) (;B[ea] ;W[fb] ;B[ca]C[Nice one!]GB[1])))) (;B[fd] ;W[gc]C[Nope, that won't work, white connects up]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 7
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[aa][ca][da][bb][db][eb][dc][fc][gc][dd][gd][hd][id][de][ff][gf][hf][hg][gh][hh][ih][fi][gi]AB[ab][ac][bc][cc][ec][ad][bd][cd][ed][fd][ae][be][ce][ee][fe][ge][he][cf][df][ef][bg][dg][eg][fg][gg][ch][eh][fh][di][ei]C[Win the game as black, assume white has 0.5 komi (white wins the tie).] (;B[ie] ;W[if]C[Excellent job, J5 was sente because if white didn't go J4, black could go J4 and kill the white group.] ;B[cb] ;W[fb]C[Good, white couldn't connect at B9 because black could play F8 after and kill the whole thing.] ;B[ba]TR[aa][bb][af][bf][ag][cg][ah][bh][dh][ai][bi][ci]SQ[ea][fa][ga][ha][ia][gb][hb][ib][hc][ic][ig][hi][ii]C[You are amazing! Black wins 14 to 13.5 (half point victory!) Black has 10 points in the bottom left corner, 2 points in the top left corner, for 12 points. Black has 2 prisoners, it's easier to add that to black's score instead of subtracting off white's score. So black has 10 + 2 + 2 = 14. White has 10 in the top right and 3 in the bottom right for 10 + 3 = 13 points and 0.5 komi for a total of 13.5. ]GB[1]) (;B[cb] ;W[ie]C[This is close to working, but black will lose this game. You can continue if you want to] ;B[ba] ;W[fb]TR[aa][bb][af][bf][ag][cg][ah][bh][dh][ai][bi][ci]SQ[ea][fa][ga][ha][ia][gb][hb][ib][hc][ic][if][ig][hi][ii]C[Black has 12 points (triangles) and 2 prisoners captured, for a total of 14 points. Instead of taking 2 points off white, it's easier to just add the 2 prisoners to black's score. White also has 14 points, but white has 0.5 komi, and thus wins 14.5 to 14! Good try though]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 8
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[db][fb][gc][dd][gd][de][ge][df][ff]AB[cb][dc][cd][ce][cf][ef][dg]TR[dd][de][df]C[How does black capture these 3 white stones? ] (;B[ed] ;W[ee]C[Great start, now what? ] ;B[fe]C[Good job]GB[1]) (;B[ee] ;W[ed]C[This won't work as white will escape, you can keep trying though] (;B[fd] ;W[ec]C[Now white is fully connected]) (;B[ec] ;W[fd]C[Now white is fully connected])))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 9
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[hc][dd][hd][de][fe][he][df][gg][hg]AB[dc][ec][cd][ce][cf][dg][eg]TR[dd][de][df]C[Black can capture these 3 white stones, how do they do it? Since you know it's solvable, you can logic your way into the right starting move! ] (;B[ef] ;W[ee]C[White connects, this won't work]) (;B[ed] ;W[ee]C[White connects, this won't work]) (;B[ee] ;W[ef]C[Yep, that was the only starting move we had, otherwise white connects up. This looks hopeless, but you can still capture white!] (;B[ed] ;W[ff]C[White connects, this won't work]) (;B[ff] ;W[ed]C[Nice one, good sacrifice, now how do we kill white?] ;B[fd] ;W[ee]C[Nice, white was in atari at E5 here, now how do we finish this off?] ;B[ge]C[Perfect, you are the best! ]GB[1])))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 10
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ed][fe][gf][cg][gg][gh]AB[fc][fd][gd][ge][hf][hg]TR[ed]C[Capture the white stone marked with a triangle!] (;B[ee] ;W[ff]C[Nice start, now the stone is cut off] (;B[dd] ;W[ec]C[Great job, now we just ladder white] (;B[eb] ;W[dc] ;B[cc]C[Solved!]GB[1]) (;B[dc] ;W[eb]C[This can work too, but it's a little harder to navigate as black] ;B[db] ;W[fb] ;B[gb]C[Great job]GB[1])) (;B[ec] ;W[dd]C[White escapes, hint: you could have laddered white])) (;B[ec] ;W[ee]C[White connects the stone up, try again]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 11
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[fb][gb][hc][ed][hd][ee][he][ef][hf][eg][hg]AB[dc][dd][de][fe][df][ff][dg][fg][eh]TR[ed][ee][ef][eg]C[Uh oh, the ladder won't work here, how does black capture the 4 white stones? ] (;B[ec] ;W[fd]C[White is going to connect, there's no way for black to cut them off] (;B[gd] ;W[fc]C[White is connected]) (;B[fc] ;W[gd]C[White is connected])) (;B[fd] ;W[ec]C[White is going to connect, there's no way for black to cut them off] (;B[fc] ;W[eb]C[White is connected]) (;B[eb] ;W[fc]C[White is connected])) (;B[fc] ;W[ec]C[Nice net] ;B[eb] ;W[fd] ;B[gd]C[Easy game]GB[1]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 12
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] CR[de]AW[cb][bc][cc][ad][cd][be][de][gf][fg][eh]AB[db][fb][dc][gc][dd][ce][cf]TR[ce][cf]C[White just cut our two stones off, but black can capture the white stone in a 'loose ladder' or net] (;B[df] ;W[ee]C[This isn't going to work, white is going to connect, and our 3 black stones are still cut off]) (;B[ee] ;W[df]TR[ce][cf]C[Since black can't ladder or net these 2 white stones, black's two stones are going to die]) (;B[ef] (;W[ee]C[Excellent! This will behave like a ladder, but instead of white having 1 liberty the whole time, they will have 2, let's play it out] ;B[fe] ;W[ed]C[White must run upwards here] (;B[fd] ;W[ec]C[Now how do we stop them?] (;B[eb] ;W[df]C[Perfect, after E8, that was basically a net] ;B[dg] ;W[cg]C[Finish them off!!!!] ;B[fc]C[The game is saved, well played]GB[1]) (;B[fc] ;W[eb]C[White kills our 3 stones now])) (;B[ec] ;W[fd]C[This was a mistake, white will get away now] ;B[gd] ;W[ff]C[This is atari unfortunately] ;B[ge] ;W[df]C[White gets away])) (;W[df] ;B[dg]C[White could also push here first, but this just becomes a normal ladder] ;W[ee] ;B[fe] ;W[ed]C[White dies in a ladder])))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // Puzzle 13 (famous broken ladder problem from Pro game)
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[19]KM[0.00] GN[Moves 67 to 74 (B: Yi Se-tol W: Hong Chang-sik)]DT[2009-04-22]PC[http://senseis.xmp.net/?LeeSedolHongChangSikLadderGame]AW[bb][db][cc][dd][ce][de][cf][dg][eg][eh][fh][rk][ml][rl][sl][km][mm][pm][qm][rm][mn][nn][on][sn][co][po][qo][so][mp][pp][qp][dq][qq][qr][rr][rs]AB[cb][dc][ec][nc][fd][pd][df][ef][cg][fg][dh][ei][rj][ok][qk][nl][pl][lm][nm][om][pn][qn][rn][lo][mo][no][oo][ro][rp][iq][nq][oq][pq][rq][sq][sr]TR[dg][eg][eh][fh]C[This is a famous 'broken ladder' game from two professionals. We've been looking at only examples on the 9 by 9 board, but this is the 19 by 19 board, the full size board. How does black start to ladder the 4 white stones? ]PL[B] ;B[gh] ;W[fi]C[Nice, let's play it out] ;B[fj] ;W[gi] ;B[hi] ;W[gj] ;B[gk] ;W[hj] ;B[ij] ;W[hk] ;B[hl] ;W[ik] ;B[jk] ;W[il] ;B[im] ;W[jl]TR[kl]C[This isn't looking too good, white is starting to connect. Black needs to play at the marked triangle here. ] ;B[kl] ;W[jm]TR[jn]C[We need to play K6 here, but we aren't going to kill the stones in a ladder] ;B[jn] ;W[kn]TR[ln]C[And here's the magic, we can play M6 to kill a different group of stones!] ;B[ln] ;W[ko]TR[mk][pn][qn][rn][ro][rp][rq][sq][sr]C[After we play N9, we kill the 5 white stones, which saves the big black group on the right, which simultaneously kills white's entire right side group (white does not have 2 eyes) ] ;B[mk]TR[gg][hh][di][ii][ej][jj][fk][kk][gl][hm][in]C[Nice! Although black has a million cuts, black has effectively won the game by killing the entire right side of the board. ]GB[1])",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
];
