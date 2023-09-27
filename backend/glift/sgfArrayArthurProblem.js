const sgf1 = {
  sgfString:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[375.00];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq](;B[qr]C[Incorrect - This was the actual move played in the game!])(;B[on]C[CORRECT])(;B[qq]C[CORRECT])(;B[nn]C[CORRECT])(;B[rr]C[CORRECT])(;B[cb]C[CORRECT])(;B[jp]C[CORRECT]))",
  initialPosition: 30,
  problemConditions: {
    // If move / branch has a comment with the text "CORRECT", it is a correct move!
    C: ["CORRECT"],
  },
  widgetType: "STANDARD_PROBLEM",
};

const sgf2 = {
  sgfString:
    "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[375.00];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr](;B[nq]C[Incorrect - This was the actual move played in the game!])(;B[ip]C[CORRECT]))",
  initialPosition: 34,
  problemConditions: {
    C: ["CORRECT"],
  },
  widgetType: "STANDARD_PROBLEM",
};

// const sgf3 = {
//   sgfString:
//     "(;GM[1]FF[4]SZ[19]GN[]DT[2023-07-09]PB[anning97]PW[青瓦楼阁]BR[2段]WR[2段]KM[7.5]HA[0]RU[Chinese]AP[KaTrain:1.12.3]RN[3]RE[B+R]TM[300]TC[3]TT[30]RL[0]CA[UTF-8]KTV[1.0];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr](;B[nq]C[Incorrect - This was the actual move played in the game!])(;B[ip]C[CORRECT]))",
//   initialPosition: 34,
//   problemConditions: {
//     C: ["CORRECT"],
//   },
//   widgetType: "STANDARD_PROBLEM",
// };

const sgfCollection = [sgf1, sgf2];
// const sgfCollection = [sgf1, sgf2, sgf3];

// *************** this block below doesn't need to be here, but it's good for testing *********************
// let problemSolved = false;
// // put problemSolved into a state, don't use a flag

// // second flag
// // try a flag for the alert too, then right arrow click resets this flag
// //
// // alert is stopped after we either click a correct or incorrect move
// function onProblemCorrect() {
//   console.log("onProblemCorrect called"); // add logging
//   if (!problemSolved) {
//     alert("Correct!");
//     // problemSolved = true; // Set the flag to true
//     // update user ranking within this if block, so that it only triggers once
//     updateUserRanking(true);
//   }
// }

// function onProblemIncorrect() {
//   console.log("onProblemIncorrect called"); // add logging
//   if (!problemSolved) {
//     alert("Incorrect!");
//     // flip boolean state, subscribe to store
//     problemSolved = true;
//     // update user ranking within this if block, so that it only triggers once
//     updateUserRanking(false);
//   }
// }

// function updateUserRanking(isCorrect) {
//   if (isCorrect === true) console.log("ranking goes up");
//   else if (isCorrect === false) console.log("ranking goes down");
// }

// let checkCorrectHook = new glift.api.HookOptions({
//   problemCorrect: onProblemCorrect,
//   problemIncorrect: onProblemIncorrect,
// });

// *************** this block above doesn't need to be here, but it's good for testing *********************

// use redux to manage state, need to reset problemSolved back to false after we go to the next sgf?
gliftWidget = glift.create({
  // pass sgfCollection here, it has default behavior that gives us the arrow keys to navigate between the sgfs in the collection
  sgfCollection,
  divId: "gliftContainer",
  // hooks: checkCorrectHook,
});
