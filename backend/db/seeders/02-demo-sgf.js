"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // put tableName here inside up function instead of outside
    options.tableName = "Sgfs";
    return queryInterface.bulkInsert(
      options,
      [
        {
          user_id: 1,
          sgf_data: `(;EV[46th Korean Myeongin, round 1]
            DT[2023-08-30]
            PB[Shin Jinseo]BR[9p]
            PW[Han Sangcho]WR[5p]
            KM[6.5]RE[B+R]
            SO[Go4Go.net]
            ;B[qd];W[dp];B[cd];W[qp];B[cq];W[cp];B[dq];W[fq];B[fr];W[pd];B[pc];W[qe];B[od];W[pe];B[qc];W[gr];B[er];W[gp];B[ep];W[eq];B[bp];W[bo];B[bq];W[cn];B[oq];W[lq];B[qi];W[ph];B[pi];W[oi];B[oj];W[qh];B[po];W[qo];B[pn];W[qm];B[pm];W[ql];B[pk];W[ni];B[nj];W[pq];B[mi];W[ng];B[mf];W[ec];B[oe];W[of];B[nf];W[og];B[mg];W[ri];B[hc];W[de];B[ce];W[df];B[bg];W[he];B[ie];W[hd];B[id];W[ic];B[jc];W[ib];B[jb];W[hb];B[gc];W[gb];B[hf];W[gd];B[pr];W[qr];B[eo];W[dn];B[jq];W[fn];B[hq];W[gq];B[pp];W[qq];B[jo];W[if];B[jf];W[ig];B[nr];W[ch];B[il];W[bh];B[cg];W[dg];B[db];W[in];B[eb];W[fb];B[jn];W[im];B[jm];W[hl];B[ik];W[hk];B[hj];W[ij];B[jj];W[ii];B[ih];W[ji];B[jg];W[kj];B[jl];W[hi];B[hg];W[ps];B[eh];W[fh];B[en];W[em];B[dm];W[dl];B[fm];W[cm];B[gn];W[fl];B[gh];W[gm];B[fi];W[gi];B[fg];W[mr];B[dh];W[mo];B[mm];W[ns];B[dd];W[ed];B[fj];W[gj];B[fe];W[ia];B[ck];W[qk];B[re];W[rf];B[rd];W[lk];B[mk];W[ja];B[lb];W[la];B[ma];W[ka];B[mc];W[bk];B[bj];W[bl];B[dj];W[sf];B[np];W[ln];B[lm];W[no];B[or];W[os];B[ho];W[li];B[fo];W[go];B[hn];W[hp];B[ip];W[hr];B[fm];W[hm];B[io];W[nm];B[nl];W[nn];B[lo];W[ko];B[pl];W[ll];B[ml];W[lp];B[kl];W[fn];B[kk];W[lj];B[lh])
            `,
          sgf_name: "Shin Jinseo vs. Han Sangcho",
          black_player: "Shin Jinseo",
          white_player: "Han Sangcho",
          black_rank: "9p",
          white_rank: "5p",
          komi: 6.5,
          game_date: "2023-08-30 00:00:00.000",
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693875769/Shin-Jinseo1_thumbnail_zreznc.png",
          result: "B+R",
        },
        {
          user_id: 1,
          sgf_data: `(;EV[46th Korean Myeongin, round 1]
            DT[2023-08-30]
            PB[Shin Jinseo]BR[9p]
            PW[Han Sangcho]WR[5p]
            KM[6.5]RE[B+R]
            SO[Go4Go.net]
            ;B[qd];W[dp];B[cd];W[qp];B[cq];W[cp];B[dq];W[fq];B[fr];W[pd];B[pc];W[qe];B[od];W[pe];B[qc];W[gr];B[er];W[gp];B[ep];W[eq];B[bp];W[bo];B[bq];W[cn];B[oq];W[lq];B[qi];W[ph];B[pi];W[oi];B[oj];W[qh];B[po];W[qo];B[pn];W[qm];B[pm];W[ql];B[pk];W[ni];B[nj];W[pq];B[mi];W[ng];B[mf];W[ec];B[oe];W[of];B[nf];W[og];B[mg];W[ri];B[hc];W[de];B[ce];W[df];B[bg];W[he];B[ie];W[hd];B[id];W[ic];B[jc];W[ib];B[jb];W[hb];B[gc];W[gb];B[hf];W[gd];B[pr];W[qr];B[eo];W[dn];B[jq];W[fn];B[hq];W[gq];B[pp];W[qq];B[jo];W[if];B[jf];W[ig];B[nr];W[ch];B[il];W[bh];B[cg];W[dg];B[db];W[in];B[eb];W[fb];B[jn];W[im];B[jm];W[hl];B[ik];W[hk];B[hj];W[ij];B[jj];W[ii];B[ih];W[ji];B[jg];W[kj];B[jl];W[hi];B[hg];W[ps];B[eh];W[fh];B[en];W[em];B[dm];W[dl];B[fm];W[cm];B[gn];W[fl];B[gh];W[gm];B[fi];W[gi];B[fg];W[mr];B[dh];W[mo];B[mm];W[ns];B[dd];W[ed];B[fj];W[gj];B[fe];W[ia];B[ck];W[qk];B[re];W[rf];B[rd];W[lk];B[mk];W[ja];B[lb];W[la];B[ma];W[ka];B[mc];W[bk];B[bj];W[bl];B[dj];W[sf];B[np];W[ln];B[lm];W[no];B[or];W[os];B[ho];W[li];B[fo];W[go];B[hn];W[hp];B[ip];W[hr];B[fm];W[hm];B[io];W[nm];B[nl];W[nn];B[lo];W[ko];B[pl];W[ll];B[ml];W[lp];B[kl];W[fn];B[kk];W[lj];B[lh])
            `,
          sgf_name: "Shin Jinseo vs. Han Sangcho",
          black_player: "Shin Jinseo",
          white_player: "Han Sangcho",
          black_rank: "9p",
          white_rank: "5p",
          komi: 6.5,
          game_date: "2023-08-30 00:00:00.000",
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693875769/Shin-Jinseo1_thumbnail_zreznc.png",
          result: "B+R",
        },
        {
          user_id: 2,
          sgf_data: `(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[9]KM[6.50]PW[test9by9]PB[yep];B[gc];W[gg];B[cc];W[cg];B[ee];W[eg];B[ge];W[ce])`,
          sgf_name: "Nathan vs. Matthew",
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          komi: 5.5,
          game_date: "2023-01-06 00:00:00.000",
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607273/13by13test1_thumbnail_z9haxr.png",
          result: "Black + 5.5",
        },
        {
          user_id: 3,
          sgf_data: `(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[9]KM[6.50]PW[test9by9]PB[yep];B[gc];W[gg];B[cc];W[cg];B[ee];W[eg];B[ge];W[ce])`,
          sgf_name: "Nathan vs. Matthew",
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          komi: 6.5,
          game_date: "2023-01-09 00:00:00.000",
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607273/9by9test1_thumbnail_ydxgp0.png",
          result: "White + 3.5",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Sgfs";
    return queryInterface.bulkDelete(options, null, {});
  },
};
