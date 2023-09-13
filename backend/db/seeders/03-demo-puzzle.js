"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // put tableName here inside up function instead of outside
    options.tableName = "Puzzles";
    return queryInterface.bulkInsert(
      options,
      [
        {
          sgf_id: 1,
          sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.5]TM[300]GN[]PW[éç¦æ¥¼é]PB[anning97]DT[2023-07-09]RE[B+Resign]RL[0]RN[3]TC[3]TT[30];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob];W[od];B[mc];W[md];B[ld];W[le];B[ke];W[kf];B[kd];W[lf];B[nf];W[pg];B[nh];W[ne];B[of];W[pf];B[jf];W[jg];B[kg];W[lh];B[kh];W[if];B[je];W[lg];B[ki];W[li];B[kj];W[mj];B[nj];W[lk];B[lj];W[mi];B[ni];W[nk] (;B[ok]C[Incorrect - This was the actual move played in the game!]) (;B[ml]C[CORRECT]))",
          category: "Judgment",
          move_number: 92,
          difficulty: 1800,
          description:
            "This is a reading / judgment problem found in a chaotic Fox game, there's one correct move, and since our opponent can't ladder us, we can extend out!",
          completed: false,
          vote_count: 20,
          board_size: 19,
          is_user_puzzle: true,
          solution_coordinates: JSON.stringify({
            // Correct move is "N8" and the sequence is as follows (ran at 50 visits)
            N8: ["N8", "O8", "Q11", "L9", "M7", "K10", "K12"],
          }),
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607522/puzzle6_7_20_23_thfwb8.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.5]TM[300]GN[]PW[éç¦æ¥¼é]PB[anning97]DT[2023-07-09]RE[B+Resign]RL[0]RN[3]TC[3]TT[30];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob];W[od];B[mc];W[md];B[ld];W[le];B[ke];W[kf];B[kd];W[lf];B[nf];W[pg];B[nh];W[ne];B[of];W[pf];B[jf];W[jg];B[kg];W[lh] (;B[kh]C[Incorrect - This was the actual move played in the game!]) (;B[lg]C[CORRECT]))",
          category: "Reading",
          move_number: 78,
          difficulty: 1700,
          description: "This is a direction of play or reading puzzle!",
          completed: false,
          vote_count: 83,
          board_size: 19,
          is_user_puzzle: false,
          solution_coordinates: JSON.stringify({
            // Two correct starting moves, has same 3 move sequence though
            M13: ["M13", "K15", "J14", "N13", "G4", "G3"],
            K12: ["K12", "J13", "M13", "K15", "J14", "K16", "N15", "N14"],
          }),
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607521/puzzle5_7_20_23_ie39gw.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 3,
          sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[7.50]TM[300] GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign]KTV[1.0]RL[0]RN[3]TC[3]TT[30] ;B[qd] ;W[dp] ;B[pq] ;W[dd] ;B[cc] ;W[dc] ;B[cd] ;W[ce] ;B[be] ;W[bf] ;B[cf] ;W[de] ;B[bg] ;W[bd] ;B[af] ;W[bc] ;B[nc] ;W[qo] ;B[ql] ;W[op] ;B[oq] ;W[np] ;B[mr] ;W[lq] ;B[mq] ;W[mp] ;B[lp] ;W[kq] ;B[lo] ;W[rq] ;B[qr] ;W[on] ;B[jp] ;W[iq] ;B[ip] ;W[hq] ;B[go] ;W[fp] ;B[ol] ;W[nm] ;B[mk] ;W[rd] ;B[re] ;W[qc] ;B[rc] ;W[pd] ;B[qe] ;W[rb] ;B[sd] ;W[pe] ;B[pc] ;W[oc] ;B[qb] ;W[nd] ;B[ob] ;W[od] ;B[mc] ;W[md] ;B[ld] ;W[le] ;B[ke] ;W[kf] (;B[kd]C[Incorrect - This was the actual move played in the game!]) (;B[lf]C[CORRECT]))",
          category: "Ladder/Net",
          move_number: 62,
          difficulty: 1350,
          description:
            "Cut first then connect because the opponent can't ladder or net us, they get 2 weak groups!",
          completed: true,
          vote_count: 9,
          board_size: 19,
          is_user_puzzle: true,
          solution_coordinates: JSON.stringify({
            M14: ["M14", "N15", "L16", "L13", "N13", "M13"],
          }),
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607521/puzzle4_7_20_23_hlb0q1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Puzzles";
    return queryInterface.bulkDelete(options, null, {});
  },
};
