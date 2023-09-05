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
          game_date: "2023-08-30 15:00:00.000",
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886732/Seeder%20Data/Shin-Jinseo1_thumbnail_wldxal.png",
          result: "B+R"
        },
        {
          user_id: 1,
          sgf_data: `(;EV[9th Ing Cup, final 2]
            DT[2023-08-23]
            PB[Xie Ke]BR[9p]
            PW[Shin Jinseo]WR[9p]
            KM[7.5]RE[W+R]
            SO[Go4Go.net]
            ;B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp];W[op];B[po];W[lq];B[nq];W[kq];B[om];W[ph];B[hd];W[hc];B[ge];W[nb];B[rf];W[pf];B[bp];W[bo];B[bq];W[cn];B[ej];W[ek];B[bg];W[bh];B[bf];W[mi];B[gj];W[hk];B[jm];W[hi];B[hh];W[gi];B[gh];W[eh];B[ic];W[id];B[kh];W[hj];B[jj];W[ii];B[hf];W[fh];B[ff];W[gc];B[ib];W[jc];B[lf];W[lg];B[jb];W[kb];B[lf];W[rc];B[rb];W[lg];B[cj];W[dj];B[lf];W[me];B[ke];W[ja];B[kl];W[ni];B[jq];W[jr];B[iq];W[nr];B[oq];W[ir];B[hr];W[mr];B[ch];W[bi];B[bm];W[go];B[gn];W[cm];B[ho];W[io];B[hp];W[ip];B[fp];W[jp];B[iq];W[jq];B[gp];W[eb];B[fl];W[fk];B[jh];W[iq];B[eo];W[en];B[em];W[dn];B[in];W[fn];B[ob];W[oa];B[pb];W[kf];B[fo];W[hm];B[cl];W[dl];B[ao];W[hn];B[ci];W[ck];B[bj];W[bk];B[ah];W[lg];B[ai];W[lf];B[bn];W[dh];B[db];W[fa];B[il];W[hl])
            `,
          sgf_name: "Xie Ke vs. Shin Jinseo",
          black_player: "Xie Ke",
          white_player: "Shin Jinseo",
          black_rank: "9p",
          white_rank: "9p",
          komi: 7.5,
          game_date: "2023-08-23 15:00:00.000",
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886733/Seeder%20Data/Shin-Jinseo2_thumbnail_jebjvy.png",
          result: "W+R",
        },
        {
          user_id: 1,
          sgf_data: `(;EV[9th Ing Cup, final 1]
            DT[2023-08-21]
            PB[Shin Jinseo]BR[9p]
            PW[Xie Ke]WR[9p]
            KM[8]RE[B+R]
            SO[Go4Go.net]
            ;B[pd];W[dd];B[pp];W[dq];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fg];B[cg];W[bc];B[eb];W[eh];B[dg];W[ci];B[gc];W[fh];B[ce];W[bd];B[bf];W[gd];B[hc];W[hd];B[bh];W[ic];B[hb];W[ib];B[ga];W[je];B[dp];W[eq];B[cp];W[cq];B[bq];W[br];B[bo];W[aq];B[bi];W[qf];B[re];W[qn];B[nq];W[rf];B[oc];W[qp];B[qq];W[rq];B[rr];W[rp];B[pq];W[on];B[pm];W[pn];B[qm];W[qj];B[pk];W[sr];B[rs];W[mn];B[pj];W[qi];B[pi];W[rd];B[qe];W[se];B[pf];W[cb];B[ab];W[pg];B[og];W[of];B[pe];W[oh];B[ph];W[qg];B[ng];W[nh];B[mh];W[mg];B[nf];W[mi];B[lh];W[ni];B[rc];W[rl];B[rm];W[rk];B[ml];W[li];B[om];W[mp];B[lr];W[op];B[rn];W[qo];B[mq];W[nl];B[nm];W[mm];B[nk];W[ll];B[ol];W[mk];B[nj];W[nl];B[ql];W[mf];B[ne];W[me];B[fl];W[nd];B[oe];W[nc];B[qh];W[rh];B[sg];W[sf];B[qd];W[ri];B[hk];W[fj];B[ml];W[bb];B[ea];W[nl];B[im];W[mj];B[oi];W[ij];B[gq];W[hj];B[ap];W[bp];B[sd];W[rg];B[bq];W[ar];B[lp];W[ob];B[lo];W[ia];B[ha];W[nn];B[fo];W[gr];B[fr];W[fq];B[hr];W[gp];B[hq];W[eo];B[er];W[bp];B[id];W[jd];B[bq];W[fp];B[dr];W[bp];B[ff];W[fe];B[bq];W[ok];B[oj];W[bp];B[ie];W[if];B[bq];W[fn];B[cr];W[bp];B[he];W[gf];B[bq];W[ae];B[bp];W[ca];B[em];W[in];B[hn];W[cm];B[hm];W[ck];B[cn];W[jn];B[io];W[ik];B[km];W[gl];B[gm];W[fm];B[el];W[jm];B[jl];W[kn];B[ln];W[kl];B[lm];W[il];B[jo];W[dm];B[dn];W[en];B[do];W[jk];B[ep];W[pb];B[ml];W[go];B[gn];W[nl];B[dk];W[dj];B[ml];W[oq];B[or];W[nl];B[jc];W[hf];B[ml];W[pr];B[ps];W[nl];B[jb];W[ge];B[ml];W[rb];B[qb];W[nl];B[bj];W[cj];B[pa];W[oa];B[qa];W[pc];B[qc];W[po];B[qr];W[ml];B[od];W[nb];B[bm])
            `,
          sgf_name: "Xie Ke vs. Shin Jinseo",
          black_player: "Shin Jinseo",
          white_player: "Xie Ke",
          black_rank: "9p",
          white_rank: "9p",
          komi: 8,
          game_date: "2023-08-21 15:00:00.000",
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886995/Seeder%20Data/Shin-Jinseo3_thumbnail_sykatb.png",
          result: "W+R",
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
