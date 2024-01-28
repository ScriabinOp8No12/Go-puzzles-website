export const moreRulesPuzzles = [
  {
    // More Rules puzzle 1
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ba][ab][bb][bc][ad][bd]AB[ca][cb][cc][cd][ae][be][ce]LB[gc:A][ge:B]C[Is white alive or can they be killed? Place a stone at A if white can NOT be killed. Place a stone at B if white can be killed.] (;B[gc]C[Nice, white is already alive since they have 2 eyes. Black is literally not allowed to place a stone at A9 or A7, meaning white can never be killed.]GB[1]) (;B[ge]C[Unfortunately for black, white is already alive. You can go back to the original puzzle and try to click A7 and A9, but it won't let you since those are illegal moves (you are not allowed to capture yourself) ]))",
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
  // More Rules puzzle 4 ***
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ea][eb][cc][ec][fd][ee][fe][ef][cg][dg][eg][dh][di]AB[gb][fc][gc][gd][ge][ff][hf][fg][gg][eh][fh][ei]LB[be:A]C[Finish the rest of the game, if you think the game is already over, click A ] (;B[be]C[The game hasn't ended yet, the top side is still up for grabs!]) (;B[fa] ;W[fb]C[Good, and now what?] ;B[ga]C[Nice, now all the black and white stones are touching along the edges.]GB[1]) (;B[ga] ;W[fb]C[Good, now all that's left is dame (spots with no value, but generally placed regardless at the end of the game)] ;B[fa]C[Well done!]GB[1]) (;B[fb] ;W[fa]C[Yep, that's fine too, now what?] ;B[ga]C[Good, the game is now finished.]GB[1]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More Rules puzzle 5
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[da][db][eb][dc][dd][de][df][ef][dg][dh][eh][di][ei]AB[ea][fb][ec][gc][ed][fd][ee][ge][ff][eg][fg][fh][fi]LB[be:A]C[Finish the rest of the game, if you think the game is already over, click A] (;B[be] ;W[fa]C[This may seem like the game has ended since all the black and white stones are touching, but white can actually capture here!]) (;B[fa]C[Good, now the game is over. ]GB[1]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More Rules puzzle 6
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ea][ab][bb][cb][eb][cc][ec][dd][ed][fd][de][ee][af][df][ef][ag][bg][cg][eg][eh][ei]AB[fa][fb][hb][ac][bc][fc][gc][bd][cd][gd][ae][ce][fe][ge][bf][cf][ff][hf][fg][fh][fi]LB[hh:A]C[Finish the game, if you think the game is already over, click A.] ;B[hh]C[Correct! Neither player can invade the other, and all spaces between the players are filled. ]GB[1])",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More rules puzzle 7
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[da][ha][db][hb][dc][hc][dd][hd][ce][ee][he][ie][ef][eg][dh][di]AB[ea][ga][eb][gb][ec][gc][ed][gd][fe][ge][ff][hf][if][fg][eh][ei]LB[bg:A]C[Finish the game, if you think the game is already over, click A.] (;B[bg] ;W[fh]C[Although it may seem like the game is over since all black and white stones are touching along the border, it's actually not over because black has a weakness (these 2 black stones are going to get captured)!]) (;B[fh]C[Good job!]GB[1]) (;B[gh]C[Nice, this is a bit more fancy, and also works.]GB[1]) (;B[fi]C[This also works, but this is not a great move because white could play G2 and start messing with black later.]GB[1]) (;B[ib] ;W[ic]C[Good try, but white can still make 2 eyes like this]) (;B[id] ;W[ic]C[Good try, but white can still make 2 eyes like this]) (;B[ia] ;W[ib]C[Good try, but white can still make 2 eyes like this]) (;B[ic] ;W[ib]C[Good try, but white can still make 2 eyes like this]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More rules puzzle 8
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[ca][ia][cb][ib][cc][dc][ec][fc][gc][hc][ic]AB[da][ha][db][eb][fb][gb][hb]LB[ee:A]C[Oh no, black is completely surrounded, can you find a way to make 2 eyes and live? If you think black is already dead regardless, click A. ] (;B[ee]C[Black can actually live!]) (;B[fa]C[Good job, notice white can not place a stone at E9 nor G9, both would be self captures. Black has 2 eyes and is unkillable!]GB[1]) (;B[ga] (;W[fa]C[Uh oh, what if white goes here?] ;B[ea] ;W[fa]C[That was only 1 eye, so black is dead. That capture animation was a bit fast, you can click the '?' button at the bottom of the screen to explore the solution and manually click through the moves. ]) (;W[ea])) (;B[ea] ;W[fa]C[Uh oh, what if white goes here?] ;B[ga] ;W[fa]C[Black only had one eye, so white can capture. That capture animation was a bit fast, you can click the '?' button at the bottom of the screen to explore the solution and manually click through the moves. ]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More rules puzzle 9
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[hg][ig][gh][hh][gi]AB[gf][hf][if][fg][gg][fh][fi]LB[ee:A]C[Kill the white group, if it's already alive, click A.] (;B[ee] ;W[ii]C[White just lived with 2 eyes. There's a famous proverb which is often true, your opponent's best move is your best move. The reason is both players are trying to fight for the vital or important spot, and that is usually the exact same move!]) (;B[ii] ;W[ih]C[Good job, and then what?] ;B[hi]C[Nice capture]GB[1]) (;B[hi] ;W[ii]C[White lives with 2 eyes]) (;B[ih] ;W[ii]C[White lives with 2 eyes]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
  // More rules puzzle 10
  {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[dd][fd][ee]AB[eb][dc][fc][ed]LB[cg:A]C[Please click A to start the puzzle!] ;B[cg] ;W[ec]LB[eg:B][gg:A]C[White just captured, is black allowed to play E6? Click A if yes, Click B if no] (;B[gg]C[Nope, this is a ko, black is NOT allowed to take the ko back right away! You can go back to the original puzzle and try to click on the board, but it won't let you.]) (;B[eg]C[Good job, this is a ko, and black is not allowed to play E6 right away. You can go back to the original puzzle and try to click on the board, but it won't let you.]GB[1]))",
    problemConditions: { GB: [] },
    widgetType: "STANDARD_PROBLEM",
  },
];
