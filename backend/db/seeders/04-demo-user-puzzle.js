"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    // put tableName here inside up function instead of outside
    options.tableName = "UserPuzzles";
    return queryInterface.bulkInsert(
      options,
      [
        {
          user_id: 1,
          puzzle_id: 1,
          completed: false,
          sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.5]TM[300]GN[]PW[éç¦æ¥¼é]PB[anning97]DT[2023-07-09]RE[B+Resign]TC[3];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob];W[od];B[mc];W[md];B[ld];W[le];B[ke];W[kf];B[kd];W[lf];B[nf];W[pg];B[nh];W[ne];B[of];W[pf];B[jf];W[jg];B[kg];W[lh];B[kh];W[if];B[je];W[lg];B[ki];W[li];B[kj];W[mj];B[nj];W[lk];B[lj];W[mi];B[ni];W[nk] (;B[ok]C[Incorrect - This was the actual move played in the game!]) (;B[ml]C[CORRECT]))",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          puzzle_id: 2,
          sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.5]TM[300]GN[]PW[éç¦æ¥¼é]PB[anning97]DT[2023-07-09]RE[B+Resign]TC[3];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob];W[od];B[mc];W[md];B[ld];W[le];B[ke];W[kf];B[kd];W[lf];B[nf];W[pg];B[nh];W[ne];B[of];W[pf];B[jf];W[jg];B[kg];W[lh] (;B[kh]C[Incorrect - This was the actual move played in the game!]) (;B[lg]C[CORRECT]))",
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          puzzle_id: 3,
          sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[7.50]TM[300] GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign]TC[3] ;B[qd] ;W[dp] ;B[pq] ;W[dd] ;B[cc] ;W[dc] ;B[cd] ;W[ce] ;B[be] ;W[bf] ;B[cf] ;W[de] ;B[bg] ;W[bd] ;B[af] ;W[bc] ;B[nc] ;W[qo] ;B[ql] ;W[op] ;B[oq] ;W[np] ;B[mr] ;W[lq] ;B[mq] ;W[mp] ;B[lp] ;W[kq] ;B[lo] ;W[rq] ;B[qr] ;W[on] ;B[jp] ;W[iq] ;B[ip] ;W[hq] ;B[go] ;W[fp] ;B[ol] ;W[nm] ;B[mk] ;W[rd] ;B[re] ;W[qc] ;B[rc] ;W[pd] ;B[qe] ;W[rb] ;B[sd] ;W[pe] ;B[pc] ;W[oc] ;B[qb] ;W[nd] ;B[ob] ;W[od] ;B[mc] ;W[md] ;B[ld] ;W[le] ;B[ke] ;W[kf] (;B[kd]C[Incorrect - This was the actual move played in the game!]) (;B[lf]C[CORRECT]))",
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "UserPuzzles";
    return queryInterface.bulkDelete(options, null, {});
  },
};
