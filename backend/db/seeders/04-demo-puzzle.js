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
          sgf_id: 2,
          sgf_data: "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))",
          category: "Judgment",
          move_number: 49,
          difficulty: 1700,
          description:
            "Shin Jinseo game judgment problem",
          vote_count: 20,
          board_size: 19,
          solution_coordinates: "{\"F8\":[\"F8\",\"H11\",\"E10\"],\"J11\":[\"J11\",\"R15\",\"P15\",\"S16\"],\"J12\":[\"J12\",\"R15\",\"P15\",\"S16\"],\"J10\":[\"J10\",\"R15\",\"P15\"],\"K11\":[\"K11\",\"G10\",\"F10\"],\"L15\":[\"L15\",\"L16\",\"F8\",\"R15\"],\"G8\":[\"G8\",\"R15\",\"P15\"],\"E10\":[\"E10\",\"D10\",\"J11\",\"R15\"],\"H17\":[\"H17\",\"H18\",\"J17\"],\"F9\":[\"F9\",\"R15\"]}",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697828883/w1sonvk5gtq6stomdojv.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data: "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg] (;W[qh]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT] ;B[ll]C[CORRECT] ;W[kl]C[CORRECT]))",
          category: "Judgment",
          move_number: 98,
          difficulty: 2103,
          description: "Judgment puzzle from Xie Ke vs Shin Jinseo game",
          vote_count: 83,
          board_size: 19,
          solution_coordinates: "{\"K13\":[\"K13\",\"K12\",\"L12\",\"M13\",\"K14\",\"N9\",\"N8\",\"M8\",\"L8\"]}",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697829849/bxpp8cg9vuou85tr436w.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data: "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg] (;W[rk]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT]))",
          category: "Judgment",
          move_number: 100,
          difficulty: 2065,
          description:
            "Xie Ke vs Shin jinseo judgment puzzle",
          vote_count: 9,
          board_size: 19,
          solution_coordinates: "{\"K13\":[\"K13\",\"K12\",\"L12\",\"M13\",\"K14\",\"N9\",\"N8\"]}",
          thumbnail:
          "https://res.cloudinary.com/dn8rdavoi/image/upload/v1698040034/mjhfuhimihltpiphwzfw.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data: "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp] (;W[op]C[Incorrect - This was the actual move played in the game!]) (;W[pp]C[CORRECT] ;B[qq]C[CORRECT] ;W[pn]C[CORRECT] ;B[pm]C[CORRECT] ;W[on]C[CORRECT]) (;W[ph]C[CORRECT] ;B[rf]C[CORRECT] ;W[gf]C[CORRECT] ;B[gg]C[CORRECT] ;W[jh]C[CORRECT]))",
          category: "Reading",
          move_number: 110,
          difficulty: 1803,
          description:
            "Reading puzzle from Shin Jinseo vs Xie Ke game",
          vote_count: 9,
          board_size: 19,
          solution_coordinates: "{\"Q4\":[\"Q4\",\"R3\",\"Q6\",\"Q7\",\"P6\"],\"Q12\":[\"Q12\",\"S14\",\"G14\",\"G13\",\"K12\"]}",
          thumbnail:
          "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841598/umwvejcuf3syhi3y3kvo.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data: "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp];W[op];B[po];W[lq];B[nq];W[kq];B[om];W[ph];B[hd];W[hc];B[ge] (;W[nb]C[Incorrect - This was the actual move played in the game!]) (;W[nr]C[CORRECT] ;B[or]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[bp]C[CORRECT] ;B[hr]C[CORRECT] ;W[iq]C[CORRECT] ;B[rf]C[CORRECT] ;W[br]C[CORRECT]) (;W[bq]C[CORRECT] ;B[br]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[ob]C[CORRECT] ;B[pb]C[CORRECT] ;W[bp]C[CORRECT] ;B[bq]C[CORRECT]))",
          category: "Judgment",
          move_number: 120,
          difficulty: 1750,
          description:
            "Judgment puzzle from Shin Jinseo vs Xie Ke game",
          vote_count: 13,
          board_size: 19,
          solution_coordinates: "{\"O2\":[\"O2\",\"P2\",\"B4\",\"H2\"],\"B4\":[\"B4\",\"H2\",\"J3\",\"S14\",\"B2\"],\"B3\":[\"B3\",\"B2\",\"B4\",\"H2\"],\"P18\":[\"P18\",\"Q18\",\"B4\",\"B3\"]}",
          thumbnail:
          "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841593/eg1aqudsx4jwozkwmukc.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 24,
          sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or] (;W[nr]C[Incorrect - This was the actual move played in the game!]) (;W[qo]C[CORRECT] ;B[ko]C[CORRECT] ;W[nr]C[CORRECT] ;B[hp]C[CORRECT] ;W[hq]C[CORRECT]))",
          category: "Direction",
          move_number: 50,
          difficulty: 1550,
          description:
            "Other",
          vote_count: 1,
          board_size: 19,
          solution_coordinates: "{\"R5\":[\"R5\",\"L5\",\"O2\",\"H4\",\"H3\"]}",
          thumbnail:
          "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364001/ozlrq1eoy4zwltdpwzsn.png",
          suspended: false,
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
