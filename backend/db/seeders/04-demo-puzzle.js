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
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))",
          category: "Judgment",
          move_number: 49,
          difficulty: 1700,
          description: "Shin Jinseo game judgment problem",
          vote_count: 20,
          board_size: 19,
          solution_coordinates:
            '{"F8":["F8","H11","E10"],"J11":["J11","R15","P15","S16"],"J12":["J12","R15","P15","S16"],"J10":["J10","R15","P15"],"K11":["K11","G10","F10"],"L15":["L15","L16","F8","R15"],"G8":["G8","R15","P15"],"E10":["E10","D10","J11","R15"],"H17":["H17","H18","J17"],"F9":["F9","R15"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697828883/w1sonvk5gtq6stomdojv.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg] (;W[qh]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT] ;B[ll]C[CORRECT] ;W[kl]C[CORRECT]))",
          category: "Judgment",
          move_number: 98,
          difficulty: 2103,
          description: "Judgment puzzle from Xie Ke vs Shin Jinseo game",
          vote_count: 83,
          board_size: 19,
          solution_coordinates:
            '{"K13":["K13","K12","L12","M13","K14","N9","N8","M8","L8"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697829849/bxpp8cg9vuou85tr436w.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg] (;W[rk]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT]))",
          category: "Judgment",
          move_number: 100,
          difficulty: 2065,
          description: "Xie Ke vs Shin jinseo judgment puzzle",
          vote_count: 9,
          board_size: 19,
          solution_coordinates:
            '{"K13":["K13","K12","L12","M13","K14","N9","N8"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1698040034/mjhfuhimihltpiphwzfw.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp] (;W[op]C[Incorrect - This was the actual move played in the game!]) (;W[pp]C[CORRECT] ;B[qq]C[CORRECT] ;W[pn]C[CORRECT] ;B[pm]C[CORRECT] ;W[on]C[CORRECT]) (;W[ph]C[CORRECT] ;B[rf]C[CORRECT] ;W[gf]C[CORRECT] ;B[gg]C[CORRECT] ;W[jh]C[CORRECT]))",
          category: "Reading",
          move_number: 110,
          difficulty: 1803,
          description: "Reading puzzle from Shin Jinseo vs Xie Ke game",
          vote_count: 9,
          board_size: 19,
          solution_coordinates:
            '{"Q4":["Q4","R3","Q6","Q7","P6"],"Q12":["Q12","S14","G14","G13","K12"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841598/umwvejcuf3syhi3y3kvo.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp];W[op];B[po];W[lq];B[nq];W[kq];B[om];W[ph];B[hd];W[hc];B[ge] (;W[nb]C[Incorrect - This was the actual move played in the game!]) (;W[nr]C[CORRECT] ;B[or]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[bp]C[CORRECT] ;B[hr]C[CORRECT] ;W[iq]C[CORRECT] ;B[rf]C[CORRECT] ;W[br]C[CORRECT]) (;W[bq]C[CORRECT] ;B[br]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[ob]C[CORRECT] ;B[pb]C[CORRECT] ;W[bp]C[CORRECT] ;B[bq]C[CORRECT]))",
          category: "Judgment",
          move_number: 120,
          difficulty: 1750,
          description: "Judgment puzzle from Shin Jinseo vs Xie Ke game",
          vote_count: 13,
          board_size: 19,
          solution_coordinates:
            '{"O2":["O2","P2","B4","H2"],"B4":["B4","H2","J3","S14","B2"],"B3":["B3","B2","B4","H2"],"P18":["P18","Q18","B4","B3"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841593/eg1aqudsx4jwozkwmukc.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 24,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or] (;W[nr]C[Incorrect - This was the actual move played in the game!]) (;W[qo]C[CORRECT] ;B[ko]C[CORRECT] ;W[nr]C[CORRECT] ;B[hp]C[CORRECT] ;W[hq]C[CORRECT]))",
          category: "Direction",
          move_number: 50,
          difficulty: 1550,
          description: "Other",
          vote_count: 1,
          board_size: 19,
          solution_coordinates: '{"R5":["R5","L5","O2","H4","H3"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364001/ozlrq1eoy4zwltdpwzsn.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Placeholder for more puzzles from Dave game (sgf_id of 24)
        // {
        //   sgf_id: 24,
        //   sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or] (;W[nr]C[Incorrect - This was the actual move played in the game!]) (;W[qo]C[CORRECT] ;B[ko]C[CORRECT] ;W[nr]C[CORRECT] ;B[hp]C[CORRECT] ;W[hq]C[CORRECT]))",
        //   category: "Direction",
        //   move_number: 50,
        //   difficulty: 1550,
        //   description:
        //     "Other",
        //   vote_count: 1,
        //   board_size: 19,
        //   solution_coordinates: "{\"R5\":[\"R5\",\"L5\",\"O2\",\"H4\",\"H3\"]}",
        //   thumbnail:
        //   "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364001/ozlrq1eoy4zwltdpwzsn.png",
        //   suspended: false,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        {
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[19]KM[6.50] ;B[pd] ;W[dp] ;B[dd] ;W[pp] ;B[qq] ;W[pq] ;B[qp] ;W[po] ;B[qo] ;W[pn] ;B[qn] ;W[pl] ;B[mp] ;W[fc] ;B[df] ;W[dc] ;B[cc] ;W[cb] ;B[db] ;W[ec] ;B[bb] (;W[cn]C[Incorrect - This was the actual move played in the game!]) (;W[cd]C[CORRECT] ;B[bc]C[CORRECT] ;W[de]C[CORRECT] ;B[ed]C[CORRECT] ;W[ee]C[CORRECT]))",
          category: "Ladder/Net",
          move_number: 22,
          difficulty: 1250,
          description: "Ladder problem",
          vote_count: 150,
          board_size: 19,
          solution_coordinates: '{"C16":["C16","B17","D15","E16","E15"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700435503/xiiysfegzhau9rbm9qdd.png",
          suspended: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg] (;W[qh]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT] ;B[ll]C[CORRECT] ;W[kl]C[CORRECT]))",
          category: "Judgment",
          move_number: 98,
          difficulty: 2103,
          times_solved: 0,
          description: "Judgment puzzle from Xie Ke vs Shin Jinseo game",
          vote_count: 83,
          board_size: 19,
          solution_coordinates:
            '{"K13":["K13","K12","L12","M13","K14","N9","N8","M8","L8"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697829849/bxpp8cg9vuou85tr436w.png",
          suspended: false,
          createdAt: "2023-11-04T22:07:31.181000+00:00",
          updatedAt: "2023-11-04T22:07:31.181000+00:00",
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg] (;W[rk]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT]))",
          category: "Judgment",
          move_number: 100,
          difficulty: 2065,
          times_solved: 0,
          description: "Xie Ke vs Shin jinseo judgment puzzle",
          vote_count: 9,
          board_size: 19,
          solution_coordinates:
            '{"K13":["K13","K12","L12","M13","K14","N9","N8"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1698040034/mjhfuhimihltpiphwzfw.png",
          suspended: false,
          createdAt: "2023-11-04T22:07:31.181000+00:00",
          updatedAt: "2023-11-04T22:07:31.181000+00:00",
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp] (;W[op]C[Incorrect - This was the actual move played in the game!]) (;W[pp]C[CORRECT] ;B[qq]C[CORRECT] ;W[pn]C[CORRECT] ;B[pm]C[CORRECT] ;W[on]C[CORRECT]) (;W[ph]C[CORRECT] ;B[rf]C[CORRECT] ;W[gf]C[CORRECT] ;B[gg]C[CORRECT] ;W[jh]C[CORRECT]))",
          category: "Reading",
          move_number: 110,
          difficulty: 1803,
          times_solved: 0,
          description: "Reading puzzle from Shin Jinseo vs Xie Ke game",
          vote_count: 9,
          board_size: 19,
          solution_coordinates:
            '{"Q4":["Q4","R3","Q6","Q7","P6"],"Q12":["Q12","S14","G14","G13","K12"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841598/umwvejcuf3syhi3y3kvo.png",
          suspended: false,
          createdAt: "2023-11-04T22:07:31.181000+00:00",
          updatedAt: "2023-11-04T22:07:31.181000+00:00",
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp];W[op];B[po];W[lq];B[nq];W[kq];B[om];W[ph];B[hd];W[hc];B[ge] (;W[nb]C[Incorrect - This was the actual move played in the game!]) (;W[nr]C[CORRECT] ;B[or]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[bp]C[CORRECT] ;B[hr]C[CORRECT] ;W[iq]C[CORRECT] ;B[rf]C[CORRECT] ;W[br]C[CORRECT]) (;W[bq]C[CORRECT] ;B[br]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[ob]C[CORRECT] ;B[pb]C[CORRECT] ;W[bp]C[CORRECT] ;B[bq]C[CORRECT]))",
          category: "Judgment",
          move_number: 120,
          difficulty: 1750,
          times_solved: 0,
          description: "Judgment puzzle from Shin Jinseo vs Xie Ke game",
          vote_count: 13,
          board_size: 19,
          solution_coordinates:
            '{"O2":["O2","P2","B4","H2"],"B4":["B4","H2","J3","S14","B2"],"B3":["B3","B2","B4","H2"],"P18":["P18","Q18","B4","B3"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841593/eg1aqudsx4jwozkwmukc.png",
          suspended: false,
          createdAt: "2023-11-04T22:07:31.181000+00:00",
          updatedAt: "2023-11-04T22:07:31.181000+00:00",
        },
        // {sgf_id: 17, sgf_data: "(;EV[9th Kuksu Mountains Tournament, final]DT[2023-07-28]PB[Shin Jinseo]BR[9p]PW[Shin Minjun]WR[9p]KM[6.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[pd];W[dp];B[pp];W[dd];B[cq];W[dq];B[cp];W[do];B[bn];W[qc];B[qd];W[pc];B[od];W[nc];B[rc];W[nd];B[fc];W[nf];B[cf];W[df];B[dg];W[ef];B[ce];W[cd];B[ic];W[rb];B[oc];W[ob];B[nb];W[pb];B[mb];W[rd];B[re];W[sc];B[pf];W[jc];B[de];W[ed]\n(;B[jb]C[Incorrect - This was the actual move played in the game!])\n(;B[jd]C[CORRECT]\n;W[kc]C[CORRECT]\n;B[kd]C[CORRECT]\n;W[lc]C[CORRECT]\n;B[mc]C[CORRECT]\n;W[md]C[CORRECT]\n;B[ee]C[CORRECT]\n;W[fd]C[CORRECT]\n;B[ld]C[CORRECT])\n(;B[ee]C[CORRECT]\n;W[fd]C[CORRECT]\n;B[fe]C[CORRECT]\n;W[gd]C[CORRECT]\n;B[jd]C[CORRECT]\n;W[kc]C[CORRECT]\n;B[kd]C[CORRECT])\n(;B[jb]C[CORRECT]\n;W[kb]C[CORRECT]\n;B[kc]C[CORRECT]\n;W[jd]C[CORRECT])\n(;B[id]C[CORRECT]\n;W[lc]C[CORRECT]\n;B[ee]C[CORRECT])\n(;B[kc]C[CORRECT]\n;W[jd]C[CORRECT]\n;B[jb]C[CORRECT]))", category: "other", move_number: 39, difficulty: 1497, times_solved: 1, description: "", vote_count: 0, board_size: 19, solution_coordinates: "\"{\\\"K16\\\":[\\\"K16\\\",\\\"L17\\\",\\\"L16\\\",\\\"M17\\\",\\\"N17\\\",\\\"N16\\\",\\\"E15\\\",\\\"F16\\\",\\\"M16\\\"],\\\"E15\\\":[\\\"E15\\\",\\\"F16\\\",\\\"F15\\\",\\\"G16\\\",\\\"K16\\\",\\\"L17\\\",\\\"L16\\\"],\\\"K18\\\":[\\\"K18\\\",\\\"L18\\\",\\\"L17\\\",\\\"K16\\\"],\\\"J16\\\":[\\\"J16\\\",\\\"M17\\\",\\\"E15\\\"],\\\"L17\\\":[\\\"L17\\\",\\\"K16\\\",\\\"K18\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1699301260/rqguavqczvgclezhqwaf.png", suspended: false, createdAt: "2023-11-06T20:07:40.478000+00:00", updatedAt: "2023-11-16T23:07:31.900000+00:00"},
        // {sgf_id: 2, sgf_data: "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))", category: "Judgment", move_number: 49, difficulty: 1727, times_solved: 1, description: "Shin Jinseo game judgment problem", vote_count: 20, board_size: 19, solution_coordinates: "{\"F8\":[\"F8\",\"H11\",\"E10\"],\"J11\":[\"J11\",\"R15\",\"P15\",\"S16\"],\"J12\":[\"J12\",\"R15\",\"P15\",\"S16\"],\"J10\":[\"J10\",\"R15\",\"P15\"],\"K11\":[\"K11\",\"G10\",\"F10\"],\"L15\":[\"L15\",\"L16\",\"F8\",\"R15\"],\"G8\":[\"G8\",\"R15\",\"P15\"],\"E10\":[\"E10\",\"D10\",\"J11\",\"R15\"],\"H17\":[\"H17\",\"H18\",\"J17\"],\"F9\":[\"F9\",\"R15\"]}", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697828883/w1sonvk5gtq6stomdojv.png", suspended: false, createdAt: "2023-11-04T22:07:31.181000+00:00", updatedAt: "2023-11-13T23:02:25.479000+00:00"},
        // {sgf_id: 18, sgf_data: "(;EV[9th Ing Cup, final 1]DT[2023-08-21]PB[Shin Jinseo]BR[9p]PW[Xie Ke]WR[9p]KM[8]RE[B+R]SO[Go4Go.net]CA[UTF-8];B[pd];W[dd];B[pp];W[dq];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fg];B[cg];W[bc];B[eb];W[eh];B[dg];W[ci];B[gc];W[fh];B[ce];W[bd];B[bf];W[gd];B[hc];W[hd];B[bh];W[ic];B[hb];W[ib];B[ga];W[je];B[dp];W[eq];B[cp];W[cq];B[bq]\n(;W[br]C[Incorrect - This was the actual move played in the game!])\n(;W[cb]C[CORRECT]\n;B[bb]C[CORRECT]\n;W[ab]C[CORRECT]\n;B[ba]C[CORRECT]\n;W[ca]C[CORRECT]\n;B[ae]C[CORRECT]\n;W[aa]C[CORRECT]\n;B[bb]C[CORRECT]\n;W[ba]C[CORRECT]\n;B[ad]C[CORRECT]))", category: "other", move_number: 46, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 19, solution_coordinates: "\"{\\\"C18\\\":[\\\"C18\\\",\\\"B18\\\",\\\"A18\\\",\\\"B19\\\",\\\"C19\\\",\\\"A15\\\",\\\"A19\\\",\\\"B18\\\",\\\"B19\\\",\\\"A16\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700183303/pyciupftdflzgxr4x52g.png", suspended: false, createdAt: "2023-11-17T01:08:24.280000+00:00", updatedAt: "2023-11-17T01:08:24.280000+00:00"},
        // {sgf_id: 31, sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or]\n(;W[nr]C[Incorrect - This was the actual move played in the game!])\n(;W[qo]C[CORRECT]\n;B[ko]C[CORRECT]\n;W[nr]C[CORRECT]\n;B[hp]C[CORRECT]\n;W[hq]C[CORRECT]))", category: "other", move_number: 50, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 19, solution_coordinates: "\"{\\\"R5\\\":[\\\"R5\\\",\\\"L5\\\",\\\"O2\\\",\\\"H4\\\",\\\"H3\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364001/ozlrq1eoy4zwltdpwzsn.png", suspended: false, createdAt: "2023-11-19T03:20:01.704000+00:00", updatedAt: "2023-11-19T03:20:01.704000+00:00"},
        // {sgf_id: 31, sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo]\n(;B[mq]C[Incorrect - This was the actual move played in the game!])\n(;B[ko]C[CORRECT]\n;W[qo]C[CORRECT]\n;B[rp]C[CORRECT]\n;W[ln]C[CORRECT]\n;B[mq]C[CORRECT]))", category: "other", move_number: 45, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 19, solution_coordinates: "\"{\\\"L5\\\":[\\\"L5\\\",\\\"R5\\\",\\\"S4\\\",\\\"M6\\\",\\\"N3\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364009/aniilbnaoqn7esmxykvp.png", suspended: false, createdAt: "2023-11-19T03:20:10.190000+00:00", updatedAt: "2023-11-19T03:20:10.190000+00:00"},
        // {sgf_id: 31, sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or];W[nr];B[np];W[oq];B[ko];W[jq];B[kq];W[qo];B[oo];W[rp];B[jd];W[qf];B[qh];W[qc];B[qd];W[pc];B[od];W[rd];B[re];W[rc];B[rf];W[nc];B[me];W[lc];B[hl];W[gl];B[gm];W[fl];B[el];W[hk];B[il];W[fm];B[ik];W[ij];B[jj];W[gn];B[ii];W[hj];B[ih];W[ql];B[qm];W[rm];B[pl];W[qk];B[pk];W[qj];B[pj];W[qi];B[pi];W[rh];B[qg];W[jo];B[jn];W[in];B[jm];W[le];B[oc];W[ob];B[md];W[ld];B[lf];W[ke];B[kf];W[je];B[nb];W[mb];B[hd];W[ie];B[ge];W[ef];B[df];W[hf];B[ee];W[jg];B[kh];W[bo];B[co];W[bn];B[bm];W[cm];B[bl]\n(;W[dn]C[Incorrect - This was the actual move played in the game!])\n(;W[ek]C[CORRECT]\n;B[dn]C[CORRECT]\n;W[rg]C[CORRECT]\n;B[pf]C[CORRECT])\n(;W[fj]C[CORRECT]\n;B[dn]C[CORRECT]\n;W[rg]C[CORRECT]\n;B[pf]C[CORRECT]))", category: "other", move_number: 130, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 19, solution_coordinates: "\"{\\\"E9\\\":[\\\"E9\\\",\\\"D6\\\",\\\"S13\\\",\\\"Q14\\\"],\\\"F10\\\":[\\\"F10\\\",\\\"D6\\\",\\\"S13\\\",\\\"Q14\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364031/iiadwycnx7ny6yw6srtx.png", suspended: false, createdAt: "2023-11-19T03:20:32.341000+00:00", updatedAt: "2023-11-19T03:20:32.341000+00:00"},
        // {sgf_id: 31, sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or];W[nr];B[np];W[oq];B[ko];W[jq];B[kq];W[qo];B[oo];W[rp];B[jd];W[qf];B[qh];W[qc];B[qd];W[pc];B[od];W[rd];B[re];W[rc];B[rf];W[nc];B[me];W[lc];B[hl];W[gl];B[gm];W[fl];B[el];W[hk];B[il];W[fm];B[ik];W[ij];B[jj];W[gn];B[ii];W[hj];B[ih];W[ql];B[qm];W[rm];B[pl];W[qk];B[pk];W[qj];B[pj];W[qi];B[pi];W[rh];B[qg];W[jo];B[jn];W[in];B[jm];W[le];B[oc];W[ob];B[md];W[ld];B[lf];W[ke];B[kf];W[je];B[nb];W[mb];B[hd];W[ie];B[ge];W[ef];B[df];W[hf];B[ee];W[jg];B[kh];W[bo];B[co];W[bn];B[bm];W[cm];B[bl];W[dn];B[ek];W[ff];B[fe];W[fj]\n(;B[be]C[Incorrect - This was the actual move played in the game!])\n(;B[ej]C[CORRECT]\n;W[rg]C[CORRECT]\n;B[pf]C[CORRECT]\n;W[en]C[CORRECT]))", category: "other", move_number: 135, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 19, solution_coordinates: "\"{\\\"E10\\\":[\\\"E10\\\",\\\"S13\\\",\\\"Q14\\\",\\\"E6\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364037/o0hvwdsqz9y01mhhrk8q.png", suspended: false, createdAt: "2023-11-19T03:20:38.139000+00:00", updatedAt: "2023-11-19T03:20:38.139000+00:00"},
        // {sgf_id: 31, sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or];W[nr];B[np];W[oq];B[ko];W[jq];B[kq];W[qo];B[oo]\n(;W[rp]C[Incorrect - This was the actual move played in the game!])\n(;W[hp]C[CORRECT]\n;B[go]C[CORRECT]\n;W[gp]C[CORRECT])\n(;W[in]C[CORRECT]\n;B[hq]C[CORRECT]\n;W[jo]C[CORRECT])\n(;W[qc]C[CORRECT]\n;B[gp]C[CORRECT]\n;W[go]C[CORRECT])\n(;W[po]C[CORRECT]\n;B[gp]C[CORRECT]\n;W[go]C[CORRECT])\n(;W[cm]C[CORRECT]\n;B[dn]C[CORRECT]\n;W[bo]C[CORRECT]\n;B[co]C[CORRECT])\n(;W[bn]C[CORRECT]\n;B[bo]C[CORRECT]\n;W[qc]C[CORRECT])\n(;W[qf]C[CORRECT]\n;B[gp]C[CORRECT])\n(;W[nc]C[CORRECT]\n;B[gp]C[CORRECT])\n(;W[ho]C[CORRECT]\n;B[qn]C[CORRECT]))", category: "other", move_number: 58, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 19, solution_coordinates: "\"{\\\"H4\\\":[\\\"H4\\\",\\\"G5\\\",\\\"G4\\\"],\\\"J6\\\":[\\\"J6\\\",\\\"H3\\\",\\\"K5\\\"],\\\"R17\\\":[\\\"R17\\\",\\\"G4\\\",\\\"G5\\\"],\\\"Q5\\\":[\\\"Q5\\\",\\\"G4\\\",\\\"G5\\\"],\\\"C7\\\":[\\\"C7\\\",\\\"D6\\\",\\\"B5\\\",\\\"C5\\\"],\\\"B6\\\":[\\\"B6\\\",\\\"B5\\\",\\\"R17\\\"],\\\"R14\\\":[\\\"R14\\\",\\\"G4\\\"],\\\"O17\\\":[\\\"O17\\\",\\\"G4\\\"],\\\"H5\\\":[\\\"H5\\\",\\\"R6\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364063/ubnmpcq2il4zwzeagumn.png", suspended: false, createdAt: "2023-11-19T03:21:04.015000+00:00", updatedAt: "2023-11-19T03:21:04.015000+00:00"},
        // {sgf_id: 31, sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or];W[nr];B[np];W[oq];B[ko];W[jq];B[kq];W[qo];B[oo];W[rp];B[jd];W[qf];B[qh];W[qc];B[qd];W[pc];B[od];W[rd];B[re];W[rc];B[rf];W[nc];B[me];W[lc];B[hl];W[gl];B[gm];W[fl];B[el];W[hk];B[il];W[fm];B[ik];W[ij];B[jj];W[gn];B[ii];W[hj];B[ih];W[ql];B[qm];W[rm];B[pl];W[qk];B[pk];W[qj];B[pj];W[qi];B[pi];W[rh];B[qg];W[jo];B[jn];W[in];B[jm];W[le];B[oc];W[ob];B[md];W[ld];B[lf];W[ke];B[kf];W[je];B[nb];W[mb];B[hd];W[ie];B[ge];W[ef];B[df];W[hf];B[ee];W[jg];B[kh];W[bo];B[co];W[bn];B[bm];W[cm];B[bl];W[dn];B[ek];W[ff];B[fe];W[fj];B[be];W[gf];B[id];W[bd];B[bf];W[rg];B[pf];W[hb];B[fh];W[fi];B[jr];W[ir];B[kr];W[hq];B[hn];W[hm];B[im];W[ho];B[qn];W[rn]\n(;B[po]C[Incorrect - This was the actual move played in the game!])\n(;B[mc]C[CORRECT]\n;W[na]C[CORRECT]\n;B[ib]C[CORRECT]\n;W[jb]C[CORRECT]\n;B[gb]C[CORRECT]\n;W[ic]C[CORRECT]\n;B[gc]C[CORRECT]\n;W[eb]C[CORRECT])\n(;B[ib]C[CORRECT]\n;W[hc]C[CORRECT]\n;B[kb]C[CORRECT]\n;W[mc]C[CORRECT]\n;B[ha]C[CORRECT]\n;W[ga]C[CORRECT]\n;B[ia]C[CORRECT]\n;W[gc]C[CORRECT])\n(;B[ad]C[CORRECT]\n;W[ac]C[CORRECT]\n;B[ae]C[CORRECT]\n;W[bc]C[CORRECT]\n;B[ib]C[CORRECT])\n(;B[sd]C[CORRECT]))", category: "other", move_number: 155, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 19, solution_coordinates: "\"{\\\"N17\\\":[\\\"N17\\\",\\\"O19\\\",\\\"J18\\\",\\\"K18\\\",\\\"G18\\\",\\\"J17\\\",\\\"G17\\\",\\\"E18\\\"],\\\"J18\\\":[\\\"J18\\\",\\\"H17\\\",\\\"L18\\\",\\\"N17\\\",\\\"H19\\\",\\\"G19\\\",\\\"J19\\\",\\\"G17\\\"],\\\"A16\\\":[\\\"A16\\\",\\\"A17\\\",\\\"A15\\\",\\\"B17\\\",\\\"J18\\\"],\\\"T16\\\":[\\\"T16\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364077/ndnr3jt6unjg1ejqszyx.png", suspended: false, createdAt: "2023-11-19T03:21:18.093000+00:00", updatedAt: "2023-11-19T03:21:18.093000+00:00"},
        // {sgf_id: 13, sgf_data: "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-05]PC[OGS: https://online-go.com/game/56820296]GN[Vriendschappelijke Wedstrijd]PB[goloveye2]PW[erikdeviking]BR[6k]WR[6k]TM[150]OT[5x60 byo-yomi]RE[B+2.5]SZ[13]KM[5.5]RU[Japanese];B[dd];W[jj];B[kd];W[cj];B[gk];W[ek];B[jk];W[kk];B[jl];W[kl];B[ij];W[ji];B[fi];W[dh];B[cg];W[ch];B[gd];W[dg];B[cf];W[jc];B[kc];W[kb];B[lb];W[ib];B[ka];W[gb];B[fc];W[fb];B[eb];W[gc];B[fd];W[jb];B[jd];W[id];B[ie];W[hd];B[he];W[ea];B[db];W[ja]\n(;B[fa]C[Incorrect - This was the actual move played in the game!])\n(;B[li]C[CORRECT]\n;W[lj]C[CORRECT]\n;B[ki]C[CORRECT]\n;W[kj]C[CORRECT]\n;B[kg]C[CORRECT]\n;W[jg]C[CORRECT]\n;B[kf]C[CORRECT]\n;W[ii]C[CORRECT])\n(;B[hc]C[CORRECT]\n;W[ic]C[CORRECT]\n;B[li]C[CORRECT]\n;W[lj]C[CORRECT]\n;B[ki]C[CORRECT]\n;W[kj]C[CORRECT]))", category: "other", move_number: 41, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 13, solution_coordinates: "\"{\\\"M5\\\":[\\\"M5\\\",\\\"M4\\\",\\\"L5\\\",\\\"L4\\\",\\\"L7\\\",\\\"K7\\\",\\\"L8\\\",\\\"J5\\\"],\\\"H11\\\":[\\\"H11\\\",\\\"J11\\\",\\\"M5\\\",\\\"M4\\\",\\\"L5\\\",\\\"L4\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700698132/wqztoteogrlrr87fn3xi.png", suspended: false, createdAt: "2023-11-23T00:08:52.574000+00:00", updatedAt: "2023-11-23T00:08:52.574000+00:00"},
        // {sgf_id: 15, sgf_data: "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-03]PC[OGS: https://online-go.com/game/56766164]GN[play for fun]PB[iself101]PW[erikdeviking]BR[7k]WR[6k]TM[0]OT[15 simple]RE[B+16.5]SZ[9]KM[5.5]RU[Japanese];B[gc];W[df];B[gg];W[ge];B[dg];W[ef];B[eg];W[ec];B[cc];W[db];B[bf];W[cf];B[be];W[cg];B[ff];W[fe];B[gf];W[cb];B[bb];W[ba];B[bc];W[bg];B[ag];W[ad];B[ce];W[ed];B[dd];W[de];B[dc];W[bd];B[bh];W[ch];B[ah];W[bi];B[dh];W[di];B[ei];W[ci];B[fd];W[gd];B[fc];W[hc];B[eb];W[ee];B[fb];W[af];B[ae];W[ai];B[da];W[af];B[ag];W[fh];B[fg];W[eh];B[gh]\n(;W[fi]C[Incorrect - This was the actual move played in the game!])\n(;W[he]C[CORRECT]\n;B[hf]C[CORRECT]\n;W[fi]C[CORRECT]\n;B[gi]C[CORRECT]\n;W[ei]C[CORRECT]\n;B[if]C[CORRECT]\n;W[ih]C[CORRECT]))", category: "other", move_number: 56, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 9, solution_coordinates: "\"{\\\"H5\\\":[\\\"H5\\\",\\\"H4\\\",\\\"F1\\\",\\\"G1\\\",\\\"E1\\\",\\\"J4\\\",\\\"J2\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700698965/l0lnknixw6zv3b75cmjz.png", suspended: false, createdAt: "2023-11-23T00:22:45.429000+00:00", updatedAt: "2023-11-23T00:22:45.429000+00:00"},
        // {sgf_id: 41, sgf_data: "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-28]PC[OGS: https://online-go.com/game/57484401]GN[barbago vs. ludflu215]PB[barbago]PW[ludflu215]BR[8k]WR[9k]TM[300]OT[5x30 byo-yomi]RE[B+0.5]SZ[9]KM[5.5]RU[Japanese]PL[W]AB[ei][eh][dg][fg][gg][cf][df][ef][ae][be][de][dd][cc][dc][bb][cb]AW[di][bh][dh][cg][af][bf][ff][gf][ee][ed][ec][gc][eb][ba][ca](;W[db]C[Incorrect - This was the actual move played in the game!])(;W[bi]C[CORRECT];B[hf]C[CORRECT];W[he]C[CORRECT];B[hg]C[CORRECT];W[ie]C[CORRECT];B[hc]C[CORRECT])(;W[ai]C[CORRECT];B[hf]C[CORRECT];W[he]C[CORRECT];B[hg]C[CORRECT];W[ie]C[CORRECT];B[hc]C[CORRECT])(;W[ah]C[CORRECT];B[hf]C[CORRECT];W[he]C[CORRECT];B[hg]C[CORRECT];W[ie]C[CORRECT];B[hc]C[CORRECT]))", category: "other", move_number: 32, difficulty: 1500, times_solved: 0, description: "", vote_count: 0, board_size: 9, solution_coordinates: "\"{\\\"B1\\\":[\\\"B1\\\",\\\"H4\\\",\\\"H5\\\",\\\"H3\\\",\\\"J5\\\",\\\"H7\\\"],\\\"A1\\\":[\\\"A1\\\",\\\"H4\\\",\\\"H5\\\",\\\"H3\\\",\\\"J5\\\",\\\"H7\\\"],\\\"A2\\\":[\\\"A2\\\",\\\"H4\\\",\\\"H5\\\",\\\"H3\\\",\\\"J5\\\",\\\"H7\\\"]}\"", thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701142669/g2z5adbeokpp87mt1a3u.png", suspended: false, createdAt: "2023-11-28T03:37:49.894000+00:00", updatedAt: "2023-11-28T03:37:49.894000+00:00"}
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Puzzles";
    return queryInterface.bulkDelete(options, null, {});
  },
};
