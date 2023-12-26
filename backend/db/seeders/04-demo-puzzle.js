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
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][np][qp][oo][ln][mn][nn][qm][qk][mj][fi][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][ij][pj][qj][di][ki][mh][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[rk]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT]))",
          category: "Judgment",
          move_number: 100,
          difficulty: 2065,
          times_solved: null,
          description: "Xie Ke vs Shin jinseo judgment puzzle",
          vote_count: 9,
          board_size: 19,
          solution_coordinates:
            '{"K13":["K13","K12","L12","M13","K14","N9","N8"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1698040034/mjhfuhimihltpiphwzfw.png",
          suspended: false,
          createdAt: "2023-12-08T01:16:00.203000+00:00",
          updatedAt: "2023-12-08T01:16:00.203000+00:00",
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][kp][np][qp][oo][ln][mn][nn][qm][ql][qk][kj][mj][fi][li][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][jf][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][mk][rk][ij][lj][nj][pj][qj][di][ji][ki][mh][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[op]C[Incorrect - This was the actual move played in the game!]) (;W[pp]C[CORRECT] ;B[qq]C[CORRECT] ;W[pn]C[CORRECT] ;B[pm]C[CORRECT] ;W[on]C[CORRECT]) (;W[ph]C[CORRECT] ;B[rf]C[CORRECT] ;W[gf]C[CORRECT] ;B[gg]C[CORRECT] ;W[jh]C[CORRECT]))",
          category: "Reading",
          move_number: 110,
          difficulty: 1803,
          times_solved: null,
          description: "Reading puzzle from Shin Jinseo vs Xie Ke game",
          vote_count: 9,
          board_size: 19,
          solution_coordinates:
            '{"Q4":["Q4","R3","Q6","Q7","P6"],"Q12":["Q12","S14","G14","G13","K12"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841598/umwvejcuf3syhi3y3kvo.png",
          suspended: false,
          createdAt: "2023-12-08T01:16:00.203000+00:00",
          updatedAt: "2023-12-08T01:16:00.203000+00:00",
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][nq][pq][rq][kp][np][qp][oo][po][ln][mn][nn][om][qm][ql][qk][kj][mj][fi][li][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][jf][nf][ce][de][ge][oe][re][bd][ed][hd][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][kq][lq][cp][dp][ep][mp][op][rp][mo][no][qo][ol][dk][gk][lk][mk][rk][ij][lj][nj][pj][qj][di][ji][ki][mh][ph][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][hc][nc][qc][gb](;W[nb]C[Incorrect - This was the actual move played in the game!]) (;W[nr]C[CORRECT] ;B[or]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[bp]C[CORRECT] ;B[hr]C[CORRECT] ;W[iq]C[CORRECT] ;B[rf]C[CORRECT] ;W[br]C[CORRECT]) (;W[bq]C[CORRECT] ;B[br]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[ob]C[CORRECT] ;B[pb]C[CORRECT] ;W[bp]C[CORRECT] ;B[bq]C[CORRECT]))",
          category: "Judgment",
          move_number: 120,
          difficulty: 1750,
          times_solved: null,
          description: "Judgment puzzle from Shin Jinseo vs Xie Ke game",
          vote_count: 13,
          board_size: 19,
          solution_coordinates:
            '{"O2":["O2","P2","B4","H2"],"B4":["B4","H2","J3","S14","B2"],"B3":["B3","B2","B4","H2"],"P18":["P18","Q18","B4","B3"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841593/eg1aqudsx4jwozkwmukc.png",
          suspended: false,
          createdAt: "2023-12-08T01:16:00.203000+00:00",
          updatedAt: "2023-12-08T01:16:00.203000+00:00",
        },
        {
          sgf_id: 24,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00]PL[W]AB[cr][dr][or][pr][cq][fq][lq][mq][pq][cp][kp][mp][qp][cn][pn][dm][em][ck][cj][ci][dh][dg][cf][de][pd]AW[er][qr][dq][eq][nq][qq][dp][fp][jp][lp][op][pp][do][lo][cl][dl][dk][dj][gj][di][ce][cd][dc][fc](;W[nr]C[Incorrect - This was the actual move played in the game!]) (;W[qo]C[CORRECT] ;B[ko]C[CORRECT] ;W[nr]C[CORRECT] ;B[hp]C[CORRECT] ;W[hq]C[CORRECT]))",
          category: "Direction",
          move_number: 50,
          difficulty: 1550,
          times_solved: null,
          description: "Other",
          vote_count: 1,
          board_size: 19,
          solution_coordinates: '{"R5":["R5","L5","O2","H4","H3"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364001/ozlrq1eoy4zwltdpwzsn.png",
          suspended: false,
          createdAt: "2023-12-08T01:16:00.203000+00:00",
          updatedAt: "2023-12-08T01:16:00.203000+00:00",
        },
        {
          sgf_id: null,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[19]KM[6.50] PL[W]AB[qq][mp][qp][qo][qn][df][dd][pd][cc][bb][db]AW[pq][dp][pp][po][pn][pl][dc][ec][fc][cb](;W[cn]C[Incorrect - This was the actual move played in the game!]) (;W[cd]C[CORRECT] ;B[bc]C[CORRECT] ;W[de]C[CORRECT] ;B[ed]C[CORRECT] ;W[ee]C[CORRECT]))",
          category: "Ladder/Net",
          move_number: 22,
          difficulty: 1250,
          times_solved: null,
          description: "Ladder problem",
          vote_count: 150,
          board_size: 19,
          solution_coordinates: '{"C16":["C16","B17","D15","E16","E15"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700435503/xiiysfegzhau9rbm9qdd.png",
          suspended: false,
          createdAt: "2023-12-08T01:16:00.203000+00:00",
          updatedAt: "2023-12-08T01:16:00.203000+00:00",
        },
        {
          sgf_id: null,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][np][qp][oo][ln][mn][nn][qm][qk][mj][fi][ih][lh][nh][eg][fg][kg][mg][ng][qg][df][if][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][ij][pj][qj][di][ki][mh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[qh]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT] ;B[ll]C[CORRECT] ;W[kl]C[CORRECT]))",
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
          sgf_id: null,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][np][qp][oo][ln][mn][nn][qm][qk][mj][fi][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][ij][pj][qj][di][ki][mh][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[rk]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT]))",
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
          sgf_id: null,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][kp][np][qp][oo][ln][mn][nn][qm][ql][qk][kj][mj][fi][li][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][jf][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][mk][rk][ij][lj][nj][pj][qj][di][ji][ki][mh][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[op]C[Incorrect - This was the actual move played in the game!]) (;W[pp]C[CORRECT] ;B[qq]C[CORRECT] ;W[pn]C[CORRECT] ;B[pm]C[CORRECT] ;W[on]C[CORRECT]) (;W[ph]C[CORRECT] ;B[rf]C[CORRECT] ;W[gf]C[CORRECT] ;B[gg]C[CORRECT] ;W[jh]C[CORRECT]))",
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
          sgf_id: null,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][nq][pq][rq][kp][np][qp][oo][po][ln][mn][nn][om][qm][ql][qk][kj][mj][fi][li][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][jf][nf][ce][de][ge][oe][re][bd][ed][hd][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][kq][lq][cp][dp][ep][mp][op][rp][mo][no][qo][ol][dk][gk][lk][mk][rk][ij][lj][nj][pj][qj][di][ji][ki][mh][ph][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][hc][nc][qc][gb](;W[nb]C[Incorrect - This was the actual move played in the game!]) (;W[nr]C[CORRECT] ;B[or]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[bp]C[CORRECT] ;B[hr]C[CORRECT] ;W[iq]C[CORRECT] ;B[rf]C[CORRECT] ;W[br]C[CORRECT]) (;W[bq]C[CORRECT] ;B[br]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[ob]C[CORRECT] ;B[pb]C[CORRECT] ;W[bp]C[CORRECT] ;B[bq]C[CORRECT]))",
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
        {
          sgf_id: 151,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[462205562]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[W]AB[pr][qr][bq][hq][jq][mq][pq][bp][cp][fp][hp][ip][mp][pp][co][fo][ho][oo][cm][qm][rm][pd]AW[br][gr][rr][cq][dq][gq][lq][qq][dp][lp][qp][eo][io][jo][lo][po][en][pn][rn][im][cd](;W[fq]C[Incorrect - This was the actual move played in the game!])(;W[gm]C[CORRECT];B[lr]C[CORRECT];W[kr]C[CORRECT];B[mr]C[CORRECT];W[kq]C[CORRECT]))",
          category: "other",
          move_number: 56,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H8\\":[\\"H8\\",\\"G7\\",\\"G8\\",\\"F7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193021/pnu7ondkrwuzl0fwb9tp.png",
          suspended: false,
          createdAt: "2023-12-10T07:23:41.966000+00:00",
          updatedAt: "2023-12-10T07:23:41.966000+00:00",
        },
        {
          sgf_id: 151,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[462205562]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[pr][qr][bq][hq][jq][mq][pq][bp][cp][hp][ip][mp][pp][co][ho][oo][cm][qm][rm][pd]AW[br][gr][rr][cq][dq][gq][lq][qq][dp][lp][qp][io][jo][lo][po][en][pn][rn][im][cd](;B[fo]C[Incorrect - This was the actual move played in the game!])(;B[hm]C[CORRECT];W[dl]C[CORRECT];B[il]C[CORRECT];W[hn]C[CORRECT])(;B[lr]C[CORRECT];W[kr]C[CORRECT];B[mr]C[CORRECT];W[kq]C[CORRECT];B[hm]C[CORRECT];W[dl]C[CORRECT])(;B[nm]C[CORRECT];W[pm]C[CORRECT];B[lr]C[CORRECT];W[kr]C[CORRECT])(;B[nn]C[CORRECT];W[pm]C[CORRECT];B[lr]C[CORRECT]))",
          category: "other",
          move_number: 43,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M2\\":[\\"M2\\",\\"L2\\",\\"N2\\",\\"L3\\",\\"H7\\"],\\"H8\\":[\\"H8\\",\\"G6\\",\\"H6\\",\\"H7\\"],\\"H7\\":[\\"H7\\",\\"H8\\",\\"M2\\"],\\"O7\\":[\\"O7\\",\\"G7\\",\\"Q7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193057/zn4nmo9ued3z6hqugnpj.png",
          suspended: false,
          createdAt: "2023-12-10T07:24:18.194000+00:00",
          updatedAt: "2023-12-10T07:24:18.194000+00:00",
        },
        {
          sgf_id: 151,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[462205562]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[pr][qr][bq][hq][jq][mq][pq][bp][cp][hp][ip][mp][pp][co][fo][ho][oo][cm][qm][rm][pd]AW[br][gr][rr][cq][dq][gq][lq][qq][dp][lp][qp][eo][io][jo][lo][po][en][pn][rn][im][cd](;B[fp]C[Incorrect - This was the actual move played in the game!])(;B[lr]C[CORRECT];W[kr]C[CORRECT];B[mr]C[CORRECT];W[kq]C[CORRECT];B[hm]C[CORRECT])(;B[hl]C[CORRECT];W[gn]C[CORRECT];B[hn]C[CORRECT];W[hm]C[CORRECT])(;B[hm]C[CORRECT];W[hl]C[CORRECT];B[lr]C[CORRECT])(;B[nm]C[CORRECT];W[gm]C[CORRECT];B[pm]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G7\\":[\\"G7\\",\\"M2\\",\\"L2\\",\\"N2\\",\\"L3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193086/bze0dyoxaeadhvzlicd7.png",
          suspended: false,
          createdAt: "2023-12-10T07:24:46.690000+00:00",
          updatedAt: "2023-12-10T07:24:46.690000+00:00",
        },
        {
          sgf_id: 151,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[462205562]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[mr][pr][qr][bq][hq][jq][mq][pq][bp][cp][fp][hp][ip][mp][pp][co][fo][ho][no][oo][ro][qn][sn][cm][hm][qm][rm][el][fl][hl][il][ck][ek][jk][cj][dj][gj][hj][ij][ci][fi][ii][fh][gh][cg][fg][hg][bf][cf][ef][ff][de][ee][ed][fd][pd]AW[br][gr][lr][rr][cq][dq][fq][gq][lq][qq][dp][lp][qp][rp][eo][io][jo][lo][mo][po][qo][en][pn][im][nm][om][jl][fk][gk][hk][ik][ej][fj][jj][bi][di][ei][gi][hi][ch][eh][hh][ih][bg][dg][gg][ig][gf][fe][ge][cd][dd][gd][ec][fc](;B[ji]C[Incorrect - This was the actual move played in the game!])(;B[kk]C[CORRECT];W[ji]C[CORRECT];B[jm]C[CORRECT];W[kl]C[CORRECT];B[km]C[CORRECT])(;B[dc]C[CORRECT];W[db]C[CORRECT];B[kk]C[CORRECT])(;B[mc]C[CORRECT];W[gl]C[CORRECT];B[jm]C[CORRECT])(;B[er]C[CORRECT];W[eq]C[CORRECT])(;B[pm]C[CORRECT];W[on]C[CORRECT])(;B[bd]C[CORRECT])(;B[nc]C[CORRECT]))",
          category: "other",
          move_number: 102,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J10\\":[\\"J10\\",\\"B10\\",\\"B12\\",\\"B17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193119/c2zvu5ykltgf5dvo7t28.png",
          suspended: false,
          createdAt: "2023-12-10T07:25:19.485000+00:00",
          updatedAt: "2023-12-10T07:25:19.485000+00:00",
        },
        {
          sgf_id: 151,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[462205562]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[W]AB[mr][pr][qr][bq][hq][jq][mq][pq][bp][cp][fp][hp][ip][mp][pp][co][fo][ho][no][oo][ro][qn][sn][cm][hm][qm][rm][pd]AW[br][gr][lr][rr][cq][dq][fq][gq][lq][qq][dp][lp][qp][rp][eo][io][jo][lo][mo][po][qo][en][pn][im][nm][cd](;W[om]C[Incorrect - This was the actual move played in the game!])(;W[hl]C[CORRECT];B[gm]C[CORRECT];W[gl]C[CORRECT];B[fm]C[CORRECT]))",
          category: "other",
          move_number: 41,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H7\\":[\\"H7\\",\\"D8\\",\\"J8\\",\\"H6\\"],\\"M2\\":[\\"M2\\",\\"L2\\",\\"N2\\",\\"L3\\",\\"H7\\",\\"D8\\"],\\"O7\\":[\\"O7\\",\\"Q7\\",\\"M2\\",\\"L2\\"],\\"O6\\":[\\"O6\\",\\"Q7\\",\\"M2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193130/n0yqnjdvumscaojap7xh.png",
          suspended: false,
          createdAt: "2023-12-10T07:25:30.450000+00:00",
          updatedAt: "2023-12-10T07:25:30.450000+00:00",
        },
        {
          sgf_id: 151,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[462205562]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[mr][pr][qr][bq][hq][jq][mq][pq][bp][cp][fp][hp][ip][mp][pp][co][fo][ho][no][oo][qn][cm][hm][qm][rm][pd]AW[br][gr][lr][rr][cq][dq][fq][gq][lq][qq][dp][lp][qp][eo][io][jo][lo][mo][po][qo][en][pn][rn][im][nm][cd](;B[ro]C[Incorrect - This was the actual move played in the game!])(;B[hl]C[CORRECT];W[ms]C[CORRECT];B[ns]C[CORRECT];W[ls]C[CORRECT];B[pm]C[CORRECT]))",
          category: "other",
          move_number: 53,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H8\\":[\\"H8\\",\\"N1\\",\\"O1\\",\\"M1\\",\\"Q7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193140/vvchgpjqrg2a9sao98nv.png",
          suspended: false,
          createdAt: "2023-12-10T07:25:40.538000+00:00",
          updatedAt: "2023-12-10T07:25:40.538000+00:00",
        },
        {
          sgf_id: 151,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[462205562]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[mr][pr][qr][bq][hq][jq][mq][pq][bp][cp][fp][hp][ip][mp][pp][co][fo][ho][no][oo][ro][qn][sn][cm][hm][qm][rm][el][fl][ck][ek][cj][dj][ci][fi][fh][fg][cf][ef][ff][ed][fd][pd]AW[br][gr][lr][rr][cq][dq][fq][gq][lq][qq][dp][lp][qp][rp][eo][io][jo][lo][mo][po][qo][en][pn][im][nm][om][fk][ej][fj][bi][di][ei][gi][ch][eh][hh][gf][ge][cd][gd][ec][fc](;B[cg]C[Incorrect - This was the actual move played in the game!])(;B[dc]C[CORRECT];W[cc]C[CORRECT];B[db]C[CORRECT];W[dd]C[CORRECT];B[gc]C[CORRECT];W[gb]C[CORRECT];B[hc]C[CORRECT]))",
          category: "other",
          move_number: 87,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D17\\":[\\"D17\\",\\"C17\\",\\"D18\\",\\"D16\\",\\"G17\\",\\"G18\\",\\"H17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193158/zlv9cdag5nzbl1crehz9.png",
          suspended: false,
          createdAt: "2023-12-10T07:25:58.971000+00:00",
          updatedAt: "2023-12-10T07:25:58.971000+00:00",
        },
        {
          sgf_id: 151,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[462205562]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[W]AB[mr][pr][qr][bq][hq][jq][mq][pq][bp][cp][fp][hp][ip][mp][pp][co][fo][ho][no][oo][ro][qn][sn][cm][hm][qm][rm][el][fl][ck][ek][cj][dj][gj][hj][ci][fi][fh][gh][cg][fg][hg][bf][cf][ef][ff][de][ee][ed][fd][pd]AW[br][gr][lr][rr][cq][dq][fq][gq][lq][qq][dp][lp][qp][rp][eo][io][jo][lo][mo][po][qo][en][pn][im][nm][om][fk][gk][hk][ej][fj][bi][di][ei][gi][hi][ch][eh][hh][bg][dg][gf][fe][ge][cd][dd][gd][ec][fc](;W[gg]C[Incorrect - This was the actual move played in the game!])(;W[ij]C[CORRECT];B[bj]C[CORRECT];W[bh]C[CORRECT];B[bc]C[CORRECT]))",
          category: "other",
          move_number: 113,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L9\\":[\\"L9\\",\\"K11\\",\\"K7\\",\\"L8\\",\\"L7\\"],\\"D17\\":[\\"D17\\",\\"D18\\",\\"L9\\"],\\"N17\\":[\\"N17\\",\\"G8\\",\\"K7\\"],\\"E2\\":[\\"E2\\",\\"E3\\"],\\"Q7\\":[\\"Q7\\",\\"P6\\"],\\"B16\\":[\\"B16\\"],\\"O17\\":[\\"O17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193196/odnzudgbmlomscr7xhdz.png",
          suspended: false,
          createdAt: "2023-12-10T07:26:36.434000+00:00",
          updatedAt: "2023-12-10T07:26:36.434000+00:00",
        },
        {
          sgf_id: 141,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[Fat2020]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[dp][pp][ph][ng][og][qg][lf][mf][pf][rf][je][le][re][kd][qd][rd][cc][kc][qc][jb]AW[nf][of][qf][me][oe][pe][qe][dd][gd][id][ld][nd][pd][lc][pc][rc][kb][mb][qb][sb](;B[jc]C[Incorrect - This was the actual move played in the game!])(;B[cd]C[CORRECT];W[de]C[CORRECT];B[ce]C[CORRECT];W[df]C[CORRECT];B[qn]C[CORRECT])(;B[dc]C[CORRECT];W[qn]C[CORRECT];B[ed]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C16\\":[\\"C16\\",\\"D17\\",\\"F17\\",\\"B16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193807/pivf7evumlghnbtavzph.png",
          suspended: false,
          createdAt: "2023-12-10T07:36:47.842000+00:00",
          updatedAt: "2023-12-10T07:36:47.842000+00:00",
        },
        {
          sgf_id: 141,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[Fat2020]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[dp][pp][cn][dl][dk][di][ei][ph][bg][dg][eg][ng][og][qg][bf][df][lf][mf][pf][rf][ce][ie][je][le][re][cd][kd][qd][rd][cc][dc][jc][kc][qc][eb][fb][ib][jb]AW[cl][ck][cj][dj][ci][ch][cg][fg][cf][ef][nf][of][qf][de][fe][he][me][oe][pe][qe][dd][ed][gd][id][ld][nd][pd][ec][fc][ic][lc][pc][rc][gb][hb][kb][mb][qb][sb](;B[ek]C[Incorrect - This was the actual move played in the game!])(;B[ej]C[CORRECT];W[dm]C[CORRECT];B[cm]C[CORRECT];W[ek]C[CORRECT];B[el]C[CORRECT];W[fk]C[CORRECT])(;B[qn]C[CORRECT];W[mh]C[CORRECT];B[mg]C[CORRECT])(;B[pm]C[CORRECT];W[dm]C[CORRECT];B[cm]C[CORRECT])(;B[pn]C[CORRECT];W[dm]C[CORRECT];B[cm]C[CORRECT])(;B[qm]C[CORRECT];W[dm]C[CORRECT];B[cm]C[CORRECT]))",
          category: "other",
          move_number: 165,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D7\\":[\\"D7\\",\\"C3\\",\\"B5\\",\\"F2\\"],\\"P10\\":[\\"P10\\",\\"H6\\",\\"J5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702193943/ksuud1mh51fcfipxnj61.png",
          suspended: false,
          createdAt: "2023-12-10T07:39:03.959000+00:00",
          updatedAt: "2023-12-10T07:39:03.959000+00:00",
        },
        {
          sgf_id: 129,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u661f\u96e8R]PW[\u5927\u98ce\u58020704]BR[7\u6bb5]WR[7\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[pq][qq][np][qp][po][nn][pn][pm][kj][mj][oj][qj][qe][nd][pd][lc]AW[dp][op][pp][qo][qn][qm][ll][nl][pl][ql][mf][pf][qf][le][dd](;W[qc]C[Incorrect - This was the actual move played in the game!])(;W[qh]C[CORRECT];B[pi]C[CORRECT];W[oq]C[CORRECT];B[nq]C[CORRECT];W[or]C[CORRECT];B[nr]C[CORRECT])(;W[oq]C[CORRECT];B[nq]C[CORRECT];W[or]C[CORRECT];B[nr]C[CORRECT];W[pr]C[CORRECT];B[qr]C[CORRECT];W[rp]C[CORRECT];B[rq]C[CORRECT]))",
          category: "other",
          move_number: 53,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N9\\":[\\"N9\\",\\"P11\\",\\"Q12\\",\\"Q10\\",\\"R11\\",\\"P12\\",\\"P13\\",\\"P14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194295/sveipnvdnu5gcjthocxc.png",
          suspended: false,
          createdAt: "2023-12-10T07:44:56.226000+00:00",
          updatedAt: "2023-12-10T07:44:56.226000+00:00",
        },
        {
          sgf_id: 129,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u661f\u96e8R]PW[\u5927\u98ce\u58020704]BR[7\u6bb5]WR[7\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[pq][qq][np][qp][po][nn][pn][pm][kj][mj][oj][qj][pi][mh][qe][re][nd][od][pd][lc][pc][nb][ob]AW[dp][op][pp][qo][qn][qm][ll][nl][pl][ql][ni][kh][qh][mf][pf][qf][le][dd][nc][oc][qc][pb][rb][qa](;B[mi]C[Incorrect - This was the actual move played in the game!])(;B[mk]C[CORRECT];W[nj]C[CORRECT];B[nk]C[CORRECT];W[ok]C[CORRECT];B[oh]C[CORRECT];W[ml]C[CORRECT])(;B[ok]C[CORRECT];W[ol]C[CORRECT];B[mk]C[CORRECT];W[oq]C[CORRECT];B[nq]C[CORRECT];W[or]C[CORRECT];B[nr]C[CORRECT])(;B[nj]C[CORRECT];W[ng]C[CORRECT];B[kd]C[CORRECT];W[li]C[CORRECT]))",
          category: "other",
          move_number: 114,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S9\\":[\\"S9\\",\\"R11\\",\\"G13\\",\\"G7\\",\\"G8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194361/ofsq73671j34vyne3guq.png",
          suspended: false,
          createdAt: "2023-12-10T07:46:02.701000+00:00",
          updatedAt: "2023-12-10T07:46:02.701000+00:00",
        },
        {
          sgf_id: 129,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u661f\u96e8R]PW[\u5927\u98ce\u58020704]BR[7\u6bb5]WR[7\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[pq][qq][np][qp][po][nn][pn][pm][nk][kj][mj][oj][qj][mi][pi][mh][qe][re][nd][od][pd][lc][pc][nb][ob]AW[dp][op][pp][qo][qn][qm][ll][nl][pl][ql][ok][nj][ni][kh][qh][mf][pf][qf][le][dd][nc][oc][qc][pb][rb][qa](;B[nh]C[Incorrect - This was the actual move played in the game!])(;B[mk]C[CORRECT];W[oi]C[CORRECT];B[ph]C[CORRECT];W[pj]C[CORRECT];B[qi]C[CORRECT];W[oh]C[CORRECT];B[og]C[CORRECT];W[of]C[CORRECT]))",
          category: "other",
          move_number: 18,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R14\\":[\\"R14\\",\\"O4\\",\\"P9\\",\\"P10\\",\\"O10\\",\\"P11\\"],\\"R17\\":[\\"R17\\",\\"Q17\\",\\"R16\\",\\"R14\\",\\"R15\\"],\\"R16\\":[\\"R16\\",\\"R17\\",\\"R15\\",\\"Q15\\",\\"S17\\"],\\"R12\\":[\\"R12\\",\\"O4\\",\\"Q10\\",\\"R14\\"],\\"N4\\":[\\"N4\\",\\"R7\\",\\"S7\\",\\"S8\\"],\\"R13\\":[\\"R13\\",\\"O4\\",\\"Q10\\"],\\"O8\\":[\\"O8\\",\\"O4\\",\\"R14\\"],\\"S9\\":[\\"S9\\",\\"O4\\"],\\"P3\\":[\\"P3\\",\\"R7\\",\\"S7\\",\\"S8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194394/gzngbtp5wgemvsircj9r.png",
          suspended: false,
          createdAt: "2023-12-10T07:46:35.177000+00:00",
          updatedAt: "2023-12-10T07:46:35.177000+00:00",
        },
        {
          sgf_id: 56,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479343]GN[Friendly Match]PB[shelly613]PW[S3BA]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[B+26.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[dq][jq][nq][gp][qp][dl][ql][ok][ij][jj][kj][lj][nj][mi][lh]AW[jl][hk][lk][mk][dj][mj][pj][ki][li][kh][cg][dd][jd][pd](;W[mh]C[Incorrect - This was the actual move played in the game!])(;W[ni]C[CORRECT];B[mh]C[CORRECT];W[kg]C[CORRECT];B[nh]C[CORRECT];W[oi]C[CORRECT];B[oh]C[CORRECT];W[pk]C[CORRECT]))",
          category: "other",
          move_number: 131,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B8\\":[\\"B8\\",\\"C3\\",\\"C2\\",\\"D2\\"],\\"C8\\":[\\"C8\\",\\"C3\\",\\"C4\\",\\"D4\\"],\\"C9\\":[\\"C9\\",\\"C3\\",\\"C4\\",\\"D4\\"],\\"B9\\":[\\"B9\\",\\"C3\\",\\"C4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194657/vi2e7d66zm1yj5h5h3in.png",
          suspended: false,
          createdAt: "2023-12-10T07:50:57.777000+00:00",
          updatedAt: "2023-12-10T07:50:57.777000+00:00",
        },
        {
          sgf_id: 56,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479343]GN[Friendly Match]PB[shelly613]PW[S3BA]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[B+26.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[jr][nr][dq][hq][jq][kq][mq][nq][gp][ip][mp][qp][ho][lo][mo][gn][nn][hm][om][dl][hl][il][nl][ql][gk][kk][nk][ok][gj][hj][ij][jj][kj][lj][nj][rj][ji][mi][ni][pi][qi][ih][nh][oh][ph][rh][sh][jg][og][lf][mf][ie][je][le][id][ld][jc][kc][lc][ib][jb][lb][mb][ma]AW[lr][mr][lq][jp][kp][lp][io][ko][hn][in][jn][ln][mn][im][km][lm][mm][nm][jl][kl][ml][hk][ik][jk][lk][mk][dj][mj][pj][ki][li][jh][kh][mh][qh][cg][kg][lg][mg][ng][pg][qg][rg][sg][nf][of][he][me][pe][dd][hd][jd][kd][md][pd][cc][gc][hc][ic][mc][oc][qc][hb][nb][na](;B[ke]C[Incorrect - This was the actual move played in the game!])(;B[bl]C[CORRECT];W[cq]C[CORRECT];B[cr]C[CORRECT];W[dr]C[CORRECT])(;B[cl]C[CORRECT];W[cq]C[CORRECT];B[cp]C[CORRECT];W[dp]C[CORRECT])(;B[ck]C[CORRECT];W[cq]C[CORRECT];B[cp]C[CORRECT];W[dp]C[CORRECT])(;B[bk]C[CORRECT];W[cq]C[CORRECT];B[cp]C[CORRECT]))",
          category: "other",
          move_number: 67,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B8\\":[\\"B8\\",\\"C3\\",\\"C2\\",\\"D4\\"],\\"C8\\":[\\"C8\\",\\"C3\\",\\"C2\\"],\\"C7\\":[\\"C7\\",\\"C3\\",\\"C2\\"],\\"E14\\":[\\"E14\\",\\"C3\\",\\"C4\\"],\\"Q14\\":[\\"Q14\\",\\"C3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194669/gl6ph12iytlb6egh9rkz.png",
          suspended: false,
          createdAt: "2023-12-10T07:51:09.504000+00:00",
          updatedAt: "2023-12-10T07:51:09.504000+00:00",
        },
        {
          sgf_id: 56,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479343]GN[Friendly Match]PB[shelly613]PW[S3BA]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[B+26.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[dq][jq][nq][gp][qp][nn][dl][hl][il][nl][ql][gk][kk][ok][gj][hj][ij][jj][kj][lj][nj][mi][ni]AW[jn][lm][nm][jl][kl][ml][hk][ik][jk][lk][mk][dj][mj][pj][ki][li][kh][mh][cg][lg][dd][jd][pd](;W[mn]C[Incorrect - This was the actual move played in the game!])(;W[nk]C[CORRECT];B[ol]C[CORRECT];W[oj]C[CORRECT];B[om]C[CORRECT];W[nh]C[CORRECT];B[qc]C[CORRECT];W[pc]C[CORRECT])(;W[om]C[CORRECT];B[mn]C[CORRECT];W[mm]C[CORRECT];B[pk]C[CORRECT];W[gl]C[CORRECT];B[hn]C[CORRECT];W[fl]C[CORRECT]))",
          category: "other",
          move_number: 171,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O1\\":[\\"O1\\",\\"L1\\",\\"K1\\",\\"N1\\"],\\"D12\\":[\\"D12\\",\\"D11\\",\\"O1\\"],\\"F18\\":[\\"F18\\",\\"O1\\",\\"G18\\"],\\"B10\\":[\\"B10\\",\\"C10\\",\\"O1\\"],\\"C10\\":[\\"C10\\",\\"B10\\",\\"O1\\",\\"L1\\"],\\"F19\\":[\\"F19\\",\\"O1\\",\\"P1\\"],\\"G18\\":[\\"G18\\",\\"O1\\",\\"F18\\"],\\"D11\\":[\\"D11\\",\\"D12\\",\\"O1\\"],\\"G15\\":[\\"G15\\",\\"O1\\",\\"F15\\"],\\"F15\\":[\\"F15\\",\\"O1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194697/zxyv8efogn8bs1yt1lq6.png",
          suspended: false,
          createdAt: "2023-12-10T07:51:37.641000+00:00",
          updatedAt: "2023-12-10T07:51:37.641000+00:00",
        },
        {
          sgf_id: 56,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479343]GN[Friendly Match]PB[shelly613]PW[S3BA]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[B+26.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[jr][nr][dq][hq][jq][kq][mq][nq][gp][ip][mp][qp][ho][lo][mo][gn][nn][hm][om][dl][hl][il][nl][ql][gk][kk][nk][ok][gj][hj][ij][jj][kj][lj][nj][rj][mi][ni][pi][qi][nh][oh][ph][rh][sh][og]AW[lr][mr][lq][jp][kp][lp][io][ko][hn][in][jn][ln][mn][im][km][lm][mm][nm][jl][kl][ml][hk][ik][jk][lk][mk][dj][mj][pj][ki][li][kh][mh][qh][cg][lg][ng][pg][qg][rg][sg][of][pe][dd][jd][pd](;W[qc]C[Incorrect - This was the actual move played in the game!])(;W[cp]C[CORRECT];B[cq]C[CORRECT];W[cl]C[CORRECT];B[cm]C[CORRECT];W[dm]C[CORRECT];B[ck]C[CORRECT])(;W[cq]C[CORRECT];B[cp]C[CORRECT];W[dp]C[CORRECT];B[bp]C[CORRECT];W[dr]C[CORRECT];B[eq]C[CORRECT])(;W[qq]C[CORRECT];B[pq]C[CORRECT];W[pr]C[CORRECT];B[qr]C[CORRECT];W[oq]C[CORRECT];B[rq]C[CORRECT])(;W[co]C[CORRECT];B[cm]C[CORRECT];W[cq]C[CORRECT];B[cr]C[CORRECT];W[dr]C[CORRECT];B[br]C[CORRECT];W[dp]C[CORRECT])(;W[cl]C[CORRECT];B[cm]C[CORRECT];W[dm]C[CORRECT];B[ck]C[CORRECT];W[bl]C[CORRECT])(;W[cn]C[CORRECT];B[cm]C[CORRECT];W[cq]C[CORRECT];B[cp]C[CORRECT])(;W[el]C[CORRECT];B[ek]C[CORRECT];W[dk]C[CORRECT];B[cl]C[CORRECT])(;W[fn]C[CORRECT];B[fm]C[CORRECT])(;W[cm]C[CORRECT])(;W[ih]C[CORRECT];B[nf]C[CORRECT]))",
          category: "other",
          move_number: 172,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K1\\":[\\"K1\\",\\"L1\\",\\"O1\\",\\"P2\\"],\\"O1\\":[\\"O1\\",\\"P1\\",\\"M1\\",\\"P2\\"],\\"J2\\":[\\"J2\\",\\"J1\\",\\"L1\\"],\\"E2\\":[\\"E2\\"],\\"E9\\":[\\"E9\\",\\"F10\\",\\"K1\\"],\\"Q7\\":[\\"Q7\\",\\"P8\\",\\"K1\\"],\\"G11\\":[\\"G11\\",\\"H11\\"],\\"E3\\":[\\"E3\\",\\"D2\\"],\\"D2\\":[\\"D2\\",\\"E2\\"],\\"F6\\":[\\"F6\\",\\"F7\\"],\\"F5\\":[\\"F5\\",\\"G5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194774/znxuyk4yr4kkha11fujq.png",
          suspended: false,
          createdAt: "2023-12-10T07:52:54.451000+00:00",
          updatedAt: "2023-12-10T07:52:54.451000+00:00",
        },
        {
          sgf_id: 150,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-21]PB[arbyter73]PW[V263850611]BR[8\u7ea7]WR[8\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+22.75]TM[1200]CA[UTF-8]PL[W]AB[cr][dr][cq][fq][nq][oq][pq][cp][mp][qp][do][qo][qk][qh][pd]AW[er][fr][dq][hq][dp][np][op][co][lo][mo][po][pn][qn][dd](;W[eo]C[Incorrect - This was the actual move played in the game!])(;W[cn]C[CORRECT];B[eq]C[CORRECT];W[ep]C[CORRECT];B[fp]C[CORRECT];W[eo]C[CORRECT];B[fo]C[CORRECT];W[en]C[CORRECT];B[gr]C[CORRECT];W[fn]C[CORRECT];B[go]C[CORRECT];W[qc]C[CORRECT]))",
          category: "other",
          move_number: 30,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C6\\":[\\"C6\\",\\"E3\\",\\"E4\\",\\"F4\\",\\"E5\\",\\"F5\\",\\"E6\\",\\"G2\\",\\"F6\\",\\"G5\\",\\"R17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194974/jdev0ycmuh6ik8tepudw.png",
          suspended: false,
          createdAt: "2023-12-10T07:56:15.054000+00:00",
          updatedAt: "2023-12-10T07:56:15.054000+00:00",
        },
        {
          sgf_id: 150,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-21]PB[arbyter73]PW[V263850611]BR[8\u7ea7]WR[8\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+22.75]TM[1200]CA[UTF-8]PL[B]AB[cr][dr][cq][fq][nq][oq][pq][cp][mp][qp][do][qo][dn][en][cl][qk][qh][og][pf][qe][jd][pd][pc]AW[er][fr][dq][hq][dp][fp][np][op][co][eo][lo][mo][po][fn][pn][qn][fm][of][oe][pe][dd][nd][od](;B[qg]C[Incorrect - This was the actual move played in the game!])(;B[pg]C[CORRECT];W[dm]C[CORRECT];B[cn]C[CORRECT];W[cm]C[CORRECT];B[bm]C[CORRECT]))",
          category: "other",
          move_number: 47,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q13\\":[\\"Q13\\",\\"D7\\",\\"C6\\",\\"C7\\",\\"B7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702194997/z6oel9ejiayiet7qspfe.png",
          suspended: false,
          createdAt: "2023-12-10T07:56:38.193000+00:00",
          updatedAt: "2023-12-10T07:56:38.193000+00:00",
        },
        {
          sgf_id: 150,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-21]PB[arbyter73]PW[V263850611]BR[8\u7ea7]WR[8\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+22.75]TM[1200]CA[UTF-8]PL[W]AB[cr][dr][cq][fq][nq][oq][pq][cp][mp][qp][do][qo][dn][en][mm][nm][cl][ol][ok][pk][qk][lj][fi][ni][gh][qh][gg][og][pg][qg][gf][if][pf][qe][id][jd][kd][pd][ec][fc][hc][lc][mc][pc][fb][gb][hb]AW[er][fr][dq][hq][dp][fp][np][op][co][eo][lo][mo][po][fn][nn][pn][qn][fm][om][pl][ql][hh][mh][nh][oh][dg][hg][ng][hf][mf][of][he][oe][pe][dd][ed][fd][gd][hd][ld][md][nd][od][dc][gc][db](;W[ie]C[Incorrect - This was the actual move played in the game!])(;W[dk]C[CORRECT];B[cn]C[CORRECT];W[di]C[CORRECT];B[hi]C[CORRECT];W[ii]C[CORRECT])(;W[ck]C[CORRECT];B[dk]C[CORRECT];W[cn]C[CORRECT];B[dm]C[CORRECT])(;W[cm]C[CORRECT];B[cn]C[CORRECT])(;W[dj]C[CORRECT];B[el]C[CORRECT];W[ck]C[CORRECT]))",
          category: "other",
          move_number: 94,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D9\\":[\\"D9\\",\\"C6\\",\\"D11\\",\\"H11\\",\\"J11\\"],\\"C9\\":[\\"C9\\",\\"D9\\",\\"C6\\",\\"D7\\"],\\"C7\\":[\\"C7\\",\\"C6\\"],\\"D10\\":[\\"D10\\",\\"E8\\",\\"C9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702195022/k1cvhrqzjh0lu9ft1dbz.png",
          suspended: false,
          createdAt: "2023-12-10T07:57:02.887000+00:00",
          updatedAt: "2023-12-10T07:57:02.887000+00:00",
        },
        {
          sgf_id: 150,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-21]PB[arbyter73]PW[V263850611]BR[8\u7ea7]WR[8\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+22.75]TM[1200]CA[UTF-8]PL[W]AB[cr][dr][cq][fq][nq][oq][pq][cp][mp][qp][do][qo][dn][en][cl][qk][qh][pf][jd][pd]AW[er][fr][dq][hq][dp][fp][np][op][co][eo][lo][mo][po][fn][pn][qn][fm][dd][nd](;W[od]C[Incorrect - This was the actual move played in the game!])(;W[dm]C[CORRECT];B[cn]C[CORRECT];W[cm]C[CORRECT];B[bm]C[CORRECT];W[em]C[CORRECT]))",
          category: "other",
          move_number: 40,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D7\\":[\\"D7\\",\\"C6\\",\\"C7\\",\\"B7\\",\\"E7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702195096/d2lw4llaykxiiadvtytc.png",
          suspended: false,
          createdAt: "2023-12-10T07:58:17.314000+00:00",
          updatedAt: "2023-12-10T07:58:17.314000+00:00",
        },
        {
          sgf_id: 150,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-21]PB[arbyter73]PW[V263850611]BR[8\u7ea7]WR[8\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+22.75]TM[1200]CA[UTF-8]PL[W]AB[cr][dr][cq][fq][nq][oq][pq][cp][mp][qp][do][qo][dn][en][mm][nm][cl][ol][ok][pk][qk][lj][di][fi][ni][gh][qh][gg][og][pg][qg][gf][if][pf][qe][id][jd][kd][pd][ec][fc][hc][lc][mc][pc][fb][gb][hb]AW[er][fr][dq][hq][dp][fp][np][op][co][eo][lo][mo][po][fn][nn][pn][qn][fm][om][pl][ql][hh][mh][nh][oh][dg][hg][ng][hf][mf][of][he][ie][oe][pe][dd][ed][fd][gd][hd][ld][md][nd][od][dc][gc][db](;W[je]C[Incorrect - This was the actual move played in the game!])(;W[dm]C[CORRECT];B[cn]C[CORRECT];W[cm]C[CORRECT];B[bm]C[CORRECT])(;W[ck]C[CORRECT];B[dk]C[CORRECT];W[cn]C[CORRECT];B[dm]C[CORRECT])(;W[ci]C[CORRECT];B[ch]C[CORRECT];W[dh]C[CORRECT];B[cg]C[CORRECT])(;W[cm]C[CORRECT];B[dm]C[CORRECT];W[dl]C[CORRECT])(;W[bk]C[CORRECT];B[cj]C[CORRECT])(;W[bj]C[CORRECT];B[ch]C[CORRECT];W[cn]C[CORRECT])(;W[ch]C[CORRECT];B[ci]C[CORRECT];W[dm]C[CORRECT])(;W[dk]C[CORRECT];B[ck]C[CORRECT]))",
          category: "other",
          move_number: 96,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D7\\":[\\"D7\\",\\"C6\\",\\"C7\\",\\"B7\\"],\\"C9\\":[\\"C9\\",\\"D9\\",\\"C6\\",\\"D7\\"],\\"C11\\":[\\"C11\\",\\"C12\\",\\"D12\\",\\"C13\\"],\\"C7\\":[\\"C7\\",\\"D7\\",\\"D8\\"],\\"B9\\":[\\"B9\\",\\"C10\\"],\\"B10\\":[\\"B10\\",\\"C12\\",\\"C6\\"],\\"C12\\":[\\"C12\\",\\"C11\\",\\"D7\\"],\\"D9\\":[\\"D9\\",\\"C9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702195145/tv3kkoimg3ogrhu36kc0.png",
          suspended: false,
          createdAt: "2023-12-10T07:59:05.978000+00:00",
          updatedAt: "2023-12-10T07:59:05.978000+00:00",
        },
        {
          sgf_id: 150,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-21]PB[arbyter73]PW[V263850611]BR[8\u7ea7]WR[8\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+22.75]TM[1200]CA[UTF-8]PL[B]AB[cr][dr][cq][fq][nq][oq][pq][cp][mp][qp][do][qo][dn][en][cl][qk][qh][og][qg][if][pf][qe][id][jd][pd][ec][fc][hc][pc][gb][hb]AW[er][fr][dq][hq][dp][fp][np][op][co][eo][lo][mo][po][fn][pn][qn][fm][ng][of][oe][pe][dd][ed][fd][gd][hd][nd][od][dc][gc][db](;B[fb]C[Incorrect - This was the actual move played in the game!])(;B[oh]C[CORRECT];W[ck]C[CORRECT];B[dl]C[CORRECT])(;B[el]C[CORRECT];W[ck]C[CORRECT];B[dk]C[CORRECT];W[cj]C[CORRECT];B[bl]C[CORRECT])(;B[go]C[CORRECT];W[fo]C[CORRECT];B[oh]C[CORRECT];W[cn]C[CORRECT]))",
          category: "other",
          move_number: 63,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P12\\":[\\"P12\\",\\"C9\\",\\"D8\\"],\\"E8\\":[\\"E8\\",\\"C9\\",\\"D9\\",\\"C10\\",\\"B8\\"],\\"G5\\":[\\"G5\\",\\"F5\\",\\"P12\\",\\"C6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702195204/x9ar6brw89fufvw4bpul.png",
          suspended: false,
          createdAt: "2023-12-10T08:00:04.818000+00:00",
          updatedAt: "2023-12-10T08:00:04.818000+00:00",
        },
        {
          sgf_id: 118,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-22]PC[OGS: https://online-go.com/game/24887622]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[hanga]PW[BorisD]BR[10k]WR[6k]TM[180]OT[3x30 byo-yomi]RE[W+16.5]SZ[9]KM[5.5]RU[Chinese]PL[B]AB[eg][ff][gd][fc][hc]AW[dg][ge][dd][fd][gc](;B[hd]C[Incorrect - This was the actual move played in the game!])(;B[gb]C[CORRECT];W[df]C[CORRECT];B[fe]C[CORRECT];W[ed]C[CORRECT];B[cc]C[CORRECT];W[eb]C[CORRECT];B[cb]C[CORRECT];W[db]C[CORRECT]))",
          category: "other",
          move_number: 11,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"G8\\":[\\"G8\\",\\"D4\\",\\"F5\\",\\"E6\\",\\"C7\\",\\"E8\\",\\"C8\\",\\"D8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702195417/t9tdmw7vs0dttaroon8p.png",
          suspended: false,
          createdAt: "2023-12-10T08:03:37.663000+00:00",
          updatedAt: "2023-12-10T08:03:37.663000+00:00",
        },
        {
          sgf_id: 118,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-22]PC[OGS: https://online-go.com/game/24887622]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[hanga]PW[BorisD]BR[10k]WR[6k]TM[180]OT[3x30 byo-yomi]RE[W+16.5]SZ[9]KM[5.5]RU[Chinese]PL[B]AB[eh][eg][ff][gf][hf][gd][hd][fc][hc][gb]AW[dh][dg][fe][ge][he][dd][fd][ec][fb](;B[ha]C[Incorrect - This was the actual move played in the game!])(;B[eb]C[CORRECT];W[gc]C[CORRECT];B[df]C[CORRECT];W[cf]C[CORRECT];B[fc]C[CORRECT];W[de]C[CORRECT];B[fa]C[CORRECT]))",
          category: "other",
          move_number: 21,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"E8\\":[\\"E8\\",\\"G7\\",\\"D4\\",\\"C4\\",\\"F7\\",\\"D5\\",\\"F9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702195447/wway6zt9ju06ipw98wld.png",
          suspended: false,
          createdAt: "2023-12-10T08:04:08.243000+00:00",
          updatedAt: "2023-12-10T08:04:08.243000+00:00",
        },
        {
          sgf_id: 118,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-22]PC[OGS: https://online-go.com/game/24887622]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[hanga]PW[BorisD]BR[10k]WR[6k]TM[180]OT[3x30 byo-yomi]RE[W+16.5]SZ[9]KM[5.5]RU[Chinese]PL[B]AB[eg][ff][gd][hd][fc][hc]AW[dg][fe][ge][dd][fd][gc](;B[gf]C[Incorrect - This was the actual move played in the game!])(;B[df]C[CORRECT];W[ec]C[CORRECT];B[fb]C[CORRECT];W[eb]C[CORRECT];B[gb]C[CORRECT];W[cf]C[CORRECT]))",
          category: "other",
          move_number: 13,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D4\\":[\\"D4\\",\\"E7\\",\\"F8\\",\\"E8\\",\\"G8\\",\\"C4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702195460/agqucrtoagsjbdiudt9b.png",
          suspended: false,
          createdAt: "2023-12-10T08:04:20.495000+00:00",
          updatedAt: "2023-12-10T08:04:20.495000+00:00",
        },
        {
          sgf_id: 131,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u4ef2\u5c3c\u95e8\u4e0ba]PW[\u661f\u96e8R]BR[6\u6bb5]WR[7\u6bb5]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[fq][iq][pq][fp][lp][fo][gn][pn][gm][pd]AW[eq][dp][hp][ip][jp][go][cn][en][fn][dd](;B[gp]C[Incorrect - This was the actual move played in the game!])(;B[jr]C[CORRECT];W[hq]C[CORRECT];B[hr]C[CORRECT];W[gr]C[CORRECT])(;B[do]C[CORRECT];W[eo]C[CORRECT];B[er]C[CORRECT];W[dr]C[CORRECT];B[gr]C[CORRECT];W[hq]C[CORRECT])(;B[gr]C[CORRECT];W[hq]C[CORRECT];B[do]C[CORRECT];W[eo]C[CORRECT];B[co]C[CORRECT])(;B[er]C[CORRECT];W[dr]C[CORRECT];B[do]C[CORRECT];W[eo]C[CORRECT];B[gr]C[CORRECT];W[hq]C[CORRECT])(;B[cm]C[CORRECT];W[dn]C[CORRECT];B[jq]C[CORRECT]))",
          category: "other",
          move_number: 97,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N13\\":[\\"N13\\",\\"N12\\",\\"O14\\",\\"S11\\",\\"Q13\\"],\\"S7\\":[\\"S7\\",\\"T7\\",\\"N13\\",\\"N12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235746/u5fovk96y7on8c8ihbwk.png",
          suspended: false,
          createdAt: "2023-12-10T19:15:47.066000+00:00",
          updatedAt: "2023-12-10T19:15:47.066000+00:00",
        },
        {
          sgf_id: 131,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u4ef2\u5c3c\u95e8\u4e0ba]PW[\u661f\u96e8R]BR[6\u6bb5]WR[7\u6bb5]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[er][fr][gr][ir][jr][fq][hq][iq][pq][fp][gp][lp][np][ao][fo][an][bn][gn][pn][cm][gm][nm][qm][bl][ml][dk][bj][ei][qh][rg][pf][qf][ne][oe][pd][ec][ic][nc][pc][eb][ob]AW[es][dr][kr][eq][jq][lq][ap][bp][dp][hp][ip][jp][mp][bo][go][ho][mo][cn][dn][en][fn][fl][hl][nl][pl][ql][nk][ci][cf][of][rf][pe][qe][re][dd][qd][dc][qc][db][pb][qb](;B[mn]C[Incorrect - This was the actual move played in the game!])(;B[nh]C[CORRECT];W[on]C[CORRECT];B[om]C[CORRECT];W[pm]C[CORRECT];B[qn]C[CORRECT])(;B[oh]C[CORRECT];W[on]C[CORRECT];B[om]C[CORRECT];W[pm]C[CORRECT])(;B[ni]C[CORRECT];W[mk]C[CORRECT];B[lh]C[CORRECT])(;B[ng]C[CORRECT];W[oi]C[CORRECT])(;B[om]C[CORRECT];W[og]C[CORRECT];B[oh]C[CORRECT])(;B[mi]C[CORRECT];W[og]C[CORRECT]))",
          category: "other",
          move_number: 21,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K2\\":[\\"K2\\",\\"H3\\",\\"H2\\",\\"G2\\"],\\"D5\\":[\\"D5\\",\\"E5\\",\\"E2\\",\\"D2\\",\\"G2\\",\\"H3\\"],\\"G2\\":[\\"G2\\",\\"H3\\",\\"D5\\",\\"E5\\",\\"C5\\"],\\"E2\\":[\\"E2\\",\\"D2\\",\\"D5\\",\\"E5\\",\\"G2\\",\\"H3\\"],\\"C7\\":[\\"C7\\",\\"D6\\",\\"K3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235761/byhlmnyuzkyqh8coczzg.png",
          suspended: false,
          createdAt: "2023-12-10T19:16:01.897000+00:00",
          updatedAt: "2023-12-10T19:16:01.897000+00:00",
        },
        {
          sgf_id: 131,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u4ef2\u5c3c\u95e8\u4e0ba]PW[\u661f\u96e8R]BR[6\u6bb5]WR[7\u6bb5]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[er][fr][gr][ir][jr][fq][hq][iq][pq][fp][gp][lp][np][ao][fo][an][bn][gn][mn][pn][cm][gm][nm][om][qm][bl][ml][dk][rk][bj][oj][qj][ei][oi][ph][qh][rg][pf][qf][ne][oe][pd][ec][ic][nc][pc][eb][ob]AW[es][dr][kr][eq][jq][lq][ap][bp][dp][hp][ip][jp][mp][bo][go][ho][mo][no][cn][dn][en][fn][fl][hl][nl][pl][ql][rl][nk][pk][nj][ci][ni][oh][og][cf][of][rf][pe][qe][re][dd][qd][dc][qc][db][pb][qb](;B[nq]C[Incorrect - This was the actual move played in the game!])(;B[mg]C[CORRECT];W[mh]C[CORRECT];B[nf]C[CORRECT];W[ri]C[CORRECT];B[pg]C[CORRECT])(;B[rm]C[CORRECT];W[sm]C[CORRECT];B[mg]C[CORRECT];W[mh]C[CORRECT]))",
          category: "other",
          move_number: 43,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F8\\":[\\"F8\\",\\"R17\\",\\"Q17\\",\\"R16\\",\\"R14\\"],\\"M6\\":[\\"M6\\",\\"J7\\",\\"H9\\",\\"F8\\"],\\"O17\\":[\\"O17\\",\\"F9\\",\\"F8\\",\\"E8\\"],\\"F17\\":[\\"F17\\",\\"F9\\"],\\"N5\\":[\\"N5\\",\\"O4\\",\\"O5\\"],\\"R13\\":[\\"R13\\",\\"F9\\"],\\"R14\\":[\\"R14\\",\\"F9\\",\\"F8\\"],\\"N17\\":[\\"N17\\",\\"F9\\",\\"D11\\"],\\"J7\\":[\\"J7\\",\\"M5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235773/dx9ooxda6s1eygjlmkvj.png",
          suspended: false,
          createdAt: "2023-12-10T19:16:13.480000+00:00",
          updatedAt: "2023-12-10T19:16:13.480000+00:00",
        },
        {
          sgf_id: 131,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u4ef2\u5c3c\u95e8\u4e0ba]PW[\u661f\u96e8R]BR[6\u6bb5]WR[7\u6bb5]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[er][fr][gr][ir][jr][rr][sr][fq][hq][iq][nq][oq][pq][qq][sq][fp][gp][lp][np][qp][ao][fo][oo][an][bn][gn][in][mn][on][pn][qn][cm][gm][nm][om][qm][rm][bl][ml][dk][rk][bj][oj][qj][ei][oi][ri][ph][qh][rg][pf][qf][ne][oe][pd][ec][ic][nc][pc][eb][ob]AW[es][dr][kr][eq][jq][lq][rq][ap][bp][dp][hp][ip][jp][mp][op][pp][rp][bo][go][ho][lo][mo][no][po][qo][ro][so][cn][dn][en][fn][rn][sm][fl][hl][nl][pl][ql][rl][sl][lk][nk][pk][nj][pj][ci][ni][oh][og][cf][of][rf][pe][qe][re][dd][qd][dc][qc][db][pb][qb](;B[il]C[Incorrect - This was the actual move played in the game!])(;B[jk]C[CORRECT];W[ik]C[CORRECT];B[kk]C[CORRECT];W[jj]C[CORRECT])(;B[gl]C[CORRECT];W[gk]C[CORRECT];B[hk]C[CORRECT];W[il]C[CORRECT];B[im]C[CORRECT])(;B[ik]C[CORRECT];W[il]C[CORRECT];B[gl]C[CORRECT])(;B[hk]C[CORRECT];W[gl]C[CORRECT];B[il]C[CORRECT])(;B[jj]C[CORRECT];W[ik]C[CORRECT]))",
          category: "other",
          move_number: 125,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K9\\":[\\"K9\\",\\"J9\\",\\"L9\\",\\"K10\\"],\\"G8\\":[\\"G8\\",\\"G9\\",\\"H9\\",\\"J8\\",\\"J7\\"],\\"J9\\":[\\"J9\\",\\"J8\\",\\"G8\\"],\\"H9\\":[\\"H9\\",\\"G8\\",\\"J8\\"],\\"K10\\":[\\"K10\\",\\"J9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235797/najs69a3ukir1pcb152j.png",
          suspended: false,
          createdAt: "2023-12-10T19:16:37.640000+00:00",
          updatedAt: "2023-12-10T19:16:37.640000+00:00",
        },
        {
          sgf_id: 131,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u4ef2\u5c3c\u95e8\u4e0ba]PW[\u661f\u96e8R]BR[6\u6bb5]WR[7\u6bb5]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[W]AB[er][fr][gr][ir][jr][fq][hq][iq][nq][pq][fp][gp][lp][np][ao][fo][an][bn][gn][mn][pn][cm][gm][nm][om][qm][bl][ml][dk][rk][bj][oj][qj][ei][oi][ph][qh][rg][pf][qf][ne][oe][pd][ec][ic][nc][pc][eb][ob]AW[es][dr][kr][eq][jq][lq][ap][bp][dp][hp][ip][jp][mp][bo][go][ho][mo][no][cn][dn][en][fn][fl][hl][nl][pl][ql][rl][nk][pk][nj][ci][ni][oh][og][cf][of][rf][pe][qe][re][dd][qd][dc][qc][db][pb][qb](;W[pj]C[Incorrect - This was the actual move played in the game!])(;W[ri]C[CORRECT];B[rj]C[CORRECT];W[pg]C[CORRECT];B[si]C[CORRECT];W[sk]C[CORRECT]))",
          category: "other",
          move_number: 19,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H5\\":[\\"H5\\",\\"G4\\",\\"J4\\",\\"J3\\",\\"J5\\",\\"H3\\",\\"K3\\"],\\"J2\\":[\\"J2\\",\\"L3\\",\\"M3\\",\\"J3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235812/hpctaasdc1bhddbih0qh.png",
          suspended: false,
          createdAt: "2023-12-10T19:16:53.185000+00:00",
          updatedAt: "2023-12-10T19:16:53.185000+00:00",
        },
        {
          sgf_id: 131,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u4ef2\u5c3c\u95e8\u4e0ba]PW[\u661f\u96e8R]BR[6\u6bb5]WR[7\u6bb5]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[er][fr][gr][ir][jr][rr][fq][hq][iq][nq][oq][pq][qq][fp][gp][lp][np][qp][ao][fo][oo][an][bn][gn][mn][on][pn][qn][cm][gm][nm][om][qm][rm][bl][ml][dk][rk][bj][oj][qj][ei][oi][ri][ph][qh][rg][pf][qf][ne][oe][pd][ec][ic][nc][pc][eb][ob]AW[es][dr][kr][eq][jq][lq][rq][ap][bp][dp][hp][ip][jp][mp][op][pp][rp][bo][go][ho][mo][no][po][qo][ro][so][cn][dn][en][fn][rn][sm][fl][hl][nl][pl][ql][rl][nk][pk][nj][pj][ci][ni][oh][og][cf][of][rf][pe][qe][re][dd][qd][dc][qc][db][pb][qb](;B[sr]C[Incorrect - This was the actual move played in the game!])(;B[lk]C[CORRECT];W[kj]C[CORRECT];B[jl]C[CORRECT])(;B[km]C[CORRECT];W[mr]C[CORRECT];B[lo]C[CORRECT])(;B[im]C[CORRECT];W[lo]C[CORRECT];B[lk]C[CORRECT])(;B[kk]C[CORRECT];W[mr]C[CORRECT])(;B[kn]C[CORRECT];W[lo]C[CORRECT])(;B[ln]C[CORRECT];W[mq]C[CORRECT]))",
          category: "other",
          move_number: 119,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M9\\":[\\"M9\\",\\"L10\\",\\"K8\\"],\\"L7\\":[\\"L7\\",\\"N2\\",\\"M5\\"],\\"J7\\":[\\"J7\\",\\"M5\\",\\"M9\\"],\\"L9\\":[\\"L9\\",\\"N2\\"],\\"L6\\":[\\"L6\\",\\"M5\\"],\\"M6\\":[\\"M6\\",\\"N3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235870/w5oxhb0lrhqmyihebymx.png",
          suspended: false,
          createdAt: "2023-12-10T19:17:51.004000+00:00",
          updatedAt: "2023-12-10T19:17:51.004000+00:00",
        },
        {
          sgf_id: 144,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-22]PB[jonwick01]PW[\u5c0f\u5b501205]BR[2\u7ea7]WR[2\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[dp][do][cn][cm][dm][dl][dk][dj][di][ch][cg][cf][be][ie][dd][gd][hd][jd][qd][dc][ec][fc][oc]AW[eq][cp][pp][co][bn][dn][bm][qm][cl][ck][cj][dg][gg][df][ce][de][ge][he][cd][ed][fd][cc](;W[en]C[Incorrect - This was the actual move played in the game!])(;W[dq]C[CORRECT];B[hg]C[CORRECT];W[gc]C[CORRECT];B[hc]C[CORRECT];W[gb]C[CORRECT])(;W[gc]C[CORRECT];B[hc]C[CORRECT];W[dq]C[CORRECT];B[cb]C[CORRECT]))",
          category: "other",
          move_number: 61,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E4\\":[\\"E4\\",\\"F4\\",\\"F5\\",\\"F6\\",\\"G5\\",\\"G6\\",\\"H5\\",\\"H6\\",\\"H3\\",\\"F10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235903/coetixszqfjydxlbgznx.png",
          suspended: false,
          createdAt: "2023-12-10T19:18:23.433000+00:00",
          updatedAt: "2023-12-10T19:18:23.433000+00:00",
        },
        {
          sgf_id: 144,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-22]PB[jonwick01]PW[\u5c0f\u5b501205]BR[2\u7ea7]WR[2\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[ds][er][pr][aq][bq][cq][dq][hq][kq][qq][rq][ap][dp][ep][ip][jp][kp][qp][sp][do][ho][ko][lo][mo][po][ro][cn][jn][kn][cm][dm][jm][mm][dl][gl][hl][dk][fk][dj][fj][ci][di][fi][hi][ii][bh][ch][fh][gh][ih][ph][qh][cg][ig][cf][be][ie][me][dd][gd][hd][jd][qd][dc][ec][fc][oc]AW[fr][hr][eq][fq][iq][jq][nq][bp][cp][fp][lp][op][pp][ao][bo][co][eo][go][io][jo][qo][bn][dn][en][fn][hn][in][ln][mn][nn][qn][rn][bm][fm][lm][qm][cl][fl][ak][ck][gk][bj][cj][gj][hj][ij][pj][bi][gi][ji][ni][qi][hh][dg][gg][hg][lg][df][ce][de][ge][he][bd][cd][ed][fd][cc](;B[af]C[Incorrect - This was the actual move played in the game!])(;B[jj]C[CORRECT];W[jk]C[CORRECT];B[kj]C[CORRECT];W[ik]C[CORRECT];B[kk]C[CORRECT];W[kl]C[CORRECT];B[jl]C[CORRECT];W[lk]C[CORRECT]))",
          category: "other",
          move_number: 137,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K10\\":[\\"K10\\",\\"K9\\",\\"L10\\",\\"J9\\",\\"L9\\",\\"L8\\",\\"K8\\",\\"M9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235935/ro6zbbj7vowticpg0uj2.png",
          suspended: false,
          createdAt: "2023-12-10T19:18:55.760000+00:00",
          updatedAt: "2023-12-10T19:18:55.760000+00:00",
        },
        {
          sgf_id: 144,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-22]PB[jonwick01]PW[\u5c0f\u5b501205]BR[2\u7ea7]WR[2\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[cq][dq][dp][do][cn][cm][dm][dl][dk][dj][di][ch][cg][cf][be][ie][dd][gd][hd][jd][qd][dc][ec][fc][oc]AW[eq][cp][pp][co][eo][bn][dn][en][bm][qm][cl][ck][cj][dg][gg][df][ce][de][ge][he][cd][ed][fd][cc](;W[bo]C[Incorrect - This was the actual move played in the game!])(;W[ep]C[CORRECT];B[bq]C[CORRECT];W[ap]C[CORRECT];B[bp]C[CORRECT];W[bo]C[CORRECT];B[er]C[CORRECT];W[fr]C[CORRECT]))",
          category: "other",
          move_number: 37,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D6\\":[\\"D6\\",\\"C11\\",\\"D11\\",\\"D12\\",\\"B11\\",\\"B10\\",\\"B12\\"],\\"B7\\":[\\"B7\\",\\"C11\\",\\"D11\\",\\"D12\\",\\"B11\\",\\"D7\\",\\"E7\\",\\"D6\\"],\\"C6\\":[\\"C6\\",\\"C11\\",\\"D11\\",\\"D12\\",\\"B11\\",\\"B10\\",\\"B12\\",\\"B8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235954/yv6gfewngvevzijzqbhq.png",
          suspended: false,
          createdAt: "2023-12-10T19:19:15.135000+00:00",
          updatedAt: "2023-12-10T19:19:15.135000+00:00",
        },
        {
          sgf_id: 144,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-22]PB[jonwick01]PW[\u5c0f\u5b501205]BR[2\u7ea7]WR[2\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[cm][dl][dk][dj][ch][cg][cf][be][ie][dd][gd][hd][jd][qd][dc][ec][fc][oc]AW[eq][cp][pp][qm][cl][ck][cj][dg][gg][df][ce][de][ge][he][cd][ed][fd][cc](;B[di]C[Incorrect - This was the actual move played in the game!])(;B[dn]C[CORRECT];W[ci]C[CORRECT];B[di]C[CORRECT];W[dh]C[CORRECT];B[bi]C[CORRECT];W[bj]C[CORRECT];B[bh]C[CORRECT])(;B[bm]C[CORRECT];W[ci]C[CORRECT];B[di]C[CORRECT];W[dh]C[CORRECT];B[bi]C[CORRECT];W[dm]C[CORRECT];B[em]C[CORRECT];W[dn]C[CORRECT])(;B[cn]C[CORRECT];W[ci]C[CORRECT];B[di]C[CORRECT];W[dh]C[CORRECT];B[bi]C[CORRECT];W[bj]C[CORRECT];B[bh]C[CORRECT];W[bl]C[CORRECT]))",
          category: "other",
          move_number: 46,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D3\\":[\\"D3\\",\\"H13\\",\\"G17\\",\\"H17\\",\\"G18\\"],\\"G17\\":[\\"G17\\",\\"H17\\",\\"D3\\",\\"C18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235971/cznkr1xubyss01owmtjq.png",
          suspended: false,
          createdAt: "2023-12-10T19:19:31.999000+00:00",
          updatedAt: "2023-12-10T19:19:31.999000+00:00",
        },
        {
          sgf_id: 144,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-22]PB[jonwick01]PW[\u5c0f\u5b501205]BR[2\u7ea7]WR[2\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[ds][er][bq][cq][dq][dp][do][cn][cm][dm][dl][dk][dj][ci][di][bh][ch][cg][cf][be][ie][dd][gd][hd][jd][qd][dc][ec][fc][oc]AW[fr][eq][fq][bp][cp][pp][bo][co][eo][bn][dn][en][bm][qm][cl][ck][bj][cj][bi][dg][gg][df][ce][de][ge][he][cd][ed][fd][cc](;B[ap]C[Incorrect - This was the actual move played in the game!])(;B[ep]C[CORRECT];W[fp]C[CORRECT];B[fo]C[CORRECT];W[fn]C[CORRECT];B[go]C[CORRECT];W[gn]C[CORRECT];B[ho]C[CORRECT];W[hn]C[CORRECT];B[hq]C[CORRECT];W[fj]C[CORRECT]))",
          category: "other",
          move_number: 50,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E4\\":[\\"E4\\",\\"B3\\",\\"A4\\",\\"B4\\",\\"B5\\",\\"E2\\",\\"F2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702235988/jyvxubct94moqftayxlo.png",
          suspended: false,
          createdAt: "2023-12-10T19:19:49.120000+00:00",
          updatedAt: "2023-12-10T19:19:49.120000+00:00",
        },
        {
          sgf_id: 144,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-22]PB[jonwick01]PW[\u5c0f\u5b501205]BR[2\u7ea7]WR[2\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[ds][er][aq][bq][cq][dq][ap][dp][do][cn][cm][dm][dl][dk][dj][ci][di][bh][ch][cg][cf][be][ie][dd][gd][hd][jd][qd][dc][ec][fc][oc]AW[fr][eq][fq][bp][cp][pp][ao][bo][co][eo][bn][dn][en][bm][qm][cl][ck][bj][cj][bi][dg][gg][df][ce][de][ge][he][cd][ed][fd][cc](;W[ak]C[Incorrect - This was the actual move played in the game!])(;W[fl]C[CORRECT];B[fk]C[CORRECT];W[gk]C[CORRECT];B[fm]C[CORRECT])(;W[gn]C[CORRECT];B[bd]C[CORRECT];W[bc]C[CORRECT];B[gk]C[CORRECT])(;W[gc]C[CORRECT];B[hc]C[CORRECT];W[gb]C[CORRECT];B[fb]C[CORRECT];W[gn]C[CORRECT];B[gk]C[CORRECT];W[nq]C[CORRECT])(;W[gk]C[CORRECT];B[bd]C[CORRECT];W[bc]C[CORRECT];B[fl]C[CORRECT])(;W[fs]C[CORRECT];B[hg]C[CORRECT];W[gc]C[CORRECT])(;W[fm]C[CORRECT];B[bd]C[CORRECT];W[bc]C[CORRECT]))",
          category: "other",
          move_number: 64,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F8\\":[\\"F8\\",\\"F9\\",\\"G9\\",\\"F7\\"],\\"G6\\":[\\"G6\\",\\"B16\\",\\"B17\\",\\"G9\\"],\\"G17\\":[\\"G17\\",\\"H17\\",\\"G18\\",\\"F18\\",\\"G6\\",\\"G9\\",\\"O3\\"],\\"G9\\":[\\"G9\\",\\"B16\\",\\"B17\\",\\"F8\\"],\\"F1\\":[\\"F1\\",\\"H13\\",\\"G17\\"],\\"F7\\":[\\"F7\\",\\"B16\\",\\"B17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236028/rydyraqnwpvgr3qp6ynm.png",
          suspended: false,
          createdAt: "2023-12-10T19:20:29.111000+00:00",
          updatedAt: "2023-12-10T19:20:29.111000+00:00",
        },
        {
          sgf_id: 144,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-22]PB[jonwick01]PW[\u5c0f\u5b501205]BR[2\u7ea7]WR[2\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[ds][er][pr][aq][bq][cq][dq][hq][kq][qq][rq][ap][dp][ep][ip][jp][kp][qp][sp][do][ho][ko][lo][mo][po][ro][cn][jn][kn][cm][dm][jm][mm][dl][gl][hl][dk][fk][dj][fj][ci][di][fi][hi][ii][bh][ch][fh][gh][ih][ph][qh][cg][ig][cf][be][ie][me][dd][gd][hd][jd][qd][dc][ec][fc][oc]AW[fr][hr][eq][fq][iq][jq][nq][bp][cp][fp][lp][op][pp][ao][bo][co][eo][go][io][jo][qo][bn][dn][en][fn][hn][in][ln][mn][nn][qn][rn][bm][fm][lm][qm][cl][fl][ak][ck][gk][bj][cj][gj][hj][ij][pj][bi][gi][ji][ni][qi][hh][dg][gg][hg][lg][df][ce][de][ge][he][cd][ed][fd][cc](;W[bd]C[Incorrect - This was the actual move played in the game!])(;W[jk]C[CORRECT];B[nr]C[CORRECT];W[mr]C[CORRECT];B[oq]C[CORRECT];W[np]C[CORRECT];B[mq]C[CORRECT];W[ns]C[CORRECT];B[or]C[CORRECT];W[lq]C[CORRECT];B[mp]C[CORRECT]))",
          category: "other",
          move_number: 136,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K9\\":[\\"K9\\",\\"O2\\",\\"N2\\",\\"P3\\",\\"O4\\",\\"N3\\",\\"O1\\",\\"P2\\",\\"M3\\",\\"N4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236044/w783z5p5ltzgvouht3sx.png",
          suspended: false,
          createdAt: "2023-12-10T19:20:45.443000+00:00",
          updatedAt: "2023-12-10T19:20:45.443000+00:00",
        },
        {
          sgf_id: 144,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-22]PB[jonwick01]PW[\u5c0f\u5b501205]BR[2\u7ea7]WR[2\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[ds][er][pr][aq][bq][cq][dq][hq][kq][qq][rq][ap][dp][ep][ip][jp][kp][qp][sp][do][ho][ko][lo][mo][po][ro][cn][jn][kn][cm][dm][jm][mm][dl][gl][hl][dk][fk][dj][ci][di][bh][ch][ph][qh][cg][ig][cf][be][ie][me][dd][gd][hd][jd][qd][dc][ec][fc][oc]AW[fr][hr][eq][fq][iq][jq][nq][bp][cp][fp][lp][op][pp][ao][bo][co][eo][go][io][jo][qo][bn][dn][en][fn][hn][in][ln][mn][nn][qn][rn][bm][lm][qm][cl][fl][ak][ck][gk][bj][cj][pj][bi][ji][ni][qi][dg][gg][lg][df][ce][de][ge][he][cd][ed][fd][cc](;W[fm]C[Incorrect - This was the actual move played in the game!])(;W[fj]C[CORRECT];B[ek]C[CORRECT];W[gm]C[CORRECT];B[gj]C[CORRECT];W[hk]C[CORRECT];B[gi]C[CORRECT]))",
          category: "other",
          move_number: 122,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F10\\":[\\"F10\\",\\"E9\\",\\"G7\\",\\"G10\\",\\"H9\\",\\"G11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236058/lprmsc8bkvmqzpyil6py.png",
          suspended: false,
          createdAt: "2023-12-10T19:20:58.325000+00:00",
          updatedAt: "2023-12-10T19:20:58.325000+00:00",
        },
        {
          sgf_id: 59,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59467934]GN[GuillaumeCouty vs. HungYuk]PB[GuillaumeCouty]PW[HungYuk]BR[9k]WR[8k]TM[1200]OT[5x30 byo-yomi]RE[W+36.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[kq][nq][rq][kp][np][rp][lo][no][cn][ln][qn][qm][sm][rl][ck][cd][pd][pc]AW[jq][oq][qq][cp][dp][jp][pp][ko][oo][jn][on][pm][pl][ql][rk][ni][pe][qe](;B[og]C[Incorrect - This was the actual move played in the game!])(;B[rj]C[CORRECT];W[qk]C[CORRECT];B[sk]C[CORRECT];W[qi]C[CORRECT];B[oe]C[CORRECT];W[rr]C[CORRECT]))",
          category: "other",
          move_number: 59,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R13\\":[\\"R13\\",\\"S17\\",\\"S18\\",\\"S13\\",\\"S12\\",\\"S14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236097/a2pkqd7i5lez72qqrxos.png",
          suspended: false,
          createdAt: "2023-12-10T19:21:37.474000+00:00",
          updatedAt: "2023-12-10T19:21:37.474000+00:00",
        },
        {
          sgf_id: 59,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59467934]GN[GuillaumeCouty vs. HungYuk]PB[GuillaumeCouty]PW[HungYuk]BR[9k]WR[8k]TM[1200]OT[5x30 byo-yomi]RE[W+36.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[kq][nq][rq][kp][np][rp][lo][no][cn][ln][qn][qm][sm][rl][ck][kg][lg][mg][ng][og][cf][kf][ke][cd][ld][pd][dc][mc][pc]AW[jq][oq][qq][cp][dp][jp][pp][ko][oo][jn][on][pm][pl][ql][rk][li][ni][fg][lf][mf][nf][of][pe][qe][ed][id][kd][ec][kc](;B[le]C[Incorrect - This was the actual move played in the game!])(;B[qg]C[CORRECT];W[rc]C[CORRECT];B[rb]C[CORRECT];W[rg]C[CORRECT];B[rh]C[CORRECT];W[rf]C[CORRECT]))",
          category: "other",
          move_number: 56,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M16\\":[\\"M16\\",\\"R13\\",\\"N16\\",\\"S10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236108/jcytv2zgzhi7sjwfjvuc.png",
          suspended: false,
          createdAt: "2023-12-10T19:21:48.852000+00:00",
          updatedAt: "2023-12-10T19:21:48.852000+00:00",
        },
        {
          sgf_id: 59,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59467934]GN[GuillaumeCouty vs. HungYuk]PB[GuillaumeCouty]PW[HungYuk]BR[9k]WR[8k]TM[1200]OT[5x30 byo-yomi]RE[W+36.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[kq][nq][rq][np][rp][cn][qn][qm][rl][ck][cd][pd][pc]AW[oq][qq][cp][dp][jp][pp][oo][pm][pl][ql][rk][pe][qe](;B[sm]C[Incorrect - This was the actual move played in the game!])(;B[jq]C[CORRECT];W[hp]C[CORRECT];B[ip]C[CORRECT];W[ec]C[CORRECT])(;B[ir]C[CORRECT];W[ne]C[CORRECT];B[rd]C[CORRECT])(;B[iq]C[CORRECT];W[ne]C[CORRECT]))",
          category: "other",
          move_number: 36,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O15\\":[\\"O15\\",\\"N16\\",\\"S2\\"],\\"S2\\":[\\"S2\\",\\"S10\\",\\"T9\\",\\"R9\\",\\"R10\\"],\\"E17\\":[\\"E17\\",\\"D15\\",\\"S2\\"],\\"E16\\":[\\"E16\\",\\"R9\\",\\"R10\\",\\"P13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236121/afqu5tx8akkbispenayv.png",
          suspended: false,
          createdAt: "2023-12-10T19:22:02.612000+00:00",
          updatedAt: "2023-12-10T19:22:02.612000+00:00",
        },
        {
          sgf_id: 59,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59467934]GN[GuillaumeCouty vs. HungYuk]PB[GuillaumeCouty]PW[HungYuk]BR[9k]WR[8k]TM[1200]OT[5x30 byo-yomi]RE[W+36.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[lr][kq][nq][rq][kp][np][rp][lo][no][cn][ln][qn][qm][sm][rl][ck][kg][lg][mg][ng][og][pg][cf][kf][pf][qf][ke][le][oe][cd][ld][pd][qd][dc][mc][pc][rc][qb]AW[kr][jq][oq][qq][cp][dp][jp][pp][ko][oo][jn][on][pm][pl][ql][rk][li][ni][qi][ph][rh][fg][qg][lf][mf][nf][of][rf][pe][qe][re][ed][id][kd][rd][ec][kc](;W[fn]C[Incorrect - This was the actual move played in the game!])(;W[jr]C[CORRECT];B[op]C[CORRECT];W[qo]C[CORRECT];B[ro]C[CORRECT];W[mr]C[CORRECT]))",
          category: "other",
          move_number: 27,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K3\\":[\\"K3\\",\\"H4\\",\\"J4\\",\\"E17\\"],\\"J2\\":[\\"J2\\",\\"O15\\",\\"S16\\"],\\"J3\\":[\\"J3\\",\\"O15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236156/i0sa0ekqfqei4mjvw0ex.png",
          suspended: false,
          createdAt: "2023-12-10T19:22:36.722000+00:00",
          updatedAt: "2023-12-10T19:22:36.722000+00:00",
        },
        {
          sgf_id: 59,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59467934]GN[GuillaumeCouty vs. HungYuk]PB[GuillaumeCouty]PW[HungYuk]BR[9k]WR[8k]TM[1200]OT[5x30 byo-yomi]RE[W+36.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[kq][nq][rq][kp][np][rp][lo][no][cn][ln][qn][qm][sm][rl][ck][kg][lg][mg][ng][og][cf][kf][ke][cd][pd][dc][mc][pc]AW[jq][oq][qq][cp][dp][jp][pp][ko][oo][jn][on][pm][pl][ql][rk][li][ni][fg][lf][mf][nf][pe][qe][ed][id][kd][ec](;W[of]C[Incorrect - This was the actual move played in the game!])(;W[ld]C[CORRECT];B[qg]C[CORRECT];W[md]C[CORRECT];B[rj]C[CORRECT]))",
          category: "other",
          move_number: 78,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K2\\":[\\"K2\\",\\"P4\\",\\"R5\\",\\"S5\\",\\"N2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236170/jlbqzfystymgph3hs501.png",
          suspended: false,
          createdAt: "2023-12-10T19:22:50.930000+00:00",
          updatedAt: "2023-12-10T19:22:50.930000+00:00",
        },
        {
          sgf_id: 59,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59467934]GN[GuillaumeCouty vs. HungYuk]PB[GuillaumeCouty]PW[HungYuk]BR[9k]WR[8k]TM[1200]OT[5x30 byo-yomi]RE[W+36.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[ks][jr][lr][kq][nq][rq][kp][np][qp][rp][lo][no][qo][cn][in][kn][ln][mn][pn][qn][im][jm][mm][qm][sm][kl][rl][ck][jk][lk][lj][ki][kg][lg][mg][ng][og][pg][cf][kf][pf][qf][ke][le][oe][cd][ld][pd][qd][dc][mc][pc][rc][qb]AW[ir][qr][rr][hq][jq][oq][qq][cp][dp][jp][pp][io][jo][ko][oo][po][fn][jn][on][km][lm][nm][pm][fl][ll][ml][pl][ql][mk][rk][mj][li][ni][qi][ph][rh][fg][qg][lf][mf][nf][of][rf][pe][qe][re][ed][id][kd][rd][ec][kc](;W[sq]C[Incorrect - This was the actual move played in the game!])(;W[rn]C[CORRECT];B[gb]C[CORRECT];W[fb]C[CORRECT];B[gd]C[CORRECT];W[ge]C[CORRECT])(;W[sk]C[CORRECT];B[gb]C[CORRECT];W[fb]C[CORRECT])(;W[so]C[CORRECT];B[gb]C[CORRECT];W[fb]C[CORRECT]))",
          category: "other",
          move_number: 110,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S6\\":[\\"S6\\",\\"G18\\",\\"F18\\",\\"G16\\",\\"G15\\"],\\"T9\\":[\\"T9\\",\\"G18\\",\\"F18\\"],\\"T5\\":[\\"T5\\",\\"G18\\",\\"F18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236191/xpkrm0zmxpsunet9tsqc.png",
          suspended: false,
          createdAt: "2023-12-10T19:23:12.265000+00:00",
          updatedAt: "2023-12-10T19:23:12.265000+00:00",
        },
        {
          sgf_id: 59,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59467934]GN[GuillaumeCouty vs. HungYuk]PB[GuillaumeCouty]PW[HungYuk]BR[9k]WR[8k]TM[1200]OT[5x30 byo-yomi]RE[W+36.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[ks][jr][lr][kq][nq][rq][kp][np][qp][rp][lo][no][cn][in][kn][ln][mn][pn][qn][im][jm][mm][qm][sm][kl][rl][ck][jk][lk][lj][ki][kg][lg][mg][ng][og][pg][cf][kf][pf][qf][ke][le][oe][cd][ld][pd][qd][dc][mc][pc][rc][qb]AW[ir][qr][rr][hq][jq][oq][qq][cp][dp][jp][pp][io][jo][ko][oo][po][fn][jn][on][km][lm][nm][pm][fl][ll][ml][pl][ql][mk][rk][mj][li][ni][qi][ph][rh][fg][qg][lf][mf][nf][of][rf][pe][qe][re][ed][id][kd][rd][ec][kc](;B[qo]C[Incorrect - This was the actual move played in the game!])(;B[rn]C[CORRECT];W[kj]C[CORRECT];B[ho]C[CORRECT];W[hp]C[CORRECT];B[go]C[CORRECT])(;B[ho]C[CORRECT];W[hp]C[CORRECT];B[rn]C[CORRECT];W[kj]C[CORRECT];B[go]C[CORRECT]))",
          category: "other",
          move_number: 109,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S6\\":[\\"S6\\",\\"L10\\",\\"H5\\",\\"H4\\",\\"G5\\"],\\"H5\\":[\\"H5\\",\\"H4\\",\\"S6\\",\\"L10\\",\\"G5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236200/sde9y0abikithwnged1d.png",
          suspended: false,
          createdAt: "2023-12-10T19:23:21.141000+00:00",
          updatedAt: "2023-12-10T19:23:21.141000+00:00",
        },
        {
          sgf_id: 59,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59467934]GN[GuillaumeCouty vs. HungYuk]PB[GuillaumeCouty]PW[HungYuk]BR[9k]WR[8k]TM[1200]OT[5x30 byo-yomi]RE[W+36.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[ks][jr][lr][kq][nq][rq][kp][np][qp][rp][eo][go][lo][no][qo][an][bn][cn][dn][in][kn][ln][mn][pn][qn][rn][cm][hm][im][jm][mm][qm][sm][bl][kl][rl][bk][ck][dk][ik][jk][lk][cj][gj][hj][lj][ci][fi][hi][ki][ch][hh][lh][cg][dg][ig][kg][lg][mg][ng][og][pg][cf][if][kf][pf][qf][ce][ke][le][oe][cd][ld][pd][qd][cc][dc][mc][pc][rc][cb][mb][qb]AW[ir][qr][rr][hq][jq][oq][qq][sq][cp][dp][jp][pp][ao][bo][co][do][io][jo][ko][oo][po][en][fn][gn][hn][jn][on][dm][km][lm][nm][pm][cl][dl][fl][ll][ml][pl][ql][ek][gk][hk][mk][rk][dj][fj][mj][di][gi][li][ni][qi][dh][gh][ph][rh][eg][fg][hg][qg][df][hf][lf][mf][nf][of][rf][de][ie][pe][qe][re][dd][ed][id][kd][rd][ec][kc][db][lb](;W[oh]C[Incorrect - This was the actual move played in the game!])(;W[sk]C[CORRECT];B[sl]C[CORRECT];W[eb]C[CORRECT];B[eq]C[CORRECT]))",
          category: "other",
          move_number: 168,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"T9\\":[\\"T9\\",\\"T8\\",\\"E18\\",\\"E3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236222/terltdbrrv0tapxgsl77.png",
          suspended: false,
          createdAt: "2023-12-10T19:23:42.530000+00:00",
          updatedAt: "2023-12-10T19:23:42.530000+00:00",
        },
        {
          sgf_id: 105,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-03-17]PC[OGS: https://online-go.com/game/42076483]GN[Friendly Match]PB[olympia.anacodam]PW[misakikou]BR[13k]WR[11k]TM[2419200]OT[604800 fischer]RE[W+T]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[gr][ir][jr][gq][jq][nq][dp][fp][jp][np][eo][lo][oo][fn][gn][on][fm][gl][hl][kl][ll][gk][jk][dj][fj][ij][ei][hi][ii][eh][kh][lg][qg][df][lf][pf][ce][le][dd][md][lc][oc][kb]AW[hq][iq][gp][ip][kp][mp][op][pp][fo][go][jo][po][hn][gm][hm][jm][km][qm][il][jl][hk][ik][cj][gj][hj][pj][di][dh][cg][hg][kg][cf][kf][qf][ke][qe][kd][ld][pd][gc][jc][pc](;W[ko]C[Incorrect - This was the actual move played in the game!])(;W[dk]C[CORRECT];B[hr]C[CORRECT];W[gi]C[CORRECT];B[ej]C[CORRECT])(;W[fq]C[CORRECT];B[ep]C[CORRECT];W[hr]C[CORRECT];B[fr]C[CORRECT];W[dk]C[CORRECT]))",
          category: "other",
          move_number: 86,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D9\\":[\\"D9\\",\\"H2\\",\\"G11\\",\\"E10\\"],\\"F3\\":[\\"F3\\",\\"E4\\",\\"H2\\",\\"F2\\",\\"D9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236271/vmmo9pithu1pi4hdewka.png",
          suspended: false,
          createdAt: "2023-12-10T19:24:32.285000+00:00",
          updatedAt: "2023-12-10T19:24:32.285000+00:00",
        },
        {
          sgf_id: 105,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-03-17]PC[OGS: https://online-go.com/game/42076483]GN[Friendly Match]PB[olympia.anacodam]PW[misakikou]BR[13k]WR[11k]TM[2419200]OT[604800 fischer]RE[W+T]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[gr][hr][ir][jr][eq][gq][jq][lq][nq][bp][dp][jp][lp][np][eo][lo][oo][en][fn][gn][on][cm][fm][cl][gl][hl][kl][ll][ek][fk][gk][jk][fj][ij][ei][fi][gi][hi][ii][eh][kh][lg][qg][df][lf][pf][ce][le][dd][md][lc][oc][kb]AW[kr][cq][fq][hq][iq][kq][ep][gp][ip][kp][mp][op][pp][fo][go][io][jo][ko][po][hn][gm][hm][jm][km][qm][dl][el][fl][il][jl][ck][dk][hk][ik][cj][ej][gj][hj][pj][di][dh][cg][hg][kg][cf][kf][qf][ke][qe][kd][ld][pd][gc][jc][pc](;B[dq]C[Incorrect - This was the actual move played in the game!])(;B[fr]C[CORRECT];W[or]C[CORRECT];B[bf]C[CORRECT];W[bg]C[CORRECT]))",
          category: "other",
          move_number: 111,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F2\\":[\\"F2\\",\\"P2\\",\\"B14\\",\\"B13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236308/zzv1ujlpch8as7faru0o.png",
          suspended: false,
          createdAt: "2023-12-10T19:25:08.736000+00:00",
          updatedAt: "2023-12-10T19:25:08.736000+00:00",
        },
        {
          sgf_id: 37,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[5x30 byo-yomi]PW[goperaw]PB[winkgs]WR[3d]BR[2d]DT[2023-12-01]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[nr][eq][nq][ep][lp][np][pp][do][ko][oo][po][cn][dn][nn][pn][mm][pm][ll][ml][cj][df][pd]AW[or][cq][oq][qq][dp][kp][op][qp][co][lo][mo][no][qo][bn][ln][on][bm][lm][om][ol][fd][dc](;B[lq]C[Incorrect - This was the actual move played in the game!])(;B[pl]C[CORRECT];W[kq]C[CORRECT];B[ok]C[CORRECT];W[oj]C[CORRECT];B[pf]C[CORRECT];W[nk]C[CORRECT]))",
          category: "other",
          move_number: 45,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q8\\":[\\"Q8\\",\\"L3\\",\\"P9\\",\\"P10\\",\\"Q14\\",\\"O9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236340/ertbef2tlpuj76gaenzs.png",
          suspended: false,
          createdAt: "2023-12-10T19:25:40.524000+00:00",
          updatedAt: "2023-12-10T19:25:40.524000+00:00",
        },
        {
          sgf_id: 37,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[5x30 byo-yomi]PW[goperaw]PB[winkgs]WR[3d]BR[2d]DT[2023-12-01]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[gr][hr][ir][nr][eq][jq][kq][lq][nq][ep][gp][lp][mp][np][pp][do][fo][ho][oo][po][ro][cn][dn][gn][jn][mn][nn][pn][qn][rn][jm][km][mm][pm][il][ll][ml][hk][ik][rk][cj][fj][oj][pj][rj][ji][mi][oi][qi][si][jh][mh][ph][rh][ig][kg][lg][pg][df][gf][de][ge][le][ne][cd][ld][nd][pd][qd][cc][qc][db]AW[or][cq][gq][hq][iq][oq][qq][dp][hp][jp][kp][op][qp][rp][co][eo][io][jo][ko][lo][mo][no][qo][bn][en][fn][hn][in][kn][ln][on][bm][gm][im][lm][om][qm][rm][fl][hl][ol][pl][rl][qk][qj][hh][ih][nh][qh][jg][mg][qg][hf][jf][kf][lf][nf][be][ce][ke][me][dd][fd][md][dc][hc][jc][mc][nc][oc][pc][cb](;B[fc]C[Incorrect - This was the actual move played in the game!])(;B[bb]C[CORRECT];W[bc]C[CORRECT];B[ca]C[CORRECT];W[bd]C[CORRECT];B[cb]C[CORRECT];W[eb]C[CORRECT];B[cf]C[CORRECT];W[bf]C[CORRECT]))",
          category: "other",
          move_number: 155,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B18\\":[\\"B18\\",\\"B17\\",\\"C19\\",\\"B16\\",\\"C18\\",\\"E18\\",\\"C14\\",\\"B14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236377/paogokp1wxzefs5mingz.png",
          suspended: false,
          createdAt: "2023-12-10T19:26:18.036000+00:00",
          updatedAt: "2023-12-10T19:26:18.036000+00:00",
        },
        {
          sgf_id: 37,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[5x30 byo-yomi]PW[goperaw]PB[winkgs]WR[3d]BR[2d]DT[2023-12-01]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[gr][hr][ir][nr][eq][jq][kq][lq][nq][ep][gp][lp][np][pp][do][fo][ho][oo][po][ro][cn][dn][gn][jn][nn][pn][qn][rn][jm][km][mm][pm][il][ll][ml][hk][ik][cj][df][pd]AW[or][cq][gq][hq][iq][oq][qq][dp][jp][kp][op][qp][rp][co][eo][io][jo][lo][mo][no][qo][bn][en][fn][in][kn][ln][on][bm][gm][im][lm][om][qm][rm][hl][ol][pl][fd][dc](;B[ip]C[Incorrect - This was the actual move played in the game!])(;B[gl]C[CORRECT];W[hm]C[CORRECT];B[fm]C[CORRECT];W[fl]C[CORRECT];B[em]C[CORRECT];W[gk]C[CORRECT]))",
          category: "other",
          move_number: 182,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C13\\":[\\"C13\\",\\"C12\\",\\"D13\\",\\"B13\\"],\\"C12\\":[\\"C12\\",\\"C13\\",\\"B13\\",\\"B12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236399/gi61odroeiky9hfpi7kt.png",
          suspended: false,
          createdAt: "2023-12-10T19:26:40.428000+00:00",
          updatedAt: "2023-12-10T19:26:40.428000+00:00",
        },
        {
          sgf_id: 37,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[5x30 byo-yomi]PW[goperaw]PB[winkgs]WR[3d]BR[2d]DT[2023-12-01]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[gr][hr][ir][nr][eq][jq][kq][lq][nq][ep][gp][lp][mp][np][pp][do][fo][ho][oo][po][ro][cn][dn][gn][jn][mn][nn][pn][qn][rn][jm][km][mm][pm][il][ll][ml][hk][ik][rk][cj][fj][oj][pj][rj][oi][qi][si][ph][rh][kg][lg][pg][df][le][ne][ld][nd][pd][qd][qc]AW[or][cq][gq][hq][iq][oq][qq][dp][hp][jp][kp][op][qp][rp][co][eo][io][jo][ko][lo][mo][no][qo][bn][en][fn][hn][in][kn][ln][on][bm][gm][im][lm][om][qm][rm][fl][hl][ol][pl][rl][qk][qj][qh][mg][qg][kf][lf][nf][ke][me][fd][md][dc][jc][mc][nc][oc][pc](;B[mh]C[Incorrect - This was the actual move played in the game!])(;B[cc]C[CORRECT];W[cd]C[CORRECT];B[dd]C[CORRECT];W[de]C[CORRECT];B[ed]C[CORRECT];W[ee]C[CORRECT])(;B[cd]C[CORRECT];W[cc]C[CORRECT];B[bc]C[CORRECT];W[bb]C[CORRECT])(;B[os]C[CORRECT];W[pq]C[CORRECT];B[cd]C[CORRECT])(;B[ge]C[CORRECT];W[ef]C[CORRECT])(;B[bd]C[CORRECT]))",
          category: "other",
          move_number: 127,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N13\\":[\\"N13\\",\\"S11\\",\\"P1\\",\\"Q3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236444/yvillznlet2goun9ssk0.png",
          suspended: false,
          createdAt: "2023-12-10T19:27:24.843000+00:00",
          updatedAt: "2023-12-10T19:27:24.843000+00:00",
        },
        {
          sgf_id: 37,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[5x30 byo-yomi]PW[goperaw]PB[winkgs]WR[3d]BR[2d]DT[2023-12-01]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[cr][dr][gr][hr][ir][nr][eq][jq][kq][lq][nq][bp][ep][gp][lp][mp][np][pp][sp][do][fo][ho][oo][po][ro][cn][dn][gn][jn][mn][nn][pn][qn][rn][sn][em][jm][km][mm][pm][il][ll][ml][hk][ik][rk][cj][fj][oj][pj][rj][ji][mi][oi][qi][si][jh][mh][ph][rh][gg][kg][lg][pg][df][gf][de][fe][ge][ie][le][ne][cd][ed][gd][id][ld][nd][pd][qd][cc][fc][qc][db]AW[bs][br][or][cq][gq][hq][iq][oq][qq][sq][cp][dp][hp][jp][kp][op][qp][rp][co][eo][io][jo][ko][lo][mo][no][qo][bn][en][fn][hn][in][kn][ln][on][bm][fm][gm][im][lm][om][qm][rm][sm][fl][hl][ol][pl][rl][qk][qj][hh][ih][nh][qh][hg][jg][mg][qg][hf][if][jf][kf][lf][nf][be][ce][ke][me][dd][md][dc][ec][gc][hc][ic][jc][mc][nc][oc][pc][cb][eb][fb](;B[dl]C[Incorrect - This was the actual move played in the game!])(;B[bg]C[CORRECT];W[dk]C[CORRECT];B[bb]C[CORRECT];W[da]C[CORRECT])(;B[cf]C[CORRECT];W[bf]C[CORRECT];B[bg]C[CORRECT];W[bh]C[CORRECT]))",
          category: "other",
          move_number: 146,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G13\\":[\\"G13\\",\\"C16\\",\\"C17\\"],\\"D11\\":[\\"D11\\",\\"C11\\",\\"G13\\"],\\"C12\\":[\\"C12\\",\\"G12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236460/lfvcgv8d0f6ukxkoukoi.png",
          suspended: false,
          createdAt: "2023-12-10T19:27:40.979000+00:00",
          updatedAt: "2023-12-10T19:27:40.979000+00:00",
        },
        {
          sgf_id: 37,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[5x30 byo-yomi]PW[goperaw]PB[winkgs]WR[3d]BR[2d]DT[2023-12-01]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[nr][eq][kq][lq][nq][ep][lp][np][pp][do][ko][oo][po][cn][dn][nn][pn][mm][pm][ll][ml][cj][df][pd]AW[or][cq][oq][qq][dp][jp][kp][op][qp][co][jo][lo][mo][no][qo][bn][ln][on][bm][lm][om][ol][fd][dc](;B[jq]C[Incorrect - This was the actual move played in the game!])(;B[pl]C[CORRECT];W[jq]C[CORRECT];B[jr]C[CORRECT];W[ok]C[CORRECT];B[pk]C[CORRECT];W[ir]C[CORRECT];B[js]C[CORRECT];W[oj]C[CORRECT];B[pj]C[CORRECT]))",
          category: "other",
          move_number: 49,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q8\\":[\\"Q8\\",\\"K3\\",\\"K2\\",\\"P9\\",\\"Q9\\",\\"J2\\",\\"K1\\",\\"P10\\",\\"Q10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236501/bka6yiaattawmnpzejv7.png",
          suspended: false,
          createdAt: "2023-12-10T19:28:22.348000+00:00",
          updatedAt: "2023-12-10T19:28:22.348000+00:00",
        },
        {
          sgf_id: 37,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[5x30 byo-yomi]PW[goperaw]PB[winkgs]WR[3d]BR[2d]DT[2023-12-01]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[W]AB[cr][dr][gr][hr][ir][nr][eq][jq][kq][lq][nq][bp][ep][gp][lp][mp][np][pp][sp][do][fo][ho][oo][po][ro][cn][dn][gn][jn][mn][nn][pn][qn][rn][sn][em][jm][km][mm][pm][dl][il][ll][ml][hk][ik][rk][cj][fj][oj][pj][rj][ji][mi][oi][qi][si][jh][mh][ph][rh][gg][kg][lg][pg][df][gf][de][fe][ge][ie][le][ne][cd][ed][gd][id][ld][nd][pd][qd][cc][fc][qc][db]AW[bs][br][or][cq][gq][hq][iq][oq][qq][sq][cp][dp][hp][jp][kp][op][qp][rp][co][eo][io][jo][ko][lo][mo][no][qo][bn][en][fn][hn][in][kn][ln][on][bm][fm][gm][im][lm][om][qm][rm][sm][fl][hl][ol][pl][rl][qk][qj][hh][ih][nh][qh][hg][jg][mg][qg][hf][if][jf][kf][lf][nf][be][ce][ke][me][dd][md][dc][ec][gc][hc][ic][jc][mc][nc][oc][pc][cb][eb][fb](;W[dm]C[Incorrect - This was the actual move played in the game!])(;W[cg]C[CORRECT];B[ch]C[CORRECT];W[dg]C[CORRECT];B[bg]C[CORRECT])(;W[ch]C[CORRECT];B[cg]C[CORRECT];W[bg]C[CORRECT];B[bh]C[CORRECT]))",
          category: "other",
          move_number: 181,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B13\\":[\\"B13\\",\\"D9\\",\\"B18\\",\\"D19\\"],\\"C14\\":[\\"C14\\",\\"B14\\",\\"B13\\",\\"B12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236540/mt5ztlgx1r6w6phgd6kf.png",
          suspended: false,
          createdAt: "2023-12-10T19:29:00.493000+00:00",
          updatedAt: "2023-12-10T19:29:00.493000+00:00",
        },
        {
          sgf_id: 148,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[gzhtt]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[dp][pp][pi][qi][ri][ph][qg][qf][le][me][ne][jd][ld][od][pd][qd][kc][rc][kb]AW[mh][oh][qh][rh][pg][of][oe][cd][md][nd][fc][ic][lc][oc][pc][qc][lb][nb][rb](;B[rd]C[Incorrect - This was the actual move played in the game!])(;B[nj]C[CORRECT];W[mj]C[CORRECT];B[mk]C[CORRECT])(;B[ee]C[CORRECT];W[ed]C[CORRECT];B[gd]C[CORRECT])(;B[ng]C[CORRECT];W[mg]C[CORRECT];B[nf]C[CORRECT])(;B[gd]C[CORRECT];W[gc]C[CORRECT];B[kh]C[CORRECT])(;B[he]C[CORRECT];W[oi]C[CORRECT];B[ng]C[CORRECT]))",
          category: "other",
          move_number: 155,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N13\\":[\\"N13\\",\\"O13\\",\\"M12\\",\\"M13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236567/xj98q0jvx41pca0pw1hq.png",
          suspended: false,
          createdAt: "2023-12-10T19:29:27.636000+00:00",
          updatedAt: "2023-12-10T19:29:27.636000+00:00",
        },
        {
          sgf_id: 148,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[gzhtt]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[W]AB[dp][pp][pi][qi][ri][ph][qg][qf][le][me][ne][jd][ld][od][pd][qd][rd][kc][rc][kb]AW[mh][oh][qh][rh][pg][of][oe][cd][md][nd][fc][ic][lc][oc][pc][qc][lb][nb][rb](;W[jc]C[Incorrect - This was the actual move played in the game!])(;W[oi]C[CORRECT];B[ng]C[CORRECT];W[mg]C[CORRECT];B[nf]C[CORRECT])(;W[lg]C[CORRECT];B[hd]C[CORRECT];W[if]C[CORRECT];B[hc]C[CORRECT])(;W[jh]C[CORRECT];B[ng]C[CORRECT];W[nf]C[CORRECT])(;W[qq]C[CORRECT];B[qp]C[CORRECT];W[pq]C[CORRECT])(;W[jg]C[CORRECT];B[mg]C[CORRECT])(;W[kh]C[CORRECT];B[ng]C[CORRECT]))",
          category: "other",
          move_number: 95,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E18\\":[\\"E18\\",\\"J16\\",\\"K15\\",\\"B17\\"],\\"F18\\":[\\"F18\\",\\"G18\\",\\"E18\\",\\"J16\\",\\"K15\\"],\\"M19\\":[\\"M19\\",\\"N18\\",\\"E18\\",\\"J16\\",\\"K15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236579/jv24kcgt91ybscid2vpp.png",
          suspended: false,
          createdAt: "2023-12-10T19:29:40.050000+00:00",
          updatedAt: "2023-12-10T19:29:40.050000+00:00",
        },
        {
          sgf_id: 148,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[gzhtt]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[fs][er][rr][dq][fq][kq][rq][bp][dp][np][pp][qp][bo][co][cn][om][pm][ol][ql][ck][qk][rk][pi][qi][ri][ph][fg][qg][df][ef][qf][de][le][me][ne][ed][jd][ld][od][pd][qd][rd][ec][kc][rc][cb][kb]AW[cs][ds][es][br][dr][bq][cq][hq][sq][cp][rp][ho][qo][on][pn][qn][rn][qm][sm][pl][rl][ch][mh][oh][qh][rh][dg][hg][pg][cf][gf][of][ce][fe][oe][cd][fd][md][nd][fc][ic][jc][lc][oc][pc][qc][lb][nb][rb](;B[fh]C[Incorrect - This was the actual move played in the game!])(;B[kh]C[CORRECT];W[eb]C[CORRECT];B[fi]C[CORRECT];W[hi]C[CORRECT])(;B[la]C[CORRECT];W[mb]C[CORRECT];B[kh]C[CORRECT];W[eb]C[CORRECT];B[fi]C[CORRECT];W[kg]C[CORRECT]))",
          category: "other",
          move_number: 40,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P11\\":[\\"P11\\",\\"O13\\",\\"N13\\",\\"O14\\"],\\"M13\\":[\\"M13\\",\\"H16\\",\\"J14\\",\\"H17\\"],\\"K12\\":[\\"K12\\",\\"O13\\",\\"O14\\"],\\"R3\\":[\\"R3\\",\\"R4\\",\\"Q3\\"],\\"K13\\":[\\"K13\\",\\"N13\\"],\\"L12\\":[\\"L12\\",\\"O13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236619/xpqowcx6hwbwirul29uh.png",
          suspended: false,
          createdAt: "2023-12-10T19:30:20.085000+00:00",
          updatedAt: "2023-12-10T19:30:20.085000+00:00",
        },
        {
          sgf_id: 148,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[gzhtt]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[W]AB[fs][er][rr][dq][fq][kq][rq][bp][dp][np][pp][qp][bo][co][cn][bm][om][pm][bl][dl][gl][ol][ql][ck][dk][qk][rk][cj][ej][fj][gj][ci][pi][qi][ri][fh][ph][fg][qg][df][ef][qf][de][je][le][me][ne][ed][jd][ld][od][pd][qd][rd][bc][ec][hc][kc][rc][cb][ib][jb][kb]AW[cs][ds][es][br][dr][bq][cq][hq][sq][cp][rp][ho][qo][on][pn][qn][rn][qm][sm][cl][pl][rl][bk][ek][bj][dj][bi][di][ei][fi][gi][ch][mh][oh][qh][rh][dg][hg][kg][pg][cf][gf][kf][of][ce][fe][oe][cd][fd][hd][id][md][nd][fc][ic][jc][lc][oc][pc][qc][hb][lb][nb][rb](;W[bd]C[Incorrect - This was the actual move played in the game!])(;W[db]C[CORRECT];B[gb]C[CORRECT];W[gc]C[CORRECT];B[ha]C[CORRECT];W[fb]C[CORRECT]))",
          category: "other",
          move_number: 130,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D18\\":[\\"D18\\",\\"G18\\",\\"G17\\",\\"H19\\",\\"F18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236646/a6ryh2cw7si3wmsaoa3a.png",
          suspended: false,
          createdAt: "2023-12-10T19:30:47.328000+00:00",
          updatedAt: "2023-12-10T19:30:47.328000+00:00",
        },
        {
          sgf_id: 148,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[gzhtt]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[dp][pp][qp][pm][ql][pi][qi][ri][ph][qg][qf][le][me][ne][jd][ld][od][pd][qd][rd][kc][rc][kb]AW[qo][qm][pl][mh][oh][qh][rh][pg][of][oe][cd][md][nd][fc][ic][jc][lc][oc][pc][qc][lb][nb][rb](;B[qk]C[Incorrect - This was the actual move played in the game!])(;B[om]C[CORRECT];W[id]C[CORRECT];B[je]C[CORRECT])(;B[id]C[CORRECT];W[om]C[CORRECT];B[pn]C[CORRECT];W[po]C[CORRECT])(;B[ol]C[CORRECT];W[pk]C[CORRECT];B[qn]C[CORRECT];W[id]C[CORRECT])(;B[la]C[CORRECT];W[mb]C[CORRECT];B[id]C[CORRECT];W[qk]C[CORRECT])(;B[mc]C[CORRECT];W[nc]C[CORRECT];B[id]C[CORRECT]))",
          category: "other",
          move_number: 39,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O10\\":[\\"O10\\",\\"N10\\",\\"N9\\"],\\"E15\\":[\\"E15\\",\\"E16\\",\\"G16\\"],\\"O13\\":[\\"O13\\",\\"N13\\",\\"O14\\"],\\"G16\\":[\\"G16\\",\\"G17\\",\\"L12\\"],\\"H15\\":[\\"H15\\",\\"P11\\",\\"O13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236669/hvqbziab73hbrtlmvuzo.png",
          suspended: false,
          createdAt: "2023-12-10T19:31:09.550000+00:00",
          updatedAt: "2023-12-10T19:31:09.550000+00:00",
        },
        {
          sgf_id: 148,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-13]PB[gzhtt]PW[jonwick01]BR[6\u7ea7]WR[6\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[fs][hs][er][fr][gr][ir][lr][rr][dq][fq][gq][iq][kq][rq][bp][dp][ip][kp][np][pp][qp][bo][co][do][jo][cn][kn][bm][jm][om][pm][bl][dl][el][gl][hl][il][ol][ql][ck][dk][qk][rk][cj][ej][fj][gj][ci][pi][qi][ri][fh][ph][fg][qg][df][ef][qf][de][je][le][me][ne][ed][jd][ld][od][pd][qd][rd][bc][ec][kc][rc][ab][cb][eb][gb][ib][jb][kb][ca][ea]AW[cs][ds][es][is][ks][br][dr][hr][jr][kr][bq][cq][hq][sq][cp][fp][gp][hp][rp][eo][ho][io][qo][in][jn][on][pn][qn][rn][fm][hm][im][qm][sm][cl][pl][rl][bk][ek][bj][dj][bi][di][ei][fi][gi][ch][mh][oh][qh][rh][dg][hg][kg][pg][cf][gf][kf][of][ce][fe][oe][bd][cd][fd][hd][id][md][nd][dc][fc][gc][ic][jc][lc][oc][pc][qc][db][fb][hb][lb][nb][rb][ba](;B[eq]C[Incorrect - This was the actual move played in the game!])(;B[gn]C[CORRECT];W[lq]C[CORRECT];B[lp]C[CORRECT];W[mq]C[CORRECT];B[mp]C[CORRECT]))",
          category: "other",
          move_number: 173,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G6\\":[\\"G6\\",\\"M3\\",\\"M4\\",\\"N3\\",\\"N4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236697/vm4qggoytbcukpdh2wou.png",
          suspended: false,
          createdAt: "2023-12-10T19:31:38.093000+00:00",
          updatedAt: "2023-12-10T19:31:38.093000+00:00",
        },
        {
          sgf_id: 112,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-10-20]PC[OGS: https://online-go.com/game/27708384]GN[Friendly Match]PB[badkarma2020]PW[Dzhelilov]BR[4k]WR[6k]TM[0]OT[8 simple]RE[B+R]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[bg][gg][af][cf][be][fe][he][cd][gd][hd][cc][hc]AW[ce][de][ee][ge][bd][dd][fd][bc][dc][gc][gb](;B[ff]C[Incorrect - This was the actual move played in the game!])(;B[eg]C[CORRECT];W[dg]C[CORRECT];B[df]C[CORRECT];W[fg]C[CORRECT];B[ff]C[CORRECT];W[ef]C[CORRECT];B[fh]C[CORRECT];W[cg]C[CORRECT])(;B[dg]C[CORRECT];W[ff]C[CORRECT];B[fg]C[CORRECT];W[gf]C[CORRECT];B[hf]C[CORRECT])(;B[cb]C[CORRECT];W[bb]C[CORRECT];B[ff]C[CORRECT]))",
          category: "other",
          move_number: 25,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"E3\\":[\\"E3\\",\\"D3\\",\\"D4\\",\\"F3\\",\\"F4\\",\\"E4\\",\\"F2\\",\\"C3\\"],\\"D3\\":[\\"D3\\",\\"F4\\",\\"F3\\",\\"G4\\",\\"H4\\"],\\"C8\\":[\\"C8\\",\\"B8\\",\\"F4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236716/j7orfw1byjpvduklwwq1.png",
          suspended: false,
          createdAt: "2023-12-10T19:31:56.977000+00:00",
          updatedAt: "2023-12-10T19:31:56.977000+00:00",
        },
        {
          sgf_id: 112,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-10-20]PC[OGS: https://online-go.com/game/27708384]GN[Friendly Match]PB[badkarma2020]PW[Dzhelilov]BR[4k]WR[6k]TM[0]OT[8 simple]RE[B+R]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[dh][hh][bg][dg][gg][af][bf][cf][ef][ff][gf][be][fe][he][cd][gd][hd][id][cc][hc][cb]AW[eh][gh][eg][df][ae][ce][de][ee][bd][dd][fd][ac][bc][dc][gc][ic][bb][gb][hb][ib](;B[ba]C[Incorrect - This was the actual move played in the game!])(;B[db]C[CORRECT];W[ec]C[CORRECT];B[ba]C[CORRECT];W[eb]C[CORRECT];B[ad]C[CORRECT];W[ch]C[CORRECT];B[cg]C[CORRECT];W[ae]C[CORRECT];B[ca]C[CORRECT]))",
          category: "other",
          move_number: 45,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D8\\":[\\"D8\\",\\"E7\\",\\"B9\\",\\"E8\\",\\"A6\\",\\"C2\\",\\"C3\\",\\"A5\\",\\"C9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236767/y2jsw21weuylg1ylxjsy.png",
          suspended: false,
          createdAt: "2023-12-10T19:32:47.614000+00:00",
          updatedAt: "2023-12-10T19:32:47.614000+00:00",
        },
        {
          sgf_id: 112,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-10-20]PC[OGS: https://online-go.com/game/27708384]GN[Friendly Match]PB[badkarma2020]PW[Dzhelilov]BR[4k]WR[6k]TM[0]OT[8 simple]RE[B+R]SZ[9]KM[5.5]RU[Japanese]PL[W]AB[bg][gg][af][cf][ff][be][fe][he][cd][gd][hd][cc][hc]AW[ce][de][ee][ge][bd][dd][fd][bc][dc][gc][gb](;W[eh]C[Incorrect - This was the actual move played in the game!])(;W[dg]C[CORRECT];B[df]C[CORRECT];W[ef]C[CORRECT];B[eg]C[CORRECT];W[eh]C[CORRECT];B[fg]C[CORRECT];W[cg]C[CORRECT];B[ch]C[CORRECT]))",
          category: "other",
          move_number: 26,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D3\\":[\\"D3\\",\\"D4\\",\\"E4\\",\\"E3\\",\\"E2\\",\\"F3\\",\\"C3\\",\\"C2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236777/fntcyagy1bplobiq3vj1.png",
          suspended: false,
          createdAt: "2023-12-10T19:32:58.339000+00:00",
          updatedAt: "2023-12-10T19:32:58.339000+00:00",
        },
        {
          sgf_id: 149,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[gopro]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[cr][dr][cq][hq][bp][cp][gp][co][do][go][en][fn][el][dd][od][qd][pc][qc]AW[er][dq][fq][gq][dp][ep][fp][hp][qp][bo][eo][fo][an][cn][dn][bm][dk][pe][qe][pd](;B[gr]C[Incorrect - This was the actual move played in the game!])(;B[hr]C[CORRECT];W[gn]C[CORRECT];B[ho]C[CORRECT];W[gm]C[CORRECT];B[fl]C[CORRECT];W[ip]C[CORRECT];B[io]C[CORRECT]))",
          category: "other",
          move_number: 41,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H2\\":[\\"H2\\",\\"G6\\",\\"H5\\",\\"G7\\",\\"F8\\",\\"J4\\",\\"J5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236868/yl94f2srcfelp4336mma.png",
          suspended: false,
          createdAt: "2023-12-10T19:34:28.958000+00:00",
          updatedAt: "2023-12-10T19:34:28.958000+00:00",
        },
        {
          sgf_id: 149,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[gopro]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[W]AB[cr][dr][ir][cq][hq][iq][oq][bp][cp][gp][co][do][go][ho][io][en][fn][gm][el][dd][od][qd][pc][qc]AW[gs][er][fr][hr][dq][fq][gq][dp][ep][fp][hp][qp][bo][eo][fo][an][cn][dn][gn][hn][bm][hm][dk][pe][qe][pd](;W[po]C[Incorrect - This was the actual move played in the game!])(;W[gl]C[CORRECT];B[em]C[CORRECT];W[jn]C[CORRECT];B[in]C[CORRECT];W[im]C[CORRECT];B[jm]C[CORRECT];W[ek]C[CORRECT])(;W[jn]C[CORRECT];B[gl]C[CORRECT];W[jo]C[CORRECT];B[lq]C[CORRECT];W[ik]C[CORRECT];B[gj]C[CORRECT])(;W[jm]C[CORRECT];B[jn]C[CORRECT];W[gl]C[CORRECT];B[km]C[CORRECT]))",
          category: "other",
          move_number: 54,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G8\\":[\\"G8\\",\\"E7\\",\\"K6\\",\\"J6\\",\\"J7\\",\\"K7\\",\\"E9\\"],\\"K6\\":[\\"K6\\",\\"G8\\",\\"K5\\",\\"M3\\",\\"J9\\",\\"G10\\"],\\"K7\\":[\\"K7\\",\\"K6\\",\\"G8\\",\\"L7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236877/ih0iskvr2axy0xmklet3.png",
          suspended: false,
          createdAt: "2023-12-10T19:34:37.867000+00:00",
          updatedAt: "2023-12-10T19:34:37.867000+00:00",
        },
        {
          sgf_id: 149,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[gopro]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[cr][dr][ir][cq][hq][iq][oq][bp][cp][gp][co][do][go][ho][io][en][fn][gm][el][dd][od][qd][pc][qc]AW[gs][er][fr][hr][dq][fq][gq][dp][ep][fp][hp][qp][bo][eo][fo][po][an][cn][dn][gn][hn][bm][hm][dk][pe][qe][pd](;B[ar]C[Incorrect - This was the actual move played in the game!])(;B[gl]C[CORRECT];W[jn]C[CORRECT];B[jo]C[CORRECT];W[br]C[CORRECT];B[bs]C[CORRECT];W[ar]C[CORRECT])(;B[hl]C[CORRECT];W[jn]C[CORRECT];B[gl]C[CORRECT];W[jo]C[CORRECT];B[lq]C[CORRECT];W[jk]C[CORRECT];B[is]C[CORRECT])(;B[ek]C[CORRECT];W[dj]C[CORRECT];B[ej]C[CORRECT];W[di]C[CORRECT];B[ei]C[CORRECT])(;B[ej]C[CORRECT];W[gl]C[CORRECT];B[fl]C[CORRECT];W[ci]C[CORRECT])(;B[dm]C[CORRECT];W[cm]C[CORRECT];B[ek]C[CORRECT])(;B[fj]C[CORRECT];W[gl]C[CORRECT]))",
          category: "other",
          move_number: 55,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G8\\":[\\"G8\\",\\"K6\\",\\"K5\\",\\"B2\\",\\"B1\\",\\"A2\\"],\\"H8\\":[\\"H8\\",\\"K6\\",\\"G8\\",\\"K5\\",\\"M3\\",\\"K9\\",\\"J1\\"],\\"E9\\":[\\"E9\\",\\"D10\\",\\"E10\\",\\"D11\\",\\"E11\\"],\\"E10\\":[\\"E10\\",\\"G8\\",\\"F8\\",\\"C11\\"],\\"D7\\":[\\"D7\\",\\"C7\\",\\"E9\\"],\\"F10\\":[\\"F10\\",\\"G8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236888/pwynijff1pfyjirkiwxl.png",
          suspended: false,
          createdAt: "2023-12-10T19:34:49.061000+00:00",
          updatedAt: "2023-12-10T19:34:49.061000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[dp][pp][bf][rf][be][re][cd][kd][ld][nd][qd][cc][jc][mc][qc][cb][lb][pb][qb]AW[qg][qf][ce][de][oe][qe][dd][jd][pd][dc][kc][nc][oc][pc][db][mb][ob][na][oa](;W[kb]C[Incorrect - This was the actual move played in the game!])(;W[ic]C[CORRECT];B[jb]C[CORRECT];W[ib]C[CORRECT];B[je]C[CORRECT];W[id]C[CORRECT];B[cn]C[CORRECT];W[kf]C[CORRECT];B[lf]C[CORRECT]))",
          category: "other",
          move_number: 140,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E2\\":[\\"E2\\",\\"O6\\",\\"C3\\"],\\"O7\\":[\\"O7\\",\\"J3\\",\\"R6\\"],\\"J3\\":[\\"J3\\",\\"O7\\",\\"O6\\"],\\"D3\\":[\\"D3\\",\\"E3\\",\\"O7\\"],\\"P6\\":[\\"P6\\",\\"O7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236952/up3paebujx1zczyotxaj.png",
          suspended: false,
          createdAt: "2023-12-10T19:35:52.921000+00:00",
          updatedAt: "2023-12-10T19:35:52.921000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[dp][pp][bf][rf][be][ie][re][cd][id][kd][ld][nd][qd][cc][jc][mc][qc][cb][jb][lb][pb][qb]AW[qg][qf][ce][de][je][oe][qe][dd][jd][pd][dc][kc][nc][oc][pc][db][kb][mb][ob][la][na][oa](;W[ja]C[Incorrect - This was the actual move played in the game!])(;W[jf]C[CORRECT];B[if]C[CORRECT];W[ic]C[CORRECT];B[lc]C[CORRECT];W[ka]C[CORRECT]))",
          category: "other",
          move_number: 46,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K14\\":[\\"K14\\",\\"J14\\",\\"J17\\",\\"M17\\",\\"L19\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236961/wq1ayjs5ufs3tik0ds0j.png",
          suspended: false,
          createdAt: "2023-12-10T19:36:02.232000+00:00",
          updatedAt: "2023-12-10T19:36:02.232000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[dp][pp][bf][rf][be][ie][re][cd][id][kd][ld][nd][qd][cc][jc][lc][mc][qc][cb][jb][lb][pb][qb][ia]AW[qg][qf][ce][de][je][oe][qe][dd][jd][pd][dc][kc][nc][oc][pc][db][kb][mb][ob][ja][ka][la][na][oa](;W[ib]C[Incorrect - This was the actual move played in the game!])(;W[ma]C[CORRECT];B[jf]C[CORRECT];W[ib]C[CORRECT];B[ic]C[CORRECT];W[hb]C[CORRECT];B[gc]C[CORRECT];W[hc]C[CORRECT]))",
          category: "other",
          move_number: 60,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D13\\":[\\"D13\\",\\"D11\\",\\"E12\\",\\"F10\\"],\\"C13\\":[\\"C13\\",\\"E12\\",\\"C14\\",\\"B13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702236986/zsrqlhu8db5aapiahbpb.png",
          suspended: false,
          createdAt: "2023-12-10T19:36:27.105000+00:00",
          updatedAt: "2023-12-10T19:36:27.105000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[dp][pp][hh][ih][fg][kg][bf][gf][hf][lf][rf][be][ge][ie][ke][re][cd][fd][id][kd][ld][nd][qd][cc][ic][jc][lc][mc][qc][cb][jb][lb][pb][qb][ia][ka]AW[gg][hg][ig][qg][if][jf][qf][ce][de][he][je][le][me][ne][oe][qe][dd][gd][hd][jd][md][pd][dc][nc][oc][pc][db][ib][mb][ob][la][na][oa](;B[gc]C[Incorrect - This was the actual move played in the game!])(;B[fh]C[CORRECT];W[cj]C[CORRECT];B[ch]C[CORRECT]))",
          category: "other",
          move_number: 138,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O7\\":[\\"O7\\",\\"N8\\",\\"Q6\\",\\"M12\\"],\\"E2\\":[\\"E2\\",\\"M10\\",\\"O7\\"],\\"D3\\":[\\"D3\\",\\"E3\\"],\\"J3\\":[\\"J3\\",\\"M10\\",\\"O7\\"],\\"J5\\":[\\"J5\\",\\"H6\\",\\"O7\\",\\"N8\\"],\\"P6\\":[\\"P6\\",\\"O7\\"],\\"J4\\":[\\"J4\\",\\"G3\\"],\\"H3\\":[\\"H3\\",\\"O7\\"],\\"P7\\":[\\"P7\\",\\"K5\\"],\\"Q6\\":[\\"Q6\\",\\"O6\\"],\\"Q5\\":[\\"Q5\\",\\"O7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237014/soun7riqa6059nv65w2e.png",
          suspended: false,
          createdAt: "2023-12-10T19:36:54.601000+00:00",
          updatedAt: "2023-12-10T19:36:54.601000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[dp][pp][fg][kg][bf][lf][rf][be][ie][ke][re][cd][id][kd][ld][nd][qd][cc][jc][lc][mc][qc][cb][jb][lb][pb][qb][ia][ma]AW[qg][qf][ce][de][je][le][me][ne][oe][qe][dd][jd][md][pd][dc][nc][oc][pc][db][ib][mb][ob][na][oa](;W[la]C[Incorrect - This was the actual move played in the game!])(;W[dg]C[CORRECT];B[di]C[CORRECT];W[eh]C[CORRECT];B[fj]C[CORRECT])(;W[cg]C[CORRECT];B[eh]C[CORRECT];W[cf]C[CORRECT];B[bg]C[CORRECT]))",
          category: "other",
          move_number: 40,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J17\\":[\\"J17\\",\\"K18\\",\\"J18\\",\\"K15\\",\\"J16\\",\\"C6\\",\\"L14\\",\\"M14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237029/tdsdm5ig8leoqn0y77wk.png",
          suspended: false,
          createdAt: "2023-12-10T19:37:10.023000+00:00",
          updatedAt: "2023-12-10T19:37:10.023000+00:00",
        },
        {
          sgf_id: 143,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-30]PB[jonwick01]PW[\u5c71\u91ce\u6e38\u4fa0]BR[4\u7ea7]WR[4\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.02]TM[60]CA[UTF-8]PL[B]AB[or][pq][qq][rp][pj][pi][qh][qg][qf][ce][gd][jd][pd][qd][dc][kc][lc][oc][ob]AW[nr][pr][gq][mq][oq][dp][pp][qp][qm][oj][oi][ph][pg][pf][oe][md][od][mc][nc](;B[qr]C[Incorrect - This was the actual move played in the game!])(;B[op]C[CORRECT];W[os]C[CORRECT];B[po]C[CORRECT];W[np]C[CORRECT];B[qo]C[CORRECT];W[on]C[CORRECT];B[pk]C[CORRECT];W[ok]C[CORRECT]))",
          category: "other",
          move_number: 100,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G9\\":[\\"G9\\",\\"F4\\",\\"F3\\",\\"G4\\",\\"E4\\",\\"H7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449024/hcg3g8cgyrhz6yvzuw86.png",
          suspended: false,
          createdAt: "2023-12-13T06:30:25.378000+00:00",
          updatedAt: "2023-12-13T06:30:25.378000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[dp][pp][ho][in][bm][cm][dm][hm][jm][km][lm][mm][bl][el][hl][dk][ek][ik][mk][fj][gj][hj][ij][mj][hi][hh][ih][mh][cg][dg][eg][fg][kg][bf][gf][hf][kf][lf][rf][be][ee][ge][ie][ke][re][cd][fd][id][kd][ld][nd][qd][cc][gc][hc][ic][jc][lc][mc][qc][cb][jb][lb][pb][qb][ia][ka]AW[jn][kn][ln][mn][im][cl][dl][il][jl][kl][bk][ck][jk][lk][dj][ej][jj][pj][gi][ii][ji][ch][dh][eh][fh][gh][jh][kh][gg][hg][ig][jg][qg][if][jf][qf][ce][de][fe][je][le][me][ne][oe][qe][dd][jd][md][pd][dc][nc][oc][pc][db][ib][mb][ob][la][na][oa](;W[lj]C[Incorrect - This was the actual move played in the game!])(;W[nm]C[CORRECT];B[ml]C[CORRECT];W[pn]C[CORRECT];B[lh]C[CORRECT])(;W[er]C[CORRECT];B[lj]C[CORRECT];W[nm]C[CORRECT])(;W[dq]C[CORRECT];B[eq]C[CORRECT])(;W[iq]C[CORRECT];B[lj]C[CORRECT];W[nm]C[CORRECT])(;W[io]C[CORRECT];B[hn]C[CORRECT];W[nm]C[CORRECT];B[ml]C[CORRECT])(;W[on]C[CORRECT];B[nm]C[CORRECT])(;W[ip]C[CORRECT];B[gq]C[CORRECT])(;W[hq]C[CORRECT];B[nm]C[CORRECT])(;W[om]C[CORRECT];B[jo]C[CORRECT])(;W[pn]C[CORRECT];B[nn]C[CORRECT])(;W[po]C[CORRECT];B[nm]C[CORRECT]))",
          category: "other",
          move_number: 77,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates: '"{\\"F12\\":[\\"F12\\",\\"C10\\",\\"C12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237055/dsfrnpj4o13bukgfjglj.png",
          suspended: false,
          createdAt: "2023-12-10T19:37:36.266000+00:00",
          updatedAt: "2023-12-10T19:37:36.266000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[dp][pp][fg][kg][bf][lf][rf][be][ie][ke][re][cd][id][kd][ld][nd][qd][cc][jc][lc][mc][qc][cb][jb][lb][pb][qb][ia]AW[qg][qf][ce][de][je][le][me][ne][oe][qe][dd][jd][md][pd][dc][nc][oc][pc][db][ib][mb][ob][la][na][oa](;B[ka]C[Incorrect - This was the actual move played in the game!])(;B[dg]C[CORRECT];W[ha]C[CORRECT];B[ja]C[CORRECT];W[hc]C[CORRECT];B[gb]C[CORRECT]))",
          category: "other",
          move_number: 50,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N19\\":[\\"N19\\",\\"K14\\",\\"J18\\",\\"J17\\",\\"H18\\",\\"G17\\",\\"H17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237063/wm1peupvnohflt85mcju.png",
          suspended: false,
          createdAt: "2023-12-10T19:37:43.789000+00:00",
          updatedAt: "2023-12-10T19:37:43.789000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[dp][pp][ho][in][bm][cm][dm][hm][jm][km][lm][mm][bl][el][hl][dk][ek][ik][mk][fj][gj][hj][ij][mj][hi][hh][ih][mh][cg][dg][eg][fg][kg][bf][gf][hf][kf][lf][rf][be][ee][ge][ie][ke][re][cd][fd][id][kd][ld][nd][qd][cc][gc][hc][ic][jc][lc][mc][qc][cb][jb][lb][pb][qb][ia][ka]AW[jn][kn][ln][mn][im][cl][dl][il][jl][kl][bk][ck][jk][lk][dj][ej][jj][lj][pj][gi][ii][ji][ch][dh][eh][fh][gh][jh][kh][gg][hg][ig][jg][qg][if][jf][qf][ce][de][fe][je][le][me][ne][oe][qe][dd][jd][md][pd][dc][nc][oc][pc][db][ib][mb][ob][la][na][oa](;B[li]C[Incorrect - This was the actual move played in the game!])(;B[nn]C[CORRECT];W[no]C[CORRECT];B[on]C[CORRECT])(;B[iq]C[CORRECT];W[nm]C[CORRECT];B[kq]C[CORRECT];W[cq]C[CORRECT])(;B[ip]C[CORRECT];W[nm]C[CORRECT];B[kq]C[CORRECT]))",
          category: "other",
          move_number: 61,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D13\\":[\\"D13\\",\\"H19\\",\\"K19\\",\\"H17\\",\\"G18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237077/oynnl468w1cjctctgr94.png",
          suspended: false,
          createdAt: "2023-12-10T19:37:58.128000+00:00",
          updatedAt: "2023-12-10T19:37:58.128000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[mr][mq][dp][np][op][pp][qp][ho][qo][ro][in][bm][cm][dm][hm][jm][km][lm][mm][bl][el][hl][ml][dk][ek][ik][mk][fj][gj][hj][ij][mj][hi][li][hh][ih][lh][mh][cg][dg][eg][fg][kg][bf][gf][hf][kf][lf][rf][be][ee][ge][ie][ke][re][cd][fd][id][kd][ld][nd][qd][cc][gc][hc][ic][jc][lc][mc][qc][cb][jb][lb][pb][qb][ia][ka]AW[lr][lq][mp][no][po][jn][kn][ln][mn][pn][qn][rn][im][nm][cl][dl][il][jl][kl][bk][ck][jk][lk][dj][ej][jj][lj][pj][gi][ii][ji][ki][ch][dh][eh][fh][gh][jh][kh][gg][hg][ig][jg][qg][if][jf][qf][ce][de][fe][je][le][me][ne][oe][qe][dd][jd][md][pd][dc][nc][oc][pc][db][ib][mb][ob][la][na][oa](;B[nq]C[Incorrect - This was the actual move played in the game!])(;B[hq]C[CORRECT];W[cq]C[CORRECT];B[er]C[CORRECT])(;B[iq]C[CORRECT];W[cq]C[CORRECT];B[er]C[CORRECT])(;B[hr]C[CORRECT];W[or]C[CORRECT];B[lp]C[CORRECT])(;B[cj]C[CORRECT];W[io]C[CORRECT]))",
          category: "other",
          move_number: 159,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H3\\":[\\"H3\\",\\"C3\\",\\"E2\\"],\\"J3\\":[\\"J3\\",\\"C3\\",\\"E2\\"],\\"H2\\":[\\"H2\\",\\"P2\\",\\"M4\\"],\\"C10\\":[\\"C10\\",\\"J5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237101/ule4d6rslpl9zbonkz4v.png",
          suspended: false,
          createdAt: "2023-12-10T19:38:21.757000+00:00",
          updatedAt: "2023-12-10T19:38:21.757000+00:00",
        },
        {
          sgf_id: 138,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-06]PB[quiteso]PW[\u857e\u857e0102]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[gs][hs][is][ks][ls][ms][gr][mr][gq][mq][nq][dp][gp][np][op][pp][qp][rp][sp][ho][qo][ro][hn][in][am][bm][cm][dm][hm][jm][km][lm][mm][bl][el][hl][ml][dk][ek][ik][mk][aj][fj][gj][hj][ij][mj][nj][bi][hi][li][mi][ah][hh][ih][lh][mh][nh][oh][sh][ag][bg][cg][dg][eg][fg][kg][ng][og][rg][sg][bf][gf][hf][kf][lf][mf][of][pf][rf][sf][be][ee][ge][ie][ke][re][se][cd][fd][id][kd][ld][nd][qd][cc][gc][hc][ic][jc][lc][mc][qc][rc][sc][cb][jb][lb][pb][qb][ia][ka][qa]AW[js][hr][ir][jr][kr][lr][hq][jq][lq][hp][mp][io][no][po][so][jn][kn][ln][mn][pn][qn][rn][sn][im][nm][al][cl][dl][il][jl][kl][nl][ak][bk][ck][jk][lk][ok][bj][dj][ej][jj][lj][oj][pj][rj][sj][gi][ii][ji][ki][ni][oi][qi][si][bh][ch][dh][eh][fh][gh][jh][kh][ph][qh][rh][gg][hg][ig][jg][pg][qg][if][jf][nf][qf][ce][de][fe][je][le][me][ne][oe][pe][qe][dd][jd][md][pd][dc][nc][oc][pc][db][ib][mb][ob][la][ma][na][oa][pa](;W[ci]C[Incorrect - This was the actual move played in the game!])(;W[cj]C[CORRECT];B[ai]C[CORRECT];W[ci]C[CORRECT];B[fi]C[CORRECT]))",
          category: "other",
          move_number: 232,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C10\\":[\\"C10\\",\\"A11\\",\\"C11\\",\\"F11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237115/pj5evid88lngpzn8cqnw.png",
          suspended: false,
          createdAt: "2023-12-10T19:38:35.440000+00:00",
          updatedAt: "2023-12-10T19:38:35.440000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[B]AB[fs][er][gr][bq][cq][dq][fq][fp][pp][go][gn][al][bl][cl][ak][dk][dj][cf][df][pd]AW[br][cr][dr][eq][cp][dp][ep][fo][fn][bm][cm][fm][dl][bk][ck][aj][ce][dd][gd](;B[bj]C[Incorrect - This was the actual move played in the game!])(;B[nq]C[CORRECT];W[mp]C[CORRECT];B[mn]C[CORRECT];W[mq]C[CORRECT];B[np]C[CORRECT];W[jq]C[CORRECT];B[mo]C[CORRECT])(;B[bp]C[CORRECT];W[bo]C[CORRECT];B[nq]C[CORRECT];W[mp]C[CORRECT])(;B[np]C[CORRECT];W[or]C[CORRECT];B[qq]C[CORRECT];W[mq]C[CORRECT])(;B[oq]C[CORRECT];W[in]C[CORRECT];B[qk]C[CORRECT])(;B[mq]C[CORRECT];W[ff]C[CORRECT];B[hl]C[CORRECT])(;B[cc]C[CORRECT];W[dc]C[CORRECT])(;B[gf]C[CORRECT])(;B[qf]C[CORRECT]))",
          category: "other",
          move_number: 86,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q5\\":[\\"Q5\\",\\"P4\\",\\"O6\\",\\"P5\\",\\"Q6\\",\\"P6\\",\\"Q7\\",\\"P7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237523/wrhmtjos5kw5m9lofjoh.png",
          suspended: false,
          createdAt: "2023-12-10T19:45:23.989000+00:00",
          updatedAt: "2023-12-10T19:45:23.989000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[W]AB[fs][er][gr][lr][mr][nr][or][bq][cq][dq][fq][pq][fp][pp][rp][go][qo][so][gn][qn][hm][dk][fk][gk][bj][cj][dj][ci][dh][ag][cg][af][bf][cf][df][pf][ae][pd][oc]AW[br][cr][dr][pr][qr][eq][mq][nq][oq][qq][rq][cp][dp][ep][qp][fo][fn][am][bm][cm][fm][gm][dl][fl][bk][ck][aj][ai][bi][bh][ch][bg][be][ce][ad][bd][dd][gd][nd][jc][nc](;W[no]C[Incorrect - This was the actual move played in the game!])(;W[po]C[CORRECT];B[op]C[CORRECT];W[nn]C[CORRECT];B[oo]C[CORRECT];W[pn]C[CORRECT];B[on]C[CORRECT];W[pm]C[CORRECT];B[om]C[CORRECT]))",
          category: "other",
          move_number: 87,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P5\\":[\\"P5\\",\\"O7\\",\\"L4\\",\\"Q8\\"],\\"Q5\\":[\\"Q5\\",\\"L4\\",\\"L3\\",\\"H8\\",\\"J7\\",\\"L7\\",\\"K16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237566/dlkhrblx06s14vjlcplq.png",
          suspended: false,
          createdAt: "2023-12-10T19:46:06.912000+00:00",
          updatedAt: "2023-12-10T19:46:06.912000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[B]AB[fs][er][gr][lr][mr][nr][or][bq][cq][dq][fq][pq][fp][pp][rp][go][qo][so][gn][qn][hm][dk][fk][gk][bj][cj][dj][ci][dh][ag][cg][af][bf][cf][df][pf][ae][pd][oc]AW[br][cr][dr][pr][qr][eq][mq][nq][oq][qq][rq][cp][dp][ep][qp][fo][no][fn][am][bm][cm][fm][gm][dl][fl][bk][ck][aj][ai][bi][bh][ch][bg][be][ce][ad][bd][dd][gd][nd][jc][nc](;B[lq]C[Incorrect - This was the actual move played in the game!])(;B[oo]C[CORRECT];W[nm]C[CORRECT];B[kp]C[CORRECT];W[pl]C[CORRECT])(;B[po]C[CORRECT];W[kp]C[CORRECT];B[kq]C[CORRECT];W[hl]C[CORRECT];B[im]C[CORRECT];W[km]C[CORRECT];B[jd]C[CORRECT]))",
          category: "other",
          move_number: 119,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F12\\":[\\"F12\\",\\"G12\\",\\"F11\\",\\"J12\\"],\\"A9\\":[\\"A9\\",\\"A8\\",\\"F12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237571/zrjfdpjmesrolte1uwso.png",
          suspended: false,
          createdAt: "2023-12-10T19:46:11.975000+00:00",
          updatedAt: "2023-12-10T19:46:11.975000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[B]AB[fs][er][gr][lr][mr][nr][or][bq][cq][dq][fq][lq][pq][fp][kp][pp][rp][go][ho][io][jo][mo][oo][qo][so][gn][qn][km][om][il][jl][dk][fk][gk][hk][kk][ok][bj][cj][dj][ci][dh][ag][cg][af][bf][cf][df][pf][ae][pd][oc]AW[br][cr][dr][pr][qr][eq][mq][nq][oq][qq][rq][cp][dp][ep][qp][fo][ko][lo][no][fn][hn][jn][kn][mn][am][bm][cm][fm][gm][im][nm][dl][fl][hl][nl][bk][ck][ik][mk][aj][ij][lj][ai][bi][bh][ch][bg][be][ce][ad][bd][dd][gd][nd][jc][nc](;B[rs]C[Incorrect - This was the actual move played in the game!])(;B[ji]C[CORRECT];W[ii]C[CORRECT];B[ih]C[CORRECT];W[hh]C[CORRECT];B[hi]C[CORRECT])(;B[fe]C[CORRECT];W[gg]C[CORRECT];B[ii]C[CORRECT];W[eg]C[CORRECT])(;B[ii]C[CORRECT];W[jj]C[CORRECT];B[fe]C[CORRECT])(;B[ee]C[CORRECT];W[ed]C[CORRECT];B[ji]C[CORRECT])(;B[ge]C[CORRECT];W[hi]C[CORRECT])(;B[ff]C[CORRECT];W[ji]C[CORRECT]))",
          category: "other",
          move_number: 181,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H7\\":[\\"H7\\",\\"K4\\",\\"L3\\",\\"H6\\",\\"E17\\"],\\"E17\\":[\\"E17\\",\\"D17\\",\\"H7\\",\\"K7\\",\\"G8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237586/ojufuxr8xhdqd6upekv4.png",
          suspended: false,
          createdAt: "2023-12-10T19:46:26.430000+00:00",
          updatedAt: "2023-12-10T19:46:26.430000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[W]AB[fs][rs][er][gr][lr][mr][nr][or][bq][cq][dq][fq][lq][pq][fp][kp][pp][rp][go][ho][io][jo][mo][oo][qo][so][gn][qn][km][om][il][jl][dk][fk][gk][hk][kk][ok][bj][cj][dj][ci][dh][ag][cg][eg][af][bf][cf][df][ef][pf][ae][pd][oc]AW[br][cr][dr][pr][qr][eq][mq][nq][oq][qq][rq][cp][dp][ep][qp][fo][ko][lo][no][fn][hn][jn][kn][mn][am][bm][cm][fm][gm][im][nm][dl][fl][hl][nl][bk][ck][ik][mk][aj][ij][lj][ai][bi][bh][ch][bg][fg][ff][be][ce][ad][bd][dd][gd][nd][jc][nc](;W[fi]C[Incorrect - This was the actual move played in the game!])(;W[fh]C[CORRECT];B[eh]C[CORRECT];W[ej]C[CORRECT];B[ek]C[CORRECT];W[fi]C[CORRECT];B[hj]C[CORRECT]))",
          category: "other",
          move_number: 47,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O3\\":[\\"O3\\",\\"C12\\",\\"D12\\",\\"O17\\"],\\"C12\\":[\\"C12\\",\\"O3\\",\\"M3\\",\\"M4\\"],\\"O4\\":[\\"O4\\",\\"C12\\",\\"D12\\"],\\"B4\\":[\\"B4\\",\\"O3\\",\\"C5\\"],\\"P3\\":[\\"P3\\",\\"C12\\"],\\"B15\\":[\\"B15\\",\\"B16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237621/gahfxr4vn9lelcedtkxp.png",
          suspended: false,
          createdAt: "2023-12-10T19:47:02.071000+00:00",
          updatedAt: "2023-12-10T19:47:02.071000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[B]AB[fs][rs][er][gr][lr][mr][nr][or][bq][cq][dq][fq][lq][pq][fp][kp][pp][rp][go][ho][io][jo][mo][oo][qo][so][gn][qn][km][om][il][jl][dk][fk][gk][hk][kk][ok][bj][cj][dj][ci][dh][ag][cg][eg][af][bf][cf][df][pf][ae][pd][oc]AW[br][cr][dr][pr][qr][eq][mq][nq][oq][qq][rq][cp][dp][ep][qp][fo][ko][lo][no][fn][hn][jn][kn][mn][am][bm][cm][fm][gm][im][nm][dl][fl][hl][nl][bk][ck][ik][mk][aj][ij][lj][ai][bi][bh][ch][bg][fg][ff][be][ce][ad][bd][dd][gd][nd][jc][nc](;B[ef]C[Incorrect - This was the actual move played in the game!])(;B[fh]C[CORRECT];W[gh]C[CORRECT];B[fi]C[CORRECT];W[ih]C[CORRECT])(;B[ak]C[CORRECT];W[al]C[CORRECT];B[fh]C[CORRECT]))",
          category: "other",
          move_number: 41,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O3\\":[\\"O3\\",\\"N4\\",\\"N6\\",\\"N3\\",\\"O4\\",\\"K3\\",\\"N5\\"],\\"B4\\":[\\"B4\\",\\"B5\\",\\"O3\\",\\"N4\\"],\\"O4\\":[\\"O4\\",\\"P2\\",\\"R3\\",\\"N3\\"],\\"P3\\":[\\"P3\\",\\"J6\\",\\"R9\\"],\\"N3\\":[\\"N3\\",\\"F14\\",\\"H8\\"],\\"C17\\":[\\"C17\\",\\"D17\\"],\\"G14\\":[\\"G14\\"],\\"R14\\":[\\"R14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237629/fxoda4mrox3t63lqrana.png",
          suspended: false,
          createdAt: "2023-12-10T19:47:10.020000+00:00",
          updatedAt: "2023-12-10T19:47:10.020000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[B]AB[fs][rs][er][gr][lr][mr][nr][or][bq][cq][dq][fq][lq][pq][fp][kp][np][pp][rp][go][ho][io][jo][mo][oo][qo][so][gn][in][on][qn][km][om][el][il][jl][pl][dk][ek][fk][gk][hk][jk][kk][ok][qk][bj][cj][dj][fj][gj][jj][oj][qj][ci][ei][gi][pi][dh][eh][oh][ag][cg][eg][gg][ng][og][af][bf][cf][df][ef][nf][pf][ae][ee][fe][ne][fd][od][pd][oc][pb][pa]AW[ds][br][cr][dr][pr][qr][eq][mq][nq][oq][qq][rq][cp][dp][ep][lp][qp][fo][ko][lo][no][fn][hn][jn][kn][mn][nn][am][bm][cm][em][fm][gm][im][nm][dl][fl][hl][ll][nl][ol][bk][ck][ik][mk][nk][aj][hj][ij][kj][lj][nj][ai][bi][fi][hi][ji][ni][oi][bh][ch][fh][gh][nh][bg][fg][hg][mg][ff][mf][be][ce][ge][me][ad][bd][dd][ed][gd][nd][fc][jc][nc][mb][ob][na][oa](;B[es]C[Incorrect - This was the actual move played in the game!])(;B[hm]C[CORRECT];W[jp]C[CORRECT];B[kq]C[CORRECT];W[hn]C[CORRECT];B[ec]C[CORRECT])(;B[ec]C[CORRECT];W[dc]C[CORRECT];B[hm]C[CORRECT];W[jm]C[CORRECT];B[gl]C[CORRECT]))",
          category: "other",
          move_number: 179,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H7\\":[\\"H7\\",\\"K7\\",\\"G8\\",\\"D1\\",\\"P4\\"],\\"E17\\":[\\"E17\\",\\"D17\\",\\"H7\\",\\"K7\\",\\"G8\\",\\"D1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237644/ewmsraqi2cgw3xsaiwst.png",
          suspended: false,
          createdAt: "2023-12-10T19:47:25.315000+00:00",
          updatedAt: "2023-12-10T19:47:25.315000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[W]AB[fs][rs][er][gr][lr][mr][nr][or][bq][cq][dq][fq][lq][pq][fp][kp][np][pp][rp][go][ho][io][jo][mo][oo][qo][so][gn][in][on][qn][km][om][il][jl][pl][dk][fk][gk][hk][jk][kk][ok][qk][bj][cj][dj][fj][gj][jj][oj][qj][ci][ei][gi][pi][dh][eh][oh][ag][cg][eg][gg][ng][og][af][bf][cf][df][ef][nf][pf][ae][ee][fe][ne][fd][od][pd][oc][pb][pa]AW[br][cr][dr][pr][qr][eq][mq][nq][oq][qq][rq][cp][dp][ep][lp][qp][fo][ko][lo][no][fn][hn][jn][kn][mn][nn][am][bm][cm][fm][gm][im][nm][dl][fl][hl][nl][ol][bk][ck][ik][mk][nk][aj][hj][ij][kj][lj][nj][ai][bi][fi][hi][ji][ni][oi][bh][ch][fh][gh][nh][bg][fg][hg][mg][ff][mf][be][ce][ge][me][ad][bd][dd][ed][gd][nd][fc][jc][nc][mb][ob][na][oa](;W[ll]C[Incorrect - This was the actual move played in the game!])(;W[hm]C[CORRECT];B[ds]C[CORRECT];W[bs]C[CORRECT])(;W[jp]C[CORRECT];B[kq]C[CORRECT];W[hm]C[CORRECT];B[ds]C[CORRECT])(;W[qc]C[CORRECT];B[pc]C[CORRECT];W[hm]C[CORRECT];B[ds]C[CORRECT])(;W[rn]C[CORRECT];B[ro]C[CORRECT];W[hm]C[CORRECT];B[ds]C[CORRECT])(;W[ro]C[CORRECT];B[rn]C[CORRECT];W[hm]C[CORRECT];B[ds]C[CORRECT])(;W[sp]C[CORRECT];B[ro]C[CORRECT];W[hm]C[CORRECT])(;W[pc]C[CORRECT];B[qc]C[CORRECT];W[hm]C[CORRECT])(;W[kq]C[CORRECT];B[jp]C[CORRECT];W[hm]C[CORRECT]))",
          category: "other",
          move_number: 176,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H7\\":[\\"H7\\",\\"D1\\",\\"B1\\"],\\"K4\\":[\\"K4\\",\\"L3\\",\\"H7\\",\\"D1\\"],\\"R17\\":[\\"R17\\",\\"Q17\\",\\"H7\\",\\"D1\\"],\\"S6\\":[\\"S6\\",\\"S5\\",\\"H7\\",\\"D1\\"],\\"S5\\":[\\"S5\\",\\"S6\\",\\"H7\\",\\"D1\\"],\\"T4\\":[\\"T4\\",\\"S5\\",\\"H7\\"],\\"Q17\\":[\\"Q17\\",\\"R17\\",\\"H7\\"],\\"L3\\":[\\"L3\\",\\"K4\\",\\"H7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237653/vt2bvuafepvlsc3hiaym.png",
          suspended: false,
          createdAt: "2023-12-10T19:47:33.789000+00:00",
          updatedAt: "2023-12-10T19:47:33.789000+00:00",
        },
        {
          sgf_id: 140,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-11-23]PB[quiteso]PW[Gxu24]BR[14\u7ea7]WR[13\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+14.50]TM[300]CA[UTF-8]PL[W]AB[fs][er][gr][lr][mr][nr][or][bq][cq][dq][fq][lq][pq][fp][pp][rp][go][qo][so][gn][qn][hm][dk][fk][gk][bj][cj][dj][ci][dh][ag][cg][af][bf][cf][df][pf][ae][pd][oc]AW[br][cr][dr][pr][qr][eq][mq][nq][oq][qq][rq][cp][dp][ep][qp][fo][no][fn][am][bm][cm][fm][gm][dl][fl][bk][ck][aj][ai][bi][bh][ch][bg][be][ce][ad][bd][dd][gd][nd][jc][nc](;W[nm]C[Incorrect - This was the actual move played in the game!])(;W[po]C[CORRECT];B[qj]C[CORRECT];W[hl]C[CORRECT];B[gf]C[CORRECT]))",
          category: "other",
          move_number: 115,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K11\\":[\\"K11\\",\\"J11\\",\\"J12\\",\\"H12\\",\\"H11\\"],\\"F15\\":[\\"F15\\",\\"G13\\",\\"J11\\",\\"E13\\"],\\"J11\\":[\\"J11\\",\\"K10\\",\\"F15\\"],\\"E15\\":[\\"E15\\",\\"E16\\",\\"K11\\"],\\"G15\\":[\\"G15\\",\\"H11\\"],\\"F14\\":[\\"F14\\",\\"K11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237660/cvcutrnqqprecldf1ftb.png",
          suspended: false,
          createdAt: "2023-12-10T19:47:40.756000+00:00",
          updatedAt: "2023-12-10T19:47:40.756000+00:00",
        },
        {
          sgf_id: 128,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-09]PB[\u732b\u72d7]PW[arbyter73]BR[8\u7ea7]WR[8\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[dm][gi][eh][eg][gg][df][ce][de][dd][jd][pd]AW[dp][qp][di][ei][cg][dg][cf][ef][ff][gf][if](;B[fi]C[Incorrect - This was the actual move played in the game!])(;B[dh]C[CORRECT];W[ch]C[CORRECT];B[ci]C[CORRECT];W[bi]C[CORRECT];B[cj]C[CORRECT];W[bj]C[CORRECT];B[ck]C[CORRECT];W[bk]C[CORRECT])(;B[hg]C[CORRECT];W[hf]C[CORRECT];B[dh]C[CORRECT];W[ch]C[CORRECT];B[ci]C[CORRECT];W[bi]C[CORRECT];B[cj]C[CORRECT];W[bj]C[CORRECT];B[ck]C[CORRECT];W[bk]C[CORRECT]))",
          category: "other",
          move_number: 32,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J15\\":[\\"J15\\",\\"F9\\",\\"J16\\",\\"B9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237700/uwdec1ppfjhgv9ovnjpn.png",
          suspended: false,
          createdAt: "2023-12-10T19:48:20.406000+00:00",
          updatedAt: "2023-12-10T19:48:20.406000+00:00",
        },
        {
          sgf_id: 128,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-09]PB[\u732b\u72d7]PW[arbyter73]BR[8\u7ea7]WR[8\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[oq][lp][lo][po][pn][dm][pm][dl][bk][dk][ek][jk][ej][gj][hj][ij][fi][gi][ji][dh][eh][fh][kh][eg][kg][df][kf][ce][de][he][dd][fd][jd][pd]AW[dp][jp][mp][qp][qo][jn][qn][jl][ql][ck][fk][gk][hk][ik][dj][fj][di][ei][ii][ch][gh][ih][jh][cg][dg][fg][hg][jg][cf][ef][ff][gf][hf][if](;W[cl]C[Incorrect - This was the actual move played in the game!])(;W[bj]C[CORRECT];B[bl]C[CORRECT];W[be]C[CORRECT];B[bd]C[CORRECT];W[af]C[CORRECT];B[aj]C[CORRECT];W[ai]C[CORRECT]))",
          category: "other",
          move_number: 70,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B10\\":[\\"B10\\",\\"B8\\",\\"B15\\",\\"B16\\",\\"A14\\",\\"A10\\",\\"A11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237733/lhujrytetqge0dsxpbgx.png",
          suspended: false,
          createdAt: "2023-12-10T19:48:53.592000+00:00",
          updatedAt: "2023-12-10T19:48:53.592000+00:00",
        },
        {
          sgf_id: 147,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-15]PB[jonwick01]PW[180941375]BR[5\u7ea7]WR[5\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[gq][pq][rq][fp][qp][fo][qo][pn][pm][ql][ok][qk][pj][oi][qi][qd][oc]AW[fq][dp][gp][rp][ro][qn][qm][rl][rk][qj][rj][pi][oh][ph][qf][dd](;W[ep]C[Incorrect - This was the actual move played in the game!])(;W[eq]C[CORRECT];B[hp]C[CORRECT];W[gr]C[CORRECT];B[go]C[CORRECT];W[hr]C[CORRECT];B[co]C[CORRECT];W[do]C[CORRECT])(;W[hq]C[CORRECT];B[gr]C[CORRECT];W[hr]C[CORRECT];B[fr]C[CORRECT];W[eq]C[CORRECT];B[hp]C[CORRECT];W[go]C[CORRECT];B[gn]C[CORRECT]))",
          category: "other",
          move_number: 40,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R2\\":[\\"R2\\",\\"Q2\\",\\"Q5\\",\\"P5\\",\\"C7\\",\\"C14\\"],\\"N3\\":[\\"N3\\",\\"D6\\",\\"B4\\",\\"D2\\",\\"E2\\"],\\"M3\\":[\\"M3\\",\\"O3\\",\\"O2\\",\\"N3\\"],\\"M4\\":[\\"M4\\",\\"M6\\",\\"O3\\",\\"L3\\"],\\"P5\\":[\\"P5\\",\\"Q5\\",\\"M3\\"],\\"O3\\":[\\"O3\\",\\"N4\\"],\\"P18\\":[\\"P18\\",\\"O18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237798/denqn0p6sl37pd4vdvfy.png",
          suspended: false,
          createdAt: "2023-12-10T19:49:58.981000+00:00",
          updatedAt: "2023-12-10T19:49:58.981000+00:00",
        },
        {
          sgf_id: 147,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-15]PB[jonwick01]PW[180941375]BR[5\u7ea7]WR[5\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[gr][gq][pq][rq][fp][hp][op][pp][qp][fo][go][mo][no][qo][nn][lm][mm][dl][dk][ej][fj][di][qi][dh][eh][cg][eg][gg][cf][be][ce][bd][qd][cc][dc][oc][cb][eb][da]AW[fr][fq][dp][ep][rp][oo][po][ro][kn][mn][on][qn][nm][om][qm][ol][rl][bk][ek][nk][rk][cj][dj][oj][qj][rj][ci][ei][fi][gi][ni][pi][ch][oh][ph][bg][bf][qf][cd][dd][ed][bc][ec][gc][bb][fb][ba](;B[ln]C[Incorrect - This was the actual move played in the game!])(;B[fk]C[CORRECT];W[cm]C[CORRECT];B[dn]C[CORRECT];W[km]C[CORRECT]))",
          category: "other",
          move_number: 91,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F10\\":[\\"F10\\",\\"E12\\",\\"D13\\",\\"G11\\",\\"B8\\",\\"E8\\",\\"E7\\"],\\"C19\\":[\\"C19\\",\\"F10\\",\\"A17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237818/lkmuzqsyuq6oofuzhpk1.png",
          suspended: false,
          createdAt: "2023-12-10T19:50:18.525000+00:00",
          updatedAt: "2023-12-10T19:50:18.525000+00:00",
        },
        {
          sgf_id: 147,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-15]PB[jonwick01]PW[180941375]BR[5\u7ea7]WR[5\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[gr][gq][pq][rq][fp][hp][op][pp][qp][fo][go][mo][no][qo][nn][lm][mm][dl][dk][ej][di][qi][dh][cg][eg][cf][be][ce][bd][qd][cc][dc][oc][cb][eb][da]AW[fr][fq][dp][ep][rp][oo][po][ro][mn][on][qn][nm][om][qm][ol][rl][bk][ek][nk][rk][cj][dj][oj][qj][rj][ci][ei][ni][pi][ch][oh][ph][bg][bf][qf][cd][dd][ed][bc][ec][gc][bb][fb][ba](;B[eh]C[Incorrect - This was the actual move played in the game!])(;B[fj]C[CORRECT];W[eh]C[CORRECT];B[dg]C[CORRECT];W[gi]C[CORRECT];B[bl]C[CORRECT];W[el]C[CORRECT];B[em]C[CORRECT])(;B[ca]C[CORRECT];W[fj]C[CORRECT];B[ac]C[CORRECT]))",
          category: "other",
          move_number: 128,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K15\\":[\\"K15\\",\\"L15\\",\\"L14\\",\\"J15\\",\\"K16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237834/a4yypfzftwsjayv7z2pa.png",
          suspended: false,
          createdAt: "2023-12-10T19:50:35.015000+00:00",
          updatedAt: "2023-12-10T19:50:35.015000+00:00",
        },
        {
          sgf_id: 147,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-15]PB[jonwick01]PW[180941375]BR[5\u7ea7]WR[5\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[gr][gq][pq][rq][fp][hp][qp][fo][go][qo][pn][pm][ql][ok][qk][pj][qi][qd][oc]AW[fr][fq][dp][ep][rp][ro][qn][qm][rl][rk][oj][qj][rj][ni][pi][oh][ph][qf][dd](;B[pk]C[Incorrect - This was the actual move played in the game!])(;B[lm]C[CORRECT];W[nq]C[CORRECT];B[or]C[CORRECT])(;B[ln]C[CORRECT];W[nq]C[CORRECT];B[or]C[CORRECT];W[jn]C[CORRECT];B[dn]C[CORRECT])(;B[dn]C[CORRECT];W[qr]C[CORRECT];B[pr]C[CORRECT])(;B[dr]C[CORRECT];W[qr]C[CORRECT];B[pr]C[CORRECT])(;B[km]C[CORRECT];W[qr]C[CORRECT];B[qq]C[CORRECT])(;B[rn]C[CORRECT];W[rm]C[CORRECT];B[lm]C[CORRECT];W[qr]C[CORRECT])(;B[ll]C[CORRECT];W[qr]C[CORRECT];B[qq]C[CORRECT])(;B[cm]C[CORRECT];W[qr]C[CORRECT]))",
          category: "other",
          move_number: 100,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates: '"{\\"F9\\":[\\"F9\\",\\"D6\\",\\"L8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237847/ztrxialkhrr5yiwxkput.png",
          suspended: false,
          createdAt: "2023-12-10T19:50:47.636000+00:00",
          updatedAt: "2023-12-10T19:50:47.636000+00:00",
        },
        {
          sgf_id: 147,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-15]PB[jonwick01]PW[180941375]BR[5\u7ea7]WR[5\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[gr][gq][pq][rq][fp][hp][op][pp][qp][fo][go][mo][no][qo][ln][nn][lm][mm][dl][dk][lk][ej][fj][di][qi][dh][eh][cg][eg][gg][cf][be][ce][bd][qd][cc][dc][oc][cb][eb][da]AW[fr][fq][dp][ep][rp][oo][po][ro][kn][on][qn][km][nm][om][qm][ol][rl][bk][ek][nk][rk][cj][dj][oj][qj][rj][ci][ei][fi][gi][ni][pi][ch][oh][ph][bg][bf][qf][cd][dd][ed][bc][ec][gc][bb][fb][ba](;W[kl]C[Incorrect - This was the actual move played in the game!])(;W[fk]C[CORRECT];B[dn]C[CORRECT];W[kl]C[CORRECT]))",
          category: "other",
          move_number: 97,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F9\\":[\\"F9\\",\\"C7\\",\\"D6\\",\\"L7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237853/l5axsrgpjqvkojfeldkv.png",
          suspended: false,
          createdAt: "2023-12-10T19:50:53.509000+00:00",
          updatedAt: "2023-12-10T19:50:53.509000+00:00",
        },
        {
          sgf_id: 147,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-15]PB[jonwick01]PW[180941375]BR[5\u7ea7]WR[5\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[gr][gq][pq][rq][fp][hp][op][pp][qp][fo][go][mo][no][qo][ln][nn][lm][mm][dl][ml][dk][fk][lk][ej][fj][kj][lj][di][hi][qi][dh][eh][kh][lh][cg][eg][fg][gg][cf][hf][be][ce][he][bd][gd][qd][cc][dc][kc][oc][cb][eb][da]AW[fr][fq][dp][ep][rp][oo][po][ro][kn][on][qn][km][nm][om][qm][kl][ll][ol][rl][bk][ek][kk][mk][nk][rk][cj][dj][gj][jj][oj][qj][rj][ci][ei][fi][gi][ji][ni][pi][ch][gh][hh][jh][oh][ph][bg][hg][bf][qf][fe][cd][dd][ed][bc][ec][gc][hc][bb][fb][ba](;B[gf]C[Incorrect - This was the actual move played in the game!])(;B[fd]C[CORRECT];W[ee]C[CORRECT];B[fc]C[CORRECT];W[gb]C[CORRECT]))",
          category: "other",
          move_number: 181,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L2\\":[\\"L2\\",\\"J2\\",\\"C6\\",\\"B7\\",\\"B6\\",\\"C2\\",\\"B2\\"],\\"J2\\":[\\"J2\\",\\"K2\\",\\"L2\\",\\"J3\\",\\"J1\\",\\"K1\\",\\"H3\\",\\"H5\\"],\\"H5\\":[\\"H5\\",\\"J5\\",\\"L2\\",\\"J2\\",\\"C6\\",\\"B7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237870/cpwwwzbmpinrytwqkdsl.png",
          suspended: false,
          createdAt: "2023-12-10T19:51:11.113000+00:00",
          updatedAt: "2023-12-10T19:51:11.113000+00:00",
        },
        {
          sgf_id: 147,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-15]PB[jonwick01]PW[180941375]BR[5\u7ea7]WR[5\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[ds][fs][dr][er][gr][bq][cq][gq][pq][rq][fp][hp][op][pp][qp][fo][go][ko][lo][mo][no][qo][jn][ln][nn][jm][lm][mm][dl][hl][il][jl][ml][dk][fk][lk][ej][fj][kj][lj][di][hi][qi][dh][eh][kh][lh][cg][eg][fg][gg][jg][lg][cf][gf][hf][jf][be][ce][he][je][bd][gd][jd][qd][cc][dc][kc][oc][cb][eb][da]AW[fr][aq][dq][eq][fq][bp][cp][dp][ep][ip][kp][rp][jo][oo][po][ro][in][kn][on][qn][im][km][nm][om][qm][kl][ll][ol][rl][bk][ek][hk][ik][kk][mk][nk][rk][cj][dj][gj][jj][oj][qj][rj][ci][ei][fi][gi][ji][ni][pi][ch][gh][hh][jh][oh][ph][bg][hg][kg][bf][kf][lf][mf][qf][fe][cd][dd][ed][id][bc][ec][gc][hc][bb][fb][ba](;W[gl]C[Incorrect - This was the actual move played in the game!])(;W[jk]C[CORRECT];B[gl]C[CORRECT];W[fl]C[CORRECT];B[gk]C[CORRECT];W[gm]C[CORRECT];B[el]C[CORRECT];W[fm]C[CORRECT];B[hm]C[CORRECT];W[hn]C[CORRECT];B[ek]C[CORRECT];W[gn]C[CORRECT]))",
          category: "other",
          move_number: 182,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J2\\":[\\"J2\\",\\"H5\\",\\"J5\\",\\"C6\\",\\"B7\\",\\"H3\\",\\"B2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237887/flo5xoyir2nwpooviy1x.png",
          suspended: false,
          createdAt: "2023-12-10T19:51:28.322000+00:00",
          updatedAt: "2023-12-10T19:51:28.322000+00:00",
        },
        {
          sgf_id: 147,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-15]PB[jonwick01]PW[180941375]BR[5\u7ea7]WR[5\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[ds][fs][dr][er][gr][bq][cq][gq][kq][pq][rq][fp][hp][op][pp][qp][fo][go][ko][lo][mo][no][qo][dn][en][fn][gn][jn][ln][nn][fm][jm][lm][mm][dl][fl][hl][il][jl][ml][dk][fk][jk][lk][ej][fj][kj][lj][di][hi][ii][qi][dh][eh][kh][lh][cg][eg][fg][gg][jg][lg][cf][gf][hf][jf][be][ce][he][je][bd][gd][jd][qd][cc][dc][kc][oc][cb][eb][da]AW[fr][aq][dq][eq][fq][jq][bp][cp][dp][ep][ip][kp][rp][jo][oo][po][ro][in][on][qn][cm][dm][em][gm][hm][im][nm][om][qm][el][gl][ol][rl][bk][ek][gk][hk][ik][mk][nk][rk][cj][dj][gj][jj][oj][qj][rj][ci][ei][fi][gi][ji][ni][pi][ch][gh][hh][jh][oh][ph][bg][hg][kg][bf][kf][lf][mf][qf][fe][cd][dd][ed][id][bc][ec][gc][hc][bb][fb][ba](;B[lq]C[Incorrect - This was the actual move played in the game!])(;B[kr]C[CORRECT];W[ir]C[CORRECT];B[cn]C[CORRECT];W[bm]C[CORRECT];B[bn]C[CORRECT];W[cr]C[CORRECT];B[br]C[CORRECT])(;B[ir]C[CORRECT];W[jr]C[CORRECT];B[kr]C[CORRECT];W[iq]C[CORRECT];B[is]C[CORRECT];W[js]C[CORRECT];B[hq]C[CORRECT];W[ho]C[CORRECT])(;B[ho]C[CORRECT];W[io]C[CORRECT];B[kr]C[CORRECT];W[ir]C[CORRECT];B[cn]C[CORRECT];W[bm]C[CORRECT]))",
          category: "other",
          move_number: 41,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M7\\":[\\"M7\\",\\"O3\\",\\"P2\\"],\\"M6\\":[\\"M6\\",\\"O3\\",\\"P2\\",\\"K6\\",\\"D6\\"],\\"D6\\":[\\"D6\\",\\"R2\\",\\"Q2\\"],\\"D2\\":[\\"D2\\",\\"R2\\",\\"Q2\\"],\\"L7\\":[\\"L7\\",\\"R2\\",\\"R3\\"],\\"S6\\":[\\"S6\\",\\"S7\\",\\"M7\\",\\"R2\\"],\\"M8\\":[\\"M8\\",\\"R2\\",\\"R3\\"],\\"C7\\":[\\"C7\\",\\"R2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702237908/pq2vsogqv9kehvrzkouh.png",
          suspended: false,
          createdAt: "2023-12-10T19:51:48.367000+00:00",
          updatedAt: "2023-12-10T19:51:48.367000+00:00",
        },
        {
          sgf_id: 137,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-19]PB[quiteso]PW[\u864e\u95e8\u535756]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[er][gr][cq][dq][fq][nq][oq][pq][lp][mp][pp][dd][pd]AW[fr][nr][or][pr][eq][hq][lq][mq][cp][dp][ep][kp](;W[fp]C[Incorrect - This was the actual move played in the game!])(;W[dr]C[CORRECT];B[fs]C[CORRECT];W[cr]C[CORRECT];B[iq]C[CORRECT];W[ir]C[CORRECT];B[ip]C[CORRECT];W[hr]C[CORRECT]))",
          category: "other",
          move_number: 70,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O4\\":[\\"O4\\",\\"M7\\",\\"N8\\",\\"R2\\",\\"S1\\",\\"L3\\",\\"L2\\",\\"K4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702238835/c2hhs7fqq4xwbqxlnqww.png",
          suspended: false,
          createdAt: "2023-12-10T20:07:16.057000+00:00",
          updatedAt: "2023-12-10T20:07:16.057000+00:00",
        },
        {
          sgf_id: 137,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-19]PB[quiteso]PW[\u864e\u95e8\u535756]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[fs][br][er][fr][gr][hr][cq][dq][fq][nq][oq][pq][lp][mp][pp][qp][rp][ko][lo][oo][qo][so][ln][nn][on][dl][fl][hk][cf][df][qf][fe][dd][fd][pd]AW[nr][or][pr][bq][eq][gq][hq][iq][lq][mq][bp][cp][dp][ep][fp][kp][mo][no][po][ro][kn][mn][pn][qn][rn][mm][rm][ci][ei][dg][eg][gf][ge](;W[jp]C[Incorrect - This was the actual move played in the game!])(;W[np]C[CORRECT];B[lm]C[CORRECT];W[ml]C[CORRECT];B[qr]C[CORRECT];W[rs]C[CORRECT];B[kq]C[CORRECT];W[kr]C[CORRECT];B[jp]C[CORRECT]))",
          category: "other",
          move_number: 85,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P8\\":[\\"P8\\",\\"O8\\",\\"P9\\",\\"J9\\"],\\"M7\\":[\\"M7\\",\\"N8\\",\\"P8\\",\\"M8\\"],\\"R8\\":[\\"R8\\",\\"P8\\",\\"O8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702238847/rmqp2bps4wk1s82fzjso.png",
          suspended: false,
          createdAt: "2023-12-10T20:07:28.289000+00:00",
          updatedAt: "2023-12-10T20:07:28.289000+00:00",
        },
        {
          sgf_id: 137,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-19]PB[quiteso]PW[\u864e\u95e8\u535756]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[fs][br][er][fr][gr][hr][cq][dq][fq][nq][oq][pq][lp][mp][pp][qp][rp][lo][oo][qo][so][ln][nn][on][dl][fl][hk][cf][df][qf][fe][dd][fd][pd]AW[nr][or][pr][bq][eq][gq][hq][iq][lq][mq][bp][cp][dp][ep][fp][kp][mo][no][po][ro][kn][mn][pn][qn][rn][mm][rm][ci][ei][dg][eg][gf][ge](;B[ko]C[Incorrect - This was the actual move played in the game!])(;B[np]C[CORRECT];W[om]C[CORRECT];B[lm]C[CORRECT];W[nm]C[CORRECT];B[ko]C[CORRECT];W[hm]C[CORRECT];B[dj]C[CORRECT]))",
          category: "other",
          move_number: 136,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R1\\":[\\"R1\\",\\"T3\\",\\"S1\\",\\"Q1\\",\\"P1\\",\\"T1\\",\\"T2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702238855/kpqkzenxgb03jehpmksy.png",
          suspended: false,
          createdAt: "2023-12-10T20:07:36.110000+00:00",
          updatedAt: "2023-12-10T20:07:36.110000+00:00",
        },
        {
          sgf_id: 137,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-19]PB[quiteso]PW[\u864e\u95e8\u535756]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[fs][br][er][fr][gr][hr][qr][rr][cq][dq][fq][nq][oq][pq][lp][mp][op][pp][qp][rp][io][jo][ko][lo][oo][qo][so][cn][dn][en][gn][hn][in][ln][nn][on][em][gm][lm][dl][fl][gl][nl][bk][ck][hk][kk][dj][ej][fj][ij][qj][ii][pi][gh][hh][ih][ph][gg][cf][df][ff][qf][fe][dd][fd][pd][nc]AW[nr][or][pr][bq][eq][gq][hq][iq][lq][mq][rq][bp][cp][dp][ep][fp][jp][kp][np][fo][go][ho][mo][no][po][ro][bn][fn][jn][kn][mn][pn][qn][rn][bm][cm][dm][fm][km][mm][rm][el][jl][kl][ll][ml][ol][ek][fk][jk][mk][pk][cj][jj][pj][ci][ei][fi][gi][oi][dg][eg][fg][hg][gf][ge](;W[hl]C[Incorrect - This was the actual move played in the game!])(;W[qs]C[CORRECT];B[sq]C[CORRECT];W[rs]C[CORRECT];B[ps]C[CORRECT];W[os]C[CORRECT];B[ss]C[CORRECT];W[sr]C[CORRECT]))",
          category: "other",
          move_number: 26,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D2\\":[\\"D2\\",\\"F1\\",\\"C2\\",\\"J3\\",\\"J2\\",\\"J4\\",\\"H2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702238873/pkklnrixby2reia7kk4n.png",
          suspended: false,
          createdAt: "2023-12-10T20:07:54.196000+00:00",
          updatedAt: "2023-12-10T20:07:54.196000+00:00",
        },
        {
          sgf_id: 137,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-19]PB[quiteso]PW[\u864e\u95e8\u535756]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[fs][br][er][fr][gr][hr][cq][dq][fq][nq][oq][pq][lp][mp][op][pp][qp][rp][io][jo][ko][lo][oo][qo][so][gn][hn][in][ln][nn][on][gm][dl][fl][hk][cf][df][qf][fe][dd][fd][pd]AW[nr][or][pr][bq][eq][gq][hq][iq][lq][mq][bp][cp][dp][ep][fp][jp][kp][np][go][ho][mo][no][po][ro][fn][jn][kn][mn][pn][qn][rn][km][mm][rm][jl][ci][ei][dg][eg][gf][ge](;B[nc]C[Incorrect - This was the actual move played in the game!])(;B[ol]C[CORRECT];W[nl]C[CORRECT];B[ok]C[CORRECT];W[ik]C[CORRECT])(;B[lm]C[CORRECT];W[ml]C[CORRECT];B[ol]C[CORRECT];W[ll]C[CORRECT])(;B[ql]C[CORRECT];W[ol]C[CORRECT];B[nl]C[CORRECT]))",
          category: "other",
          move_number: 32,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F2\\":[\\"F2\\",\\"C2\\",\\"L5\\",\\"R8\\",\\"C12\\",\\"J3\\"],\\"L5\\":[\\"L5\\",\\"J3\\",\\"F2\\",\\"C2\\",\\"R7\\",\\"L3\\"],\\"R17\\":[\\"R17\\",\\"Q17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702238887/ypjojejcsohu5bcqclgu.png",
          suspended: false,
          createdAt: "2023-12-10T20:08:08.105000+00:00",
          updatedAt: "2023-12-10T20:08:08.105000+00:00",
        },
        {
          sgf_id: 137,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-19]PB[quiteso]PW[\u864e\u95e8\u535756]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[fs][br][er][fr][gr][hr][qr][rr][cq][dq][fq][nq][oq][pq][lp][mp][op][pp][qp][rp][io][jo][ko][lo][oo][qo][so][cn][dn][en][gn][hn][in][ln][nn][on][em][gm][lm][dl][fl][gl][nl][bk][ck][hk][kk][dj][ej][fj][ij][qj][ii][pi][gh][hh][ih][ph][gg][cf][df][ff][qf][fe][dd][fd][pd][nc]AW[nr][or][pr][bq][eq][gq][hq][iq][lq][mq][rq][bp][cp][dp][ep][fp][jp][kp][np][fo][go][ho][mo][no][po][ro][bn][fn][jn][kn][mn][pn][qn][rn][bm][cm][dm][fm][km][mm][rm][el][hl][jl][kl][ll][ml][ol][ek][fk][jk][mk][pk][cj][jj][pj][ci][ei][fi][gi][oi][dg][eg][fg][hg][gf][ge](;B[hj]C[Incorrect - This was the actual move played in the game!])(;B[sp]C[CORRECT];W[fb]C[CORRECT];B[gc]C[CORRECT])(;B[sr]C[CORRECT];W[di]C[CORRECT];B[dk]C[CORRECT])(;B[sq]C[CORRECT];W[di]C[CORRECT])(;B[kr]C[CORRECT];W[jr]C[CORRECT])(;B[om]C[CORRECT];W[qk]C[CORRECT])(;B[jc]C[CORRECT];W[qs]C[CORRECT]))",
          category: "other",
          move_number: 162,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R1\\":[\\"R1\\",\\"T3\\",\\"S1\\",\\"P12\\",\\"M18\\"],\\"M18\\":[\\"M18\\",\\"L17\\",\\"M17\\",\\"L16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702238922/foyoqlyjn3swqet6zxsh.png",
          suspended: false,
          createdAt: "2023-12-10T20:08:42.409000+00:00",
          updatedAt: "2023-12-10T20:08:42.409000+00:00",
        },
        {
          sgf_id: 12,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[B]AB[fr][gr][cq][dq][eq][pq][np][fi][eg][fg][df][if][ce][de][bd][ed][od][qd][bc][cc][dc][ec][oc][fb]AW[fq][gq][hq][cp][dp][ep][qo][dk][di][cg][dg][ef][be][ee][fe][ne][fd][jd][nd][fc][nc][gb](;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))",
          category: "Judgment",
          move_number: 49,
          difficulty: 1700,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F8\\":[\\"F8\\",\\"H11\\",\\"E10\\"],\\"J11\\":[\\"J11\\",\\"R15\\",\\"P15\\",\\"S16\\"],\\"J12\\":[\\"J12\\",\\"R15\\",\\"P15\\",\\"S16\\"],\\"J10\\":[\\"J10\\",\\"R15\\",\\"P15\\"],\\"K11\\":[\\"K11\\",\\"G10\\",\\"F10\\"],\\"L15\\":[\\"L15\\",\\"L16\\",\\"F8\\",\\"R15\\"],\\"G8\\":[\\"G8\\",\\"R15\\",\\"P15\\"],\\"E10\\":[\\"E10\\",\\"D10\\",\\"J11\\",\\"R15\\"],\\"H17\\":[\\"H17\\",\\"H18\\",\\"J17\\"],\\"F9\\":[\\"F9\\",\\"R15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702337478/yq93munlyrplbxkgxdgf.png",
          suspended: false,
          createdAt: "2023-12-11T23:31:18.687000+00:00",
          updatedAt: "2023-12-11T23:31:18.687000+00:00",
        },
        {
          sgf_id: 146,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-17]PB[jonwick01]PW[V754224921]BR[1\u7ea7]WR[1\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+3.25]TM[60]CA[UTF-8]PL[B]AB[pq][qo][nk][rj][ni][nh][oh][ph][pg][qg][rg][mf][nf][oe][pe][re][pd][qd][rd][oc][pc]AW[dp][ol][qj][oi][pi][ri][qh][mg][ng][og][of][pf][qf][rf][sf][ne][qe][dd][md][od][nc](;B[ql]C[Incorrect - This was the actual move played in the game!])(;B[lf]C[CORRECT];W[lg]C[CORRECT];B[kf]C[CORRECT];W[jc]C[CORRECT];B[rk]C[CORRECT];W[kg]C[CORRECT])(;B[le]C[CORRECT];W[rk]C[CORRECT];B[lg]C[CORRECT];W[mh]C[CORRECT]))",
          category: "other",
          move_number: 47,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M14\\":[\\"M14\\",\\"M13\\",\\"L14\\",\\"K17\\",\\"S9\\",\\"L13\\"],\\"M15\\":[\\"M15\\",\\"S9\\",\\"M13\\",\\"N12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435256/fau2gte2zmz0nbdqe7m5.png",
          suspended: false,
          createdAt: "2023-12-13T02:40:56.890000+00:00",
          updatedAt: "2023-12-13T02:40:56.890000+00:00",
        },
        {
          sgf_id: 146,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-17]PB[jonwick01]PW[V754224921]BR[1\u7ea7]WR[1\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+3.25]TM[60]CA[UTF-8]PL[W]AB[pq][qo][ql][nk][rj][ni][nh][oh][ph][pg][qg][rg][mf][nf][oe][pe][re][pd][qd][rd][oc][pc]AW[dp][ol][qj][oi][pi][ri][qh][mg][ng][og][of][pf][qf][rf][sf][ne][qe][dd][md][od][nc](;W[pk]C[Incorrect - This was the actual move played in the game!])(;W[lf]C[CORRECT];B[rk]C[CORRECT];W[nb]C[CORRECT];B[fc]C[CORRECT];W[ec]C[CORRECT]))",
          category: "other",
          move_number: 80,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O18\\":[\\"O18\\",\\"O7\\",\\"Q8\\",\\"L5\\",\\"K8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435297/croltjrumpruw3b47xdr.png",
          suspended: false,
          createdAt: "2023-12-13T02:41:37.618000+00:00",
          updatedAt: "2023-12-13T02:41:37.618000+00:00",
        },
        {
          sgf_id: 146,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-17]PB[jonwick01]PW[V754224921]BR[1\u7ea7]WR[1\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+3.25]TM[60]CA[UTF-8]PL[B]AB[oq][pq][mp][np][qp][qo][mm][qm][ql][nk][qk][lj][rj][ni][nh][oh][ph][pg][qg][rg][mf][nf][oe][pe][re][pd][qd][rd][oc][pc]AW[dp][op][pp][mo][no][on][ol][rl][pk][rk][qj][oi][pi][ri][qh][mg][ng][og][lf][of][pf][qf][rf][sf][ne][qe][dd][md][od][nc](;B[lp]C[Incorrect - This was the actual move played in the game!])(;B[lo]C[CORRECT];W[lp]C[CORRECT];B[ko]C[CORRECT];W[qq]C[CORRECT];B[qr]C[CORRECT]))",
          category: "other",
          move_number: 55,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O18\\":[\\"O18\\",\\"G3\\",\\"C17\\",\\"D17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435321/i2fqsv7g4gj5cqolatwi.png",
          suspended: false,
          createdAt: "2023-12-13T02:42:02.326000+00:00",
          updatedAt: "2023-12-13T02:42:02.326000+00:00",
        },
        {
          sgf_id: 146,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-17]PB[jonwick01]PW[V754224921]BR[1\u7ea7]WR[1\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+3.25]TM[60]CA[UTF-8]PL[W]AB[fs][er][gr][bq][cq][dq][fq][oq][pq][bp][fp][ip][kp][lp][mp][np][qp][co][go][qo][gn][qn][hm][mm][qm][hl][il][kl][ll][ql][gk][nk][qk][gj][lj][rj][ni][dh][gh][jh][nh][oh][ph][gg][jg][pg][qg][rg][hf][if][mf][nf][ee][fe][ge][oe][pe][re][bd][pd][qd][rd][bc][cc][dc][ic][oc][pc][eb][fb][gb][hb]AW[br][cr][dr][eq][cp][dp][ep][op][pp][bo][fo][io][lo][mo][no][fn][on][pn][dm][gm][jm][km][lm][gl][ol][rl][fk][pk][rk][dj][fj][qj][ei][oi][pi][ri][eh][qh][fg][kg][mg][ng][og][cf][ff][gf][jf][lf][of][pf][qf][rf][sf][be][he][ie][ne][qe][cd][dd][ed][md][od][ec][fc][gc][hc][jc][nc][ib](;W[ap]C[Incorrect - This was the actual move played in the game!])(;W[do]C[CORRECT];B[nm]C[CORRECT];W[om]C[CORRECT];B[rh]C[CORRECT];W[sj]C[CORRECT];B[qi]C[CORRECT]))",
          category: "other",
          move_number: 148,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D5\\":[\\"D5\\",\\"O7\\",\\"P7\\",\\"S12\\",\\"T10\\",\\"R11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435347/pisygajlbadkjuouvwjf.png",
          suspended: false,
          createdAt: "2023-12-13T02:42:27.993000+00:00",
          updatedAt: "2023-12-13T02:42:27.993000+00:00",
        },
        {
          sgf_id: 143,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-30]PB[jonwick01]PW[\u5c71\u91ce\u6e38\u4fa0]BR[4\u7ea7]WR[4\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.02]TM[60]CA[UTF-8]PL[W]AB[or][pq][qq][rp][pj][pi][qh][qg][qf][ce][gd][jd][pd][qd][dc][kc][lc][oc][ob]AW[nr][gq][mq][oq][dp][pp][qp][qm][oj][oi][ph][pg][pf][oe][md][od][mc][nc](;W[pr]C[Incorrect - This was the actual move played in the game!])(;W[ro]C[CORRECT];B[cn]C[CORRECT];W[cl]C[CORRECT];B[cq]C[CORRECT];W[cp]C[CORRECT]))",
          category: "other",
          move_number: 96,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G13\\":[\\"G13\\",\\"F14\\",\\"G8\\",\\"J9\\",\\"G7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449030/g29lhhtzecnf3vknyh5g.png",
          suspended: false,
          createdAt: "2023-12-13T06:30:30.795000+00:00",
          updatedAt: "2023-12-13T06:30:30.795000+00:00",
        },
        {
          sgf_id: 36,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1800]OT[5x30 byo-yomi]PW[goperaw]PB[akira74]WR[3d]BR[1k]DT[2023-11-16]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[W+Resign]PL[B]AB[or][pr][qr][pq][kp][io][lo][mo][no][po][cn][qn][qm][rm][ll][ql][nk][qk][cj][gj][hj][nj][oj][pj][qj][gi][ii][ji][li][ni][ch][ih][jh][lh][mh][ph][rh][gg][ig][lg][pg][gf][jf][of][pf][ge][he][ie][je][ke][pe][hd][jd][nd][fc][ic][jc][lc][oc][kb]AW[qs][rr][qq][np][qp][rp][qo][so][kn][mn][on][pn][rn][km][mm][ol][pl][kk][rk][rj][di][fi][hi][mi][oi][pi][qi][ri][eh][fh][gh][hh][nh][oh][eg][fg][hg][jg][kg][mg][og][hf][if][kf][lf][nf][fe][me][oe][cd][fd][gd][kd][ld][md][dc][gc][hc][kc][nc][lb][mb](;B[lk]C[Incorrect - This was the actual move played in the game!])(;B[im]C[CORRECT];W[il]C[CORRECT];B[ik]C[CORRECT]))",
          category: "other",
          move_number: 126,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates: '"{\\"J7\\":[\\"J7\\",\\"J8\\",\\"J9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435391/ehsbjefxjmve60eqimfy.png",
          suspended: false,
          createdAt: "2023-12-13T02:43:11.470000+00:00",
          updatedAt: "2023-12-13T02:43:11.470000+00:00",
        },
        {
          sgf_id: 36,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1800]OT[5x30 byo-yomi]PW[goperaw]PB[akira74]WR[3d]BR[1k]DT[2023-11-16]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[W+Resign]PL[B]AB[or][pr][qr][pq][kp][io][lo][mo][no][po][cn][fn][in][qn][fm][qm][rm][kl][ll][ql][dk][ek][fk][lk][nk][qk][cj][gj][hj][nj][oj][pj][qj][gi][ii][ji][li][ni][ch][ih][jh][lh][mh][ph][rh][gg][ig][lg][pg][gf][jf][of][pf][ge][he][ie][je][ke][pe][hd][jd][nd][fc][ic][jc][lc][oc][kb]AW[qs][rr][qq][np][qp][rp][qo][so][kn][mn][on][pn][rn][hm][im][km][mm][el][fl][gl][jl][ol][pl][gk][kk][rk][fj][rj][di][fi][hi][mi][oi][pi][qi][ri][eh][fh][gh][hh][nh][oh][eg][fg][hg][jg][kg][mg][og][hf][if][kf][lf][nf][fe][me][oe][cd][fd][gd][kd][ld][md][dc][gc][hc][kc][nc][lb][mb](;B[jk]C[Incorrect - This was the actual move played in the game!])(;B[ik]C[CORRECT];W[jk]C[CORRECT];B[mj]C[CORRECT];W[go]C[CORRECT];B[dm]C[CORRECT];W[ml]C[CORRECT];B[gn]C[CORRECT]))",
          category: "other",
          move_number: 142,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J9\\":[\\"J9\\",\\"K9\\",\\"N10\\",\\"G5\\",\\"D7\\",\\"N8\\",\\"G6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435439/ljivgxreutbx81v8q106.png",
          suspended: false,
          createdAt: "2023-12-13T02:43:59.741000+00:00",
          updatedAt: "2023-12-13T02:43:59.741000+00:00",
        },
        {
          sgf_id: 36,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1800]OT[5x30 byo-yomi]PW[goperaw]PB[akira74]WR[3d]BR[1k]DT[2023-11-16]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[W+Resign]PL[B]AB[or][pr][qr][pq][kp][io][lo][mo][no][po][cn][fn][in][jn][qn][fm][qm][rm][kl][ll][ql][dk][ek][fk][jk][lk][nk][qk][cj][gj][hj][jj][nj][oj][pj][qj][gi][ii][ji][li][ni][ch][ih][jh][lh][mh][ph][rh][gg][ig][lg][pg][gf][jf][of][pf][ge][he][ie][je][ke][pe][hd][jd][nd][fc][ic][jc][lc][oc][ib][kb][pb][ja][la]AW[qs][rr][qq][np][qp][rp][qo][so][kn][mn][on][pn][rn][hm][im][jm][km][mm][el][fl][gl][hl][jl][ol][pl][gk][ik][kk][rk][fj][ij][rj][di][fi][hi][mi][oi][pi][qi][ri][eh][fh][gh][hh][nh][oh][eg][fg][hg][jg][kg][mg][og][hf][if][kf][lf][nf][fe][me][oe][cd][fd][gd][kd][ld][md][dc][gc][hc][kc][nc][pc][qc][lb][mb][ob](;B[qd]C[Incorrect - This was the actual move played in the game!])(;B[rc]C[CORRECT];W[qd]C[CORRECT];B[rd]C[CORRECT];W[qe]C[CORRECT];B[re]C[CORRECT];W[qf]C[CORRECT];B[rf]C[CORRECT];W[qb]C[CORRECT];B[rb]C[CORRECT];W[ra]C[CORRECT]))",
          category: "other",
          move_number: 162,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S17\\":[\\"S17\\",\\"R16\\",\\"S16\\",\\"R15\\",\\"S15\\",\\"R14\\",\\"S14\\",\\"R18\\",\\"S18\\",\\"S19\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435452/kcd8xejuw3khvppnaw41.png",
          suspended: false,
          createdAt: "2023-12-13T02:44:12.363000+00:00",
          updatedAt: "2023-12-13T02:44:12.363000+00:00",
        },
        {
          sgf_id: 36,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1800]OT[5x30 byo-yomi]PW[goperaw]PB[akira74]WR[3d]BR[1k]DT[2023-11-16]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[W+Resign]PL[B]AB[or][pr][qr][pq][lo][no][po][qn][qm][rm][ql][nk][qk][oj][pj][qj][ni][pg][ge][he][je][hd][jd][fc][ic][jc]AW[qs][rr][qq][qp][rp][qo][so][on][pn][rn][km][mm][ol][pl][rk][rj][oi][pi][qi][nh][cd][fd][gd][id][kd][dc][gc][hc](;B[mh]C[Incorrect - This was the actual move played in the game!])(;B[oh]C[CORRECT];W[mi]C[CORRECT];B[nj]C[CORRECT];W[mh]C[CORRECT];B[ll]C[CORRECT]))",
          category: "other",
          move_number: 56,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P12\\":[\\"P12\\",\\"N11\\",\\"O10\\",\\"N12\\",\\"M8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435486/kd8ufsx8vi2ikfihc2je.png",
          suspended: false,
          createdAt: "2023-12-13T02:44:47.273000+00:00",
          updatedAt: "2023-12-13T02:44:47.273000+00:00",
        },
        {
          sgf_id: 36,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1800]OT[5x30 byo-yomi]PW[goperaw]PB[akira74]WR[3d]BR[1k]DT[2023-11-16]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[W+Resign]PL[W]AB[or][pr][qr][pq][kp][io][lo][mo][no][po][cn][fn][in][qn][fm][qm][rm][kl][ll][ql][ek][lk][nk][qk][cj][gj][hj][nj][oj][pj][qj][gi][ii][ji][li][ni][ch][ih][jh][lh][mh][ph][rh][gg][ig][lg][pg][gf][jf][of][pf][ge][he][ie][je][ke][pe][hd][jd][nd][fc][ic][jc][lc][oc][kb]AW[qs][rr][qq][np][qp][rp][qo][so][kn][mn][on][pn][rn][hm][im][km][mm][fl][gl][jl][ol][pl][kk][rk][rj][di][fi][hi][mi][oi][pi][qi][ri][eh][fh][gh][hh][nh][oh][eg][fg][hg][jg][kg][mg][og][hf][if][kf][lf][nf][fe][me][oe][cd][fd][gd][kd][ld][md][dc][gc][hc][kc][nc][lb][mb](;W[el]C[Incorrect - This was the actual move played in the game!])(;W[fj]C[CORRECT];B[fk]C[CORRECT];W[gk]C[CORRECT];B[ij]C[CORRECT];W[kh]C[CORRECT];B[ki]C[CORRECT];W[el]C[CORRECT]))",
          category: "other",
          move_number: 137,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F10\\":[\\"F10\\",\\"F9\\",\\"G9\\",\\"J10\\",\\"L12\\",\\"L11\\",\\"E8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435518/gvleujuhjdx307ikgftc.png",
          suspended: false,
          createdAt: "2023-12-13T02:45:18.883000+00:00",
          updatedAt: "2023-12-13T02:45:18.883000+00:00",
        },
        {
          sgf_id: 36,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1800]OT[5x30 byo-yomi]PW[goperaw]PB[akira74]WR[3d]BR[1k]DT[2023-11-16]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[W+Resign]PL[B]AB[er][fr][gr][or][pr][qr][hq][iq][jq][pq][cp][ep][kp][do][go][io][ko][lo][mo][no][po][cn][en][fn][hn][in][jn][qn][fm][gm][qm][rm][kl][ll][ql][dk][ek][fk][jk][lk][nk][qk][cj][gj][hj][jj][nj][oj][pj][qj][ci][gi][ii][ji][li][ni][ch][ih][jh][lh][mh][ph][qh][rh][gg][ig][lg][pg][qg][cf][gf][jf][of][pf][rf][ge][he][ie][je][ke][pe][hd][jd][nd][od][qd][rd][fc][ic][jc][lc][oc][ib][kb][rb][ja][la][oa]AW[qs][rr][cq][dq][eq][fq][gq][qq][gp][hp][ip][jp][np][qp][rp][eo][ho][jo][qo][so][dn][kn][mn][on][pn][rn][dm][hm][im][jm][km][mm][el][fl][gl][hl][jl][ol][pl][gk][ik][kk][rk][fj][ij][rj][di][fi][hi][mi][oi][pi][qi][ri][si][eh][fh][gh][hh][nh][oh][sh][eg][fg][hg][jg][kg][mg][og][rg][sg][hf][if][kf][lf][nf][fe][me][ne][oe][cd][fd][gd][kd][ld][md][dc][gc][hc][kc][nc][pc][qc][rc][lb][mb][nb][ob][qb][pa][ra](;B[gn]C[Incorrect - This was the actual move played in the game!])(;B[cm]C[CORRECT];W[bp]C[CORRECT];B[bo]C[CORRECT];W[oo]C[CORRECT];B[op]C[CORRECT]))",
          category: "other",
          move_number: 212,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C7\\":[\\"C7\\",\\"B4\\",\\"B5\\",\\"P5\\",\\"P4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435541/ow8yrrml5n3r2bijp9is.png",
          suspended: false,
          createdAt: "2023-12-13T02:45:41.446000+00:00",
          updatedAt: "2023-12-13T02:45:41.446000+00:00",
        },
        {
          sgf_id: 117,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-26]PC[OGS: https://online-go.com/game/24978029]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[BorisD]PW[r7tc]BR[6k]WR[1d]TM[180]OT[3x30 byo-yomi]RE[W+R]SZ[9]KM[5.5]RU[Chinese]PL[B]AB[ci][di][bh][eh][bg][dg][eg][bf][cf][de][ee][fd][bb][db]AW[fh][fg][df][ef][ff][be][ce][fe][bd][dd][bc][dc][cb](;B[ed]C[Incorrect - This was the actual move played in the game!])(;B[gc]C[CORRECT];W[he]C[CORRECT];B[eb]C[CORRECT];W[hc]C[CORRECT];B[hb]C[CORRECT];W[gd]C[CORRECT]))",
          category: "other",
          move_number: 33,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"G7\\":[\\"G7\\",\\"H5\\",\\"E8\\",\\"H7\\",\\"H8\\",\\"G6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435614/l0oidne3vepuernflejp.png",
          suspended: false,
          createdAt: "2023-12-13T02:46:55.284000+00:00",
          updatedAt: "2023-12-13T02:46:55.284000+00:00",
        },
        {
          sgf_id: 83,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-07]PC[OGS: https://online-go.com/game/58681937]GN[Gra towarzyska]PB[konrad.wodnik87]PW[JosefineTemrell]BR[22k]WR[16k]TM[0]OT[150 simple]RE[B+28.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[ir][bq][cq][iq][jq][kq][lq][nq][pq][qq][cp][co][cn][jn][cm][em][fm][gm][jm][km][mm][cl][gl][ml][ql][ck][fk][mk][cj][ej][fj][mj][qj][ci][fi][mi][fh][mh][qh][bg][cg][gg][hg][ig][jg][ng][rg][ff][if][kf][nf][rf][fe][ge][he][le][ne][re][hd][jd][kd][ld][md][qd][rd][rc]AW[br][cr][hr][dq][gq][hq][dp][ip][jp][kp][pp][qp][do][ko][qo][dn][kn][mn][dm][nm][pm][dl][el][fl][nl][pl][dk][ek][nk][dj][nj][pj][di][ei][ni][oi][eh][nh][eg][fg][og][qg][bf][cf][df][jf][of][qf][ee][ie][je][ke][qe][dd][fd][gd][id][nd][pd][hc][ic][jc][oc][qc][pb](;B[jo]C[Incorrect - This was the actual move played in the game!])(;B[qi]C[CORRECT];W[oq]C[CORRECT];B[or]C[CORRECT])(;B[qk]C[CORRECT];W[qi]C[CORRECT];B[ph]C[CORRECT];W[ri]C[CORRECT])(;B[ph]C[CORRECT];W[qi]C[CORRECT];B[rj]C[CORRECT])(;B[kb]C[CORRECT];W[qk]C[CORRECT];B[rj]C[CORRECT];W[qi]C[CORRECT])(;B[af]C[CORRECT];W[ae]C[CORRECT];B[ag]C[CORRECT])(;B[rk]C[CORRECT];W[lb]C[CORRECT];B[mb]C[CORRECT])(;B[kc]C[CORRECT];W[qk]C[CORRECT]))",
          category: "other",
          move_number: 41,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q18\\":[\\"Q18\\",\\"O3\\",\\"O17\\",\\"O16\\",\\"P18\\",\\"N15\\",\\"O15\\"],\\"D3\\":[\\"D3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435696/c3kshdhb9wtalg3cmh53.png",
          suspended: false,
          createdAt: "2023-12-13T02:48:16.645000+00:00",
          updatedAt: "2023-12-13T02:48:16.645000+00:00",
        },
        {
          sgf_id: 83,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-07]PC[OGS: https://online-go.com/game/58681937]GN[Gra towarzyska]PB[konrad.wodnik87]PW[JosefineTemrell]BR[22k]WR[16k]TM[0]OT[150 simple]RE[B+28.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[ir][bq][cq][iq][jq][kq][lq][nq][pq][qq][cp][co][cn][cm][em][fm][gm][jm][km][mm][cl][gl][ml][ql][ck][fk][mk][cj][ej][fj][qj][ci][fi][mi][fh][mh][qh][bg][cg][gg][hg][ig][jg][ng][rg][ff][if][nf][rf][fe][ge][he][re][hd][jd][kd][ld][md][qd][rd][rc]AW[br][cr][hr][dq][gq][hq][dp][ip][jp][kp][pp][qp][do][qo][dn][kn][mn][dm][nm][pm][dl][el][fl][nl][pl][dk][ek][dj][pj][di][ei][ni][oi][eh][nh][eg][fg][og][qg][bf][cf][df][jf][of][qf][ee][ie][je][qe][dd][fd][gd][id][pd][hc][jc][oc][qc][pb](;W[nk]C[Incorrect - This was the actual move played in the game!])(;W[lf]C[CORRECT];B[mf]C[CORRECT];W[lg]C[CORRECT];B[kf]C[CORRECT];W[ke]C[CORRECT];B[le]C[CORRECT];W[kg]C[CORRECT];B[kh]C[CORRECT]))",
          category: "other",
          move_number: 99,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N3\\":[\\"N3\\",\\"M14\\",\\"L14\\",\\"L15\\",\\"L13\\"],\\"G17\\":[\\"G17\\",\\"F17\\",\\"G18\\",\\"H18\\"],\\"E17\\":[\\"E17\\",\\"M14\\",\\"L14\\",\\"L15\\"],\\"O3\\":[\\"O3\\",\\"M14\\",\\"L14\\",\\"L15\\"],\\"O4\\":[\\"O4\\",\\"M14\\",\\"L14\\"],\\"N4\\":[\\"N4\\",\\"M14\\",\\"L14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435710/tu95sruyomsrvbjfgxjc.png",
          suspended: false,
          createdAt: "2023-12-13T02:48:31.514000+00:00",
          updatedAt: "2023-12-13T02:48:31.514000+00:00",
        },
        {
          sgf_id: 83,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-07]PC[OGS: https://online-go.com/game/58681937]GN[Gra towarzyska]PB[konrad.wodnik87]PW[JosefineTemrell]BR[22k]WR[16k]TM[0]OT[150 simple]RE[B+28.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[is][ir][aq][bq][cq][iq][jq][kq][lq][mq][nq][oq][pq][qq][rq][sq][cp][np][co][jo][mo][no][cn][en][in][jn][nn][cm][em][fm][gm][hm][jm][km][mm][qm][rm][sm][cl][gl][ll][ml][ql][ck][fk][hk][ik][mk][qk][cj][ej][fj][ij][jj][kj][mj][qj][bi][ci][fi][gi][mi][qi][bh][fh][gh][mh][qh][rh][ag][bg][cg][dg][gg][hg][ig][jg][kg][lg][ng][rg][af][ff][if][kf][mf][nf][rf][ae][fe][ge][he][le][ne][re][hd][jd][kd][ld][md][qd][rd][kc][mc][nc][rc][kb][mb][qb][rb][la][ma][ra]AW[hs][ar][br][cr][hr][dq][gq][hq][dp][ip][jp][kp][lp][mp][op][pp][qp][rp][sp][do][eo][io][ko][oo][qo][dn][fn][gn][hn][kn][ln][mn][on][qn][rn][sn][dm][lm][nm][pm][dl][el][fl][nl][pl][dk][ek][gk][nk][pk][dj][gj][hj][lj][nj][pj][di][ei][hi][ii][ji][ki][ni][oi][pi][ch][dh][eh][lh][nh][ph][eg][fg][og][qg][bf][cf][df][ef][jf][of][qf][be][ee][ie][je][ke][oe][qe][dd][fd][gd][id][nd][od][pd][hc][ic][jc][oc][pc][qc][jb][nb][pb][ja][ka][na][pa][qa](;B[li]C[Incorrect - This was the actual move played in the game!])(;B[gc]C[CORRECT];W[fc]C[CORRECT];B[gb]C[CORRECT];W[hb]C[CORRECT];B[db]C[CORRECT])(;B[fb]C[CORRECT];W[gb]C[CORRECT];B[bc]C[CORRECT]))",
          category: "other",
          move_number: 126,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M14\\":[\\"M14\\",\\"N14\\",\\"R9\\",\\"S10\\",\\"M13\\",\\"L14\\",\\"L15\\"],\\"R9\\":[\\"R9\\",\\"L14\\",\\"R11\\",\\"S11\\",\\"S10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435732/vhetm3vdrfkxqjysttln.png",
          suspended: false,
          createdAt: "2023-12-13T02:48:52.496000+00:00",
          updatedAt: "2023-12-13T02:48:52.496000+00:00",
        },
        {
          sgf_id: 139,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[\u8001l\u516d]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[W]AB[qs][qr][oq][rq][np][pp][qp][rp][qo][qe][dd][pd][rd]AW[rs][rr][sr][qq][sq][sp][ro][so][qn][rm][qf][re](;W[se]C[Incorrect - This was the actual move played in the game!])(;W[pr]C[CORRECT];B[dp]C[CORRECT];W[ps]C[CORRECT])(;W[pf]C[CORRECT];B[dp]C[CORRECT];W[pe]C[CORRECT];B[qd]C[CORRECT])(;W[cp]C[CORRECT];B[pf]C[CORRECT];W[pg]C[CORRECT])(;W[dp]C[CORRECT];B[pf]C[CORRECT];W[pg]C[CORRECT])(;W[dq]C[CORRECT];B[pf]C[CORRECT];W[pr]C[CORRECT])(;W[pe]C[CORRECT];B[qd]C[CORRECT];W[dp]C[CORRECT])(;W[rf]C[CORRECT];B[dp]C[CORRECT];W[nc]C[CORRECT]))",
          category: "other",
          move_number: 26,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q2\\":[\\"Q2\\",\\"D4\\",\\"Q1\\"],\\"Q14\\":[\\"Q14\\",\\"D4\\",\\"Q15\\",\\"R16\\"],\\"C4\\":[\\"C4\\",\\"Q14\\",\\"Q13\\"],\\"D4\\":[\\"D4\\",\\"Q14\\",\\"Q13\\"],\\"D3\\":[\\"D3\\",\\"Q14\\",\\"Q2\\"],\\"Q15\\":[\\"Q15\\",\\"R16\\",\\"D4\\"],\\"S14\\":[\\"S14\\",\\"D4\\",\\"O17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435795/pjkvi9pu1lbaylzke9ke.png",
          suspended: false,
          createdAt: "2023-12-13T02:49:55.635000+00:00",
          updatedAt: "2023-12-13T02:49:55.635000+00:00",
        },
        {
          sgf_id: 139,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[\u8001l\u516d]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[W]AB[qs][hr][qr][fq][gq][oq][rq][dp][ep][np][pp][qp][rp][bo][co][qo][ph][pg][pf][qe][dd][pd][rd]AW[rs][fr][gr][rr][sr][dq][eq][qq][sq][bp][cp][sp][ro][so][qn][rm][qi][qh][qg][qf][re][se](;W[er]C[Incorrect - This was the actual move played in the game!])(;W[hq]C[CORRECT];B[cq]C[CORRECT];W[fp]C[CORRECT];B[gp]C[CORRECT];W[fo]C[CORRECT];B[er]C[CORRECT];W[dr]C[CORRECT]))",
          category: "other",
          move_number: 46,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H3\\":[\\"H3\\",\\"C3\\",\\"F4\\",\\"G4\\",\\"F5\\",\\"E2\\",\\"D2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435818/mlvw0myggda5brhzww7d.png",
          suspended: false,
          createdAt: "2023-12-13T02:50:18.655000+00:00",
          updatedAt: "2023-12-13T02:50:18.655000+00:00",
        },
        {
          sgf_id: 139,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[\u8001l\u516d]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[W]AB[qs][hr][ir][qr][fq][gq][hq][oq][pq][rq][ap][dp][ep][hp][jp][mp][np][pp][qp][rp][ao][bo][co][jo][ko][lo][po][qo][en][mn][on][om][pm][qm][ml][nl][pl][lk][qk][jj][lj][nj][li][ni][oi][mh][ph][mg][pg][pf][qe][dd][pd][rd]AW[rs][er][fr][gr][jr][kr][nr][or][rr][sr][aq][bq][dq][eq][iq][jq][lq][mq][sq][bp][cp][kp][lp][sp][ro][so][pn][qn][rn][rm][kl][ll][ol][ql][rl][mk][nk][ok][pk][rk][mj][oj][pj][mi][pi][qi][lh][qh][lg][qg][qf][re][se](;W[jl]C[Incorrect - This was the actual move played in the game!])(;W[mf]C[CORRECT];B[ng]C[CORRECT];W[nf]C[CORRECT];B[of]C[CORRECT];W[ii]C[CORRECT]))",
          category: "other",
          move_number: 16,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q3\\":[\\"Q3\\",\\"S1\\",\\"T2\\",\\"Q2\\",\\"P3\\",\\"P4\\",\\"O2\\",\\"Q6\\",\\"R7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435990/tdi6jbbsqrmx18a2cvoi.png",
          suspended: false,
          createdAt: "2023-12-13T02:53:11.013000+00:00",
          updatedAt: "2023-12-13T02:53:11.013000+00:00",
        },
        {
          sgf_id: 125,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[6.50]TM[60]OT[5x15 byo-yomi]PW[WeiqiLover]PB[bogazici]WR[1k]BR[1k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]PL[W]AB[cp][dp][hp][pp][eo][bl][cl][fl][gl][cj][ej][bg][dg][af][cf][be][ce][de][ad][bd][ed]AW[cn][en][gn][in][cm][em][fk][bh][ch][eh][cg][df][ef][ee][cd][dd][fd][pd][bc][cb](;W[ek]C[Incorrect - This was the actual move played in the game!])(;W[el]C[CORRECT];B[ek]C[CORRECT];W[gk]C[CORRECT];B[hl]C[CORRECT];W[fi]C[CORRECT]))",
          category: "other",
          move_number: 66,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H11\\":[\\"H11\\",\\"K7\\",\\"K6\\",\\"G11\\",\\"H13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449662/yzvyqs9c3jocxjv2luct.png",
          suspended: false,
          createdAt: "2023-12-13T06:41:03.147000+00:00",
          updatedAt: "2023-12-13T06:41:03.147000+00:00",
        },
        {
          sgf_id: 139,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[\u8001l\u516d]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[W]AB[qs][hr][ir][qr][fq][gq][hq][oq][pq][rq][ap][dp][ep][hp][jp][mp][np][pp][qp][rp][ao][bo][co][jo][ko][lo][po][qo][en][mn][on][om][pm][qm][ml][nl][pl][lk][qk][jj][lj][nj][li][ni][oi][dh][jh][mh][ph][dg][hg][mg][pg][ef][hf][mf][pf][ce][ee][he][me][qe][bd][dd][ed][fd][id][jd][md][pd][rd][ec][nc][eb][fb][nb][la][ma][na]AW[rs][er][fr][gr][jr][kr][nr][or][rr][sr][aq][bq][dq][eq][iq][jq][lq][mq][sq][bp][cp][kp][lp][sp][ro][so][pn][qn][rn][rm][jl][kl][ll][ol][ql][rl][mk][nk][ok][pk][rk][mj][oj][pj][mi][pi][qi][ch][lh][qh][cg][lg][qg][cf][ff][lf][qf][be][fe][ge][ie][je][le][re][se][gd][hd][ld][fc][gc][ic][jc][kc][mc][gb][lb][mb][ka](;W[ae]C[Incorrect - This was the actual move played in the game!])(;W[ck]C[CORRECT];B[ek]C[CORRECT];W[gh]C[CORRECT];B[gi]C[CORRECT])(;W[cj]C[CORRECT];B[ej]C[CORRECT];W[gh]C[CORRECT])(;W[ii]C[CORRECT];B[ij]C[CORRECT];W[ck]C[CORRECT])(;W[hi]C[CORRECT];B[hj]C[CORRECT]))",
          category: "other",
          move_number: 148,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H10\\":[\\"H10\\",\\"H12\\",\\"J11\\",\\"K11\\"],\\"H11\\":[\\"H11\\",\\"H10\\",\\"J10\\",\\"J11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702435999/idbadyntjkavled6mkpk.png",
          suspended: false,
          createdAt: "2023-12-13T02:53:20.070000+00:00",
          updatedAt: "2023-12-13T02:53:20.070000+00:00",
        },
        {
          sgf_id: 139,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[\u8001l\u516d]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[qs][hr][ir][qr][fq][gq][hq][oq][pq][rq][ap][dp][ep][hp][jp][mp][np][pp][qp][rp][ao][bo][co][jo][ko][lo][po][qo][en][mn][on][om][pm][qm][bl][il][ml][nl][pl][bk][dk][ek][hk][lk][qk][cj][ij][jj][lj][nj][ci][ei][fi][gi][li][ni][oi][dh][jh][mh][ph][dg][gg][hg][ig][mg][pg][ef][hf][mf][pf][ce][ee][he][me][qe][ad][bd][dd][ed][fd][id][jd][md][pd][rd][ec][nc][eb][fb][nb][la][ma][na]AW[rs][er][fr][gr][jr][kr][nr][or][rr][sr][aq][bq][dq][eq][iq][jq][lq][mq][sq][bp][cp][kp][lp][sp][ro][so][pn][qn][rn][bm][rm][cl][dl][jl][kl][ll][ol][ql][rl][ck][ik][jk][mk][nk][ok][pk][rk][bj][hj][mj][oj][pj][bi][hi][mi][pi][qi][ch][fh][gh][hh][lh][qh][cg][fg][lg][qg][bf][cf][ff][lf][qf][ae][be][fe][ge][ie][je][le][re][se][gd][hd][ld][fc][gc][ic][jc][kc][mc][gb][lb][mb][ka](;B[kf]C[Incorrect - This was the actual move played in the game!])(;B[im]C[CORRECT];W[ji]C[CORRECT];B[ii]C[CORRECT];W[ih]C[CORRECT];B[ki]C[CORRECT]))",
          category: "other",
          move_number: 110,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N14\\":[\\"N14\\",\\"O13\\",\\"O14\\",\\"P14\\",\\"J11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436007/tyk5d3kp6szbcuyoicpt.png",
          suspended: false,
          createdAt: "2023-12-13T02:53:28.256000+00:00",
          updatedAt: "2023-12-13T02:53:28.256000+00:00",
        },
        {
          sgf_id: 139,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[\u8001l\u516d]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[qs][hr][ir][qr][fq][gq][hq][oq][pq][rq][ap][dp][ep][hp][jp][mp][np][pp][qp][rp][ao][bo][co][jo][ko][lo][po][qo][en][on][om][pm][qm][ml][nl][pl][lk][qk][lj][nj][li][ni][oi][mh][ph][mg][pg][pf][qe][dd][pd][rd]AW[rs][er][fr][gr][jr][kr][nr][or][rr][sr][aq][bq][dq][eq][iq][jq][lq][mq][sq][bp][cp][kp][lp][sp][ro][so][pn][qn][rn][rm][ll][ol][ql][rl][mk][nk][ok][pk][rk][mj][oj][pj][mi][pi][qi][lh][qh][lg][qg][qf][re][se](;B[mn]C[Incorrect - This was the actual move played in the game!])(;B[lf]C[CORRECT];W[mf]C[CORRECT];B[me]C[CORRECT];W[nf]C[CORRECT])(;B[cr]C[CORRECT];W[cq]C[CORRECT];B[lf]C[CORRECT];W[mf]C[CORRECT]))",
          category: "other",
          move_number: 70,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C13\\":[\\"C13\\",\\"D11\\",\\"E12\\",\\"D12\\"],\\"D12\\":[\\"D12\\",\\"C14\\",\\"L17\\",\\"F11\\"],\\"C12\\":[\\"C12\\",\\"C14\\",\\"L17\\"],\\"R17\\":[\\"R17\\",\\"R16\\",\\"C13\\"],\\"O17\\":[\\"O17\\",\\"D12\\",\\"R17\\"],\\"D6\\":[\\"D6\\",\\"D7\\"],\\"P15\\":[\\"P15\\",\\"Q15\\"],\\"L17\\":[\\"L17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436017/sc1duhjl7yev0mftmfr3.png",
          suspended: false,
          createdAt: "2023-12-13T02:53:38.305000+00:00",
          updatedAt: "2023-12-13T02:53:38.305000+00:00",
        },
        {
          sgf_id: 139,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-05]PB[quiteso]PW[\u8001l\u516d]BR[13\u7ea7]WR[13\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[is][js][os][ps][qs][hr][ir][qr][fq][gq][hq][oq][pq][qq][rq][ap][dp][ep][fp][hp][ip][jp][mp][np][op][pp][qp][rp][ao][bo][co][eo][go][jo][ko][lo][po][qo][bn][dn][en][kn][mn][on][cm][dm][em][fm][lm][mm][om][pm][qm][gl][ml][nl][pl][dk][ek][fk][gk][hk][lk][qk][cj][gj][ij][jj][lj][nj][ci][ei][fi][gi][ji][li][ni][oi][dh][eh][ih][jh][kh][mh][ph][dg][eg][gg][hg][ig][mg][pg][ef][hf][if][jf][kf][mf][pf][ce][ee][he][me][oe][qe][ad][bd][cd][dd][ed][fd][md][nd][pd][qd][rd][sd][ec][nc][eb][fb][nb][ob][fa][ga][ha][la][ma][na][pa][qa][ra]AW[gs][ks][ns][rs][cr][er][fr][gr][jr][kr][lr][nr][or][pr][rr][sr][aq][bq][dq][eq][iq][jq][lq][mq][nq][sq][bp][cp][kp][lp][sp][fo][ho][ro][so][fn][gn][hn][in][jn][pn][qn][rn][am][bm][gm][im][km][rm][al][cl][dl][el][fl][hl][jl][kl][ll][ol][ql][rl][ak][bk][ck][ik][jk][kk][mk][nk][ok][pk][rk][bj][hj][mj][oj][pj][bi][hi][ii][mi][pi][qi][bh][ch][fh][gh][hh][lh][qh][cg][fg][jg][kg][lg][qg][bf][cf][df][ff][lf][qf][rf][ae][be][de][fe][ge][ie][je][le][re][se][gd][hd][kd][ld][od][fc][gc][ic][jc][kc][mc][oc][pc][qc][rc][sc][gb][hb][lb][mb][pb][qb][ia][ka](;B[nh]C[Incorrect - This was the actual move played in the game!])(;B[pe]C[CORRECT];W[gp]C[CORRECT];B[jb]C[CORRECT];W[kb]C[CORRECT];B[go]C[CORRECT];W[oh]C[CORRECT]))",
          category: "other",
          move_number: 277,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q15\\":[\\"Q15\\",\\"G4\\",\\"K18\\",\\"L18\\",\\"G5\\",\\"P12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436024/lrm7bnkebccjht3u7vks.png",
          suspended: false,
          createdAt: "2023-12-13T02:53:44.618000+00:00",
          updatedAt: "2023-12-13T02:53:44.618000+00:00",
        },
        {
          sgf_id: 145,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-04]PB[jonwick01]PW[\u5929\u6daf010269]BR[4\u7ea7]WR[3\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+8.50]TM[60]CA[UTF-8]PL[B]AB[is][js][gr][ir][kr][rr][jq][lq][sq][bp][cp][ep][jp][rp][co][do][eo][fo][io][jo][ro][gn][hn][rn][fm][lm][qm][cl][dl][pl][bk][ok][qk][cj][oj][ce][qd][dc][jc][oc]AW[hs][ms][rs][fr][hr][lr][nr][pr][qr][cq][dq][eq][hq][iq][mq][pq][rq][dp][fp][gp][ip][lp][pp][qp][ao][bo][go][ho][mo][qo][bn][cn][dn][qn][am][cm][nm][pm][bl][ol][ck][nk][ch](;B[sr]C[Incorrect - This was the actual move played in the game!])(;B[nj]C[CORRECT];W[rd]C[CORRECT];B[rc]C[CORRECT])(;B[if]C[CORRECT];W[nj]C[CORRECT];B[oi]C[CORRECT])(;B[jf]C[CORRECT];W[nj]C[CORRECT];B[ni]C[CORRECT])(;B[ml]C[CORRECT];W[nl]C[CORRECT];B[nj]C[CORRECT])(;B[dk]C[CORRECT];W[nj]C[CORRECT];B[oi]C[CORRECT])(;B[gg]C[CORRECT];W[nj]C[CORRECT])(;B[hg]C[CORRECT];W[nj]C[CORRECT];B[oi]C[CORRECT])(;B[ig]C[CORRECT];W[rl]C[CORRECT])(;B[hf]C[CORRECT];W[nj]C[CORRECT])(;B[gh]C[CORRECT];W[nj]C[CORRECT]))",
          category: "other",
          move_number: 87,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O10\\":[\\"O10\\",\\"S16\\",\\"S17\\"],\\"J14\\":[\\"J14\\",\\"O10\\",\\"P11\\"],\\"K14\\":[\\"K14\\",\\"O10\\",\\"O11\\"],\\"N8\\":[\\"N8\\",\\"O8\\",\\"O10\\"],\\"D9\\":[\\"D9\\",\\"O10\\",\\"P11\\"],\\"G13\\":[\\"G13\\",\\"O10\\"],\\"H13\\":[\\"H13\\",\\"O10\\",\\"P11\\"],\\"J13\\":[\\"J13\\",\\"S8\\"],\\"H14\\":[\\"H14\\",\\"O10\\"],\\"G12\\":[\\"G12\\",\\"O10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436048/yhprqjdcar8coywfrszq.png",
          suspended: false,
          createdAt: "2023-12-13T02:54:08.722000+00:00",
          updatedAt: "2023-12-13T02:54:08.722000+00:00",
        },
        {
          sgf_id: 145,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-04-04]PB[jonwick01]PW[\u5929\u6daf010269]BR[4\u7ea7]WR[3\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+8.50]TM[60]CA[UTF-8]PL[W]AB[cp][co][do][ce][qd][dc][jc][oc]AW[cq][dq][dp][pp][dn][ck][ch](;W[cn]C[Incorrect - This was the actual move played in the game!])(;W[eo]C[CORRECT];B[qq]C[CORRECT];W[qp]C[CORRECT];B[pq]C[CORRECT];W[nq]C[CORRECT];B[oq]C[CORRECT]))",
          category: "other",
          move_number: 16,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E5\\":[\\"E5\\",\\"R3\\",\\"R4\\",\\"Q3\\",\\"O3\\",\\"P3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436059/sh2qmfqmfm1p7fdrnd40.png",
          suspended: false,
          createdAt: "2023-12-13T02:54:19.757000+00:00",
          updatedAt: "2023-12-13T02:54:19.757000+00:00",
        },
        {
          sgf_id: 126,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u65e0\u5fc3\u7231\u68cb]PW[\u9646\u627f\u8f69]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[pq][po][qn][pm][ph][mf][ke][ne][ed][fd][kd][nd][pd][qd][ic][qc][eb][jb]AW[dp][pn][qi][qh][pg][qf][ee][dd][ld][md][cc][kc][nc][oc][pc][kb][lb](;W[jc]C[Incorrect - This was the actual move played in the game!])(;W[dh]C[CORRECT];B[de]C[CORRECT];W[ce]C[CORRECT];B[df]C[CORRECT];W[cf]C[CORRECT];B[dc]C[CORRECT])(;W[dg]C[CORRECT];B[fq]C[CORRECT];W[cn]C[CORRECT];B[dq]C[CORRECT])(;W[df]C[CORRECT];B[dc]C[CORRECT];W[db]C[CORRECT];B[ec]C[CORRECT])(;W[on]C[CORRECT];B[ql]C[CORRECT];W[fq]C[CORRECT])(;W[fq]C[CORRECT];B[de]C[CORRECT];W[ce]C[CORRECT])(;W[fe]C[CORRECT];B[de]C[CORRECT];W[df]C[CORRECT];B[ce]C[CORRECT];W[cf]C[CORRECT])(;W[cn]C[CORRECT];B[de]C[CORRECT];W[df]C[CORRECT];B[ce]C[CORRECT])(;W[gq]C[CORRECT];B[de]C[CORRECT])(;W[jq]C[CORRECT];B[de]C[CORRECT];W[ce]C[CORRECT])(;W[db]C[CORRECT]))",
          category: "other",
          move_number: 139,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K3\\":[\\"K3\\",\\"K5\\",\\"H3\\",\\"H2\\",\\"J2\\",\\"E3\\"],\\"H3\\":[\\"H3\\",\\"K5\\",\\"K3\\",\\"H2\\",\\"J2\\",\\"E3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436154/woikpnq4apqjmcjhrbae.png",
          suspended: false,
          createdAt: "2023-12-13T02:55:54.477000+00:00",
          updatedAt: "2023-12-13T02:55:54.477000+00:00",
        },
        {
          sgf_id: 126,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u65e0\u5fc3\u7231\u68cb]PW[\u9646\u627f\u8f69]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[ps][cr][dr][or][qr][cq][fq][gq][kq][pq][cp][op][pp][ko][po][cn][in][kn][qn][im][lm][pm][ll][ol][ql][ok][nj][oi][ph][dg][df][mf][de][ke][ne][re][ed][fd][kd][nd][pd][qd][dc][ic][qc][cb][eb][jb]AW[er][fr][gr][nr][dq][iq][nq][oq][dp][np][do][io][lo][oo][hn][ln][on][pn][mm][om][nl][mk][nk][mj][qi][ch][dh][nh][qh][pg][cf][qf][ce][ee][cd][dd][id][ld][md][cc][jc][kc][nc][oc][pc][kb][lb](;B[rf]C[Incorrect - This was the actual move played in the game!])(;B[og]C[CORRECT];W[oh]C[CORRECT];B[pi]C[CORRECT];W[rk]C[CORRECT])(;B[oh]C[CORRECT];W[og]C[CORRECT];B[ng]C[CORRECT];W[pj]C[CORRECT];B[oj]C[CORRECT])(;B[mi]C[CORRECT];W[kj]C[CORRECT];B[oh]C[CORRECT]))",
          category: "other",
          move_number: 79,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N6\\":[\\"N6\\",\\"P5\\",\\"Q4\\",\\"Q8\\",\\"R7\\",\\"N5\\",\\"P8\\",\\"O8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436164/n6gqvvjen7oyzho591nr.png",
          suspended: false,
          createdAt: "2023-12-13T02:56:04.573000+00:00",
          updatedAt: "2023-12-13T02:56:04.573000+00:00",
        },
        {
          sgf_id: 126,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u65e0\u5fc3\u7231\u68cb]PW[\u9646\u627f\u8f69]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[ps][cr][dr][or][qr][cq][fq][gq][hq][kq][pq][cp][ip][jp][op][pp][go][ho][jo][ko][po][cn][in][kn][qn][rn][bm][im][km][lm][sm][cl][dl][el][gl][hl][il][kl][ll][ol][ql][rl][bk][ek][gk][kk][ok][pk][bj][fj][kj][nj][oj][qj][bi][ei][fi][ji][mi][oi][pi][bh][hh][ih][jh][kh][lh][mh][ph][cg][dg][fg][hg][df][ff][mf][pf][rf][de][ie][ke][ne][oe][qe][re][ed][fd][hd][kd][nd][pd][qd][dc][qc][bb][cb][eb][jb]AW[er][fr][gr][hr][nr][dq][iq][jq][nq][oq][dp][hp][kp][lp][np][bo][co][do][fo][lo][oo][hn][jn][ln][on][pn][cm][dm][em][fm][gm][jm][mm][om][pm][qm][rm][fl][jl][nl][pl][ck][fk][jk][mk][nk][cj][gj][ij][jj][lj][mj][gi][hi][ki][li][ni][qi][ch][dh][eh][fh][gh][nh][oh][qh][bg][ig][lg][mg][pg][qg][af][cf][lf][nf][of][qf][ce][ee][cd][dd][id][ld][md][od][cc][hc][jc][kc][nc][oc][pc][ib][kb][lb](;B[gg]C[Incorrect - This was the actual move played in the game!])(;B[bp]C[CORRECT];W[bn]C[CORRECT];B[ar]C[CORRECT];W[am]C[CORRECT];B[bl]C[CORRECT]))",
          category: "other",
          move_number: 201,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B4\\":[\\"B4\\",\\"B6\\",\\"A2\\",\\"A7\\",\\"B8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436196/xpnil7fyoawrrdklful8.png",
          suspended: false,
          createdAt: "2023-12-13T02:56:37.375000+00:00",
          updatedAt: "2023-12-13T02:56:37.375000+00:00",
        },
        {
          sgf_id: 126,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u65e0\u5fc3\u7231\u68cb]PW[\u9646\u627f\u8f69]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[ps][cr][dr][or][qr][cq][fq][gq][kq][pq][cp][ip][jp][op][pp][ko][po][cn][in][kn][qn][rn][im][lm][sm][ll][ol][ql][rl][kk][ok][pk][kj][nj][oj][qj][ji][mi][oi][pi][jh][kh][lh][mh][ph][dg][df][mf][pf][rf][de][ke][ne][oe][qe][re][ed][fd][kd][nd][pd][qd][dc][ic][qc][cb][eb][jb]AW[er][fr][gr][nr][dq][iq][nq][oq][dp][hp][kp][lp][np][do][io][lo][oo][hn][ln][on][pn][mm][om][pm][qm][rm][nl][pl][mk][nk][jj][lj][mj][ki][li][ni][qi][ch][dh][nh][oh][qh][lg][mg][pg][qg][cf][nf][of][qf][ce][ee][cd][dd][id][ld][md][od][cc][jc][kc][nc][oc][pc][kb][lb](;B[jo]C[Incorrect - This was the actual move played in the game!])(;B[jq]C[CORRECT];W[jo]C[CORRECT];B[hq]C[CORRECT];W[hr]C[CORRECT];B[ir]C[CORRECT];W[eq]C[CORRECT])(;B[hq]C[CORRECT];W[jo]C[CORRECT];B[jq]C[CORRECT];W[hr]C[CORRECT];B[ir]C[CORRECT];W[eq]C[CORRECT]))",
          category: "other",
          move_number: 97,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P13\\":[\\"P13\\",\\"P12\\",\\"Q11\\",\\"S9\\"],\\"P12\\":[\\"P12\\",\\"P13\\",\\"O13\\",\\"Q10\\",\\"P10\\"],\\"N11\\":[\\"N11\\",\\"L10\\",\\"P12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436210/ovdiwlrix1e8jhjwql3l.png",
          suspended: false,
          createdAt: "2023-12-13T02:56:50.566000+00:00",
          updatedAt: "2023-12-13T02:56:50.566000+00:00",
        },
        {
          sgf_id: 126,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u65e0\u5fc3\u7231\u68cb]PW[\u9646\u627f\u8f69]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[ps][cr][dr][or][qr][cq][fq][gq][kq][pq][cp][op][pp][ko][po][cn][in][kn][qn][rn][im][lm][sm][ll][ol][ql][rl][ok][pk][nj][oj][oi][pi][ph][dg][df][mf][rf][de][ke][ne][oe][re][ed][fd][kd][nd][pd][qd][dc][ic][qc][cb][eb][jb]AW[er][fr][gr][nr][dq][iq][nq][oq][dp][np][do][io][lo][oo][hn][ln][on][pn][mm][om][qm][rm][nl][pl][mk][nk][mj][ni][qi][ch][dh][nh][oh][qh][pg][cf][qf][ce][ee][pe][cd][dd][id][ld][md][od][cc][jc][kc][nc][oc][pc][kb][lb](;B[qe]C[Incorrect - This was the actual move played in the game!])(;B[lg]C[CORRECT];W[of]C[CORRECT];B[li]C[CORRECT])(;B[og]C[CORRECT];W[of]C[CORRECT];B[ng]C[CORRECT];W[mg]C[CORRECT];B[nf]C[CORRECT];W[lf]C[CORRECT];B[pf]C[CORRECT];W[co]C[CORRECT])(;B[li]C[CORRECT];W[mi]C[CORRECT];B[lg]C[CORRECT];W[kj]C[CORRECT])(;B[lh]C[CORRECT];W[li]C[CORRECT];B[og]C[CORRECT];W[of]C[CORRECT];B[ng]C[CORRECT])(;B[hm]C[CORRECT];W[gn]C[CORRECT];B[og]C[CORRECT];W[of]C[CORRECT])(;B[hq]C[CORRECT];W[hr]C[CORRECT]))",
          category: "other",
          move_number: 113,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M13\\":[\\"M13\\",\\"P14\\",\\"M11\\"],\\"P13\\":[\\"P13\\",\\"P14\\",\\"O13\\",\\"N13\\",\\"O14\\",\\"M14\\",\\"Q14\\",\\"C5\\"],\\"M11\\":[\\"M11\\",\\"N11\\",\\"M13\\",\\"L10\\"],\\"M12\\":[\\"M12\\",\\"M11\\",\\"P13\\",\\"P14\\",\\"O13\\"],\\"H7\\":[\\"H7\\",\\"G6\\",\\"P13\\",\\"P14\\"],\\"H3\\":[\\"H3\\",\\"H2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702436228/klarkma9xcgqtyj4p9pw.png",
          suspended: false,
          createdAt: "2023-12-13T02:57:09.124000+00:00",
          updatedAt: "2023-12-13T02:57:09.124000+00:00",
        },
        {
          sgf_id: 143,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-30]PB[jonwick01]PW[\u5c71\u91ce\u6e38\u4fa0]BR[4\u7ea7]WR[4\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.02]TM[60]CA[UTF-8]PL[B]AB[qr][sr][pq][qq][rp][ro][rn][pj][pi][qh][qg][qf][ce][gd][jd][pd][qd][dc][kc][lc][oc][ob]AW[os][nr][pr][gq][mq][oq][dp][pp][qp][qn][sn][qm][rm][oj][oi][ph][pg][pf][oe][md][od][mc][nc](;B[rs]C[Incorrect - This was the actual move played in the game!])(;B[fo]C[CORRECT];W[fp]C[CORRECT];B[cp]C[CORRECT];W[co]C[CORRECT];B[do]C[CORRECT])(;B[hl]C[CORRECT];W[qo]C[CORRECT];B[cn]C[CORRECT];W[rs]C[CORRECT];B[qs]C[CORRECT];W[so]C[CORRECT])(;B[cn]C[CORRECT];W[qo]C[CORRECT];B[cq]C[CORRECT];W[rs]C[CORRECT])(;B[hm]C[CORRECT];W[qo]C[CORRECT];B[cn]C[CORRECT];W[rs]C[CORRECT];B[qs]C[CORRECT];W[so]C[CORRECT])(;B[gm]C[CORRECT];W[qo]C[CORRECT];B[cn]C[CORRECT];W[rs]C[CORRECT])(;B[ok]C[CORRECT];W[qo]C[CORRECT])(;B[dj]C[CORRECT]))",
          category: "other",
          move_number: 39,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P4\\":[\\"P4\\",\\"P1\\",\\"Q5\\",\\"O4\\",\\"R5\\",\\"P6\\",\\"Q9\\",\\"P9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449015/zcum6gspunltv1lyc7wo.png",
          suspended: false,
          createdAt: "2023-12-13T06:30:16.059000+00:00",
          updatedAt: "2023-12-13T06:30:16.059000+00:00",
        },
        {
          sgf_id: 143,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-30]PB[jonwick01]PW[\u5c71\u91ce\u6e38\u4fa0]BR[4\u7ea7]WR[4\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.02]TM[60]CA[UTF-8]PL[W]AB[rs][qr][sr][pq][qq][bp][rp][bo][co][ro][bn][dn][fn][rn][dm][el][fl][gj][hj][pj][fi][ii][ji][pi][bh][ch][eh][fh][kh][qh][cg][dg][eg][ng][qg][ef][jf][qf][ce][gd][jd][pd][qd][dc][kc][lc][oc][ob]AW[os][nr][pr][bq][gq][mq][oq][ap][cp][dp][pp][qp][qo][qn][sn][cm][qm][rm][cl][dl][ek][fk][cj][fj][oj][bi][ci][di][ei][gi][hi][oi][dh][gh][ih][ph][fg][hg][ig][og][pg][hf][nf][pf][oe][md][od][mc][nc](;W[ff]C[Incorrect - This was the actual move played in the game!])(;W[gk]C[CORRECT];B[fp]C[CORRECT];W[fq]C[CORRECT];B[gp]C[CORRECT];W[ep]C[CORRECT];B[hm]C[CORRECT]))",
          category: "other",
          move_number: 97,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G9\\":[\\"G9\\",\\"F13\\",\\"E13\\",\\"F14\\",\\"D9\\",\\"E10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449050/pkhkh02bi5fos5hbf3t2.png",
          suspended: false,
          createdAt: "2023-12-13T06:30:51.084000+00:00",
          updatedAt: "2023-12-13T06:30:51.084000+00:00",
        },
        {
          sgf_id: 143,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-30]PB[jonwick01]PW[\u5c71\u91ce\u6e38\u4fa0]BR[4\u7ea7]WR[4\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.02]TM[60]CA[UTF-8]PL[W]AB[rs][qr][sr][pq][qq][bp][rp][bo][co][ro][bn][dn][fn][rn][dm][el][fl][gj][hj][pj][fi][ii][ji][pi][bh][ch][eh][fh][hh][kh][qh][cg][dg][ng][qg][jf][qf][ce][gd][jd][pd][qd][dc][kc][lc][oc][ob]AW[os][nr][pr][bq][gq][mq][oq][ap][cp][dp][pp][qp][qo][qn][sn][cm][qm][rm][cl][dl][ek][fk][cj][fj][oj][bi][ci][di][ei][gi][hi][oi][dh][gh][ih][ph][ig][og][pg][hf][nf][pf][oe][md][od][mc][nc](;W[hg]C[Incorrect - This was the actual move played in the game!])(;W[gg]C[CORRECT];B[ff]C[CORRECT];W[gl]C[CORRECT];B[ik]C[CORRECT];W[gm]C[CORRECT]))",
          category: "other",
          move_number: 118,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J4\\":[\\"J4\\",\\"G4\\",\\"G1\\",\\"K6\\",\\"H16\\"],\\"S3\\":[\\"S3\\",\\"T4\\",\\"J4\\",\\"G4\\",\\"G1\\"],\\"D18\\":[\\"D18\\",\\"F17\\",\\"C17\\"],\\"C17\\":[\\"C17\\",\\"F17\\"],\\"H16\\":[\\"H16\\",\\"G4\\"],\\"T4\\":[\\"T4\\",\\"S3\\",\\"J4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449065/n0avpk6dmjacmhurgfu0.png",
          suspended: false,
          createdAt: "2023-12-13T06:31:05.410000+00:00",
          updatedAt: "2023-12-13T06:31:05.410000+00:00",
        },
        {
          sgf_id: 143,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-30]PB[jonwick01]PW[\u5c71\u91ce\u6e38\u4fa0]BR[4\u7ea7]WR[4\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.02]TM[60]CA[UTF-8]PL[B]AB[rs][qr][sr][fq][pq][qq][bp][rp][bo][co][ro][bn][dn][fn][rn][dm][el][fl][gl][gk][gj][hj][pj][fi][ii][ji][pi][bh][ch][eh][fh][kh][qh][cg][dg][eg][ng][qg][ef][jf][qf][ce][fe][gd][jd][pd][qd][dc][kc][lc][oc][ob]AW[os][nr][pr][bq][eq][gq][mq][oq][ap][cp][dp][jp][pp][qp][qo][qn][sn][cm][qm][rm][cl][dl][dk][ek][fk][cj][fj][oj][bi][ci][di][ei][gi][hi][oi][dh][gh][ih][ph][fg][hg][ig][og][pg][ff][gf][hf][nf][pf][oe][md][od][mc][nc](;B[gr]C[Incorrect - This was the actual move played in the game!])(;B[fp]C[CORRECT];W[fr]C[CORRECT];B[bk]C[CORRECT];W[am]C[CORRECT]))",
          category: "other",
          move_number: 164,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M18\\":[\\"M18\\",\\"L18\\",\\"O18\\",\\"Q17\\"],\\"O18\\":[\\"O18\\",\\"M18\\",\\"R15\\"],\\"R15\\":[\\"R15\\",\\"Q15\\",\\"O18\\",\\"Q17\\"],\\"T9\\":[\\"T9\\",\\"N18\\",\\"O18\\",\\"O19\\",\\"Q17\\"],\\"D18\\":[\\"D18\\",\\"C17\\",\\"C18\\"],\\"S3\\":[\\"S3\\",\\"T4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449082/csfoydb6i2h8wbs7ptao.png",
          suspended: false,
          createdAt: "2023-12-13T06:31:22.944000+00:00",
          updatedAt: "2023-12-13T06:31:22.944000+00:00",
        },
        {
          sgf_id: 143,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-03-30]PB[jonwick01]PW[\u5c71\u91ce\u6e38\u4fa0]BR[4\u7ea7]WR[4\u7ea7]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.02]TM[60]CA[UTF-8]PL[W]AB[js][rs][ir][kr][qr][sr][fq][iq][pq][qq][bp][fp][gp][hp][ip][rp][bo][co][jo][ro][bn][dn][fn][jn][rn][dm][km][el][fl][gl][kl][gk][kk][lk][qk][rk][gj][hj][mj][pj][fi][ii][ji][pi][bh][ch][eh][fh][kh][qh][cg][dg][eg][kg][qg][ef][jf][qf][ce][fe][ie][je][fd][gd][jd][pd][qd][dc][kc][lc][oc][ob]AW[gs][os][er][fr][hr][jr][nr][pr][bq][eq][gq][hq][jq][kq][lq][mq][oq][ap][cp][dp][jp][pp][qp][ko][qo][kn][qn][sn][cm][lm][qm][rm][cl][dl][ll][pl][rl][dk][ek][fk][mk][nk][cj][fj][oj][bi][ci][di][ei][gi][hi][oi][dh][gh][ih][nh][ph][fg][hg][ig][mg][og][pg][ff][gf][hf][nf][pf][ge][ke][oe][md][od][mc][nc](;W[kf]C[Incorrect - This was the actual move played in the game!])(;W[nb]C[CORRECT];B[bk]C[CORRECT];W[bl]C[CORRECT];B[aj]C[CORRECT])(;W[lb]C[CORRECT];B[bk]C[CORRECT];W[al]C[CORRECT];B[bl]C[CORRECT])(;W[sk]C[CORRECT];B[mb]C[CORRECT];W[nb]C[CORRECT];B[na]C[CORRECT])(;W[qe]C[CORRECT];B[pe]C[CORRECT];W[nb]C[CORRECT];B[pc]C[CORRECT])(;W[rq]C[CORRECT];B[sp]C[CORRECT])(;W[db]C[CORRECT];B[mb]C[CORRECT];W[cc]C[CORRECT])(;W[na]C[CORRECT];B[lb]C[CORRECT])(;W[he]C[CORRECT];B[mb]C[CORRECT])(;W[ri]C[CORRECT]))",
          category: "other",
          move_number: 109,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F4\\":[\\"F4\\",\\"F2\\",\\"B9\\",\\"A7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449118/ywtcyw2ephp2d79tzk3z.png",
          suspended: false,
          createdAt: "2023-12-13T06:31:59.718000+00:00",
          updatedAt: "2023-12-13T06:31:59.718000+00:00",
        },
        {
          sgf_id: 87,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-03]PC[OGS: https://online-go.com/game/58571372]GN[winchell vs. tada123456]PB[winchell]PW[tada123456]BR[5k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+8.5]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[B]AB[ks][ir][jr][lr][mr][nr][mq][oq][pq][pl][nf][of][pe][qe][cd][id][rd][pc][rc]AW[kr][dq][jq][kq][lq][nq][mp][np][op][do][lo][qo][ng][og][rg][pf][qf][sf][re][qd][qc](;B[ph]C[Incorrect - This was the actual move played in the game!])(;B[mf]C[CORRECT];W[mg]C[CORRECT];B[lf]C[CORRECT];W[nk]C[CORRECT];B[ph]C[CORRECT];W[qi]C[CORRECT];B[pi]C[CORRECT];W[qj]C[CORRECT]))",
          category: "other",
          move_number: 42,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N14\\":[\\"N14\\",\\"N13\\",\\"M14\\",\\"O9\\",\\"Q12\\",\\"R11\\",\\"Q11\\",\\"R10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449145/futfwzi7r1gus3wsj7kh.png",
          suspended: false,
          createdAt: "2023-12-13T06:32:26.049000+00:00",
          updatedAt: "2023-12-13T06:32:26.049000+00:00",
        },
        {
          sgf_id: 87,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-03]PC[OGS: https://online-go.com/game/58571372]GN[winchell vs. tada123456]PB[winchell]PW[tada123456]BR[5k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+8.5]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[W]AB[ks][ir][jr][lr][mr][nr][mq][oq][pq][pl][ph][nf][of][pe][qe][cd][id][rd][pc][rc]AW[kr][dq][jq][kq][lq][nq][mp][np][op][do][lo][qo][ng][og][rg][pf][qf][sf][re][qd][qc](;W[pg]C[Incorrect - This was the actual move played in the game!])(;W[qb]C[CORRECT];B[rb]C[CORRECT];W[mf]C[CORRECT];B[nd]C[CORRECT];W[pb]C[CORRECT];B[oc]C[CORRECT];W[pj]C[CORRECT])(;W[mf]C[CORRECT];B[nd]C[CORRECT];W[qb]C[CORRECT];B[rb]C[CORRECT];W[pb]C[CORRECT];B[oc]C[CORRECT];W[pj]C[CORRECT]))",
          category: "other",
          move_number: 43,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R18\\":[\\"R18\\",\\"S18\\",\\"N14\\",\\"O16\\",\\"Q18\\",\\"P17\\",\\"Q10\\"],\\"N14\\":[\\"N14\\",\\"O16\\",\\"R18\\",\\"S18\\",\\"Q18\\",\\"P17\\",\\"Q10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449152/c7aeldmuycus0ko5zxy8.png",
          suspended: false,
          createdAt: "2023-12-13T06:32:32.920000+00:00",
          updatedAt: "2023-12-13T06:32:32.920000+00:00",
        },
        {
          sgf_id: 87,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-03]PC[OGS: https://online-go.com/game/58571372]GN[winchell vs. tada123456]PB[winchell]PW[tada123456]BR[5k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+8.5]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[W]AB[ds][ks][cr][ir][jr][lr][mr][nr][cq][mq][oq][pq][qq][bp][cp][rp][bo][dn][nm][ll][nl][pl][ql][mk][pk][dj][fj][mj][qj][ci][mi][oi][pi][qi][ch][gh][mh][ph][cg][lg][hf][lf][mf][nf][of][pe][qe][cd][fd][id][jd][ld][md][rd][kc][pc][rc]AW[br][dr][hr][kr][dq][hq][jq][kq][lq][nq][dp][mp][np][op][qp][co][do][lo][qo][ro][bn][mm][cl][el][gl][kl][ml][rl][lk][qk][rk][sk][bj][hj][lj][rj][bi][ri][bh][kh][lh][oh][qh][jg][mg][ng][og][pg][rg][pf][qf][sf][je][ke][le][re][kd][qd][qc](;W[fr]C[Incorrect - This was the actual move played in the game!])(;W[oj]C[CORRECT];B[ok]C[CORRECT];W[nj]C[CORRECT];B[ni]C[CORRECT];W[om]C[CORRECT]))",
          category: "other",
          move_number: 119,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P10\\":[\\"P10\\",\\"P9\\",\\"O10\\",\\"O11\\",\\"P7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449203/o6nxwi0ln0moo3fzem2r.png",
          suspended: false,
          createdAt: "2023-12-13T06:33:24.293000+00:00",
          updatedAt: "2023-12-13T06:33:24.293000+00:00",
        },
        {
          sgf_id: 87,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-03]PC[OGS: https://online-go.com/game/58571372]GN[winchell vs. tada123456]PB[winchell]PW[tada123456]BR[5k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+8.5]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[B]AB[bs][ds][ks][cr][ir][jr][lr][mr][nr][rr][sr][cq][mq][oq][pq][qq][bp][cp][bo][an][mn][pn][bm][nm][pm][nl][pl][ql][ek][mk][pk][dj][ej][fj][mj][qj][ci][fi][mi][oi][pi][qi][ch][gh][mh][ph][bg][cg][gg][lg][hf][jf][kf][lf][mf][nf][of][ie][pe][qe][cd][fd][id][jd][ld][md][rd][dc][kc][pc][rc]AW[ar][br][dr][fr][hr][kr][aq][dq][hq][jq][kq][lq][nq][rq][dp][mp][np][op][qp][sp][co][do][fo][lo][qo][ro][bn][cn][en][gn][hn][cm][em][gm][lm][mm][qm][bl][cl][el][gl][kl][ml][rl][ck][dk][fk][hk][lk][qk][rk][sk][bj][gj][hj][lj][rj][bi][ri][bh][kh][lh][oh][qh][hg][ig][jg][mg][ng][og][pg][rg][if][pf][qf][sf][je][ke][le][re][kd][qd][qc](;B[iq]C[Incorrect - This was the actual move played in the game!])(;B[hh]C[CORRECT];W[oj]C[CORRECT];B[pj]C[CORRECT];W[on]C[CORRECT])(;B[sd]C[CORRECT];W[oj]C[CORRECT];B[ni]C[CORRECT];W[on]C[CORRECT])(;B[qn]C[CORRECT];W[oj]C[CORRECT];B[ni]C[CORRECT])(;B[li]C[CORRECT];W[ki]C[CORRECT];B[oo]C[CORRECT])(;B[ah]C[CORRECT];W[oj]C[CORRECT];B[ok]C[CORRECT])(;B[oo]C[CORRECT];W[qb]C[CORRECT])(;B[ag]C[CORRECT];W[oj]C[CORRECT];B[ni]C[CORRECT])(;B[rh]C[CORRECT];W[sh]C[CORRECT])(;B[nh]C[CORRECT];W[ls]C[CORRECT])(;B[on]C[CORRECT];W[ls]C[CORRECT])(;B[nn]C[CORRECT];W[ag]C[CORRECT]))",
          category: "other",
          move_number: 166,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H12\\":[\\"H12\\",\\"P10\\",\\"Q10\\",\\"P6\\"],\\"T16\\":[\\"T16\\",\\"P10\\",\\"O11\\",\\"P6\\"],\\"R6\\":[\\"R6\\",\\"P10\\",\\"O11\\"],\\"M11\\":[\\"M11\\",\\"L11\\",\\"P5\\"],\\"A12\\":[\\"A12\\",\\"P10\\",\\"P9\\"],\\"P5\\":[\\"P5\\",\\"R18\\"],\\"A13\\":[\\"A13\\",\\"P10\\",\\"O11\\"],\\"S12\\":[\\"S12\\",\\"T12\\"],\\"O12\\":[\\"O12\\",\\"M1\\"],\\"P6\\":[\\"P6\\",\\"M1\\"],\\"O6\\":[\\"O6\\",\\"A13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449228/xldmep2bbq9o7clrk71d.png",
          suspended: false,
          createdAt: "2023-12-13T06:33:48.857000+00:00",
          updatedAt: "2023-12-13T06:33:48.857000+00:00",
        },
        {
          sgf_id: 120,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-02-07]PC[OGS: https://online-go.com/game/21729075]GN[Friendly Match]PB[viento]PW[gcnaccount]BR[8k]WR[8k]TM[180]OT[1x10 byo-yomi]RE[W+9.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[ck][cj][dj][jj][kj][lj][ei][hi][ii][mi][jh][kh][jg][df][jf][kf][ke][cd][kd][kc][cb][jb][kb]AW[dk][ek][ik][jk][kk][lk][ej][ij][fi][ji][ki][li][ih][lh][ig][if][ee][ie][je][ec][ic][jc][ib](;B[gh]C[Incorrect - This was the actual move played in the game!])(;B[lg]C[CORRECT];W[mj]C[CORRECT];B[eh]C[CORRECT];W[eg]C[CORRECT];B[dg]C[CORRECT];W[dc]C[CORRECT]))",
          category: "other",
          move_number: 33,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"M5\\":[\\"M5\\",\\"C6\\",\\"D4\\",\\"C8\\",\\"E3\\"],\\"J4\\":[\\"J4\\",\\"M6\\",\\"M5\\",\\"L6\\",\\"M8\\",\\"M4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449268/fmtwc2vmpwibrabkzldd.png",
          suspended: false,
          createdAt: "2023-12-13T06:34:28.512000+00:00",
          updatedAt: "2023-12-13T06:34:28.512000+00:00",
        },
        {
          sgf_id: 120,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-02-07]PC[OGS: https://online-go.com/game/21729075]GN[Friendly Match]PB[viento]PW[gcnaccount]BR[8k]WR[8k]TM[180]OT[1x10 byo-yomi]RE[W+9.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[ck][cj][jj][kj][lj][hi][ii][jh][kh][jg][df][jf][kf][ke][cd][kd][kc][cb][jb][kb]AW[dk][ik][kk][lk][ej][ij][ji][ki][li][ih][lh][ig][if][ee][ie][je][ec][ic][jc][ib](;B[mi]C[Incorrect - This was the actual move played in the game!])(;B[ei]C[CORRECT];W[fi]C[CORRECT];B[lg]C[CORRECT];W[de]C[CORRECT];B[mi]C[CORRECT])(;B[lg]C[CORRECT];W[jk]C[CORRECT];B[ei]C[CORRECT];W[fi]C[CORRECT];B[eh]C[CORRECT];W[dj]C[CORRECT])(;B[dj]C[CORRECT];W[ek]C[CORRECT];B[lg]C[CORRECT];W[jk]C[CORRECT]))",
          category: "other",
          move_number: 47,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"M7\\":[\\"M7\\",\\"N4\\",\\"E6\\",\\"E7\\",\\"D7\\",\\"D11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449285/thd8asy0jntzkonf99x8.png",
          suspended: false,
          createdAt: "2023-12-13T06:34:46.123000+00:00",
          updatedAt: "2023-12-13T06:34:46.123000+00:00",
        },
        {
          sgf_id: 120,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-02-07]PC[OGS: https://online-go.com/game/21729075]GN[Friendly Match]PB[viento]PW[gcnaccount]BR[8k]WR[8k]TM[180]OT[1x10 byo-yomi]RE[W+9.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[ck][cj][jj][kj][ii][jh][jg][df][jf][ke][cd][kd][kc][cb][jb][kb]AW[dk][ik][kk][ej][ji][ki][ih][ig][if][ee][ie][je][ec][ic][jc][ib](;B[kh]C[Incorrect - This was the actual move played in the game!])(;B[li]C[CORRECT];W[ch]C[CORRECT];B[dj]C[CORRECT];W[cf]C[CORRECT];B[ek]C[CORRECT])(;B[ij]C[CORRECT];W[lh]C[CORRECT];B[li]C[CORRECT];W[kh]C[CORRECT];B[lf]C[CORRECT];W[lj]C[CORRECT]))",
          category: "other",
          move_number: 41,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"E5\\":[\\"E5\\",\\"F5\\",\\"M7\\",\\"D9\\",\\"N5\\"],\\"M7\\":[\\"M7\\",\\"K3\\",\\"E5\\",\\"F5\\",\\"E6\\",\\"D4\\"],\\"D4\\":[\\"D4\\",\\"E3\\",\\"M7\\",\\"K3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449292/kblhkqzgezeuorcoz8re.png",
          suspended: false,
          createdAt: "2023-12-13T06:34:52.725000+00:00",
          updatedAt: "2023-12-13T06:34:52.725000+00:00",
        },
        {
          sgf_id: 120,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-02-07]PC[OGS: https://online-go.com/game/21729075]GN[Friendly Match]PB[viento]PW[gcnaccount]BR[8k]WR[8k]TM[180]OT[1x10 byo-yomi]RE[W+9.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[ck][cj][dj][jj][kj][lj][ei][hi][ii][mi][dh][gh][jh][kh][gg][jg][df][ef][jf][kf][de][ke][cd][kd][kc][cb][jb][kb][ea]AW[dk][ek][ik][jk][kk][lk][ej][ij][fi][ji][ki][li][fh][ih][lh][fg][ig][ff][gf][if][ee][ie][je][ed][ec][ic][jc][ib](;W[ga]C[Incorrect - This was the actual move played in the game!])(;W[lg]C[CORRECT];B[dl]C[CORRECT];W[el]C[CORRECT];B[cl]C[CORRECT];W[db]C[CORRECT]))",
          category: "other",
          move_number: 67,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"D2\\":[\\"D2\\",\\"E2\\",\\"M7\\",\\"N4\\",\\"C2\\",\\"E1\\"],\\"M7\\":[\\"M7\\",\\"N4\\",\\"D2\\",\\"E2\\",\\"C2\\",\\"E1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449305/bajp9hefkdvllknnf7ow.png",
          suspended: false,
          createdAt: "2023-12-13T06:35:05.829000+00:00",
          updatedAt: "2023-12-13T06:35:05.829000+00:00",
        },
        {
          sgf_id: 116,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-26]PC[OGS: https://online-go.com/game/24983936]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[JEnG]PW[BorisD]BR[7k]WR[5k]TM[180]OT[3x30 byo-yomi]RE[W+2.5]SZ[9]KM[5.5]RU[Chinese]PL[W]AB[dg][gg][cf][ae][ce][bd][gd][hd][cc][dc][eb][fb]AW[bg][cg][eg][df][be][de][cd][dd][ec][fc][gc](;W[bf]C[Incorrect - This was the actual move played in the game!])(;W[bc]C[CORRECT];B[bf]C[CORRECT];W[bb]C[CORRECT];B[dh]C[CORRECT];W[ag]C[CORRECT]))",
          category: "other",
          move_number: 23,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"E6\\":[\\"E6\\",\\"B7\\",\\"B8\\",\\"G2\\",\\"E4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449332/yfrmddx5gtbt8co3ldut.png",
          suspended: false,
          createdAt: "2023-12-13T06:35:32.935000+00:00",
          updatedAt: "2023-12-13T06:35:32.935000+00:00",
        },
        {
          sgf_id: 116,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-26]PC[OGS: https://online-go.com/game/24983936]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[JEnG]PW[BorisD]BR[7k]WR[5k]TM[180]OT[3x30 byo-yomi]RE[W+2.5]SZ[9]KM[5.5]RU[Chinese]PL[B]AB[dg][gg][cf][ce][bd][gd][hd][cc][dc][eb][fb]AW[bg][cg][eg][df][be][de][cd][dd][ec][fc][gc](;B[ae]C[Incorrect - This was the actual move played in the game!])(;B[ed]C[CORRECT];W[bc]C[CORRECT];B[bb]C[CORRECT];W[gh]C[CORRECT];B[ef]C[CORRECT]))",
          category: "other",
          move_number: 4,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"F5\\":[\\"F5\\",\\"G5\\",\\"C4\\",\\"F4\\",\\"D7\\",\\"C7\\"],\\"D5\\":[\\"D5\\",\\"D6\\",\\"E6\\",\\"C4\\",\\"C6\\",\\"D7\\",\\"C7\\"],\\"E6\\":[\\"E6\\",\\"C4\\",\\"G4\\",\\"D3\\"],\\"C4\\":[\\"C4\\",\\"D5\\",\\"E4\\",\\"E5\\"],\\"F6\\":[\\"F6\\",\\"F5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449346/qlmqdhwrartoqzbstciv.png",
          suspended: false,
          createdAt: "2023-12-13T06:35:47.152000+00:00",
          updatedAt: "2023-12-13T06:35:47.152000+00:00",
        },
        {
          sgf_id: 116,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-26]PC[OGS: https://online-go.com/game/24983936]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[JEnG]PW[BorisD]BR[7k]WR[5k]TM[180]OT[3x30 byo-yomi]RE[W+2.5]SZ[9]KM[5.5]RU[Chinese]PL[W]AB[ei][fi][fh][fg][gg][hg][gf][ae][ge][ad][bd][gd][hd][id][bc][cc][dc][ic][db][eb][fb][gb][ea]AW[di][dh][eh][hh][bg][cg][eg][af][bf][df][ff][be][de][fe][cd][dd][ec][fc][gc][hc][hb][ib][fa][ga][ha](;W[fd]C[Incorrect - This was the actual move played in the game!])(;W[bb]C[CORRECT];B[ab]C[CORRECT];W[ca]C[CORRECT];B[ba]C[CORRECT];W[aa]C[CORRECT];B[fd]C[CORRECT];W[ed]C[CORRECT];B[ba]C[CORRECT];W[ig]C[CORRECT]))",
          category: "other",
          move_number: 52,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"B8\\":[\\"B8\\",\\"A8\\",\\"C9\\",\\"B9\\",\\"A9\\",\\"F6\\",\\"E6\\",\\"B9\\",\\"J3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449364/kcsjvqvmh79tlzdpjtyw.png",
          suspended: false,
          createdAt: "2023-12-13T06:36:04.894000+00:00",
          updatedAt: "2023-12-13T06:36:04.894000+00:00",
        },
        {
          sgf_id: 142,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-21]PB[quiteso]PW[DeadKnigh]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[qq][dp][pp][po][qn][rn][bf][be][cd][rd][cc][pc][qc][rc][cb][db][nb][ob]AW[rq][qp][qo][cg][cf][ce][ee][oe][re][dd][pd][qd][dc][mc][nc][oc][eb](;W[rp]C[Incorrect - This was the actual move played in the game!])(;W[fq]C[CORRECT];B[iq]C[CORRECT];W[pq]C[CORRECT];B[qr]C[CORRECT])(;W[cn]C[CORRECT];B[dn]C[CORRECT];W[dm]C[CORRECT];B[en]C[CORRECT])(;W[pq]C[CORRECT];B[qr]C[CORRECT];W[pr]C[CORRECT];B[rr]C[CORRECT];W[lq]C[CORRECT];B[jq]C[CORRECT])(;W[jq]C[CORRECT];B[fq]C[CORRECT];W[pq]C[CORRECT])(;W[qr]C[CORRECT];B[pq]C[CORRECT];W[fq]C[CORRECT])(;W[kq]C[CORRECT];B[iq]C[CORRECT])(;W[lq]C[CORRECT];B[jq]C[CORRECT])(;W[cq]C[CORRECT];B[dq]C[CORRECT]))",
          category: "other",
          move_number: 46,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D3\\":[\\"D3\\",\\"C3\\",\\"E3\\",\\"C4\\",\\"H3\\"],\\"C6\\":[\\"C6\\",\\"D6\\",\\"D7\\"],\\"F3\\":[\\"F3\\",\\"H3\\",\\"F5\\"],\\"H3\\":[\\"H3\\",\\"F3\\",\\"C6\\"],\\"J3\\":[\\"J3\\",\\"G3\\",\\"C6\\"],\\"C3\\":[\\"C3\\",\\"D3\\",\\"C4\\"],\\"G3\\":[\\"G3\\",\\"J3\\",\\"H5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449379/sag86fdd3p1kbbr7c0nv.png",
          suspended: false,
          createdAt: "2023-12-13T06:36:19.309000+00:00",
          updatedAt: "2023-12-13T06:36:19.309000+00:00",
        },
        {
          sgf_id: 142,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-21]PB[quiteso]PW[DeadKnigh]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[ir][pr][rr][sr][eq][hq][jq][pq][qq][sq][dp][ep][fp][gp][hp][jp][pp][io][po][so][cn][mn][qn][rn][cm][dl][dk][rk][sk][nj][pj][qj][ni][pi][bf][rf][be][cd][rd][cc][pc][qc][rc][cb][db][nb][ob]AW[gs][qs][cr][dr][er][fr][hr][qr][bq][dq][fq][gq][cp][pn][cl][ql][ck][cj][rj][sj][qi][ph][qh][bg][cg][cf][qf][ce][ee][oe][re][se][dd][pd][qd][dc][mc][nc][oc][eb](;W[rh]C[Incorrect - This was the actual move played in the game!])(;W[jj]C[CORRECT];B[fb]C[CORRECT];W[ea]C[CORRECT];B[gc]C[CORRECT])(;W[ii]C[CORRECT];B[fb]C[CORRECT];W[ea]C[CORRECT];B[gc]C[CORRECT])(;W[ij]C[CORRECT];B[fb]C[CORRECT];W[ea]C[CORRECT])(;W[ji]C[CORRECT];B[mb]C[CORRECT];W[kc]C[CORRECT])(;W[ki]C[CORRECT];B[ji]C[CORRECT]))",
          category: "other",
          move_number: 124,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G13\\":[\\"G13\\",\\"F7\\",\\"K12\\",\\"N18\\",\\"M18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449399/etaohzjklw4qr80r1gf3.png",
          suspended: false,
          createdAt: "2023-12-13T06:36:40.018000+00:00",
          updatedAt: "2023-12-13T06:36:40.018000+00:00",
        },
        {
          sgf_id: 142,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-21]PB[quiteso]PW[DeadKnigh]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[ir][pr][rr][sr][eq][hq][jq][pq][qq][sq][dp][ep][fp][gp][hp][jp][pp][io][po][so][cn][mn][qn][rn][cm][dl][dk][rk][sk][nj][pj][qj][ni][pi][bf][rf][be][cd][rd][cc][pc][qc][rc][cb][db][nb][ob]AW[gs][qs][cr][dr][er][fr][hr][qr][bq][dq][fq][gq][cp][pn][cl][ql][ck][cj][rj][sj][qi][ph][qh][rh][bg][cg][cf][qf][ce][ee][oe][re][se][dd][pd][qd][dc][mc][nc][oc][eb](;B[qk]C[Incorrect - This was the actual move played in the game!])(;B[ji]C[CORRECT];W[hi]C[CORRECT];B[ik]C[CORRECT])(;B[jj]C[CORRECT];W[af]C[CORRECT];B[ad]C[CORRECT])(;B[ii]C[CORRECT];W[ki]C[CORRECT];B[kj]C[CORRECT];W[lj]C[CORRECT])(;B[ij]C[CORRECT];W[ki]C[CORRECT];B[kj]C[CORRECT])(;B[jh]C[CORRECT];W[ii]C[CORRECT];B[ji]C[CORRECT])(;B[ih]C[CORRECT];W[li]C[CORRECT];B[ki]C[CORRECT]))",
          category: "other",
          move_number: 159,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N18\\":[\\"N18\\",\\"A14\\",\\"A16\\",\\"M18\\"],\\"F18\\":[\\"F18\\",\\"E19\\",\\"N18\\",\\"A14\\"],\\"F17\\":[\\"F17\\",\\"F18\\",\\"N18\\",\\"A14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449413/zhqnqz6qlebvw6tamjvo.png",
          suspended: false,
          createdAt: "2023-12-13T06:36:53.647000+00:00",
          updatedAt: "2023-12-13T06:36:53.647000+00:00",
        },
        {
          sgf_id: 142,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-21]PB[quiteso]PW[DeadKnigh]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[ir][pr][rr][sr][eq][hq][jq][pq][qq][sq][dp][ep][fp][gp][hp][jp][pp][io][po][so][cn][mn][qn][rn][cm][dm][dl][il][ml][dk][hk][qk][rk][sk][ej][gj][hj][nj][pj][qj][ei][gi][ni][pi][eh][fh][bf][rf][be][cd][rd][cc][pc][qc][rc][cb][db][nb][ob]AW[gs][qs][cr][dr][er][fr][hr][qr][bq][dq][fq][gq][cp][on][pn][hm][cl][el][fl][hl][ql][ck][ek][fk][gk][cj][dj][fj][rj][sj][fi][qi][gh][ph][qh][rh][bg][cg][cf][qf][ce][ee][oe][re][se][dd][pd][qd][dc][jc][mc][nc][oc][eb](;B[im]C[Incorrect - This was the actual move played in the game!])(;B[gg]C[CORRECT];W[hh]C[CORRECT];B[hg]C[CORRECT];W[ih]C[CORRECT];B[ff]C[CORRECT])(;B[ff]C[CORRECT];W[gg]C[CORRECT];B[fg]C[CORRECT];W[gf]C[CORRECT]))",
          category: "other",
          move_number: 36,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F3\\":[\\"F3\\",\\"J3\\",\\"Q3\\",\\"R2\\"],\\"C6\\":[\\"C6\\",\\"D6\\",\\"D7\\",\\"E6\\"],\\"Q3\\":[\\"Q3\\",\\"R2\\",\\"Q2\\",\\"S2\\",\\"M3\\",\\"K3\\"],\\"K3\\":[\\"K3\\",\\"F3\\",\\"Q3\\"],\\"R2\\":[\\"R2\\",\\"Q3\\",\\"F3\\"],\\"L3\\":[\\"L3\\",\\"J3\\"],\\"M3\\":[\\"M3\\",\\"K3\\"],\\"C3\\":[\\"C3\\",\\"D3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449426/pqpjkuejvucfxeijxhtz.png",
          suspended: false,
          createdAt: "2023-12-13T06:37:07.285000+00:00",
          updatedAt: "2023-12-13T06:37:07.285000+00:00",
        },
        {
          sgf_id: 142,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-21]PB[quiteso]PW[DeadKnigh]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[ir][pr][rr][sr][eq][hq][jq][pq][qq][sq][dp][ep][fp][gp][hp][jp][pp][io][po][so][cn][mn][qn][rn][cm][dm][dl][il][ml][dk][hk][qk][rk][sk][ej][gj][hj][nj][pj][qj][ei][gi][ni][pi][eh][fh][bf][rf][be][cd][rd][cc][pc][qc][rc][cb][db][nb][ob]AW[gs][qs][cr][dr][er][fr][hr][qr][bq][dq][fq][gq][cp][on][pn][cl][el][fl][hl][ql][ck][ek][fk][gk][cj][dj][fj][rj][sj][fi][qi][gh][ph][qh][rh][bg][cg][cf][qf][ce][ee][oe][re][se][dd][pd][qd][dc][jc][mc][nc][oc][eb](;W[hm]C[Incorrect - This was the actual move played in the game!])(;W[gg]C[CORRECT];B[fm]C[CORRECT];W[jh]C[CORRECT];B[mb]C[CORRECT];W[lb]C[CORRECT]))",
          category: "other",
          move_number: 47,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J4\\":[\\"J4\\",\\"G3\\",\\"E3\\"],\\"J3\\":[\\"J3\\",\\"C3\\",\\"D3\\",\\"C4\\",\\"C5\\"],\\"H3\\":[\\"H3\\",\\"C3\\",\\"C4\\",\\"D3\\"],\\"G3\\":[\\"G3\\",\\"C6\\",\\"B4\\"],\\"C6\\":[\\"C6\\",\\"H3\\",\\"F3\\"],\\"F3\\":[\\"F3\\",\\"J3\\",\\"C6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449440/q6ntfhuv4dzhecmhape3.png",
          suspended: false,
          createdAt: "2023-12-13T06:37:21.030000+00:00",
          updatedAt: "2023-12-13T06:37:21.030000+00:00",
        },
        {
          sgf_id: 142,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-21]PB[quiteso]PW[DeadKnigh]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[ir][pr][rr][sr][eq][hq][jq][pq][qq][sq][dp][ep][fp][gp][hp][jp][pp][io][po][so][cn][en][hn][jn][mn][qn][rn][cm][dm][im][dl][il][ml][dk][hk][qk][rk][sk][ej][gj][hj][ij][jj][kj][nj][pj][qj][ei][gi][ni][pi][eh][fh][bf][rf][be][cd][rd][cc][pc][qc][rc][cb][db][nb][ob]AW[gs][qs][cr][dr][er][fr][hr][qr][bq][dq][fq][gq][cp][fn][gn][on][pn][em][hm][cl][el][fl][hl][ql][ck][ek][fk][gk][ik][jk][kk][cj][dj][fj][rj][sj][fi][qi][gh][ph][qh][rh][bg][cg][cf][qf][ce][ee][oe][re][se][dd][pd][qd][dc][jc][mc][nc][oc][eb](;B[eo]C[Incorrect - This was the actual move played in the game!])(;B[gm]C[CORRECT];W[af]C[CORRECT];B[fb]C[CORRECT];W[ea]C[CORRECT];B[ad]C[CORRECT]))",
          category: "other",
          move_number: 98,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K10\\":[\\"K10\\",\\"F18\\",\\"E19\\",\\"G17\\"],\\"J11\\":[\\"J11\\",\\"F18\\",\\"E19\\",\\"G17\\"],\\"J10\\":[\\"J10\\",\\"F18\\",\\"E19\\"],\\"K11\\":[\\"K11\\",\\"N18\\",\\"L17\\"],\\"L11\\":[\\"L11\\",\\"K11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449449/r2fxopihalkckdkiyvyr.png",
          suspended: false,
          createdAt: "2023-12-13T06:37:29.392000+00:00",
          updatedAt: "2023-12-13T06:37:29.392000+00:00",
        },
        {
          sgf_id: 125,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[6.50]TM[60]OT[5x15 byo-yomi]PW[WeiqiLover]PB[bogazici]WR[1k]BR[1k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]PL[B]AB[cp][dp][hp][pp][eo][cl][cj][ej][bg][dg][af][cf][be][ce][de][ad][bd][ed]AW[cn][en][gn][cm][em][bh][ch][eh][cg][df][ef][ee][cd][dd][fd][pd][bc][cb](;B[bl]C[Incorrect - This was the actual move played in the game!])(;B[gk]C[CORRECT];W[il]C[CORRECT];B[hl]C[CORRECT])(;B[hk]C[CORRECT];W[fk]C[CORRECT];B[fj]C[CORRECT];W[gj]C[CORRECT])(;B[gj]C[CORRECT];W[hl]C[CORRECT];B[hk]C[CORRECT]))",
          category: "other",
          move_number: 23,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E17\\":[\\"E17\\",\\"A16\\",\\"D18\\",\\"C17\\",\\"A12\\",\\"A17\\",\\"A15\\",\\"A11\\",\\"Q15\\"],\\"F16\\":[\\"F16\\",\\"A16\\",\\"A12\\",\\"A17\\",\\"A15\\",\\"A11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449636/jo46uofbdsgigbuhcdsn.png",
          suspended: false,
          createdAt: "2023-12-13T06:40:37.074000+00:00",
          updatedAt: "2023-12-13T06:40:37.074000+00:00",
        },
        {
          sgf_id: 142,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2021-12-21]PB[quiteso]PW[DeadKnigh]BR[11\u7ea7]WR[10\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[ir][pr][rr][sr][eq][hq][jq][pq][qq][sq][dp][ep][fp][gp][hp][jp][pp][eo][io][po][so][cn][en][hn][jn][mn][qn][rn][cm][dm][im][dl][il][ml][dk][hk][qk][rk][sk][ej][gj][hj][ij][jj][kj][nj][pj][qj][ei][gi][ni][pi][eh][fh][hh][hg][lg][bf][hf][jf][kf][mf][rf][be][he][le][cd][rd][cc][pc][qc][rc][cb][db][nb][ob]AW[gs][qs][cr][dr][er][fr][hr][qr][bq][dq][fq][gq][cp][fn][gn][on][pn][em][gm][hm][cl][el][fl][hl][ql][ck][ek][fk][gk][ik][jk][kk][cj][dj][fj][rj][sj][fi][qi][gh][mh][ph][qh][rh][bg][cg][eg][fg][gg][mg][ng][cf][qf][ce][ee][je][ke][oe][re][se][dd][pd][qd][dc][hc][jc][mc][nc][oc][eb](;B[lh]C[Incorrect - This was the actual move played in the game!])(;B[mb]C[CORRECT];W[af]C[CORRECT];B[ad]C[CORRECT];W[lb]C[CORRECT])(;B[fb]C[CORRECT];W[ea]C[CORRECT];B[mb]C[CORRECT];W[af]C[CORRECT])(;B[fc]C[CORRECT];W[fb]C[CORRECT];B[mb]C[CORRECT];W[af]C[CORRECT]))",
          category: "other",
          move_number: 125,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G13\\":[\\"G13\\",\\"H12\\",\\"H13\\",\\"J12\\",\\"F14\\"],\\"F14\\":[\\"F14\\",\\"G13\\",\\"F13\\",\\"G14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449456/x3f3qyed4bbnmgcophbq.png",
          suspended: false,
          createdAt: "2023-12-13T06:37:37.237000+00:00",
          updatedAt: "2023-12-13T06:37:37.237000+00:00",
        },
        {
          sgf_id: 136,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-23]PB[qweasd0130]PW[jonwick01]BR[3\u7ea7]WR[2\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.50]TM[60]CA[UTF-8]PL[B]AB[er][fq][iq][jq][lq][oq][gp][hp][op][pp][pl][ql][dd][pd]AW[fr][hr][pr][dq][gq][hq][pq][ip][qp][co][io][qn][om][pm](;B[fs]C[Incorrect - This was the actual move played in the game!])(;B[qq]C[CORRECT];W[rq]C[CORRECT];B[eq]C[CORRECT];W[fp]C[CORRECT];B[go]C[CORRECT])(;B[eq]C[CORRECT];W[fp]C[CORRECT];B[hn]C[CORRECT];W[ep]C[CORRECT];B[fs]C[CORRECT];W[gr]C[CORRECT]))",
          category: "other",
          move_number: 29,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R3\\":[\\"R3\\",\\"S3\\",\\"E3\\",\\"F4\\",\\"G5\\"],\\"E3\\":[\\"E3\\",\\"F4\\",\\"H6\\",\\"E4\\",\\"F1\\",\\"G2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449496/tqz2lped6q0pgliczio7.png",
          suspended: false,
          createdAt: "2023-12-13T06:38:16.498000+00:00",
          updatedAt: "2023-12-13T06:38:16.498000+00:00",
        },
        {
          sgf_id: 136,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-23]PB[qweasd0130]PW[jonwick01]BR[3\u7ea7]WR[2\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.50]TM[60]CA[UTF-8]PL[W]AB[fq][iq][lq][oq][gp][hp][op][pp][pl][ql][dd][pd]AW[pr][dq][hq][pq][ip][qp][co][io][qn][om][pm](;W[hr]C[Incorrect - This was the actual move played in the game!])(;W[jq]C[CORRECT];B[ir]C[CORRECT];W[kq]C[CORRECT];B[hr]C[CORRECT];W[lp]C[CORRECT];B[qo]C[CORRECT];W[rp]C[CORRECT];B[ro]C[CORRECT];W[rn]C[CORRECT]))",
          category: "other",
          move_number: 24,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K3\\":[\\"K3\\",\\"J2\\",\\"L3\\",\\"H2\\",\\"M4\\",\\"R5\\",\\"S4\\",\\"S5\\",\\"S6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449506/gfd5u4af7kclk7uhdkkl.png",
          suspended: false,
          createdAt: "2023-12-13T06:38:27.080000+00:00",
          updatedAt: "2023-12-13T06:38:27.080000+00:00",
        },
        {
          sgf_id: 136,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-23]PB[qweasd0130]PW[jonwick01]BR[3\u7ea7]WR[2\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.50]TM[60]CA[UTF-8]PL[W]AB[fs][gs][cr][dr][er][gr][ir][jr][kr][lr][eq][fq][iq][jq][lq][mq][nq][oq][kp][op][pp][lo][no][po][dn][en][mn][nn][cl][dl][el][pl][ql][dk][gk][ok][ej][fj][dd][pd]AW[hs][is][ks][hr][mr][nr][or][pr][cq][dq][gq][hq][pq][ep][fp][ip][qp][co][do][go][ho][io][ko][qo][kn][ln][on][qn][mm][nm][om][pm][fl][gl][bk][ck][dj][di][ei][fi](;W[cf]C[Incorrect - This was the actual move played in the game!])(;W[gi]C[CORRECT];B[hl]C[CORRECT];W[gj]C[CORRECT];B[hk]C[CORRECT])(;W[hj]C[CORRECT];B[pg]C[CORRECT];W[nj]C[CORRECT])(;W[hi]C[CORRECT];B[hl]C[CORRECT];W[hm]C[CORRECT];B[ij]C[CORRECT])(;W[ii]C[CORRECT];B[hl]C[CORRECT];W[gj]C[CORRECT]))",
          category: "other",
          move_number: 63,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q13\\":[\\"Q13\\",\\"C12\\",\\"E11\\",\\"D13\\"],\\"R13\\":[\\"R13\\",\\"C12\\",\\"D12\\",\\"D13\\"],\\"Q14\\":[\\"Q14\\",\\"C12\\",\\"E11\\",\\"D14\\"],\\"C12\\":[\\"C12\\",\\"R12\\",\\"P12\\"],\\"Q12\\":[\\"Q12\\",\\"C12\\",\\"E11\\"],\\"C11\\":[\\"C11\\",\\"R12\\",\\"P12\\"],\\"R15\\":[\\"R15\\"],\\"R14\\":[\\"R14\\",\\"N5\\"],\\"R12\\":[\\"R12\\",\\"C12\\"],\\"C13\\":[\\"C13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449516/mpyl2u1tfalqcr3r2pys.png",
          suspended: false,
          createdAt: "2023-12-13T06:38:36.885000+00:00",
          updatedAt: "2023-12-13T06:38:36.885000+00:00",
        },
        {
          sgf_id: 136,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-23]PB[qweasd0130]PW[jonwick01]BR[3\u7ea7]WR[2\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.50]TM[60]CA[UTF-8]PL[B]AB[fs][gs][cr][dr][er][gr][ir][jr][kr][lr][eq][fq][iq][jq][lq][mq][nq][oq][kp][op][pp][lo][no][po][dn][en][mn][nn][cl][dl][pl][ql][dk][gk][ok][ej][fj][dd][pd]AW[hs][is][ks][hr][mr][nr][or][pr][cq][dq][gq][hq][pq][ep][fp][ip][qp][co][do][go][ho][io][ko][qo][kn][ln][on][qn][mm][nm][om][pm][fl][gl][bk][ck][dj][di][ei][fi](;B[el]C[Incorrect - This was the actual move played in the game!])(;B[hl]C[CORRECT];W[gi]C[CORRECT];B[gm]C[CORRECT];W[fm]C[CORRECT])(;B[gi]C[CORRECT];W[gh]C[CORRECT];B[hi]C[CORRECT];W[hh]C[CORRECT];B[hl]C[CORRECT];W[ii]C[CORRECT]))",
          category: "other",
          move_number: 120,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H14\\":[\\"H14\\",\\"H13\\",\\"J13\\",\\"J12\\",\\"K13\\",\\"B15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449569/rvbxa6zaektafrjdxg2b.png",
          suspended: false,
          createdAt: "2023-12-13T06:39:30.051000+00:00",
          updatedAt: "2023-12-13T06:39:30.051000+00:00",
        },
        {
          sgf_id: 136,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-23]PB[qweasd0130]PW[jonwick01]BR[3\u7ea7]WR[2\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.50]TM[60]CA[UTF-8]PL[W]AB[fs][gs][cr][dr][er][gr][ir][jr][kr][lr][eq][fq][iq][jq][lq][mq][nq][oq][kp][op][pp][lo][no][po][dn][en][mn][nn][am][bm][cm][rm][al][cl][dl][el][ll][pl][ql][dk][ek][gk][kk][lk][ok][ej][fj][gj][jj][pj][gi][ni][oi][pi][ih][nh][qh][eg][gg][ng][hf][if][of][be][ce][ee][fe][ie][ke][ne][oe][qe][bd][dd][id][jd][nd][pd][bc][cc][dc][kc][nc][qc][cb][jb][nb][ba][da]AW[hs][is][ks][hr][mr][nr][or][pr][cq][dq][gq][hq][pq][ep][fp][ip][qp][co][do][go][ho][io][ko][qo][an][bn][cn][kn][ln][on][qn][rn][lm][mm][nm][om][pm][bl][fl][gl][il][kl][bk][ck][fk][hk][nk][dj][mj][nj][oj][di][ei][fi][mi][jh][mh][oh][ph][jg][mg][og][qg][bf][cf][df][mf][nf][pf][de][he][me][ed][hd][md][rd][ec][fc][ic][jc][mc][bb][db][eb][gb][ib][kb][mb][ea](;W[ak]C[Incorrect - This was the actual move played in the game!])(;W[bi]C[CORRECT];B[ch]C[CORRECT];W[bh]C[CORRECT];B[dg]C[CORRECT];W[cg]C[CORRECT]))",
          category: "other",
          move_number: 184,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B11\\":[\\"B11\\",\\"C12\\",\\"B12\\",\\"D13\\",\\"C13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449579/pfab5fjuz95fim3vudwi.png",
          suspended: false,
          createdAt: "2023-12-13T06:39:39.433000+00:00",
          updatedAt: "2023-12-13T06:39:39.433000+00:00",
        },
        {
          sgf_id: 136,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-09-23]PB[qweasd0130]PW[jonwick01]BR[3\u7ea7]WR[2\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+0.50]TM[60]CA[UTF-8]PL[B]AB[fs][gs][cr][dr][er][gr][ir][jr][kr][lr][eq][fq][iq][jq][lq][mq][nq][oq][kp][op][pp][lo][no][po][dn][en][mn][nn][am][bm][cm][rm][al][cl][dl][el][ll][pl][ql][dk][ek][gk][kk][lk][ok][aj][ej][fj][gj][jj][pj][bi][gi][ni][oi][pi][bh][ih][nh][qh][dg][eg][gg][ng][af][hf][if][of][be][ce][ee][fe][ie][ke][ne][oe][qe][bd][dd][id][jd][nd][pd][bc][cc][dc][kc][nc][qc][cb][jb][nb][ba][da]AW[hs][is][ks][hr][mr][nr][or][pr][cq][dq][gq][hq][pq][ep][fp][ip][qp][co][do][go][ho][io][ko][qo][an][bn][cn][kn][ln][on][qn][rn][lm][mm][nm][om][pm][bl][fl][gl][il][kl][ak][bk][ck][fk][hk][nk][cj][dj][mj][nj][oj][ci][di][ei][fi][mi][ch][jh][mh][oh][ph][ag][cg][jg][mg][og][qg][bf][cf][df][mf][nf][pf][de][he][me][ed][hd][md][rd][ec][fc][ic][jc][mc][bb][db][eb][gb][ib][kb][mb][ea](;B[ae]C[Incorrect - This was the actual move played in the game!])(;B[ah]C[CORRECT];W[bj]C[CORRECT];B[ai]C[CORRECT];W[fh]C[CORRECT];B[fg]C[CORRECT];W[gh]C[CORRECT];B[hh]C[CORRECT];W[ij]C[CORRECT]))",
          category: "other",
          move_number: 182,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B12\\":[\\"B12\\",\\"J11\\",\\"F12\\",\\"G12\\"],\\"F12\\":[\\"F12\\",\\"C12\\",\\"B12\\",\\"B11\\",\\"B13\\"],\\"B11\\":[\\"B11\\",\\"J11\\",\\"F12\\"],\\"E14\\":[\\"E14\\",\\"F14\\",\\"B12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449620/pep93cqb4oxsbenz0b15.png",
          suspended: false,
          createdAt: "2023-12-13T06:40:21.127000+00:00",
          updatedAt: "2023-12-13T06:40:21.127000+00:00",
        },
        {
          sgf_id: 125,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[6.50]TM[60]OT[5x15 byo-yomi]PW[WeiqiLover]PB[bogazici]WR[1k]BR[1k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]PL[B]AB[cp][dp][hp][lp][pp][eo][go][ho][bl][cl][dl][el][fl][gl][jl][ll][gk][cj][ej][bg][dg][af][cf][be][ce][de][ad][bd][ed]AW[gp][jp][cn][en][gn][hn][in][kn][cm][em][il][dk][ek][fk][dj][fj][bh][ch][eh][cg][df][ef][ee][cd][dd][fd][pd][bc][cb](;B[jk]C[Incorrect - This was the actual move played in the game!])(;B[ik]C[CORRECT];W[jm]C[CORRECT];B[kl]C[CORRECT];W[mn]C[CORRECT];B[jo]C[CORRECT])(;B[di]C[CORRECT];W[dh]C[CORRECT];B[ik]C[CORRECT];W[jm]C[CORRECT]))",
          category: "other",
          move_number: 140,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K16\\":[\\"K16\\",\\"N15\\",\\"N16\\",\\"L15\\"],\\"J15\\":[\\"J15\\",\\"G15\\",\\"D12\\",\\"B18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449679/emssj3awvijx8s87gdcc.png",
          suspended: false,
          createdAt: "2023-12-13T06:41:20.139000+00:00",
          updatedAt: "2023-12-13T06:41:20.139000+00:00",
        },
        {
          sgf_id: 125,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[6.50]TM[60]OT[5x15 byo-yomi]PW[WeiqiLover]PB[bogazici]WR[1k]BR[1k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]PL[W]AB[cp][dp][hp][lp][pp][eo][go][ho][bl][cl][dl][el][fl][gl][jl][ll][gk][jk][cj][ej][gj][ij][jj][bg][dg][af][cf][be][ce][de][ad][bd][ed]AW[gp][jp][cn][en][gn][hn][in][kn][cm][em][il][dk][ek][fk][ik][dj][fj][hj][ii][bh][ch][eh][cg][df][ef][ee][cd][dd][fd][pd][bc][cb](;W[gi]C[Incorrect - This was the actual move played in the game!])(;W[hi]C[CORRECT];B[jm]C[CORRECT];W[jn]C[CORRECT];B[gi]C[CORRECT];W[hg]C[CORRECT]))",
          category: "other",
          move_number: 162,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K11\\":[\\"K11\\",\\"L11\\",\\"L12\\",\\"K12\\",\\"J12\\",\\"M12\\",\\"M11\\",\\"L13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449685/tqrgreejrzpyxp3pzgeq.png",
          suspended: false,
          createdAt: "2023-12-13T06:41:26.300000+00:00",
          updatedAt: "2023-12-13T06:41:26.300000+00:00",
        },
        {
          sgf_id: 125,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[6.50]TM[60]OT[5x15 byo-yomi]PW[WeiqiLover]PB[bogazici]WR[1k]BR[1k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]PL[W]AB[cp][dp][hp][lp][pp][eo][go][ho][bl][cl][dl][el][fl][gl][jl][ll][gk][hk][jk][cj][ej][gj][ij][jj][bg][dg][af][cf][be][ce][de][ad][bd][ed]AW[gp][jp][cn][en][gn][hn][in][kn][cm][em][il][dk][ek][fk][ik][dj][fj][hj][gi][ii][bh][ch][eh][cg][df][ef][ee][cd][dd][fd][pd][bc][cb](;W[hl]C[Incorrect - This was the actual move played in the game!])(;W[hi]C[CORRECT];B[im]C[CORRECT];W[jm]C[CORRECT];B[hl]C[CORRECT];W[iq]C[CORRECT];B[fo]C[CORRECT];W[kp]C[CORRECT]))",
          category: "other",
          move_number: 188,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J2\\":[\\"J2\\",\\"H2\\",\\"S2\\",\\"S3\\",\\"N2\\"],\\"S2\\":[\\"S2\\",\\"S3\\",\\"J2\\",\\"H2\\",\\"N2\\"],\\"N2\\":[\\"N2\\",\\"N3\\",\\"J2\\",\\"H2\\",\\"M2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449704/zymxdbbrgtzijflauqzb.png",
          suspended: false,
          createdAt: "2023-12-13T06:41:44.428000+00:00",
          updatedAt: "2023-12-13T06:41:44.428000+00:00",
        },
        {
          sgf_id: 125,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[6.50]TM[60]OT[5x15 byo-yomi]PW[WeiqiLover]PB[bogazici]WR[1k]BR[1k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]PL[W]AB[hq][lq][nq][oq][cp][dp][hp][lp][pp][qp][eo][go][ho][lo][qo][jm][bl][cl][dl][el][fl][gl][jl][ll][rl][gk][hk][jk][mk][ok][pk][qk][rk][cj][ej][gj][hj][ij][jj][fi][hi][bg][dg][eg][og][pg][af][cf][of][qf][be][ce][de][pe][qe][ad][bd][ed][gd][qd][ec][gc][kc][mc][nc][eb][gb][ea][fa][ga]AW[gp][jp][kp][np][op][po][ro][cn][en][gn][hn][in][jn][kn][mn][pn][qn][cm][em][km][mm][om][rm][hl][il][pl][ql][dk][ek][fk][ik][dj][fj][gi][ii][bh][ch][eh][gh][hh][mh][oh][cg][fg][ng][df][ef][nf][ee][fe][oe][cd][dd][fd][nd][od][pd][bc][dc][fc][ic][qc][cb][db][fb][ib][da](;W[ac]C[Incorrect - This was the actual move played in the game!])(;W[jd]C[CORRECT];B[me]C[CORRECT];W[md]C[CORRECT];B[ke]C[CORRECT])(;W[ie]C[CORRECT];B[ge]C[CORRECT];W[dh]C[CORRECT];B[bb]C[CORRECT]))",
          category: "other",
          move_number: 68,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H11\\":[\\"H11\\",\\"J7\\",\\"K7\\",\\"H8\\",\\"J3\\",\\"F5\\",\\"L4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449745/zecdbvwrzpudlb4knani.png",
          suspended: false,
          createdAt: "2023-12-13T06:42:26.088000+00:00",
          updatedAt: "2023-12-13T06:42:26.088000+00:00",
        },
        {
          sgf_id: 125,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[6.50]TM[60]OT[5x15 byo-yomi]PW[WeiqiLover]PB[bogazici]WR[1k]BR[1k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]PL[W]AB[hq][lq][nq][oq][qq][sq][cp][dp][hp][lp][pp][qp][rp][eo][go][ho][lo][qo][jm][bl][cl][dl][el][fl][gl][jl][ll][rl][gk][hk][jk][kk][lk][mk][nk][ok][pk][qk][rk][cj][ej][gj][hj][ij][jj][kj][fi][hi][ji][li][qi][kh][qh][ag][bg][dg][eg][jg][og][pg][af][cf][kf][of][qf][be][ce][de][he][ie][je][me][pe][qe][ad][bd][ed][gd][id][ld][qd][ec][gc][kc][mc][nc][rc][eb][gb][qb][rb][ea][fa][ga]AW[kr][gp][jp][kp][np][op][sp][po][ro][so][cn][en][gn][hn][in][jn][kn][mn][pn][qn][cm][em][km][mm][om][rm][hl][il][kl][pl][ql][dk][ek][fk][ik][dj][fj][lj][mj][nj][gi][ii][pi][ah][bh][ch][eh][gh][hh][ih][jh][mh][oh][ph][cg][fg][ng][df][ef][nf][ee][fe][ge][ke][le][ne][oe][cd][dd][fd][jd][kd][md][nd][od][pd][ac][bc][dc][fc][ic][jc][pc][qc][cb][db][fb][ib][pb][da](;W[ig]C[Incorrect - This was the actual move played in the game!])(;W[ir]C[CORRECT];B[hr]C[CORRECT];W[rr]C[CORRECT];B[rq]C[CORRECT];W[mr]C[CORRECT])(;W[rr]C[CORRECT];B[rq]C[CORRECT];W[ir]C[CORRECT];B[hr]C[CORRECT];W[mr]C[CORRECT])(;W[mr]C[CORRECT];B[mq]C[CORRECT];W[ir]C[CORRECT];B[hr]C[CORRECT];W[lr]C[CORRECT]))",
          category: "other",
          move_number: 143,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G15\\":[\\"G15\\",\\"D12\\",\\"K17\\",\\"J15\\",\\"H16\\",\\"K18\\",\\"L18\\",\\"L16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449765/lfabgwmacqpock0r0xqx.png",
          suspended: false,
          createdAt: "2023-12-13T06:42:46.511000+00:00",
          updatedAt: "2023-12-13T06:42:46.511000+00:00",
        },
        {
          sgf_id: 111,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-11-06]PC[OGS: https://online-go.com/game/28101359]GN[AlessandroFatucci_ vs. davidrobs]PB[AlessandroFatucci_]PW[davidrobs]BR[13k]WR[11k]TM[300]OT[5x30 byo-yomi]RE[B+R]SZ[9]KM[3.5]RU[Japanese]AB[ee]PL[B]AB[cg][gg][cf][ef][if][cd][dd][ed][bc][dc][bb][eb]AW[dh][dg][bf][df][ae][ce][de][ge][bd][cc][ec][gc][cb][db](;B[fh]C[Incorrect - This was the actual move played in the game!])(;B[fc]C[CORRECT];W[gb]C[CORRECT];B[hd]C[CORRECT];W[gd]C[CORRECT];B[he]C[CORRECT];W[gf]C[CORRECT];B[fg]C[CORRECT]))",
          category: "other",
          move_number: 31,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"F7\\":[\\"F7\\",\\"F8\\",\\"G8\\",\\"C9\\",\\"H4\\"],\\"F8\\":[\\"F8\\",\\"F7\\",\\"E9\\",\\"G8\\",\\"E7\\",\\"A6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449801/w1hlwdkbkfdzv2fje8v5.png",
          suspended: false,
          createdAt: "2023-12-13T06:43:21.642000+00:00",
          updatedAt: "2023-12-13T06:43:21.642000+00:00",
        },
        {
          sgf_id: 111,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-11-06]PC[OGS: https://online-go.com/game/28101359]GN[AlessandroFatucci_ vs. davidrobs]PB[AlessandroFatucci_]PW[davidrobs]BR[13k]WR[11k]TM[300]OT[5x30 byo-yomi]RE[B+R]SZ[9]KM[3.5]RU[Japanese]AB[ee]PL[W]AB[fh][cg][fg][gg][cf][ef][if][cd][dd][ed][bc][dc][bb][eb]AW[dh][dg][eg][bf][df][ae][ce][de][ge][bd][cc][ec][gc][cb][db](;W[ch]C[Incorrect - This was the actual move played in the game!])(;W[fc]C[CORRECT];B[fb]C[CORRECT];W[gb]C[CORRECT];B[ca]C[CORRECT];W[hf]C[CORRECT])(;W[fb]C[CORRECT];B[fc]C[CORRECT];W[ea]C[CORRECT];B[gb]C[CORRECT];W[ec]C[CORRECT];B[ad]C[CORRECT]))",
          category: "other",
          move_number: 30,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"F7\\":[\\"F7\\",\\"F3\\",\\"F4\\",\\"H6\\",\\"G8\\",\\"H3\\",\\"G4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449821/lgng9obrr2fbpbrzanlm.png",
          suspended: false,
          createdAt: "2023-12-13T06:43:41.916000+00:00",
          updatedAt: "2023-12-13T06:43:41.916000+00:00",
        },
        {
          sgf_id: 86,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-04]PC[OGS: https://online-go.com/game/58592087]GN[csabaszferle vs. JosefineTemrell]PB[csabaszferle]PW[JosefineTemrell]BR[18k]WR[15k]TM[1200]OT[5x30 byo-yomi]RE[B+47.5]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[W]AB[nm][qi][ph][pg][of][pe][qe][dd][pc][pb][rb][sb][sa]AW[op][pn][qh][qg][pf][qf][re][qd][rd][qc][qb][qa][ra](;W[rh]C[Incorrect - This was the actual move played in the game!])(;W[pi]C[CORRECT];B[nh]C[CORRECT];W[pj]C[CORRECT];B[ne]C[CORRECT];W[cc]C[CORRECT];B[dc]C[CORRECT]))",
          category: "other",
          move_number: 27,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q11\\":[\\"Q11\\",\\"O12\\",\\"Q10\\",\\"O15\\",\\"C17\\",\\"D17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449838/n1x9vsi4dlgmzwokgnml.png",
          suspended: false,
          createdAt: "2023-12-13T06:43:58.861000+00:00",
          updatedAt: "2023-12-13T06:43:58.861000+00:00",
        },
        {
          sgf_id: 86,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-04]PC[OGS: https://online-go.com/game/58592087]GN[csabaszferle vs. JosefineTemrell]PB[csabaszferle]PW[JosefineTemrell]BR[18k]WR[15k]TM[1200]OT[5x30 byo-yomi]RE[B+47.5]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[B]AB[nm][qe][dd][pc][pb][rb][sb]AW[op][pn][re][qd][rd][qc][qb][ra](;B[sa]C[Incorrect - This was the actual move played in the game!])(;B[qf]C[CORRECT];W[rf]C[CORRECT];B[qg]C[CORRECT];W[rg]C[CORRECT];B[jd]C[CORRECT];W[qh]C[CORRECT]))",
          category: "other",
          move_number: 72,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D9\\":[\\"D9\\",\\"O13\\",\\"O12\\"],\\"D8\\":[\\"D8\\",\\"O13\\",\\"O12\\"],\\"D10\\":[\\"D10\\",\\"Q11\\",\\"P11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449845/fwh8duyktkyvhrkwivlo.png",
          suspended: false,
          createdAt: "2023-12-13T06:44:05.795000+00:00",
          updatedAt: "2023-12-13T06:44:05.795000+00:00",
        },
        {
          sgf_id: 86,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-04]PC[OGS: https://online-go.com/game/58592087]GN[csabaszferle vs. JosefineTemrell]PB[csabaszferle]PW[JosefineTemrell]BR[18k]WR[15k]TM[1200]OT[5x30 byo-yomi]RE[B+47.5]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[W]AB[nm][qe][dd][pc][pb]AW[op][pn][qd][qc][qb](;W[rd]C[Incorrect - This was the actual move played in the game!])(;W[re]C[CORRECT];B[qf]C[CORRECT];W[rf]C[CORRECT];B[qg]C[CORRECT];W[rg]C[CORRECT];B[qi]C[CORRECT];W[oe]C[CORRECT];B[mc]C[CORRECT]))",
          category: "other",
          move_number: 16,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R14\\":[\\"R14\\",\\"S14\\",\\"R13\\",\\"S13\\",\\"K16\\",\\"R12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449858/jjkryr7rgnm4vghgt6if.png",
          suspended: false,
          createdAt: "2023-12-13T06:44:18.486000+00:00",
          updatedAt: "2023-12-13T06:44:18.486000+00:00",
        },
        {
          sgf_id: 86,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-04]PC[OGS: https://online-go.com/game/58592087]GN[csabaszferle vs. JosefineTemrell]PB[csabaszferle]PW[JosefineTemrell]BR[18k]WR[15k]TM[1200]OT[5x30 byo-yomi]RE[B+47.5]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[B]AB[js][jr][rr][jq][kq][qq][rq][sq][kp][rp][jo][ko][lo][qo][ro][jn][mn][nn][qn][gm][hm][im][nm][qm][fl][nl][ql][fk][hk][ik][lk][mk][ok][ej][hj][mj][pj][rj][sj][ei][ii][ki][li][ni][pi][qi][ri][jh][kh][mh][oh][ph][pg][kf][lf][mf][of][rf][he][ie][je][ne][pe][qe][cd][dd][ed][fd][gd][od][bc][cc][hc][pc][ab][nb][ob][pb][rb][sb][na][sa]AW[ks][ls][ps][kr][qr][lq][pq][lp][mp][op][pp][qp][mo][no][po][hn][in][kn][ln][on][pn][jm][lm][mm][pm][el][hl][il][jl][ml][ol][pl][ek][jk][kk][dj][ij][jj][kj][lj][di][ji][si][lh][qh][rh][sh][qg][pf][qf][sf][ke][le][me][re][hd][id][jd][md][nd][qd][rd][dc][ec][fc][gc][ic][nc][qc][bb][cb][db][mb][qb][ma][qa][ra](;B[nk]C[Incorrect - This was the actual move played in the game!])(;B[em]C[CORRECT];W[dm]C[CORRECT];B[dn]C[CORRECT];W[en]C[CORRECT])(;B[cl]C[CORRECT];W[fm]C[CORRECT];B[em]C[CORRECT];W[fn]C[CORRECT];B[gl]C[CORRECT];W[dm]C[CORRECT])(;B[cm]C[CORRECT];W[fm]C[CORRECT];B[em]C[CORRECT];W[fn]C[CORRECT];B[gl]C[CORRECT])(;B[dk]C[CORRECT];W[dl]C[CORRECT])(;B[se]C[CORRECT];W[fm]C[CORRECT];B[em]C[CORRECT];W[fn]C[CORRECT];B[gl]C[CORRECT])(;B[rg]C[CORRECT];W[fm]C[CORRECT];B[em]C[CORRECT];W[fn]C[CORRECT])(;B[sg]C[CORRECT];W[fm]C[CORRECT]))",
          category: "other",
          move_number: 166,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E7\\":[\\"E7\\",\\"D7\\",\\"D6\\",\\"E6\\"],\\"C8\\":[\\"C8\\",\\"F7\\",\\"E7\\",\\"F6\\",\\"G8\\",\\"D7\\"],\\"C7\\":[\\"C7\\",\\"F7\\",\\"E7\\",\\"F6\\",\\"G8\\"],\\"D9\\":[\\"D9\\",\\"D8\\"],\\"T15\\":[\\"T15\\",\\"F7\\",\\"E7\\",\\"F6\\",\\"G8\\"],\\"S13\\":[\\"S13\\",\\"F7\\",\\"E7\\",\\"F6\\"],\\"T13\\":[\\"T13\\",\\"F7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449914/zwcccso1delaclqbtmoo.png",
          suspended: false,
          createdAt: "2023-12-13T06:45:14.488000+00:00",
          updatedAt: "2023-12-13T06:45:14.488000+00:00",
        },
        {
          sgf_id: 86,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-04]PC[OGS: https://online-go.com/game/58592087]GN[csabaszferle vs. JosefineTemrell]PB[csabaszferle]PW[JosefineTemrell]BR[18k]WR[15k]TM[1200]OT[5x30 byo-yomi]RE[B+47.5]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[B]AB[kq][kp][jo][ko][lo][jn][mn][nn][hm][im][nm][fl][nl][fk][hk][ik][lk][mk][ok][ej][mj][rj][sj][ei][ii][ki][li][qi][ri][kh][ph][pg][kf][lf][mf][of][rf][he][ie][je][ne][pe][qe][cd][dd][ed][fd][gd][od][bc][cc][hc][pc][ab][nb][ob][pb][rb][sb][na][sa]AW[lq][lp][mp][op][mo][in][kn][ln][pn][jm][lm][mm][el][hl][il][jl][ml][ek][jk][kk][dj][ij][jj][kj][lj][di][mi][si][lh][qh][rh][sh][qg][pf][qf][sf][ke][le][me][re][hd][id][jd][md][nd][qd][rd][dc][ec][fc][gc][ic][nc][qc][bb][cb][db][mb][qb][ma][qa][ra](;B[hj]C[Incorrect - This was the actual move played in the game!])(;B[gm]C[CORRECT];W[em]C[CORRECT];B[qq]C[CORRECT];W[fj]C[CORRECT]))",
          category: "other",
          move_number: 124,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G7\\":[\\"G7\\",\\"E7\\",\\"R3\\",\\"F10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449929/vcwd2liwcge828zuiigz.png",
          suspended: false,
          createdAt: "2023-12-13T06:45:29.635000+00:00",
          updatedAt: "2023-12-13T06:45:29.635000+00:00",
        },
        {
          sgf_id: 134,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-11-05]PB[AB41]PW[\u7edd\u671b\u7684\u65b021]BR[18\u7ea7]WR[17\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+46.00]TM[300]CA[UTF-8]PL[W]AB[gs][fr][hr][rr][eq][fq][iq][nq][sq][pp][qp][rp][eo][go][po][gn][kn][pn][em][fm][im][km][nm][om][fl][jl][ll][ml][dk][ek][hk][ik][rk][cj][ij][jj][bi][ci][gi][hi][ki][li][gh][ih][lh][fg][ig][jg][lg][rg][cf][ff][gf][jf][qf][ee][je][ke][le][qe][kd][ld][pd][jc][lc][oc][pc][jb][pb]AW[ds][es][fs][cr][er][cq][dq][dp][sp][qo][ro][so][dn][en][fn][qn][sn][dm][pm][rm][bl][dl][el][kl][nl][ol][ql][rl][ak][ck][jk][kk][lk][mk][qk][bj][hj][kj][nj][ii][ji][hh][jh][kh][qh][rh][gg][hg][kg][mg][qg][hf][kf][lf][mf][pf][rf][ge][he][pe][cd][ed][fd][id][jd][nd][od][kc][nc][kb][lb][mb][ob][na](;W[fo]C[Incorrect - This was the actual move played in the game!])(;W[re]C[CORRECT];B[dc]C[CORRECT];W[dd]C[CORRECT];B[cc]C[CORRECT];W[bd]C[CORRECT];B[fb]C[CORRECT])(;W[qd]C[CORRECT];B[bd]C[CORRECT];W[bc]C[CORRECT];B[be]C[CORRECT])(;W[rd]C[CORRECT];B[dc]C[CORRECT];W[dd]C[CORRECT])(;W[rc]C[CORRECT];B[rd]C[CORRECT];W[re]C[CORRECT]))",
          category: "other",
          move_number: 50,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O18\\":[\\"O18\\",\\"P18\\",\\"G14\\",\\"G17\\"],\\"S15\\":[\\"S15\\",\\"O18\\",\\"N18\\",\\"P18\\",\\"R15\\"],\\"H4\\":[\\"H4\\",\\"J6\\",\\"H3\\",\\"J4\\"],\\"R17\\":[\\"R17\\",\\"O18\\",\\"R16\\",\\"Q15\\"],\\"L7\\":[\\"L7\\",\\"C7\\",\\"C8\\",\\"E7\\"],\\"G14\\":[\\"G14\\",\\"O18\\",\\"N18\\"],\\"S16\\":[\\"S16\\",\\"S15\\",\\"R16\\"],\\"Q15\\":[\\"Q15\\",\\"R15\\"],\\"C15\\":[\\"C15\\",\\"C7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449947/ox9ufdxshnxzf3awm2cu.png",
          suspended: false,
          createdAt: "2023-12-13T06:45:48.090000+00:00",
          updatedAt: "2023-12-13T06:45:48.090000+00:00",
        },
        {
          sgf_id: 134,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-11-05]PB[AB41]PW[\u7edd\u671b\u7684\u65b021]BR[18\u7ea7]WR[17\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+46.00]TM[300]CA[UTF-8]PL[W]AB[gs][fr][hr][eq][fq][iq][nq][sq][pp][qp][rp][go][po][kn][pn][im][om][dk][ek][rk][cj][bi][ci][cf][qf][ee][pd][oc]AW[ds][es][fs][cr][er][cq][dq][dp][sp][qo][ro][dn][qn][sn][pm][rm][bl][dl][ql][rl][ak][ck][qk][bj][qh][cd][ed][fd][jd][nd][nc](;W[so]C[Incorrect - This was the actual move played in the game!])(;W[nb]C[CORRECT];B[ob]C[CORRECT];W[gf]C[CORRECT];B[gc]C[CORRECT];W[ic]C[CORRECT];B[dc]C[CORRECT];W[dd]C[CORRECT])(;W[re]C[CORRECT];B[qe]C[CORRECT];W[qc]C[CORRECT];B[nb]C[CORRECT];W[mb]C[CORRECT])(;W[qc]C[CORRECT];B[nb]C[CORRECT];W[mb]C[CORRECT];B[pb]C[CORRECT])(;W[gf]C[CORRECT];B[nb]C[CORRECT];W[mb]C[CORRECT];B[ob]C[CORRECT];W[lc]C[CORRECT])(;W[ol]C[CORRECT];B[nb]C[CORRECT])(;W[de]C[CORRECT];B[df]C[CORRECT])(;W[ce]C[CORRECT]))",
          category: "other",
          move_number: 97,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L14\\":[\\"L14\\",\\"M13\\",\\"Q15\\",\\"G12\\",\\"G14\\",\\"H9\\",\\"J8\\"],\\"Q15\\":[\\"Q15\\",\\"G12\\",\\"F11\\",\\"G14\\",\\"L14\\",\\"M13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449968/hljpiiwdd1qmqdxdktwx.png",
          suspended: false,
          createdAt: "2023-12-13T06:46:09.346000+00:00",
          updatedAt: "2023-12-13T06:46:09.346000+00:00",
        },
        {
          sgf_id: 110,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-11-27]PC[OGS: https://online-go.com/game/28658803]GN[Friendly Match]PB[meghanapple2]PW[AlessandroFatucci_]BR[12k]WR[13k]TM[180]OT[30 fischer]RE[W+T]SZ[9]KM[5.5]RU[Japanese]PL[W]AB[hi][gh][eg][gg][bf][ef][ce][de][fe][ge][he][bd][fd][hd][ac][cc][dc][bb][eb][fb][ba][da][fa][ga]AW[hh][cg][hg][ff][gf][hf][be][ee][cd][dd][ed][gd][id][ec][fc][gc][hc][gb][ha](;W[cf]C[Incorrect - This was the actual move played in the game!])(;W[df]C[CORRECT];B[cf]C[CORRECT];W[dg]C[CORRECT];B[bg]C[CORRECT];W[eh]C[CORRECT];B[ch]C[CORRECT];W[dh]C[CORRECT];B[ci]C[CORRECT];W[di]C[CORRECT]))",
          category: "other",
          move_number: 48,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D4\\":[\\"D4\\",\\"C4\\",\\"D3\\",\\"B3\\",\\"E2\\",\\"C2\\",\\"D2\\",\\"C1\\",\\"D1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450303/cxrotpgkmztkxqz53yac.png",
          suspended: false,
          createdAt: "2023-12-13T06:51:43.462000+00:00",
          updatedAt: "2023-12-13T06:51:43.462000+00:00",
        },
        {
          sgf_id: 134,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-11-05]PB[AB41]PW[\u7edd\u671b\u7684\u65b021]BR[18\u7ea7]WR[17\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+46.00]TM[300]CA[UTF-8]PL[B]AB[gs][fr][hr][rr][eq][fq][iq][nq][sq][pp][qp][rp][eo][go][po][kn][pn][em][im][km][nm][om][fl][jl][ll][ml][dk][ek][hk][ik][rk][cj][ij][jj][bi][ci][gi][hi][ki][li][gh][ih][lh][fg][ig][jg][lg][rg][cf][ff][gf][jf][qf][ee][je][ke][le][qe][kd][ld][pd][jc][lc][oc][pc][jb][pb]AW[ds][es][fs][cr][er][cq][dq][dp][sp][qo][ro][so][dn][en][qn][sn][dm][pm][rm][bl][dl][el][kl][nl][ol][ql][rl][ak][ck][jk][kk][lk][mk][qk][bj][hj][kj][nj][ii][ji][hh][jh][kh][qh][rh][gg][hg][kg][mg][qg][hf][kf][lf][mf][pf][rf][ge][he][pe][cd][ed][fd][id][jd][nd][od][kc][nc][kb][lb][mb][ob][na](;B[fm]C[Incorrect - This was the actual move played in the game!])(;B[re]C[CORRECT];W[rc]C[CORRECT];B[rb]C[CORRECT];W[sb]C[CORRECT];B[ra]C[CORRECT]))",
          category: "other",
          move_number: 153,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S15\\":[\\"S15\\",\\"S17\\",\\"S18\\",\\"T18\\",\\"S19\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702449985/oxi2kb2ntbprdocwhiui.png",
          suspended: false,
          createdAt: "2023-12-13T06:46:25.458000+00:00",
          updatedAt: "2023-12-13T06:46:25.458000+00:00",
        },
        {
          sgf_id: 133,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-10-29]PB[AB41]PW[\u4e00\u53ea\u704f\u5b50]BR[18\u7ea7]WR[16\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[qr][rr][eq][pq][ep][jp][mp][np][pp][qp][do][oo][cn][en][on][pn][dm][em][el][pl][pj][pd]AW[ps][qs][pr][dq][mq][nq][oq][cp][dp][op][no][po][qo][nn][bm][cm][bl][dl][ck][dk][gd][dc](;B[lq]C[Incorrect - This was the actual move played in the game!])(;B[qn]C[CORRECT];W[lp]C[CORRECT];B[cd]C[CORRECT];W[cc]C[CORRECT];B[mo]C[CORRECT];W[mn]C[CORRECT])(;B[ro]C[CORRECT];W[lp]C[CORRECT];B[mo]C[CORRECT];W[mn]C[CORRECT];B[cd]C[CORRECT];W[cc]C[CORRECT]))",
          category: "other",
          move_number: 45,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S4\\":[\\"S4\\",\\"N3\\",\\"M4\\",\\"L2\\",\\"L3\\",\\"K2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450025/n2gwldlsjf1gyhyw2et4.png",
          suspended: false,
          createdAt: "2023-12-13T06:47:05.871000+00:00",
          updatedAt: "2023-12-13T06:47:05.871000+00:00",
        },
        {
          sgf_id: 133,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-10-29]PB[AB41]PW[\u4e00\u53ea\u704f\u5b50]BR[18\u7ea7]WR[16\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[qr][rr][eq][lq][pq][ep][jp][mp][np][pp][qp][do][mo][oo][cn][en][on][pn][dm][em][el][pl][pj][pd]AW[ps][qs][pr][dq][mq][nq][oq][cp][dp][lp][op][no][po][qo][nn][bm][cm][bl][dl][ck][dk][gd][dc](;W[kp]C[Incorrect - This was the actual move played in the game!])(;W[rp]C[CORRECT];B[lo]C[CORRECT];W[lr]C[CORRECT];B[kp]C[CORRECT];W[qn]C[CORRECT]))",
          category: "other",
          move_number: 47,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R6\\":[\\"R6\\",\\"M4\\",\\"C16\\",\\"C17\\",\\"N5\\",\\"N6\\"],\\"S5\\":[\\"S5\\",\\"M4\\",\\"N5\\",\\"N6\\",\\"C16\\",\\"C17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450040/hxxups4tikyt6emcw5ky.png",
          suspended: false,
          createdAt: "2023-12-13T06:47:20.875000+00:00",
          updatedAt: "2023-12-13T06:47:20.875000+00:00",
        },
        {
          sgf_id: 133,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-10-29]PB[AB41]PW[\u4e00\u53ea\u704f\u5b50]BR[18\u7ea7]WR[16\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[qr][rr][eq][pq][ep][jp][mp][np][pp][do][oo][cn][en][on][pn][dm][em][el][pl][pj][pd]AW[ps][qs][pr][dq][nq][oq][cp][dp][op][no][po][qo][nn][bm][cm][bl][dl][ck][dk][gd][dc](;B[qp]C[Incorrect - This was the actual move played in the game!])(;B[rp]C[CORRECT];W[mq]C[CORRECT];B[lp]C[CORRECT];W[kr]C[CORRECT];B[kq]C[CORRECT];W[jr]C[CORRECT]))",
          category: "other",
          move_number: 61,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N2\\":[\\"N2\\",\\"P2\\",\\"S1\\",\\"J6\\",\\"K7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450045/mmzol3taimbg1lcb4buj.png",
          suspended: false,
          createdAt: "2023-12-13T06:47:26.281000+00:00",
          updatedAt: "2023-12-13T06:47:26.281000+00:00",
        },
        {
          sgf_id: 133,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-10-29]PB[AB41]PW[\u4e00\u53ea\u704f\u5b50]BR[18\u7ea7]WR[16\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[B]AB[qr][rr][eq][kq][lq][pq][ep][ip][jp][mp][np][pp][qp][do][lo][mo][oo][cn][en][jn][kn][ln][on][pn][dm][em][el][pl][pj][pd]AW[ps][qs][pr][dq][jq][mq][nq][oq][cp][dp][kp][lp][op][io][jo][ko][no][po][qo][mn][nn][bm][cm][lm][bl][dl][ck][dk][gd][dc](;B[iq]C[Incorrect - This was the actual move played in the game!])(;B[mr]C[CORRECT];W[lr]C[CORRECT];B[kr]C[CORRECT];W[rp]C[CORRECT];B[qq]C[CORRECT];W[nr]C[CORRECT];B[ls]C[CORRECT]))",
          category: "other",
          move_number: 66,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J6\\":[\\"J6\\",\\"L8\\",\\"S4\\",\\"J2\\",\\"N2\\",\\"K1\\",\\"J8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450063/bwplthwkifpzczsdeil9.png",
          suspended: false,
          createdAt: "2023-12-13T06:47:43.705000+00:00",
          updatedAt: "2023-12-13T06:47:43.705000+00:00",
        },
        {
          sgf_id: 133,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-10-29]PB[AB41]PW[\u4e00\u53ea\u704f\u5b50]BR[18\u7ea7]WR[16\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[300]CA[UTF-8]PL[W]AB[lr][qr][rr][eq][iq][kq][lq][pq][ep][ip][jp][mp][np][pp][qp][do][lo][mo][oo][cn][en][jn][kn][ln][on][pn][dm][em][el][pl][pj][pd]AW[ps][qs][jr][pr][dq][jq][mq][nq][oq][cp][dp][kp][lp][op][io][jo][ko][no][po][qo][mn][nn][bm][cm][lm][bl][dl][ck][dk][gd][dc](;W[ls]C[Incorrect - This was the actual move played in the game!])(;W[in]C[CORRECT];B[kl]C[CORRECT];W[rp]C[CORRECT];B[ir]C[CORRECT];W[mr]C[CORRECT];B[js]C[CORRECT];W[il]C[CORRECT]))",
          category: "other",
          move_number: 63,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N2\\":[\\"N2\\",\\"M2\\",\\"L2\\",\\"S4\\",\\"R3\\",\\"O2\\",\\"M1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450088/gceto5zhxyxn7b1atxxd.png",
          suspended: false,
          createdAt: "2023-12-13T06:48:08.551000+00:00",
          updatedAt: "2023-12-13T06:48:08.551000+00:00",
        },
        {
          sgf_id: 135,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u9646\u627f\u8f69]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[W]AB[kr][mr][or][pr][cq][iq][kq][nq][qq][rq][bp][ip][jp][bo][co][ko][mo][po][an][cn][fn][kn][qn][bm][nl][nk][mj][eh][eg][ef][be][ee][bd][cd][dd][fd][gd][nd][qd][gc]AW[dq][fq][jq][lq][mq][pq][dp][kp][lp][np][op][pp][qp][rp][jo][lo][ro][dn][en][ln][cm][em][km][bl][dl][ok][nj][pj][di][ei][dh][dg][qg][bf][ce][de][fe][ed][ec](;W[ni]C[Incorrect - This was the actual move played in the game!])(;W[mk]C[CORRECT];B[ri]C[CORRECT];W[rj]C[CORRECT];B[ni]C[CORRECT])(;W[fh]C[CORRECT];B[gg]C[CORRECT];W[mk]C[CORRECT];B[ri]C[CORRECT])(;W[lr]C[CORRECT];B[ls]C[CORRECT];W[mk]C[CORRECT];B[qj]C[CORRECT];W[qk]C[CORRECT]))",
          category: "other",
          move_number: 67,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L7\\":[\\"L7\\",\\"J6\\",\\"M7\\",\\"N7\\",\\"N8\\",\\"O8\\",\\"N9\\",\\"O9\\",\\"N10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450116/fwkirxgel4yhlxhmrgil.png",
          suspended: false,
          createdAt: "2023-12-13T06:48:38.082000+00:00",
          updatedAt: "2023-12-13T06:48:38.082000+00:00",
        },
        {
          sgf_id: 135,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u9646\u627f\u8f69]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[cq][bp][co][cn][dm][eh][eg][ef][be][ee][bd][cd][dd][fd][gd][nd][qd][gc]AW[dq][fq][dp][qp][bn][cm][bl][dl][di][ei][dh][dg][bf][ce][de][fe][ed][ec](;B[bo]C[Incorrect - This was the actual move played in the game!])(;B[em]C[CORRECT];W[cp]C[CORRECT];B[bo]C[CORRECT];W[bq]C[CORRECT];B[el]C[CORRECT];W[dk]C[CORRECT];B[gp]C[CORRECT])(;B[dr]C[CORRECT];W[er]C[CORRECT];B[cr]C[CORRECT];W[em]C[CORRECT];B[gh]C[CORRECT];W[ds]C[CORRECT])(;B[en]C[CORRECT];W[em]C[CORRECT];B[fm]C[CORRECT];W[dn]C[CORRECT])(;B[gh]C[CORRECT];W[cr]C[CORRECT];B[em]C[CORRECT])(;B[pp]C[CORRECT];W[pq]C[CORRECT];B[qo]C[CORRECT])(;B[oq]C[CORRECT];W[cr]C[CORRECT]))",
          category: "other",
          move_number: 46,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q3\\":[\\"Q3\\",\\"Q2\\",\\"S3\\",\\"N2\\",\\"O3\\",\\"O2\\",\\"B7\\"],\\"S3\\":[\\"S3\\",\\"N2\\",\\"M2\\",\\"M3\\",\\"O2\\"],\\"F12\\":[\\"F12\\",\\"G13\\",\\"Q3\\",\\"Q2\\"],\\"B7\\":[\\"B7\\",\\"D2\\",\\"E2\\",\\"C2\\",\\"Q3\\"],\\"D18\\":[\\"D18\\",\\"C18\\",\\"F18\\",\\"G18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450127/adry4yljh8ufzjby7dvv.png",
          suspended: false,
          createdAt: "2023-12-13T06:48:48.436000+00:00",
          updatedAt: "2023-12-13T06:48:48.436000+00:00",
        },
        {
          sgf_id: 114,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-07-27]PC[OGS: https://online-go.com/game/25711635]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[poonperm8025]PW[BorisD]BR[6k]WR[5k]TM[60]OT[10 fischer]RE[W+R]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[bh][fh][gh][hh][dg][eg][fg][bf][cf][cd][fd][dc][fc][eb]AW[ei][ch][dh][cg][gg][hg][df][ef][ff][dd][gd][cc][gc][fb](;B[bc]C[Incorrect - This was the actual move played in the game!])(;B[de]C[CORRECT];W[fe]C[CORRECT];B[gf]C[CORRECT];W[hf]C[CORRECT];B[ih]C[CORRECT];W[bg]C[CORRECT];B[ag]C[CORRECT]))",
          category: "other",
          move_number: 29,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D5\\":[\\"D5\\",\\"F5\\",\\"G4\\",\\"H4\\",\\"J2\\",\\"B3\\",\\"A3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450929/dstq12up6b2q9vrdypat.png",
          suspended: false,
          createdAt: "2023-12-13T07:02:10.217000+00:00",
          updatedAt: "2023-12-13T07:02:10.217000+00:00",
        },
        {
          sgf_id: 135,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u9646\u627f\u8f69]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[kr][or][cq][iq][kq][qq][rq][bp][ip][jp][bo][co][ko][mo][an][cn][fn][kn][bm][eh][eg][ef][be][ee][bd][cd][dd][fd][gd][nd][qd][gc]AW[dq][fq][jq][lq][mq][dp][kp][lp][op][qp][jo][lo][ro][dn][en][ln][cm][em][bl][dl][pj][di][ei][dh][dg][qg][bf][ce][de][fe][ed][ec](;B[qn]C[Incorrect - This was the actual move played in the game!])(;B[km]C[CORRECT];W[in]C[CORRECT];B[lm]C[CORRECT];W[mm]C[CORRECT];B[ml]C[CORRECT];W[nl]C[CORRECT];B[mk]C[CORRECT];W[nk]C[CORRECT];B[mj]C[CORRECT]))",
          category: "other",
          move_number: 150,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P5\\":[\\"P5\\",\\"N17\\",\\"D18\\"],\\"O17\\":[\\"O17\\",\\"M11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450137/i2t61mwcr0wryohvci14.png",
          suspended: false,
          createdAt: "2023-12-13T06:48:57.893000+00:00",
          updatedAt: "2023-12-13T06:48:57.893000+00:00",
        },
        {
          sgf_id: 135,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u9646\u627f\u8f69]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[kr][mr][or][pr][cq][iq][kq][nq][qq][rq][bp][ip][jp][bo][co][ko][mo][po][an][cn][fn][kn][qn][bm][nl][nk][mj][eh][eg][ef][be][ee][bd][cd][dd][fd][gd][nd][qd][gc]AW[dq][fq][jq][lq][mq][pq][dp][kp][lp][np][op][pp][qp][rp][jo][lo][ro][dn][en][ln][cm][em][km][bl][dl][ok][nj][pj][di][ei][ni][dh][dg][qg][bf][ce][de][fe][ed][ec](;B[qk]C[Incorrect - This was the actual move played in the game!])(;B[ol]C[CORRECT];W[pl]C[CORRECT];B[pm]C[CORRECT];W[ql]C[CORRECT];B[ll]C[CORRECT];W[nn]C[CORRECT];B[mi]C[CORRECT];W[mh]C[CORRECT]))",
          category: "other",
          move_number: 113,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O5\\":[\\"O5\\",\\"Q6\\",\\"P5\\",\\"R5\\",\\"P6\\",\\"N4\\",\\"Q7\\",\\"N9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450151/vpxjqeyevbewybp0hnfy.png",
          suspended: false,
          createdAt: "2023-12-13T06:49:11.806000+00:00",
          updatedAt: "2023-12-13T06:49:11.806000+00:00",
        },
        {
          sgf_id: 135,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u9646\u627f\u8f69]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[W]AB[ks][ls][ir][kr][mr][or][pr][cq][iq][kq][nq][qq][rq][bp][ip][jp][bo][co][ko][mo][po][an][cn][fn][kn][nn][qn][rn][bm][nm][qm][kl][ll][nl][ql][jk][mk][nk][qk][ij][mj][rj][mi][qi][eh][ih][lh][oh][rh][eg][gg][pg][sg][ef][gf][of][pf][qf][rf][be][ee][ge][re][bd][cd][dd][fd][gd][nd][qd][rd][dc][gc][rc]AW[jr][lr][dq][fq][jq][lq][mq][pq][dp][kp][lp][np][op][pp][qp][rp][ho][io][jo][lo][ro][dn][en][ln][on][cm][em][km][om][rm][bl][dl][ol][rl][ok][kj][lj][nj][pj][di][ei][ni][pi][dh][fh][gh][hh][kh][mh][ph][qh][dg][hg][lg][mg][og][qg][rg][bf][ce][de][fe][he][je][pe][qe][ed][pd][ec][jc][oc][qc][eb](;W[jn]C[Incorrect - This was the actual move played in the game!])(;W[oo]C[CORRECT];B[mc]C[CORRECT];W[db]C[CORRECT])(;W[nc]C[CORRECT];B[li]C[CORRECT]))",
          category: "other",
          move_number: 37,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E7\\":[\\"E7\\",\\"C4\\",\\"B5\\",\\"B3\\",\\"E8\\",\\"D9\\",\\"G4\\"],\\"D2\\":[\\"D2\\",\\"E2\\",\\"C2\\",\\"E7\\",\\"G12\\",\\"D1\\"],\\"E6\\":[\\"E6\\",\\"E7\\",\\"F7\\",\\"D6\\"],\\"G12\\":[\\"G12\\",\\"C2\\",\\"E7\\"],\\"Q4\\":[\\"Q4\\",\\"Q3\\",\\"R5\\"],\\"P3\\":[\\"P3\\",\\"C2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450165/pxdfnlq9k5osr185tahp.png",
          suspended: false,
          createdAt: "2023-12-13T06:49:25.979000+00:00",
          updatedAt: "2023-12-13T06:49:25.979000+00:00",
        },
        {
          sgf_id: 135,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u9646\u627f\u8f69]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[kr][mr][or][pr][cq][iq][kq][nq][qq][rq][bp][ip][jp][bo][co][ko][mo][po][an][cn][fn][kn][qn][rn][bm][nm][qm][nl][ql][nk][qk][mj][rj][qi][eh][rh][eg][sg][ef][qf][rf][be][ee][re][bd][cd][dd][fd][gd][nd][qd][rd][dc][gc][rc]AW[dq][fq][jq][lq][mq][pq][dp][kp][lp][np][op][pp][qp][rp][jo][lo][ro][dn][en][ln][cm][em][km][om][rm][bl][dl][ol][rl][ok][nj][pj][di][ei][ni][dh][qh][dg][og][qg][rg][bf][ce][de][fe][je][pe][qe][ed][pd][ec][jc][oc][qc][eb](;B[nn]C[Incorrect - This was the actual move played in the game!])(;B[no]C[CORRECT];W[pn]C[CORRECT];B[oo]C[CORRECT];W[qo]C[CORRECT];B[on]C[CORRECT];W[mp]C[CORRECT];B[pm]C[CORRECT];W[mk]C[CORRECT]))",
          category: "other",
          move_number: 211,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J13\\":[\\"J13\\",\\"H14\\",\\"K14\\",\\"K13\\",\\"J14\\",\\"F10\\",\\"J6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450208/mdmluowuvb6brrmyplnr.png",
          suspended: false,
          createdAt: "2023-12-13T06:50:09.153000+00:00",
          updatedAt: "2023-12-13T06:50:09.153000+00:00",
        },
        {
          sgf_id: 135,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-05]PB[\u9646\u627f\u8f69]PW[\u65e0\u5fc3\u7231\u68cb]BR[9\u6bb5]WR[9\u6bb5]KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[60]CA[UTF-8]PL[B]AB[ks][ls][ir][kr][mr][or][pr][cq][iq][kq][nq][qq][rq][bp][ip][jp][bo][co][mo][oo][po][an][cn][fn][hn][mn][nn][qn][rn][bm][gm][im][jm][nm][qm][hl][kl][ll][nl][ql][ik][jk][mk][nk][qk][rk][gj][hj][ij][mj][rj][ii][mi][qi][eh][ih][oh][rh][bg][eg][gg][ng][pg][sg][af][ef][gf][of][pf][qf][rf][be][ee][ge][ke][me][oe][re][se][bd][cd][dd][fd][gd][hd][kd][nd][od][qd][rd][dc][gc][kc][lc][mc][rc][gb][jb][lb][sb][ga]AW[dr][jr][lr][dq][fq][jq][lq][mq][pq][dp][gp][kp][lp][mp][np][op][pp][qp][rp][ho][io][jo][lo][no][ro][dn][en][jn][ln][on][sn][cm][em][km][lm][om][rm][sm][bl][dl][fl][gl][ol][rl][gk][hk][ok][kj][lj][nj][pj][di][ei][hi][li][ni][pi][dh][fh][gh][hh][kh][mh][nh][ph][qh][dg][hg][lg][mg][qg][rg][bf][cf][kf][ce][de][fe][he][ie][je][le][pe][qe][ed][ld][pd][ec][hc][ic][jc][oc][pc][qc][eb][hb][mb][nb][pb][rb][ia][ra](;B[go]C[Incorrect - This was the actual move played in the game!])(;B[ig]C[CORRECT];W[hf]C[CORRECT];B[jf]C[CORRECT];W[jg]C[CORRECT];B[if]C[CORRECT];W[fj]C[CORRECT];B[in]C[CORRECT]))",
          category: "other",
          move_number: 129,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L11\\":[\\"L11\\",\\"M13\\",\\"M11\\",\\"H18\\"],\\"M11\\":[\\"M11\\",\\"M13\\",\\"L11\\",\\"H18\\"],\\"J8\\":[\\"J8\\",\\"L11\\",\\"K6\\"],\\"G12\\":[\\"G12\\",\\"M13\\"],\\"H8\\":[\\"H8\\",\\"K6\\"],\\"F11\\":[\\"F11\\",\\"L11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450262/rkhduhqdn7sb06qvho8o.png",
          suspended: false,
          createdAt: "2023-12-13T06:51:02.839000+00:00",
          updatedAt: "2023-12-13T06:51:02.839000+00:00",
        },
        {
          sgf_id: 110,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-11-27]PC[OGS: https://online-go.com/game/28658803]GN[Friendly Match]PB[meghanapple2]PW[AlessandroFatucci_]BR[12k]WR[13k]TM[180]OT[30 fischer]RE[W+T]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[hi][gh][eg][gg][bf][ef][ce][de][fe][ge][he][bd][fd][hd][ac][cc][dc][bb][eb][fb][ba][da][fa][ga]AW[hh][cg][hg][cf][ff][gf][hf][be][ee][cd][dd][ed][gd][id][ec][fc][gc][hc][gb][ha](;B[ae]C[Incorrect - This was the actual move played in the game!])(;B[df]C[CORRECT];W[eh]C[CORRECT];B[fg]C[CORRECT];W[bg]C[CORRECT];B[ae]C[CORRECT];W[dh]C[CORRECT];B[bh]C[CORRECT];W[ah]C[CORRECT]))",
          category: "other",
          move_number: 49,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D4\\":[\\"D4\\",\\"E2\\",\\"F3\\",\\"B3\\",\\"A5\\",\\"D2\\",\\"B2\\",\\"A2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450279/yf4txzilorojdi0xnatl.png",
          suspended: false,
          createdAt: "2023-12-13T06:51:19.675000+00:00",
          updatedAt: "2023-12-13T06:51:19.675000+00:00",
        },
        {
          sgf_id: 110,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-11-27]PC[OGS: https://online-go.com/game/28658803]GN[Friendly Match]PB[meghanapple2]PW[AlessandroFatucci_]BR[12k]WR[13k]TM[180]OT[30 fischer]RE[W+T]SZ[9]KM[5.5]RU[Japanese]PL[W]AB[hi][gh][eg][gg][ef][ce][de][fe][ge][he][fd][hd][cc][dc][eb][fb][da]AW[hh][hg][ff][gf][hf][ee][ed][gd][id][bc][ec][fc][gc][hc][cb][db](;W[ca]C[Incorrect - This was the actual move played in the game!])(;W[bb]C[CORRECT];B[bd]C[CORRECT];W[cg]C[CORRECT];B[bf]C[CORRECT];W[eh]C[CORRECT];B[dh]C[CORRECT])(;W[dd]C[CORRECT];B[cd]C[CORRECT];W[bb]C[CORRECT];B[bd]C[CORRECT];W[cg]C[CORRECT];B[dh]C[CORRECT]))",
          category: "other",
          move_number: 34,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"B8\\":[\\"B8\\",\\"B6\\",\\"C3\\",\\"B4\\",\\"E2\\",\\"D2\\"],\\"D6\\":[\\"D6\\",\\"C6\\",\\"B8\\",\\"B6\\",\\"C3\\",\\"D2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450290/i2lz2qmeb9lt4gs09e33.png",
          suspended: false,
          createdAt: "2023-12-13T06:51:30.345000+00:00",
          updatedAt: "2023-12-13T06:51:30.345000+00:00",
        },
        {
          sgf_id: 110,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-11-27]PC[OGS: https://online-go.com/game/28658803]GN[Friendly Match]PB[meghanapple2]PW[AlessandroFatucci_]BR[12k]WR[13k]TM[180]OT[30 fischer]RE[W+T]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[hi][bh][gh][eg][gg][bf][ef][ae][ce][de][fe][ge][he][bd][fd][hd][ac][cc][dc][bb][eb][fb][ba][da][fa][ga]AW[dh][hh][bg][cg][hg][cf][ff][gf][hf][ee][cd][dd][ed][gd][id][ec][fc][gc][hc][gb][ha](;B[ag]C[Incorrect - This was the actual move played in the game!])(;B[df]C[CORRECT];W[eh]C[CORRECT];B[fg]C[CORRECT];W[ah]C[CORRECT];B[bi]C[CORRECT];W[fi]C[CORRECT];B[fh]C[CORRECT];W[ei]C[CORRECT];B[ch]C[CORRECT]))",
          category: "other",
          move_number: 53,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D4\\":[\\"D4\\",\\"E2\\",\\"F3\\",\\"A2\\",\\"B1\\",\\"F1\\",\\"F2\\",\\"E1\\",\\"C2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450348/wrzx67g9bosy8ftb49sm.png",
          suspended: false,
          createdAt: "2023-12-13T06:52:28.610000+00:00",
          updatedAt: "2023-12-13T06:52:28.610000+00:00",
        },
        {
          sgf_id: 110,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-11-27]PC[OGS: https://online-go.com/game/28658803]GN[Friendly Match]PB[meghanapple2]PW[AlessandroFatucci_]BR[12k]WR[13k]TM[180]OT[30 fischer]RE[W+T]SZ[9]KM[5.5]RU[Japanese]PL[W]AB[hi][bh][gh][eg][gg][bf][ef][ae][ce][de][fe][ge][he][bd][fd][hd][ac][cc][dc][bb][eb][fb][ba][da][fa][ga]AW[dh][hh][cg][hg][cf][ff][gf][hf][ee][cd][dd][ed][gd][id][ec][fc][gc][hc][gb][ha](;W[bg]C[Incorrect - This was the actual move played in the game!])(;W[df]C[CORRECT];B[eh]C[CORRECT];W[be]C[CORRECT];B[ch]C[CORRECT];W[dg]C[CORRECT];B[bg]C[CORRECT];W[di]C[CORRECT]))",
          category: "other",
          move_number: 52,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D4\\":[\\"D4\\",\\"E2\\",\\"B5\\",\\"C2\\",\\"D3\\",\\"B3\\",\\"D1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450357/jwafbb8lcsk7atmzhkwn.png",
          suspended: false,
          createdAt: "2023-12-13T06:52:37.811000+00:00",
          updatedAt: "2023-12-13T06:52:37.811000+00:00",
        },
        {
          sgf_id: 43,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[3x20 byo-yomi]PW[Kevxander]PB[alango]WR[7k]BR[8k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[dq][mq][fp][co][mo][ln][mm][ll][bk][ck][kk][lk][mk][qk][rk][mj][oj][pj][li][qh][gg][be][ce][ee][fe][ge][pe][qe][ed][pd][cc][dc][fc][ic][oc][qc][db][fb][hb][jb][qb]AW[jq][oq][qp][ko][jm][km][lm][ql][rl][nk][ok][pk][bj][cj][dj][kj][lj][nj][mi][oi][eh][bf][cf][ef][de][dd][fd][gd][hd][id][nd][od][qd][ec][jc][kc][mc][pc][eb][ob][pb](;B[pi]C[Incorrect - This was the actual move played in the game!])(;B[ip]C[CORRECT];W[iq]C[CORRECT];B[hp]C[CORRECT];W[jp]C[CORRECT];B[jj]C[CORRECT])(;B[jj]C[CORRECT];W[ki]C[CORRECT];B[ip]C[CORRECT];W[iq]C[CORRECT])(;B[or]C[CORRECT];W[pr]C[CORRECT];B[ip]C[CORRECT];W[iq]C[CORRECT];B[hp]C[CORRECT])(;B[mh]C[CORRECT];W[ni]C[CORRECT];B[jj]C[CORRECT];W[ki]C[CORRECT])(;B[nq]C[CORRECT]))",
          category: "other",
          move_number: 37,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C11\\":[\\"C11\\",\\"H14\\",\\"F14\\",\\"F13\\",\\"E13\\"],\\"F13\\":[\\"F13\\",\\"C10\\",\\"J3\\"],\\"D13\\":[\\"D13\\",\\"H14\\",\\"D14\\"],\\"H15\\":[\\"H15\\",\\"J15\\",\\"J14\\"],\\"C10\\":[\\"C10\\",\\"H14\\",\\"F14\\",\\"F13\\"],\\"R5\\":[\\"R5\\",\\"H14\\",\\"F14\\",\\"F13\\"],\\"D11\\":[\\"D11\\",\\"H14\\",\\"D13\\"],\\"G13\\":[\\"G13\\",\\"C10\\"],\\"S4\\":[\\"S4\\"],\\"C12\\":[\\"C12\\",\\"H14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450389/sjg2msuaje5hziizfdp4.png",
          suspended: false,
          createdAt: "2023-12-13T06:53:10.284000+00:00",
          updatedAt: "2023-12-13T06:53:10.284000+00:00",
        },
        {
          sgf_id: 43,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[3x20 byo-yomi]PW[Kevxander]PB[alango]WR[7k]BR[8k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[dq][mq][fp][co][mo][ln][mm][il][ll][bk][ck][jk][kk][lk][mk][qk][rk][ij][mj][oj][pj][li][pi][qh][gg][be][ce][ee][fe][ge][pe][qe][ed][pd][cc][dc][fc][ic][oc][qc][db][fb][hb][jb][qb]AW[jq][oq][qp][ko][jm][km][lm][ql][rl][hk][ik][nk][ok][pk][bj][cj][dj][jj][kj][lj][nj][ji][mi][oi][eh][bf][cf][ef][de][dd][fd][gd][hd][id][nd][od][qd][ec][jc][kc][mc][pc][eb][ob][pb](;B[jl]C[Incorrect - This was the actual move played in the game!])(;B[hl]C[CORRECT];W[gk]C[CORRECT];B[ip]C[CORRECT];W[iq]C[CORRECT];B[hp]C[CORRECT]))",
          category: "other",
          move_number: 39,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F13\\":[\\"F13\\",\\"C10\\",\\"J3\\",\\"C7\\"],\\"G13\\":[\\"G13\\",\\"C10\\",\\"C9\\",\\"D9\\"],\\"H15\\":[\\"H15\\",\\"J15\\",\\"J14\\"],\\"R5\\":[\\"R5\\",\\"H14\\",\\"S4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450402/yfhvgya75hdbcw2kw6xf.png",
          suspended: false,
          createdAt: "2023-12-13T06:53:23.082000+00:00",
          updatedAt: "2023-12-13T06:53:23.082000+00:00",
        },
        {
          sgf_id: 43,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[3x20 byo-yomi]PW[Kevxander]PB[alango]WR[7k]BR[8k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[W]AB[dq][mq][fp][np][op][co][mo][no][cn][hn][kn][ln][mn][pn][qn][dm][fm][gm][hm][mm][nm][om][qm][dl][el][hl][il][jl][ll][ml][bk][ck][gk][jk][kk][lk][mk][qk][rk][ij][mj][oj][pj][li][pi][lh][oh][ph][qh][gg][jg][lg][mg][pg][hf][be][ce][ee][fe][ge][pe][qe][ed][pd][cc][dc][fc][ic][oc][qc][db][fb][hb][jb][qb]AW[jq][nq][oq][lp][mp][pp][qp][io][ko][oo][po][jn][nn][on][cm][im][jm][km][lm][pm][bl][cl][fl][gl][nl][pl][ql][rl][dk][fk][hk][ik][nk][ok][pk][bj][cj][dj][hj][jj][kj][lj][nj][hi][ji][mi][ni][oi][eh][mh][nh][ng][og][bf][cf][ef][de][ne][dd][fd][gd][hd][id][nd][od][qd][ec][jc][kc][mc][pc][eb][ob][pb](;W[en]C[Incorrect - This was the actual move played in the game!])(;W[gq]C[CORRECT];B[iq]C[CORRECT];W[hq]C[CORRECT])(;W[hr]C[CORRECT];B[sl]C[CORRECT];W[sm]C[CORRECT];B[sk]C[CORRECT];W[rm]C[CORRECT])(;W[rd]C[CORRECT];B[rc]C[CORRECT];W[sc]C[CORRECT]))",
          category: "other",
          move_number: 91,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H8\\":[\\"H8\\",\\"G9\\",\\"J4\\",\\"J3\\",\\"H4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450420/a6bwv6omphcnxpackpdp.png",
          suspended: false,
          createdAt: "2023-12-13T06:53:40.868000+00:00",
          updatedAt: "2023-12-13T06:53:40.868000+00:00",
        },
        {
          sgf_id: 43,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[3x20 byo-yomi]PW[Kevxander]PB[alango]WR[7k]BR[8k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[dq][mq][fp][np][op][co][mo][no][ln][mn][pn][mm][nm][om][hl][il][jl][ll][ml][bk][ck][jk][kk][lk][mk][qk][rk][ij][mj][oj][pj][li][pi][qh][gg][be][ce][ee][fe][ge][pe][qe][ed][pd][cc][dc][fc][ic][oc][qc][db][fb][hb][jb][qb]AW[jq][nq][oq][lp][mp][qp][ko][oo][po][nn][on][jm][km][lm][pm][nl][ql][rl][hk][ik][nk][ok][pk][bj][cj][dj][jj][kj][lj][nj][hi][ji][mi][oi][eh][bf][cf][ef][de][dd][fd][gd][hd][id][nd][od][qd][ec][jc][kc][mc][pc][eb][ob][pb](;B[qn]C[Incorrect - This was the actual move played in the game!])(;B[pp]C[CORRECT];W[qo]C[CORRECT];B[pq]C[CORRECT];W[mr]C[CORRECT];B[gk]C[CORRECT])(;B[pq]C[CORRECT];W[mr]C[CORRECT];B[qn]C[CORRECT];W[pp]C[CORRECT];B[qq]C[CORRECT])(;B[oh]C[CORRECT];W[ni]C[CORRECT];B[pp]C[CORRECT];W[qo]C[CORRECT]))",
          category: "other",
          move_number: 150,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G3\\":[\\"G3\\",\\"J3\\",\\"H3\\"],\\"H2\\":[\\"H2\\",\\"T8\\",\\"T7\\",\\"T9\\",\\"S7\\"],\\"S16\\":[\\"S16\\",\\"S17\\",\\"T17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450435/qtad3o179nqoigxqhsmy.png",
          suspended: false,
          createdAt: "2023-12-13T06:53:55.863000+00:00",
          updatedAt: "2023-12-13T06:53:55.863000+00:00",
        },
        {
          sgf_id: 43,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[600]OT[3x20 byo-yomi]PW[Kevxander]PB[alango]WR[7k]BR[8k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[dq][co][qh][ee][fe][ge][pe][qe][ed][pd][cc][dc][fc][oc][qc][fb][qb]AW[oq][qp][ef][de][dd][fd][gd][hd][nd][od][qd][ec][mc][pc][eb][ob][pb](;B[db]C[Incorrect - This was the actual move played in the game!])(;B[he]C[CORRECT];W[ie]C[CORRECT];B[id]C[CORRECT];W[ic]C[CORRECT]))",
          category: "other",
          move_number: 183,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"T8\\":[\\"T8\\",\\"T7\\",\\"T9\\",\\"S7\\"],\\"A7\\":[\\"A7\\",\\"A9\\",\\"T8\\"],\\"M5\\":[\\"M5\\",\\"L4\\",\\"A7\\"],\\"L4\\":[\\"L4\\",\\"M5\\",\\"Q3\\"],\\"Q3\\":[\\"Q3\\",\\"Q2\\",\\"T8\\",\\"T7\\"],\\"S3\\":[\\"S3\\",\\"Q3\\"],\\"K16\\":[\\"K16\\",\\"L14\\"],\\"S4\\":[\\"S4\\",\\"S3\\"],\\"M3\\":[\\"M3\\",\\"L4\\"],\\"R2\\":[\\"R2\\",\\"Q2\\"],\\"O2\\":[\\"O2\\",\\"Q3\\"],\\"B7\\":[\\"B7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450451/z7zhukhielv64dpax0qj.png",
          suspended: false,
          createdAt: "2023-12-13T06:54:11.506000+00:00",
          updatedAt: "2023-12-13T06:54:11.506000+00:00",
        },
        {
          sgf_id: 132,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-18]PB[zjas98]PW[\u4e09\u7678]BR[16\u7ea7]WR[15\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[oq][fp][pp][lo][oo][qo][hn][jn][on][pn][om][ph][cd][dd][gd][pd][dc][nc]AW[dq][pq][qq][jm][lm][nm][pm][qm][rm][ol][lk][nk][pk][cf][ce][bd][cc][cb](;B[hl]C[Incorrect - This was the actual move played in the game!])(;B[or]C[CORRECT];W[np]C[CORRECT];B[mp]C[CORRECT];W[pf]C[CORRECT])(;B[be]C[CORRECT];W[bc]C[CORRECT];B[or]C[CORRECT];W[np]C[CORRECT];B[mp]C[CORRECT])(;B[bc]C[CORRECT];W[bb]C[CORRECT];B[or]C[CORRECT];W[np]C[CORRECT];B[mp]C[CORRECT]))",
          category: "other",
          move_number: 37,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P2\\":[\\"P2\\",\\"O4\\",\\"N4\\",\\"Q14\\"],\\"B15\\":[\\"B15\\",\\"B17\\",\\"P2\\",\\"O4\\",\\"N4\\"],\\"B17\\":[\\"B17\\",\\"B18\\",\\"P2\\",\\"O4\\",\\"N4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450488/y7nlwh2yipeoivjptfq2.png",
          suspended: false,
          createdAt: "2023-12-13T06:54:48.425000+00:00",
          updatedAt: "2023-12-13T06:54:48.425000+00:00",
        },
        {
          sgf_id: 132,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-18]PB[zjas98]PW[\u4e09\u7678]BR[16\u7ea7]WR[15\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[W]AB[fq][oq][ep][fp][pp][do][lo][oo][qo][dn][hn][jn][on][pn][cm][om][bl][dl][fl][hl][ck][gk][dj][ej][fj][fi][gi][ph][ig][kg][ef][gf][cd][dd][gd][pd][qd][rd][dc][nc][oc][sc][nb][na]AW[dq][eq][pq][qq][dp][co][cn][am][bm][jm][lm][nm][pm][qm][rm][ol][hk][ik][lk][nk][pk][bj][cj][gj][hj][di][ei][hi][ch][fh][gh][hh][cf][ce][bd][cc][pc][qc][rc][cb][ob][qb][rb][oa][pa][ra][sa](;W[sb]C[Incorrect - This was the actual move played in the game!])(;W[or]C[CORRECT];B[nq]C[CORRECT];W[nr]C[CORRECT];B[mr]C[CORRECT];W[mq]C[CORRECT];B[lr]C[CORRECT]))",
          category: "other",
          move_number: 96,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P2\\":[\\"P2\\",\\"O3\\",\\"O2\\",\\"N2\\",\\"N3\\",\\"M2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450496/mue4qf7sobrjvqdva9pt.png",
          suspended: false,
          createdAt: "2023-12-13T06:54:56.983000+00:00",
          updatedAt: "2023-12-13T06:54:56.983000+00:00",
        },
        {
          sgf_id: 132,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2022-02-18]PB[zjas98]PW[\u4e09\u7678]BR[16\u7ea7]WR[15\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[fq][oq][ep][fp][pp][do][lo][oo][qo][dn][hn][jn][on][pn][cm][om][bl][dl][fl][hl][ck][gk][dj][ej][fj][fi][gi][ph][ig][kg][ef][gf][cd][dd][gd][pd][qd][rd][dc][nc][oc][sc][nb][na]AW[dq][eq][pq][qq][dp][co][cn][am][bm][jm][lm][nm][pm][qm][rm][ol][hk][ik][lk][nk][pk][bj][cj][gj][hj][di][ei][hi][ch][fh][gh][hh][cf][ce][bd][cc][pc][qc][rc][cb][ob][qb][rb][sb][oa][pa][ra][sa](;B[sd]C[Incorrect - This was the actual move played in the game!])(;B[or]C[CORRECT];W[mg]C[CORRECT];B[mf]C[CORRECT];W[nf]C[CORRECT]))",
          category: "other",
          move_number: 97,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P2\\":[\\"P2\\",\\"N13\\",\\"N14\\",\\"O14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450513/fgrgzwod23dk2je3wior.png",
          suspended: false,
          createdAt: "2023-12-13T06:55:14.057000+00:00",
          updatedAt: "2023-12-13T06:55:14.057000+00:00",
        },
        {
          sgf_id: 124,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2018-10-27]PC[OGS: https://online-go.com/game/15028490]GN[CAPTAIN PEWPYPANTS vs. gcnaccount]PB[CAPTAIN PEWPYPANTS]PW[gcnaccount]BR[10k]WR[8k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[cc]PL[W]AB[cl][ck][dk][bj][ci][ee][kd]AW[em][dl][ek][cj][dj][jj][kg](;W[cm]C[Incorrect - This was the actual move played in the game!])(;W[bi]C[CORRECT];B[ej]C[CORRECT];W[di]C[CORRECT];B[fk]C[CORRECT];W[ch]C[CORRECT];B[el]C[CORRECT])(;W[di]C[CORRECT];B[ch]C[CORRECT];W[dh]C[CORRECT];B[dg]C[CORRECT])(;W[ei]C[CORRECT];B[bh]C[CORRECT];W[dd]C[CORRECT])(;W[ej]C[CORRECT];B[bh]C[CORRECT];W[eg]C[CORRECT])(;W[dd]C[CORRECT]))",
          category: "other",
          move_number: 27,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"G3\\":[\\"G3\\",\\"F4\\",\\"J11\\",\\"F11\\",\\"K9\\"],\\"D11\\":[\\"D11\\",\\"D12\\",\\"E12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450549/rnfu2kwutvllyfymqsey.png",
          suspended: false,
          createdAt: "2023-12-13T06:55:49.960000+00:00",
          updatedAt: "2023-12-13T06:55:49.960000+00:00",
        },
        {
          sgf_id: 123,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2018-12-22]PC[OGS: https://online-go.com/game/15811113]GN[Friendly Match]PB[JosekiJungle]PW[gcnaccount]BR[8k]WR[8k]TM[300]OT[5x30 byo-yomi]RE[W+4.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[hl][ak][bk][hk][ik][cj][fj][gj][hj][jj][bi][gi][ji][ch][dh][fh][eg][gg][ce][id][dc][ic][jc][jb]AW[al][bl][cl][il][jl][ck][ek][fk][gk][jk][ej][kj][ci][di][ei][fi][ki][eh][ig][kg][je][jd][kc][kb](;B[bh]C[Incorrect - This was the actual move played in the game!])(;B[hf]C[CORRECT];W[ie]C[CORRECT];B[he]C[CORRECT];W[jh]C[CORRECT];B[em]C[CORRECT])(;B[em]C[CORRECT];W[he]C[CORRECT];B[dl]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"F8\\":[\\"F8\\",\\"F7\\",\\"B6\\",\\"B3\\",\\"B7\\",\\"C8\\"],\\"B6\\":[\\"B6\\",\\"B7\\",\\"F8\\",\\"F7\\",\\"B4\\",\\"A6\\",\\"J9\\",\\"B3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450591/mw3yjhkpyp15nse8qybh.png",
          suspended: false,
          createdAt: "2023-12-13T06:56:31.510000+00:00",
          updatedAt: "2023-12-13T06:56:31.510000+00:00",
        },
        {
          sgf_id: 123,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2018-12-22]PC[OGS: https://online-go.com/game/15811113]GN[Friendly Match]PB[JosekiJungle]PW[gcnaccount]BR[8k]WR[8k]TM[300]OT[5x30 byo-yomi]RE[W+4.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[hl][ak][bk][hk][ik][bj][cj][fj][gj][hj][jj][bi][gi][ji][bh][ch][dh][fh][gh][eg][gg][ff][ce][fe][ge][ie][hd][id][dc][ic][jc][gb][hb][jb][ia]AW[al][bl][cl][il][jl][ck][ek][fk][gk][jk][dj][ej][kj][ci][di][ei][fi][ki][eh][hh][ig][kg][gf][hf][if][he][je][gd][jd][gc][kc][fb][kb][ja](;W[ga]C[Incorrect - This was the actual move played in the game!])(;W[ka]C[CORRECT];B[fc]C[CORRECT];W[jh]C[CORRECT];B[em]C[CORRECT];W[el]C[CORRECT];B[im]C[CORRECT]))",
          category: "other",
          move_number: 49,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"H8\\":[\\"H8\\",\\"J9\\",\\"H9\\",\\"K6\\",\\"E1\\"],\\"E1\\":[\\"E1\\",\\"H9\\",\\"D2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450612/cm3jostkj9efr0mxmvkq.png",
          suspended: false,
          createdAt: "2023-12-13T06:56:53.165000+00:00",
          updatedAt: "2023-12-13T06:56:53.165000+00:00",
        },
        {
          sgf_id: 123,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2018-12-22]PC[OGS: https://online-go.com/game/15811113]GN[Friendly Match]PB[JosekiJungle]PW[gcnaccount]BR[8k]WR[8k]TM[300]OT[5x30 byo-yomi]RE[W+4.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[hl][ak][bk][hk][ik][bj][cj][fj][gj][hj][jj][bi][gi][ji][bh][ch][dh][fh][gh][eg][gg][ce][ie][hd][id][dc][ic][jc][jb]AW[al][bl][cl][il][jl][ck][ek][fk][gk][jk][dj][ej][kj][ci][di][ei][fi][ki][eh][hh][ig][kg][hf][if][he][je][jd][kc][kb](;B[ge]C[Incorrect - This was the actual move played in the game!])(;B[gd]C[CORRECT];W[ff]C[CORRECT];B[gf]C[CORRECT];W[ge]C[CORRECT];B[fe]C[CORRECT];W[fd]C[CORRECT];B[ee]C[CORRECT];W[ja]C[CORRECT]))",
          category: "other",
          move_number: 59,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"G10\\":[\\"G10\\",\\"F8\\",\\"G8\\",\\"G9\\",\\"F9\\",\\"F10\\",\\"E9\\",\\"K13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450638/kogn9bvpbvybcfmzsqnx.png",
          suspended: false,
          createdAt: "2023-12-13T06:57:18.583000+00:00",
          updatedAt: "2023-12-13T06:57:18.583000+00:00",
        },
        {
          sgf_id: 123,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2018-12-22]PC[OGS: https://online-go.com/game/15811113]GN[Friendly Match]PB[JosekiJungle]PW[gcnaccount]BR[8k]WR[8k]TM[300]OT[5x30 byo-yomi]RE[W+4.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[hl][ak][bk][hk][ik][bj][cj][fj][gj][hj][jj][bi][gi][ji][bh][ch][dh][fh][gh][eg][gg][ff][ce][fe][ge][ie][hd][id][dc][ic][jc][gb][jb]AW[al][bl][cl][il][jl][ck][ek][fk][gk][jk][dj][ej][kj][ci][di][ei][fi][ki][eh][hh][ig][kg][gf][hf][if][he][je][gd][jd][gc][kc][kb](;W[fb]C[Incorrect - This was the actual move played in the game!])(;W[hb]C[CORRECT];B[kk]C[CORRECT];W[lk]C[CORRECT];B[fb]C[CORRECT];W[hc]C[CORRECT]))",
          category: "other",
          move_number: 66,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"H12\\":[\\"H12\\",\\"L3\\",\\"M3\\",\\"F12\\",\\"H11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450647/bhkgf85d89oooz8q8ud8.png",
          suspended: false,
          createdAt: "2023-12-13T06:57:27.480000+00:00",
          updatedAt: "2023-12-13T06:57:27.480000+00:00",
        },
        {
          sgf_id: 130,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2020-05-20]PB[\u661f\u96e8R]PW[bemigod]BR[7\u6bb5]WR[7\u6bb5]KM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[pr][qr][fq][pq][ip][np][on][pl][pf][qf][pd]AW[rr][qq][dp][qp][po][dm][qm][pj][pg][dd][nc](;B[pm]C[Incorrect - This was the actual move played in the game!])(;B[cq]C[CORRECT];W[dq]C[CORRECT];B[cp]C[CORRECT];W[do]C[CORRECT];B[dr]C[CORRECT];W[er]C[CORRECT])(;B[ql]C[CORRECT];W[pm]C[CORRECT];B[om]C[CORRECT];W[ol]C[CORRECT];B[ok]C[CORRECT];W[nl]C[CORRECT];B[pk]C[CORRECT])(;B[cc]C[CORRECT];W[cd]C[CORRECT];B[dc]C[CORRECT];W[fc]C[CORRECT];B[ec]C[CORRECT];W[ed]C[CORRECT])(;B[oc]C[CORRECT];W[kp]C[CORRECT];B[jn]C[CORRECT];W[kn]C[CORRECT];B[km]C[CORRECT])(;B[fc]C[CORRECT];W[kp]C[CORRECT];B[jn]C[CORRECT])(;B[cf]C[CORRECT];W[kp]C[CORRECT]))",
          category: "other",
          move_number: 23,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C3\\":[\\"C3\\",\\"D3\\",\\"C4\\",\\"D5\\",\\"D2\\",\\"E2\\"],\\"R8\\":[\\"R8\\",\\"Q7\\",\\"P7\\",\\"P8\\",\\"P9\\",\\"O8\\",\\"Q9\\"],\\"C17\\":[\\"C17\\",\\"C16\\",\\"D17\\",\\"F17\\",\\"E17\\",\\"E16\\"],\\"P17\\":[\\"P17\\",\\"L4\\",\\"K6\\",\\"L6\\",\\"L7\\"],\\"F17\\":[\\"F17\\",\\"L4\\",\\"K6\\"],\\"C14\\":[\\"C14\\",\\"L4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450681/q5dp7n2updkxxqqmerww.png",
          suspended: false,
          createdAt: "2023-12-13T06:58:01.846000+00:00",
          updatedAt: "2023-12-13T06:58:01.846000+00:00",
        },
        {
          sgf_id: 130,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2020-05-20]PB[\u661f\u96e8R]PW[bemigod]BR[7\u6bb5]WR[7\u6bb5]KM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[W]AB[pr][qr][fq][jq][pq][hp][ip][jp][mp][np][pp][qo][on][pn][qn][pm][ll][ml][pl][lk][qk][rk][mj][qj][di][fi][mi][eh][fh][gh][hh][nh][rh][ng][nf][pf][qf][pd][oc][pc][pb]AW[rs][dr][rr][kq][qq][dp][kp][qp][io][jo][no][po][ro][mn][rn][dm][qm][rm][ql][mk][pk][cj][dj][ej][fj][pj][ei][gi][li][pi][mh][mg][pg][dd][jd][od][cc][gc][nc][ob](;W[lo]C[Incorrect - This was the actual move played in the game!])(;W[oo]C[CORRECT];B[ln]C[CORRECT];W[nm]C[CORRECT];B[ol]C[CORRECT];W[nl]C[CORRECT];B[ok]C[CORRECT]))",
          category: "other",
          move_number: 82,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P5\\":[\\"P5\\",\\"M6\\",\\"O7\\",\\"P8\\",\\"O8\\",\\"P9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450703/n4tsoovk2yr0g9uyksax.png",
          suspended: false,
          createdAt: "2023-12-13T06:58:24.169000+00:00",
          updatedAt: "2023-12-13T06:58:24.169000+00:00",
        },
        {
          sgf_id: 130,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2020-05-20]PB[\u661f\u96e8R]PW[bemigod]BR[7\u6bb5]WR[7\u6bb5]KM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]AP[foxwq]RE[B+R]TM[60]CA[UTF-8]PL[B]AB[pr][qr][fq][jq][pq][ip][jp][np][on][pn][qn][pm][ll][ml][pl][lk][qk][rk][mj][qj][di][fi][mi][eh][fh][gh][hh][nh][rh][ng][nf][pf][qf][pd][oc][pc][pb]AW[rs][dr][rr][kq][qq][dp][kp][qp][jo][po][mn][rn][dm][qm][rm][ql][mk][pk][cj][dj][ej][fj][pj][ei][gi][li][pi][mh][mg][pg][dd][jd][od][cc][gc][nc][ob](;B[qo]C[Incorrect - This was the actual move played in the game!])(;B[io]C[CORRECT];W[jn]C[CORRECT];B[lo]C[CORRECT];W[mo]C[CORRECT])(;B[ko]C[CORRECT];W[mp]C[CORRECT];B[kn]C[CORRECT];W[nq]C[CORRECT];B[op]C[CORRECT];W[jr]C[CORRECT];B[ir]C[CORRECT]))",
          category: "other",
          move_number: 132,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B13\\":[\\"B13\\",\\"G14\\",\\"H15\\",\\"B14\\"],\\"D13\\":[\\"D13\\",\\"B13\\",\\"B12\\",\\"B15\\",\\"A13\\",\\"B14\\"],\\"B14\\":[\\"B14\\",\\"B15\\",\\"B13\\",\\"C16\\",\\"B17\\",\\"E16\\",\\"E17\\"],\\"H2\\":[\\"H2\\",\\"H3\\",\\"B13\\",\\"G14\\",\\"H14\\"],\\"B12\\":[\\"B12\\",\\"B15\\",\\"B14\\",\\"C16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450729/mzbzkgknzbhon1dvax5t.png",
          suspended: false,
          createdAt: "2023-12-13T06:58:49.725000+00:00",
          updatedAt: "2023-12-13T06:58:49.725000+00:00",
        },
        {
          sgf_id: 115,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-26]PC[OGS: https://online-go.com/game/24984266]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[BorisD]PW[Patrice]BR[5k]WR[5k]TM[180]OT[3x30 byo-yomi]RE[W+0.5]SZ[9]KM[5.5]RU[Chinese]PL[B]AB[ci][ei][bh][dh][fh][cg][gg][af][bf][gf][dd][ed][fd][cc]AW[eh][ag][dg][eg][fg][ff][be][ce][de][fe][ge][cd][bc](;B[gh]C[Incorrect - This was the actual move played in the game!])(;B[gd]C[CORRECT];W[he]C[CORRECT];B[hh]C[CORRECT];W[hc]C[CORRECT];B[gc]C[CORRECT];W[hb]C[CORRECT])(;B[hd]C[CORRECT];W[gd]C[CORRECT];B[gc]C[CORRECT])(;B[hc]C[CORRECT]))",
          category: "other",
          move_number: 31,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"G6\\":[\\"G6\\",\\"H5\\",\\"H2\\",\\"H7\\",\\"G7\\",\\"H8\\"],\\"H6\\":[\\"H6\\",\\"G6\\",\\"G7\\"],\\"H7\\":[\\"H7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450783/gagnk6emowq4qn2prvq9.png",
          suspended: false,
          createdAt: "2023-12-13T06:59:43.565000+00:00",
          updatedAt: "2023-12-13T06:59:43.565000+00:00",
        },
        {
          sgf_id: 115,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-06-26]PC[OGS: https://online-go.com/game/24984266]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[BorisD]PW[Patrice]BR[5k]WR[5k]TM[180]OT[3x30 byo-yomi]RE[W+0.5]SZ[9]KM[5.5]RU[Chinese]PL[W]AB[ci][ei][bh][dh][fh][gh][cg][gg][af][bf][gf][dd][ed][fd][gd][cc][fc][cb][db][fb]AW[eh][ag][dg][eg][fg][ff][be][ce][de][fe][ge][cd][hd][bc][gc][hc][bb][gb](;W[ea]C[Incorrect - This was the actual move played in the game!])(;W[ca]C[CORRECT];B[hf]C[CORRECT];W[he]C[CORRECT];B[cf]C[CORRECT];W[df]C[CORRECT])(;W[ec]C[CORRECT];B[hf]C[CORRECT];W[he]C[CORRECT];B[cf]C[CORRECT];W[df]C[CORRECT];B[ae]C[CORRECT]))",
          category: "other",
          move_number: 57,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"C4\\":[\\"C4\\",\\"E4\\",\\"E5\\",\\"D4\\",\\"D1\\",\\"B6\\"],\\"H5\\":[\\"H5\\"],\\"J5\\":[\\"J5\\"],\\"J6\\":[\\"J6\\"],\\"A7\\":[\\"A7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450810/n8q3m5qmx458vtqz5c4f.png",
          suspended: false,
          createdAt: "2023-12-13T07:00:10.626000+00:00",
          updatedAt: "2023-12-13T07:00:10.626000+00:00",
        },
        {
          sgf_id: 100,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-24]PC[OGS: https://online-go.com/game/48836629]GN[grebal vs. Grok Grock]PB[grebal]PW[Grok Grock]BR[13k]WR[12k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[kj]PL[W]AB[fk][jd][jc]AW[cj][cc][kc](;W[kb]C[Incorrect - This was the actual move played in the game!])(;W[kd]C[CORRECT];B[kf]C[CORRECT];W[ke]C[CORRECT];B[jf]C[CORRECT];W[je]C[CORRECT];B[ie]C[CORRECT])(;W[jj]C[CORRECT];B[ki]C[CORRECT];W[kd]C[CORRECT];B[kf]C[CORRECT]))",
          category: "other",
          move_number: 7,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"L10\\":[\\"L10\\",\\"L8\\",\\"L9\\",\\"K8\\",\\"K9\\",\\"J9\\"],\\"K4\\":[\\"K4\\",\\"L5\\",\\"L10\\",\\"L8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450853/pyxogcj0kto5sken95ac.png",
          suspended: false,
          createdAt: "2023-12-13T07:00:53.877000+00:00",
          updatedAt: "2023-12-13T07:00:53.877000+00:00",
        },
        {
          sgf_id: 100,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-24]PC[OGS: https://online-go.com/game/48836629]GN[grebal vs. Grok Grock]PB[grebal]PW[Grok Grock]BR[13k]WR[12k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[kj]PL[W]AB[fk][le][jd][kd][jc][ib][lb]AW[cj][ld][md][cc][kc][jb][kb](;W[ia]C[Incorrect - This was the actual move played in the game!])(;W[ic]C[CORRECT];B[id]C[CORRECT];W[hc]C[CORRECT];B[lc]C[CORRECT];W[hb]C[CORRECT]))",
          category: "other",
          move_number: 15,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"J11\\":[\\"J11\\",\\"J10\\",\\"H11\\",\\"M11\\",\\"H12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450870/yd8nxucth4gfz5ipoh9k.png",
          suspended: false,
          createdAt: "2023-12-13T07:01:10.700000+00:00",
          updatedAt: "2023-12-13T07:01:10.700000+00:00",
        },
        {
          sgf_id: 100,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-24]PC[OGS: https://online-go.com/game/48836629]GN[grebal vs. Grok Grock]PB[grebal]PW[Grok Grock]BR[13k]WR[12k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[kj]PL[W]AB[fk][le][jd][kd][jc][hb][ib][lb]AW[cj][ld][md][cc][kc][jb][kb][ia](;W[ja]C[Incorrect - This was the actual move played in the game!])(;W[mb]C[CORRECT];B[di]C[CORRECT];W[jj]C[CORRECT];B[kk]C[CORRECT]))",
          category: "other",
          move_number: 17,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"N12\\":[\\"N12\\",\\"D5\\",\\"K4\\",\\"L3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450877/q8ylwfqeniymexvjgqni.png",
          suspended: false,
          createdAt: "2023-12-13T07:01:17.849000+00:00",
          updatedAt: "2023-12-13T07:01:17.849000+00:00",
        },
        {
          sgf_id: 114,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-07-27]PC[OGS: https://online-go.com/game/25711635]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[poonperm8025]PW[BorisD]BR[6k]WR[5k]TM[60]OT[10 fischer]RE[W+R]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[fi][ah][bh][fh][gh][hh][ih][dg][eg][fg][ig][bf][cf][hf][if][be][bd][cd][fd][bc][dc][fc][eb][hb][ea][fa]AW[bi][ei][hi][ch][dh][ag][bg][cg][gg][hg][df][ef][ff][gf][ce][ge][he][ie][dd][ed][gd][cc][gc][fb][gb][ga](;B[ec]C[Incorrect - This was the actual move played in the game!])(;B[cb]C[CORRECT];W[ec]C[CORRECT];B[de]C[CORRECT];W[ee]C[CORRECT]))",
          category: "other",
          move_number: 53,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"C8\\":[\\"C8\\",\\"E7\\",\\"D5\\",\\"E5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450891/m4dgs41d5boioqzz86zv.png",
          suspended: false,
          createdAt: "2023-12-13T07:01:32.080000+00:00",
          updatedAt: "2023-12-13T07:01:32.080000+00:00",
        },
        {
          sgf_id: 113,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-10-20]PC[OGS: https://online-go.com/game/27705836]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[mvs]PW[Dzhelilov]BR[4k]WR[6k]TM[30]OT[10 fischer]RE[W+6.5]SZ[9]KM[5.5]RU[Chinese]PL[W]AB[fg][gg][ef][ee][ed][fd][gd][cc][ec]AW[fh][eg][df][ff][de][dd][dc][fc](;W[gh]C[Incorrect - This was the actual move played in the game!])(;W[dh]C[CORRECT];B[db]C[CORRECT];W[gf]C[CORRECT];B[be]C[CORRECT];W[bf]C[CORRECT])(;W[eb]C[CORRECT];B[dg]C[CORRECT];W[eh]C[CORRECT];B[cg]C[CORRECT];W[cf]C[CORRECT];B[bf]C[CORRECT];W[be]C[CORRECT];B[bg]C[CORRECT];W[gh]C[CORRECT])(;W[cb]C[CORRECT];B[dg]C[CORRECT];W[eh]C[CORRECT];B[cg]C[CORRECT];W[gh]C[CORRECT];B[hg]C[CORRECT]))",
          category: "other",
          move_number: 18,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D2\\":[\\"D2\\",\\"D8\\",\\"G4\\",\\"B5\\",\\"B4\\"],\\"E8\\":[\\"E8\\",\\"D3\\",\\"E2\\",\\"C3\\",\\"C4\\",\\"B4\\",\\"B5\\",\\"B3\\",\\"G2\\"],\\"C8\\":[\\"C8\\",\\"D3\\",\\"E2\\",\\"C3\\",\\"G2\\",\\"H3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450996/mxtyqp8cpumjz4k4krwm.png",
          suspended: false,
          createdAt: "2023-12-13T07:03:16.745000+00:00",
          updatedAt: "2023-12-13T07:03:16.745000+00:00",
        },
        {
          sgf_id: 113,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-10-20]PC[OGS: https://online-go.com/game/27705836]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[mvs]PW[Dzhelilov]BR[4k]WR[6k]TM[30]OT[10 fischer]RE[W+6.5]SZ[9]KM[5.5]RU[Chinese]PL[B]AB[fg][gg][ef][ee][ed][fd][gd][cc][ec]AW[fh][gh][eg][df][ff][de][dd][dc][fc](;B[hg]C[Incorrect - This was the actual move played in the game!])(;B[db]C[CORRECT];W[cb]C[CORRECT];B[bb]C[CORRECT];W[bc]C[CORRECT];B[dg]C[CORRECT])(;B[dg]C[CORRECT];W[eh]C[CORRECT];B[db]C[CORRECT];W[cg]C[CORRECT];B[hg]C[CORRECT];W[hh]C[CORRECT];B[ih]C[CORRECT]))",
          category: "other",
          move_number: 19,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D8\\":[\\"D8\\",\\"C8\\",\\"B8\\",\\"B7\\",\\"D3\\"],\\"D3\\":[\\"D3\\",\\"E2\\",\\"D8\\",\\"C3\\",\\"H3\\",\\"H2\\",\\"J2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451012/ittoid2ppvelim7flecl.png",
          suspended: false,
          createdAt: "2023-12-13T07:03:33.126000+00:00",
          updatedAt: "2023-12-13T07:03:33.126000+00:00",
        },
        {
          sgf_id: 113,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-10-20]PC[OGS: https://online-go.com/game/27705836]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[mvs]PW[Dzhelilov]BR[4k]WR[6k]TM[30]OT[10 fischer]RE[W+6.5]SZ[9]KM[5.5]RU[Chinese]PL[B]AB[bh][ch][dh][dg][fg][gg][hg][ef][ee][ed][fd][gd][cc][ec]AW[ah][eh][fh][gh][bg][cg][eg][df][ff][de][dd][dc][fc][cb](;B[ag]C[Incorrect - This was the actual move played in the game!])(;B[db]C[CORRECT];W[cd]C[CORRECT];B[cf]C[CORRECT];W[bf]C[CORRECT];B[hh]C[CORRECT];W[bi]C[CORRECT];B[ca]C[CORRECT]))",
          category: "other",
          move_number: 29,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"D8\\":[\\"D8\\",\\"C6\\",\\"C4\\",\\"B4\\",\\"H2\\",\\"B1\\",\\"C9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451031/dcjloypbv80dbradxfqh.png",
          suspended: false,
          createdAt: "2023-12-13T07:03:51.514000+00:00",
          updatedAt: "2023-12-13T07:03:51.514000+00:00",
        },
        {
          sgf_id: 108,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2021-06-24]PC[OGS: https://online-go.com/game/34776344]GN[Partie amicale]PB[AlessandroFatucci_]PW[Hihiove]BR[13k]WR[13k]TM[0]OT[300 simple]RE[B+R]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[ef][ee][ed][dc][fc]AW[ff][fe][fd][ec][eb](;B[fb]C[Incorrect - This was the actual move played in the game!])(;B[gc]C[CORRECT];W[eg]C[CORRECT];B[dg]C[CORRECT];W[fg]C[CORRECT];B[cd]C[CORRECT];W[dh]C[CORRECT]))",
          category: "other",
          move_number: 11,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"G7\\":[\\"G7\\",\\"E3\\",\\"D3\\",\\"F3\\",\\"C6\\",\\"D2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451098/qf3yrix3dfg1hiaebm3b.png",
          suspended: false,
          createdAt: "2023-12-13T07:04:58.496000+00:00",
          updatedAt: "2023-12-13T07:04:58.496000+00:00",
        },
        {
          sgf_id: 106,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-01-29]PC[OGS: https://online-go.com/game/40797080]GN[AlessandroFatucci_ vs. 2CupsOfAdorable]PB[AlessandroFatucci_]PW[2CupsOfAdorable]BR[12k]WR[12k]TM[300]OT[5x30 byo-yomi]RE[W+R]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[ci][di][ei][ch][eh][eg][fg][cf][df][ff][gf][ae][be][ee][bd][bc][ec][bb][db]AW[bi][fi][bh][dh][fh][hh][bg][cg][dg][gg][af][bf][hf][ce][ge][gd][cc][fc][hc][gb](;B[ah]C[Incorrect - This was the actual move played in the game!])(;B[ed]C[CORRECT];W[ah]C[CORRECT];B[fb]C[CORRECT];W[fa]C[CORRECT];B[ea]C[CORRECT];W[eb]C[CORRECT])(;B[gh]C[CORRECT];W[gi]C[CORRECT];B[ed]C[CORRECT];W[fe]C[CORRECT];B[ef]C[CORRECT])(;B[gi]C[CORRECT];W[gh]C[CORRECT];B[ed]C[CORRECT];W[fe]C[CORRECT])(;B[hg]C[CORRECT];W[ig]C[CORRECT];B[ed]C[CORRECT];W[fe]C[CORRECT]))",
          category: "other",
          move_number: 41,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"E6\\":[\\"E6\\",\\"A2\\",\\"F8\\",\\"F9\\",\\"E9\\",\\"E8\\"],\\"G2\\":[\\"G2\\",\\"G1\\",\\"E6\\",\\"F5\\",\\"E4\\"],\\"G1\\":[\\"G1\\",\\"G2\\",\\"E6\\",\\"F5\\"],\\"H3\\":[\\"H3\\",\\"J3\\",\\"E6\\",\\"F5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451162/zexvhzciougblrdlhyc1.png",
          suspended: false,
          createdAt: "2023-12-13T07:06:03.176000+00:00",
          updatedAt: "2023-12-13T07:06:03.176000+00:00",
        },
        {
          sgf_id: 106,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-01-29]PC[OGS: https://online-go.com/game/40797080]GN[AlessandroFatucci_ vs. 2CupsOfAdorable]PB[AlessandroFatucci_]PW[2CupsOfAdorable]BR[12k]WR[12k]TM[300]OT[5x30 byo-yomi]RE[W+R]SZ[9]KM[5.5]RU[Japanese]PL[W]AB[ci][di][ei][ah][ch][eh][eg][fg][cf][df][ff][gf][ae][be][ee][bd][bc][ec][bb][db]AW[bi][fi][bh][dh][fh][hh][bg][cg][dg][gg][af][bf][hf][ce][ge][gd][cc][fc][hc][gb](;W[de]C[Incorrect - This was the actual move played in the game!])(;W[fe]C[CORRECT];B[de]C[CORRECT];W[ef]C[CORRECT];B[eb]C[CORRECT];W[fa]C[CORRECT];B[fb]C[CORRECT]))",
          category: "other",
          move_number: 42,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"F5\\":[\\"F5\\",\\"D5\\",\\"E4\\",\\"E8\\",\\"F9\\",\\"F8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451183/i7m8qyoobxercv3lmbcs.png",
          suspended: false,
          createdAt: "2023-12-13T07:06:23.525000+00:00",
          updatedAt: "2023-12-13T07:06:23.525000+00:00",
        },
        {
          sgf_id: 106,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-01-29]PC[OGS: https://online-go.com/game/40797080]GN[AlessandroFatucci_ vs. 2CupsOfAdorable]PB[AlessandroFatucci_]PW[2CupsOfAdorable]BR[12k]WR[12k]TM[300]OT[5x30 byo-yomi]RE[W+R]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[ci][di][ei][ah][ch][eh][eg][fg][cf][df][ff][gf][ae][be][ee][bd][bc][ec][bb][db]AW[bi][fi][bh][dh][fh][hh][bg][cg][dg][gg][af][bf][hf][ce][de][ge][gd][cc][fc][hc][gb](;B[ef]C[Incorrect - This was the actual move played in the game!])(;B[ed]C[CORRECT];W[eb]C[CORRECT];B[ea]C[CORRECT];W[ef]C[CORRECT];B[df]C[CORRECT];W[fe]C[CORRECT];B[ef]C[CORRECT]))",
          category: "other",
          move_number: 43,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"E6\\":[\\"E6\\",\\"E8\\",\\"E9\\",\\"E4\\",\\"D4\\",\\"F5\\",\\"E4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451220/h2tpdqygprecnobwtw4e.png",
          suspended: false,
          createdAt: "2023-12-13T07:07:00.917000+00:00",
          updatedAt: "2023-12-13T07:07:00.917000+00:00",
        },
        {
          sgf_id: 104,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-20]PC[OGS: https://online-go.com/game/48760474]GN[DielesAlder vs. Grok Grock]PB[DielesAlder]PW[Grok Grock]BR[14k]WR[12k]TM[600]OT[4x30 byo-yomi]RE[B+16.5]SZ[13]KM[0.5]RU[Japanese]AB[jj]PL[B]AB[lk][ke][kd][kc][gb][hb][ib][kb][ja]AW[ck][je][jd][cc][gc][hc][ic][jc][fb][jb](;B[ga]C[Incorrect - This was the actual move played in the game!])(;B[jf]C[CORRECT];W[if]C[CORRECT];B[fc]C[CORRECT];W[fd]C[CORRECT];B[ec]C[CORRECT];W[eb]C[CORRECT];B[ed]C[CORRECT];W[ee]C[CORRECT];B[dd]C[CORRECT];W[de]C[CORRECT])(;B[fc]C[CORRECT];W[fd]C[CORRECT];B[ec]C[CORRECT];W[eb]C[CORRECT];B[ed]C[CORRECT];W[ee]C[CORRECT];B[dd]C[CORRECT];W[de]C[CORRECT])(;B[cd]C[CORRECT]))",
          category: "other",
          move_number: 25,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"J13\\":[\\"J13\\",\\"E12\\",\\"H13\\",\\"D11\\",\\"C10\\",\\"C12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451241/q9aqdgpdh7ytfhzjl4uo.png",
          suspended: false,
          createdAt: "2023-12-13T07:07:22.089000+00:00",
          updatedAt: "2023-12-13T07:07:22.089000+00:00",
        },
        {
          sgf_id: 104,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-20]PC[OGS: https://online-go.com/game/48760474]GN[DielesAlder vs. Grok Grock]PB[DielesAlder]PW[Grok Grock]BR[14k]WR[12k]TM[600]OT[4x30 byo-yomi]RE[B+16.5]SZ[13]KM[0.5]RU[Japanese]AB[jj]PL[W]AB[lk][ke][fd][kd][fc][kc][gb][hb][ib][kb][ga][ja]AW[ck][je][jd][cc][ec][gc][hc][ic][jc][fb][jb][fa](;W[fe]C[Incorrect - This was the actual move played in the game!])(;W[ia]C[CORRECT];B[eb]C[CORRECT];W[ha]C[CORRECT];B[dc]C[CORRECT];W[cd]C[CORRECT];B[cb]C[CORRECT]))",
          category: "other",
          move_number: 69,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"G3\\":[\\"G3\\",\\"D3\\",\\"C4\\",\\"G4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451259/gspfu29nxp2g7wslkknw.png",
          suspended: false,
          createdAt: "2023-12-13T07:07:40.105000+00:00",
          updatedAt: "2023-12-13T07:07:40.105000+00:00",
        },
        {
          sgf_id: 104,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-20]PC[OGS: https://online-go.com/game/48760474]GN[DielesAlder vs. Grok Grock]PB[DielesAlder]PW[Grok Grock]BR[14k]WR[12k]TM[600]OT[4x30 byo-yomi]RE[B+16.5]SZ[13]KM[0.5]RU[Japanese]AB[jj]PL[W]AB[lk][ke][ed][fd][kd][fc][kc][gb][hb][ib][kb][ga][ja]AW[ck][fe][je][jd][cc][ec][gc][hc][ic][jc][fb][jb][fa](;W[dc]C[Incorrect - This was the actual move played in the game!])(;W[ia]C[CORRECT];B[dc]C[CORRECT];W[cd]C[CORRECT];B[eb]C[CORRECT];W[ha]C[CORRECT];B[cb]C[CORRECT];W[df]C[CORRECT]))",
          category: "other",
          move_number: 60,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"F3\\":[\\"F3\\",\\"E2\\",\\"E3\\",\\"F2\\",\\"D3\\"],\\"D3\\":[\\"D3\\",\\"D2\\",\\"E3\\",\\"E2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451269/w49qyowukns960ahgs45.png",
          suspended: false,
          createdAt: "2023-12-13T07:07:49.442000+00:00",
          updatedAt: "2023-12-13T07:07:49.442000+00:00",
        },
        {
          sgf_id: 103,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-21]PC[OGS: https://online-go.com/game/48777408]GN[duncan.bordin vs. Grok Grock]PB[duncan.bordin]PW[Grok Grock]BR[15k]WR[13k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[jj]PL[B]AB[im][km][hl][il][gk][jk][cj][dj][ej][fj][hj][ij][kj][ei][li][mi][jh][jg][ke]AW[jm][jl][kl][ll][ml][kk][gj][lj][mj][ci][di][fi][hi][ii][eh][fh][gh][dd][kc](;B[ji]C[Incorrect - This was the actual move played in the game!])(;B[ic]C[CORRECT];W[fc]C[CORRECT];B[cg]C[CORRECT])(;B[cf]C[CORRECT];W[bh]C[CORRECT];B[ef]C[CORRECT])(;B[cg]C[CORRECT];W[bj]C[CORRECT];B[bk]C[CORRECT];W[dg]C[CORRECT])(;B[cc]C[CORRECT];W[cd]C[CORRECT];B[dc]C[CORRECT];W[fc]C[CORRECT])(;B[df]C[CORRECT];W[ef]C[CORRECT];B[cc]C[CORRECT])(;B[dg]C[CORRECT];W[dh]C[CORRECT];B[cc]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"J11\\":[\\"J11\\",\\"F11\\",\\"C7\\"],\\"C8\\":[\\"C8\\",\\"B6\\",\\"E8\\"],\\"C7\\":[\\"C7\\",\\"B4\\",\\"B3\\",\\"D7\\"],\\"C11\\":[\\"C11\\",\\"C10\\",\\"D11\\",\\"F11\\"],\\"D8\\":[\\"D8\\",\\"E8\\",\\"C11\\"],\\"D7\\":[\\"D7\\",\\"D6\\",\\"C11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451342/ygwjvvmpdzhzup6axzqf.png",
          suspended: false,
          createdAt: "2023-12-13T07:09:02.885000+00:00",
          updatedAt: "2023-12-13T07:09:02.885000+00:00",
        },
        {
          sgf_id: 103,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-21]PC[OGS: https://online-go.com/game/48777408]GN[duncan.bordin vs. Grok Grock]PB[duncan.bordin]PW[Grok Grock]BR[15k]WR[13k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[jj]PL[W]AB[im][km][hl][il][gk][jk][cj][dj][ej][fj][hj][ij][kj][ei][ji][li][mi][ih][jh][jg][hf][if][ke][cd][jd][kd][ld][cc][jc][cb][ca][da]AW[jm][jl][kl][ll][ml][kk][bj][gj][lj][mj][ci][di][fi][hi][ii][eh][fh][gh][ig][ce][ge][dd][id][dc][ic][kc][lc][db][fb][jb][ea](;W[hg]C[Incorrect - This was the actual move played in the game!])(;W[be]C[CORRECT];B[bk]C[CORRECT];W[bi]C[CORRECT];B[gf]C[CORRECT];W[ff]C[CORRECT];B[ib]C[CORRECT]))",
          category: "other",
          move_number: 69,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"B9\\":[\\"B9\\",\\"B3\\",\\"B5\\",\\"G8\\",\\"F8\\",\\"J12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451347/lwclvdyupuwct2ugf9o7.png",
          suspended: false,
          createdAt: "2023-12-13T07:09:08.131000+00:00",
          updatedAt: "2023-12-13T07:09:08.131000+00:00",
        },
        {
          sgf_id: 103,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-21]PC[OGS: https://online-go.com/game/48777408]GN[duncan.bordin vs. Grok Grock]PB[duncan.bordin]PW[Grok Grock]BR[15k]WR[13k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[jj]PL[B]AB[im][km][hl][il][gk][jk][cj][dj][ej][fj][hj][ij][kj][ei][ji][li][mi][jh][jg][hf][if][ke][cd][jd][kd][ld][cc][jc][cb][ca][da]AW[jm][jl][kl][ll][ml][kk][bj][gj][lj][mj][ci][di][fi][hi][ii][eh][fh][gh][ig][ce][ge][dd][id][dc][ic][kc][lc][db][fb][jb][ea](;B[ih]C[Incorrect - This was the actual move played in the game!])(;B[be]C[CORRECT];W[bf]C[CORRECT];B[cf]C[CORRECT];W[de]C[CORRECT];B[bg]C[CORRECT];W[bd]C[CORRECT];B[af]C[CORRECT];W[bc]C[CORRECT];B[bi]C[CORRECT]))",
          category: "other",
          move_number: 68,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"B9\\":[\\"B9\\",\\"B8\\",\\"C8\\",\\"D9\\",\\"B7\\",\\"B10\\",\\"A8\\",\\"B11\\",\\"B5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451360/yvhbyewhg0uuelfzhmbv.png",
          suspended: false,
          createdAt: "2023-12-13T07:09:20.646000+00:00",
          updatedAt: "2023-12-13T07:09:20.646000+00:00",
        },
        {
          sgf_id: 103,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-21]PC[OGS: https://online-go.com/game/48777408]GN[duncan.bordin vs. Grok Grock]PB[duncan.bordin]PW[Grok Grock]BR[15k]WR[13k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[jj]PL[B]AB[im][km][hl][il][gk][jk][cj][dj][ej][fj][hj][ij][kj][ei][ji][li][mi][ih][jh][jg][ff][gf][hf][if][jf][lf][fe][ke][cd][fd][gd][hd][jd][kd][ld][cc][hc][jc][mc][cb][hb][mb][ca][da][ga][ha][ia]AW[jm][jl][kl][ll][ml][kk][bj][gj][lj][mj][ci][di][fi][hi][ii][eh][fh][gh][kh][gg][hg][ig][ef][kf][ce][ee][ge][he][ie][je][dd][id][dc][gc][ic][kc][lc][db][fb][gb][ib][jb][kb][lb][ea][ja][la](;B[kg]C[Incorrect - This was the actual move played in the game!])(;B[be]C[CORRECT];W[bf]C[CORRECT];B[cf]C[CORRECT];W[de]C[CORRECT];B[bg]C[CORRECT];W[bd]C[CORRECT];B[af]C[CORRECT];W[bc]C[CORRECT]))",
          category: "other",
          move_number: 102,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"B9\\":[\\"B9\\",\\"B8\\",\\"C8\\",\\"D9\\",\\"B7\\",\\"B10\\",\\"A8\\",\\"B11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451372/tknuwvz2zeuuhzvmswjf.png",
          suspended: false,
          createdAt: "2023-12-13T07:09:33.256000+00:00",
          updatedAt: "2023-12-13T07:09:33.256000+00:00",
        },
        {
          sgf_id: 103,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-21]PC[OGS: https://online-go.com/game/48777408]GN[duncan.bordin vs. Grok Grock]PB[duncan.bordin]PW[Grok Grock]BR[15k]WR[13k]TM[600]OT[4x30 byo-yomi]RE[B+R]SZ[13]KM[0.5]RU[Japanese]AB[jj]PL[W]AB[im][km][hl][il][gk][jk][cj][dj][ej][fj][hj][ij][kj][ei][ji][ki][li][mi][ih][jh][jg][kg][ff][gf][hf][if][jf][lf][fe][ke][cd][fd][gd][hd][jd][kd][ld][cc][hc][jc][mc][cb][hb][mb][ca][da][ga][ha][ia]AW[jm][jl][kl][ll][ml][kk][bj][gj][lj][mj][ci][di][fi][hi][ii][eh][fh][gh][kh][lh][gg][hg][ig][ef][ce][ee][ge][he][ie][je][dd][id][dc][gc][ic][kc][lc][db][fb][gb][ib][jb][kb][lb][ea][ja][la](;W[ed]C[Incorrect - This was the actual move played in the game!])(;W[be]C[CORRECT];B[bk]C[CORRECT];W[bi]C[CORRECT];B[ak]C[CORRECT];W[gi]C[CORRECT])(;W[bd]C[CORRECT];B[bk]C[CORRECT];W[bi]C[CORRECT];B[ak]C[CORRECT];W[eg]C[CORRECT]))",
          category: "other",
          move_number: 105,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"B9\\":[\\"B9\\",\\"B3\\",\\"B5\\",\\"A3\\",\\"G5\\"],\\"B10\\":[\\"B10\\",\\"B3\\",\\"B5\\",\\"A3\\",\\"E7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451384/kbsh6hsqqmhbadoqav8h.png",
          suspended: false,
          createdAt: "2023-12-13T07:09:45.475000+00:00",
          updatedAt: "2023-12-13T07:09:45.475000+00:00",
        },
        {
          sgf_id: 98,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-06-27]PC[OGS: https://online-go.com/game/54863242]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[JayApril]PW[MaximKutiansky]BR[9k]WR[7k]TM[259200]OT[86400 fischer]RE[B+4.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[bq][mq][oq][bp][cp][qp][bo][lo][cn][cl][pj][gg][hg][qg][ff][ce][ee][ge][he][gd][pd][bc][oc]AW[cr][cq][fq][jq][dp][op][co][do][cj][gh][hh][cg][eg][fg][ie][hd][id][nd][dc][fc][gc][nc](;W[pq]C[Incorrect - This was the actual move played in the game!])(;W[ig]C[CORRECT];B[df]C[CORRECT];W[dg]C[CORRECT];B[cb]C[CORRECT];W[np]C[CORRECT])(;W[dn]C[CORRECT];B[dm]C[CORRECT];W[em]C[CORRECT];B[ck]C[CORRECT];W[ig]C[CORRECT]))",
          category: "other",
          move_number: 52,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P5\\":[\\"P5\\",\\"N2\\",\\"J13\\",\\"D14\\",\\"R6\\",\\"R8\\",\\"S3\\"],\\"D6\\":[\\"D6\\",\\"D7\\",\\"P5\\",\\"N2\\",\\"E7\\",\\"C9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451408/ldjjyhk1hpnsmjk2vyfc.png",
          suspended: false,
          createdAt: "2023-12-13T07:10:08.939000+00:00",
          updatedAt: "2023-12-13T07:10:08.939000+00:00",
        },
        {
          sgf_id: 58,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59470492]GN[Partie amicale]PB[achil.asus]PW[tim.lyonnet]BR[21k]WR[26k]TM[1200]OT[0 absolute]RE[?]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[ps][or][mq][oq][pq][qq][dp][jp][lp][mp][pp][qo][ln][qn][lm][qm][jl][kl][ll][ql][qk][kj][lj][qj][og][pg][of][oe][pe][re][qd][rd][qc][pb]AW[ns][os][mr][nr][nq][np][op][lo][mo][no][po][mn][pn][mm][om][pm][ml][nl][pl][kk][lk][pk][jj][mj][pj][ki][ph][qg][pf][qf][qe][dd][pd][oc][pc][ob][qb](;W[oh]C[Incorrect - This was the actual move played in the game!])(;W[qi]C[CORRECT];B[rb]C[CORRECT];W[lc]C[CORRECT];B[ke]C[CORRECT];W[jd]C[CORRECT]))",
          category: "other",
          move_number: 99,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L5\\":[\\"L5\\",\\"C3\\",\\"D3\\",\\"C4\\",\\"C6\\"],\\"C17\\":[\\"C17\\",\\"D17\\",\\"C16\\",\\"D15\\"],\\"C6\\":[\\"C6\\",\\"L5\\",\\"G4\\"],\\"F3\\":[\\"F3\\",\\"L5\\",\\"C14\\"],\\"K9\\":[\\"K9\\",\\"M11\\",\\"C17\\"],\\"C14\\":[\\"C14\\",\\"F3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451828/itvvgm1wdukr5nrvmzo8.png",
          suspended: false,
          createdAt: "2023-12-13T07:17:08.663000+00:00",
          updatedAt: "2023-12-13T07:17:08.663000+00:00",
        },
        {
          sgf_id: 98,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-06-27]PC[OGS: https://online-go.com/game/54863242]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[JayApril]PW[MaximKutiansky]BR[9k]WR[7k]TM[259200]OT[86400 fischer]RE[B+4.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[bq][mq][oq][bp][cp][qp][bo][cn][cl][pj][gg][hg][qg][ff][ce][ee][he][gd][pd][bc][oc]AW[cr][cq][fq][jq][dp][op][co][do][cj][gh][cg][eg][fg][ie][hd][id][nd][dc][fc][gc][nc](;B[ge]C[Incorrect - This was the actual move played in the game!])(;B[hh]C[CORRECT];W[pp]C[CORRECT];B[pq]C[CORRECT];W[qo]C[CORRECT];B[np]C[CORRECT];W[rp]C[CORRECT])(;B[pp]C[CORRECT];W[hh]C[CORRECT];B[jg]C[CORRECT];W[ih]C[CORRECT];B[kf]C[CORRECT])(;B[dn]C[CORRECT];W[np]C[CORRECT];B[nq]C[CORRECT];W[pp]C[CORRECT])(;B[nb]C[CORRECT];W[mb]C[CORRECT];B[ob]C[CORRECT];W[np]C[CORRECT];B[nq]C[CORRECT])(;B[np]C[CORRECT];W[hh]C[CORRECT];B[jg]C[CORRECT];W[ih]C[CORRECT];B[kf]C[CORRECT])(;B[ob]C[CORRECT];W[np]C[CORRECT];B[nq]C[CORRECT])(;B[kf]C[CORRECT]))",
          category: "other",
          move_number: 95,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J11\\":[\\"J11\\",\\"D6\\",\\"D7\\",\\"E7\\",\\"C9\\",\\"B9\\",\\"B8\\"],\\"O18\\":[\\"O18\\",\\"E7\\",\\"D6\\",\\"E6\\",\\"N18\\"],\\"D6\\":[\\"D6\\",\\"C16\\",\\"B16\\",\\"D15\\",\\"D14\\"],\\"K4\\":[\\"K4\\",\\"L3\\",\\"J11\\",\\"E7\\"],\\"O1\\":[\\"O1\\",\\"N1\\",\\"J11\\",\\"E7\\"],\\"L3\\":[\\"L3\\",\\"L2\\",\\"K4\\",\\"J4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451494/hr5sphwo0lua23ijxckl.png",
          suspended: false,
          createdAt: "2023-12-13T07:11:34.922000+00:00",
          updatedAt: "2023-12-13T07:11:34.922000+00:00",
        },
        {
          sgf_id: 98,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-06-27]PC[OGS: https://online-go.com/game/54863242]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[JayApril]PW[MaximKutiansky]BR[9k]WR[7k]TM[259200]OT[86400 fischer]RE[B+4.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[ps][or][qr][bq][lq][mq][oq][qq][bp][cp][np][op][pp][qp][bo][lo][oo][cn][dn][ln][bm][cm][mm][cl][dl][ml][dk][lk][mk][nk][dj][oj][pj][li][mi][ni][oi][qi][dh][ih][kh][lh][oh][ph][gg][hg][ig][ng][og][pg][qg][ff][of][ce][ee][ge][he][pe][ed][gd][od][pd][bc][ec][oc][cb][db][nb][ob]AW[ks][ms][os][cr][jr][lr][mr][nr][cq][fq][jq][kq][nq][dp][co][do][ko][kn][dm][km][lm][bl][el][jl][ll][bk][ck][ek][kk][cj][ej][hj][kj][lj][mj][nj][ci][di][ki][gh][hh][jh][mh][nh][cg][eg][fg][jg][kg][lg][mg][nf][pf][ie][ne][oe][hd][id][nd][dc][fc][gc][lc][nc][eb][mb](;W[en]C[Incorrect - This was the actual move played in the game!])(;W[an]C[CORRECT];B[br]C[CORRECT];W[am]C[CORRECT];B[ao]C[CORRECT];W[en]C[CORRECT];B[em]C[CORRECT]))",
          category: "other",
          move_number: 43,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H12\\":[\\"H12\\",\\"Q4\\",\\"Q3\\",\\"R5\\",\\"O4\\",\\"S4\\"],\\"Q4\\":[\\"Q4\\",\\"H12\\",\\"K13\\",\\"J12\\",\\"L14\\"],\\"D6\\":[\\"D6\\",\\"O4\\",\\"O3\\",\\"Q4\\"],\\"O18\\":[\\"O18\\",\\"N18\\",\\"P18\\",\\"O4\\",\\"O3\\"],\\"O4\\":[\\"O4\\",\\"H12\\",\\"K13\\",\\"J12\\",\\"L14\\"],\\"P18\\":[\\"P18\\",\\"O4\\",\\"O3\\"],\\"L14\\":[\\"L14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451505/j0qwt3op4xaoewt5q5or.png",
          suspended: false,
          createdAt: "2023-12-13T07:11:45.702000+00:00",
          updatedAt: "2023-12-13T07:11:45.702000+00:00",
        },
        {
          sgf_id: 98,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-06-27]PC[OGS: https://online-go.com/game/54863242]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[JayApril]PW[MaximKutiansky]BR[9k]WR[7k]TM[259200]OT[86400 fischer]RE[B+4.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[ps][br][or][qr][bq][lq][mq][oq][qq][bp][cp][np][op][pp][qp][bo][lo][oo][an][cn][dn][ln][bm][cm][em][mm][cl][dl][ml][dk][lk][mk][nk][dj][oj][pj][li][mi][ni][oi][qi][dh][ih][kh][lh][oh][ph][dg][gg][hg][ig][ng][og][pg][qg][ff][of][ce][ee][ge][he][pe][ed][gd][od][pd][bc][ec][oc][cb][db][nb][ob]AW[ks][ms][os][cr][jr][lr][mr][nr][cq][fq][jq][kq][nq][dp][co][do][ko][en][kn][am][fm][km][lm][al][bl][el][jl][ll][bk][ck][ek][kk][cj][ej][hj][kj][lj][mj][nj][ci][di][ki][gh][hh][jh][mh][nh][cg][eg][fg][jg][kg][lg][mg][df][nf][pf][ie][ne][oe][hd][id][nd][dc][fc][gc][lc][nc][eb][mb](;B[cf]C[Incorrect - This was the actual move played in the game!])(;B[dq]C[CORRECT];W[dm]C[CORRECT];B[eq]C[CORRECT];W[er]C[CORRECT])(;B[cs]C[CORRECT];W[ds]C[CORRECT];B[dq]C[CORRECT];W[bs]C[CORRECT]))",
          category: "other",
          move_number: 154,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D7\\":[\\"D7\\",\\"D3\\",\\"D2\\",\\"E7\\",\\"E3\\",\\"B1\\",\\"C12\\"],\\"B1\\":[\\"B1\\",\\"D3\\",\\"D7\\",\\"D2\\"],\\"E3\\":[\\"E3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451538/l2ob4i2m9wclic9niwxr.png",
          suspended: false,
          createdAt: "2023-12-13T07:12:19.020000+00:00",
          updatedAt: "2023-12-13T07:12:19.020000+00:00",
        },
        {
          sgf_id: 77,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-22]PC[OGS: https://online-go.com/game/59134462]GN[winchell vs. TreePine]PB[winchell]PW[TreePine]BR[6k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[B]AB[er][fr][gr][bq][cq][dq][fq][pq][fp][go][en][gn][fm][qk]AW[eq][gq][hq][bp][cp][dp][ep][gp][eo][fo][ho][fn][em][dj][dd](;B[el]C[Incorrect - This was the actual move played in the game!])(;B[gm]C[CORRECT];W[el]C[CORRECT];B[dn]C[CORRECT];W[cn]C[CORRECT];B[dm]C[CORRECT];W[dl]C[CORRECT]))",
          category: "other",
          move_number: 49,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D12\\":[\\"D12\\",\\"J7\\",\\"H7\\",\\"E13\\"],\\"E12\\":[\\"E12\\",\\"D11\\",\\"E11\\",\\"C11\\",\\"D12\\",\\"C12\\",\\"C13\\",\\"B13\\"],\\"Q4\\":[\\"Q4\\",\\"R4\\",\\"E12\\",\\"D11\\"],\\"D11\\":[\\"D11\\",\\"E12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451558/xxgxvadtntk2avutgtr4.png",
          suspended: false,
          createdAt: "2023-12-13T07:12:39.243000+00:00",
          updatedAt: "2023-12-13T07:12:39.243000+00:00",
        },
        {
          sgf_id: 77,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-22]PC[OGS: https://online-go.com/game/59134462]GN[winchell vs. TreePine]PB[winchell]PW[TreePine]BR[6k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[B]AB[er][fr][gr][bq][cq][dq][fq][mq][pq][fp][qo][dm][dl][el][gl][ek][gk][qk][ej][fj][bi][ci][di][gi][ii][bh][eh][fh][ih][jh][cg][jg][bf][cf][df][jf][lf][mf][pf][be][de][ee][fe][he][je][le][fd][id][kd][ld][gc][ic][lc][mc][ab][gb][hb][mb][aa][ba][la]AW[eq][gq][hq][bp][cp][dp][ep][gp][eo][fo][ho][dn][fn][hn][cm][em][gm][cl][fl][hl][ck][dk][hk][bj][dj][gj][hj][hi][ji][ch][dh][hh][kh][dg][eg][hg][kg][ef][ff][gf][if][kf][ce][ie][ke][me][ne][bd][cd][dd][ed][jd][ac][cc][fc][jc][kc][nc][bb][cb][db][fb][ib][kb][lb][nb][ea][ja](;B[ij]C[Incorrect - This was the actual move played in the game!])(;B[ki]C[CORRECT];W[li]C[CORRECT];B[jj]C[CORRECT];W[kj]C[CORRECT];B[ji]C[CORRECT];W[qc]C[CORRECT]))",
          category: "other",
          move_number: 86,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B18\\":[\\"B18\\",\\"E16\\",\\"G17\\",\\"F16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451584/ora5xhpmmxfw2pzufwmc.png",
          suspended: false,
          createdAt: "2023-12-13T07:13:04.782000+00:00",
          updatedAt: "2023-12-13T07:13:04.782000+00:00",
        },
        {
          sgf_id: 77,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-22]PC[OGS: https://online-go.com/game/59134462]GN[winchell vs. TreePine]PB[winchell]PW[TreePine]BR[6k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[B]AB[er][fr][gr][bq][cq][dq][fq][mq][pq][fp][qo][dm][dl][el][gl][ek][gk][ik][qk][ej][fj][ij][bi][ci][di][gi][ii][bh][eh][fh][ih][jh][cg][jg][bf][cf][df][jf][lf][mf][pf][be][de][ee][fe][he][je][le][fd][id][kd][ld][gc][ic][lc][mc][ab][gb][hb][mb][aa][ba][la][ma]AW[eq][gq][hq][bp][cp][dp][ep][gp][eo][fo][ho][dn][fn][hn][cm][em][gm][cl][fl][hl][jl][ck][dk][hk][bj][dj][gj][hj][jj][hi][ji][ch][dh][hh][kh][dg][eg][hg][kg][ef][ff][gf][if][kf][ce][ie][ke][me][ne][bd][cd][dd][ed][jd][ac][cc][fc][jc][kc][nc][bb][cb][db][fb][ib][kb][lb][nb][ea][ja][ka](;B[ha]C[Incorrect - This was the actual move played in the game!])(;B[ki]C[CORRECT];W[hd]C[CORRECT];B[hc]C[CORRECT];W[kj]C[CORRECT];B[li]C[CORRECT];W[qc]C[CORRECT]))",
          category: "other",
          move_number: 144,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L11\\":[\\"L11\\",\\"H16\\",\\"H17\\",\\"L10\\",\\"M11\\",\\"R17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451616/fnhz7tgafocqqnfhnp2r.png",
          suspended: false,
          createdAt: "2023-12-13T07:13:37.038000+00:00",
          updatedAt: "2023-12-13T07:13:37.038000+00:00",
        },
        {
          sgf_id: 97,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-12]PC[OGS: https://online-go.com/game/55276885]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[maksatmerzoanov]PW[Eraschenkov]BR[19k]WR[12k]TM[600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[7]AB[dj]AB[pj]AB[jj]AB[dd]AB[pp]AB[pd]AB[dp]PL[W]AB[mf][of][ne][oe][qe][kd][nd][od][mc][mb][nb][oa][pa]AW[fq][pg][pf][me][pe][md][qd][rd][nc][oc][pc][qc][ob](;W[dr]C[Incorrect - This was the actual move played in the game!])(;W[og]C[CORRECT];B[nf]C[CORRECT];W[le]C[CORRECT];B[nh]C[CORRECT];W[lc]C[CORRECT];B[ld]C[CORRECT]))",
          category: "other",
          move_number: 15,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q15\\":[\\"Q15\\",\\"P15\\",\\"Q14\\",\\"P14\\",\\"P13\\",\\"Q13\\",\\"R14\\",\\"O14\\",\\"Q12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514357/of7hkvbimotwnfmsb7v3.png",
          suspended: false,
          createdAt: "2023-12-14T00:39:18.083000+00:00",
          updatedAt: "2023-12-14T00:39:18.083000+00:00",
        },
        {
          sgf_id: 77,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-22]PC[OGS: https://online-go.com/game/59134462]GN[winchell vs. TreePine]PB[winchell]PW[TreePine]BR[6k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[B]AB[er][fr][gr][bq][cq][dq][fq][mq][nq][pq][fp][lp][qp][qo][mn][rn][dm][mm][rm][dl][el][gl][ml][pl][ql][ek][gk][ik][mk][nk][qk][ej][fj][ij][mj][bi][ci][di][gi][ii][mi][pi][bh][eh][fh][ih][jh][nh][cg][jg][ng][bf][cf][df][jf][lf][mf][of][pf][be][de][ee][fe][he][je][le][pe][fd][id][kd][ld][gc][ic][lc][mc][qc][rc][ab][gb][hb][mb][qb][aa][ba][ha][ia][la][ma][ra]AW[eq][gq][hq][bp][cp][dp][ep][gp][mp][np][eo][fo][ho][po][dn][fn][hn][on][qn][cm][em][gm][nm][pm][qm][cl][fl][hl][jl][nl][ol][ck][dk][hk][jk][ok][pk][bj][dj][gj][hj][jj][nj][hi][ji][ni][ch][dh][hh][kh][oh][dg][eg][hg][kg][og][ef][ff][gf][if][kf][nf][ce][ie][ke][me][ne][bd][cd][dd][ed][jd][od][ac][cc][fc][jc][kc][nc][pc][bb][cb][db][fb][ib][kb][lb][nb][ob][pb][ea][ja][ka][na][pa][qa](;B[oo]C[Incorrect - This was the actual move played in the game!])(;B[op]C[CORRECT];W[aq]C[CORRECT];B[ar]C[CORRECT];W[ap]C[CORRECT])(;B[nn]C[CORRECT];W[lo]C[CORRECT];B[kp]C[CORRECT])(;B[mo]C[CORRECT];W[op]C[CORRECT];B[no]C[CORRECT];W[oo]C[CORRECT]))",
          category: "other",
          move_number: 194,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P4\\":[\\"P4\\",\\"A3\\",\\"A2\\",\\"A4\\"],\\"O6\\":[\\"O6\\",\\"M5\\",\\"L4\\"],\\"N5\\":[\\"N5\\",\\"P4\\",\\"O5\\",\\"P5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451660/ixvz2zr68tzsktawblrl.png",
          suspended: false,
          createdAt: "2023-12-13T07:14:20.850000+00:00",
          updatedAt: "2023-12-13T07:14:20.850000+00:00",
        },
        {
          sgf_id: 77,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-22]PC[OGS: https://online-go.com/game/59134462]GN[winchell vs. TreePine]PB[winchell]PW[TreePine]BR[6k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[W]AB[er][fr][gr][bq][cq][dq][fq][mq][pq][fp][qo][dm][dl][el][gl][ek][gk][ik][qk][ej][fj][ij][bi][ci][di][gi][ii][bh][eh][fh][ih][jh][cg][jg][ng][bf][cf][df][jf][lf][mf][pf][be][de][ee][fe][he][je][le][pe][fd][id][kd][ld][gc][ic][lc][mc][qc][ab][gb][hb][mb][aa][ba][ha][ia][la][ma]AW[eq][gq][hq][bp][cp][dp][ep][gp][eo][fo][ho][dn][fn][hn][cm][em][gm][cl][fl][hl][jl][ck][dk][hk][jk][bj][dj][gj][hj][jj][hi][ji][ch][dh][hh][kh][dg][eg][hg][kg][ef][ff][gf][if][kf][nf][ce][ie][ke][me][ne][bd][cd][dd][ed][jd][od][ac][cc][fc][jc][kc][nc][pc][bb][cb][db][fb][ib][kb][lb][nb][ea][ja][ka](;W[pb]C[Incorrect - This was the actual move played in the game!])(;W[qb]C[CORRECT];B[pb]C[CORRECT];W[ob]C[CORRECT];B[oc]C[CORRECT];W[il]C[CORRECT];B[jb]C[CORRECT]))",
          category: "other",
          move_number: 153,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R18\\":[\\"R18\\",\\"Q18\\",\\"P18\\",\\"P17\\",\\"J8\\",\\"K18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451671/ddondys5e7theabb5shv.png",
          suspended: false,
          createdAt: "2023-12-13T07:14:32.338000+00:00",
          updatedAt: "2023-12-13T07:14:32.338000+00:00",
        },
        {
          sgf_id: 77,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-22]PC[OGS: https://online-go.com/game/59134462]GN[winchell vs. TreePine]PB[winchell]PW[TreePine]BR[6k]WR[4k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[W]AB[er][fr][gr][bq][cq][dq][fq][mq][nq][pq][fp][lp][qp][no][oo][qo][mn][rn][dm][mm][rm][dl][el][gl][ml][pl][ql][ek][gk][ik][mk][nk][qk][ej][fj][ij][mj][bi][ci][di][gi][ii][mi][pi][bh][eh][fh][ih][jh][nh][cg][jg][ng][bf][cf][df][jf][lf][mf][of][pf][be][de][ee][fe][he][je][le][pe][fd][id][kd][ld][gc][ic][lc][mc][qc][rc][ab][gb][hb][mb][qb][aa][ba][ha][ia][la][ma][ra]AW[eq][gq][hq][bp][cp][dp][ep][gp][mp][np][op][eo][fo][ho][po][dn][fn][hn][on][qn][cm][em][gm][nm][pm][qm][cl][fl][hl][jl][nl][ol][ck][dk][hk][jk][ok][pk][bj][dj][gj][hj][jj][nj][hi][ji][ni][ch][dh][hh][kh][oh][dg][eg][hg][kg][og][ef][ff][gf][if][kf][nf][ce][ie][ke][me][ne][bd][cd][dd][ed][jd][od][ac][cc][fc][jc][kc][nc][pc][bb][cb][db][fb][ib][kb][lb][nb][ob][pb][ea][ja][ka][na][pa][qa](;W[pp]C[Incorrect - This was the actual move played in the game!])(;W[mo]C[CORRECT];B[nn]C[CORRECT];W[lo]C[CORRECT];B[pp]C[CORRECT];W[lq]C[CORRECT];B[lr]C[CORRECT])(;W[il]C[CORRECT];B[jb]C[CORRECT];W[mo]C[CORRECT];B[nn]C[CORRECT];W[lo]C[CORRECT];B[pp]C[CORRECT])(;W[aq]C[CORRECT];B[ar]C[CORRECT];W[il]C[CORRECT])(;W[ig]C[CORRECT];B[jb]C[CORRECT];W[mo]C[CORRECT];B[nn]C[CORRECT];W[lo]C[CORRECT])(;W[mh]C[CORRECT];B[mg]C[CORRECT];W[il]C[CORRECT]))",
          category: "other",
          move_number: 197,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N5\\":[\\"N5\\",\\"O6\\",\\"M5\\",\\"Q4\\",\\"M3\\",\\"M2\\"],\\"J8\\":[\\"J8\\",\\"K18\\",\\"N5\\",\\"O6\\",\\"M5\\",\\"Q4\\"],\\"A3\\":[\\"A3\\",\\"A2\\",\\"J8\\"],\\"J13\\":[\\"J13\\",\\"K18\\",\\"N5\\",\\"O6\\",\\"M5\\"],\\"N12\\":[\\"N12\\",\\"N13\\",\\"J8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451682/hcdusy8zuofi8qejfzzr.png",
          suspended: false,
          createdAt: "2023-12-13T07:14:43.105000+00:00",
          updatedAt: "2023-12-13T07:14:43.105000+00:00",
        },
        {
          sgf_id: 85,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-05]PC[OGS: https://online-go.com/game/58625748]GN[jaedge vs. Jh100]PB[jaedge]PW[Jh100]BR[3k]WR[2k]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]AB[pc]PL[W]AB[gq][iq][pq][fp][gp][ip][go][io][po][gn][hn][qn][gl][il][nl][ol][ql][rl][ck][ik][mk][ok][mj][nj][rj][ci][nh][rh][bg][lg][mg][og][bf][ff][lf][nf][of][fe][ge][he][ie][ke][le][qe][cd][gd][id][jd][kd][nd][qd][rd][cc][jc][kc][nc][bb][eb][kb][lb][nb][ob][fa][oa][ra]AW[jr][eq][fq][jq][dp][jp][eo][fo][ho][jo][in][cm][em][im][pm][jl][pl][kk][pk][ej][oj][qj][ki][dh][oh][ph][jg][cf][hf][if][mf][pf][qf][rf][de][je][me][ne][oe][pe][dd][ed][fd][hd][ld][md][od][dc][ec][gc][hc][ic][lc][mc][rc][cb][db][fb][hb][mb][qb][ga][ma][na](;W[qa]C[Incorrect - This was the actual move played in the game!])(;W[qc]C[CORRECT];B[gj]C[CORRECT];W[nq]C[CORRECT];B[km]C[CORRECT]))",
          category: "other",
          move_number: 137,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R17\\":[\\"R17\\",\\"G10\\",\\"O3\\",\\"L7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451747/w2dcjckejntjfrxw2it1.png",
          suspended: false,
          createdAt: "2023-12-13T07:15:48.216000+00:00",
          updatedAt: "2023-12-13T07:15:48.216000+00:00",
        },
        {
          sgf_id: 85,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-05]PC[OGS: https://online-go.com/game/58625748]GN[jaedge vs. Jh100]PB[jaedge]PW[Jh100]BR[3k]WR[2k]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]AB[pc]PL[B]AB[gq][iq][pq][fp][gp][ip][go][io][po][gn][hn][qn][gl][il][nl][ol][ql][rl][ck][ik][mk][ok][mj][nj][rj][ci][nh][rh][bg][lg][mg][og][bf][ff][lf][nf][of][fe][ge][he][ie][ke][le][qe][cd][gd][id][jd][kd][nd][qd][rd][cc][jc][kc][nc][bb][eb][kb][lb][nb][ob][fa][oa][ra]AW[jr][eq][fq][jq][dp][jp][eo][fo][ho][jo][in][cm][em][im][pm][jl][pl][kk][pk][ej][oj][qj][ki][dh][oh][ph][jg][cf][hf][if][mf][pf][qf][rf][de][je][me][ne][oe][pe][dd][ed][fd][hd][ld][md][od][dc][ec][gc][hc][ic][lc][mc][rc][cb][db][fb][hb][mb][qb][ga][ma][na][qa](;B[rb]C[Incorrect - This was the actual move played in the game!])(;B[qc]C[CORRECT];W[rb]C[CORRECT];B[sc]C[CORRECT];W[se]C[CORRECT];B[sd]C[CORRECT];W[oc]C[CORRECT];B[pb]C[CORRECT];W[re]C[CORRECT]))",
          category: "other",
          move_number: 138,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R17\\":[\\"R17\\",\\"S18\\",\\"T17\\",\\"T15\\",\\"T16\\",\\"P17\\",\\"Q18\\",\\"S15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451771/bekqrijcvp9sa78ryvr6.png",
          suspended: false,
          createdAt: "2023-12-13T07:16:11.947000+00:00",
          updatedAt: "2023-12-13T07:16:11.947000+00:00",
        },
        {
          sgf_id: 58,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59470492]GN[Partie amicale]PB[achil.asus]PW[tim.lyonnet]BR[21k]WR[26k]TM[1200]OT[0 absolute]RE[?]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[oq][qq][dp][jp][lp][pp][qo][ln][qn][lm][qm][ll][ql][qk][qj]AW[np][op][lo][no][po][mn][pn][mm][om][pm][ml][nl][pl][pk][jj][pj][dd][pd](;W[mo]C[Incorrect - This was the actual move played in the game!])(;W[ko]C[CORRECT];B[cc]C[CORRECT];W[dc]C[CORRECT];B[cd]C[CORRECT];W[cf]C[CORRECT]))",
          category: "other",
          move_number: 236,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H18\\":[\\"H18\\",\\"G18\\",\\"D17\\"],\\"D17\\":[\\"D17\\",\\"G17\\",\\"E18\\",\\"D18\\",\\"F17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451784/mmdqr53tezpja74osyyo.png",
          suspended: false,
          createdAt: "2023-12-13T07:16:24.654000+00:00",
          updatedAt: "2023-12-13T07:16:24.654000+00:00",
        },
        {
          sgf_id: 58,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59470492]GN[Partie amicale]PB[achil.asus]PW[tim.lyonnet]BR[21k]WR[26k]TM[1200]OT[0 absolute]RE[?]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[ps][or][mq][oq][pq][qq][dp][jp][kp][lp][mp][pp][qo][ln][qn][lm][qm][fl][il][jl][kl][ll][ql][gk][jk][qk][gj][qj][rj][sj][si][kh][qh][rh][sh][kg][lg][mg][ng][og][pg][rg][lf][mf][of][rf][le][oe][pe][re][se][kd][qd][rd][sd][qc][sc][pb]AW[ns][os][mr][nr][nq][np][op][lo][mo][no][po][mn][pn][mm][om][pm][gl][ml][nl][pl][fk][hk][ik][kk][lk][pk][jj][mj][pj][ki][li][pi][qi][ri][jh][mh][nh][oh][ph][jg][kf][ke][me][ne][dd][jd][ld][nd][pd][lc][nc][oc][pc][rc][lb][nb][ob][qb][rb][sb][ma](;W[gi]C[Incorrect - This was the actual move played in the game!])(;W[hl]C[CORRECT];B[ek]C[CORRECT];W[hp]C[CORRECT];B[hn]C[CORRECT];W[gn]C[CORRECT]))",
          category: "other",
          move_number: 144,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H12\\":[\\"H12\\",\\"C17\\",\\"D17\\",\\"C16\\",\\"C15\\"],\\"C15\\":[\\"C15\\",\\"H12\\",\\"J14\\",\\"F10\\"],\\"C17\\":[\\"C17\\",\\"H12\\",\\"J14\\",\\"F10\\"],\\"C3\\":[\\"C3\\",\\"C4\\",\\"D3\\"],\\"C4\\":[\\"C4\\",\\"C3\\",\\"C5\\"],\\"C16\\":[\\"C16\\",\\"E17\\"],\\"F10\\":[\\"F10\\",\\"H12\\",\\"J14\\"],\\"C14\\":[\\"C14\\",\\"H12\\",\\"J14\\"],\\"D14\\":[\\"D14\\",\\"H12\\"],\\"F3\\":[\\"F3\\",\\"E3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702451840/esuvygtvej8joprgiotg.png",
          suspended: false,
          createdAt: "2023-12-13T07:17:20.874000+00:00",
          updatedAt: "2023-12-13T07:17:20.874000+00:00",
        },
        {
          sgf_id: 34,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]PW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]RE[W+Resign]PL[B]AB[ql][dj][rj][qi][ri][qg][dd]AW[nq][qp][ol][pj][qj][pi][qh][rh](;B[rg]C[Incorrect - This was the actual move played in the game!])(;B[ph]C[CORRECT];W[rg]C[CORRECT];B[qk]C[CORRECT];W[qf]C[CORRECT];B[oh]C[CORRECT];W[ni]C[CORRECT]))",
          category: "other",
          move_number: 16,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q12\\":[\\"Q12\\",\\"S13\\",\\"R9\\",\\"R14\\",\\"P12\\",\\"O11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513716/hj2imrg9j6ymhxfbqwha.png",
          suspended: false,
          createdAt: "2023-12-14T00:28:36.809000+00:00",
          updatedAt: "2023-12-14T00:28:36.809000+00:00",
        },
        {
          sgf_id: 34,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]PW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]RE[W+Resign]PL[B]AB[ql][dj][rj][qi][ri][dd]AW[nq][qp][ol][pj][qj][pi][qh](;B[qg]C[Incorrect - This was the actual move played in the game!])(;B[ph]C[CORRECT];W[rh]C[CORRECT];B[qk]C[CORRECT];W[qf]C[CORRECT];B[oh]C[CORRECT];W[of]C[CORRECT])(;B[qo]C[CORRECT];W[ro]C[CORRECT];B[ph]C[CORRECT]))",
          category: "other",
          move_number: 14,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q12\\":[\\"Q12\\",\\"S12\\",\\"R9\\",\\"R14\\",\\"P12\\",\\"P14\\"],\\"R5\\":[\\"R5\\",\\"S5\\",\\"Q12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513728/rsycwsapwmr4yc2bjfwq.png",
          suspended: false,
          createdAt: "2023-12-14T00:28:49.321000+00:00",
          updatedAt: "2023-12-14T00:28:49.321000+00:00",
        },
        {
          sgf_id: 34,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]PW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]RE[W+Resign]PL[W]AB[bq][hq][oq][np][pp][rp][bo][do][ho][mo][oo][po][qo][ro][en][ln][nn][rn][em][nm][om][pm][nl][ql][rk][dj][nj][rj][qi][ri][si][qg][rg][dd]AW[or][cq][dq][fq][mq][nq][pq][qq][rq][mp][qp][sp][eo][fo][lo][bn][cn][dn][mn][pn][mm][qm][rm][ol][pl][rl][pj][qj][pi][ph][qh][rh][sh][sg](;W[ko]C[Incorrect - This was the actual move played in the game!])(;W[lm]C[CORRECT];B[bp]C[CORRECT];W[br]C[CORRECT];B[cl]C[CORRECT])(;W[ck]C[CORRECT];B[ko]C[CORRECT];W[no]C[CORRECT])(;W[dl]C[CORRECT];B[bp]C[CORRECT]))",
          category: "other",
          move_number: 71,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M7\\":[\\"M7\\",\\"B4\\",\\"B2\\",\\"C8\\"],\\"C9\\":[\\"C9\\",\\"L5\\",\\"O5\\"],\\"D8\\":[\\"D8\\",\\"B4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513743/ug6vstsvsarezequg7df.png",
          suspended: false,
          createdAt: "2023-12-14T00:29:04.252000+00:00",
          updatedAt: "2023-12-14T00:29:04.252000+00:00",
        },
        {
          sgf_id: 34,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]PW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]RE[W+Resign]PL[B]AB[ar][bq][hq][oq][bp][np][pp][rp][bo][co][do][ho][mo][oo][po][qo][ro][en][gn][hn][ln][nn][rn][bm][dm][em][fm][hm][nm][om][pm][cl][il][ll][nl][ql][ik][rk][dj][hj][nj][rj][gi][qi][ri][si][qg][rg][dd]AW[br][cr][or][aq][cq][dq][fq][mq][nq][pq][qq][rq][cp][ep][mp][qp][sp][ao][eo][fo][ko][lo][bn][cn][dn][fn][mn][pn][gm][im][jm][mm][qm][rm][gl][hl][ol][pl][rl][fk][gj][pj][qj][fi][pi][ph][qh][rh][sh][sg](;B[gk]C[Incorrect - This was the actual move played in the game!])(;B[gh]C[CORRECT];W[fh]C[CORRECT];B[fg]C[CORRECT];W[dh]C[CORRECT];B[fl]C[CORRECT]))",
          category: "other",
          move_number: 102,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G12\\":[\\"G12\\",\\"F12\\",\\"F13\\",\\"D12\\",\\"F8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513751/anihs35bmyi3p0d8tbyq.png",
          suspended: false,
          createdAt: "2023-12-14T00:29:11.726000+00:00",
          updatedAt: "2023-12-14T00:29:11.726000+00:00",
        },
        {
          sgf_id: 34,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]PW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]RE[W+Resign]PL[B]AB[np][rp][oo][po][qo][rn][pm][ql][rk][dj][rj][qi][ri][si][qg][rg][dd]AW[nq][pq][rq][qp][sp][pn][qm][rm][ol][pl][pj][qj][pi][ph][qh][rh][sh][sg](;B[ro]C[Incorrect - This was the actual move played in the game!])(;B[mq]C[CORRECT];W[nr]C[CORRECT];B[om]C[CORRECT];W[nm]C[CORRECT];B[on]C[CORRECT];W[sn]C[CORRECT];B[nl]C[CORRECT])(;B[om]C[CORRECT];W[ro]C[CORRECT];B[qn]C[CORRECT];W[nm]C[CORRECT];B[on]C[CORRECT];W[sn]C[CORRECT];B[mq]C[CORRECT])(;B[sm]C[CORRECT];W[sl]C[CORRECT];B[mq]C[CORRECT];W[nr]C[CORRECT];B[kp]C[CORRECT];W[nc]C[CORRECT]))",
          category: "other",
          move_number: 36,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N3\\":[\\"N3\\",\\"O2\\",\\"P7\\",\\"O7\\",\\"P6\\",\\"T6\\",\\"O8\\"],\\"P7\\":[\\"P7\\",\\"S5\\",\\"R6\\",\\"O7\\",\\"P6\\",\\"T6\\",\\"N3\\"],\\"T7\\":[\\"T7\\",\\"T8\\",\\"N3\\",\\"O2\\",\\"L4\\",\\"O17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513775/n6a9b8yidzhgyne92lvi.png",
          suspended: false,
          createdAt: "2023-12-14T00:29:36.364000+00:00",
          updatedAt: "2023-12-14T00:29:36.364000+00:00",
        },
        {
          sgf_id: 34,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]PW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]RE[W+Resign]PL[B]AB[hq][oq][np][pp][rp][do][ho][oo][po][qo][ro][en][ln][nn][rn][em][nm][om][pm][nl][ql][rk][dj][nj][rj][qi][ri][si][qg][rg][dd]AW[or][dq][fq][mq][nq][pq][qq][rq][mp][qp][sp][eo][fo][lo][no][cn][dn][mn][pn][mm][qm][rm][ol][pl][rl][pj][qj][pi][ph][qh][rh][sh][sg](;B[bo]C[Incorrect - This was the actual move played in the game!])(;B[cq]C[CORRECT];W[dr]C[CORRECT];B[bo]C[CORRECT];W[co]C[CORRECT];B[cp]C[CORRECT];W[bn]C[CORRECT];B[bp]C[CORRECT];W[cl]C[CORRECT])(;B[ep]C[CORRECT];W[fp]C[CORRECT];B[eq]C[CORRECT];W[er]C[CORRECT];B[dr]C[CORRECT];W[cp]C[CORRECT]))",
          category: "other",
          move_number: 66,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C3\\":[\\"C3\\",\\"D2\\",\\"B5\\",\\"C5\\",\\"C4\\",\\"B6\\",\\"B4\\",\\"C8\\"],\\"E4\\":[\\"E4\\",\\"F4\\",\\"E3\\",\\"E2\\",\\"D2\\",\\"C4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513809/alvs6l3cyjit3adwoojz.png",
          suspended: false,
          createdAt: "2023-12-14T00:30:10.282000+00:00",
          updatedAt: "2023-12-14T00:30:10.282000+00:00",
        },
        {
          sgf_id: 102,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-23]PC[OGS: https://online-go.com/game/48826633]GN[Grok Grock vs. silly boy]PB[Grok Grock]PW[silly boy]BR[11k]WR[11k]TM[600]OT[4x30 byo-yomi]RE[W+39.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[fm][hm][jm][fl][gl][jl][ck][dk][fk][gk][hk][jk][kk][lk][bj][ej][fj][lj][bi][ji][ki][mi][bh][fh][gh][hh][ih][kh][lh][bg][mg][cf][ff][ce][bd][md][bc][ic][kc][lc][mc][gb][hb][ib][jb][mb]AW[el][hl][il][kl][ll][ek][ik][cj][dj][gj][hj][ij][jj][kj][ci][ei][fi][gi][ii][ch][jh][cg][jg][kg][lg][df][hf][if][jf][lf][mf][de][ge][ke][me][cd][dd][fd][id][jd][kd][ld][fc][gc][hc][jc][fb](;W[im]C[Incorrect - This was the actual move played in the game!])(;W[em]C[CORRECT];B[mh]C[CORRECT];W[cb]C[CORRECT];B[bb]C[CORRECT];W[bl]C[CORRECT])(;W[bf]C[CORRECT];B[im]C[CORRECT];W[be]C[CORRECT];B[fa]C[CORRECT];W[ea]C[CORRECT]))",
          category: "other",
          move_number: 102,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"E1\\":[\\"E1\\",\\"N6\\",\\"C12\\",\\"B12\\",\\"B2\\"],\\"B8\\":[\\"B8\\",\\"J1\\",\\"B9\\",\\"F13\\",\\"E13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514029/fpvw46tbxllacdrxdm8x.png",
          suspended: false,
          createdAt: "2023-12-14T00:33:49.634000+00:00",
          updatedAt: "2023-12-14T00:33:49.634000+00:00",
        },
        {
          sgf_id: 34,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]PW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]RE[W+Resign]PL[W]AB[ar][gr][bq][hq][kq][oq][bp][jp][np][pp][rp][bo][co][do][ho][oo][po][qo][ro][en][gn][hn][ln][nn][qn][rn][bm][dm][em][fm][hm][nm][om][pm][cl][fl][il][kl][ll][ml][nl][ek][ik][rk][dj][hj][lj][nj][rj][gi][hi][ji][qi][ri][si][ch][jh][mh][dg][mg][qg][rg][ff][jf][of][he][ie][je][re][dd][hd][qd][sd][dc][ic][kc][qc][rc][kb]AW[br][cr][or][aq][cq][dq][fq][mq][nq][pq][qq][rq][cp][ep][mp][qp][sp][ao][eo][fo][jo][ko][lo][mo][no][bn][cn][dn][fn][mn][pn][gm][im][jm][mm][qm][rm][gl][hl][ol][pl][rl][fk][gk][hk][mk][nk][qk][fj][gj][pj][qj][fi][pi][dh][fh][kh][ph][qh][rh][sh][gg][ig][jg][ng][sg][if][kf][lf][mf][nf][rf][ke][oe][pe][qe][id][jd][kd][md][nd][lc][nc][lb][nb][pb][ma](;W[gf]C[Incorrect - This was the actual move played in the game!])(;W[ir]C[CORRECT];B[lr]C[CORRECT];W[jr]C[CORRECT];B[ip]C[CORRECT])(;W[jr]C[CORRECT];B[kr]C[CORRECT];W[ir]C[CORRECT];B[mr]C[CORRECT]))",
          category: "other",
          move_number: 179,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J2\\":[\\"J2\\",\\"M2\\",\\"K2\\",\\"J4\\"],\\"K2\\":[\\"K2\\",\\"L2\\",\\"J2\\",\\"N2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513825/utkmjp0k7fcj2dljeeep.png",
          suspended: false,
          createdAt: "2023-12-14T00:30:26.004000+00:00",
          updatedAt: "2023-12-14T00:30:26.004000+00:00",
        },
        {
          sgf_id: 34,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]PW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]RE[W+Resign]PL[B]AB[ar][gr][bq][hq][kq][oq][bp][jp][np][pp][rp][bo][co][do][ho][oo][po][qo][ro][en][gn][hn][ln][nn][qn][rn][bm][dm][em][fm][hm][nm][om][pm][cl][fl][il][kl][ll][ml][nl][ek][ik][rk][dj][hj][lj][nj][rj][ci][ei][gi][hi][ji][qi][ri][si][ch][eh][jh][mh][dg][eg][fg][mg][qg][rg][ff][jf][of][ee][he][ie][je][re][dd][fd][hd][qd][sd][dc][hc][ic][kc][qc][rc][kb]AW[br][cr][or][aq][cq][dq][fq][mq][nq][pq][qq][rq][cp][ep][mp][qp][sp][ao][eo][fo][jo][ko][lo][mo][no][bn][cn][dn][fn][mn][pn][gm][im][jm][mm][qm][rm][gl][hl][ol][pl][rl][fk][gk][hk][mk][nk][qk][fj][gj][pj][qj][fi][pi][fh][gh][kh][ph][qh][rh][sh][cg][gg][ig][jg][ng][sg][df][gf][if][kf][lf][mf][nf][rf][fe][ge][ke][oe][pe][qe][gd][id][jd][kd][md][nd][fc][lc][nc][lb][nb][pb][ma](;B[gc]C[Incorrect - This was the actual move played in the game!])(;B[fb]C[CORRECT];W[ir]C[CORRECT];B[lr]C[CORRECT];W[jr]C[CORRECT];B[ip]C[CORRECT];W[kp]C[CORRECT]))",
          category: "other",
          move_number: 196,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F18\\":[\\"F18\\",\\"J2\\",\\"M2\\",\\"K2\\",\\"J4\\",\\"L4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513925/xhndxvbazmsrs5x6gbq9.png",
          suspended: false,
          createdAt: "2023-12-14T00:32:06.362000+00:00",
          updatedAt: "2023-12-14T00:32:06.362000+00:00",
        },
        {
          sgf_id: 102,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-23]PC[OGS: https://online-go.com/game/48826633]GN[Grok Grock vs. silly boy]PB[Grok Grock]PW[silly boy]BR[11k]WR[11k]TM[600]OT[4x30 byo-yomi]RE[W+39.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[ck][dk][kk][bj][ej][fj][bi][bh][bg][cf][ce][bd][md][bc][ic][kc][lc][mc][gb][hb][ib][jb][mb]AW[cj][dj][ci][ei][fi][ch][cg][df][lf][de][me][cd][dd][fd][id][jd][kd][ld][gc][hc][jc][fb](;B[he]C[Incorrect - This was the actual move played in the game!])(;B[hj]C[CORRECT];W[gi]C[CORRECT];B[ik]C[CORRECT];W[ki]C[CORRECT])(;B[gj]C[CORRECT];W[jj]C[CORRECT];B[kj]C[CORRECT];W[ji]C[CORRECT]))",
          category: "other",
          move_number: 47,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"H4\\":[\\"H4\\",\\"G5\\",\\"J3\\",\\"L5\\"],\\"G4\\":[\\"G4\\",\\"K4\\",\\"L4\\",\\"K5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513947/x9cmkcroyxauffqzvo1g.png",
          suspended: false,
          createdAt: "2023-12-14T00:32:27.835000+00:00",
          updatedAt: "2023-12-14T00:32:27.835000+00:00",
        },
        {
          sgf_id: 102,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-23]PC[OGS: https://online-go.com/game/48826633]GN[Grok Grock vs. silly boy]PB[Grok Grock]PW[silly boy]BR[11k]WR[11k]TM[600]OT[4x30 byo-yomi]RE[W+39.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[dk][kk][md][kc][lc][jb][mb]AW[dd][jd][kd][ld][jc](;W[me]C[Incorrect - This was the actual move played in the game!])(;W[ib]C[CORRECT];B[la]C[CORRECT];W[dj]C[CORRECT];B[cj]C[CORRECT];W[ci]C[CORRECT];B[ej]C[CORRECT]))",
          category: "other",
          move_number: 14,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"J12\\":[\\"J12\\",\\"M13\\",\\"D4\\",\\"C4\\",\\"C5\\",\\"E4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513952/nev8fpczah6gsfjzynpu.png",
          suspended: false,
          createdAt: "2023-12-14T00:32:33.024000+00:00",
          updatedAt: "2023-12-14T00:32:33.024000+00:00",
        },
        {
          sgf_id: 102,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-23]PC[OGS: https://online-go.com/game/48826633]GN[Grok Grock vs. silly boy]PB[Grok Grock]PW[silly boy]BR[11k]WR[11k]TM[600]OT[4x30 byo-yomi]RE[W+39.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[fl][ck][dk][gk][hk][jk][kk][bj][ej][fj][lj][bi][ji][ki][bh][fh][gh][hh][ih][kh][bg][cf][ff][ce][bd][md][bc][ic][kc][lc][mc][gb][hb][ib][jb][mb]AW[il][ik][cj][dj][gj][hj][ij][jj][kj][ci][ei][fi][gi][ii][ch][jh][cg][jg][df][hf][if][jf][lf][de][ge][ke][me][cd][dd][fd][id][jd][kd][ld][fc][gc][hc][jc][fb](;W[lg]C[Incorrect - This was the actual move played in the game!])(;W[kl]C[CORRECT];B[lk]C[CORRECT];W[jl]C[CORRECT];B[ll]C[CORRECT];W[mi]C[CORRECT]))",
          category: "other",
          move_number: 82,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"L2\\":[\\"L2\\",\\"M3\\",\\"K2\\",\\"M2\\",\\"N5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513979/ctgkbhqeyrev9hbjmz7u.png",
          suspended: false,
          createdAt: "2023-12-14T00:32:59.845000+00:00",
          updatedAt: "2023-12-14T00:32:59.845000+00:00",
        },
        {
          sgf_id: 102,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-23]PC[OGS: https://online-go.com/game/48826633]GN[Grok Grock vs. silly boy]PB[Grok Grock]PW[silly boy]BR[11k]WR[11k]TM[600]OT[4x30 byo-yomi]RE[W+39.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[dk][kk][md][kc][lc][jb][mb]AW[me][dd][jd][kd][ld][jc](;B[mc]C[Incorrect - This was the actual move played in the game!])(;B[ib]C[CORRECT];W[ci]C[CORRECT];B[ej]C[CORRECT];W[ki]C[CORRECT];B[ij]C[CORRECT]))",
          category: "other",
          move_number: 15,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"J12\\":[\\"J12\\",\\"C5\\",\\"E4\\",\\"L5\\",\\"J4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702513983/ow1s45dqkjplo9uh8tpf.png",
          suspended: false,
          createdAt: "2023-12-14T00:33:03.851000+00:00",
          updatedAt: "2023-12-14T00:33:03.851000+00:00",
        },
        {
          sgf_id: 102,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-23]PC[OGS: https://online-go.com/game/48826633]GN[Grok Grock vs. silly boy]PB[Grok Grock]PW[silly boy]BR[11k]WR[11k]TM[600]OT[4x30 byo-yomi]RE[W+39.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[fl][ck][dk][gk][hk][jk][kk][bj][ej][fj][lj][bi][ji][ki][mi][bh][fh][gh][hh][ih][kh][lh][bg][cf][ff][ce][bd][md][bc][ic][kc][lc][mc][gb][hb][ib][jb][mb]AW[il][ik][cj][dj][gj][hj][ij][jj][kj][ci][ei][fi][gi][ii][ch][jh][mh][cg][jg][lg][df][hf][if][jf][lf][de][ge][ke][me][cd][dd][fd][id][jd][kd][ld][fc][gc][hc][jc][fb](;W[kg]C[Incorrect - This was the actual move played in the game!])(;W[ll]C[CORRECT];B[lk]C[CORRECT];W[kl]C[CORRECT];B[jl]C[CORRECT];W[jm]C[CORRECT];B[mg]C[CORRECT]))",
          category: "other",
          move_number: 86,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"M2\\":[\\"M2\\",\\"M3\\",\\"L2\\",\\"K2\\",\\"K1\\",\\"N7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514003/tpeblu3tsojeuwzlo6ir.png",
          suspended: false,
          createdAt: "2023-12-14T00:33:24.280000+00:00",
          updatedAt: "2023-12-14T00:33:24.280000+00:00",
        },
        {
          sgf_id: 102,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-23]PC[OGS: https://online-go.com/game/48826633]GN[Grok Grock vs. silly boy]PB[Grok Grock]PW[silly boy]BR[11k]WR[11k]TM[600]OT[4x30 byo-yomi]RE[W+39.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[fl][ck][dk][gk][hk][jk][kk][bj][ej][fj][lj][bi][ji][ki][bh][fh][gh][hh][ih][kh][bg][cf][ff][ce][bd][md][bc][ic][kc][lc][mc][gb][hb][ib][jb][mb]AW[il][ik][cj][dj][gj][hj][ij][jj][kj][ci][ei][fi][gi][ii][ch][jh][cg][jg][lg][df][hf][if][jf][lf][de][ge][ke][me][cd][dd][fd][id][jd][kd][ld][fc][gc][hc][jc][fb](;B[lh]C[Incorrect - This was the actual move played in the game!])(;B[ll]C[CORRECT];W[jl]C[CORRECT];B[kl]C[CORRECT];W[hl]C[CORRECT];B[dg]C[CORRECT];W[dh]C[CORRECT]))",
          category: "other",
          move_number: 83,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"M2\\":[\\"M2\\",\\"K2\\",\\"L2\\",\\"H2\\",\\"D7\\",\\"D6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514012/bxyw60f34bvr2fzxarlj.png",
          suspended: false,
          createdAt: "2023-12-14T00:33:33.002000+00:00",
          updatedAt: "2023-12-14T00:33:33.002000+00:00",
        },
        {
          sgf_id: 102,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-23]PC[OGS: https://online-go.com/game/48826633]GN[Grok Grock vs. silly boy]PB[Grok Grock]PW[silly boy]BR[11k]WR[11k]TM[600]OT[4x30 byo-yomi]RE[W+39.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[fm][hm][jm][fl][gl][jl][ck][dk][fk][gk][hk][jk][kk][lk][bj][ej][fj][lj][bi][ji][ki][mi][bh][fh][gh][hh][ih][kh][lh][bg][mg][cf][ff][ce][bd][md][bc][ic][kc][lc][mc][gb][hb][ib][jb][mb]AW[im][el][hl][il][kl][ll][ek][ik][cj][dj][gj][hj][ij][jj][kj][ci][ei][fi][gi][ii][ch][jh][cg][jg][kg][lg][df][hf][if][jf][lf][mf][de][ge][ke][me][cd][dd][fd][id][jd][kd][ld][fc][gc][hc][jc][fb](;B[eh]C[Incorrect - This was the actual move played in the game!])(;B[dl]C[CORRECT];W[gm]C[CORRECT];B[em]C[CORRECT];W[mh]C[CORRECT];B[li]C[CORRECT];W[mk]C[CORRECT];B[ml]C[CORRECT]))",
          category: "other",
          move_number: 103,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"D2\\":[\\"D2\\",\\"G1\\",\\"E1\\",\\"N6\\",\\"M5\\",\\"N3\\",\\"N2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514035/cjtvconzlul2444xkbix.png",
          suspended: false,
          createdAt: "2023-12-14T00:33:55.384000+00:00",
          updatedAt: "2023-12-14T00:33:55.384000+00:00",
        },
        {
          sgf_id: 94,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-09]PC[OGS: https://online-go.com/game/56939843]GN[levithedegu vs. winchell]PB[levithedegu]PW[winchell]BR[6k]WR[5k]TM[259200]OT[86400 fischer]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[dd]PL[W]AB[cs][ar][cr][kr][bq][eq][kq][nq][bp][lp][np][bo][mo][mn][mm][om][pj][jd][od][pd][qd][fc]AW[dr][jr][cq][dq][jq][oq][cp][kp][pp][co][lo][bn][ln][qn][dm][lm][ll][dj][cf][pc][qc][nb](;W[or]C[Incorrect - This was the actual move played in the game!])(;W[lq]C[CORRECT];B[lr]C[CORRECT];W[mp]C[CORRECT];B[mq]C[CORRECT];W[lp]C[CORRECT]))",
          category: "other",
          move_number: 45,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M3\\":[\\"M3\\",\\"M2\\",\\"N4\\",\\"N3\\",\\"M4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514056/dytucabzjrswqq5zpiun.png",
          suspended: false,
          createdAt: "2023-12-14T00:34:17.241000+00:00",
          updatedAt: "2023-12-14T00:34:17.241000+00:00",
        },
        {
          sgf_id: 94,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-09]PC[OGS: https://online-go.com/game/56939843]GN[levithedegu vs. winchell]PB[levithedegu]PW[winchell]BR[6k]WR[5k]TM[259200]OT[86400 fischer]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[dd]PL[B]AB[cs][ar][cr][kr][bq][eq][kq][nq][bp][lp][np][bo][mo][mn][mm][pj][jd][od][pd][qd][fc]AW[dr][jr][cq][dq][jq][oq][cp][kp][pp][co][lo][bn][ln][qn][dm][lm][ll][dj][cf][pc][qc][nb](;B[om]C[Incorrect - This was the actual move played in the game!])(;B[jp]C[CORRECT];W[ko]C[CORRECT];B[qq]C[CORRECT];W[qp]C[CORRECT];B[ip]C[CORRECT];W[hq]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K4\\":[\\"K4\\",\\"L5\\",\\"R3\\",\\"R4\\",\\"J4\\",\\"H3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514066/v7065rsabfwxtcwvroro.png",
          suspended: false,
          createdAt: "2023-12-14T00:34:26.423000+00:00",
          updatedAt: "2023-12-14T00:34:26.423000+00:00",
        },
        {
          sgf_id: 94,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-09]PC[OGS: https://online-go.com/game/56939843]GN[levithedegu vs. winchell]PB[levithedegu]PW[winchell]BR[6k]WR[5k]TM[259200]OT[86400 fischer]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[dd]PL[W]AB[cs][ar][cr][kr][bq][eq][kq][nq][bp][ip][jp][lp][np][bo][mo][hn][mn][im][mm][om][gl][il][hk][pj][jd][od][pd][qd][fc]AW[dr][jr][or][cq][dq][hq][jq][oq][cp][kp][pp][co][ko][lo][bn][ln][qn][dm][hm][lm][hl][ll][ik][jk][dj][cf][pc][qc][nb](;W[gm]C[Incorrect - This was the actual move played in the game!])(;W[hp]C[CORRECT];B[jn]C[CORRECT];W[hj]C[CORRECT];B[gm]C[CORRECT];W[gk]C[CORRECT];B[fp]C[CORRECT];W[er]C[CORRECT];B[fr]C[CORRECT])(;W[ho]C[CORRECT];B[go]C[CORRECT];W[io]C[CORRECT];B[jo]C[CORRECT];W[in]C[CORRECT];B[gm]C[CORRECT])(;W[hj]C[CORRECT];B[gm]C[CORRECT];W[gk]C[CORRECT];B[fp]C[CORRECT])(;W[gk]C[CORRECT];B[gm]C[CORRECT];W[hj]C[CORRECT];B[fp]C[CORRECT])(;W[nk]C[CORRECT]))",
          category: "other",
          move_number: 59,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H4\\":[\\"H4\\",\\"K6\\",\\"H10\\",\\"G7\\",\\"G9\\",\\"F4\\",\\"E2\\",\\"F2\\"],\\"H5\\":[\\"H5\\",\\"G5\\",\\"J5\\",\\"K5\\",\\"J6\\",\\"G7\\"],\\"H10\\":[\\"H10\\",\\"G7\\",\\"G9\\",\\"F4\\"],\\"G9\\":[\\"G9\\",\\"G7\\",\\"H10\\",\\"F4\\"],\\"O9\\":[\\"O9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514075/rzfgvi2046dci3gh6rpz.png",
          suspended: false,
          createdAt: "2023-12-14T00:34:35.866000+00:00",
          updatedAt: "2023-12-14T00:34:35.866000+00:00",
        },
        {
          sgf_id: 94,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-09]PC[OGS: https://online-go.com/game/56939843]GN[levithedegu vs. winchell]PB[levithedegu]PW[winchell]BR[6k]WR[5k]TM[259200]OT[86400 fischer]RE[B+R]SZ[19]KM[0.5]RU[Japanese]AB[dd]PL[W]AB[cs][ar][cr][kr][bq][eq][kq][nq][bp][ip][jp][lp][np][bo][mo][mn][im][mm][om][gl][il][hk][pj][jd][od][pd][qd][fc]AW[dr][jr][or][cq][dq][hq][jq][oq][cp][kp][pp][co][ko][lo][bn][ln][qn][dm][lm][hl][ll][ik][jk][dj][cf][pc][qc][nb](;W[hm]C[Incorrect - This was the actual move played in the game!])(;W[hp]C[CORRECT];B[ho]C[CORRECT];W[go]C[CORRECT];B[io]C[CORRECT];W[hj]C[CORRECT];B[hm]C[CORRECT]))",
          category: "other",
          move_number: 57,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H4\\":[\\"H4\\",\\"H5\\",\\"G5\\",\\"J5\\",\\"H10\\",\\"H7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514092/hdohq7x5xygz4zoobxa1.png",
          suspended: false,
          createdAt: "2023-12-14T00:34:53.362000+00:00",
          updatedAt: "2023-12-14T00:34:53.362000+00:00",
        },
        {
          sgf_id: 99,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-25]PC[OGS: https://online-go.com/game/48883893]GN[\u53cb\u8c0a\u8d5b]PB[Thomas2015-1]PW[DylanZhang]BR[3k]WR[?]TM[3600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[7.5]RU[AGA]PL[B]AB[nr][or][fq][lq][pq][ep][fp][jp][pp][po][nn][on][ci][qf][ce][de][ge][fd][gd][hd][pd][hc][oc]AW[pr][qr][dq][eq][nq][qq][cp][qp][cn][pn][qn][om][pl][qi][he][ie][cd][id][dc][fc][gc][kc][nc](;B[ld]C[Incorrect - This was the actual move played in the game!])(;B[nd]C[CORRECT];W[md]C[CORRECT];B[mc]C[CORRECT];W[nb]C[CORRECT];B[ld]C[CORRECT];W[me]C[CORRECT];B[lc]C[CORRECT]))",
          category: "other",
          move_number: 47,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O16\\":[\\"O16\\",\\"N16\\",\\"N17\\",\\"O18\\",\\"M16\\",\\"N15\\",\\"M17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514107/luorrujp73pkka7hmemr.png",
          suspended: false,
          createdAt: "2023-12-14T00:35:07.651000+00:00",
          updatedAt: "2023-12-14T00:35:07.651000+00:00",
        },
        {
          sgf_id: 99,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-25]PC[OGS: https://online-go.com/game/48883893]GN[\u53cb\u8c0a\u8d5b]PB[Thomas2015-1]PW[DylanZhang]BR[3k]WR[?]TM[3600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[7.5]RU[AGA]PL[W]AB[nr][or][fq][lq][pq][ep][fp][jp][pp][po][nn][on][ci][qf][ce][de][ge][fd][gd][hd][pd][hc][oc]AW[pr][qr][dq][eq][nq][qq][cp][qp][cn][pn][qn][om][pl][he][ie][cd][id][dc][fc][gc][kc][nc](;W[qi]C[Incorrect - This was the actual move played in the game!])(;W[nd]C[CORRECT];B[be]C[CORRECT];W[bd]C[CORRECT];B[qh]C[CORRECT];W[nm]C[CORRECT];B[mn]C[CORRECT])(;W[nb]C[CORRECT];B[ob]C[CORRECT];W[nm]C[CORRECT]))",
          category: "other",
          move_number: 46,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O16\\":[\\"O16\\",\\"B15\\",\\"B16\\",\\"R12\\",\\"O7\\",\\"N6\\"],\\"O18\\":[\\"O18\\",\\"P18\\",\\"O7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514129/zjlpklafbc1inafnqmc6.png",
          suspended: false,
          createdAt: "2023-12-14T00:35:29.673000+00:00",
          updatedAt: "2023-12-14T00:35:29.673000+00:00",
        },
        {
          sgf_id: 99,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-25]PC[OGS: https://online-go.com/game/48883893]GN[\u53cb\u8c0a\u8d5b]PB[Thomas2015-1]PW[DylanZhang]BR[3k]WR[?]TM[3600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[7.5]RU[AGA]PL[W]AB[nr][or][fq][lq][pq][ep][fp][jp][np][pp][ho][po][qo][en][kn][nn][on][lj][pj][ci][gi][hi][ji][ki][lh][mh][nh][oh][ph][qh][rh][fg][gg][rg][bf][gf][hf][if][lf][nf][of][pf][qf][ce][de][ge][le][me][ne][dd][fd][gd][hd][jd][kd][ld][nd][pd][ec][hc][oc][eb][gb][ib][da]AW[pr][qr][dq][eq][nq][qq][cp][qp][ro][cn][hn][in][pn][qn][jm][om][ml][pl][ck][gj][ij][qj][fi][ii][pi][qi][gh][jh][kh][hg][ig][jg][lg][mg][ng][og][pg][qg][jf][kf][rf][be][he][ie][je][oe][pe][qe][bd][cd][id][md][bc][dc][fc][gc][ic][jc][kc][lc][mc][nc][cb][db][fb][jb](;W[od]C[Incorrect - This was the actual move played in the game!])(;W[re]C[CORRECT];B[od]C[CORRECT];W[qc]C[CORRECT];B[qd]C[CORRECT];W[rd]C[CORRECT];B[rb]C[CORRECT]))",
          category: "other",
          move_number: 134,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S15\\":[\\"S15\\",\\"P16\\",\\"R17\\",\\"R16\\",\\"S16\\",\\"S18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514164/wcs6dn9p8252xo31lclw.png",
          suspended: false,
          createdAt: "2023-12-14T00:36:04.779000+00:00",
          updatedAt: "2023-12-14T00:36:04.779000+00:00",
        },
        {
          sgf_id: 99,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-25]PC[OGS: https://online-go.com/game/48883893]GN[\u53cb\u8c0a\u8d5b]PB[Thomas2015-1]PW[DylanZhang]BR[3k]WR[?]TM[3600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[7.5]RU[AGA]PL[B]AB[nr][or][fq][lq][pq][ep][fp][jp][np][pp][ho][po][qo][en][kn][nn][on][lj][pj][ci][gi][hi][ji][ki][lh][mh][nh][oh][ph][qh][rh][fg][gg][rg][bf][gf][hf][if][lf][qf][ce][de][ge][le][me][ne][dd][fd][gd][hd][jd][kd][ld][nd][pd][ec][hc][oc][eb][gb][ib][da]AW[pr][qr][dq][eq][nq][qq][cp][qp][ro][cn][hn][in][pn][qn][jm][om][ml][pl][ck][gj][ij][qj][fi][ii][pi][qi][gh][jh][kh][hg][ig][jg][lg][mg][ng][og][pg][qg][jf][kf][rf][be][he][ie][je][qe][bd][cd][id][md][bc][dc][fc][gc][ic][jc][kc][lc][mc][nc][cb][db][fb][jb](;B[pf]C[Incorrect - This was the actual move played in the game!])(;B[rd]C[CORRECT];W[pf]C[CORRECT];B[qd]C[CORRECT];W[ll]C[CORRECT]))",
          category: "other",
          move_number: 129,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S16\\":[\\"S16\\",\\"Q14\\",\\"R16\\",\\"M8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514172/cke0wsynogdwomxit2tt.png",
          suspended: false,
          createdAt: "2023-12-14T00:36:12.952000+00:00",
          updatedAt: "2023-12-14T00:36:12.952000+00:00",
        },
        {
          sgf_id: 99,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2022-11-25]PC[OGS: https://online-go.com/game/48883893]GN[\u53cb\u8c0a\u8d5b]PB[Thomas2015-1]PW[DylanZhang]BR[3k]WR[?]TM[3600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[7.5]RU[AGA]PL[B]AB[nr][or][fq][lq][pq][ep][fp][jp][np][pp][ho][po][qo][en][kn][nn][on][lj][pj][ci][gi][hi][ji][ki][lh][mh][nh][oh][ph][qh][rh][fg][gg][rg][bf][gf][hf][if][lf][nf][of][pf][qf][ce][de][ge][le][me][ne][dd][fd][gd][hd][jd][kd][ld][nd][pd][ec][hc][oc][eb][gb][ib][da]AW[pr][qr][dq][eq][nq][qq][cp][qp][ro][cn][hn][in][pn][qn][jm][om][ml][pl][ck][gj][ij][qj][fi][ii][pi][qi][gh][jh][kh][hg][ig][jg][lg][mg][ng][og][pg][qg][jf][kf][rf][be][he][ie][je][oe][pe][qe][bd][cd][id][md][od][bc][dc][fc][gc][ic][jc][kc][lc][mc][nc][cb][db][fb][jb](;B[qd]C[Incorrect - This was the actual move played in the game!])(;B[re]C[CORRECT];W[qd]C[CORRECT];B[rd]C[CORRECT];W[qc]C[CORRECT];B[qb]C[CORRECT];W[rc]C[CORRECT];B[rb]C[CORRECT];W[sd]C[CORRECT]))",
          category: "other",
          move_number: 135,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S15\\":[\\"S15\\",\\"R16\\",\\"S16\\",\\"R17\\",\\"R18\\",\\"S17\\",\\"S18\\",\\"T16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514179/sjlh1uiz40f1rcsh0f0a.png",
          suspended: false,
          createdAt: "2023-12-14T00:36:20.269000+00:00",
          updatedAt: "2023-12-14T00:36:20.269000+00:00",
        },
        {
          sgf_id: 93,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-25]PC[OGS: https://online-go.com/game/57368350]GN[Game 1]PB[oneiropompos]PW[DramaTheurgist]BR[16k]WR[16k]TM[1814400]OT[0 absolute]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[mr][nr][or][rr][cq][oq][pq][qq][cp][co][go][cn][gn][in][jn][kn][dm][gm][km][el][fl][jl][ml][nk][dj][jj][nj][oj][ji][pi][qi][bh][ch][ih][lh][mh][nh][ph][qh][rh][cg][ig][kg][og][pg][qg][df][if][kf][lf][pf][de][je][qe][cd][dd][jd][pd][dc][oc][pc]AW[dq][lq][mq][nq][rq][dp][fp][jp][op][pp][qp][do][fo][dn][ln][em][fm][im][jm][nm][gl][hl][nl][ok][pk][gj][pj][qj][rj][ii][oi][ri][jh][kh][oh][bg][jg][lg][mg][ng][bf][cf][jf][nf][of][ce][ke][oe][pe][bd][kd][nd][od][bc][cc][fc][jc][lc](;W[fh]C[Incorrect - This was the actual move played in the game!])(;W[dl]C[CORRECT];B[ek]C[CORRECT];W[cm]C[CORRECT];B[hd]C[CORRECT];W[hc]C[CORRECT])(;W[qd]C[CORRECT];B[qc]C[CORRECT];W[dl]C[CORRECT];B[dk]C[CORRECT];W[cm]C[CORRECT]))",
          category: "other",
          move_number: 122,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D8\\":[\\"D8\\",\\"E9\\",\\"C7\\",\\"H16\\",\\"H17\\"],\\"R16\\":[\\"R16\\",\\"R17\\",\\"D8\\",\\"D9\\",\\"C7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514207/hhbrtd1ddokpcwyixmoo.png",
          suspended: false,
          createdAt: "2023-12-14T00:36:47.903000+00:00",
          updatedAt: "2023-12-14T00:36:47.903000+00:00",
        },
        {
          sgf_id: 93,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-25]PC[OGS: https://online-go.com/game/57368350]GN[Game 1]PB[oneiropompos]PW[DramaTheurgist]BR[16k]WR[16k]TM[1814400]OT[0 absolute]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[nk][dj][jj][nj][oj][pi][ph][qg][dd][pd]AW[dp][jp][pp][ok][pk][pj][oi][oh][pg](;W[qh]C[Incorrect - This was the actual move played in the game!])(;W[og]C[CORRECT];B[qf]C[CORRECT];W[nl]C[CORRECT];B[ml]C[CORRECT];W[mm]C[CORRECT];B[lk]C[CORRECT];W[ll]C[CORRECT])(;W[pf]C[CORRECT];B[qf]C[CORRECT];W[qe]C[CORRECT];B[og]C[CORRECT];W[of]C[CORRECT];B[ng]C[CORRECT];W[qh]C[CORRECT];B[qi]C[CORRECT];W[rh]C[CORRECT];B[ri]C[CORRECT];W[rf]C[CORRECT])(;W[of]C[CORRECT];B[qf]C[CORRECT];W[ri]C[CORRECT];B[qh]C[CORRECT];W[nl]C[CORRECT])(;W[mi]C[CORRECT];B[og]C[CORRECT]))",
          category: "other",
          move_number: 31,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O7\\":[\\"O7\\",\\"Q6\\",\\"O16\\",\\"L12\\"],\\"O16\\":[\\"O16\\",\\"O8\\",\\"N8\\",\\"N7\\"],\\"P7\\":[\\"P7\\",\\"R7\\",\\"O8\\"],\\"O8\\":[\\"O8\\",\\"Q7\\",\\"O16\\",\\"N11\\"],\\"P8\\":[\\"P8\\",\\"Q8\\",\\"O16\\"],\\"M16\\":[\\"M16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514217/mptb8r2bkhugi5zmi3yc.png",
          suspended: false,
          createdAt: "2023-12-14T00:36:57.447000+00:00",
          updatedAt: "2023-12-14T00:36:57.447000+00:00",
        },
        {
          sgf_id: 93,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-25]PC[OGS: https://online-go.com/game/57368350]GN[Game 1]PB[oneiropompos]PW[DramaTheurgist]BR[16k]WR[16k]TM[1814400]OT[0 absolute]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[nk][dj][jj][nj][oj][pi][qi][ph][qh][rh][og][qg][pf][dd][pd]AW[dp][jp][pp][ok][pk][pj][qj][oi][ri][oh][ng][nf][of](;B[pg]C[Incorrect - This was the actual move played in the game!])(;B[nm]C[CORRECT];W[pn]C[CORRECT];B[nd]C[CORRECT];W[kh]C[CORRECT])(;B[nd]C[CORRECT];W[nl]C[CORRECT];B[ml]C[CORRECT];W[mm]C[CORRECT])(;B[om]C[CORRECT];W[qm]C[CORRECT];B[nl]C[CORRECT])(;B[nl]C[CORRECT];W[pm]C[CORRECT];B[nd]C[CORRECT];W[mi]C[CORRECT])(;B[ol]C[CORRECT];W[pl]C[CORRECT];B[nd]C[CORRECT])(;B[ld]C[CORRECT]))",
          category: "other",
          move_number: 38,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N11\\":[\\"N11\\",\\"M10\\",\\"M11\\",\\"L11\\",\\"N10\\",\\"N9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514227/qv3y8fdvjunejcwqiozu.png",
          suspended: false,
          createdAt: "2023-12-14T00:37:07.820000+00:00",
          updatedAt: "2023-12-14T00:37:07.820000+00:00",
        },
        {
          sgf_id: 93,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-25]PC[OGS: https://online-go.com/game/57368350]GN[Game 1]PB[oneiropompos]PW[DramaTheurgist]BR[16k]WR[16k]TM[1814400]OT[0 absolute]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[mr][nr][or][cq][oq][pq][qq][cp][co][go][cn][gn][dm][gm][el][fl][nk][dj][jj][nj][oj][pi][qi][nh][ph][qh][rh][og][pg][qg][pf][qe][dd][pd][oc][pc]AW[dq][lq][mq][nq][dp][fp][jp][op][pp][qp][do][fo][dn][em][fm][gl][hl][ok][pk][pj][qj][rj][oi][ri][oh][ng][nf][of][oe][pe][nd][od][fc][lc](;B[jl]C[Incorrect - This was the actual move played in the game!])(;B[fj]C[CORRECT];W[fi]C[CORRECT];B[gi]C[CORRECT];W[gj]C[CORRECT])(;B[dl]C[CORRECT];W[im]C[CORRECT];B[fd]C[CORRECT];W[gd]C[CORRECT])(;B[hq]C[CORRECT];W[dl]C[CORRECT];B[cm]C[CORRECT]))",
          category: "other",
          move_number: 52,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F17\\":[\\"F17\\",\\"P8\\",\\"Q8\\",\\"Q7\\"],\\"N11\\":[\\"N11\\",\\"N12\\",\\"O11\\",\\"M12\\"],\\"C17\\":[\\"C17\\",\\"C16\\",\\"D17\\",\\"E16\\"],\\"R16\\":[\\"R16\\",\\"R17\\",\\"F17\\",\\"P8\\"],\\"C6\\":[\\"C6\\",\\"K17\\",\\"C17\\"],\\"C7\\":[\\"C7\\",\\"P8\\"],\\"S3\\":[\\"S3\\",\\"S2\\",\\"F17\\",\\"E17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514291/ziryfnmw55ig2vqcpnxv.png",
          suspended: false,
          createdAt: "2023-12-14T00:38:11.395000+00:00",
          updatedAt: "2023-12-14T00:38:11.395000+00:00",
        },
        {
          sgf_id: 93,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-25]PC[OGS: https://online-go.com/game/57368350]GN[Game 1]PB[oneiropompos]PW[DramaTheurgist]BR[16k]WR[16k]TM[1814400]OT[0 absolute]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[mr][nr][or][cq][oq][pq][qq][cp][co][go][cn][gn][in][jn][dm][gm][km][el][fl][jl][ml][nk][dj][jj][nj][oj][pi][qi][nh][ph][qh][rh][og][pg][qg][pf][qe][dd][pd][oc][pc]AW[dq][lq][mq][nq][dp][fp][jp][op][pp][qp][do][fo][dn][em][fm][im][jm][nm][gl][hl][nl][ok][pk][pj][qj][rj][oi][ri][oh][ng][nf][of][oe][pe][nd][od][fc][lc](;W[ln]C[Incorrect - This was the actual move played in the game!])(;W[dl]C[CORRECT];B[cm]C[CORRECT];W[ek]C[CORRECT];B[fk]C[CORRECT];W[fj]C[CORRECT];B[gk]C[CORRECT];W[hj]C[CORRECT];B[ej]C[CORRECT];W[hk]C[CORRECT]))",
          category: "other",
          move_number: 124,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F15\\":[\\"F15\\",\\"H16\\",\\"E13\\",\\"F14\\"],\\"J16\\":[\\"J16\\",\\"J15\\",\\"H16\\"],\\"G16\\":[\\"G16\\",\\"F15\\",\\"G15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514308/qugorjxyfdvu6d0j3l2v.png",
          suspended: false,
          createdAt: "2023-12-14T00:38:29.284000+00:00",
          updatedAt: "2023-12-14T00:38:29.284000+00:00",
        },
        {
          sgf_id: 97,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-12]PC[OGS: https://online-go.com/game/55276885]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[maksatmerzoanov]PW[Eraschenkov]BR[19k]WR[12k]TM[600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[7]AB[dj]AB[pj]AB[jj]AB[dd]AB[pp]AB[pd]AB[dp]PL[W]AB[qe][kd][nd][od][mc][mb][nb]AW[me][md][qd][rd][nc][oc][pc](;W[ob]C[Incorrect - This was the actual move played in the game!])(;W[pe]C[CORRECT];B[oe]C[CORRECT];W[pf]C[CORRECT];B[of]C[CORRECT];W[og]C[CORRECT];B[pg]C[CORRECT];W[qf]C[CORRECT];B[nf]C[CORRECT];W[ph]C[CORRECT]))",
          category: "other",
          move_number: 64,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D17\\":[\\"D17\\",\\"D18\\",\\"E18\\",\\"C18\\"],\\"N5\\":[\\"N5\\",\\"O5\\",\\"D17\\",\\"D18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514366/ikp91ffqkemozjhjpl86.png",
          suspended: false,
          createdAt: "2023-12-14T00:39:27.447000+00:00",
          updatedAt: "2023-12-14T00:39:27.447000+00:00",
        },
        {
          sgf_id: 97,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-12]PC[OGS: https://online-go.com/game/55276885]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[maksatmerzoanov]PW[Eraschenkov]BR[19k]WR[12k]TM[600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[7]AB[dj]AB[pj]AB[jj]AB[dd]AB[pp]AB[pd]AB[dp]PL[B]AB[mf][of][oe][qe][kd][nd][od][mc][mb][nb][oa][pa]AW[fq][pg][pf][me][pe][md][qd][rd][nc][oc][pc][qc][ob](;B[ne]C[Incorrect - This was the actual move played in the game!])(;B[og]C[CORRECT];W[ph]C[CORRECT];B[oh]C[CORRECT];W[lf]C[CORRECT];B[kf]C[CORRECT]))",
          category: "other",
          move_number: 94,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F7\\":[\\"F7\\",\\"C15\\",\\"R12\\"],\\"E7\\":[\\"E7\\",\\"P13\\",\\"M16\\",\\"B14\\"],\\"D8\\":[\\"D8\\",\\"P13\\",\\"M16\\",\\"B14\\",\\"R12\\"],\\"E8\\":[\\"E8\\",\\"P13\\",\\"M16\\",\\"B14\\"],\\"P13\\":[\\"P13\\",\\"C8\\",\\"E8\\"],\\"R12\\":[\\"R12\\",\\"C8\\",\\"E8\\"],\\"F6\\":[\\"F6\\",\\"P13\\",\\"M16\\"],\\"C8\\":[\\"C8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514373/nszkviryygc6ryvqgry5.png",
          suspended: false,
          createdAt: "2023-12-14T00:39:33.652000+00:00",
          updatedAt: "2023-12-14T00:39:33.652000+00:00",
        },
        {
          sgf_id: 97,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-12]PC[OGS: https://online-go.com/game/55276885]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[maksatmerzoanov]PW[Eraschenkov]BR[19k]WR[12k]TM[600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[7]AB[dj]AB[pj]AB[jj]AB[dd]AB[pp]AB[pd]AB[dp]PL[B]AB[qs][or][pr][rr][aq][dq][oq][rq][bp][cp][ep][qp][eo][oo][qo][on][qn][mf][of][le][ne][oe][qe][kd][nd][od][mc][mb][nb][oa][pa]AW[br][dr][qr][bq][cq][eq][fq][nq][pq][qq][fp][np][op][po][nn][pn][om][pm][pg][pf][me][pe][md][qd][rd][cc][fc][nc][oc][pc][qc][ob](;B[qm]C[Incorrect - This was the actual move played in the game!])(;B[dc]C[CORRECT];W[db]C[CORRECT];B[eb]C[CORRECT];W[cb]C[CORRECT])(;B[mo]C[CORRECT];W[no]C[CORRECT];B[dc]C[CORRECT];W[db]C[CORRECT]))",
          category: "other",
          move_number: 60,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D18\\":[\\"D18\\",\\"P13\\",\\"M16\\"],\\"E18\\":[\\"E18\\",\\"P13\\",\\"M16\\",\\"F14\\"],\\"E17\\":[\\"E17\\",\\"P13\\"],\\"R12\\":[\\"R12\\",\\"D18\\",\\"S14\\",\\"S13\\"],\\"R6\\":[\\"R6\\",\\"P13\\",\\"M16\\",\\"Q7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514380/ur2lpxst48gqqpyvqq0i.png",
          suspended: false,
          createdAt: "2023-12-14T00:39:40.923000+00:00",
          updatedAt: "2023-12-14T00:39:40.923000+00:00",
        },
        {
          sgf_id: 97,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-12]PC[OGS: https://online-go.com/game/55276885]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[maksatmerzoanov]PW[Eraschenkov]BR[19k]WR[12k]TM[600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[7]AB[dj]AB[pj]AB[jj]AB[dd]AB[pp]AB[pd]AB[dp]PL[B]AB[qs][or][pr][rr][aq][dq][oq][rq][bp][cp][ep][qp][eo][oo][qo][on][qn][qm][rg][df][mf][of][qf][de][fe][ge][he][le][ne][oe][qe][cd][ed][fd][id][jd][kd][ld][nd][od][kc][mc][lb][mb][nb][oa][pa]AW[br][dr][qr][bq][cq][eq][fq][nq][pq][qq][fp][np][op][po][gn][nn][pn][om][pm][ml][mj][dh][dg][pg][qg][cf][pf][rf][ce][pe][bd][gd][hd][qd][rd][cc][dc][ec][fc][gc][hc][ic][jc][nc][oc][pc][qc][fb][ib][kb][ob][ea][ka](;B[ri]C[Incorrect - This was the actual move played in the game!])(;B[dl]C[CORRECT];W[ci]C[CORRECT];B[cj]C[CORRECT];W[mr]C[CORRECT])(;B[cl]C[CORRECT];W[mr]C[CORRECT];B[in]C[CORRECT];W[im]C[CORRECT])(;B[ci]C[CORRECT];W[dl]C[CORRECT];B[cl]C[CORRECT]))",
          category: "other",
          move_number: 112,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D8\\":[\\"D8\\",\\"C11\\",\\"C10\\",\\"N2\\"],\\"C8\\":[\\"C8\\",\\"N2\\",\\"J6\\",\\"J7\\"],\\"C11\\":[\\"C11\\",\\"D8\\",\\"C8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514392/ne8n6ocfxfnko15ssrdk.png",
          suspended: false,
          createdAt: "2023-12-14T00:39:52.528000+00:00",
          updatedAt: "2023-12-14T00:39:52.528000+00:00",
        },
        {
          sgf_id: 97,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-12]PC[OGS: https://online-go.com/game/55276885]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[maksatmerzoanov]PW[Eraschenkov]BR[19k]WR[12k]TM[600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[7]AB[dj]AB[pj]AB[jj]AB[dd]AB[pp]AB[pd]AB[dp]PL[B]AB[qs][or][pr][rr][aq][dq][oq][rq][bp][cp][ep][qp][eo][oo][qo][on][qn][qm][mf][of][ge][he][le][ne][oe][qe][ed][fd][id][jd][kd][nd][od][kc][mc][gb][hb][jb][mb][nb][fa][ga][ia][ja][oa][pa]AW[br][dr][qr][bq][cq][eq][fq][nq][pq][qq][fp][np][op][po][gn][nn][pn][om][pm][ml][mj][pg][pf][me][pe][gd][hd][md][qd][rd][cc][dc][ec][fc][gc][hc][ic][jc][nc][oc][pc][qc][fb][ib][ob][ea](;B[ha]C[Incorrect - This was the actual move played in the game!])(;B[fm]C[CORRECT];W[ce]C[CORRECT];B[qh]C[CORRECT])(;B[em]C[CORRECT];W[og]C[CORRECT];B[ld]C[CORRECT];W[bf]C[CORRECT])(;B[dl]C[CORRECT];W[og]C[CORRECT];B[ld]C[CORRECT];W[bf]C[CORRECT];B[qh]C[CORRECT])(;B[el]C[CORRECT];W[og]C[CORRECT];B[ld]C[CORRECT];W[bf]C[CORRECT])(;B[og]C[CORRECT];W[cl]C[CORRECT];B[el]C[CORRECT])(;B[qh]C[CORRECT];W[cl]C[CORRECT];B[el]C[CORRECT])(;B[fn]C[CORRECT];W[og]C[CORRECT];B[ld]C[CORRECT])(;B[cl]C[CORRECT]))",
          category: "other",
          move_number: 27,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P13\\":[\\"P13\\",\\"O14\\",\\"M15\\",\\"O12\\",\\"M17\\",\\"M16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514413/jtl48b5uwyy0kvsel09u.png",
          suspended: false,
          createdAt: "2023-12-14T00:40:14.179000+00:00",
          updatedAt: "2023-12-14T00:40:14.179000+00:00",
        },
        {
          sgf_id: 84,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-06]PC[OGS: https://online-go.com/game/58666673]GN[Steal-Your-Money vs. winchell]PB[Steal-Your-Money]PW[winchell]BR[6k]WR[5k]TM[1200]OT[5x30 byo-yomi]RE[?]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[cp][qo][cg][bf][jf][nf][rf][ce][le][se][cd][jd][ld][pd][qd][rd][cc][lc][pc][cb][pb][qb][sb][ra]AW[pq][rg][cf][df][mf][pf][qf][de][ne][oe][qe][re][dd][kd][dc][ic][nc][rc][sc][mb][ob][rb][pa](;W[sa]C[Incorrect - This was the actual move played in the game!])(;W[ep]C[CORRECT];B[gd]C[CORRECT];W[co]C[CORRECT];B[fc]C[CORRECT])(;W[id]C[CORRECT];B[mg]C[CORRECT];W[lf]C[CORRECT];B[lg]C[CORRECT])(;W[he]C[CORRECT];B[ep]C[CORRECT];W[pl]C[CORRECT])(;W[eq]C[CORRECT];B[gd]C[CORRECT];W[do]C[CORRECT];B[dp]C[CORRECT])(;W[ie]C[CORRECT];B[id]C[CORRECT];W[hd]C[CORRECT];B[je]C[CORRECT])(;W[qp]C[CORRECT];B[po]C[CORRECT];W[nq]C[CORRECT];B[gd]C[CORRECT])(;W[qm]C[CORRECT];B[gd]C[CORRECT];W[hd]C[CORRECT])(;W[pl]C[CORRECT];B[gd]C[CORRECT];W[hd]C[CORRECT])(;W[np]C[CORRECT];B[gd]C[CORRECT];W[hd]C[CORRECT])(;W[pm]C[CORRECT];B[gd]C[CORRECT]))",
          category: "other",
          move_number: 31,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R14\\":[\\"R14\\",\\"R13\\",\\"H16\\",\\"J16\\",\\"J15\\",\\"H15\\",\\"G16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514463/ne2wjdhpgjngjz6eg4tj.png",
          suspended: false,
          createdAt: "2023-12-14T00:41:04.312000+00:00",
          updatedAt: "2023-12-14T00:41:04.312000+00:00",
        },
        {
          sgf_id: 84,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-06]PC[OGS: https://online-go.com/game/58666673]GN[Steal-Your-Money vs. winchell]PB[Steal-Your-Money]PW[winchell]BR[6k]WR[5k]TM[1200]OT[5x30 byo-yomi]RE[?]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[cp][cg][bf][jf][nf][rf][ce][le][cd][ld][qd][cc][lc][pc][cb]AW[pq][rg][cf][df][mf][pf][de][ne][oe][dd][kd][dc][ic][nc][mb](;B[jd]C[Incorrect - This was the actual move played in the game!])(;B[qf]C[CORRECT];W[qg]C[CORRECT];B[hd]C[CORRECT];W[id]C[CORRECT];B[ie]C[CORRECT];W[he]C[CORRECT];B[gd]C[CORRECT]))",
          category: "other",
          move_number: 53,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G16\\":[\\"G16\\",\\"H16\\",\\"G17\\",\\"H15\\"],\\"G17\\":[\\"G17\\",\\"G16\\",\\"H16\\",\\"H17\\",\\"G18\\"],\\"H16\\":[\\"H16\\",\\"J16\\",\\"J15\\",\\"H17\\"],\\"E4\\":[\\"E4\\",\\"H15\\"],\\"P4\\":[\\"P4\\",\\"P3\\",\\"O4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514482/coakck36njekzogiaqo1.png",
          suspended: false,
          createdAt: "2023-12-14T00:41:22.755000+00:00",
          updatedAt: "2023-12-14T00:41:22.755000+00:00",
        },
        {
          sgf_id: 48,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512848]GN[Friendly Match]PB[shelly613]PW[GoTomasgo]BR[10k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[W+53.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[or][dq][jq][lq][mq][oq][cp][lp][pp][qp][eo][ko][qo][jn][qn][rm][rl][rk][gc][jc][fb][fa]AW[nr][nq][mp][np][op][co][lo][po][dn][ln][pn][om][qm][ql][qk][cd][pd][ec][fc][mc][eb](;W[ea]C[Incorrect - This was the actual move played in the game!])(;W[bp]C[CORRECT];B[en]C[CORRECT];W[gd]C[CORRECT])(;W[gd]C[CORRECT];B[hc]C[CORRECT];W[bp]C[CORRECT];B[do]C[CORRECT];W[cq]C[CORRECT])(;W[id]C[CORRECT];B[do]C[CORRECT];W[ck]C[CORRECT]))",
          category: "other",
          move_number: 133,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R10\\":[\\"R10\\",\\"R11\\",\\"Q10\\",\\"S12\\",\\"P5\\",\\"O6\\"],\\"O6\\":[\\"O6\\",\\"P5\\",\\"R10\\",\\"S11\\",\\"Q10\\",\\"O9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514523/e5xsimcxubs2whwq4mkw.png",
          suspended: false,
          createdAt: "2023-12-14T00:42:04.275000+00:00",
          updatedAt: "2023-12-14T00:42:04.275000+00:00",
        },
        {
          sgf_id: 48,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512848]GN[Friendly Match]PB[shelly613]PW[GoTomasgo]BR[10k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[W+53.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[or][dq][hq][jq][lq][mq][oq][cp][fp][lp][pp][qp][bo][eo][ko][qo][bn][en][jn][qn][cm][em][rm][bl][cl][rl][ck][rk][cj][ch][fe][gc][jc][fb][hb][jb][fa]AW[nr][fq][nq][mp][np][op][co][fo][lo][po][cn][dn][fn][ln][pn][bm][dm][fm][om][qm][dl][ql][dk][qk][ej][dh][df][cd][pd][ec][fc][kc][mc][eb][kb][ea](;W[gp]C[Incorrect - This was the actual move played in the game!])(;W[ep]C[CORRECT];B[gp]C[CORRECT];W[eq]C[CORRECT];B[el]C[CORRECT];W[fl]C[CORRECT];B[ek]C[CORRECT];W[fk]C[CORRECT];B[qc]C[CORRECT]))",
          category: "other",
          move_number: 100,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J2\\":[\\"J2\\",\\"L8\\",\\"H16\\",\\"G16\\",\\"K16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514543/dbeeeamibnxptwjapyjc.png",
          suspended: false,
          createdAt: "2023-12-14T00:42:24.256000+00:00",
          updatedAt: "2023-12-14T00:42:24.256000+00:00",
        },
        {
          sgf_id: 48,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512848]GN[Friendly Match]PB[shelly613]PW[GoTomasgo]BR[10k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[W+53.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[dr][lr][or][dq][hq][jq][kq][lq][mq][oq][cp][ep][fp][hp][kp][lp][pp][qp][bo][eo][go][ho][io][ko][qo][bn][en][gn][hn][jn][qn][cm][em][hm][rm][bl][cl][hl][rl][ck][rk][cj][ch][fe][gc][jc][fb][hb][jb][fa]AW[er][hr][jr][kr][nr][fq][gq][iq][nq][gp][ip][jp][mp][np][op][co][fo][lo][po][cn][dn][fn][in][ln][pn][bm][dm][fm][gm][im][om][qm][dl][ql][dk][qk][ej][dh][df][cd][pd][ec][fc][kc][mc][eb][kb][ea](;W[eq]C[Incorrect - This was the actual move played in the game!])(;W[ir]C[CORRECT];B[kl]C[CORRECT];W[hd]C[CORRECT];B[gd]C[CORRECT];W[jd]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B4\\":[\\"B4\\",\\"E6\\",\\"G16\\"],\\"G16\\":[\\"G16\\",\\"H17\\",\\"B4\\",\\"D5\\",\\"C3\\"],\\"J16\\":[\\"J16\\",\\"D5\\",\\"C9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514567/kqy4vcbyqxk4csjyvk2p.png",
          suspended: false,
          createdAt: "2023-12-14T00:42:47.791000+00:00",
          updatedAt: "2023-12-14T00:42:47.791000+00:00",
        },
        {
          sgf_id: 48,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512848]GN[Friendly Match]PB[shelly613]PW[GoTomasgo]BR[10k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[W+53.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[ds][ks][ls][ms][os][dr][lr][or][dq][hq][jq][kq][lq][mq][oq][cp][ep][fp][hp][kp][lp][pp][qp][bo][eo][go][ho][io][jo][ko][qo][bn][en][gn][hn][jn][kn][qn][cm][em][hm][lm][mm][rm][bl][cl][el][fl][gl][hl][ml][rl][ck][ek][rk][cj][fj][ci][ch][fe][gc][jc][fb][hb][jb][fa]AW[fs][gs][js][ns][er][hr][ir][jr][kr][mr][nr][eq][fq][gq][iq][nq][gp][ip][jp][mp][np][op][co][lo][mo][po][cn][dn][in][ln][pn][bm][dm][im][jm][km][om][qm][dl][ll][ql][dk][kk][mk][qk][dj][ej][rj][dh][eh][df][cd][pd][ec][fc][kc][mc][eb][kb][ea](;B[qr]C[Incorrect - This was the actual move played in the game!])(;B[qj]C[CORRECT];W[qi]C[CORRECT];B[pj]C[CORRECT];W[rh]C[CORRECT];B[oo]C[CORRECT];W[nn]C[CORRECT])(;B[nn]C[CORRECT];W[oo]C[CORRECT];B[qj]C[CORRECT];W[ri]C[CORRECT];B[pj]C[CORRECT];W[nk]C[CORRECT]))",
          category: "other",
          move_number: 73,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E4\\":[\\"E4\\",\\"F4\\",\\"R17\\",\\"Q17\\",\\"R16\\",\\"R15\\",\\"S15\\",\\"S14\\"],\\"R17\\":[\\"R17\\",\\"Q17\\",\\"R16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514583/zzu8h562xnsgumlfhvzc.png",
          suspended: false,
          createdAt: "2023-12-14T00:43:04.398000+00:00",
          updatedAt: "2023-12-14T00:43:04.398000+00:00",
        },
        {
          sgf_id: 48,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512848]GN[Friendly Match]PB[shelly613]PW[GoTomasgo]BR[10k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[W+53.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[dr][lr][or][dq][hq][jq][kq][lq][mq][oq][cp][ep][fp][hp][kp][lp][pp][qp][bo][eo][go][ho][io][ko][qo][bn][en][gn][hn][jn][kn][qn][cm][em][hm][lm][mm][rm][bl][cl][el][fl][hl][rl][ck][rk][cj][ch][fe][gc][jc][fb][hb][jb][fa]AW[fs][er][hr][jr][kr][nr][eq][fq][gq][iq][nq][gp][ip][jp][mp][np][op][co][fo][lo][mo][po][cn][dn][fn][in][ln][pn][bm][dm][fm][gm][im][jm][km][om][qm][dl][ll][ql][dk][qk][ej][dh][df][cd][pd][ec][fc][kc][mc][eb][kb][ea](;B[gl]C[Incorrect - This was the actual move played in the game!])(;B[ml]C[CORRECT];W[lk]C[CORRECT];B[mk]C[CORRECT];W[jk]C[CORRECT]))",
          category: "other",
          move_number: 111,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N8\\":[\\"N8\\",\\"M9\\",\\"N9\\",\\"K9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514591/jsym0ibg8nvwgsdhfzyv.png",
          suspended: false,
          createdAt: "2023-12-14T00:43:12.193000+00:00",
          updatedAt: "2023-12-14T00:43:12.193000+00:00",
        },
        {
          sgf_id: 48,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512848]GN[Friendly Match]PB[shelly613]PW[GoTomasgo]BR[10k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[W+53.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[ds][ks][ls][ms][os][dr][lr][or][qr][dq][hq][jq][kq][lq][mq][oq][cp][ep][fp][hp][kp][lp][pp][qp][bo][eo][go][ho][io][jo][ko][qo][bn][en][gn][hn][jn][kn][qn][cm][em][hm][lm][mm][rm][bl][cl][el][fl][gl][hl][ml][rl][ck][ek][hk][rk][cj][fj][hj][ci][hi][ch][ih][lh][jg][kg][fe][gc][jc][fb][hb][jb][fa]AW[fs][gs][js][ns][er][hr][ir][jr][kr][mr][nr][eq][fq][gq][iq][nq][gp][ip][jp][mp][np][op][co][lo][mo][po][cn][dn][in][ln][pn][bm][dm][im][jm][km][om][qm][dl][ll][ql][dk][ik][kk][mk][qk][dj][ej][ij][rj][ii][qi][dh][eh][jh][kh][lg][df][cd][pd][ec][fc][kc][mc][eb][kb][ea](;W[li]C[Incorrect - This was the actual move played in the game!])(;W[lf]C[CORRECT];B[il]C[CORRECT];W[ig]C[CORRECT];B[hh]C[CORRECT])(;W[ig]C[CORRECT];B[lf]C[CORRECT];W[mg]C[CORRECT];B[pj]C[CORRECT]))",
          category: "other",
          move_number: 9,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P4\\":[\\"P4\\",\\"N6\\",\\"P6\\",\\"D5\\",\\"C5\\",\\"C6\\",\\"C4\\"],\\"D16\\":[\\"D16\\",\\"D17\\",\\"C15\\",\\"E16\\",\\"D15\\",\\"C17\\"],\\"D17\\":[\\"D17\\",\\"Q3\\",\\"P4\\"],\\"D5\\":[\\"D5\\"],\\"R17\\":[\\"R17\\"],\\"P2\\":[\\"P2\\"],\\"C6\\":[\\"C6\\"],\\"D6\\":[\\"D6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514610/buvyfdp8ckwfed4etxef.png",
          suspended: false,
          createdAt: "2023-12-14T00:43:31.120000+00:00",
          updatedAt: "2023-12-14T00:43:31.120000+00:00",
        },
        {
          sgf_id: 48,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512848]GN[Friendly Match]PB[shelly613]PW[GoTomasgo]BR[10k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[W+53.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[ds][ks][ls][ms][os][dr][lr][or][qr][dq][hq][jq][kq][lq][mq][oq][cp][ep][fp][hp][kp][lp][pp][qp][bo][eo][go][ho][io][jo][ko][qo][bn][en][gn][hn][jn][kn][qn][cm][em][hm][lm][mm][rm][bl][cl][el][fl][gl][hl][ml][rl][ck][ek][hk][rk][cj][fj][hj][mj][ci][hi][mi][ch][ih][lh][mh][jg][kg][fe][gc][jc][fb][hb][jb][fa]AW[fs][gs][js][ns][er][hr][ir][jr][kr][mr][nr][eq][fq][gq][iq][nq][gp][ip][jp][mp][np][op][co][lo][mo][po][cn][dn][in][ln][pn][bm][dm][im][jm][km][om][qm][dl][ll][ql][dk][ik][kk][mk][qk][dj][ej][ij][lj][rj][ii][li][qi][dh][eh][jh][kh][lg][mg][df][cd][pd][ec][fc][kc][mc][eb][kb][ea](;W[nk]C[Incorrect - This was the actual move played in the game!])(;W[qc]C[CORRECT];B[le]C[CORRECT];W[me]C[CORRECT];B[md]C[CORRECT])(;W[pc]C[CORRECT];B[ng]C[CORRECT];W[me]C[CORRECT];B[nk]C[CORRECT])(;W[qd]C[CORRECT];B[le]C[CORRECT];W[me]C[CORRECT];B[md]C[CORRECT]))",
          category: "other",
          move_number: 154,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R17\\":[\\"R17\\",\\"M15\\",\\"N15\\",\\"N16\\"],\\"Q17\\":[\\"Q17\\",\\"O13\\",\\"N15\\",\\"O9\\"],\\"R16\\":[\\"R16\\",\\"M15\\",\\"N15\\",\\"N16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514625/robmhc8i058pwjwgye32.png",
          suspended: false,
          createdAt: "2023-12-14T00:43:46.353000+00:00",
          updatedAt: "2023-12-14T00:43:46.353000+00:00",
        },
        {
          sgf_id: 48,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512848]GN[Friendly Match]PB[shelly613]PW[GoTomasgo]BR[10k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[W+53.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[ds][ks][ls][ms][os][dr][lr][or][qr][dq][hq][jq][kq][lq][mq][oq][cp][ep][fp][hp][kp][lp][pp][qp][bo][do][eo][go][ho][io][jo][ko][qo][bn][en][gn][hn][jn][kn][qn][rn][cm][em][hm][lm][mm][rm][sm][bl][cl][el][fl][gl][hl][il][ml][rl][ck][ek][hk][rk][cj][fj][hj][mj][ci][ei][fi][hi][mi][ni][oi][bh][ch][fh][gh][lh][mh][bg][eg][fg][jg][kg][ff][gf][if][jf][lf][qf][be][ce][fe][ge][he][ke][le][me][qe][re][hd][kd][ld][rd][cc][gc][jc][rc][fb][hb][jb][sb][fa]AW[fs][gs][js][ns][er][hr][ir][jr][kr][mr][nr][eq][fq][gq][iq][nq][gp][ip][jp][mp][np][op][co][lo][mo][po][cn][dn][in][ln][pn][bm][dm][im][jm][km][om][qm][dl][jl][ll][ql][sl][dk][ik][kk][mk][nk][qk][sk][dj][ej][ij][lj][rj][sj][di][ii][li][qi][dh][eh][hh][ih][jh][kh][nh][oh][ph][rh][cg][dg][gg][hg][ig][lg][mg][pg][qg][sg][af][bf][cf][df][ef][hf][mf][nf][pf][rf][ee][ne][oe][cd][fd][gd][md][pd][bc][ec][fc][kc][lc][mc][qc][eb][kb][qb][rb][ea](;B[dd]C[Incorrect - This was the actual move played in the game!])(;B[bd]C[CORRECT];W[dd]C[CORRECT];B[bb]C[CORRECT];W[ac]C[CORRECT];B[ad]C[CORRECT];W[cb]C[CORRECT];B[ab]C[CORRECT]))",
          category: "other",
          move_number: 235,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B16\\":[\\"B16\\",\\"D16\\",\\"B18\\",\\"A17\\",\\"A16\\",\\"C18\\",\\"A18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702514637/j6ig1jt1q34dzt8qs6dz.png",
          suspended: false,
          createdAt: "2023-12-14T00:43:57.643000+00:00",
          updatedAt: "2023-12-14T00:43:57.643000+00:00",
        },
        {
          sgf_id: 96,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-23]PC[OGS: https://online-go.com/game/55569680]GN[Friendly Match]PB[monroe10]PW[gcnaccount]BR[11k]WR[6k]TM[0]OT[20 simple]RE[W+65.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[gk][kk][lk][ij][jj][ki][hh][jh][kh][kg][lg][he][id][kd][lc]AW[ll][jk][mk][dj][kj][lj][ji][li][mi][lh][cg][jf][kf][lf][dd][gc](;B[ii]C[Incorrect - This was the actual move played in the game!])(;B[cc]C[CORRECT];W[dc]C[CORRECT];B[cd]C[CORRECT];W[ce]C[CORRECT];B[be]C[CORRECT])(;B[ik]C[CORRECT];W[jl]C[CORRECT];B[cc]C[CORRECT];W[dc]C[CORRECT];B[cd]C[CORRECT])(;B[eb]C[CORRECT];W[dc]C[CORRECT];B[fc]C[CORRECT])(;B[dc]C[CORRECT];W[cc]C[CORRECT];B[ec]C[CORRECT])(;B[ck]C[CORRECT];W[cj]C[CORRECT]))",
          category: "other",
          move_number: 23,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"K5\\":[\\"K5\\",\\"K4\\",\\"L4\\",\\"L5\\",\\"K6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519588/jf6i6xs1ykt7zcr6cyoy.png",
          suspended: false,
          createdAt: "2023-12-14T02:06:28.825000+00:00",
          updatedAt: "2023-12-14T02:06:28.825000+00:00",
        },
        {
          sgf_id: 96,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-23]PC[OGS: https://online-go.com/game/55569680]GN[Friendly Match]PB[monroe10]PW[gcnaccount]BR[11k]WR[6k]TM[0]OT[20 simple]RE[W+65.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[km][bl][fl][kl][ak][ck][gk][kk][lk][bj][cj][fj][ij][jj][ai][bi][gi][ii][ki][hh][jh][kh][hg][kg][lg][gf][de][ee][fe][he][cd][id][jd][kd][ac][bc][cc][lc][ab][db][jb][kb][da]AW[bm][dm][lm][cl][el][jl][ll][dk][jk][mk][dj][kj][lj][ci][ei][fi][li][mi][bh][gh][lh][cg][gg][mg][bf][df][ef][ff][if][jf][kf][lf][ae][ce][bd][dd][dc][gc][ic][jc][bb][cb][eb][ib][ea](;B[hf]C[Incorrect - This was the actual move played in the game!])(;B[ec]C[CORRECT];W[ca]C[CORRECT];B[db]C[CORRECT];W[da]C[CORRECT];B[ed]C[CORRECT];W[db]C[CORRECT];B[fb]C[CORRECT];W[ad]C[CORRECT];B[fa]C[CORRECT]))",
          category: "other",
          move_number: 121,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"H4\\":[\\"H4\\",\\"N10\\",\\"A6\\",\\"A7\\"],\\"J2\\":[\\"J2\\",\\"J1\\",\\"H4\\",\\"N10\\"],\\"B13\\":[\\"B13\\",\\"C13\\",\\"H4\\",\\"N10\\"],\\"J1\\":[\\"J1\\",\\"J2\\",\\"H4\\",\\"N10\\"],\\"H5\\":[\\"H5\\",\\"N10\\",\\"A6\\"],\\"G4\\":[\\"G4\\",\\"N10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519602/tcddgdn0xhkwnpksnz3s.png",
          suspended: false,
          createdAt: "2023-12-14T02:06:43.027000+00:00",
          updatedAt: "2023-12-14T02:06:43.027000+00:00",
        },
        {
          sgf_id: 96,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-23]PC[OGS: https://online-go.com/game/55569680]GN[Friendly Match]PB[monroe10]PW[gcnaccount]BR[11k]WR[6k]TM[0]OT[20 simple]RE[W+65.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[km][bl][fl][gl][kl][ak][ck][gk][kk][lk][bj][cj][fj][ij][jj][ai][bi][gi][ii][ki][hh][jh][kh][hg][kg][lg][gf][hf][de][ee][fe][he][cd][id][jd][kd][ac][bc][cc][lc][ab][db][jb][kb][da]AW[bm][dm][lm][cl][el][hl][jl][ll][dk][jk][mk][dj][kj][lj][ci][ei][fi][li][mi][bh][gh][lh][cg][gg][mg][bf][df][ef][ff][if][jf][kf][lf][ae][ce][bd][dd][dc][gc][ic][jc][bb][cb][eb][ib][ea](;W[ik]C[Incorrect - This was the actual move played in the game!])(;W[fd]C[CORRECT];B[gd]C[CORRECT];W[ed]C[CORRECT];B[hc]C[CORRECT])(;W[ec]C[CORRECT];B[le]C[CORRECT];W[hk]C[CORRECT])(;W[fc]C[CORRECT];B[le]C[CORRECT];W[hk]C[CORRECT])(;W[gd]C[CORRECT];B[ec]C[CORRECT];W[ca]C[CORRECT];B[db]C[CORRECT]))",
          category: "other",
          move_number: 15,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"K4\\":[\\"K4\\",\\"K11\\",\\"K10\\",\\"K5\\"],\\"L4\\":[\\"L4\\",\\"L5\\",\\"K5\\",\\"K6\\",\\"J6\\",\\"K4\\",\\"J5\\"],\\"L5\\":[\\"L5\\",\\"L4\\",\\"M4\\",\\"K4\\",\\"M6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519621/xk7q4hoo4wayccltkn74.png",
          suspended: false,
          createdAt: "2023-12-14T02:07:01.602000+00:00",
          updatedAt: "2023-12-14T02:07:01.602000+00:00",
        },
        {
          sgf_id: 96,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-23]PC[OGS: https://online-go.com/game/55569680]GN[Friendly Match]PB[monroe10]PW[gcnaccount]BR[11k]WR[6k]TM[0]OT[20 simple]RE[W+65.5]SZ[13]KM[5.5]RU[Japanese]PL[B]AB[fm][bl][fl][gl][ak][ck][ek][fk][gk][hk][bj][cj][fj][ij][jj][ai][bi][gi][ii][ki][hh][jh][kh][hg][ig][jg][kg][lg][gf][hf][de][ee][fe][ge][he][ie][me][cd][id][jd][kd][ld][ac][bc][cc][kc][lc][ab][db][hb][jb][kb][da]AW[bm][dm][em][gm][hm][jm][lm][cl][el][hl][jl][ll][dk][ik][jk][mk][dj][ej][kj][lj][ci][ei][fi][li][mi][bh][gh][lh][cg][gg][mg][bf][df][ef][ff][if][jf][kf][lf][mf][ae][ce][le][bd][dd][gd][hd][dc][ec][gc][hc][ic][jc][bb][cb][eb][ib][ea][ia](;B[ah]C[Incorrect - This was the actual move played in the game!])(;B[hj]C[CORRECT];W[md]C[CORRECT];B[ah]C[CORRECT];W[ag]C[CORRECT])(;B[il]C[CORRECT];W[im]C[CORRECT];B[hj]C[CORRECT];W[md]C[CORRECT])(;B[ba]C[CORRECT];W[ca]C[CORRECT];B[hj]C[CORRECT];W[md]C[CORRECT])(;B[im]C[CORRECT];W[il]C[CORRECT];B[hj]C[CORRECT];W[md]C[CORRECT])(;B[hi]C[CORRECT];W[md]C[CORRECT];B[ah]C[CORRECT])(;B[gj]C[CORRECT];W[md]C[CORRECT]))",
          category: "other",
          move_number: 95,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"E11\\":[\\"E11\\",\\"C13\\",\\"D12\\",\\"D13\\",\\"E10\\",\\"F12\\",\\"D12\\",\\"G10\\",\\"G9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519628/urfjz0eszghkxre10b09.png",
          suspended: false,
          createdAt: "2023-12-14T02:07:09.060000+00:00",
          updatedAt: "2023-12-14T02:07:09.060000+00:00",
        },
        {
          sgf_id: 96,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-07-23]PC[OGS: https://online-go.com/game/55569680]GN[Friendly Match]PB[monroe10]PW[gcnaccount]BR[11k]WR[6k]TM[0]OT[20 simple]RE[W+65.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[fm][al][bl][fl][gl][ak][ck][ek][fk][gk][hk][bj][cj][fj][ij][jj][ai][bi][gi][ii][ki][ah][hh][jh][kh][hg][ig][jg][kg][lg][gf][hf][de][ee][fe][ge][he][ie][me][cd][id][jd][kd][ld][ac][bc][cc][kc][lc][ab][db][hb][jb][kb][da]AW[bm][dm][em][gm][hm][jm][lm][cl][el][hl][jl][ll][dk][ik][jk][mk][dj][ej][kj][lj][ci][ei][fi][li][mi][bh][gh][lh][ag][cg][gg][mg][bf][df][ef][ff][if][jf][kf][lf][mf][ae][ce][le][bd][dd][gd][hd][dc][ec][gc][hc][ic][jc][bb][cb][eb][ib][ea][ia](;W[dl]C[Incorrect - This was the actual move played in the game!])(;W[hj]C[CORRECT];B[fd]C[CORRECT];W[fc]C[CORRECT];B[md]C[CORRECT];W[ja]C[CORRECT]))",
          category: "other",
          move_number: 124,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"H4\\":[\\"H4\\",\\"F10\\",\\"F11\\",\\"N10\\",\\"K13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519633/zdiyskfyib9n8qddhh6w.png",
          suspended: false,
          createdAt: "2023-12-14T02:07:13.765000+00:00",
          updatedAt: "2023-12-14T02:07:13.765000+00:00",
        },
        {
          sgf_id: 80,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-19]PC[OGS: https://online-go.com/game/59027287]GN[AlpacaFury vs. levithedegu]PB[AlpacaFury]PW[levithedegu]BR[7k]WR[6k]TM[259200]OT[86400 fischer]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[dr][er][hq][qn][dk][qk][cj][di][dg][gg][df][he][dd][ed][pd][cc][hc][nc][cb]AW[cr][dq][nq][dp][pp][cn][bk][ck][fi][eg][ef][qf][fe][fd][rd][dc][ec][fc](;W[fh]C[Incorrect - This was the actual move played in the game!])(;W[cd]C[CORRECT];B[de]C[CORRECT];W[eh]C[CORRECT];B[hi]C[CORRECT];W[bd]C[CORRECT];B[be]C[CORRECT])(;W[eh]C[CORRECT];B[hi]C[CORRECT];W[cd]C[CORRECT];B[bd]C[CORRECT];W[ce]C[CORRECT]))",
          category: "other",
          move_number: 100,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"C16\\":[\\"C16\\",\\"B16\\",\\"C15\\",\\"D15\\",\\"K13\\"],\\"H12\\":[\\"H12\\",\\"G12\\",\\"G11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520468/gayfsiv3zgyoz830mtru.png",
          suspended: false,
          createdAt: "2023-12-14T02:21:09.261000+00:00",
          updatedAt: "2023-12-14T02:21:09.261000+00:00",
        },
        {
          sgf_id: 82,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-07]PC[OGS: https://online-go.com/game/58693208]GN[winchell vs. jaedge]PB[winchell]PW[jaedge]BR[5k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[W+T]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[W]AB[fq][lq][mq][nq][pq][ip][jp][kp][mp][qp][go][io][no][qo][hn][kn][ln][nn][dm][gm][km][mm][nm][bl][cl][nl][ck][dk][fk][ik][kk][mk][ok][hj][kj][mj][oj][pj][ji][mi][oi][pi][qi][mh][ph][qh][eg][gg][hg][lg][pg][qg][rg][if][jf][kf][qf][ce][de][ie][le][oe][qe][jd][kd][rd][ec][lc][oc][rc][pb][rb]AW[lr][dq][kq][lp][co][eo][jo][ko][lo][mo][po][in][jn][mn][pn][qn][bm][cm][hm][im][lm][om][jl][kl][ll][ml][ol][bk][hk][nk][pk][qk][bj][cj][nj][qj][di][fi][hi][li][ni][ri][ih][kh][nh][oh][rh][cg][ig][jg][og][hf][nf][of][pf][he][je][pe][cd][id][nd][od][qd][gc][hc][jc][nc][qc][ob][qb](;W[ij]C[Incorrect - This was the actual move played in the game!])(;W[gj]C[CORRECT];B[hl]C[CORRECT];W[ij]C[CORRECT];B[jk]C[CORRECT];W[jm]C[CORRECT];B[kn]C[CORRECT];W[gl]C[CORRECT]))",
          category: "other",
          move_number: 39,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H14\\":[\\"H14\\",\\"B16\\",\\"L14\\",\\"J13\\",\\"M14\\",\\"N14\\"],\\"Q15\\":[\\"Q15\\",\\"R15\\",\\"H14\\",\\"B16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519683/istvqecbduhtyr0wa91g.png",
          suspended: false,
          createdAt: "2023-12-14T02:08:03.387000+00:00",
          updatedAt: "2023-12-14T02:08:03.387000+00:00",
        },
        {
          sgf_id: 82,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-07]PC[OGS: https://online-go.com/game/58693208]GN[winchell vs. jaedge]PB[winchell]PW[jaedge]BR[5k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[W+T]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[B]AB[fq][lq][mq][nq][pq][ip][jp][kp][mp][qp][go][io][no][qo][hn][kn][nn][dm][gm][mm][nm][bl][cl][hl][nl][ck][dk][fk][ik][kk][mk][ok][hj][kj][mj][oj][pj][ji][mi][oi][pi][qi][mh][ph][qh][eg][gg][hg][lg][pg][qg][rg][if][jf][kf][qf][ce][de][ie][le][oe][qe][jd][kd][rd][ec][lc][oc][rc][pb][rb]AW[lr][dq][kq][lp][co][eo][jo][ko][lo][mo][po][in][jn][mn][pn][qn][bm][cm][hm][im][jm][lm][om][jl][kl][ll][ml][ol][bk][hk][jk][nk][pk][qk][bj][cj][ij][nj][qj][di][fi][hi][li][ni][ri][ih][kh][nh][oh][rh][cg][ig][jg][og][hf][nf][of][pf][he][je][pe][cd][id][nd][od][qd][gc][hc][jc][nc][qc][ob][qb](;B[gk]C[Incorrect - This was the actual move played in the game!])(;B[gj]C[CORRECT];W[gi]C[CORRECT];B[ii]C[CORRECT];W[jj]C[CORRECT];B[ki]C[CORRECT]))",
          category: "other",
          move_number: 69,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F14\\":[\\"F14\\",\\"F13\\",\\"N11\\",\\"K18\\",\\"J18\\"],\\"F15\\":[\\"F15\\",\\"B16\\",\\"N11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519716/ktophed0v4ebvyavd11x.png",
          suspended: false,
          createdAt: "2023-12-14T02:08:36.706000+00:00",
          updatedAt: "2023-12-14T02:08:36.706000+00:00",
        },
        {
          sgf_id: 82,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-07]PC[OGS: https://online-go.com/game/58693208]GN[winchell vs. jaedge]PB[winchell]PW[jaedge]BR[5k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[W+T]SZ[19]KM[0.5]RU[Japanese]AB[pd]PL[W]AB[gr][kr][fq][iq][jq][kq][lq][mq][nq][pq][ip][jp][kp][mp][qp][fo][go][io][no][qo][fn][kn][nn][dm][em][mm][nm][bl][cl][hl][nl][ck][dk][fk][gk][hk][ik][kk][mk][ok][hj][kj][mj][oj][pj][ii][ji][ki][mi][oi][pi][qi][mh][ph][qh][eg][gg][hg][lg][pg][qg][rg][if][jf][kf][qf][ce][de][ie][le][oe][qe][jd][kd][rd][ec][lc][rc][pb][rb][qa]AW[ir][jr][lr][dq][hq][hp][lp][co][eo][ho][jo][ko][lo][mo][po][gn][hn][in][jn][mn][pn][qn][bm][cm][fm][hm][im][jm][lm][om][gl][jl][kl][ll][ml][ol][bk][jk][nk][pk][qk][bj][cj][gj][ij][jj][nj][qj][di][fi][hi][li][ni][ri][ih][kh][nh][oh][rh][cg][ig][jg][og][hf][nf][of][pf][he][je][pe][cd][id][nd][od][qd][gc][hc][jc][nc][pc][qc][ob][qb](;W[hr]C[Incorrect - This was the actual move played in the game!])(;W[en]C[CORRECT];B[ep]C[CORRECT];W[dp]C[CORRECT];B[hr]C[CORRECT];W[ej]C[CORRECT];B[ek]C[CORRECT];W[fp]C[CORRECT]))",
          category: "other",
          move_number: 149,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G10\\":[\\"G10\\",\\"K9\\",\\"T14\\",\\"T13\\",\\"S15\\",\\"S10\\"],\\"M10\\":[\\"M10\\",\\"M9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519749/momgbaiviqnggezty2zb.png",
          suspended: false,
          createdAt: "2023-12-14T02:09:10.039000+00:00",
          updatedAt: "2023-12-14T02:09:10.039000+00:00",
        },
        {
          sgf_id: 89,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-10-25]PC[OGS: https://online-go.com/game/58309282]GN[jaedge vs. \u963f\u91cc\u5df4\u5df4]PB[jaedge]PW[\u963f\u91cc\u5df4\u5df4]BR[4k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[or][fq][jq][mq][nq][pq][qq][rq][fp][qp][nm][om][pm][rm][ql][rl][ph][qh][nd][qd][mc][pc]AW[eq][oq][dp][np][op][pp][rp][qo][so][dn][on][pn][qn][rn][qm][qg][nf][qf][le][oe][dc][kc](;B[sq]C[Incorrect - This was the actual move played in the game!])(;B[de]C[CORRECT];W[pd]C[CORRECT];B[rc]C[CORRECT])(;B[cq]C[CORRECT];W[pd]C[CORRECT];B[od]C[CORRECT])(;B[ce]C[CORRECT];W[pd]C[CORRECT];B[od]C[CORRECT])(;B[og]C[CORRECT];W[pd]C[CORRECT];B[qc]C[CORRECT])(;B[cl]C[CORRECT];W[pd]C[CORRECT])(;B[dd]C[CORRECT];W[pr]C[CORRECT];B[qr]C[CORRECT])(;B[lg]C[CORRECT];W[pd]C[CORRECT])(;B[jf]C[CORRECT];W[pd]C[CORRECT])(;B[df]C[CORRECT];W[fd]C[CORRECT])(;B[kg]C[CORRECT];W[pd]C[CORRECT]))",
          category: "other",
          move_number: 45,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D15\\":[\\"D15\\",\\"Q16\\",\\"S17\\"],\\"C3\\":[\\"C3\\",\\"Q16\\",\\"P16\\"],\\"C15\\":[\\"C15\\",\\"Q16\\",\\"P16\\"],\\"P13\\":[\\"P13\\",\\"Q16\\",\\"R17\\"],\\"C8\\":[\\"C8\\",\\"Q16\\"],\\"D16\\":[\\"D16\\",\\"Q2\\",\\"R2\\"],\\"M13\\":[\\"M13\\",\\"Q16\\"],\\"K14\\":[\\"K14\\",\\"Q16\\"],\\"D14\\":[\\"D14\\",\\"F16\\"],\\"L13\\":[\\"L13\\",\\"Q16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519805/aaae2jg91l5pbvp3kvd0.png",
          suspended: false,
          createdAt: "2023-12-14T02:10:06.136000+00:00",
          updatedAt: "2023-12-14T02:10:06.136000+00:00",
        },
        {
          sgf_id: 89,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-10-25]PC[OGS: https://online-go.com/game/58309282]GN[jaedge vs. \u963f\u91cc\u5df4\u5df4]PB[jaedge]PW[\u963f\u91cc\u5df4\u5df4]BR[4k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[er][kr][or][bq][cq][fq][iq][jq][mq][nq][pq][qq][rq][sq][fp][ip][qp][go][ho][in][nm][om][pm][rm][ml][ql][rl][bk][ck][ik][jk][nk][kj][ci][ki][ni][nh][ph][qh][kg][gf][ce][de][ie][je][ke][ld][nd][qd][mc][pc]AW[hr][jr][eq][hq][kq][oq][bp][cp][dp][hp][jp][np][op][pp][rp][sp][io][jo][ko][qo][so][dn][on][pn][qn][rn][qm][cl][jl][kl][kk][mk][dj][lj][mi][mh][mg][qg][lf][nf][qf][le][oe][cd][hd][id][kd][dc][gc][kc](;W[dl]C[Incorrect - This was the actual move played in the game!])(;W[dk]C[CORRECT];B[dl]C[CORRECT];W[el]C[CORRECT];B[dm]C[CORRECT];W[em]C[CORRECT];B[cm]C[CORRECT];W[bm]C[CORRECT]))",
          category: "other",
          move_number: 73,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K8\\":[\\"K8\\",\\"K12\\",\\"L12\\",\\"L14\\"],\\"J15\\":[\\"J15\\",\\"Q16\\",\\"P16\\"],\\"F16\\":[\\"F16\\",\\"F17\\",\\"K8\\"],\\"H16\\":[\\"H16\\",\\"J15\\",\\"H17\\",\\"J17\\"],\\"H14\\":[\\"H14\\",\\"K8\\",\\"J9\\"],\\"E17\\":[\\"E17\\",\\"E18\\",\\"E16\\"],\\"C3\\":[\\"C3\\",\\"F2\\",\\"B6\\"],\\"D16\\":[\\"D16\\",\\"C17\\",\\"K8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702519847/brlf5a6ea5tv3kufnkal.png",
          suspended: false,
          createdAt: "2023-12-14T02:10:48.267000+00:00",
          updatedAt: "2023-12-14T02:10:48.267000+00:00",
        },
        {
          sgf_id: 42,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1440]OT[6x48 byo-yomi]PW[awk]PB[Kevxander]WR[4k]BR[7k]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[B+Resign]PL[B]AB[hs][br][fr][gr][ir][or][cq][eq][iq][kq][lq][oq][qq][fp][op][go][ho][lo][gn][in][jn][kn][mn][pn][cm][dm][lm][bl][ck][dj][dh][fh][cg][eg][cf][ce][ee][fe][cd][dd]AW[bs][os][cr][dr][hr][nr][pr][bq][gq][hq][nq][bp][hp][ip][kp][lp][mp][np][io][jo][ko][no][bn][cn][dn][en][hn][bm][hm][dg][df][ef][ff][gf][de][ed][fd][gd][cc][dc](;B[mr]C[Incorrect - This was the actual move played in the game!])(;B[gm]C[CORRECT];W[jq]C[CORRECT];B[jr]C[CORRECT];W[rp]C[CORRECT]))",
          category: "other",
          move_number: 82,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G7\\":[\\"G7\\",\\"K3\\",\\"K2\\",\\"S4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520099/nwj29pkik7oaku2syyi0.png",
          suspended: false,
          createdAt: "2023-12-14T02:15:00.229000+00:00",
          updatedAt: "2023-12-14T02:15:00.229000+00:00",
        },
        {
          sgf_id: 88,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-01]PC[OGS: https://online-go.com/game/58506928]GN[jaedge vs. OGGGS]PB[jaedge]PW[OGGGS]BR[3k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[pq][dj][ci][di][bh][ch][cg][cf][gf][ce][he][cd][hd][cc][ic][pc][bb][cb][ib]AW[dp][ck][dk][aj][cj][bi][ah][bg][bf][be][ge][bd][gd][bc][dc][gc][db][hb](;W[hc]C[Incorrect - This was the actual move played in the game!])(;W[fb]C[CORRECT];B[ec]C[CORRECT];W[ed]C[CORRECT];B[dd]C[CORRECT];W[eb]C[CORRECT];B[ee]C[CORRECT])(;W[ff]C[CORRECT];B[ee]C[CORRECT];W[fe]C[CORRECT];B[gg]C[CORRECT];W[ed]C[CORRECT]))",
          category: "other",
          move_number: 88,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"O13\\":[\\"O13\\",\\"P12\\",\\"O17\\",\\"O18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520515/xid3ofv96jtb4bhapyk8.png",
          suspended: false,
          createdAt: "2023-12-14T02:21:55.738000+00:00",
          updatedAt: "2023-12-14T02:21:55.738000+00:00",
        },
        {
          sgf_id: 42,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1440]OT[6x48 byo-yomi]PW[awk]PB[Kevxander]WR[4k]BR[7k]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[B+Resign]PL[B]AB[hs][br][fr][gr][ir][mr][or][rr][cq][eq][iq][kq][lq][oq][qq][rq][fp][op][go][ho][lo][qo][ro][gn][in][jn][kn][mn][pn][cm][dm][em][fm][lm][nm][om][pm][bl][ql][ck][dj][dh][fh][cg][eg][cf][ce][ee][fe][cd][dd][id][jd][fc][gc][hc][kc][oc][qc][hb]AW[bs][os][cr][dr][hr][nr][pr][qr][bq][gq][hq][nq][bp][hp][ip][kp][lp][mp][np][qp][rp][io][jo][ko][no][po][bn][cn][dn][en][fn][hn][nn][on][qn][bm][gm][hm][qm][gl][qi][dg][df][ef][ff][gf][qf][de][ie][ed][fd][gd][hd][nd][cc][dc][ec][nc][fb][gb](;B[ih]C[Incorrect - This was the actual move played in the game!])(;B[fq]C[CORRECT];W[jq]C[CORRECT];B[jr]C[CORRECT];W[is]C[CORRECT])(;B[gp]C[CORRECT];W[gs]C[CORRECT];B[fs]C[CORRECT];W[jq]C[CORRECT]))",
          category: "other",
          move_number: 122,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F3\\":[\\"F3\\",\\"K3\\",\\"K2\\",\\"J1\\"],\\"G4\\":[\\"G4\\",\\"G1\\",\\"F1\\",\\"K3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520114/mdlhenffridguwlnlyur.png",
          suspended: false,
          createdAt: "2023-12-14T02:15:15.239000+00:00",
          updatedAt: "2023-12-14T02:15:15.239000+00:00",
        },
        {
          sgf_id: 42,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1440]OT[6x48 byo-yomi]PW[awk]PB[Kevxander]WR[4k]BR[7k]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[B+Resign]PL[W]AB[hs][br][fr][gr][ir][mr][or][rr][cq][eq][iq][kq][lq][oq][qq][rq][fp][op][go][ho][lo][qo][ro][gn][in][jn][kn][mn][pn][cm][dm][em][fm][lm][nm][om][pm][bl][ql][ck][dj][dh][fh][cg][eg][cf][ce][ee][fe][cd][dd][id][jd][fc][gc][hc][kc][oc][qc][hb]AW[bs][os][cr][dr][hr][nr][pr][qr][bq][gq][hq][nq][bp][hp][ip][kp][lp][mp][np][qp][rp][io][jo][ko][no][po][bn][cn][dn][en][fn][hn][nn][on][qn][bm][gm][hm][qm][qi][dg][df][ef][ff][gf][qf][de][ie][ed][fd][gd][hd][nd][cc][dc][ec][nc][fb][gb](;W[gl]C[Incorrect - This was the actual move played in the game!])(;W[fo]C[CORRECT];B[gp]C[CORRECT];W[fq]C[CORRECT];B[ep]C[CORRECT];W[er]C[CORRECT];B[il]C[CORRECT];W[gk]C[CORRECT]))",
          category: "other",
          move_number: 121,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F5\\":[\\"F5\\",\\"G4\\",\\"F3\\",\\"E4\\",\\"E2\\",\\"J8\\",\\"G9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520123/wq7773snekf0riyqnszv.png",
          suspended: false,
          createdAt: "2023-12-14T02:15:24.182000+00:00",
          updatedAt: "2023-12-14T02:15:24.182000+00:00",
        },
        {
          sgf_id: 42,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1440]OT[6x48 byo-yomi]PW[awk]PB[Kevxander]WR[4k]BR[7k]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[B+Resign]PL[B]AB[hs][is][ks][br][ir][mr][or][rr][cq][eq][iq][kq][lq][mq][oq][qq][rq][fp][op][fo][go][ho][lo][qo][ro][gn][in][jn][kn][mn][pn][cm][dm][em][fm][lm][nm][om][pm][bl][ql][ck][dj][pi][dh][fh][ih][nh][qh][rh][cg][eg][lg][cf][kf][mf][nf][of][ce][ee][fe][ke][ne][pe][cd][dd][id][jd][fc][gc][hc][kc][lc][oc][pc][qc][hb][lb][mb][qb][na][oa][pa]AW[bs][fs][gs][os][cr][dr][er][hr][jr][nr][pr][qr][bq][fq][gq][hq][jq][nq][bp][hp][ip][kp][lp][mp][np][qp][rp][io][jo][ko][no][po][bn][cn][dn][en][fn][hn][nn][on][qn][bm][gm][hm][qm][gl][qi][ri][ph][dg][qg][df][ef][ff][gf][lf][pf][qf][de][ie][je][le][me][oe][ed][fd][gd][hd][kd][ld][md][nd][od][cc][dc][ec][ic][mc][nc][fb][gb][ib][nb][ob][pb](;B[pj]C[Incorrect - This was the actual move played in the game!])(;B[rj]C[CORRECT];W[qj]C[CORRECT];B[rk]C[CORRECT];W[rg]C[CORRECT];B[re]C[CORRECT]))",
          category: "other",
          move_number: 172,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S10\\":[\\"S10\\",\\"R10\\",\\"S9\\",\\"S13\\",\\"S15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520141/adjdixhavhczakgyjgpv.png",
          suspended: false,
          createdAt: "2023-12-14T02:15:41.434000+00:00",
          updatedAt: "2023-12-14T02:15:41.434000+00:00",
        },
        {
          sgf_id: 42,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1440]OT[6x48 byo-yomi]PW[awk]PB[Kevxander]WR[4k]BR[7k]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[B+Resign]PL[B]AB[br][cq][lq][qq][fp][pn][cm][dm][bl][ck][dj][dh][fh][cg][eg][cf][ce][ee][fe][cd][dd]AW[pr][bq][hq][nq][bp][no][bn][cn][dn][en][bm][dg][df][ef][ff][gf][de][ed][fd][gd][cc][dc](;B[iq]C[Incorrect - This was the actual move played in the game!])(;B[go]C[CORRECT];W[kp]C[CORRECT];B[lp]C[CORRECT];W[lo]C[CORRECT];B[ko]C[CORRECT])(;B[jq]C[CORRECT];W[go]C[CORRECT];B[gp]C[CORRECT];W[hp]C[CORRECT])(;B[gn]C[CORRECT];W[kp]C[CORRECT];B[dr]C[CORRECT];W[kq]C[CORRECT])(;B[mp]C[CORRECT];W[go]C[CORRECT];B[gq]C[CORRECT])(;B[ip]C[CORRECT];W[hp]C[CORRECT])(;B[hp]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G5\\":[\\"G5\\",\\"L4\\",\\"M4\\",\\"M5\\",\\"L5\\"],\\"K3\\":[\\"K3\\",\\"G5\\",\\"G4\\",\\"H4\\"],\\"G6\\":[\\"G6\\",\\"L4\\",\\"D2\\",\\"L3\\"],\\"N4\\":[\\"N4\\",\\"G5\\",\\"G3\\"],\\"J4\\":[\\"J4\\",\\"H4\\"],\\"H4\\":[\\"H4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520163/qfogff4rhhrmrb7n7upb.png",
          suspended: false,
          createdAt: "2023-12-14T02:16:04.099000+00:00",
          updatedAt: "2023-12-14T02:16:04.099000+00:00",
        },
        {
          sgf_id: 42,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1440]OT[6x48 byo-yomi]PW[awk]PB[Kevxander]WR[4k]BR[7k]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[B+Resign]PL[B]AB[hs][br][fr][gr][ir][mr][or][rr][cq][eq][iq][kq][lq][oq][qq][rq][fp][op][go][ho][lo][qo][ro][gn][in][jn][kn][mn][pn][cm][dm][fm][lm][nm][om][pm][bl][ql][ck][dj][dh][fh][cg][eg][cf][ce][ee][fe][cd][dd][id][jd][fc][gc][hc][kc][oc][qc][hb]AW[bs][os][cr][dr][hr][nr][pr][qr][bq][gq][hq][nq][bp][hp][ip][kp][lp][mp][np][qp][rp][io][jo][ko][no][po][bn][cn][dn][en][fn][hn][nn][on][qn][bm][gm][hm][qm][qi][dg][df][ef][ff][gf][qf][de][ie][ed][fd][gd][hd][nd][cc][dc][ec][nc][fb][gb](;B[em]C[Incorrect - This was the actual move played in the game!])(;B[fq]C[CORRECT];W[jq]C[CORRECT];B[jr]C[CORRECT];W[is]C[CORRECT];B[js]C[CORRECT])(;B[ep]C[CORRECT];W[jq]C[CORRECT];B[jr]C[CORRECT];W[is]C[CORRECT])(;B[gp]C[CORRECT];W[jq]C[CORRECT];B[jr]C[CORRECT];W[ks]C[CORRECT])(;B[fo]C[CORRECT];W[jq]C[CORRECT];B[jr]C[CORRECT]))",
          category: "other",
          move_number: 120,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F3\\":[\\"F3\\",\\"K3\\",\\"K2\\",\\"J1\\",\\"K1\\"],\\"E4\\":[\\"E4\\",\\"K3\\",\\"K2\\",\\"J1\\"],\\"G4\\":[\\"G4\\",\\"K3\\",\\"K2\\",\\"L1\\"],\\"F5\\":[\\"F5\\",\\"K3\\",\\"K2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520193/y63aeoyewupwarjuc28p.png",
          suspended: false,
          createdAt: "2023-12-14T02:16:34.142000+00:00",
          updatedAt: "2023-12-14T02:16:34.142000+00:00",
        },
        {
          sgf_id: 42,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]HA[3]KM[0.50]TM[1440]OT[6x48 byo-yomi]PW[awk]PB[Kevxander]WR[4k]BR[7k]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd]AB[dp]AB[pp]RE[B+Resign]PL[W]AB[hs][is][ks][br][ir][mr][or][rr][cq][eq][iq][kq][lq][mq][oq][qq][rq][fp][op][fo][go][ho][lo][qo][ro][gn][in][jn][kn][mn][pn][cm][dm][em][fm][lm][mm][nm][om][pm][bl][ql][ck][dj][pj][pi][dh][fh][ih][nh][oh][qh][rh][cg][eg][lg][cf][kf][mf][nf][of][ce][ee][fe][ke][ne][pe][re][cd][dd][id][jd][fc][gc][hc][kc][lc][oc][pc][qc][hb][lb][mb][qb][na][oa][pa]AW[bs][fs][gs][os][cr][dr][er][hr][jr][nr][pr][qr][bq][fq][gq][hq][jq][nq][bp][hp][ip][kp][lp][mp][np][qp][rp][io][jo][ko][no][po][bn][cn][dn][en][fn][hn][nn][on][qn][bm][gm][hm][qm][gl][ml][qi][ri][ph][dg][pg][qg][rg][df][ef][ff][gf][lf][pf][qf][de][ie][je][le][me][oe][ed][fd][gd][hd][kd][ld][md][nd][od][cc][dc][ec][ic][mc][nc][fb][gb][ib][nb][ob][pb](;W[oi]C[Incorrect - This was the actual move played in the game!])(;W[qe]C[CORRECT];B[rd]C[CORRECT];W[rk]C[CORRECT];B[rl]C[CORRECT];W[sk]C[CORRECT])(;W[rk]C[CORRECT];B[rl]C[CORRECT];W[qe]C[CORRECT];B[ik]C[CORRECT]))",
          category: "other",
          move_number: 179,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R15\\":[\\"R15\\",\\"S16\\",\\"S9\\",\\"S8\\",\\"T9\\"],\\"S9\\":[\\"S9\\",\\"S8\\",\\"R15\\",\\"J9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520202/j8gwjojqz4gov6q82swr.png",
          suspended: false,
          createdAt: "2023-12-14T02:16:43.162000+00:00",
          updatedAt: "2023-12-14T02:16:43.162000+00:00",
        },
        {
          sgf_id: 57,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479111]GN[Friendly Match]PB[skr0nk]PW[shelly613]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[co][do][en][fn][fl][fk][gk][lk][mk][cj][ej][hj][nj][oj][qj][hi][ki][li][hh][kh][ph][qh][hg][ig][lg][mg][mf][pf][qf][rf][je][oe][cd][pd][ec][jc][qc]AW[dq][jq][nq][cp][dp][gp][qp][eo][fo][gn][gl][hl][ll][ml][hk][kk][nk][ok][qk][gj][ij][kj][rj][ii][ih][jh][oh][rh][jg][kg][og][pg][qg][rg][kf][lf][of](;B[oi]C[Incorrect - This was the actual move played in the game!])(;B[pk]C[CORRECT];W[pl]C[CORRECT];B[pj]C[CORRECT];W[rl]C[CORRECT];B[le]C[CORRECT];W[me]C[CORRECT];B[ld]C[CORRECT];W[ne]C[CORRECT])(;B[pj]C[CORRECT];W[pk]C[CORRECT];B[le]C[CORRECT];W[dn]C[CORRECT];B[cn]C[CORRECT];W[dm]C[CORRECT]))",
          category: "other",
          move_number: 75,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q9\\":[\\"Q9\\",\\"Q8\\",\\"Q10\\",\\"S8\\",\\"M15\\",\\"N15\\",\\"M16\\",\\"O15\\"],\\"Q10\\":[\\"Q10\\",\\"Q9\\",\\"M15\\",\\"D6\\",\\"C6\\",\\"D7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520239/jbcd0eujip5xxpm0xliw.png",
          suspended: false,
          createdAt: "2023-12-14T02:17:19.969000+00:00",
          updatedAt: "2023-12-14T02:17:19.969000+00:00",
        },
        {
          sgf_id: 57,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479111]GN[Friendly Match]PB[skr0nk]PW[shelly613]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[nr][or][pr][lq][pq][qq][pp][co][do][bn][cn][en][fn][qn][fm][gm][fl][fk][gk][cj][ej][hj][hi][ki][li][mi][hh][kh][lh][cg][hg][ig][lg][mg][jf][mf][pf][qf][rf][be][je][ke][me][oe][cd][dd][ld][pd][dc][ec][jc][mc][qc][db]AW[mr][qr][rr][dq][jq][mq][nq][rq][bp][cp][dp][gp][op][qp][bo][eo][fo][ho][po][qo][gn][hm][gl][hl][ll][ml][hk][kk][nk][ok][qk][gj][ij][jj][kj][lj][mj][pj][rj][ii][ni][qi][ih][jh][mh][nh][oh][rh][jg][kg][ng][og][pg][qg][rg][bf][kf][lf][of][ce][le][bd][cc][cb](;B[ae]C[Incorrect - This was the actual move played in the game!])(;B[bc]C[CORRECT];W[sf]C[CORRECT];B[se]C[CORRECT];W[sg]C[CORRECT];B[re]C[CORRECT]))",
          category: "other",
          move_number: 129,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B17\\":[\\"B17\\",\\"T14\\",\\"T15\\",\\"T13\\",\\"S15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520245/myrmqngftiosoqgbpqsq.png",
          suspended: false,
          createdAt: "2023-12-14T02:17:25.971000+00:00",
          updatedAt: "2023-12-14T02:17:25.971000+00:00",
        },
        {
          sgf_id: 57,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479111]GN[Friendly Match]PB[skr0nk]PW[shelly613]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[co][do][en][fn][fl][fk][gk][cj][ej][hj][hi][ki][li][mi][hh][kh][nh][hg][ig][lg][mg][jf][mf][pf][qf][rf][je][me][oe][cd][pd][ec][jc][mc][qc]AW[dq][jq][nq][cp][dp][gp][qp][eo][fo][gn][gl][hl][ll][ml][hk][kk][nk][ok][qk][gj][ij][kj][lj][mj][pj][rj][ii][ni][qi][ih][jh][oh][rh][jg][kg][ng][og][pg][qg][rg][kf][lf][of](;W[jj]C[Incorrect - This was the actual move played in the game!])(;W[dn]C[CORRECT];B[cn]C[CORRECT];W[dm]C[CORRECT];B[em]C[CORRECT];W[cm]C[CORRECT]))",
          category: "other",
          move_number: 38,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q10\\":[\\"Q10\\",\\"Q11\\",\\"Q9\\",\\"J11\\",\\"D17\\",\\"D16\\",\\"C17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520265/cv2sbsapjfhm6wzapdrc.png",
          suspended: false,
          createdAt: "2023-12-14T02:17:46.213000+00:00",
          updatedAt: "2023-12-14T02:17:46.213000+00:00",
        },
        {
          sgf_id: 57,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479111]GN[Friendly Match]PB[skr0nk]PW[shelly613]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[nr][or][pr][lq][pq][qq][pp][co][do][bn][cn][en][fn][qn][fm][gm][fl][fk][gk][cj][ej][hj][hi][ki][li][mi][hh][kh][lh][cg][hg][ig][lg][mg][jf][mf][pf][qf][rf][be][je][ke][me][oe][cd][ld][pd][dc][ec][jc][mc][qc][db]AW[mr][qr][rr][dq][jq][mq][nq][rq][bp][cp][dp][gp][op][qp][bo][eo][fo][ho][po][qo][gn][hm][gl][hl][ll][ml][hk][kk][nk][ok][qk][gj][ij][jj][kj][lj][mj][pj][rj][ii][ni][qi][ih][jh][mh][nh][oh][rh][jg][kg][ng][og][pg][qg][rg][kf][lf][of][ce][le][bd][cc][cb](;B[dd]C[Incorrect - This was the actual move played in the game!])(;B[bf]C[CORRECT];W[sf]C[CORRECT];B[se]C[CORRECT];W[sg]C[CORRECT];B[re]C[CORRECT])(;B[ad]C[CORRECT];W[dd]C[CORRECT];B[bf]C[CORRECT];W[an]C[CORRECT])(;B[de]C[CORRECT];W[dd]C[CORRECT];B[bf]C[CORRECT];W[ed]C[CORRECT])(;B[cf]C[CORRECT];W[dd]C[CORRECT];B[bf]C[CORRECT]))",
          category: "other",
          move_number: 127,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B14\\":[\\"B14\\",\\"T14\\",\\"T15\\",\\"T13\\",\\"S15\\"],\\"A16\\":[\\"A16\\",\\"D16\\",\\"B14\\",\\"A6\\"],\\"D15\\":[\\"D15\\",\\"D16\\",\\"B14\\",\\"E16\\"],\\"C14\\":[\\"C14\\",\\"D16\\",\\"B14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520272/izx1cvi6jysaspc6z6zz.png",
          suspended: false,
          createdAt: "2023-12-14T02:17:53.028000+00:00",
          updatedAt: "2023-12-14T02:17:53.028000+00:00",
        },
        {
          sgf_id: 57,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59479111]GN[Friendly Match]PB[skr0nk]PW[shelly613]BR[11k]WR[12k]TM[480]OT[3x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[nr][or][pr][lq][pq][qq][pp][co][do][bn][cn][en][fn][qn][fm][gm][fl][fk][gk][cj][ej][hj][hi][ki][li][mi][hh][kh][lh][cg][hg][ig][lg][mg][jf][mf][pf][qf][rf][ae][be][je][ke][me][oe][cd][dd][ld][pd][dc][ec][jc][mc][qc][db]AW[mr][qr][rr][dq][jq][mq][nq][rq][bp][cp][dp][gp][op][qp][bo][eo][fo][ho][po][qo][gn][hm][gl][hl][ll][ml][hk][kk][nk][ok][qk][gj][ij][jj][kj][lj][mj][pj][rj][ii][ni][qi][ih][jh][mh][nh][oh][rh][jg][kg][ng][og][pg][qg][rg][bf][kf][lf][of][ce][le][bd][cc][cb](;W[af]C[Incorrect - This was the actual move played in the game!])(;W[ac]C[CORRECT];B[ba]C[CORRECT];W[bb]C[CORRECT];B[ca]C[CORRECT];W[cf]C[CORRECT];B[ab]C[CORRECT];W[aa]C[CORRECT]))",
          category: "other",
          move_number: 130,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"A17\\":[\\"A17\\",\\"B19\\",\\"B18\\",\\"C19\\",\\"C14\\",\\"A18\\",\\"A19\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520289/ins7k9dcqctv9a6n6lqr.png",
          suspended: false,
          createdAt: "2023-12-14T02:18:09.774000+00:00",
          updatedAt: "2023-12-14T02:18:09.774000+00:00",
        },
        {
          sgf_id: 81,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-17]PC[OGS: https://online-go.com/game/58977717]GN[Gra towarzyska]PB[konrad.wodnik87]PW[hermanstadt]BR[23k]WR[20k]TM[0]OT[150 simple]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[dr][dq][fq][hq][jq][lq][pq][op][pp][po][qn][rn][rm][dl][ql][dj][qj][qh][qd]AW[cr][cq][dp][fp][hp][jp][lp][oo][qo][ro][pn][pm][qm][cl][rl][cj][pj][ph][dd](;B[sl]C[Incorrect - This was the actual move played in the game!])(;B[rk]C[CORRECT];W[gq]C[CORRECT];B[gr]C[CORRECT];W[gp]C[CORRECT];B[ck]C[CORRECT];W[bk]C[CORRECT];B[dk]C[CORRECT];W[iq]C[CORRECT];B[kp]C[CORRECT]))",
          category: "other",
          move_number: 39,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S9\\":[\\"S9\\",\\"G3\\",\\"G2\\",\\"G4\\",\\"C9\\",\\"B9\\",\\"D9\\",\\"J3\\",\\"L4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520303/abjmscoleqhwjbs8a9le.png",
          suspended: false,
          createdAt: "2023-12-14T02:18:23.989000+00:00",
          updatedAt: "2023-12-14T02:18:23.989000+00:00",
        },
        {
          sgf_id: 92,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-26]PC[OGS: https://online-go.com/game/57433249]GN[NAGF Online League Match]PB[jsmattsonjr]PW[levithedegu]BR[6k]WR[6k]TM[2700]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[7.5]RU[AGA]PL[W]AB[fs][er][gr][cq][dq][fq][pq][gp][hp][jp][pp][ho][qo][hn][qn][qm][ql][di][qe][hd][nd][pd][fc][db]AW[cr][dr][eq][lq][qq][cp][dp][ep][fp][qp][go][ro][gn][rn][rm][dk][qj][cf][pf][qf][dd][cc](;W[gm]C[Incorrect - This was the actual move played in the game!])(;W[oo]C[CORRECT];B[po]C[CORRECT];W[ln]C[CORRECT];B[qr]C[CORRECT];W[rr]C[CORRECT])(;W[ln]C[CORRECT];B[mp]C[CORRECT];W[lp]C[CORRECT];B[mo]C[CORRECT];W[lo]C[CORRECT])(;W[nq]C[CORRECT];B[no]C[CORRECT];W[pr]C[CORRECT])(;W[qr]C[CORRECT];B[nq]C[CORRECT];W[np]C[CORRECT];B[mq]C[CORRECT])(;W[mo]C[CORRECT];B[mm]C[CORRECT];W[oo]C[CORRECT])(;W[kp]C[CORRECT];B[qr]C[CORRECT])(;W[lo]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M17\\":[\\"M17\\",\\"N18\\",\\"K17\\",\\"J17\\",\\"J15\\",\\"N15\\"],\\"O18\\":[\\"O18\\",\\"M17\\",\\"R17\\",\\"Q17\\",\\"Q18\\"],\\"P10\\":[\\"P10\\",\\"Q2\\",\\"R2\\",\\"O9\\",\\"P5\\"],\\"P5\\":[\\"P5\\",\\"O8\\",\\"R2\\"],\\"K17\\":[\\"K17\\",\\"M17\\",\\"K15\\",\\"D13\\"],\\"F16\\":[\\"F16\\",\\"G16\\",\\"F15\\"],\\"O10\\":[\\"O10\\",\\"Q2\\"],\\"R17\\":[\\"R17\\",\\"S15\\"],\\"R2\\":[\\"R2\\",\\"Q12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520326/xwyp6hkl8qutfkkhxlrm.png",
          suspended: false,
          createdAt: "2023-12-14T02:18:47.237000+00:00",
          updatedAt: "2023-12-14T02:18:47.237000+00:00",
        },
        {
          sgf_id: 92,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-26]PC[OGS: https://online-go.com/game/57433249]GN[NAGF Online League Match]PB[jsmattsonjr]PW[levithedegu]BR[6k]WR[6k]TM[2700]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[7.5]RU[AGA]PL[B]AB[fs][er][gr][cq][dq][fq][pq][gp][hp][jp][pp][qo][qn][qm][ql][di][qe][hd][nd][pd][fc][db]AW[cr][dr][eq][lq][qq][cp][dp][ep][fp][qp][go][ro][rn][rm][dk][qj][cf][pf][qf][dd][cc](;B[ho]C[Incorrect - This was the actual move played in the game!])(;B[lo]C[CORRECT];W[oo]C[CORRECT];B[po]C[CORRECT];W[qr]C[CORRECT];B[pr]C[CORRECT];W[mm]C[CORRECT])(;B[bq]C[CORRECT];W[br]C[CORRECT];B[lo]C[CORRECT];W[oo]C[CORRECT];B[po]C[CORRECT];W[mm]C[CORRECT])(;B[pr]C[CORRECT];W[kp]C[CORRECT];B[pj]C[CORRECT])(;B[bn]C[CORRECT];W[bo]C[CORRECT];B[lo]C[CORRECT];W[oo]C[CORRECT];B[po]C[CORRECT];W[mm]C[CORRECT])(;B[qr]C[CORRECT];W[rr]C[CORRECT];B[lo]C[CORRECT];W[oo]C[CORRECT])(;B[mn]C[CORRECT];W[oo]C[CORRECT];B[np]C[CORRECT]))",
          category: "other",
          move_number: 48,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P5\\":[\\"P5\\",\\"Q5\\",\\"M6\\",\\"R2\\",\\"S2\\"],\\"M6\\":[\\"M6\\",\\"N4\\",\\"M4\\",\\"N5\\",\\"M5\\"],\\"O3\\":[\\"O3\\",\\"O5\\",\\"Q2\\"],\\"R2\\":[\\"R2\\",\\"O3\\",\\"O4\\",\\"N3\\"],\\"N5\\":[\\"N5\\",\\"N7\\",\\"P5\\"],\\"L4\\":[\\"L4\\",\\"R2\\"],\\"M5\\":[\\"M5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520337/lpqdesduovqbsehkfxxd.png",
          suspended: false,
          createdAt: "2023-12-14T02:18:58.222000+00:00",
          updatedAt: "2023-12-14T02:18:58.222000+00:00",
        },
        {
          sgf_id: 92,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-26]PC[OGS: https://online-go.com/game/57433249]GN[NAGF Online League Match]PB[jsmattsonjr]PW[levithedegu]BR[6k]WR[6k]TM[2700]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[7.5]RU[AGA]PL[B]AB[fs][er][gr][ir][pr][qr][cq][dq][fq][pq][gp][hp][jp][mp][np][pp][ho][lo][qo][hn][ln][qn][qm][ql][di][qe][hd][nd][pd][fc][db]AW[cr][dr][jr][or][rr][eq][lq][qq][cp][dp][ep][fp][kp][lp][qp][go][ko][mo][ro][gn][rn][gm][rm][dk][qj][cf][pf][qf][dd][cc](;B[nr]C[Incorrect - This was the actual move played in the game!])(;B[kn]C[CORRECT];W[iq]C[CORRECT];B[jq]C[CORRECT];W[jo]C[CORRECT]))",
          category: "other",
          move_number: 145,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D17\\":[\\"D17\\",\\"C16\\",\\"B19\\",\\"C10\\",\\"K18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520349/wcxoqiddruxx69qpuvli.png",
          suspended: false,
          createdAt: "2023-12-14T02:19:09.701000+00:00",
          updatedAt: "2023-12-14T02:19:09.701000+00:00",
        },
        {
          sgf_id: 92,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-26]PC[OGS: https://online-go.com/game/57433249]GN[NAGF Online League Match]PB[jsmattsonjr]PW[levithedegu]BR[6k]WR[6k]TM[2700]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[7.5]RU[AGA]PL[B]AB[fs][er][gr][ir][nr][pr][qr][cq][dq][fq][jq][pq][gp][hp][jp][mp][np][pp][ho][lo][qo][hn][ln][qn][lm][nm][qm][il][kl][ll][ol][ql][rl][jk][ok][kj][lj][nj][pj][di][ji][ni][pi][ch][hh][ph][cg][lg][rg][df][lf][de][ee][ne][qe][re][ed][fd][hd][md][nd][od][pd][rd][fc][kc][lc][qc][cb][db]AW[rs][cr][dr][jr][or][rr][eq][lq][qq][cp][dp][ep][fp][kp][lp][qp][go][ko][mo][ro][gn][in][kn][rn][gm][hm][im][km][rm][jl][nl][dk][mk][pk][ij][jj][mj][qj][ii][ki][mi][qi][kh][lh][nh][qh][dg][jg][ng][qg][cf][ef][nf][pf][qf][ce][fe][oe][dd][cc][ec][mc][rc][bb][kb][lb][nb][pb][qb](;B[jm]C[Incorrect - This was the actual move played in the game!])(;B[dc]C[CORRECT];W[cd]C[CORRECT];B[ba]C[CORRECT];W[rb]C[CORRECT];B[jc]C[CORRECT]))",
          category: "other",
          move_number: 45,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M5\\":[\\"M5\\",\\"P5\\",\\"Q5\\",\\"R2\\",\\"Q2\\",\\"N7\\"],\\"B3\\":[\\"B3\\",\\"B2\\",\\"M5\\",\\"P5\\",\\"Q5\\",\\"N7\\"],\\"Q2\\":[\\"Q2\\",\\"L4\\",\\"Q10\\"],\\"B6\\":[\\"B6\\",\\"B5\\",\\"M5\\",\\"P5\\",\\"Q5\\",\\"N7\\"],\\"R2\\":[\\"R2\\",\\"S2\\",\\"M5\\",\\"P5\\"],\\"N6\\":[\\"N6\\",\\"P5\\",\\"O4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520382/l1ezvlg7favcd3vfthx0.png",
          suspended: false,
          createdAt: "2023-12-14T02:19:42.697000+00:00",
          updatedAt: "2023-12-14T02:19:42.697000+00:00",
        },
        {
          sgf_id: 92,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-26]PC[OGS: https://online-go.com/game/57433249]GN[NAGF Online League Match]PB[jsmattsonjr]PW[levithedegu]BR[6k]WR[6k]TM[2700]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[7.5]RU[AGA]PL[B]AB[fs][er][gr][ir][kr][nr][pr][qr][cq][dq][fq][jq][pq][gp][hp][ip][jp][mp][np][pp][ho][lo][qo][hn][jn][ln][qn][jm][lm][nm][qm][sm][bl][cl][dl][fl][il][jl][kl][ll][ol][ql][rl][bk][ek][fk][jk][ok][qk][aj][bj][ej][kj][lj][nj][oj][pj][di][hi][ji][ni][pi][ch][eh][fh][hh][ph][cg][hg][lg][og][pg][rg][df][ff][gf][if][jf][lf][rf][de][ee][ge][ke][ne][qe][re][ed][fd][hd][jd][md][nd][od][pd][rd][fc][ic][kc][lc][qc][sc][cb][db][eb][gb][jb][rb][ba][da]AW[rs][cr][dr][jr][lr][or][rr][eq][lq][qq][cp][dp][ep][fp][kp][lp][qp][rp][go][io][jo][ko][mo][ro][gn][in][kn][rn][am][bm][cm][dm][em][fm][gm][hm][im][km][rm][al][el][nl][ak][dk][gk][mk][pk][hj][ij][jj][mj][qj][rj][fi][gi][ii][ki][mi][oi][qi][gh][ih][kh][lh][nh][oh][qh][rh][dg][fg][gg][jg][ng][qg][cf][ef][nf][of][pf][qf][ce][oe][bd][dd][cc][dc][ec][mc][nc][pc][bb][hb][ib][kb][lb][nb][pb][qb][ja](;B[eg]C[Incorrect - This was the actual move played in the game!])(;B[ab]C[CORRECT];W[bg]C[CORRECT];B[bh]C[CORRECT];W[bf]C[CORRECT]))",
          category: "other",
          move_number: 52,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P5\\":[\\"P5\\",\\"Q5\\",\\"Q2\\",\\"P2\\"],\\"Q2\\":[\\"Q2\\",\\"P2\\",\\"R1\\",\\"O3\\",\\"K17\\",\\"M17\\",\\"K15\\",\\"D13\\"],\\"F11\\":[\\"F11\\",\\"D13\\",\\"B12\\",\\"D14\\"],\\"F16\\":[\\"F16\\",\\"G16\\",\\"F15\\",\\"Q2\\",\\"J17\\"],\\"M17\\":[\\"M17\\",\\"Q2\\"],\\"R17\\":[\\"R17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520405/h9plmsawfcwdd54l6dnc.png",
          suspended: false,
          createdAt: "2023-12-14T02:20:06.314000+00:00",
          updatedAt: "2023-12-14T02:20:06.314000+00:00",
        },
        {
          sgf_id: 92,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-26]PC[OGS: https://online-go.com/game/57433249]GN[NAGF Online League Match]PB[jsmattsonjr]PW[levithedegu]BR[6k]WR[6k]TM[2700]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[7.5]RU[AGA]PL[W]AB[fs][er][gr][ir][kr][nr][pr][qr][cq][dq][fq][jq][pq][gp][hp][ip][jp][mp][np][pp][ho][lo][qo][hn][jn][ln][qn][jm][lm][nm][qm][sm][bl][cl][dl][fl][il][jl][kl][ll][ol][ql][rl][bk][ek][fk][jk][ok][qk][aj][bj][ej][kj][lj][nj][oj][pj][di][hi][ji][ni][pi][ch][eh][fh][hh][ph][cg][hg][lg][og][pg][rg][df][ff][gf][if][jf][lf][rf][de][ee][ge][ke][ne][qe][re][ed][fd][hd][jd][md][nd][od][pd][rd][fc][ic][kc][lc][qc][sc][cb][db][eb][gb][jb][rb][ba][da]AW[rs][cr][dr][jr][lr][or][rr][eq][lq][qq][cp][dp][ep][fp][kp][lp][qp][rp][go][io][jo][ko][mo][ro][gn][in][kn][rn][am][bm][cm][dm][em][fm][gm][hm][im][km][rm][al][el][nl][ak][dk][gk][mk][pk][hj][ij][jj][mj][qj][rj][fi][gi][ii][ki][mi][oi][qi][gh][ih][kh][lh][nh][oh][qh][rh][dg][gg][jg][ng][qg][cf][ef][nf][of][pf][qf][ce][oe][bd][dd][cc][dc][ec][mc][nc][pc][bb][hb][ib][kb][lb][nb][pb][qb][ja](;W[fg]C[Incorrect - This was the actual move played in the game!])(;W[bg]C[CORRECT];B[ka]C[CORRECT];W[la]C[CORRECT];B[oc]C[CORRECT])(;W[bf]C[CORRECT];B[bq]C[CORRECT];W[br]C[CORRECT]))",
          category: "other",
          move_number: 146,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D17\\":[\\"D17\\",\\"E18\\",\\"B16\\",\\"B9\\",\\"B8\\",\\"C8\\",\\"C9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520420/as10lxtlslxgonudjoxs.png",
          suspended: false,
          createdAt: "2023-12-14T02:20:20.848000+00:00",
          updatedAt: "2023-12-14T02:20:20.848000+00:00",
        },
        {
          sgf_id: 80,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-19]PC[OGS: https://online-go.com/game/59027287]GN[AlpacaFury vs. levithedegu]PB[AlpacaFury]PW[levithedegu]BR[7k]WR[6k]TM[259200]OT[86400 fischer]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[dr][er][hq][qn][qk][df][dd][ed][pd][cc][hc][nc]AW[cr][dq][nq][dp][pp][cn][qf][rd][dc][ec][fc](;W[fd]C[Incorrect - This was the actual move played in the game!])(;W[cb]C[CORRECT];B[br]C[CORRECT];W[cq]C[CORRECT];B[bc]C[CORRECT];W[bb]C[CORRECT];B[kq]C[CORRECT]))",
          category: "other",
          move_number: 55,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M17\\":[\\"M17\\",\\"C16\\",\\"B16\\",\\"C15\\",\\"D15\\"],\\"L17\\":[\\"L17\\",\\"C16\\",\\"B16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520447/sijsljg0ctn46bc5thys.png",
          suspended: false,
          createdAt: "2023-12-14T02:20:47.431000+00:00",
          updatedAt: "2023-12-14T02:20:47.431000+00:00",
        },
        {
          sgf_id: 88,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-01]PC[OGS: https://online-go.com/game/58506928]GN[jaedge vs. OGGGS]PB[jaedge]PW[OGGGS]BR[3k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[pq][dj][ci][di][bh][ch][cg][cf][ce][cd][cc][pc][bb]AW[dp][ck][dk][cj][bi][ah][bg][bf][be][bd][bc][dc](;W[aj]C[Incorrect - This was the actual move played in the game!])(;W[db]C[CORRECT];B[cb]C[CORRECT];W[hc]C[CORRECT];B[cq]C[CORRECT];W[dq]C[CORRECT];B[cp]C[CORRECT])(;W[ic]C[CORRECT];B[cq]C[CORRECT];W[db]C[CORRECT])(;W[hc]C[CORRECT];B[jc]C[CORRECT];W[db]C[CORRECT])(;W[id]C[CORRECT];B[cq]C[CORRECT]))",
          category: "other",
          move_number: 38,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F18\\":[\\"F18\\",\\"E17\\",\\"E16\\",\\"D16\\",\\"E18\\",\\"E15\\"],\\"F14\\":[\\"F14\\",\\"E15\\",\\"F15\\",\\"G13\\",\\"E16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520537/ythbhyu89j6k5becujsi.png",
          suspended: false,
          createdAt: "2023-12-14T02:22:17.564000+00:00",
          updatedAt: "2023-12-14T02:22:17.564000+00:00",
        },
        {
          sgf_id: 88,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-01]PC[OGS: https://online-go.com/game/58506928]GN[jaedge vs. OGGGS]PB[jaedge]PW[OGGGS]BR[3k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[nq][pq][qo][rn][kl][nl][ql][kk][mk][nk][pk][rk][dj][jj][lj][mj][pj][ci][di][hi][ji][mi][oi][bh][ch][nh][oh][cg][ng][og][pg][cf][ff][gf][if][of][qf][rf][ce][he][ne][oe][pe][cd][ed][hd][nd][qd][rd][cc][ic][kc][lc][mc][pc][bb][cb][ib]AW[dp][oo][qn][lm][nm][om][ll][ml][ol][ck][dk][lk][ok][aj][cj][kj][oj][bi][ki][li][ni][pi][qi][ri][ah][kh][lh][mh][ph][sh][bg][kg][mg][qg][rg][bf][kf][lf][nf][be][ge][me][qe][bd][gd][id][jd][kd][ld][md][bc][dc][ec][gc][hc][qc][rc][db][fb][hb][pb](;B[oc]C[Incorrect - This was the actual move played in the game!])(;B[ob]C[CORRECT];W[ro]C[CORRECT];B[pn]C[CORRECT];W[qp]C[CORRECT];B[po]C[CORRECT];W[pp]C[CORRECT])(;B[nb]C[CORRECT];W[ro]C[CORRECT];B[pn]C[CORRECT];W[qp]C[CORRECT]))",
          category: "other",
          move_number: 126,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S10\\":[\\"S10\\",\\"Q6\\",\\"Q8\\",\\"R9\\"],\\"R9\\":[\\"R9\\",\\"R10\\",\\"S10\\",\\"Q6\\",\\"Q8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520569/sxdqt7vpx3jjfj8v9gd7.png",
          suspended: false,
          createdAt: "2023-12-14T02:22:49.669000+00:00",
          updatedAt: "2023-12-14T02:22:49.669000+00:00",
        },
        {
          sgf_id: 88,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-01]PC[OGS: https://online-go.com/game/58506928]GN[jaedge vs. OGGGS]PB[jaedge]PW[OGGGS]BR[3k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[rs][pr][qr][nq][pq][pp][qo][pn][qn][rn][qm][kl][nl][ql][kk][mk][nk][pk][rk][dj][jj][lj][mj][pj][ci][di][hi][ji][mi][oi][bh][ch][nh][oh][cg][ng][og][pg][cf][ff][gf][if][of][qf][rf][ce][he][ne][oe][pe][cd][ed][hd][nd][qd][rd][cc][ic][kc][lc][mc][oc][pc][bb][cb][ib][rb]AW[rr][qq][rq][dp][qp][oo][po][ro][sn][lm][nm][om][rm][ll][ml][ol][ck][dk][lk][ok][aj][cj][kj][oj][bi][ki][li][ni][pi][qi][ri][ah][kh][lh][mh][ph][sh][bg][kg][mg][qg][rg][bf][kf][lf][nf][be][ge][me][qe][bd][gd][id][jd][kd][ld][md][bc][dc][ec][gc][hc][qc][rc][db][fb][hb][ob][pb](;B[rl]C[Incorrect - This was the actual move played in the game!])(;B[sp]C[CORRECT];W[qk]C[CORRECT];B[pl]C[CORRECT];W[rj]C[CORRECT];B[sj]C[CORRECT]))",
          category: "other",
          move_number: 125,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P18\\":[\\"P18\\",\\"S5\\",\\"Q6\\",\\"R4\\",\\"Q5\\",\\"Q4\\"],\\"O18\\":[\\"O18\\",\\"S5\\",\\"Q6\\",\\"R4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520583/djqtf9sz0rggzbrsnnb2.png",
          suspended: false,
          createdAt: "2023-12-14T02:23:03.983000+00:00",
          updatedAt: "2023-12-14T02:23:03.983000+00:00",
        },
        {
          sgf_id: 90,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-10-18]PC[OGS: https://online-go.com/game/58080468]GN[MrMiagi vs. AldnYildiz]PB[MrMiagi]PW[AldnYildiz]BR[9k]WR[8k]TM[259200]OT[86400 fischer]RE[B+T]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[W]AB[qp][po][cm][nm][qm][ml][ol][pl][nk][qk][pj][qj][oi][oh][dg][dd][od][qd][mc]AW[fq][pq][qq][np][ql][rl][ok][pk][nj][oj][rj][pi][qi][qf][ne][oe][gc][jc](;W[rm]C[Incorrect - This was the actual move played in the game!])(;W[mj]C[CORRECT];B[lq]C[CORRECT];W[mq]C[CORRECT];B[lp]C[CORRECT]))",
          category: "other",
          move_number: 39,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N10\\":[\\"N10\\",\\"M3\\",\\"N3\\",\\"M4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520705/g8x184lozdgqwxi9kpn8.png",
          suspended: false,
          createdAt: "2023-12-14T02:25:05.528000+00:00",
          updatedAt: "2023-12-14T02:25:05.528000+00:00",
        },
        {
          sgf_id: 90,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-10-18]PC[OGS: https://online-go.com/game/58080468]GN[MrMiagi vs. AldnYildiz]PB[MrMiagi]PW[AldnYildiz]BR[9k]WR[8k]TM[259200]OT[86400 fischer]RE[B+T]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[B]AB[gr][bq][cq][dq][gq][iq][jq][ep][gp][qp][fo][go][jo][ko][po][qn][cm][nm][pm][qm][cl][ll][ml][ol][pl][jk][kk][nk][dj][mj][oi][mh][oh][dg][dd][od][qd][mc][eb][fb]AW[gs][br][cr][dr][fr][hr][ir][jr][fq][kq][pq][qq][fp][kp][np][bo][eo][lo][cn][en][on][dm][lm][rm][jl][kl][ql][rl][ik][ok][pk][rk][nj][oj][rj][pi][qi][qf][ne][oe][fc][gc][jc](;B[ji]C[Incorrect - This was the actual move played in the game!])(;B[il]C[CORRECT];W[im]C[CORRECT];B[hl]C[CORRECT];W[hm]C[CORRECT];B[gm]C[CORRECT])(;B[kr]C[CORRECT];W[kn]C[CORRECT];B[er]C[CORRECT])(;B[mo]C[CORRECT];W[ln]C[CORRECT];B[gm]C[CORRECT])(;B[hs]C[CORRECT];W[fs]C[CORRECT])(;B[fm]C[CORRECT];W[fn]C[CORRECT])(;B[gl]C[CORRECT];W[ek]C[CORRECT]))",
          category: "other",
          move_number: 88,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J8\\":[\\"J8\\",\\"J7\\",\\"H8\\",\\"H7\\",\\"G7\\"],\\"L2\\":[\\"L2\\",\\"L6\\",\\"E2\\"],\\"N5\\":[\\"N5\\",\\"M6\\",\\"G7\\"],\\"H1\\":[\\"H1\\",\\"F1\\"],\\"F7\\":[\\"F7\\",\\"F6\\"],\\"G8\\":[\\"G8\\",\\"E9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520720/nztzuihuvwzejuyxmlxg.png",
          suspended: false,
          createdAt: "2023-12-14T02:25:20.516000+00:00",
          updatedAt: "2023-12-14T02:25:20.516000+00:00",
        },
        {
          sgf_id: 90,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-10-18]PC[OGS: https://online-go.com/game/58080468]GN[MrMiagi vs. AldnYildiz]PB[MrMiagi]PW[AldnYildiz]BR[9k]WR[8k]TM[259200]OT[86400 fischer]RE[B+T]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[B]AB[qp][po][cm][nm][qm][ml][ol][pl][nk][qk][pj][qj][oi][oh][dg][dd][od][qd][mc]AW[fq][pq][qq][np][rm][ql][rl][ok][pk][nj][oj][rj][pi][qi][qf][ne][oe][gc][jc](;B[qn]C[Incorrect - This was the actual move played in the game!])(;B[mj]C[CORRECT];W[rk]C[CORRECT];B[lq]C[CORRECT];W[lk]C[CORRECT];B[mk]C[CORRECT]))",
          category: "other",
          move_number: 40,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N10\\":[\\"N10\\",\\"S9\\",\\"M3\\",\\"M9\\",\\"N9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520727/qqtpqxj3splyh8yohbpq.png",
          suspended: false,
          createdAt: "2023-12-14T02:25:28.329000+00:00",
          updatedAt: "2023-12-14T02:25:28.329000+00:00",
        },
        {
          sgf_id: 90,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-10-18]PC[OGS: https://online-go.com/game/58080468]GN[MrMiagi vs. AldnYildiz]PB[MrMiagi]PW[AldnYildiz]BR[9k]WR[8k]TM[259200]OT[86400 fischer]RE[B+T]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[B]AB[po][cm][nm][ol][pl][nk][qk][pj][qj][oi][oh][dg][dd][od][qd][mc]AW[fq][pq][np][nl][ql][rl][ok][pk][nj][oj][pi][qi][qf][ne][oe][gc][jc](;B[ml]C[Incorrect - This was the actual move played in the game!])(;B[mj]C[CORRECT];W[ni]C[CORRECT];B[ml]C[CORRECT];W[mi]C[CORRECT];B[li]C[CORRECT];W[lj]C[CORRECT];B[mh]C[CORRECT];W[mk]C[CORRECT]))",
          category: "other",
          move_number: 34,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N10\\":[\\"N10\\",\\"O11\\",\\"N8\\",\\"N11\\",\\"M11\\",\\"M10\\",\\"N12\\",\\"N9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520754/ensomhrmbd3qlftcoxbj.png",
          suspended: false,
          createdAt: "2023-12-14T02:25:54.423000+00:00",
          updatedAt: "2023-12-14T02:25:54.423000+00:00",
        },
        {
          sgf_id: 90,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-10-18]PC[OGS: https://online-go.com/game/58080468]GN[MrMiagi vs. AldnYildiz]PB[MrMiagi]PW[AldnYildiz]BR[9k]WR[8k]TM[259200]OT[86400 fischer]RE[B+T]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[W]AB[gr][bq][cq][dq][gq][iq][jq][ep][gp][qp][fo][go][jo][ko][po][qn][cm][nm][pm][qm][cl][ll][ml][ol][pl][jk][kk][nk][dj][mj][ji][oi][mh][oh][dg][dd][od][qd][mc][eb][fb]AW[gs][br][cr][dr][fr][hr][ir][jr][fq][kq][pq][qq][fp][kp][np][bo][eo][lo][cn][en][on][dm][lm][rm][jl][kl][ql][rl][ik][ok][pk][rk][nj][oj][rj][pi][qi][qf][ne][oe][fc][gc][jc](;W[hq]C[Incorrect - This was the actual move played in the game!])(;W[gm]C[CORRECT];B[hm]C[CORRECT];W[hl]C[CORRECT];B[kr]C[CORRECT]))",
          category: "other",
          move_number: 89,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G7\\":[\\"G7\\",\\"H7\\",\\"H8\\",\\"L2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520774/rsnu0ihgkxnncryzyxhq.png",
          suspended: false,
          createdAt: "2023-12-14T02:26:15.149000+00:00",
          updatedAt: "2023-12-14T02:26:15.149000+00:00",
        },
        {
          sgf_id: 90,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-10-18]PC[OGS: https://online-go.com/game/58080468]GN[MrMiagi vs. AldnYildiz]PB[MrMiagi]PW[AldnYildiz]BR[9k]WR[8k]TM[259200]OT[86400 fischer]RE[B+T]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd]AB[dp]PL[W]AB[gr][bq][cq][dq][gq][iq][jq][ep][gp][qp][fo][go][ho][io][jo][ko][po][qn][cm][jm][km][nm][pm][qm][cl][ll][ml][ol][pl][jk][kk][nk][cj][dj][mj][ei][fi][hi][ji][oi][mh][oh][dg][dd][od][qd][mc][eb][fb]AW[gs][br][cr][dr][fr][hr][ir][jr][fq][hq][kq][pq][qq][fp][hp][kp][np][bo][eo][lo][cn][en][kn][on][dm][gm][lm][rm][il][jl][kl][ql][rl][dk][ik][ok][pk][rk][ej][fj][nj][oj][rj][pi][qi][qf][ne][oe][fc][gc][jc](;W[dl]C[Incorrect - This was the actual move played in the game!])(;W[ie]C[CORRECT];B[fm]C[CORRECT];W[fl]C[CORRECT])(;W[lb]C[CORRECT];B[ic]C[CORRECT];W[id]C[CORRECT])(;W[lc]C[CORRECT];B[lb]C[CORRECT];W[kb]C[CORRECT])(;W[ed]C[CORRECT];B[gb]C[CORRECT];W[hc]C[CORRECT])(;W[je]C[CORRECT];B[fm]C[CORRECT])(;W[fe]C[CORRECT];B[gj]C[CORRECT]))",
          category: "other",
          move_number: 104,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G10\\":[\\"G10\\",\\"G9\\",\\"F9\\",\\"E9\\"],\\"J16\\":[\\"J16\\",\\"M17\\",\\"M16\\"],\\"H16\\":[\\"H16\\",\\"M17\\",\\"M16\\"],\\"G18\\":[\\"G18\\",\\"L15\\"],\\"E2\\":[\\"E2\\",\\"E1\\",\\"E3\\",\\"F1\\"],\\"M16\\":[\\"M16\\",\\"M18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520784/kmsauuuuudak2tbp1xhf.png",
          suspended: false,
          createdAt: "2023-12-14T02:26:24.867000+00:00",
          updatedAt: "2023-12-14T02:26:24.867000+00:00",
        },
        {
          sgf_id: 79,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-19]PC[OGS: https://online-go.com/game/59046302]GN[jaedge vs. jaypak1]PB[jaedge]PW[jaypak1]BR[3k]WR[3k]TM[1200]OT[5x30 byo-yomi]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[cq][fq][pq][cp][fp][co][pc]AW[dq][eq][iq][dp][do][dn][dd](;B[lq]C[Incorrect - This was the actual move played in the game!])(;B[bm]C[CORRECT];W[hn]C[CORRECT];B[fn]C[CORRECT];W[cl]C[CORRECT];B[fl]C[CORRECT];W[dk]C[CORRECT];B[bl]C[CORRECT];W[bk]C[CORRECT])(;B[cn]C[CORRECT]))",
          category: "other",
          move_number: 136,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L18\\":[\\"L18\\",\\"P14\\",\\"Q8\\",\\"R7\\",\\"O7\\"],\\"K17\\":[\\"K17\\",\\"P14\\",\\"Q8\\",\\"R7\\",\\"O7\\"],\\"Q16\\":[\\"Q16\\",\\"P16\\",\\"K17\\",\\"P14\\",\\"Q8\\"],\\"H18\\":[\\"H18\\",\\"K17\\",\\"K18\\"],\\"M18\\":[\\"M18\\",\\"P14\\",\\"O14\\",\\"O15\\"],\\"P17\\":[\\"P17\\",\\"P16\\",\\"Q16\\",\\"R16\\",\\"Q15\\",\\"P18\\"],\\"P16\\":[\\"P16\\",\\"P17\\",\\"K17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520848/qvw8t5ueyjhwntxbldqq.png",
          suspended: false,
          createdAt: "2023-12-14T02:27:28.478000+00:00",
          updatedAt: "2023-12-14T02:27:28.478000+00:00",
        },
        {
          sgf_id: 33,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]PW[paul64]PB[Apeq]WR[5k]BR[6k]DT[2023-11-13]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[W]AB[cq][em][dl][cj][jj][ai][ci][di][gi][hi][bh][jg][df][ff][if][de][ee][fe][he][bd][jd][kd][bc][cc][jc][lc][bb][db][hb][ib][lb][ca][da]AW[eq][pq][do][ek][ei][ch][dh][fh][gh][bg][cg][eg][hg][ef][be][ce][je][ke][ad][cd][dd][id][ld][pd][dc][ec][hc][mc][eb][gb][mb][ea](;W[la]C[Incorrect - This was the actual move played in the game!])(;W[ie]C[CORRECT];B[hf]C[CORRECT];W[kb]C[CORRECT];B[gc]C[CORRECT];W[le]C[CORRECT]))",
          category: "other",
          move_number: 66,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J15\\":[\\"J15\\",\\"H14\\",\\"L18\\",\\"G17\\",\\"M15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520907/j5ttrr9uehmm9ipriisv.png",
          suspended: false,
          createdAt: "2023-12-14T02:28:27.750000+00:00",
          updatedAt: "2023-12-14T02:28:27.750000+00:00",
        },
        {
          sgf_id: 33,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]PW[paul64]PB[Apeq]WR[5k]BR[6k]DT[2023-11-13]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[W]AB[cs][ds][cr][hr][nr][bq][cq][fq][hq][nq][bp][cp][ep][gp][hp][op][bo][eo][ho][no][an][bn][en][fn][gn][nn][on][em][hm][nm][dl][el][gl][nl][ck][hk][mk][bj][cj][dj][ej][gj][jj][mj][qj][ai][ci][di][fi][gi][hi][ri][bh][ih][kh][lh][ph][rh][jg][og][qg][rg][df][ff][hf][if][pf][qf][de][ee][fe][he][oe][bd][jd][kd][nd][bc][cc][jc][lc][bb][db][hb][ib][jb][kb][lb][ca][da][ka]AW[bs][es][fs][gs][ar][dr][er][gr][aq][dq][eq][gq][pq][ap][dp][jp][pp][co][do][mo][oo][po][cn][pn][am][bm][cm][dm][om][cl][ol][ak][bk][dk][ek][fk][gk][nk][rk][fj][nj][rj][ei][ni][pi][qi][ch][dh][eh][fh][gh][oh][qh][bg][cg][eg][hg][kg][mg][ng][ef][rf][be][ce][ie][je][ke][me][re][ad][cd][dd][id][ld][md][pd][dc][ec][hc][mc][eb][gb][mb][ea][ha][ja][la][ma](;W[nf]C[Incorrect - This was the actual move played in the game!])(;W[qd]C[CORRECT];B[ps]C[CORRECT];W[hs]C[CORRECT];B[ir]C[CORRECT])(;W[qc]C[CORRECT];B[ps]C[CORRECT];W[hs]C[CORRECT];B[ir]C[CORRECT])(;W[rc]C[CORRECT];B[ps]C[CORRECT];W[hs]C[CORRECT];B[jr]C[CORRECT])(;W[pc]C[CORRECT];B[ps]C[CORRECT];W[hs]C[CORRECT])(;W[rd]C[CORRECT];B[ps]C[CORRECT];W[hs]C[CORRECT];B[jr]C[CORRECT])(;W[pb]C[CORRECT];B[ps]C[CORRECT];W[hs]C[CORRECT];B[jr]C[CORRECT])(;W[qe]C[CORRECT];B[ps]C[CORRECT];W[hs]C[CORRECT])(;W[qb]C[CORRECT];B[ps]C[CORRECT];W[hs]C[CORRECT])(;W[rb]C[CORRECT];B[ps]C[CORRECT])(;W[oc]C[CORRECT];B[ps]C[CORRECT]))",
          category: "other",
          move_number: 186,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R16\\":[\\"R16\\",\\"Q1\\",\\"H1\\",\\"J2\\"],\\"R17\\":[\\"R17\\",\\"Q1\\",\\"H1\\",\\"J2\\"],\\"S17\\":[\\"S17\\",\\"Q1\\",\\"H1\\",\\"K2\\"],\\"Q17\\":[\\"Q17\\",\\"Q1\\",\\"H1\\"],\\"S16\\":[\\"S16\\",\\"Q1\\",\\"H1\\",\\"K2\\"],\\"Q18\\":[\\"Q18\\",\\"Q1\\",\\"H1\\",\\"K2\\"],\\"R15\\":[\\"R15\\",\\"Q1\\",\\"H1\\"],\\"R18\\":[\\"R18\\",\\"Q1\\",\\"H1\\"],\\"S18\\":[\\"S18\\",\\"Q1\\"],\\"P17\\":[\\"P17\\",\\"Q1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520917/iko9kl2zmw9v3pflpmwh.png",
          suspended: false,
          createdAt: "2023-12-14T02:28:37.800000+00:00",
          updatedAt: "2023-12-14T02:28:37.800000+00:00",
        },
        {
          sgf_id: 33,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]PW[paul64]PB[Apeq]WR[5k]BR[6k]DT[2023-11-13]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[cq][dl][cj][jj][ai][ci][bh][bd][bc][cc][jc][bb][db]AW[eq][pq][do][ch][dh][bg][be][ce][ad][cd][pd][dc][ec](;B[ee]C[Incorrect - This was the actual move played in the game!])(;B[eb]C[CORRECT];W[cn]C[CORRECT];B[ee]C[CORRECT];W[fc]C[CORRECT];B[df]C[CORRECT];W[id]C[CORRECT]))",
          category: "other",
          move_number: 37,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E13\\":[\\"E13\\",\\"J16\\",\\"E12\\",\\"J17\\",\\"E4\\",\\"D4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520941/k15nlyp9nghbnd04wgao.png",
          suspended: false,
          createdAt: "2023-12-14T02:29:01.686000+00:00",
          updatedAt: "2023-12-14T02:29:01.686000+00:00",
        },
        {
          sgf_id: 33,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]PW[paul64]PB[Apeq]WR[5k]BR[6k]DT[2023-11-13]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[cq][em][dl][cj][jj][ai][ci][di][gi][hi][bh][jg][df][ff][if][de][ee][fe][he][bd][bc][cc][jc][bb][db][ib][lb][ca][da]AW[eq][pq][do][ek][ei][ch][dh][fh][gh][bg][cg][eg][hg][ef][be][ce][je][ad][cd][dd][id][ld][pd][dc][ec][hc][eb][mb][ea](;B[lc]C[Incorrect - This was the actual move played in the game!])(;B[mc]C[CORRECT];W[kb]C[CORRECT];B[nb]C[CORRECT];W[kc]C[CORRECT];B[ep]C[CORRECT];W[dq]C[CORRECT]))",
          category: "other",
          move_number: 34,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F14\\":[\\"F14\\",\\"G15\\",\\"G14\\",\\"H15\\",\\"C6\\"],\\"J16\\":[\\"J16\\",\\"F14\\",\\"J17\\",\\"F12\\"],\\"G13\\":[\\"G13\\",\\"F14\\",\\"F13\\",\\"H16\\"],\\"H17\\":[\\"H17\\",\\"F14\\",\\"D15\\"],\\"C6\\":[\\"C6\\",\\"F14\\",\\"E11\\"],\\"F12\\":[\\"F12\\",\\"F14\\",\\"J16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520956/eikow2v2huvvdi08onun.png",
          suspended: false,
          createdAt: "2023-12-14T02:29:16.931000+00:00",
          updatedAt: "2023-12-14T02:29:16.931000+00:00",
        },
        {
          sgf_id: 33,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]PW[paul64]PB[Apeq]WR[5k]BR[6k]DT[2023-11-13]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[W]AB[cs][ds][cr][hr][bq][cq][fq][hq][bp][cp][ep][gp][hp][bo][eo][ho][an][bn][en][em][hm][dl][el][gl][ck][hk][bj][cj][dj][ej][gj][jj][ai][ci][di][fi][gi][hi][bh][jg][df][ff][hf][if][de][ee][fe][he][bd][jd][kd][bc][cc][jc][lc][bb][db][hb][ib][kb][lb][ca][da]AW[es][fs][gs][ar][dr][er][gr][aq][dq][eq][gq][pq][ap][dp][fp][jp][co][do][fo][go][am][bm][cm][dm][cl][ak][bk][dk][ek][fk][gk][fj][ei][ch][dh][eh][fh][gh][bg][cg][eg][hg][ef][be][ce][ie][je][ke][me][ad][cd][dd][id][ld][pd][dc][ec][hc][mc][eb][gb][mb][ea][la](;W[cn]C[Incorrect - This was the actual move played in the game!])(;W[bs]C[CORRECT];B[br]C[CORRECT];W[cn]C[CORRECT];B[as]C[CORRECT];W[hs]C[CORRECT];B[ir]C[CORRECT];W[bs]C[CORRECT];B[gc]C[CORRECT];W[gd]C[CORRECT];B[as]C[CORRECT];W[is]C[CORRECT]))",
          category: "other",
          move_number: 130,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B1\\":[\\"B1\\",\\"B2\\",\\"C6\\",\\"A1\\",\\"H1\\",\\"J2\\",\\"B1\\",\\"G17\\",\\"G16\\",\\"A1\\",\\"J1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520975/ppcvguqelcygljgwciea.png",
          suspended: false,
          createdAt: "2023-12-14T02:29:35.990000+00:00",
          updatedAt: "2023-12-14T02:29:35.990000+00:00",
        },
        {
          sgf_id: 33,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]PW[paul64]PB[Apeq]WR[5k]BR[6k]DT[2023-11-13]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[cs][ds][cr][fr][hr][bq][cq][fq][hq][bp][cp][ep][gp][bo][eo][ho][bn][en][em][hm][dl][el][gl][ck][hk][bj][cj][dj][ej][gj][jj][ai][ci][di][fi][gi][hi][bh][jg][df][ff][hf][if][de][ee][fe][he][bd][jd][kd][bc][cc][jc][lc][bb][db][hb][ib][kb][lb][ca][da]AW[es][fs][gs][ar][dr][gr][aq][dq][eq][gq][pq][ap][dp][fp][jp][co][do][fo][am][bm][cm][dm][cl][ak][bk][dk][ek][fk][gk][fj][ei][ch][dh][eh][fh][gh][bg][cg][eg][hg][ef][be][ce][ie][je][ke][me][ad][cd][dd][id][ld][pd][dc][ec][hc][mc][eb][gb][mb][ea][la](;B[an]C[Incorrect - This was the actual move played in the game!])(;B[bs]C[CORRECT];W[jr]C[CORRECT];B[ir]C[CORRECT];W[lh]C[CORRECT])(;B[br]C[CORRECT];W[jr]C[CORRECT];B[ir]C[CORRECT];W[in]C[CORRECT])(;B[ao]C[CORRECT];W[bs]C[CORRECT];B[br]C[CORRECT];W[jr]C[CORRECT]))",
          category: "other",
          move_number: 125,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B1\\":[\\"B1\\",\\"K2\\",\\"J2\\",\\"M12\\"],\\"B2\\":[\\"B2\\",\\"K2\\",\\"J2\\",\\"J6\\"],\\"A5\\":[\\"A5\\",\\"B1\\",\\"B2\\",\\"K2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520984/nhqnvzzdu5puodmtagyc.png",
          suspended: false,
          createdAt: "2023-12-14T02:29:44.425000+00:00",
          updatedAt: "2023-12-14T02:29:44.425000+00:00",
        },
        {
          sgf_id: 33,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]PW[paul64]PB[Apeq]WR[5k]BR[6k]DT[2023-11-13]PC[The KGS Go Server at http://www.gokgs.com/]RE[W+Resign]PL[B]AB[cs][ds][cr][hr][bq][cq][fq][hq][bp][cp][ep][gp][hp][bo][eo][ho][an][bn][en][em][hm][dl][el][gl][ck][hk][bj][cj][dj][ej][gj][jj][ai][ci][di][fi][gi][hi][bh][jg][df][ff][hf][if][de][ee][fe][he][bd][jd][kd][bc][cc][jc][lc][bb][db][hb][ib][kb][lb][ca][da]AW[es][fs][gs][ar][dr][er][gr][aq][dq][eq][gq][pq][ap][dp][fp][jp][co][do][fo][go][cn][am][bm][cm][dm][cl][ak][bk][dk][ek][fk][gk][fj][ei][ch][dh][eh][fh][gh][bg][cg][eg][hg][ef][be][ce][ie][je][ke][me][ad][cd][dd][id][ld][pd][dc][ec][hc][mc][eb][gb][mb][ea][la](;B[gn]C[Incorrect - This was the actual move played in the game!])(;B[bs]C[CORRECT];W[jr]C[CORRECT];B[ir]C[CORRECT];W[in]C[CORRECT];B[kr]C[CORRECT]))",
          category: "other",
          move_number: 131,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B1\\":[\\"B1\\",\\"K2\\",\\"J2\\",\\"J6\\",\\"L2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702520994/ivmuysygjmhysuyushpi.png",
          suspended: false,
          createdAt: "2023-12-14T02:29:54.620000+00:00",
          updatedAt: "2023-12-14T02:29:54.620000+00:00",
        },
        {
          sgf_id: 49,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512616]GN[Friendly Match]PB[shelly613]PW[istisna]BR[11k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[jr][nr][dq][jq][kq][nq][oq][pq][np][qp][rp][sp][mo][no]AW[kr][mr][mq][kp][lp][mp][op][pp][po][qo][ro][qd][dc](;W[ks]C[Incorrect - This was the actual move played in the game!])(;W[io]C[CORRECT];B[hp]C[CORRECT];W[qk]C[CORRECT];B[gn]C[CORRECT])(;W[qk]C[CORRECT];B[io]C[CORRECT];W[do]C[CORRECT];B[ce]C[CORRECT])(;W[dp]C[CORRECT];B[ep]C[CORRECT];W[cq]C[CORRECT];B[eq]C[CORRECT];W[qk]C[CORRECT])(;W[kn]C[CORRECT];B[io]C[CORRECT];W[in]C[CORRECT];B[hn]C[CORRECT])(;W[qq]C[CORRECT])(;W[pk]C[CORRECT];B[io]C[CORRECT];W[do]C[CORRECT])(;W[in]C[CORRECT];B[qk]C[CORRECT]))",
          category: "other",
          move_number: 124,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J16\\":[\\"J16\\",\\"J14\\",\\"G16\\",\\"L17\\"],\\"J17\\":[\\"J17\\",\\"J15\\",\\"K15\\",\\"K14\\"],\\"K17\\":[\\"K17\\",\\"D14\\",\\"E15\\"],\\"K16\\":[\\"K16\\",\\"H16\\",\\"C11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702601952/fme5xklxeqskixfytuxn.png",
          suspended: false,
          createdAt: "2023-12-15T00:59:13.485000+00:00",
          updatedAt: "2023-12-15T00:59:13.485000+00:00",
        },
        {
          sgf_id: 49,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512616]GN[Friendly Match]PB[shelly613]PW[istisna]BR[11k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[js][ls][jr][nr][dq][jq][kq][nq][oq][pq][jp][np][qp][rp][sp][mo][no][ln]AW[ks][kr][lr][mr][lq][mq][kp][lp][mp][op][pp][ko][lo][po][qo][ro][qd][dc](;B[jo]C[Incorrect - This was the actual move played in the game!])(;B[jm]C[CORRECT];W[jo]C[CORRECT];B[io]C[CORRECT];W[ip]C[CORRECT];B[jn]C[CORRECT];W[ho]C[CORRECT]))",
          category: "other",
          move_number: 106,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J16\\":[\\"J16\\",\\"J14\\",\\"G16\\",\\"L17\\",\\"K15\\"],\\"J17\\":[\\"J17\\",\\"J15\\",\\"G16\\",\\"G15\\"],\\"E5\\":[\\"E5\\",\\"F6\\",\\"J16\\",\\"J14\\",\\"G16\\"],\\"K17\\":[\\"K17\\",\\"B10\\",\\"C8\\"],\\"K16\\":[\\"K16\\",\\"H17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702601974/sgsr0v6otppqizh6oaob.png",
          suspended: false,
          createdAt: "2023-12-15T00:59:34.795000+00:00",
          updatedAt: "2023-12-15T00:59:34.795000+00:00",
        },
        {
          sgf_id: 49,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-05]PC[OGS: https://online-go.com/game/59512616]GN[Friendly Match]PB[shelly613]PW[istisna]BR[11k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[js][ls][jr][nr][dq][jq][kq][nq][oq][pq][jp][np][qp][rp][sp][mo][no][ln]AW[ks][kr][lr][mr][lq][mq][kp][lp][mp][op][pp][lo][po][qo][ro][qd][dc](;W[ko]C[Incorrect - This was the actual move played in the game!])(;W[jo]C[CORRECT];B[kn]C[CORRECT];W[ko]C[CORRECT];B[qk]C[CORRECT];W[ip]C[CORRECT])(;W[kn]C[CORRECT];B[jo]C[CORRECT];W[lm]C[CORRECT];B[mn]C[CORRECT];W[ko]C[CORRECT];B[im]C[CORRECT];W[jl]C[CORRECT]))",
          category: "other",
          move_number: 36,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"K5\\":[\\"K5\\",\\"L6\\",\\"L5\\",\\"R9\\",\\"J4\\"],\\"L6\\":[\\"L6\\",\\"K5\\",\\"M7\\",\\"N6\\",\\"L5\\",\\"J7\\",\\"K8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702601991/yupm7y0x4ezdqm5cfswc.png",
          suspended: false,
          createdAt: "2023-12-15T00:59:51.661000+00:00",
          updatedAt: "2023-12-15T00:59:51.661000+00:00",
        },
        {
          sgf_id: 78,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-20]PC[OGS: https://online-go.com/game/59053976]GN[Gra towarzyska]PB[konrad.wodnik87]PW[tex.boonjue]BR[22k]WR[23k]TM[0]OT[150 simple]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[pq][ci][ch][dg][eg][bf][cf][ef][ee][cd][ed][ec][jc][nc][cb][eb][ca][fa]AW[dp][di][dh][eh][bg][cg][fg][df][de][ne][dd][pd][cc][dc][db][da][ea](;W[ce]C[Incorrect - This was the actual move played in the game!])(;W[bc]C[CORRECT];B[dj]C[CORRECT];W[fi]C[CORRECT];B[gh]C[CORRECT];W[fh]C[CORRECT];B[qn]C[CORRECT];W[cj]C[CORRECT]))",
          category: "other",
          move_number: 36,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B17\\":[\\"B17\\",\\"D10\\",\\"F11\\",\\"G12\\",\\"F12\\",\\"R6\\",\\"C10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602043/ad2oy5yftngsgz66svdn.png",
          suspended: false,
          createdAt: "2023-12-15T01:00:43.548000+00:00",
          updatedAt: "2023-12-15T01:00:43.548000+00:00",
        },
        {
          sgf_id: 78,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-20]PC[OGS: https://online-go.com/game/59053976]GN[Gra towarzyska]PB[konrad.wodnik87]PW[tex.boonjue]BR[22k]WR[23k]TM[0]OT[150 simple]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[pq][ci][ch][dg][eg][bf][cf][ef][ee][cd][ed][ec][jc][nc][cb][eb][fa]AW[dp][di][dh][eh][bg][cg][fg][df][de][ne][dd][pd][cc][dc][db][da][ea](;B[ca]C[Incorrect - This was the actual move played in the game!])(;B[bd]C[CORRECT];W[bc]C[CORRECT];B[bb]C[CORRECT];W[ad]C[CORRECT];B[be]C[CORRECT];W[ab]C[CORRECT]))",
          category: "other",
          move_number: 37,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B15\\":[\\"B15\\",\\"B17\\",\\"B16\\",\\"A17\\",\\"B18\\",\\"F18\\",\\"F17\\",\\"G19\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602060/qte8mt9lqegxfcpcfrzl.png",
          suspended: false,
          createdAt: "2023-12-15T01:01:01.790000+00:00",
          updatedAt: "2023-12-15T01:01:01.790000+00:00",
        },
        {
          sgf_id: 78,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-20]PC[OGS: https://online-go.com/game/59053976]GN[Gra towarzyska]PB[konrad.wodnik87]PW[tex.boonjue]BR[22k]WR[23k]TM[0]OT[150 simple]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[pq][ci][ch][dg][eg][bf][cf][ef][ee][cd][ed][ec][jc][nc][cb][eb][ca][fa]AW[dp][di][dh][eh][bg][cg][fg][df][ce][de][ne][dd][pd][cc][dc][db][da][ea](;B[bd]C[Incorrect - This was the actual move played in the game!])(;B[be]C[CORRECT];W[bc]C[CORRECT];B[bd]C[CORRECT];W[ac]C[CORRECT];B[bb]C[CORRECT];W[fb]C[CORRECT];B[fc]C[CORRECT];W[ga]C[CORRECT]))",
          category: "other",
          move_number: 35,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B16\\":[\\"B16\\",\\"B17\\",\\"B18\\",\\"A16\\",\\"B15\\",\\"A18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602094/c1aoxuobu47lwh9ayyzx.png",
          suspended: false,
          createdAt: "2023-12-15T01:01:35.445000+00:00",
          updatedAt: "2023-12-15T01:01:35.445000+00:00",
        },
        {
          sgf_id: 76,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-23]PC[OGS: https://online-go.com/game/59142141]GN[Friendly Match]PB[Michael]PW[\uc18c\uc774\ubd80\ub2f5]BR[3d]WR[5d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[pq][po][qo][qn][ql][mj][mh][if][mf][nf][le][qe][re][id][ld][md][nd][od][pd][jc][ib][kb][ob]AW[fq][dp][pn][pm][qm][pj][kh][kf][lf][pf][qf][rf][ke][me][ne][oe][kd][dc][hc][kc][lc][hb][mb](;B[qj]C[Incorrect - This was the actual move played in the game!])(;B[rm]C[CORRECT];W[oh]C[CORRECT];B[ok]C[CORRECT];W[nk]C[CORRECT];B[nj]C[CORRECT]))",
          category: "other",
          move_number: 29,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"G17\\":[\\"G17\\",\\"D15\\",\\"N14\\",\\"M13\\",\\"N13\\"],\\"N14\\":[\\"N14\\",\\"H17\\",\\"J17\\",\\"M13\\"],\\"D16\\":[\\"D16\\",\\"E16\\",\\"C17\\",\\"E17\\"],\\"D15\\":[\\"D15\\",\\"F17\\",\\"C17\\"],\\"F17\\":[\\"F17\\",\\"D15\\",\\"N14\\",\\"M13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602126/sc9iflnikcrsuvwrsdbp.png",
          suspended: false,
          createdAt: "2023-12-15T01:02:06.448000+00:00",
          updatedAt: "2023-12-15T01:02:06.448000+00:00",
        },
        {
          sgf_id: 76,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-23]PC[OGS: https://online-go.com/game/59142141]GN[Friendly Match]PB[Michael]PW[\uc18c\uc774\ubd80\ub2f5]BR[3d]WR[5d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[pq][po][qo][qn][ql][if][le][qe][id][ld][nd][pd][jc][ob]AW[fq][dp][pn][qm][pj][lf][pf][qf][ke][kd][dc][kc][lc][mb](;B[nf]C[Incorrect - This was the actual move played in the game!])(;B[gc]C[CORRECT];W[de]C[CORRECT];B[mf]C[CORRECT];W[lg]C[CORRECT];B[mg]C[CORRECT])(;B[mf]C[CORRECT];W[hc]C[CORRECT];B[ic]C[CORRECT];W[lg]C[CORRECT])(;B[dd]C[CORRECT];W[ed]C[CORRECT];B[cc]C[CORRECT];W[ec]C[CORRECT])(;B[de]C[CORRECT];W[fc]C[CORRECT];B[cc]C[CORRECT])(;B[fc]C[CORRECT];W[de]C[CORRECT];B[mf]C[CORRECT];W[lg]C[CORRECT]))",
          category: "other",
          move_number: 85,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J11\\":[\\"J11\\",\\"G14\\",\\"F14\\",\\"F15\\",\\"K15\\",\\"G15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602160/w8nqxwsfnn8h6um1cndd.png",
          suspended: false,
          createdAt: "2023-12-15T01:02:40.402000+00:00",
          updatedAt: "2023-12-15T01:02:40.402000+00:00",
        },
        {
          sgf_id: 76,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-23]PC[OGS: https://online-go.com/game/59142141]GN[Friendly Match]PB[Michael]PW[\uc18c\uc774\ubd80\ub2f5]BR[3d]WR[5d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[pq][po][qo][qn][lm][rm][ol][ql][mk][pk][qk][kj][mj][qj][hi][ii][mi][ni][hh][jh][mh][eg][fg][gg][ig][ff][if][mf][nf][ge][le][qe][re][gd][hd][id][ld][md][nd][od][pd][jc][ib][kb][ob]AW[fq][dp][pn][nm][pm][qm][nl][nk][ok][nj][pj][rj][oi][pi][qi][eh][fh][gh][kh][nh][hg][gf][hf][jf][kf][lf][pf][qf][rf][fe][he][ie][je][ke][me][ne][oe][kd][dc][fc][hc][kc][lc][hb][mb](;B[dg]C[Incorrect - This was the actual move played in the game!])(;B[fd]C[CORRECT];W[ee]C[CORRECT];B[ed]C[CORRECT];W[dg]C[CORRECT];B[ec]C[CORRECT];W[dd]C[CORRECT];B[db]C[CORRECT];W[cb]C[CORRECT];B[eb]C[CORRECT];W[cn]C[CORRECT];B[de]C[CORRECT];W[ef]C[CORRECT]))",
          category: "other",
          move_number: 86,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J11\\":[\\"J11\\",\\"J10\\",\\"K11\\",\\"K10\\",\\"K13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602203/tz2tnv7tdrzlpjxzsodr.png",
          suspended: false,
          createdAt: "2023-12-15T01:03:23.682000+00:00",
          updatedAt: "2023-12-15T01:03:23.682000+00:00",
        },
        {
          sgf_id: 76,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-23]PC[OGS: https://online-go.com/game/59142141]GN[Friendly Match]PB[Michael]PW[\uc18c\uc774\ubd80\ub2f5]BR[3d]WR[5d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[pq][po][qo][qn][lm][rm][ol][ql][mk][pk][qk][kj][mj][qj][hi][mi][ni][hh][jh][mh][eg][fg][gg][ig][if][mf][nf][le][qe][re][gd][hd][id][ld][md][nd][od][pd][jc][ib][kb][ob]AW[fq][dp][pn][nm][pm][qm][nl][nk][ok][nj][pj][rj][oi][pi][qi][eh][fh][gh][ih][kh][nh][hg][hf][kf][lf][pf][qf][rf][he][ie][ke][me][ne][oe][kd][dc][fc][hc][kc][lc][hb][mb](;W[jf]C[Incorrect - This was the actual move played in the game!])(;W[ii]C[CORRECT];B[ij]C[CORRECT];W[ji]C[CORRECT];B[jj]C[CORRECT];W[jg]C[CORRECT]))",
          category: "other",
          move_number: 39,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q12\\":[\\"Q12\\",\\"R12\\",\\"R11\\",\\"Q11\\",\\"P12\\",\\"S11\\",\\"R13\\",\\"S12\\",\\"S13\\",\\"S14\\"],\\"N10\\":[\\"N10\\",\\"S14\\",\\"R11\\",\\"Q11\\",\\"R10\\",\\"Q9\\"],\\"Q11\\":[\\"Q11\\",\\"R11\\",\\"R12\\",\\"Q12\\",\\"P11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602273/f65aiqshhjwcoalbgar6.png",
          suspended: false,
          createdAt: "2023-12-15T01:04:34.017000+00:00",
          updatedAt: "2023-12-15T01:04:34.017000+00:00",
        },
        {
          sgf_id: 76,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-23]PC[OGS: https://online-go.com/game/59142141]GN[Friendly Match]PB[Michael]PW[\uc18c\uc774\ubd80\ub2f5]BR[3d]WR[5d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[pq][lp][no][po][qo][kn][nn][qn][km][lm][rm][cl][kl][ol][ql][rl][mk][pk][qk][rk][cj][kj][mj][qj][hi][ii][mi][ni][dh][hh][ih][jh][mh][dg][eg][fg][gg][ig][mg][ff][if][mf][nf][ge][le][qe][re][cd][gd][hd][id][ld][md][nd][od][pd][jc][ib][kb][lb][ob]AW[fq][dp][dn][ln][mn][pn][mm][nm][pm][qm][el][ll][nl][pl][nk][ok][sk][ej][nj][pj][rj][ki][oi][pi][qi][eh][fh][gh][kh][nh][hg][jg][lg][gf][hf][jf][kf][lf][pf][qf][rf][fe][he][ie][je][ke][me][ne][oe][fd][kd][cc][dc][fc][hc][ic][kc][lc][mc][hb][mb](;W[se]C[Incorrect - This was the actual move played in the game!])(;W[jj]C[CORRECT];B[jk]C[CORRECT];W[lj]C[CORRECT];B[lk]C[CORRECT]))",
          category: "other",
          move_number: 93,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"F16\\":[\\"F16\\",\\"E15\\",\\"E16\\",\\"D13\\",\\"E17\\",\\"D16\\",\\"D18\\",\\"C18\\",\\"E18\\",\\"C6\\",\\"D15\\",\\"E14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602319/kiesqdkr9m7vtcef8lw6.png",
          suspended: false,
          createdAt: "2023-12-15T01:05:19.566000+00:00",
          updatedAt: "2023-12-15T01:05:19.566000+00:00",
        },
        {
          sgf_id: 76,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-23]PC[OGS: https://online-go.com/game/59142141]GN[Friendly Match]PB[Michael]PW[\uc18c\uc774\ubd80\ub2f5]BR[3d]WR[5d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[cq][pq][lp][no][po][qo][bn][cn][kn][nn][qn][dm][em][km][lm][rm][cl][dl][fl][kl][ol][ql][rl][mk][pk][qk][rk][cj][kj][mj][qj][hi][ii][mi][ni][dh][hh][ih][jh][mh][dg][eg][fg][gg][ig][mg][ff][if][mf][nf][ge][le][qe][re][cd][gd][hd][id][ld][md][nd][od][pd][sd][jc][rc][ib][kb][lb][ob]AW[er][fq][dp][co][dn][en][ln][mn][pn][bm][cm][fm][mm][nm][pm][qm][bl][el][ll][nl][pl][bk][nk][ok][sk][ej][nj][pj][rj][ki][oi][pi][qi][eh][fh][gh][kh][nh][hg][jg][lg][gf][hf][jf][kf][lf][pf][qf][rf][sf][fe][he][ie][je][ke][me][ne][oe][se][fd][kd][cc][dc][fc][hc][ic][kc][lc][mc][hb][mb](;B[bo]C[Incorrect - This was the actual move played in the game!])(;B[dj]C[CORRECT];W[bo]C[CORRECT];B[gm]C[CORRECT];W[jj]C[CORRECT];B[kk]C[CORRECT])(;B[ck]C[CORRECT];W[bo]C[CORRECT];B[gm]C[CORRECT];W[jj]C[CORRECT]))",
          category: "other",
          move_number: 145,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D10\\":[\\"D10\\",\\"B5\\",\\"G7\\",\\"K10\\",\\"L9\\"],\\"C9\\":[\\"C9\\",\\"B5\\",\\"G7\\",\\"K10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602392/nmlxjylyre8pryhx0jxu.png",
          suspended: false,
          createdAt: "2023-12-15T01:06:33.062000+00:00",
          updatedAt: "2023-12-15T01:06:33.062000+00:00",
        },
        {
          sgf_id: 75,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-25]PC[OGS: https://online-go.com/game/59224077]GN[Friendly Match]PB[Michael]PW[Rego8512]BR[2d]WR[4d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[er][fr][bq][cq][dq][gq][pq][bp][ep][eo][po][eh][ce][ed][fd][pd]AW[gr][hr][eq][fq][jq][cp][dp][fp][bo][fo][cn][ej][ci][dc][ec][gc](;B[en]C[Incorrect - This was the actual move played in the game!])(;B[dn]C[CORRECT];W[en]C[CORRECT];B[do]C[CORRECT];W[co]C[CORRECT];B[dm]C[CORRECT];W[cl]C[CORRECT];B[fn]C[CORRECT];W[hp]C[CORRECT];B[em]C[CORRECT];W[fs]C[CORRECT];B[ds]C[CORRECT];W[cm]C[CORRECT]))",
          category: "other",
          move_number: 57,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B13\\":[\\"B13\\",\\"F10\\",\\"L6\\",\\"F1\\",\\"D1\\",\\"R17\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602414/gxgacyjjnufhqa5whtji.png",
          suspended: false,
          createdAt: "2023-12-15T01:06:55.418000+00:00",
          updatedAt: "2023-12-15T01:06:55.418000+00:00",
        },
        {
          sgf_id: 75,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-25]PC[OGS: https://online-go.com/game/59224077]GN[Friendly Match]PB[Michael]PW[Rego8512]BR[2d]WR[4d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[er][fr][cq][dq][pq][po][eh][ce][ed][fd][pd]AW[eq][fq][jq][cp][dp][ej][ci][dc][ec][gc](;W[gr]C[Incorrect - This was the actual move played in the game!])(;W[gq]C[CORRECT];B[bp]C[CORRECT];W[bo]C[CORRECT];B[bq]C[CORRECT];W[cn]C[CORRECT];B[qk]C[CORRECT];W[gd]C[CORRECT];B[di]C[CORRECT])(;W[hq]C[CORRECT]))",
          category: "other",
          move_number: 54,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D12\\":[\\"D12\\",\\"E11\\",\\"E13\\",\\"D14\\"],\\"G9\\":[\\"G9\\",\\"B13\\",\\"D12\\",\\"G5\\"],\\"F1\\":[\\"F1\\",\\"D7\\",\\"D12\\"],\\"R4\\":[\\"R4\\",\\"B13\\",\\"D12\\"],\\"Q6\\":[\\"Q6\\",\\"B13\\",\\"D12\\",\\"F17\\"],\\"O17\\":[\\"O17\\",\\"D12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602420/alxrjsvcgwwli90k3fxp.png",
          suspended: false,
          createdAt: "2023-12-15T01:07:00.582000+00:00",
          updatedAt: "2023-12-15T01:07:00.582000+00:00",
        },
        {
          sgf_id: 75,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-25]PC[OGS: https://online-go.com/game/59224077]GN[Friendly Match]PB[Michael]PW[Rego8512]BR[2d]WR[4d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[er][fr][bq][cq][dq][gq][pq][bp][ep][eo][po][en][fn][gn][hn][im][ek][fk][dj][di][ch][eh][dg][ce][ed][fd][pd]AW[gr][hr][eq][fq][jq][cp][dp][fp][hp][bo][fo][ho][cn][cl][el][fl][dk][cj][ej][ci][bh][cg][gd][dc][ec][gc](;W[ei]C[Incorrect - This was the actual move played in the game!])(;W[dh]C[CORRECT];B[ei]C[CORRECT];W[eg]C[CORRECT];B[df]C[CORRECT])(;W[gk]C[CORRECT];B[bg]C[CORRECT];W[dh]C[CORRECT];B[go]C[CORRECT])(;W[fs]C[CORRECT];B[dm]C[CORRECT];W[dh]C[CORRECT])(;W[qp]C[CORRECT];B[bg]C[CORRECT];W[dh]C[CORRECT])(;W[pn]C[CORRECT];B[bg]C[CORRECT];W[dh]C[CORRECT];B[fc]C[CORRECT])(;W[nc]C[CORRECT];B[dh]C[CORRECT]))",
          category: "other",
          move_number: 65,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"B13\\":[\\"B13\\",\\"G11\\",\\"L6\\",\\"C14\\",\\"B14\\",\\"D15\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602440/rjd3ziiitb1kl2any7v5.png",
          suspended: false,
          createdAt: "2023-12-15T01:07:21.234000+00:00",
          updatedAt: "2023-12-15T01:07:21.234000+00:00",
        },
        {
          sgf_id: 75,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-25]PC[OGS: https://online-go.com/game/59224077]GN[Friendly Match]PB[Michael]PW[Rego8512]BR[2d]WR[4d]TM[300]OT[5x40 byo-yomi]RE[W+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[er][fr][cq][dq][pq][bp][po][eh][ce][ed][fd][pd]AW[gr][eq][fq][jq][cp][dp][bo][ej][ci][dc][ec][gc](;B[bq]C[Incorrect - This was the actual move played in the game!])(;B[gq]C[CORRECT];W[gp]C[CORRECT];B[hq]C[CORRECT];W[hr]C[CORRECT];B[hp]C[CORRECT];W[ho]C[CORRECT];B[ip]C[CORRECT];W[iq]C[CORRECT];B[io]C[CORRECT]))",
          category: "other",
          move_number: 33,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D6\\":[\\"D6\\",\\"E6\\",\\"D5\\",\\"C5\\",\\"D7\\",\\"C8\\",\\"F6\\",\\"H4\\",\\"E7\\",\\"F1\\",\\"D1\\",\\"C7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602452/w2uydqcjhw07qy4eqdrz.png",
          suspended: false,
          createdAt: "2023-12-15T01:07:32.623000+00:00",
          updatedAt: "2023-12-15T01:07:32.623000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[pq][cp][mk][nk][ok][jj][kj][lj][oj][oi][pi][ph][mg][og][kf][lf][mf][of][oe][md][nd][mc]AW[mj][nj][qj][ji][ki][li][ni][qi][lh][nh][oh][qh][kg][pg][pf][pe][cd][od][nc][pc][nb](;W[mh]C[Incorrect - This was the actual move played in the game!])(;W[ij]C[CORRECT];B[mh]C[CORRECT];W[mi]C[CORRECT];B[ik]C[CORRECT];W[hk]C[CORRECT];B[ii]C[CORRECT]))",
          category: "other",
          move_number: 44,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J10\\":[\\"J10\\",\\"N12\\",\\"N11\\",\\"J9\\",\\"H9\\",\\"J11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602511/xiwqrbwsfqfsp10jecge.png",
          suspended: false,
          createdAt: "2023-12-15T01:08:31.658000+00:00",
          updatedAt: "2023-12-15T01:08:31.658000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[pq][cp][mk][nk][ok][jj][kj][lj][oj][oi][pi][ph][og][kf][lf][mf][of][oe][md][nd][mc]AW[mj][nj][qj][ji][ki][li][ni][qi][lh][nh][oh][qh][kg][pg][pf][pe][cd][od][nc][pc][nb](;B[mg]C[Incorrect - This was the actual move played in the game!])(;B[ij]C[CORRECT];W[jf]C[CORRECT];B[je]C[CORRECT];W[if]C[CORRECT];B[ie]C[CORRECT];W[hf]C[CORRECT];B[iq]C[CORRECT])(;B[if]C[CORRECT];W[ij]C[CORRECT];B[ik]C[CORRECT];W[hj]C[CORRECT];B[hk]C[CORRECT];W[gk]C[CORRECT];B[gj]C[CORRECT])(;B[qd]C[CORRECT];W[pd]C[CORRECT];B[qc]C[CORRECT];W[pb]C[CORRECT];B[rf]C[CORRECT])(;B[ig]C[CORRECT];W[ij]C[CORRECT];B[ik]C[CORRECT];W[hj]C[CORRECT])(;B[dd]C[CORRECT];W[ij]C[CORRECT];B[cc]C[CORRECT])(;B[jf]C[CORRECT];W[ij]C[CORRECT])(;B[ii]C[CORRECT])(;B[qc]C[CORRECT]))",
          category: "other",
          move_number: 165,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"E11\\":[\\"E11\\",\\"D11\\",\\"E10\\",\\"E12\\",\\"G11\\",\\"H12\\",\\"F12\\",\\"F13\\",\\"G13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602520/e43p383sxq4mare6fqok.png",
          suspended: false,
          createdAt: "2023-12-15T01:08:41.314000+00:00",
          updatedAt: "2023-12-15T01:08:41.314000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[cr][dq][kq][pq][cp][ep][fp][gp][ip][jp][ho][bn][cm][dm][el][fl][kl][gk][hk][ik][mk][nk][ok][jj][kj][lj][oj][oi][pi][ph][mg][ng][og][jf][kf][lf][mf][of][ie][oe][jd][md][nd][mc][lb]AW[dr][eq][fq][gq][hq][iq][jq][hp][bm][bl][cl][dl][ek][fk][gj][hj][ij][mj][nj][qj][ji][ki][li][ni][qi][lh][mh][nh][oh][qh][jg][kg][pg][hf][if][pf][pe][cd][gd][od][nc][pc][mb][nb](;W[ds]C[Incorrect - This was the actual move played in the game!])(;W[kr]C[CORRECT];B[di]C[CORRECT];W[cf]C[CORRECT];B[dk]C[CORRECT]))",
          category: "other",
          move_number: 96,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R7\\":[\\"R7\\",\\"D11\\",\\"C14\\",\\"D9\\"],\\"D17\\":[\\"D17\\",\\"R8\\",\\"R3\\",\\"R4\\"],\\"R4\\":[\\"R4\\",\\"D11\\",\\"C14\\"],\\"R3\\":[\\"R3\\",\\"D11\\",\\"B11\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602561/gjxtpcn5dwkjuwnl8wj9.png",
          suspended: false,
          createdAt: "2023-12-15T01:09:21.444000+00:00",
          updatedAt: "2023-12-15T01:09:21.444000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[cs][cr][kr][dq][kq][oq][pq][cp][ep][fp][gp][ip][jp][qp][rp][ho][lo][bn][cm][dm][el][fl][kl][ql][rl][gk][hk][ik][mk][nk][ok][pk][jj][kj][lj][oj][oi][pi][ph][mg][ng][og][jf][kf][lf][mf][of][he][ie][le][oe][hd][jd][kd][md][nd][hc][kc][mc][gb][ib][lb][ga][la]AW[ds][fs][dr][fr][jr][or][pr][eq][fq][gq][hq][iq][jq][qq][rq][hp][bm][bl][cl][dl][ek][fk][qk][rk][gj][hj][ij][mj][nj][qj][ji][ki][li][ni][qi][ch][lh][mh][nh][oh][qh][jg][kg][pg][hf][if][pf][ge][pe][cd][gd][od][ec][gc][nc][pc][fb][kb][mb][nb][fa][ma](;B[nq]C[Incorrect - This was the actual move played in the game!])(;B[rr]C[CORRECT];W[qr]C[CORRECT];B[sq]C[CORRECT];W[nq]C[CORRECT];B[mr]C[CORRECT];W[pp]C[CORRECT]))",
          category: "other",
          move_number: 130,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S2\\":[\\"S2\\",\\"S1\\",\\"O2\\",\\"N2\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602572/r0owm6o3j58h1ttfc7uk.png",
          suspended: false,
          createdAt: "2023-12-15T01:09:33.328000+00:00",
          updatedAt: "2023-12-15T01:09:33.328000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[cs][cr][kr][dq][kq][nq][oq][pq][cp][ep][fp][gp][ip][jp][qp][rp][ho][lo][bn][cm][dm][el][fl][kl][ql][rl][gk][hk][ik][mk][nk][ok][pk][jj][kj][lj][oj][oi][pi][ph][mg][ng][og][jf][kf][lf][mf][of][he][ie][le][oe][hd][jd][kd][md][nd][hc][kc][mc][gb][ib][lb][ga][la]AW[ds][fs][dr][fr][jr][nr][or][pr][eq][fq][gq][hq][iq][jq][qq][rq][hp][bm][bl][cl][dl][ek][fk][qk][rk][gj][hj][ij][mj][nj][qj][ji][ki][li][ni][qi][ch][lh][mh][nh][oh][qh][jg][kg][pg][hf][if][pf][ge][pe][cd][gd][od][ec][gc][nc][pc][fb][kb][mb][nb][fa][ma](;B[mr]C[Incorrect - This was the actual move played in the game!])(;B[rr]C[CORRECT];W[qr]C[CORRECT];B[sq]C[CORRECT];W[lr]C[CORRECT];B[ks]C[CORRECT];W[lq]C[CORRECT];B[ls]C[CORRECT]))",
          category: "other",
          move_number: 129,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S2\\":[\\"S2\\",\\"R2\\",\\"T3\\",\\"O3\\",\\"N2\\",\\"Q4\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602578/iffq0h6cpsizqthogc2g.png",
          suspended: false,
          createdAt: "2023-12-15T01:09:39.107000+00:00",
          updatedAt: "2023-12-15T01:09:39.107000+00:00",
        },
        {
          sgf_id: 55,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59485431]GN[Partie amicale]PB[achil.asus]PW[John-Lee]BR[21k]WR[23k]TM[1200]OT[0 absolute]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[dp][pp][kj][pj][li][oi][qi][ih][jh][kh][mh][nh][kg][lg][if][jf][fe][ge][je][gd][hd][jd][kd][hc][ic][jc][gb]AW[ki][cg][hg][ig][jg][mg][ng][og][rg][ff][hf][kf][lf][ee][he][ie][ke][dd][fd][id][ld][pd][fc][gc][kc][jb](;B[gf]C[Incorrect - This was the actual move played in the game!])(;B[mf]C[CORRECT];W[qq]C[CORRECT];B[qp]C[CORRECT];W[pq]C[CORRECT];B[nq]C[CORRECT]))",
          category: "other",
          move_number: 54,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M18\\":[\\"M18\\",\\"G14\\",\\"F13\\",\\"G13\\"],\\"M17\\":[\\"M17\\",\\"O3\\",\\"F17\\",\\"G14\\",\\"G13\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602710/ykrr3w9zii0mfm290adx.png",
          suspended: false,
          createdAt: "2023-12-15T01:11:50.711000+00:00",
          updatedAt: "2023-12-15T01:11:50.711000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[cs][cr][kr][dq][kq][pq][cp][ep][fp][gp][ip][jp][ho][lo][bn][cm][dm][el][fl][kl][gk][hk][ik][mk][nk][ok][jj][kj][lj][oj][oi][pi][ph][mg][ng][og][jf][kf][lf][mf][of][ie][oe][jd][md][nd][mc][lb]AW[ds][dr][fr][jr][eq][fq][gq][hq][iq][jq][hp][bm][bl][cl][dl][ek][fk][gj][hj][ij][mj][nj][qj][ji][ki][li][ni][qi][lh][mh][nh][oh][qh][jg][kg][pg][hf][if][pf][pe][cd][gd][od][nc][pc][mb][nb](;W[fs]C[Incorrect - This was the actual move played in the game!])(;W[qm]C[CORRECT];B[di]C[CORRECT];W[cf]C[CORRECT];B[dk]C[CORRECT])(;W[dc]C[CORRECT];B[ql]C[CORRECT];W[qq]C[CORRECT];B[qp]C[CORRECT])(;W[qp]C[CORRECT];B[di]C[CORRECT];W[cf]C[CORRECT])(;W[qq]C[CORRECT];B[di]C[CORRECT];W[bi]C[CORRECT]))",
          category: "other",
          move_number: 99,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D16\\":[\\"D16\\",\\"C15\\",\\"D17\\",\\"C17\\"],\\"D11\\":[\\"D11\\",\\"D10\\",\\"C15\\",\\"D15\\"],\\"E16\\":[\\"E16\\",\\"D16\\",\\"E15\\",\\"E17\\",\\"F17\\"],\\"C14\\":[\\"C14\\",\\"D16\\",\\"C11\\",\\"B15\\"],\\"F16\\":[\\"F16\\",\\"F15\\",\\"E15\\"],\\"F10\\":[\\"F10\\",\\"D10\\",\\"E10\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602592/xzppcwadm1tb819xh2uc.png",
          suspended: false,
          createdAt: "2023-12-15T01:09:53.030000+00:00",
          updatedAt: "2023-12-15T01:09:53.030000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[cs][cr][kr][dq][kq][nq][oq][pq][cp][ep][fp][gp][ip][jp][qp][rp][ho][lo][bn][cm][dm][el][fl][kl][ql][rl][gk][hk][ik][mk][nk][ok][pk][jj][kj][lj][oj][oi][pi][ph][mg][ng][og][jf][kf][lf][mf][of][he][ie][le][oe][hd][jd][kd][md][nd][hc][kc][mc][gb][ib][lb][ga][la]AW[ds][fs][dr][fr][jr][or][pr][eq][fq][gq][hq][iq][jq][qq][rq][hp][bm][bl][cl][dl][ek][fk][qk][rk][gj][hj][ij][mj][nj][qj][ji][ki][li][ni][qi][ch][lh][mh][nh][oh][qh][jg][kg][pg][hf][if][pf][ge][pe][cd][gd][od][ec][gc][nc][pc][fb][kb][mb][nb][fa][ma](;W[nr]C[Incorrect - This was the actual move played in the game!])(;W[rr]C[CORRECT];B[rs]C[CORRECT];W[nr]C[CORRECT];B[mr]C[CORRECT]))",
          category: "other",
          move_number: 90,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L2\\":[\\"L2\\",\\"D11\\",\\"C14\\",\\"D9\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602607/c44jkx8sdxblmecx7std.png",
          suspended: false,
          createdAt: "2023-12-15T01:10:08.482000+00:00",
          updatedAt: "2023-12-15T01:10:08.482000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[cs][ms][cr][kr][mr][sr][dq][kq][mq][nq][oq][pq][sq][cp][ep][fp][gp][ip][jp][qp][rp][ho][io][lo][oo][an][bn][cn][ln][am][cm][dm][gm][lm][el][fl][kl][ql][rl][sl][dk][gk][hk][ik][mk][nk][ok][pk][dj][fj][jj][kj][lj][oj][oi][pi][ph][mg][ng][og][jf][kf][lf][mf][of][he][ie][le][oe][hd][jd][kd][md][nd][hc][kc][mc][gb][ib][lb][ga][la]AW[ds][fs][ns][qs][rs][dr][fr][jr][nr][or][pr][rr][eq][fq][gq][hq][iq][jq][qq][rq][hp][kp][lp][mp][ko][kn][bm][em][jm][al][bl][cl][dl][ck][ek][fk][qk][rk][sk][cj][gj][hj][ij][mj][nj][qj][fi][ji][ki][li][ni][qi][ch][lh][mh][nh][oh][qh][jg][kg][pg][rg][hf][if][pf][ge][pe][cd][gd][od][ec][gc][nc][pc][fb][kb][mb][nb][fa][ma](;B[ej]C[Incorrect - This was the actual move played in the game!])(;B[ei]C[CORRECT];W[di]C[CORRECT];B[ej]C[CORRECT];W[eh]C[CORRECT];B[gi]C[CORRECT];W[hh]C[CORRECT];B[fh]C[CORRECT];W[fg]C[CORRECT];B[gg]C[CORRECT]))",
          category: "other",
          move_number: 131,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S2\\":[\\"S2\\",\\"R2\\",\\"T3\\",\\"M2\\",\\"L1\\",\\"M3\\",\\"M1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602632/zqvhioo9mengh3rbtqbt.png",
          suspended: false,
          createdAt: "2023-12-15T01:10:33.325000+00:00",
          updatedAt: "2023-12-15T01:10:33.325000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[cs][ms][cr][kr][mr][sr][dq][kq][mq][nq][oq][pq][sq][cp][ep][fp][gp][ip][jp][qp][rp][ho][io][lo][oo][an][bn][cn][ln][am][cm][dm][gm][lm][el][fl][kl][ql][rl][sl][dk][gk][hk][ik][mk][nk][ok][pk][jj][kj][lj][oj][oi][pi][ph][mg][ng][og][jf][kf][lf][mf][of][he][ie][le][oe][hd][jd][kd][md][nd][hc][kc][mc][gb][ib][lb][ga][la]AW[ds][fs][ns][qs][rs][dr][fr][jr][nr][or][pr][rr][eq][fq][gq][hq][iq][jq][qq][rq][hp][kp][lp][mp][ko][kn][bm][em][jm][al][bl][cl][dl][ek][fk][qk][rk][sk][gj][hj][ij][mj][nj][qj][ji][ki][li][ni][qi][ch][lh][mh][nh][oh][qh][jg][kg][pg][rg][hf][if][pf][ge][pe][cd][gd][od][ec][gc][nc][pc][fb][kb][mb][nb][fa][ma](;W[ck]C[Incorrect - This was the actual move played in the game!])(;W[dj]C[CORRECT];B[js]C[CORRECT];W[is]C[CORRECT];B[ks]C[CORRECT])(;W[bj]C[CORRECT];B[dj]C[CORRECT];W[ej]C[CORRECT];B[bd]C[CORRECT])(;W[fm]C[CORRECT];B[gl]C[CORRECT];W[dj]C[CORRECT];B[js]C[CORRECT])(;W[gl]C[CORRECT];B[hl]C[CORRECT];W[fm]C[CORRECT];B[gl]C[CORRECT]))",
          category: "other",
          move_number: 160,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D10\\":[\\"D10\\",\\"K1\\",\\"J1\\",\\"L1\\"],\\"B10\\":[\\"B10\\",\\"D10\\",\\"E10\\",\\"B16\\"],\\"F7\\":[\\"F7\\",\\"G8\\",\\"D10\\",\\"K1\\"],\\"G8\\":[\\"G8\\",\\"H8\\",\\"F7\\",\\"G8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602651/u6440fvr9tyljgyc1hmo.png",
          suspended: false,
          createdAt: "2023-12-15T01:10:53.659000+00:00",
          updatedAt: "2023-12-15T01:10:53.659000+00:00",
        },
        {
          sgf_id: 64,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59452921]GN[Friendly Match]PB[delightspirit]PW[shelly613]BR[12k]WR[11k]TM[480]OT[3x30 byo-yomi]RE[B+9.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[cs][ms][cr][kr][mr][sr][dq][kq][mq][nq][oq][pq][sq][cp][ep][fp][gp][ip][jp][qp][rp][ho][io][lo][oo][an][bn][cn][ln][am][cm][dm][gm][lm][el][fl][kl][ql][rl][sl][dk][gk][hk][ik][mk][nk][ok][pk][dj][ej][fj][jj][kj][lj][oj][oi][pi][ph][mg][ng][og][jf][kf][lf][mf][of][he][ie][le][oe][hd][jd][kd][md][nd][hc][kc][mc][gb][ib][lb][ga][la]AW[ds][fs][ns][qs][rs][dr][fr][jr][nr][or][pr][rr][eq][fq][gq][hq][iq][jq][qq][rq][hp][kp][lp][mp][ko][kn][bm][em][jm][al][bl][cl][dl][ck][qk][rk][sk][cj][gj][hj][ij][mj][nj][qj][fi][ji][ki][li][ni][qi][ch][lh][mh][nh][oh][qh][jg][kg][pg][rg][hf][if][pf][ge][pe][cd][gd][od][ec][gc][nc][pc][fb][kb][mb][nb][fa][ma](;W[di]C[Incorrect - This was the actual move played in the game!])(;W[dh]C[CORRECT];B[ci]C[CORRECT];W[bi]C[CORRECT];B[ei]C[CORRECT];W[fh]C[CORRECT])(;W[eh]C[CORRECT];B[ci]C[CORRECT];W[bi]C[CORRECT];B[dh]C[CORRECT];W[di]C[CORRECT];B[ei]C[CORRECT];W[fh]C[CORRECT]))",
          category: "other",
          move_number: 166,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"D12\\":[\\"D12\\",\\"C11\\",\\"B11\\",\\"E11\\",\\"F12\\"],\\"E12\\":[\\"E12\\",\\"C11\\",\\"B11\\",\\"D12\\",\\"D11\\",\\"E11\\",\\"F12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602666/g8zwa5kcgdqttbq4my4p.png",
          suspended: false,
          createdAt: "2023-12-15T01:11:07.561000+00:00",
          updatedAt: "2023-12-15T01:11:07.561000+00:00",
        },
        {
          sgf_id: 55,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59485431]GN[Partie amicale]PB[achil.asus]PW[John-Lee]BR[21k]WR[23k]TM[1200]OT[0 absolute]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[dp][pp][kj][pj][li][oi][qi][ih][jh][kh][mh][nh][kg][lg][if][jf][je][jd][kd][jc]AW[ki][cg][hg][ig][jg][mg][ng][og][rg][hf][kf][lf][he][ke][dd][ld][pd][kc](;W[jb]C[Incorrect - This was the actual move played in the game!])(;W[lb]C[CORRECT];B[gd]C[CORRECT];W[jb]C[CORRECT];B[hd]C[CORRECT])(;W[lc]C[CORRECT];B[gc]C[CORRECT];W[ec]C[CORRECT];B[hd]C[CORRECT];W[hb]C[CORRECT];B[ib]C[CORRECT];W[hc]C[CORRECT];B[gd]C[CORRECT]))",
          category: "other",
          move_number: 41,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N14\\":[\\"N14\\",\\"M15\\",\\"M17\\",\\"O15\\",\\"J18\\",\\"L18\\",\\"M18\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602687/l0hwmqjvqxd630row5a7.png",
          suspended: false,
          createdAt: "2023-12-15T01:11:27.695000+00:00",
          updatedAt: "2023-12-15T01:11:27.695000+00:00",
        },
        {
          sgf_id: 55,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-04]PC[OGS: https://online-go.com/game/59485431]GN[Partie amicale]PB[achil.asus]PW[John-Lee]BR[21k]WR[23k]TM[1200]OT[0 absolute]RE[B+R]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[dp][pp][kj][pj][li][oi][qi][ih][jh][kh][mh][nh][kg][lg][if][jf][fe][ge][je][gd][hd][jd][kd][hc][ic][jc][gb]AW[ki][cg][hg][ig][jg][mg][ng][og][rg][ff][hf][kf][lf][ee][he][ie][ke][dd][fd][id][ld][pd][gc][kc][jb](;W[fc]C[Incorrect - This was the actual move played in the game!])(;W[lb]C[CORRECT];B[gf]C[CORRECT];W[fg]C[CORRECT];B[gg]C[CORRECT])(;W[lc]C[CORRECT];B[nq]C[CORRECT];W[fc]C[CORRECT];B[gf]C[CORRECT];W[gg]C[CORRECT]))",
          category: "other",
          move_number: 53,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"N14\\":[\\"N14\\",\\"O3\\",\\"P2\\",\\"L3\\"],\\"O3\\":[\\"O3\\",\\"M18\\",\\"G14\\"],\\"N3\\":[\\"N3\\",\\"M18\\",\\"G14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602718/hkdvz8kpfuz55lzq3v9d.png",
          suspended: false,
          createdAt: "2023-12-15T01:11:59.511000+00:00",
          updatedAt: "2023-12-15T01:11:59.511000+00:00",
        },
        {
          sgf_id: 63,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59458123]GN[Willowdale vs. san-dan]PB[Willowdale]PW[san-dan]BR[2k]WR[1d]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]AB[pp]PL[B]AB[cp][pg][pf][pe][jd][od][oc]AW[qh][qf][ne][qe][dd][ld][pd][qd](;B[lc]C[Incorrect - This was the actual move played in the game!])(;B[oe]C[CORRECT];W[ng]C[CORRECT];B[fc]C[CORRECT];W[ph]C[CORRECT])(;B[mc]C[CORRECT];W[eq]C[CORRECT];B[fc]C[CORRECT];W[do]C[CORRECT]))",
          category: "other",
          move_number: 36,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"L13\\":[\\"L13\\",\\"M13\\",\\"M12\\",\\"N12\\",\\"N13\\",\\"M11\\",\\"L12\\",\\"O13\\",\\"N14\\",\\"O14\\"],\\"M13\\":[\\"M13\\",\\"L13\\",\\"K14\\",\\"M12\\",\\"N13\\",\\"O13\\",\\"N12\\",\\"O12\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602743/shctuouooxueaxrdsmij.png",
          suspended: false,
          createdAt: "2023-12-15T01:12:24.727000+00:00",
          updatedAt: "2023-12-15T01:12:24.727000+00:00",
        },
        {
          sgf_id: 63,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59458123]GN[Willowdale vs. san-dan]PB[Willowdale]PW[san-dan]BR[2k]WR[1d]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]AB[pp]PL[B]AB[cp][ph][pg][kf][pf][ge][he][ie][je][oe][pe][hd][jd][od][kc][lc][oc]AW[qi][qh][lf][qf][ke][ne][qe][dd][fd][gd][id][ld][md][pd][qd][hc][ic][mc](;B[ob]C[Incorrect - This was the actual move played in the game!])(;B[kg]C[CORRECT];W[lg]C[CORRECT];B[lh]C[CORRECT];W[mh]C[CORRECT];B[mg]C[CORRECT];W[li]C[CORRECT];B[kh]C[CORRECT];W[ng]C[CORRECT];B[mf]C[CORRECT];W[nf]C[CORRECT])(;B[lg]C[CORRECT];W[kg]C[CORRECT];B[jf]C[CORRECT];W[lh]C[CORRECT];B[mg]C[CORRECT];W[ng]C[CORRECT];B[mh]C[CORRECT];W[nh]C[CORRECT]))",
          category: "other",
          move_number: 16,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P15\\":[\\"P15\\",\\"O13\\",\\"F17\\",\\"Q12\\"],\\"N17\\":[\\"N17\\",\\"E3\\",\\"F17\\",\\"D5\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602774/adzbq9pgq0bkxygyogfw.png",
          suspended: false,
          createdAt: "2023-12-15T01:12:54.855000+00:00",
          updatedAt: "2023-12-15T01:12:54.855000+00:00",
        },
        {
          sgf_id: 63,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59458123]GN[Willowdale vs. san-dan]PB[Willowdale]PW[san-dan]BR[2k]WR[1d]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]AB[pp]PL[W]AB[cp][lo][pn][pm][kk][lk][mk][nk][pk][qk][oj][li][oi][pi][lh][ph][lg][pg][jf][kf][mf][pf][ge][he][ie][je][le][oe][pe][hd][jd][od][kc][lc][oc][qc][rc][ob][pb]AW[on][om][ol][ok][jj][kj][lj][mj][nj][pj][qj][qi][mh][nh][qh][kg][mg][qg][nf][qf][ke][ne][qe][dd][fd][gd][id][ld][md][pd][qd][hc][ic][mc][pc][mb][qb][rb](;W[op]C[Incorrect - This was the actual move played in the game!])(;W[pl]C[CORRECT];B[ql]C[CORRECT];W[qm]C[CORRECT];B[rm]C[CORRECT];W[qn]C[CORRECT];B[po]C[CORRECT];W[rn]C[CORRECT]))",
          category: "other",
          move_number: 80,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"P5\\":[\\"P5\\",\\"O5\\",\\"Q5\\",\\"N7\\",\\"M7\\"],\\"R19\\":[\\"R19\\",\\"S16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602848/ggldw3fpsrnwwlmedgqt.png",
          suspended: false,
          createdAt: "2023-12-15T01:14:08.434000+00:00",
          updatedAt: "2023-12-15T01:14:08.434000+00:00",
        },
        {
          sgf_id: 63,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-03]PC[OGS: https://online-go.com/game/59458123]GN[Willowdale vs. san-dan]PB[Willowdale]PW[san-dan]BR[2k]WR[1d]TM[1200]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Japanese]AB[pp]PL[B]AB[cp][lo][pn][pm][kk][lk][mk][nk][pk][qk][oj][li][oi][pi][lh][ph][lg][pg][jf][kf][mf][pf][ge][he][ie][je][le][oe][pe][hd][jd][od][kc][lc][oc][qc][rc][ob][pb]AW[op][on][om][ol][ok][jj][kj][lj][mj][nj][pj][qj][qi][mh][nh][qh][kg][mg][qg][nf][qf][ke][ne][qe][dd][fd][gd][id][ld][md][pd][qd][hc][ic][mc][pc][mb][qb][rb](;B[np]C[Incorrect - This was the actual move played in the game!])(;B[oo]C[CORRECT];W[no]C[CORRECT];B[po]C[CORRECT];W[mm]C[CORRECT];B[lm]C[CORRECT])(;B[qa]C[CORRECT];W[rd]C[CORRECT]))",
          category: "other",
          move_number: 144,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H2\\":[\\"H2\\",\\"C12\\",\\"M1\\",\\"J1\\"],\\"E15\\":[\\"E15\\",\\"F15\\",\\"F14\\"],\\"P2\\":[\\"P2\\",\\"E3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602869/t5ubnnjmil3kb3djylso.png",
          suspended: false,
          createdAt: "2023-12-15T01:14:30.193000+00:00",
          updatedAt: "2023-12-15T01:14:30.193000+00:00",
        },
        {
          sgf_id: 73,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-29]PC[OGS: https://online-go.com/game/59325731]GN[\u89aa\u7766\u6226]PB[morikon25]PW[\u611b\u570d\u68cb]BR[2k]WR[2k]TM[300]OT[5x30 byo-yomi]RE[B+26.5]SZ[19]KM[6.5]RU[Japanese]PL[W]AB[cr][dr][cq][oq][cp][pp][qp][bo][jo][mo][bn][on][ql][rl][qk][pj][pi][ph][qh][qd][oc]AW[er][dq][jq][mq][dp][hp][np][op][co][cn][cm][rk][qj][rj][di][qi][rh][qg][rf][dc](;W[oo]C[Incorrect - This was the actual move played in the game!])(;W[or]C[CORRECT];B[de]C[CORRECT];W[ce]C[CORRECT])(;W[de]C[CORRECT];B[eq]C[CORRECT];W[ep]C[CORRECT];B[fq]C[CORRECT];W[fp]C[CORRECT];B[gq]C[CORRECT];W[hq]C[CORRECT];B[ic]C[CORRECT])(;W[nn]C[CORRECT];B[eq]C[CORRECT];W[ep]C[CORRECT];B[fq]C[CORRECT];W[fp]C[CORRECT];B[gq]C[CORRECT];W[hq]C[CORRECT])(;W[nd]C[CORRECT];B[nc]C[CORRECT];W[de]C[CORRECT])(;W[id]C[CORRECT];B[eq]C[CORRECT];W[ep]C[CORRECT];B[fq]C[CORRECT];W[fp]C[CORRECT])(;W[df]C[CORRECT])(;W[hd]C[CORRECT];B[eq]C[CORRECT];W[ep]C[CORRECT];B[fq]C[CORRECT];W[fp]C[CORRECT];B[gq]C[CORRECT];W[hq]C[CORRECT])(;W[nc]C[CORRECT];B[nd]C[CORRECT];W[mc]C[CORRECT]))",
          category: "other",
          move_number: 50,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"S5\\":[\\"S5\\",\\"R7\\",\\"Q3\\",\\"R3\\",\\"T6\\",\\"S7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702602932/ysvcg8tfkzfffndghexe.png",
          suspended: false,
          createdAt: "2023-12-15T01:15:32.471000+00:00",
          updatedAt: "2023-12-15T01:15:32.471000+00:00",
        },
        {
          sgf_id: 73,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-11-29]PC[OGS: https://online-go.com/game/59325731]GN[\u89aa\u7766\u6226]PB[morikon25]PW[\u611b\u570d\u68cb]BR[2k]WR[2k]TM[300]OT[5x30 byo-yomi]RE[B+26.5]SZ[19]KM[6.5]RU[Japanese]PL[B]AB[cr][dr][cq][oq][cp][pp][qp][bo][jo][mo][qo][bn][nn][on][ql][rl][qk][pj][pi][ph][qh][qd][oc]AW[er][dq][jq][mq][dp][hp][np][op][co][oo][po][cn][pn][cm][rk][qj][rj][di][qi][rh][qg][rf][dc](;B[pm]C[Incorrect - This was the actual move played in the game!])(;B[dd]C[CORRECT];W[cd]C[CORRECT];B[ec]C[CORRECT];W[ed]C[CORRECT];B[de]C[CORRECT];W[fc]C[CORRECT];B[eb]C[CORRECT])(;B[eq]C[CORRECT];W[qn]C[CORRECT];B[rn]C[CORRECT];W[ro]C[CORRECT];B[rp]C[CORRECT];W[rm]C[CORRECT])(;B[de]C[CORRECT];W[qn]C[CORRECT];B[rn]C[CORRECT];W[ro]C[CORRECT];B[rm]C[CORRECT])(;B[iq]C[CORRECT];W[jp]C[CORRECT];B[ip]C[CORRECT];W[io]C[CORRECT])(;B[pf]C[CORRECT];W[qn]C[CORRECT];B[rn]C[CORRECT];W[ro]C[CORRECT])(;B[kq]C[CORRECT];W[kp]C[CORRECT];B[jp]C[CORRECT])(;B[lp]C[CORRECT];W[lq]C[CORRECT])(;B[or]C[CORRECT])(;B[nr]C[CORRECT])(;B[fq]C[CORRECT]))",
          category: "other",
          move_number: 100,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"H14\\":[\\"H14\\",\\"J13\\",\\"G16\\",\\"G15\\",\\"H15\\",\\"H13\\"],\\"G16\\":[\\"G16\\",\\"G15\\",\\"H14\\",\\"J13\\",\\"H15\\",\\"H13\\"],\\"J13\\":[\\"J13\\",\\"J12\\",\\"H14\\",\\"J14\\",\\"H13\\",\\"G16\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702603008/ejsafukmptylowqfpe8z.png",
          suspended: false,
          createdAt: "2023-12-15T01:16:48.343000+00:00",
          updatedAt: "2023-12-15T01:16:48.343000+00:00",
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][np][qp][oo][ln][mn][nn][qm][qk][mj][fi][ih][lh][nh][eg][fg][kg][mg][ng][qg][df][if][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][ij][pj][qj][di][ki][mh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[qh]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT] ;B[ll]C[CORRECT] ;W[kl]C[CORRECT]))",
          category: "Judgment",
          move_number: 98,
          difficulty: 2114,
          times_solved: 1,
          description: "Judgment puzzle from Xie Ke vs Shin Jinseo game",
          vote_count: 83,
          board_size: 19,
          solution_coordinates:
            '{"K13":["K13","K12","L12","M13","K14","N9","N8","M8","L8"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697829849/bxpp8cg9vuou85tr436w.png",
          suspended: false,
          createdAt: "2023-12-08T01:16:00.203000+00:00",
          updatedAt: "2023-12-18T14:33:18.979000+00:00",
        },
        {
          sgf_id: 13,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-05]PC[OGS: https://online-go.com/game/56820296]GN[Vriendschappelijke Wedstrijd]PB[goloveye2]PW[erikdeviking]BR[6k]WR[6k]TM[150]OT[5x60 byo-yomi]RE[B+2.5]SZ[13]KM[5.5]RU[Japanese]PL[W]AB[jl][gk][jk][gj][hj][ij][fi][hh][jh][kh][cg][gg][hg][ig][kg][lg][bf][cf][ef][ff][hf][de][he][ie][dd][fd][gd][jd][kd][fc][hc][kc][db][eb][lb][mb]AW[kl][ek][kk][cj][jj][gi][hi][ii][ji][ki][li][bh][ch][dh][gh][ih][lh][bg][dg][eg][fg][df][hd][id][gc][ic][jc][fb][gb][ib][jb][kb][ea][ga][ja][la](;W[fj]C[Incorrect - This was the actual move played in the game!])(;W[fl]C[CORRECT];B[ag]C[CORRECT];W[ah]C[CORRECT];B[af]C[CORRECT])(;W[hl]C[CORRECT];B[ag]C[CORRECT];W[ah]C[CORRECT];B[af]C[CORRECT])(;W[el]C[CORRECT];B[ag]C[CORRECT];W[ah]C[CORRECT])(;W[il]C[CORRECT];B[af]C[CORRECT];W[da]C[CORRECT])(;W[jm]C[CORRECT];B[af]C[CORRECT];W[mg]C[CORRECT])(;W[gl]C[CORRECT];B[fl]C[CORRECT])(;W[dl]C[CORRECT];B[ag]C[CORRECT]))",
          category: "Other",
          move_number: 76,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 13,
          solution_coordinates:
            '"{\\"F2\\":[\\"F2\\",\\"A7\\",\\"A6\\",\\"A8\\"],\\"H2\\":[\\"H2\\",\\"A7\\",\\"A6\\",\\"A8\\"],\\"E2\\":[\\"E2\\",\\"A7\\",\\"A6\\"],\\"J2\\":[\\"J2\\",\\"A8\\",\\"D13\\"],\\"K1\\":[\\"K1\\",\\"A8\\",\\"N7\\"],\\"G2\\":[\\"G2\\",\\"F2\\"],\\"D2\\":[\\"D2\\",\\"A7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1703098254/gzozrbw0woust4nln7ib.png",
          suspended: false,
          createdAt: "2023-12-20T18:50:55.004000+00:00",
          updatedAt: "2023-12-20T18:50:55.004000+00:00",
        },
        {
          sgf_id: 14,
          sgf_data:
            "(;EV[9th Kuksu Mountains Tournament, round 2]DT[2023-07-26]PB[Shin Jinseo]BR[9p]PW[Kim Myounghoon]WR[9p]KM[6.5]RE[B+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[br][cr][or][bq][eq][oq][fp][gp][kp][op][go][lo][mo][po][gn][kn][nn][pn][qn][mm][nm][om][qm][ll][lk][kj][li][pi][oh][ng][pg][rg][of][qf][ce][ke][le][qe][bd][dd][ed][fd][hd][jd][ld][nd][od][qd][dc][ec][fc][gc][hc][jc][kc][nc][pc][eb][ib][jb][lb][ob][qb][rb][ia][ka]AW[nr][cq][hq][nq][pq][cp][hp][np][pp][qp][do][fo][ho][jo][ko][no][oo][qo][ro][fn][ln][mn][on][jm][km][lm][pm][kl][kk][dj][qg][cf][if][jf][mf][pf][be][he][ie][je][me][ne][oe][pe][id][md][pd][rd][ic][lc][mc][qc][rc][db][fb][gb][hb][mb][ea][ha][la](;W[rf]C[Incorrect - This was the actual move played in the game!])(;W[qh]C[CORRECT];B[re]C[CORRECT];W[kb]C[CORRECT];B[fa]C[CORRECT];W[pl]C[CORRECT];B[ql]C[CORRECT];W[pk]C[CORRECT];B[qk]C[CORRECT];W[ml]C[CORRECT];B[kf]C[CORRECT]))",
          category: "Other",
          move_number: 144,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"R12\\":[\\"R12\\",\\"S15\\",\\"L18\\",\\"F19\\",\\"Q8\\",\\"R8\\",\\"Q9\\",\\"R9\\",\\"N8\\",\\"L14\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1703186276/byldfw7p1mkkjyiqcnqx.png",
          suspended: false,
          createdAt: "2023-12-21T19:17:57.395000+00:00",
          updatedAt: "2023-12-21T19:17:57.395000+00:00",
        },
        {
          sgf_id: 15,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-09-03]PC[OGS: https://online-go.com/game/56766164]GN[play for fun]PB[iself101]PW[erikdeviking]BR[7k]WR[6k]TM[0]OT[15 simple]RE[B+16.5]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[gi][dh][gh][ag][dg][eg][fg][gg][bf][ff][gf][ae][be][ce][dd][fd][bc][cc][dc][fc][gc][bb][eb][fb][da]AW[ai][bi][ci][di][ei][fi][ch][eh][fh][bg][cg][cf][df][ef][de][ee][fe][ge][ad][bd][ed][gd][ec][hc][cb][db][ba](;B[hb]C[Incorrect - This was the actual move played in the game!])(;B[he]C[CORRECT];W[hd]C[CORRECT];B[hf]C[CORRECT];W[hb]C[CORRECT];B[ah]C[CORRECT];W[hh]C[CORRECT]))",
          category: "Other",
          move_number: 25,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"E6\\":[\\"E6\\",\\"F7\\",\\"F6\\",\\"G6\\",\\"D6\\",\\"E5\\",\\"G8\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1703187468/sp9o6yamhrssjsrwvnec.png",
          suspended: false,
          createdAt: "2023-12-21T19:37:48.737000+00:00",
          updatedAt: "2023-12-21T19:37:48.737000+00:00",
        },
        {
          sgf_id: 114,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2020-07-27]PC[OGS: https://online-go.com/game/25711635]GN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]PB[poonperm8025]PW[BorisD]BR[6k]WR[5k]TM[60]OT[10 fischer]RE[W+R]SZ[9]KM[5.5]RU[Japanese]PL[B]AB[fi][ah][bh][fh][gh][hh][ih][dg][eg][fg][ig][bf][cf][hf][if][be][bd][cd][fd][bc][dc][ec][fc][eb][hb][ea][fa]AW[bi][ei][hi][ch][dh][ag][bg][cg][gg][hg][df][ef][ff][gf][ce][ge][he][ie][dd][ed][gd][cc][gc][cb][fb][gb][ga](;B[de]C[Incorrect - This was the actual move played in the game!])(;B[ca]C[CORRECT];W[ba]C[CORRECT];B[db]C[CORRECT];W[da]C[CORRECT];B[di]C[CORRECT]))",
          category: "other",
          move_number: 55,
          difficulty: 1498,
          times_solved: 1,
          description: "",
          vote_count: 0,
          board_size: 9,
          solution_coordinates:
            '"{\\"C9\\":[\\"C9\\",\\"B9\\",\\"D8\\",\\"D9\\",\\"D1\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702450962/ndv45hajjunhf8ptaura.png",
          suspended: false,
          createdAt: "2023-12-13T07:02:42.573000+00:00",
          updatedAt: "2023-12-21T19:43:22.679000+00:00",
        },
        {
          sgf_id: 191,
          sgf_data:
            "(;GM[1]FF[4]SZ[19]GN[]DT[2023-12-04]PB[arbyter73]PW[\u96e8\u540e\u5f69\u867905]BR[7\u7ea7]WR[6\u7ea7]KM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]AP[foxwq]RE[W+R]TM[300]CA[UTF-8]PL[B]AB[oq][qh][re][ed][jd][qd][rd][ec][mc][rc]AW[dp][cg][cd][pd][dc][oc][qc][sc][qb][rb](;B[pe]C[Incorrect - This was the actual move played in the game!])(;B[qp]C[CORRECT];W[gq]C[CORRECT];B[cn]C[CORRECT])(;B[po]C[CORRECT];W[gq]C[CORRECT];B[cn]C[CORRECT])(;B[df]C[CORRECT];W[cf]C[CORRECT];B[qp]C[CORRECT];W[eh]C[CORRECT];B[de]C[CORRECT];W[cn]C[CORRECT])(;B[ce]C[CORRECT];W[be]C[CORRECT];B[qp]C[CORRECT];W[hd]C[CORRECT])(;B[dg]C[CORRECT];W[df]C[CORRECT];B[de]C[CORRECT];W[cf]C[CORRECT])(;B[pp]C[CORRECT];W[qn]C[CORRECT];B[qk]C[CORRECT])(;B[qn]C[CORRECT];W[po]C[CORRECT];B[pn]C[CORRECT]))",
          category: "Other",
          move_number: 103,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"M12\\":[\\"M12\\",\\"M2\\",\\"L2\\",\\"O9\\",\\"N7\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1703188053/c71mt1jvhvqbgoxy9ez6.png",
          suspended: false,
          createdAt: "2023-12-21T19:47:34.161000+00:00",
          updatedAt: "2023-12-21T19:47:34.161000+00:00",
        },
        {
          sgf_id: 192,
          sgf_data:
            "(;FF[4]CA[UTF-8]GM[1]DT[2023-12-12]PC[OGS: https://online-go.com/game/59694877]GN[Friendly Match]PB[PsychoInferno]PW[HarpSeal]BR[5k]WR[4k]TM[600]OT[5x30 byo-yomi]RE[W+R]SZ[19]KM[7.5]RU[Chinese]PL[B]AB[bo][eo][cn][cm][dm][em][bl][el][ck][dk][ej][ei][eh][ff][fe][cd][ed][id][pd][cc][dc]AW[fq][bp][dp][qp][do][en][fn][fm][fl][bk][ek][fk][bj][cj][dj][dh][dg][ce][de][ee][dd](;B[co]C[Incorrect - This was the actual move played in the game!])(;B[pp]C[CORRECT];W[qq]C[CORRECT];B[pn]C[CORRECT];W[jc]C[CORRECT])(;B[pq]C[CORRECT];W[qq]C[CORRECT];B[mq]C[CORRECT];W[jc]C[CORRECT])(;B[oq]C[CORRECT];W[mq]C[CORRECT])(;B[mq]C[CORRECT];W[jc]C[CORRECT];B[ic]C[CORRECT])(;B[nq]C[CORRECT];W[lq]C[CORRECT])(;B[np]C[CORRECT];W[lp]C[CORRECT])(;B[lq]C[CORRECT]))",
          category: "Other",
          move_number: 43,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"Q4\\":[\\"Q4\\",\\"R3\\",\\"Q6\\",\\"K17\\"],\\"Q3\\":[\\"Q3\\",\\"R3\\",\\"N3\\",\\"K17\\"],\\"P3\\":[\\"P3\\",\\"N3\\"],\\"N3\\":[\\"N3\\",\\"K17\\",\\"J17\\"],\\"O3\\":[\\"O3\\",\\"M3\\"],\\"O4\\":[\\"O4\\",\\"M4\\"],\\"M3\\":[\\"M3\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1703188402/ocjrfhn23drrwmyworou.png",
          suspended: false,
          createdAt: "2023-12-21T19:53:23.330000+00:00",
          updatedAt: "2023-12-21T19:53:23.330000+00:00",
        },
        {
          sgf_id: 196,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[\u9752\u74e6\u697c\u9601]PB[anning97]DT[2023-07-09]RE[B+Resign]PL[B]AB[mr][mq][oq][pq][lp][lo][ql][bg][af][cf][be][cd][qd][cc][nc]AW[kq][lq][rq][dp][mp][np][op][qo][ce][de][bd][dd][bc][dc](;B[qr]C[Incorrect - This was the actual move played in the game!])(;B[jp]C[CORRECT];W[jq]C[CORRECT];B[iq]C[CORRECT];W[ir]C[CORRECT];B[hq]C[CORRECT];W[hr]C[CORRECT])(;B[cb]C[CORRECT];W[bb]C[CORRECT];B[jp]C[CORRECT];W[jq]C[CORRECT];B[iq]C[CORRECT];W[ir]C[CORRECT])(;B[qq]C[CORRECT];W[jp]C[CORRECT];B[po]C[CORRECT];W[pn]C[CORRECT];B[pp]C[CORRECT];W[on]C[CORRECT])(;B[nn]C[CORRECT];W[on]C[CORRECT];B[jp]C[CORRECT])(;B[rr]C[CORRECT];W[jp]C[CORRECT];B[nn]C[CORRECT];W[on]C[CORRECT])(;B[on]C[CORRECT];W[pp]C[CORRECT];B[qq]C[CORRECT])(;B[mn]C[CORRECT];W[pp]C[CORRECT];B[rr]C[CORRECT])(;B[ip]C[CORRECT];W[jp]C[CORRECT]))",
          category: "Other",
          move_number: 35,
          difficulty: 1500,
          times_solved: 0,
          description: "",
          vote_count: 0,
          board_size: 19,
          solution_coordinates:
            '"{\\"J4\\":[\\"J4\\",\\"K4\\",\\"K5\\",\\"J3\\",\\"H3\\",\\"J5\\",\\"H4\\",\\"L5\\",\\"K6\\",\\"M6\\"]}"',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1703359260/tng8arsnuabscboqasia.png",
          suspended: false,
          createdAt: "2023-12-23T19:21:00.740000+00:00",
          updatedAt: "2023-12-23T19:21:00.740000+00:00",
        },
        {
          sgf_id: 2,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[B]AB[fr][gr][cq][dq][eq][pq][np][fi][eg][fg][df][if][ce][de][bd][ed][od][qd][bc][cc][dc][ec][oc][fb]AW[fq][gq][hq][cp][dp][ep][qo][dk][di][cg][dg][ef][be][ee][fe][ne][fd][jd][nd][fc][nc][gb](;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))",
          category: "Judgment",
          move_number: 49,
          difficulty: 1727,
          times_solved: 1,
          description: "Shin Jinseo game judgment problem",
          vote_count: 20,
          board_size: 19,
          solution_coordinates:
            '{"F8":["F8","H11","E10"],"J11":["J11","R15","P15","S16"],"J12":["J12","R15","P15","S16"],"J10":["J10","R15","P15"],"K11":["K11","G10","F10"],"L15":["L15","L16","F8","R15"],"G8":["G8","R15","P15"],"E10":["E10","D10","J11","R15"],"H17":["H17","H18","J17"],"F9":["F9","R15"]}',
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697828883/w1sonvk5gtq6stomdojv.png",
          suspended: false,
          createdAt: "2023-12-08T01:16:00.203000+00:00",
          updatedAt: "2023-12-23T19:21:21.323000+00:00",
        },
      ],
      // [
      //   {
      //     sgf_id: 2,
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[B]AB[fr][gr][cq][dq][eq][pq][np][fi][eg][fg][df][if][ce][de][bd][ed][od][qd][bc][cc][dc][ec][oc][fb]AW[fq][gq][hq][cp][dp][ep][qo][dk][di][cg][dg][ef][be][ee][fe][ne][fd][jd][nd][fc][nc][gb](;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))",
      //     category: "Judgment",
      //     move_number: 49,
      //     difficulty: 1700,
      //     description: "Shin Jinseo game judgment problem",
      //     vote_count: 20,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"F8":["F8","H11","E10"],"J11":["J11","R15","P15","S16"],"J12":["J12","R15","P15","S16"],"J10":["J10","R15","P15"],"K11":["K11","G10","F10"],"L15":["L15","L16","F8","R15"],"G8":["G8","R15","P15"],"E10":["E10","D10","J11","R15"],"H17":["H17","H18","J17"],"F9":["F9","R15"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697828883/w1sonvk5gtq6stomdojv.png",
      //     suspended: false,
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      //   {
      //     sgf_id: 2,
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][np][qp][oo][ln][mn][nn][qm][qk][mj][fi][ih][lh][nh][eg][fg][kg][mg][ng][qg][df][if][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][ij][pj][qj][di][ki][mh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[qh]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT] ;B[ll]C[CORRECT] ;W[kl]C[CORRECT]))",
      //     category: "Judgment",
      //     move_number: 98,
      //     difficulty: 2103,
      //     description: "Judgment puzzle from Xie Ke vs Shin Jinseo game",
      //     vote_count: 83,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"K13":["K13","K12","L12","M13","K14","N9","N8","M8","L8"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697829849/bxpp8cg9vuou85tr436w.png",
      //     suspended: false,
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      //   {
      //     sgf_id: 2,
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][np][qp][oo][ln][mn][nn][qm][qk][mj][fi][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][ij][pj][qj][di][ki][mh][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[rk]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT]))",
      //     category: "Judgment",
      //     move_number: 100,
      //     difficulty: 2065,
      //     description: "Xie Ke vs Shin jinseo judgment puzzle",
      //     vote_count: 9,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"K13":["K13","K12","L12","M13","K14","N9","N8"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1698040034/mjhfuhimihltpiphwzfw.png",
      //     suspended: false,
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      //   {
      //     sgf_id: 2,
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][kp][np][qp][oo][ln][mn][nn][qm][ql][qk][kj][mj][fi][li][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][jf][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][mk][rk][ij][lj][nj][pj][qj][di][ji][ki][mh][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[op]C[Incorrect - This was the actual move played in the game!]) (;W[pp]C[CORRECT] ;B[qq]C[CORRECT] ;W[pn]C[CORRECT] ;B[pm]C[CORRECT] ;W[on]C[CORRECT]) (;W[ph]C[CORRECT] ;B[rf]C[CORRECT] ;W[gf]C[CORRECT] ;B[gg]C[CORRECT] ;W[jh]C[CORRECT]))",
      //     category: "Reading",
      //     move_number: 110,
      //     difficulty: 1803,
      //     description: "Reading puzzle from Shin Jinseo vs Xie Ke game",
      //     vote_count: 9,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"Q4":["Q4","R3","Q6","Q7","P6"],"Q12":["Q12","S14","G14","G13","K12"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841598/umwvejcuf3syhi3y3kvo.png",
      //     suspended: false,
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      //   {
      //     sgf_id: 2,
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][nq][pq][rq][kp][np][qp][oo][po][ln][mn][nn][om][qm][ql][qk][kj][mj][fi][li][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][jf][nf][ce][de][ge][oe][re][bd][ed][hd][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][kq][lq][cp][dp][ep][mp][op][rp][mo][no][qo][ol][dk][gk][lk][mk][rk][ij][lj][nj][pj][qj][di][ji][ki][mh][ph][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][hc][nc][qc][gb](;W[nb]C[Incorrect - This was the actual move played in the game!]) (;W[nr]C[CORRECT] ;B[or]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[bp]C[CORRECT] ;B[hr]C[CORRECT] ;W[iq]C[CORRECT] ;B[rf]C[CORRECT] ;W[br]C[CORRECT]) (;W[bq]C[CORRECT] ;B[br]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[ob]C[CORRECT] ;B[pb]C[CORRECT] ;W[bp]C[CORRECT] ;B[bq]C[CORRECT]))",
      //     category: "Judgment",
      //     move_number: 120,
      //     difficulty: 1750,
      //     description: "Judgment puzzle from Shin Jinseo vs Xie Ke game",
      //     vote_count: 13,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"O2":["O2","P2","B4","H2"],"B4":["B4","H2","J3","S14","B2"],"B3":["B3","B2","B4","H2"],"P18":["P18","Q18","B4","B3"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841593/eg1aqudsx4jwozkwmukc.png",
      //     suspended: false,
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      //   {
      //     sgf_id: 24,
      //     sgf_data:
      //       "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00]PL[W]AB[cr][dr][or][pr][cq][fq][lq][mq][pq][cp][kp][mp][qp][cn][pn][dm][em][ck][cj][ci][dh][dg][cf][de][pd]AW[er][qr][dq][eq][nq][qq][dp][fp][jp][lp][op][pp][do][lo][cl][dl][dk][dj][gj][di][ce][cd][dc][fc](;W[nr]C[Incorrect - This was the actual move played in the game!]) (;W[qo]C[CORRECT] ;B[ko]C[CORRECT] ;W[nr]C[CORRECT] ;B[hp]C[CORRECT] ;W[hq]C[CORRECT]))",
      //     category: "Direction",
      //     move_number: 50,
      //     difficulty: 1550,
      //     description: "Other",
      //     vote_count: 1,
      //     board_size: 19,
      //     solution_coordinates: '{"R5":["R5","L5","O2","H4","H3"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364001/ozlrq1eoy4zwltdpwzsn.png",
      //     suspended: false,
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      //   // Placeholder for more puzzles from Dave game (sgf_id of 24)
      //   // {
      //   //   sgf_id: 24,
      //   //   sgf_data: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or] (;W[nr]C[Incorrect - This was the actual move played in the game!]) (;W[qo]C[CORRECT] ;B[ko]C[CORRECT] ;W[nr]C[CORRECT] ;B[hp]C[CORRECT] ;W[hq]C[CORRECT]))",
      //   //   category: "Direction",
      //   //   move_number: 50,
      //   //   difficulty: 1550,
      //   //   description:
      //   //     "Other",
      //   //   vote_count: 1,
      //   //   board_size: 19,
      //   //   solution_coordinates: "{\"R5\":[\"R5\",\"L5\",\"O2\",\"H4\",\"H3\"]}",
      //   //   thumbnail:
      //   //   "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700364001/ozlrq1eoy4zwltdpwzsn.png",
      //   //   suspended: false,
      //   //   createdAt: new Date(),
      //   //   updatedAt: new Date(),
      //   // },
      //   {
      //     sgf_data:
      //       "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[19]KM[6.50] PL[W]AB[qq][mp][qp][qo][qn][df][dd][pd][cc][bb][db]AW[pq][dp][pp][po][pn][pl][dc][ec][fc][cb](;W[cn]C[Incorrect - This was the actual move played in the game!]) (;W[cd]C[CORRECT] ;B[bc]C[CORRECT] ;W[de]C[CORRECT] ;B[ed]C[CORRECT] ;W[ee]C[CORRECT]))",
      //     category: "Ladder/Net",
      //     move_number: 22,
      //     difficulty: 1250,
      //     description: "Ladder problem",
      //     vote_count: 150,
      //     board_size: 19,
      //     solution_coordinates: '{"C16":["C16","B17","D15","E16","E15"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700435503/xiiysfegzhau9rbm9qdd.png",
      //     suspended: false,
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      //   {
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][np][qp][oo][ln][mn][nn][qm][qk][mj][fi][ih][lh][nh][eg][fg][kg][mg][ng][qg][df][if][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][ij][pj][qj][di][ki][mh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[qh]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT] ;B[ll]C[CORRECT] ;W[kl]C[CORRECT]))",
      //     category: "Judgment",
      //     move_number: 98,
      //     difficulty: 2103,
      //     times_solved: 0,
      //     description: "Judgment puzzle from Xie Ke vs Shin Jinseo game",
      //     vote_count: 83,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"K13":["K13","K12","L12","M13","K14","N9","N8","M8","L8"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697829849/bxpp8cg9vuou85tr436w.png",
      //     suspended: false,
      //     createdAt: "2023-11-04T22:07:31.181000+00:00",
      //     updatedAt: "2023-11-04T22:07:31.181000+00:00",
      //   },
      //   {
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][np][qp][oo][ln][mn][nn][qm][qk][mj][fi][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][ij][pj][qj][di][ki][mh][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[rk]C[Incorrect - This was the actual move played in the game!]) (;W[jg]C[CORRECT] ;B[jh]C[CORRECT] ;W[kh]C[CORRECT] ;B[lg]C[CORRECT] ;W[jf]C[CORRECT] ;B[mk]C[CORRECT] ;W[ml]C[CORRECT]))",
      //     category: "Judgment",
      //     move_number: 100,
      //     difficulty: 2065,
      //     times_solved: 0,
      //     description: "Xie Ke vs Shin jinseo judgment puzzle",
      //     vote_count: 9,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"K13":["K13","K12","L12","M13","K14","N9","N8"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1698040034/mjhfuhimihltpiphwzfw.png",
      //     suspended: false,
      //     createdAt: "2023-11-04T22:07:31.181000+00:00",
      //     updatedAt: "2023-11-04T22:07:31.181000+00:00",
      //   },
      //   {
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][pq][rq][kp][np][qp][oo][ln][mn][nn][qm][ql][qk][kj][mj][fi][li][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][jf][nf][ce][de][oe][re][bd][ed][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][cp][dp][ep][mp][rp][mo][no][qo][ol][dk][gk][lk][mk][rk][ij][lj][nj][pj][qj][di][ji][ki][mh][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][nc][qc][gb](;W[op]C[Incorrect - This was the actual move played in the game!]) (;W[pp]C[CORRECT] ;B[qq]C[CORRECT] ;W[pn]C[CORRECT] ;B[pm]C[CORRECT] ;W[on]C[CORRECT]) (;W[ph]C[CORRECT] ;B[rf]C[CORRECT] ;W[gf]C[CORRECT] ;B[gg]C[CORRECT] ;W[jh]C[CORRECT]))",
      //     category: "Reading",
      //     move_number: 110,
      //     difficulty: 1803,
      //     times_solved: 0,
      //     description: "Reading puzzle from Shin Jinseo vs Xie Ke game",
      //     vote_count: 9,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"Q4":["Q4","R3","Q6","Q7","P6"],"Q12":["Q12","S14","G14","G13","K12"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841598/umwvejcuf3syhi3y3kvo.png",
      //     suspended: false,
      //     createdAt: "2023-11-04T22:07:31.181000+00:00",
      //     updatedAt: "2023-11-04T22:07:31.181000+00:00",
      //   },
      //   {
      //     sgf_data:
      //       "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8]PL[W]AB[fr][gr][cq][dq][eq][nq][pq][rq][kp][np][qp][oo][po][ln][mn][nn][om][qm][ql][qk][kj][mj][fi][li][ih][lh][nh][eg][fg][kg][mg][ng][qg][rg][df][if][jf][nf][ce][de][ge][oe][re][bd][ed][hd][ld][od][qd][rd][bc][cc][dc][ec][oc][pc][fb][qb]AW[fq][gq][hq][kq][lq][cp][dp][ep][mp][op][rp][mo][no][qo][ol][dk][gk][lk][mk][rk][ij][lj][nj][pj][qj][di][ji][ki][mh][ph][qh][cg][dg][pg][ef][kf][mf][of][qf][be][ee][fe][je][le][ne][pe][qe][fd][jd][kd][nd][pd][fc][hc][nc][qc][gb](;W[nb]C[Incorrect - This was the actual move played in the game!]) (;W[nr]C[CORRECT] ;B[or]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[bp]C[CORRECT] ;B[hr]C[CORRECT] ;W[iq]C[CORRECT] ;B[rf]C[CORRECT] ;W[br]C[CORRECT]) (;W[bq]C[CORRECT] ;B[br]C[CORRECT] ;W[bp]C[CORRECT] ;B[hr]C[CORRECT]) (;W[ob]C[CORRECT] ;B[pb]C[CORRECT] ;W[bp]C[CORRECT] ;B[bq]C[CORRECT]))",
      //     category: "Judgment",
      //     move_number: 120,
      //     difficulty: 1750,
      //     times_solved: 0,
      //     description: "Judgment puzzle from Shin Jinseo vs Xie Ke game",
      //     vote_count: 13,
      //     board_size: 19,
      //     solution_coordinates:
      //       '{"O2":["O2","P2","B4","H2"],"B4":["B4","H2","J3","S14","B2"],"B3":["B3","B2","B4","H2"],"P18":["P18","Q18","B4","B3"]}',
      //     thumbnail:
      //       "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697841593/eg1aqudsx4jwozkwmukc.png",
      //     suspended: false,
      //     createdAt: "2023-11-04T22:07:31.181000+00:00",
      //     updatedAt: "2023-11-04T22:07:31.181000+00:00",
      //   },
      // ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Puzzles";
    return queryInterface.bulkDelete(options, null, {});
  },
};
