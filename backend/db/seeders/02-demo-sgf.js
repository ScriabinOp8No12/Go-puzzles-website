"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    // put tableName here inside up function instead of outside
    options.tableName = "Sgfs";
    return queryInterface.bulkInsert(
      options,
      [
        // Game 1 Shin Jinseo
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
          sgf_name: "Shin Jinseo vs Han Sangcho",
          black_player: "Shin Jinseo",
          white_player: "Han Sangcho",
          black_rank: "9p",
          white_rank: "5p",
          komi: 6.5,
          game_date: "2023-08-30 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886732/Seeder%20Data/Shin-Jinseo1_thumbnail_wldxal.png",
          suspended: false,
          result: "B+R",
        },
        // Game 2 Shin Jinseo
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
          sgf_name: "Xie Ke vs Shin Jinseo",
          black_player: "Xie Ke",
          white_player: "Shin Jinseo",
          black_rank: "9p",
          white_rank: "9p",
          komi: 7.5,
          game_date: "2023-08-23 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886733/Seeder%20Data/Shin-Jinseo2_thumbnail_jebjvy.png",
          suspended: false,
          result: "W+R",
        },
        // Game 3 Shin Jinseo
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
          sgf_name: "Xie Ke vs Shin Jinseo",
          black_player: "Shin Jinseo",
          white_player: "Xie Ke",
          black_rank: "9p",
          white_rank: "9p",
          komi: 8,
          game_date: "2023-08-21 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886995/Seeder%20Data/Shin-Jinseo3_thumbnail_sykatb.png",
          suspended: false,
          result: "W+R",
        },
        // Game 4 Shin Jinseo
        {
          user_id: 1,
          sgf_data: `(;EV[5th Mlily Cup, round 3]
            DT[2023-08-06]
            PB[Shin Jinseo]BR[9p]
            PW[Li Xuanhao]WR[9p]
            KM[7.5]RE[W+R]
            SO[Go4Go.net]
            ;B[qd];W[pp];B[cd];W[cp];B[fd];W[oc];B[pe];W[lc];B[qq];W[qp];B[pq];W[nq];B[nr];W[mq];B[mr];W[lq];B[qj];W[ep];B[cj];W[ch];B[di];W[dd];B[dc];W[cc];B[ec];W[bd];B[ce];W[be];B[cf];W[bf];B[cb];W[bc];B[cg];W[dh];B[bg];W[bh];B[ah];W[bj];B[bi];W[ci];B[ai];W[dj];B[ck];W[ei];B[eb];W[bk];B[cl];W[bl];B[cm];W[bm];B[cn];W[bn];B[fl];W[gk];B[gl];W[hk];B[hl];W[ik];B[eg];W[il];B[fo];W[fp];B[go];W[qh];B[nd];W[pi];B[nc];W[oq];B[or];W[pj];B[rq];W[nb];B[mb];W[pb];B[na];W[ob];B[mc];W[od];B[oe];W[qc];B[lf];W[mh];B[ng];W[jg];B[ql];W[pk];B[qn];W[on];B[ro];W[je];B[ld];W[eo];B[en];W[hq];B[im];W[jm];B[co];W[bo];B[do];W[dp];B[in];W[fg];B[ff];W[ef];B[gf];W[dg];B[ee];W[eh];B[df];W[lg];B[nh];W[ni];B[om];W[kf];B[nl];W[mf];B[nf];W[me];B[ne];W[jc];B[rc];W[rb];B[rd];W[pd];B[rg];W[lr];B[sb];W[ra];B[gg];W[qk];B[jp];W[iq];B[gp];W[gq];B[mi];W[nj];B[kl];W[jl];B[gi];W[hh];B[gh];W[fj];B[kk];W[mk];B[ml];W[km];B[lm];W[kj];B[jj];W[jk];B[lj];W[ki];B[mg];W[lh];B[lk];W[li];B[rl];W[rh];B[rf];W[mj];B[ll];W[dk];B[el];W[io];B[ho];W[fn];B[gn];W[rk];B[jo];W[hi];B[le];W[gc];B[ic];W[ib];B[hb];W[hc];B[id];W[jb];B[gb];W[hd];B[ig];W[ha];B[fb];W[if];B[ih];W[ii];B[hg];W[pl];B[pm];W[sl];B[jh];W[ji];B[sm];W[sk];B[rm];W[ip];B[ms];W[jn];B[lo];W[nn];B[gj];W[fk];B[mo];W[ls];B[kc];W[kd];B[he];W[ie];B[kb];W[pn];B[lp];W[no];B[op];W[ln];B[mn];W[kn];B[ol];W[np];B[po];W[oo];B[qo];W[oh];B[eg];W[aj];B[ag];W[ef];B[jq];W[jr];B[eg];W[dl];B[dm];W[ef];B[ek];W[ej];B[eg];W[fh])`,
          sgf_name: "Shin Jinseo vs Li Xuanhao",
          black_player: "Shin Jinseo",
          white_player: "Li Xuanhao",
          black_rank: "9p",
          white_rank: "9p",
          komi: 7.5,
          game_date: "2023-08-06 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693955474/Seeder%20Data/Shin-Jinseo4_thumbnail_xdtivw.png",
          suspended: false,
          result: "W+R",
        },
        // Game 5 Shin Jinseo
        {
          user_id: 1,
          sgf_data: `(;EV[5th Mlily Cup, round 2]
            DT[2023-08-04]
            PB[Fan Tingyu]BR[9p]
            PW[Shin Jinseo]WR[9p]
            KM[7.5]RE[W+R]
            SO[Go4Go.net]
            ;B[pd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[de];B[bf];W[qc];B[qd];W[pc];B[od];W[nb];B[qk];W[mc];B[po];W[jq];B[cq];W[dq];B[cp];W[do];B[bn];W[pi];B[qh];W[qi];B[ph];W[oi];B[ri];W[rj];B[rh];W[ol];B[hd];W[mq];B[qm];W[cf];B[bg];W[hc];B[id];W[ic];B[ip];W[iq];B[hp];W[hq];B[jd];W[cb];B[bb];W[ig];B[kg];W[ji];B[im];W[li];B[ld];W[ko];B[qj];W[md];B[le];W[gl];B[kj];W[jj];B[kl];W[kk];B[ll];W[jl];B[jm];W[km];B[kp];W[jp];B[kn];W[lo];B[ln];W[mn];B[mm];W[nn];B[lk];W[jk];B[jo];W[io];B[jn];W[op];B[pp];W[lj];B[ho];W[db];B[ce];W[jc];B[gd];W[gc];B[cr];W[pl];B[ql];W[hn];B[gn];W[hm];B[in];W[fp];B[il];W[hk];B[nk];W[nl];B[mk];W[mh];B[me];W[oh];B[ok];W[oo];B[pn];W[on];B[dm];W[dl];B[cm];W[em];B[en];W[go];B[oj];W[el];B[ik];W[ij];B[gg];W[gh];B[fh];W[hh];B[nr];W[or];B[oq];W[nq];B[kc];W[kb];B[lc];W[lb];B[kh];W[ki];B[ck];W[of];B[eg];W[dh];B[ei];W[df];B[ch];W[ff];B[fg];W[di];B[ej];W[dg];B[rc];W[rb];B[rd];W[gf];B[dk];W[ne];B[hf];W[hg];B[if];W[kf];B[ef];W[fe];B[mg];W[jf])
            `,
          sgf_name: "Fan Tingyu vs Shin Jinseo",
          black_player: "Fan Tingyu",
          white_player: "Shin Jinseo",
          black_rank: "9p",
          white_rank: "9p",
          komi: 7.5,
          game_date: "2023-08-04 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693955660/Seeder%20Data/Shin-Jinseo5_thumbnail_grp4np.png",
          suspended: false,
          result: "W+R",
        },
        // Game 6 Shin Jinseo
        {
          user_id: 1,
          sgf_data: `(;EV[5th Mlily Cup, round 1]
            DT[2023-08-03]
            PB[Shin Jinseo]BR[9p]
            PW[Zhou Hongyu]WR[7p]
            KM[7.5]RE[B+3.5]
            SO[Go4Go.net]
            ;B[qd];W[dp];B[pp];W[dd];B[cc];W[dc];B[cd];W[de];B[bf];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jd];B[nq];W[fq];B[cg];W[mp];B[gp];W[mq];B[np];W[mo];B[pn];W[im];B[gq];W[fp];B[hn];W[in];B[jp];W[om];B[pm];W[pq];B[qq];W[pr];B[or];W[fn];B[kq];W[mr];B[qr];W[ko];B[fr];W[er];B[gr];W[og];B[hd];W[dg];B[dh];W[eh];B[ei];W[fh];B[df];W[eg];B[ef];W[ce];B[be];W[cf];B[ff];W[cb];B[bb];W[eb];B[ch];W[ba];B[je];W[ke];B[jf];W[id];B[he];W[fi];B[kd];W[kc];B[ld];W[lc];B[bc];W[gb];B[ej];W[fj];B[hg];W[cj];B[ek];W[cl];B[dl];W[cm];B[hb];W[ib];B[hk];W[ii];B[hi];W[hj];B[ij];W[hh];B[gj];W[ih];B[gh];W[gi];B[gg];W[hj];B[gc];W[ha];B[hi];W[fk];B[fl];W[hj];B[ic];W[jc];B[hi];W[gk];B[hj];W[gl];B[hl];W[fm];B[hm];W[kh];B[ki];W[jj];B[lh];W[ji];B[kg];W[kj];B[li];W[ho];B[go];W[ip];B[fo];W[el];B[gn];W[iq];B[dq];W[cq];B[dr];W[ep];B[cp];W[co];B[bp];W[cr];B[es];W[bq];B[en];W[dm];B[do];W[bo];B[mk];W[ll];B[ph];W[ap];B[eq];W[pe];B[qe];W[pg];B[qh];W[hr];B[gs];W[ml];B[ol];W[nk];B[ok];W[cs];B[ds];W[le];B[ni];W[di];B[bi];W[ob];B[hc];W[fc];B[pb];W[nr];B[oq];W[qg];B[rg];W[mj];B[nh];W[nb];B[lj];W[lk];B[jk];W[kk];B[jl];W[jm];B[bk];W[bj];B[aj];W[pa];B[qa];W[oa];B[qb];W[nm];B[on];W[rh];B[ri];W[ie];B[if];W[ge];B[nn];W[mn];B[nl];W[rf];B[sh];W[gd];B[hf];W[hs];B[mm];W[lm];B[nf];W[ng];B[mf];W[mg];B[lf];W[oe];B[eo];W[cp];B[em];W[dk];B[an];W[bl];B[al];W[ci];B[bg];W[oh];B[oi];W[jh];B[lg];W[nj];B[oj];W[no];B[oo];W[ns];B[os];W[il];B[ik];W[nm];B[ab];W[ca];B[ee];W[ed];B[gm];W[fl];B[kl];W[km];B[hp];W[io];B[hq];W[ir];B[am];W[ck];B[ak];W[me];B[ne];W[bn];B[dn];W[pd];B[gf];W[fd];B[aa];W[jb];B[kf];W[md];B[mi];W[mk];B[ai];W[ao];B[fg];W[dj];B[fe];W[bm];B[mh];W[cn];B[pf];W[of];B[ig];W[jg];B[om];W[mm])
            `,
          sgf_name: "Shin Jinseo vs Fan Tingyu",
          black_player: "Shin Jinseo",
          white_player: "Zhou Hongyu",
          black_rank: "9p",
          white_rank: "7p",
          komi: 7.5,
          game_date: "2023-08-04 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693955875/Seeder%20Data/Shin-Jinseo6_thumbnail_zrejkg.png",
          suspended: false,
          result: "B+3.5",
        },
        // Game 7 Shin Jinseo
        {
          user_id: 1,
          sgf_data: `(;EV[9th Kuksu Mountains Tournament, final]
            DT[2023-07-28]
            PB[Shin Jinseo]BR[9p]
            PW[Shin Minjun]WR[9p]
            KM[6.5]RE[W+R]
            SO[Go4Go.net]
            ;B[pd];W[dp];B[pp];W[dd];B[cq];W[dq];B[cp];W[do];B[bn];W[qc];B[qd];W[pc];B[od];W[nc];B[rc];W[nd];B[fc];W[nf];B[cf];W[df];B[dg];W[ef];B[ce];W[cd];B[ic];W[rb];B[oc];W[ob];B[nb];W[pb];B[mb];W[rd];B[re];W[sc];B[pf];W[jc];B[de];W[ed];B[jb];W[ee];B[kc];W[cg];B[ph];W[qq];B[qp];W[pq];B[nq];W[oq];B[op];W[nr];B[rq];W[rr];B[or];W[rp];B[qr];W[sq];B[pr];W[rq];B[mr];W[np];B[mq];W[qo];B[no];W[ql];B[hp];W[ch];B[pn];W[qn];B[gq];W[jd];B[kd];W[cr];B[br];W[bo];B[co];W[cn];B[bp];W[bm];B[dn];W[an];B[dr];W[dm];B[en];W[em];B[fn];W[gl];B[hm];W[hl];B[im];W[ke];B[je];W[id];B[hc];W[jf];B[ie];W[hd];B[gd];W[he];B[if];W[kf];B[ge];W[hf];B[ig];W[gf];B[gg];W[ff];B[jh];W[oh];B[lh];W[oi];B[pi];W[oj];B[og];W[ng];B[qj];W[jk];B[kj];W[jj];B[mi];W[ki];B[kh];W[mh];B[li];W[mk];B[lk];W[ll];B[nk];W[ih];B[jg];W[pj];B[me];W[kb];B[lb];W[le];B[md];W[lc];B[ld];W[mf];B[qk];W[ne];B[mc];W[nl];B[mj];W[ml];B[pl];W[ol];B[kk];W[pk];B[rl];W[pm];B[rm];W[mp])
            `,
          sgf_name: "Shin Jinseo vs Fan Tingyu",
          black_player: "Shin Jinseo",
          white_player: "Shin Minjun",
          black_rank: "9p",
          white_rank: "9p",
          komi: 6.5,
          game_date: "2023-07-28 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693956063/Seeder%20Data/Shin-Jinseo7_thumbnail_acfagz.png",
          suspended: false,
          result: "W+R",
        },
        // Game 8 Shin Jinseo
        {
          user_id: 1,
          sgf_data: `(;EV[9th Kuksu Mountains Tournament, semi-final]
            DT[2023-07-27]
            PB[Shin Jinseo]BR[9p]
            PW[Shibano Toramaru]WR[9p]
            KM[6.5]RE[B+R]
            SO[Go4Go.net]
            ;B[qd];W[dp];B[cd];W[pp];B[ec];W[oc];B[pf];W[kd];B[qq];W[qp];B[pq];W[nq];B[nr];W[mq];B[mr];W[lq];B[cq];W[dq];B[cp];W[cn];B[co];W[do];B[bn];W[cm];B[bm];W[cl];B[oq];W[op];B[lr];W[kq];B[pj];W[oh];B[pc];W[od];B[ph];W[oi];B[pi];W[pe];B[qe];W[of];B[og];W[ng];B[pg];W[fd];B[fc];W[ce];B[dd];W[hk];B[jk];W[lk];B[ji];W[hi];B[jm];W[il];B[jl];W[lm];B[lj];W[mk];B[lh];W[bl];B[cg];W[kj];B[jj];W[li];B[jf];W[id];B[in];W[ih];B[gn];W[ho];B[hn];W[gp];B[jh];W[ig];B[gl];W[gk];B[el];W[ek];B[jp];W[jq];B[ip];W[kn];B[hl];W[ik];B[jn];W[en];B[gq];W[fq];B[hq];W[cr];B[br];W[er];B[cs];W[go];B[mg];W[nf];B[mf];W[le];B[mi];W[mj];B[nh];W[ni];B[mh];W[ok];B[me];W[md];B[nd];W[nc];B[ne];W[oe];B[mc];W[mb];B[ld];W[lc];B[md];W[kc];B[ke];W[ds];B[dr];W[lf];B[kg];W[cr];B[bs];W[pk];B[rk];W[de];B[ee];W[bd];B[bc];W[bf];B[ef];W[cc];B[cb];W[ac];B[dc];W[bb];B[hd];W[je];B[kf];W[hc];B[gc];W[he];B[gd];W[if];B[qm];W[qk];B[rj];W[hb];B[om];W[nm];B[bg];W[cc];B[db];W[df];B[dg];W[eg];B[bc];W[ap];B[bp];W[cc];B[ba];W[ae];B[bc];W[am];B[ao];W[cc];B[ag];W[ci];B[bc];W[ki];B[kk];W[cc];B[nn];W[pn];B[bc];W[pm];B[ko];W[lo];B[fm];W[cc];B[dh];W[eh];B[di];W[fk];B[bc];W[qj];B[qi];W[cc];B[ei];W[ff];B[fi];W[fe];B[ed];W[ca];B[bc];W[lj];B[kh];W[cc];B[da];W[fh];B[gb];W[ga];B[bc];W[rl];B[rp];W[cc];B[fa];W[ha];B[bc];W[ro];B[rq];W[cc];B[cf];W[be];B[bc];W[fl];B[fn];W[cc];B[ge];W[gf];B[bc];W[hm];B[gm];W[cc];B[eb];W[im];B[io];W[kp];B[ir];W[gr];B[kr])
            `,
          sgf_name: "Shin Jinseo vs Fan Tingyu",
          black_player: "Shin Jinseo",
          white_player: "Shibano Toramaru",
          black_rank: "9p",
          white_rank: "9p",
          komi: 6.5,
          game_date: "2023-07-27 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693956181/Seeder%20Data/Shin-Jinseo8_thumbnail_cvdvme.png",
          suspended: false,
          result: "B+R",
        },
        // Game 9 Shin Jinseo
        {
          user_id: 1,
          sgf_data: `(;EV[9th Kuksu Mountains Tournament, round 2]
            DT[2023-07-26]
            PB[Shin Jinseo]BR[9p]
            PW[Kim Myounghoon]WR[9p]
            KM[6.5]RE[B+R]
            SO[Go4Go.net]
            ;B[qd];W[cp];B[dd];W[pq];B[eq];W[do];B[po];W[qo];B[qn];W[qp];B[pn];W[np];B[pi];W[hq];B[nc];W[cf];B[fd];W[dj];B[fp];W[ho];B[cr];W[fo];B[mo];W[no];B[nn];W[mn];B[mm];W[ln];B[nm];W[lm];B[ll];W[kl];B[lk];W[kk];B[kj];W[jm];B[gp];W[hp];B[li];W[md];B[nd];W[mf];B[go];W[ne];B[le];W[me];B[lb];W[pd];B[pc];W[pe];B[qe];W[pf];B[qf];W[qc];B[pg];W[mc];B[ob];W[mb];B[qb];W[ic];B[lo];W[ko];B[oq];W[nq];B[kc];W[kd];B[jc];W[id];B[jd];W[je];B[ke];W[jf];B[ld];W[lc];B[ie];W[if];B[ib];W[hb];B[hc];W[he];B[hd];W[ie];B[jb];W[gb];B[fc];W[la];B[ce];W[be];B[bd];W[fb];B[eb];W[ec];B[ed];W[db];B[dc];W[ea];B[ec];W[kb];B[gc];W[fn];B[bq];W[og];B[oh];W[rc];B[of];W[oe];B[rb];W[ro];B[gn];W[ha];B[ia];W[ja];B[ka];W[qg];B[ng];W[ja];B[kn];W[km];B[ka];W[rd];B[rg];W[ja];B[kp];W[jo];B[ka];W[oc];B[od];W[ja];B[or];W[pp];B[ka];W[cq];B[br];W[ja];B[op];W[oo];B[ka];W[on];B[om];W[pm];B[qm];W[nr];B[lb];W[rf];B[qh];W[kb];B[fa];W[nb];B[pl];W[fr];B[er];W[bp];B[gr];W[de];B[cd];W[ch];B[dl];W[fl];B[ek];W[oc];B[pb];W[fi];B[fk];W[gm];B[gk];W[jj];B[gi];W[ki];B[fh];W[ei];B[ck];W[bm];B[cn];W[cm];B[dm];W[dn];B[bn];W[gh];B[bl];W[hm];B[bj];W[gq];B[fq];W[lj];B[hr];W[ir];B[gg];W[hh];B[fg];W[dg];B[ef];W[bg];B[ae];W[sl];B[eh];W[bi];B[dh];W[af];B[bf];W[re];B[qg];W[be];B[ad];W[aj];B[cj];W[al];B[ak];W[bk];B[cl];W[ai];B[am];W[bf];B[df];W[ah];B[hi];W[mj];B[hn];W[in];B[rl];W[sb];B[sf];W[sm];B[il];W[hj];B[iq])
            `,
          sgf_name: "Shin Jinseo vs Kim Myounghoon",
          black_player: "Shin Jinseo",
          white_player: "Kim Myounghoon",
          black_rank: "9p",
          white_rank: "9p",
          komi: 6.5,
          game_date: "2023-07-26 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693956302/Seeder%20Data/Shin-Jinseo9_thumbnail_l9ubsq.png",
          suspended: false,
          result: "B+R",
        },
        // Game 10 Shin Jinseo
        {
          user_id: 1,
          sgf_data: `(;EV[9th Kuksu Mountains Tournament, round 1]
            DT[2023-07-26]
            PB[Ida Atsushi]BR[9p]
            PW[Shin Jinseo]WR[9p]
            KM[6.5]RE[W+R]
            SO[Go4Go.net]
            ;B[qd];W[dc];B[qq];W[dq];B[od];W[de];B[co];W[fp];B[dk];W[ci];B[hq];W[jq];B[ho];W[mq];B[bq];W[cl];B[dn];W[dl];B[el];W[ek];B[em];W[ej];B[jc];W[go];B[gp];W[hn];B[fo];W[gn];B[io];W[fq];B[in];W[br];B[gl];W[oq];B[qn];W[hc];B[pj];W[lc];B[cc];W[cd];B[hd];W[ic];B[jd];W[id];B[je];W[ie];B[jf];W[hg];B[jh];W[pc];B[qc];W[pi];B[qj];W[pd];B[pe];W[oc];B[oe];W[qb];B[rb];W[pb];B[md];W[qe];B[re];W[qf];B[rf];W[ra];B[rc];W[kb];B[jb];W[nb];B[nn];W[oj];B[kj];W[qi];B[rh];W[lj];B[kk];W[lk];B[ok];W[nj];B[nk];W[pk];B[pl];W[qg];B[rg];W[ki];B[ji];W[mg];B[og];W[oh];B[qh];W[kl];B[kh];W[li];B[lm];W[ll];B[kn];W[il];B[hk];W[ik];B[ij];W[ld];B[lf];W[mf];B[me];W[nm];B[qk];W[le];B[lg];W[mh];B[ni];W[hj];B[hl];W[mm];B[mn];W[km];B[ln];W[im];B[oi];W[hm];B[fn];W[eo];B[gm];W[lh];B[ml];W[do];B[dm];W[bm];B[bn];W[ih];B[jj];W[jg])
            `,
          sgf_name: "Ida Atsushi vs Shin Jinseo",
          black_player: "Ida Atsushi",
          white_player: "Shin Jinseo",
          black_rank: "9p",
          white_rank: "9p",
          komi: 6.5,
          game_date: "2023-07-26 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693956436/Seeder%20Data/ShinJinseo10_thumbnail_e580u4.png",
          suspended: false,
          result: "W+R",
        },
        {
          user_id: 2,
          sgf_data: `(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[9]KM[6.50]PW[test9by9]PB[yep];B[gc];W[gg];B[cc];W[cg];B[ee];W[eg];B[ge];W[ce])`,
          sgf_name: "Nathan vs Matthew",
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          komi: 5.5,
          game_date: "2023-01-06 00:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607273/13by13test1_thumbnail_z9haxr.png",
          suspended: false,
          result: "Black + 5.5",
        },
        // Demo user id 3 (our demo login user) sgf id of 12?
        // Game 1 -> copy of Shin Jinseo sgf id of 2
        {
          user_id: 3,
          sgf_data: `(;EV[9th Ing Cup, final 2]
            DT[2023-08-23]
            PB[Xie Ke]BR[9p]
            PW[Shin Jinseo]WR[9p]
            KM[7.5]RE[W+R]
            SO[Go4Go.net]
            ;B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp];W[op];B[po];W[lq];B[nq];W[kq];B[om];W[ph];B[hd];W[hc];B[ge];W[nb];B[rf];W[pf];B[bp];W[bo];B[bq];W[cn];B[ej];W[ek];B[bg];W[bh];B[bf];W[mi];B[gj];W[hk];B[jm];W[hi];B[hh];W[gi];B[gh];W[eh];B[ic];W[id];B[kh];W[hj];B[jj];W[ii];B[hf];W[fh];B[ff];W[gc];B[ib];W[jc];B[lf];W[lg];B[jb];W[kb];B[lf];W[rc];B[rb];W[lg];B[cj];W[dj];B[lf];W[me];B[ke];W[ja];B[kl];W[ni];B[jq];W[jr];B[iq];W[nr];B[oq];W[ir];B[hr];W[mr];B[ch];W[bi];B[bm];W[go];B[gn];W[cm];B[ho];W[io];B[hp];W[ip];B[fp];W[jp];B[iq];W[jq];B[gp];W[eb];B[fl];W[fk];B[jh];W[iq];B[eo];W[en];B[em];W[dn];B[in];W[fn];B[ob];W[oa];B[pb];W[kf];B[fo];W[hm];B[cl];W[dl];B[ao];W[hn];B[ci];W[ck];B[bj];W[bk];B[ah];W[lg];B[ai];W[lf];B[bn];W[dh];B[db];W[fa];B[il];W[hl])
            `,
          sgf_name: "Xie Ke vs Shin Jinseo",
          black_player: "Xie Ke",
          white_player: "Shin Jinseo",
          black_rank: "9p",
          white_rank: "9p",
          komi: 7.5,
          game_date: "2023-08-23 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886733/Seeder%20Data/Shin-Jinseo2_thumbnail_jebjvy.png",
          suspended: false,
          result: "W+R",
        },
        // Include sgfs of smaller boards too for testing
        // Game 2
        {
          user_id: 3,
          sgf_data: `(;FF[4] CA[UTF-8] GM[1] DT[2023-09-05] PC[OGS: https://online-go.com/game/56820296] GN[Vriendschappelijke Wedstrijd] PB[goloveye2] PW[erikdeviking] BR[6k] WR[6k] TM[150]OT[5x60 byo-yomi] RE[B+2.5] SZ[13] KM[5.5] RU[Japanese] ;B[dd] (;W[jj] (;B[kd] (;W[cj] (;B[gk] (;W[ek] (;B[jk] (;W[kk] (;B[jl] (;W[kl] (;B[ij] (;W[ji] (;B[fi] (;W[dh] (;B[cg] (;W[ch] (;B[gd] (;W[dg] (;B[cf] (;W[jc] (;B[kc] (;W[kb] (;B[lb] (;W[ib] (;B[ka] (;W[gb] (;B[fc] (;W[fb] (;B[eb] (;W[gc] (;B[fd] (;W[jb] (;B[jd] (;W[id] (;B[ie] (;W[hd] (;B[he] (;W[ea] (;B[db] (;W[ja] (;B[fa] (;W[ga] (;B[hc] (;W[ic] (;B[kh] (;W[ki] (;B[jh] (;W[ii] (;B[hj] (;W[ih] (;B[ig] (;W[df] (;B[de] (;W[la] (;B[mb] (;W[bg] (;B[bf] (;W[lh] (;B[lg] (;W[li] (;B[kg] (;W[bh] (;B[ef] (;W[eg] (;B[ff] (;W[hg] (;B[hf] (;W[fg] (;B[gg] (;W[gh] (;B[hh] (;W[hi] (;B[hg] (;W[gi] (;B[gj] (;W[fj] (;B[fk] (;W[ej] (;B[el] (;W[dl] (;B[em] (;W[il] (;B[ik] (;W[hl] (;B[jm] (;W[gl] (;B[fl] (;W[km] (;B[gm] (;W[hm] (;B[hk] (;W[fm] (;B[hb] (;W[dm] (;B[gm] (;W[lc] (;B[ld] (;W[fm] (;B[ha] (;W[ia] (;B[gm] (;W[hb] (;B[im] (;W[be] (;B[ce] (;W[bd] (;B[af] (;W[cb] (;B[da] (;W[ca] (;B[cc] (;W[bc] (;B[bb] (;W[ag] (;B[mh] (;W[mi] (;B[mg] (;W[fa] (;B[mc] (;W[ka] (;B[] (;W[] ))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))`,
          sgf_name: "goloveye2 vs erikdeviking",
          black_player: "goloveye2",
          white_player: "erikdeviking",
          black_rank: "6k",
          white_rank: "6k",
          komi: 5.5,
          game_date: "2023-09-05 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1694028715/vqnappgjnx5oljz2nddb.png",
          suspended: false,
          result: "Black + 2.5",
        },
        // Game 3
        {
          user_id: 3,
          sgf_data: `(;EV[9th Kuksu Mountains Tournament, round 2]
            DT[2023-07-26]
            PB[Shin Jinseo]BR[9p]
            PW[Kim Myounghoon]WR[9p]
            KM[6.5]RE[B+R]
            SO[Go4Go.net]
            ;B[qd];W[cp];B[dd];W[pq];B[eq];W[do];B[po];W[qo];B[qn];W[qp];B[pn];W[np];B[pi];W[hq];B[nc];W[cf];B[fd];W[dj];B[fp];W[ho];B[cr];W[fo];B[mo];W[no];B[nn];W[mn];B[mm];W[ln];B[nm];W[lm];B[ll];W[kl];B[lk];W[kk];B[kj];W[jm];B[gp];W[hp];B[li];W[md];B[nd];W[mf];B[go];W[ne];B[le];W[me];B[lb];W[pd];B[pc];W[pe];B[qe];W[pf];B[qf];W[qc];B[pg];W[mc];B[ob];W[mb];B[qb];W[ic];B[lo];W[ko];B[oq];W[nq];B[kc];W[kd];B[jc];W[id];B[jd];W[je];B[ke];W[jf];B[ld];W[lc];B[ie];W[if];B[ib];W[hb];B[hc];W[he];B[hd];W[ie];B[jb];W[gb];B[fc];W[la];B[ce];W[be];B[bd];W[fb];B[eb];W[ec];B[ed];W[db];B[dc];W[ea];B[ec];W[kb];B[gc];W[fn];B[bq];W[og];B[oh];W[rc];B[of];W[oe];B[rb];W[ro];B[gn];W[ha];B[ia];W[ja];B[ka];W[qg];B[ng];W[ja];B[kn];W[km];B[ka];W[rd];B[rg];W[ja];B[kp];W[jo];B[ka];W[oc];B[od];W[ja];B[or];W[pp];B[ka];W[cq];B[br];W[ja];B[op];W[oo];B[ka];W[on];B[om];W[pm];B[qm];W[nr];B[lb];W[rf];B[qh];W[kb];B[fa];W[nb];B[pl];W[fr];B[er];W[bp];B[gr];W[de];B[cd];W[ch];B[dl];W[fl];B[ek];W[oc];B[pb];W[fi];B[fk];W[gm];B[gk];W[jj];B[gi];W[ki];B[fh];W[ei];B[ck];W[bm];B[cn];W[cm];B[dm];W[dn];B[bn];W[gh];B[bl];W[hm];B[bj];W[gq];B[fq];W[lj];B[hr];W[ir];B[gg];W[hh];B[fg];W[dg];B[ef];W[bg];B[ae];W[sl];B[eh];W[bi];B[dh];W[af];B[bf];W[re];B[qg];W[be];B[ad];W[aj];B[cj];W[al];B[ak];W[bk];B[cl];W[ai];B[am];W[bf];B[df];W[ah];B[hi];W[mj];B[hn];W[in];B[rl];W[sb];B[sf];W[sm];B[il];W[hj];B[iq])
            `,
          sgf_name: "Shin Jinseo vs Kim Myounghoon",
          black_player: "Shin Jinseo",
          white_player: "Kim Myounghoon",
          black_rank: "9p",
          white_rank: "9p",
          komi: 6.5,
          game_date: "2023-07-26 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693956302/Seeder%20Data/Shin-Jinseo9_thumbnail_l9ubsq.png",
          suspended: false,
          result: "B+R",
        },
        // Game 4 9by9
        {
          user_id: 3,
          sgf_data: `(;FF[4] CA[UTF-8] GM[1] DT[2023-09-03] PC[OGS: https://online-go.com/game/56766164] GN[play for fun] PB[iself101] PW[erikdeviking] BR[7k] WR[6k] TM[0]OT[15 simple] RE[B+16.5] SZ[9] KM[5.5] RU[Japanese] ;B[gc] (;W[df] (;B[gg] (;W[ge] (;B[dg] (;W[ef] (;B[eg] (;W[ec] (;B[cc] (;W[db] (;B[bf] (;W[cf] (;B[be] (;W[cg] (;B[ff] (;W[fe] (;B[gf] (;W[cb] (;B[bb] (;W[ba] (;B[bc] (;W[bg] (;B[ag] (;W[ad] (;B[ce] (;W[ed] (;B[dd] (;W[de] (;B[dc] (;W[bd] (;B[bh] (;W[ch] (;B[ah] (;W[bi] (;B[dh] (;W[di] (;B[ei] (;W[ci] (;B[fd] (;W[gd] (;B[fc] (;W[hc] (;B[eb] (;W[ee] (;B[fb] (;W[af] (;B[ae] (;W[ai] (;B[da] (;W[af] (;B[ag] (;W[fh] (;B[fg] (;W[eh] (;B[gh] (;W[fi] (;B[gi] (;W[ei] (;B[hb] (;W[hf] (;B[hg] (;W[he] (;B[ih] (;W[hi] (;B[ic] (;W[id] (;B[hd] (;W[ie] (;B[hc] (;W[ah] (;B[cd] (;W[af] (;B[ac] (;W[ag] (;B[ig] (;W[ii] (;B[hh] (;W[ii] (;B[hi] (;W[] (;B[] (;W[] ))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))`,
          sgf_name: "iself101 vs erikdeviking",
          black_player: "iself101",
          white_player: "erikdeviking",
          black_rank: "7k",
          white_rank: "6k",
          komi: 5.5,
          game_date: "2023-09-03 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1694028141/b7q8a1csj5wycsfd4zp1.png",
          suspended: false,
          result: "Black + 16.5",
        },
        // Game 5
        {
          user_id: 3,
          sgf_data: `(;EV[9th Kuksu Mountains Tournament, round 1]
            DT[2023-07-26]
            PB[Ida Atsushi]BR[9p]
            PW[Shin Jinseo]WR[9p]
            KM[6.5]RE[W+R]
            SO[Go4Go.net]
            ;B[qd];W[dc];B[qq];W[dq];B[od];W[de];B[co];W[fp];B[dk];W[ci];B[hq];W[jq];B[ho];W[mq];B[bq];W[cl];B[dn];W[dl];B[el];W[ek];B[em];W[ej];B[jc];W[go];B[gp];W[hn];B[fo];W[gn];B[io];W[fq];B[in];W[br];B[gl];W[oq];B[qn];W[hc];B[pj];W[lc];B[cc];W[cd];B[hd];W[ic];B[jd];W[id];B[je];W[ie];B[jf];W[hg];B[jh];W[pc];B[qc];W[pi];B[qj];W[pd];B[pe];W[oc];B[oe];W[qb];B[rb];W[pb];B[md];W[qe];B[re];W[qf];B[rf];W[ra];B[rc];W[kb];B[jb];W[nb];B[nn];W[oj];B[kj];W[qi];B[rh];W[lj];B[kk];W[lk];B[ok];W[nj];B[nk];W[pk];B[pl];W[qg];B[rg];W[ki];B[ji];W[mg];B[og];W[oh];B[qh];W[kl];B[kh];W[li];B[lm];W[ll];B[kn];W[il];B[hk];W[ik];B[ij];W[ld];B[lf];W[mf];B[me];W[nm];B[qk];W[le];B[lg];W[mh];B[ni];W[hj];B[hl];W[mm];B[mn];W[km];B[ln];W[im];B[oi];W[hm];B[fn];W[eo];B[gm];W[lh];B[ml];W[do];B[dm];W[bm];B[bn];W[ih];B[jj];W[jg])
            `,
          sgf_name: "Ida Atsushi vs Shin Jinseo",
          black_player: "Ida Atsushi",
          white_player: "Shin Jinseo",
          black_rank: "9p",
          white_rank: "9p",
          komi: 6.5,
          game_date: "2023-07-26 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693956436/Seeder%20Data/ShinJinseo10_thumbnail_e580u4.png",
          suspended: false,
          result: "W+R",
        },
        // Game 6
        {
          user_id: 3,
          sgf_data: `(;EV[9th Kuksu Mountains Tournament, final]
            DT[2023-07-28]
            PB[Shin Jinseo]BR[9p]
            PW[Shin Minjun]WR[9p]
            KM[6.5]RE[W+R]
            SO[Go4Go.net]
            ;B[pd];W[dp];B[pp];W[dd];B[cq];W[dq];B[cp];W[do];B[bn];W[qc];B[qd];W[pc];B[od];W[nc];B[rc];W[nd];B[fc];W[nf];B[cf];W[df];B[dg];W[ef];B[ce];W[cd];B[ic];W[rb];B[oc];W[ob];B[nb];W[pb];B[mb];W[rd];B[re];W[sc];B[pf];W[jc];B[de];W[ed];B[jb];W[ee];B[kc];W[cg];B[ph];W[qq];B[qp];W[pq];B[nq];W[oq];B[op];W[nr];B[rq];W[rr];B[or];W[rp];B[qr];W[sq];B[pr];W[rq];B[mr];W[np];B[mq];W[qo];B[no];W[ql];B[hp];W[ch];B[pn];W[qn];B[gq];W[jd];B[kd];W[cr];B[br];W[bo];B[co];W[cn];B[bp];W[bm];B[dn];W[an];B[dr];W[dm];B[en];W[em];B[fn];W[gl];B[hm];W[hl];B[im];W[ke];B[je];W[id];B[hc];W[jf];B[ie];W[hd];B[gd];W[he];B[if];W[kf];B[ge];W[hf];B[ig];W[gf];B[gg];W[ff];B[jh];W[oh];B[lh];W[oi];B[pi];W[oj];B[og];W[ng];B[qj];W[jk];B[kj];W[jj];B[mi];W[ki];B[kh];W[mh];B[li];W[mk];B[lk];W[ll];B[nk];W[ih];B[jg];W[pj];B[me];W[kb];B[lb];W[le];B[md];W[lc];B[ld];W[mf];B[qk];W[ne];B[mc];W[nl];B[mj];W[ml];B[pl];W[ol];B[kk];W[pk];B[rl];W[pm];B[rm];W[mp])
            `,
          sgf_name: "Shin Jinseo vs Fan Tingyu",
          black_player: "Shin Jinseo",
          white_player: "Shin Minjun",
          black_rank: "9p",
          white_rank: "9p",
          komi: 6.5,
          game_date: "2023-07-28 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693956063/Seeder%20Data/Shin-Jinseo7_thumbnail_acfagz.png",
          suspended: false,
          result: "W+R",
        },

        // Game 7
        {
          user_id: 3,
          sgf_data: `(;EV[9th Ing Cup, final 1]
            DT[2023-08-21]
            PB[Shin Jinseo]BR[9p]
            PW[Xie Ke]WR[9p]
            KM[8]RE[B+R]
            SO[Go4Go.net]
            ;B[pd];W[dd];B[pp];W[dq];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fg];B[cg];W[bc];B[eb];W[eh];B[dg];W[ci];B[gc];W[fh];B[ce];W[bd];B[bf];W[gd];B[hc];W[hd];B[bh];W[ic];B[hb];W[ib];B[ga];W[je];B[dp];W[eq];B[cp];W[cq];B[bq];W[br];B[bo];W[aq];B[bi];W[qf];B[re];W[qn];B[nq];W[rf];B[oc];W[qp];B[qq];W[rq];B[rr];W[rp];B[pq];W[on];B[pm];W[pn];B[qm];W[qj];B[pk];W[sr];B[rs];W[mn];B[pj];W[qi];B[pi];W[rd];B[qe];W[se];B[pf];W[cb];B[ab];W[pg];B[og];W[of];B[pe];W[oh];B[ph];W[qg];B[ng];W[nh];B[mh];W[mg];B[nf];W[mi];B[lh];W[ni];B[rc];W[rl];B[rm];W[rk];B[ml];W[li];B[om];W[mp];B[lr];W[op];B[rn];W[qo];B[mq];W[nl];B[nm];W[mm];B[nk];W[ll];B[ol];W[mk];B[nj];W[nl];B[ql];W[mf];B[ne];W[me];B[fl];W[nd];B[oe];W[nc];B[qh];W[rh];B[sg];W[sf];B[qd];W[ri];B[hk];W[fj];B[ml];W[bb];B[ea];W[nl];B[im];W[mj];B[oi];W[ij];B[gq];W[hj];B[ap];W[bp];B[sd];W[rg];B[bq];W[ar];B[lp];W[ob];B[lo];W[ia];B[ha];W[nn];B[fo];W[gr];B[fr];W[fq];B[hr];W[gp];B[hq];W[eo];B[er];W[bp];B[id];W[jd];B[bq];W[fp];B[dr];W[bp];B[ff];W[fe];B[bq];W[ok];B[oj];W[bp];B[ie];W[if];B[bq];W[fn];B[cr];W[bp];B[he];W[gf];B[bq];W[ae];B[bp];W[ca];B[em];W[in];B[hn];W[cm];B[hm];W[ck];B[cn];W[jn];B[io];W[ik];B[km];W[gl];B[gm];W[fm];B[el];W[jm];B[jl];W[kn];B[ln];W[kl];B[lm];W[il];B[jo];W[dm];B[dn];W[en];B[do];W[jk];B[ep];W[pb];B[ml];W[go];B[gn];W[nl];B[dk];W[dj];B[ml];W[oq];B[or];W[nl];B[jc];W[hf];B[ml];W[pr];B[ps];W[nl];B[jb];W[ge];B[ml];W[rb];B[qb];W[nl];B[bj];W[cj];B[pa];W[oa];B[qa];W[pc];B[qc];W[po];B[qr];W[ml];B[od];W[nb];B[bm])
            `,
          sgf_name: "Xie Ke vs Shin Jinseo",
          black_player: "Shin Jinseo",
          white_player: "Xie Ke",
          black_rank: "9p",
          white_rank: "9p",
          komi: 8,
          game_date: "2023-08-21 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886995/Seeder%20Data/Shin-Jinseo3_thumbnail_sykatb.png",
          suspended: false,
          result: "W+R",
        },

        // Game 8
        {
          user_id: 3,
          sgf_data: `(;FF[4] CA[UTF-8] GM[1] DT[2023-09-02] PC[OGS: https://online-go.com/game/56740614] GN[Friendly Match] PB[erikdeviking] PW[blammin] BR[6k] WR[5k] TM[120]OT[3x30 byo-yomi] RE[B+0.5] SZ[9] KM[5.5] RU[Japanese] ;B[ff] (;W[df] (;B[fc] (;W[dd] (;B[eg] (;W[gd] (;B[fd] (;W[gc] (;B[gb] (;W[hb] (;B[fb] (;W[hf] (;B[hg] (;W[gf] (;B[gg] (;W[ge] (;B[dg] (;W[cf] (;B[ee] (;W[cc] (;B[cg] (;W[bg] (;B[bh] (;W[bf] (;B[de] (;W[ce] (;B[ed] (;W[ha] (;B[dc] (;W[cb] (;B[cd] (;W[bd] (;B[db] (;W[ig] (;B[ih] (;W[if] (;B[hi] (;W[ah] (;B[bb] (;W[bc] (;B[ca] (;W[ab] (;B[ba] (;W[ae] (;B[ch] (;W[ac] (;B[ag] (;W[af] (;B[bi] (;W[fe] (;B[ef] (;W[dd] (;B[ic] (;W[ib] (;B[cd] (;W[da] (;B[ea] (;W[dd] (;B[hc] (;W[hd] (;B[cd] (;W[aa] (;B[da] (;W[dd] (;B[ga] (;W[id] (;B[cd] (;W[fh] (;B[fg] (;W[dd] (;B[ai] (;W[ag] (;B[cd] (;W[gh] (;B[hh] (;W[dd] (;B[] (;W[cd] (;B[] (;W[] ))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))`,
          sgf_name: "erikdeviking vs blammin",
          black_player: "erikdeviking",
          white_player: "blammin",
          black_rank: "6k",
          white_rank: "5k",
          komi: 5.5,
          game_date: "2023-09-02 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1694029192/qerzwfuss56al6d1y3tn.png",
          suspended: false,
          result: "Black + 0.5",
        },
        // Game 9
        {
          user_id: 3,
          sgf_data: `(;FF[4] CA[UTF-8] GM[1] DT[2023-09-01] PC[OGS: https://online-go.com/game/56701948] GN[Friendly Match] PB[erikdeviking] PW[dAsper] BR[6k] WR[7k] TM[30]OT[5x20 byo-yomi] RE[B+R] SZ[9] KM[5.5] RU[Japanese] ;B[ff] (;W[dg] (;B[eg] (;W[df] (;B[fc] (;W[dc] (;B[ed] (;W[dd] (;B[dh] (;W[ef] (;B[fg] (;W[ee] (;B[fe] (;W[ec] (;B[cg] (;W[fd] (;B[gd] (;W[gc] (;B[fb] (;W[hd] (;B[ed] (;W[gb] (;B[fd] (;W[he] (;B[cf] (;W[de] (;B[bd] (;W[bc] (;B[ac] (;W[cd] (;B[be] (;W[ab] (;B[bb] (;W[ad] (;B[cb] (;W[db] (;B[cc] (;W[ca] (;B[ac] (;W[eh] (;B[aa] (;W[ch] (;B[fh] (;W[di] (;B[bh] (;W[hg] (;B[fi] (;W[gh] (;B[ea] (;W[da] (;B[ba] (;W[bi] (;B[ah] (;W[ga] (;B[ei] (;W[fa] (;B[eb] (;W[dh] (;B[ce] )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))`,
          sgf_name: "erikdeviking vs dAsper",
          black_player: "erikdeviking",
          white_player: "dAsper",
          black_rank: "6k",
          white_rank: "7k",
          komi: 5.5,
          game_date: "2023-09-01 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1694029329/iiybzoialwlvgtrdvpie.png",
          suspended: false,
          result: "B+R",
        },
        // Game 10
        {
          user_id: 3,
          sgf_data: `(;FF[4] CA[UTF-8] GM[1] DT[2023-09-06] PC[OGS: https://online-go.com/game/56846957] GN[Vriendschappelijke Wedstrijd] PB[erikdeviking] PW[aizmaylov] BR[5k] WR[4k] TM[150]OT[5x60 byo-yomi] RE[B+R] SZ[13] KM[5.5] RU[Japanese] ;B[jj] (;W[dd] (;B[cj] (;W[jd] (;B[kh] (;W[kf] (;B[fk] (;W[jk] (;B[kk] (;W[ik] (;B[kl] (;W[ij] (;B[ji] (;W[ii] (;B[ih] (;W[gi] (;B[fi] (;W[hh] (;B[gj] (;W[ig] (;B[jh] (;W[fh] (;B[ei] (;W[eh] (;B[dh] (;W[dg] (;B[ch] (;W[cg] (;B[ce] (;W[cd] (;B[de] (;W[bg] (;B[eg] (;W[fg] (;B[ef] (;W[be] (;B[ed] (;W[dc] (;B[ec] (;W[bc] (;B[ff] (;W[hc] (;B[hg] (;W[hf] (;B[gg] (;W[jf] (;B[db] (;W[cb] (;B[fb] (;W[bi] (;B[bj] (;W[ci] (;B[di] (;W[bh] (;B[jb] (;W[jc] (;B[kc] (;W[ib] (;B[lb] (;W[ja] (;B[ld] (;W[kb] (;B[kd] (;W[la] (;B[lf] (;W[lg] (;B[mf] (;W[kg] (;B[mc] (;W[mg] (;B[le] (;W[li] (;B[lh] (;W[mh] (;B[lj] (;W[mj] (;B[mk] (;W[mi] (;B[kj] (;W[ml] (;B[lk] (;W[jl] (;B[gh] (;W[hi] (;B[jm] (;W[im] (;B[km] (;W[jg] (;B[hm] (;W[il] (;B[hl] (;W[ge] (;B[gc] (;W[gd] (;B[ca] (;W[ba] (;B[da] (;W[gb] (;B[ga] (;W[fc] (;B[ha] (;W[hb] (;B[fd] (;W[gc] (;B[fe] (;W[aj] (;B[ak] (;W[ai] (;B[bl] (;W[ia] (;B[eb] (;W[fa] (;B[ga] (;W[ha] (;B[gf] (;W[ke] (;B[mb] (;W[cf] (;B[df] (;W[ga] (;B[hj] )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))`,
          sgf_name: "erikdeviking vs aizmaylov",
          black_player: "erikdeviking",
          white_player: "aizmaylov",
          black_rank: "5k",
          white_rank: "4k",
          komi: 5.5,
          game_date: "2023-09-06 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1694029477/v6fhjbggnwyxsizbbeio.png",
          suspended: false,
          result: "B+R",
        },
        // Game 11 (DON'T CHANGE)
        {
          user_id: 3,
          sgf_data: `(;EV[46th Korean Myeongin, round 1]
            DT[2023-08-30]
            PB[Shin Jinseo]BR[9p]
            PW[Han Sangcho]WR[5p]
            KM[6.5]RE[B+R]
            SO[Go4Go.net]
            ;B[qd];W[dp];B[cd];W[qp];B[cq];W[cp];B[dq];W[fq];B[fr];W[pd];B[pc];W[qe];B[od];W[pe];B[qc];W[gr];B[er];W[gp];B[ep];W[eq];B[bp];W[bo];B[bq];W[cn];B[oq];W[lq];B[qi];W[ph];B[pi];W[oi];B[oj];W[qh];B[po];W[qo];B[pn];W[qm];B[pm];W[ql];B[pk];W[ni];B[nj];W[pq];B[mi];W[ng];B[mf];W[ec];B[oe];W[of];B[nf];W[og];B[mg];W[ri];B[hc];W[de];B[ce];W[df];B[bg];W[he];B[ie];W[hd];B[id];W[ic];B[jc];W[ib];B[jb];W[hb];B[gc];W[gb];B[hf];W[gd];B[pr];W[qr];B[eo];W[dn];B[jq];W[fn];B[hq];W[gq];B[pp];W[qq];B[jo];W[if];B[jf];W[ig];B[nr];W[ch];B[il];W[bh];B[cg];W[dg];B[db];W[in];B[eb];W[fb];B[jn];W[im];B[jm];W[hl];B[ik];W[hk];B[hj];W[ij];B[jj];W[ii];B[ih];W[ji];B[jg];W[kj];B[jl];W[hi];B[hg];W[ps];B[eh];W[fh];B[en];W[em];B[dm];W[dl];B[fm];W[cm];B[gn];W[fl];B[gh];W[gm];B[fi];W[gi];B[fg];W[mr];B[dh];W[mo];B[mm];W[ns];B[dd];W[ed];B[fj];W[gj];B[fe];W[ia];B[ck];W[qk];B[re];W[rf];B[rd];W[lk];B[mk];W[ja];B[lb];W[la];B[ma];W[ka];B[mc];W[bk];B[bj];W[bl];B[dj];W[sf];B[np];W[ln];B[lm];W[no];B[or];W[os];B[ho];W[li];B[fo];W[go];B[hn];W[hp];B[ip];W[hr];B[fm];W[hm];B[io];W[nm];B[nl];W[nn];B[lo];W[ko];B[pl];W[ll];B[ml];W[lp];B[kl];W[fn];B[kk];W[lj];B[lh])
            `,
          sgf_name: "Shin Jinseo vs Han Sangcho",
          black_player: "Shin Jinseo",
          white_player: "Han Sangcho",
          black_rank: "9p",
          white_rank: "5p",
          komi: 6.5,
          game_date: "2023-08-30 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886732/Seeder%20Data/Shin-Jinseo1_thumbnail_wldxal.png",
          suspended: false,
          result: "B+R",
        },
        // Arthur 67 move Fox game (sgf_id 23)
        {
          user_id: 3,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[7.50]TM[300] GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]C[SGF generated by KaTrain 1.12.3ㅤ​]RE[B+Resign]KTV[1.0]RL[0]RN[3]TC[3]TT[30] ;B[qd] ;W[dp] ;B[pq] ;W[dd] ;B[cc] ;W[dc] ;B[cd] ;W[ce] ;B[be] ;W[bf] ;B[cf] ;W[de] ;B[bg] ;W[bd] ;B[af] ;W[bc] ;B[nc] ;W[qo] ;B[ql] ;W[op] ;B[oq] ;W[np] ;B[mr] ;W[lq] ;B[mq] ;W[mp] ;B[lp] ;W[kq] ;B[lo] ;W[rq] ;B[qr]C[Move 31: B R2 Score: W+3.9 Win rate: W 71.1% Estimated point loss: 4.3 Predicted top move was S2 (B+0.5). PV: BS2 K4 O6 P6 P7 O7 Q6 P5 P8 R3 R2 M6 Move was #96 according to policy (0.00%). Top policy move was K4 (40.0%). ㅤ​] ;W[rr] ;B[lr] ;W[kr] ;B[nq]C[Move 35: B O3 Score: W+8.9 Win rate: W 87.0% Estimated point loss: 4.4 Predicted top move was J4 (W+4.2). PV: BJ4 K4 K5 J3 H4 H3 G3 G4 G2 J5 H5 L5 J6 M6 N5 L4 Move was #33 according to policy (0.03%). Top policy move was J4 (29.8%). ㅤ​] ;W[on] ;B[jp] ;W[iq] ;B[ip] ;W[hq] ;B[go] ;W[fp] ;B[ol] ;W[nm] ;B[mk] ;W[rd] ;B[re] ;W[qc] ;B[rc] ;W[pd] ;B[qe] ;W[rb] ;B[sd] ;W[pe] ;B[pc] ;W[oc] ;B[qb] ;W[nd] ;B[ob] ;W[od]C[Move 60: W P16 Score: W+5.4 Win rate: W 78.3% Estimated point loss: 4.8 Predicted top move was M7 (W+10.4). PV: WM7 K7 L8 K8 L9 K9 L10 N12 Move was #134 according to policy (0.01%). Top policy move was M7 (32.0%). ㅤ​] ;B[mc] ;W[md] ;B[ld] ;W[le] ;B[ke] ;W[kf]C[Move 66: W L14 Score: W+0.5 Win rate: W 55.3% Estimated point loss: 5.4 Predicted top move was M14 (W+6.0). PV: WM14 F5 E5 L14 M13 P13 L13 L16 M7 K7 L9 Move was #3 according to policy (1.72%). Top policy move was M14 (75.8%). ㅤ​] ;B[kd]) ",
          sgf_name: "Arthur Fox seeder game",
          black_player: "anning97",
          white_player: "fox opponent",
          black_rank: "3d",
          white_rank: "3d",
          komi: 7.5,
          game_date: "2023-08-30 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1697658286/pznbdvcfgyn7m9vopejc.png",
          suspended: false,
          result: "B+R",
        },
        // Arbyter73 game puzzles (includes one or two ladder/net problems) -> sgf_id 24 I think
        {
          user_id: 3,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[0.00]TM[300] PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00]RL[0]RN[1]TC[3]TT[30] ;B[pd] ;W[dp] ;B[pq] ;W[dc] ;B[fq] ;W[jp] ;B[cq] ;W[dq] ;B[cp] ;W[do] ;B[dr] ;W[er] ;B[cr] ;W[eq] ;B[cn] ;W[fp] ;B[de] ;W[ce] ;B[cf] ;W[cd] ;B[dg] ;W[fc] ;B[cj] ;W[cl] ;B[dm] ;W[dj] ;B[ck] ;W[dl] ;B[em] ;W[dk] ;B[ci] ;W[di] ;B[dh] ;W[gj] ;B[pn] ;W[nq] ;B[lq] ;W[lp] ;B[kp] ;W[pp] ;B[qp] ;W[op] (;B[mp] ;W[lo] ;B[mq] ;W[qq] (;B[pr] ;W[qr] (;B[or] ;W[nr] ;B[np] ;W[oq] ;B[ko] ;W[jq] ;B[kq] ;W[qo] ;B[oo] ;W[rp] ;B[jd] ;W[qf] ;B[qh] ;W[qc] ;B[qd] ;W[pc] ;B[od] ;W[rd] ;B[re] ;W[rc] ;B[rf] ;W[nc] ;B[me] ;W[lc] ;B[hl] ;W[gl] ;B[gm] ;W[fl] ;B[el] ;W[hk] ;B[il] ;W[fm] ;B[ik] ;W[ij] ;B[jj] ;W[gn] ;B[ii] ;W[hj] ;B[ih] ;W[ql] ;B[qm] ;W[rm] ;B[pl] ;W[qk] ;B[pk] ;W[qj] ;B[pj] ;W[qi] ;B[pi] ;W[rh] ;B[qg] ;W[jo] ;B[jn] ;W[in] ;B[jm] ;W[le] ;B[oc] ;W[ob] ;B[md] ;W[ld] ;B[lf] ;W[ke] ;B[kf] ;W[je] ;B[nb] ;W[mb] ;B[hd] ;W[ie] ;B[ge] ;W[ef] ;B[df] ;W[hf] ;B[ee] ;W[jg] ;B[kh] ;W[bo] ;B[co] ;W[bn] ;B[bm] ;W[cm] ;B[bl] ;W[dn] ;B[ek]C[E11 F11 ] (;W[ff] ;B[fe] (;W[fj] (;B[be] ;W[gf] ;B[id] ;W[bd] ;B[bf] ;W[rg] ;B[pf] ;W[hb] ;B[fh] ;W[fi] ;B[jr] ;W[ir] ;B[kr] ;W[hq] ;B[hn] ;W[hm] ;B[im] ;W[ho] ;B[qn] ;W[rn] ;B[po] ;W[jb] ;B[mc] ;W[na] ;B[nd] ;W[nb] ;B[kc] ;W[kb] ;B[ig] ;W[jf] ;B[he] ;W[if] ;B[sg] ;W[ri] ;B[sh] ;W[si] ;B[sf] ;W[mr] ;B[gc] ;W[gb] ;B[fd] ;W[ec] ;B[ad] ;W[ac] ;B[ae] ;W[bc] ;B[es] ;W[fs] ;B[ds] ;W[fr] ;B[ei] ;W[ej] ;B[eh] ;W[hc] ;B[gd] ;W[jc] ;B[kd] ;W[gh] ;B[jh] ;W[kg] ;B[lg] ;W[hi] ;B[gg] ;W[hg] ;B[fg] ;W[hh] ;B[dd] ;W[sd] ;B[is] ;W[hs] ;B[js] ;W[ls] ;B[lr] ;W[ms] ;B[ks] ;W[ic] ;B[qe]) (;B[ej] ;W[ei] ;B[fi] ;W[eh] ;B[fh] ;W[eg] ;B[gf])) (;W[ei] ;B[fi] ;W[eh] ;B[fh] ;W[eg] ;B[gf])) (;W[ei] ;B[fi] ;W[eh] ;B[fh] ;W[eg] ;B[ff])) (;B[nr] ;W[or] ;B[os] ;W[oq] ;B[ps] ;W[qs] ;B[ns] ;W[mr])) (;B[rq] ;W[qr] ;B[qo])) (;B[ko] ;W[qq] (;B[qo] ;W[rq]) (;B[rq] ;W[qr] ;B[qo] ;W[rr] (;B[mp]) (;B[jq]))) (;B[qr]) (;B[qq] ;W[ko] ;B[kq] ;W[mp] ;B[jq] ;W[ip] ;B[hq]))",
          sgf_name:
            "Arbyter73 game 5 game with at least one ladder / net problem",
          black_player: "arbyter73",
          white_player: "fox opponent",
          black_rank: "7k",
          white_rank: "7k",
          komi: 7.5,
          game_date: "2023-11-18 15:00:00.000",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1700363947/ipv131utyu36lp8xo0ll.png",
          suspended: false,
          result: "W+6.5",
        },
        {
          user_id: 1,
          sgf_data:
            "(;EV[46th Korean Myeongin, round 1]\n            DT[2023-08-30]\n            PB[Shin Jinseo]BR[9p]\n            PW[Han Sangcho]WR[5p]\n            KM[6.5]RE[B+R]\n            SO[Go4Go.net]\n            ;B[qd];W[dp];B[cd];W[qp];B[cq];W[cp];B[dq];W[fq];B[fr];W[pd];B[pc];W[qe];B[od];W[pe];B[qc];W[gr];B[er];W[gp];B[ep];W[eq];B[bp];W[bo];B[bq];W[cn];B[oq];W[lq];B[qi];W[ph];B[pi];W[oi];B[oj];W[qh];B[po];W[qo];B[pn];W[qm];B[pm];W[ql];B[pk];W[ni];B[nj];W[pq];B[mi];W[ng];B[mf];W[ec];B[oe];W[of];B[nf];W[og];B[mg];W[ri];B[hc];W[de];B[ce];W[df];B[bg];W[he];B[ie];W[hd];B[id];W[ic];B[jc];W[ib];B[jb];W[hb];B[gc];W[gb];B[hf];W[gd];B[pr];W[qr];B[eo];W[dn];B[jq];W[fn];B[hq];W[gq];B[pp];W[qq];B[jo];W[if];B[jf];W[ig];B[nr];W[ch];B[il];W[bh];B[cg];W[dg];B[db];W[in];B[eb];W[fb];B[jn];W[im];B[jm];W[hl];B[ik];W[hk];B[hj];W[ij];B[jj];W[ii];B[ih];W[ji];B[jg];W[kj];B[jl];W[hi];B[hg];W[ps];B[eh];W[fh];B[en];W[em];B[dm];W[dl];B[fm];W[cm];B[gn];W[fl];B[gh];W[gm];B[fi];W[gi];B[fg];W[mr];B[dh];W[mo];B[mm];W[ns];B[dd];W[ed];B[fj];W[gj];B[fe];W[ia];B[ck];W[qk];B[re];W[rf];B[rd];W[lk];B[mk];W[ja];B[lb];W[la];B[ma];W[ka];B[mc];W[bk];B[bj];W[bl];B[dj];W[sf];B[np];W[ln];B[lm];W[no];B[or];W[os];B[ho];W[li];B[fo];W[go];B[hn];W[hp];B[ip];W[hr];B[fm];W[hm];B[io];W[nm];B[nl];W[nn];B[lo];W[ko];B[pl];W[ll];B[ml];W[lp];B[kl];W[fn];B[kk];W[lj];B[lh])\n            ",
          game_date: "2023-08-30T15:00:00+00:00",
          sgf_name: "Shin Jinseo vs Han Sangcho",
          black_player: "Shin Jinseo",
          white_player: "Han Sangcho",
          black_rank: "9p",
          white_rank: "5p",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886732/Seeder%20Data/Shin-Jinseo1_thumbnail_wldxal.png",
          suspended: false,
        },
        {
          user_id: 1,
          sgf_data:
            "(;EV[9th Ing Cup, final 2]\n            DT[2023-08-23]\n            PB[Xie Ke]BR[9p]\n            PW[Shin Jinseo]WR[9p]\n            KM[7.5]RE[W+R]\n            SO[Go4Go.net]\n            ;B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq];B[qk];W[gk];B[qp];W[ij];B[ih];W[ki];B[kg];W[mh];B[ld];W[le];B[ke];W[kd];B[mg];W[je];B[nh];W[kf];B[lh];W[rp];B[rq];W[ol];B[mj];W[pj];B[qm];W[qe];B[re];W[no];B[oo];W[mp];B[nn];W[mo];B[mn];W[lk];B[ln];W[pe];B[oe];W[of];B[nf];W[mf];B[ng];W[pd];B[pc];W[qc];B[pf];W[qf];B[rd];W[pg];B[qb];W[qj];B[qg];W[qh];B[rg];W[rk];B[ql];W[mk];B[kj];W[lj];B[li];W[ji];B[jf];W[nj];B[kp];W[op];B[po];W[lq];B[nq];W[kq];B[om];W[ph];B[hd];W[hc];B[ge];W[nb];B[rf];W[pf];B[bp];W[bo];B[bq];W[cn];B[ej];W[ek];B[bg];W[bh];B[bf];W[mi];B[gj];W[hk];B[jm];W[hi];B[hh];W[gi];B[gh];W[eh];B[ic];W[id];B[kh];W[hj];B[jj];W[ii];B[hf];W[fh];B[ff];W[gc];B[ib];W[jc];B[lf];W[lg];B[jb];W[kb];B[lf];W[rc];B[rb];W[lg];B[cj];W[dj];B[lf];W[me];B[ke];W[ja];B[kl];W[ni];B[jq];W[jr];B[iq];W[nr];B[oq];W[ir];B[hr];W[mr];B[ch];W[bi];B[bm];W[go];B[gn];W[cm];B[ho];W[io];B[hp];W[ip];B[fp];W[jp];B[iq];W[jq];B[gp];W[eb];B[fl];W[fk];B[jh];W[iq];B[eo];W[en];B[em];W[dn];B[in];W[fn];B[ob];W[oa];B[pb];W[kf];B[fo];W[hm];B[cl];W[dl];B[ao];W[hn];B[ci];W[ck];B[bj];W[bk];B[ah];W[lg];B[ai];W[lf];B[bn];W[dh];B[db];W[fa];B[il];W[hl])\n            ",
          game_date: "2023-08-23T15:00:00+00:00",
          sgf_name: "Xie Ke vs Shin Jinseo",
          black_player: "Xie Ke",
          white_player: "Shin Jinseo",
          black_rank: "9p",
          white_rank: "9p",
          komi: 7.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886733/Seeder%20Data/Shin-Jinseo2_thumbnail_jebjvy.png",
          suspended: false,
        },
        {
          user_id: 1,
          sgf_data:
            "(;EV[9th Ing Cup, final 1]\n            DT[2023-08-21]\n            PB[Shin Jinseo]BR[9p]\n            PW[Xie Ke]WR[9p]\n            KM[8]RE[B+R]\n            SO[Go4Go.net]\n            ;B[pd];W[dd];B[pp];W[dq];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fg];B[cg];W[bc];B[eb];W[eh];B[dg];W[ci];B[gc];W[fh];B[ce];W[bd];B[bf];W[gd];B[hc];W[hd];B[bh];W[ic];B[hb];W[ib];B[ga];W[je];B[dp];W[eq];B[cp];W[cq];B[bq];W[br];B[bo];W[aq];B[bi];W[qf];B[re];W[qn];B[nq];W[rf];B[oc];W[qp];B[qq];W[rq];B[rr];W[rp];B[pq];W[on];B[pm];W[pn];B[qm];W[qj];B[pk];W[sr];B[rs];W[mn];B[pj];W[qi];B[pi];W[rd];B[qe];W[se];B[pf];W[cb];B[ab];W[pg];B[og];W[of];B[pe];W[oh];B[ph];W[qg];B[ng];W[nh];B[mh];W[mg];B[nf];W[mi];B[lh];W[ni];B[rc];W[rl];B[rm];W[rk];B[ml];W[li];B[om];W[mp];B[lr];W[op];B[rn];W[qo];B[mq];W[nl];B[nm];W[mm];B[nk];W[ll];B[ol];W[mk];B[nj];W[nl];B[ql];W[mf];B[ne];W[me];B[fl];W[nd];B[oe];W[nc];B[qh];W[rh];B[sg];W[sf];B[qd];W[ri];B[hk];W[fj];B[ml];W[bb];B[ea];W[nl];B[im];W[mj];B[oi];W[ij];B[gq];W[hj];B[ap];W[bp];B[sd];W[rg];B[bq];W[ar];B[lp];W[ob];B[lo];W[ia];B[ha];W[nn];B[fo];W[gr];B[fr];W[fq];B[hr];W[gp];B[hq];W[eo];B[er];W[bp];B[id];W[jd];B[bq];W[fp];B[dr];W[bp];B[ff];W[fe];B[bq];W[ok];B[oj];W[bp];B[ie];W[if];B[bq];W[fn];B[cr];W[bp];B[he];W[gf];B[bq];W[ae];B[bp];W[ca];B[em];W[in];B[hn];W[cm];B[hm];W[ck];B[cn];W[jn];B[io];W[ik];B[km];W[gl];B[gm];W[fm];B[el];W[jm];B[jl];W[kn];B[ln];W[kl];B[lm];W[il];B[jo];W[dm];B[dn];W[en];B[do];W[jk];B[ep];W[pb];B[ml];W[go];B[gn];W[nl];B[dk];W[dj];B[ml];W[oq];B[or];W[nl];B[jc];W[hf];B[ml];W[pr];B[ps];W[nl];B[jb];W[ge];B[ml];W[rb];B[qb];W[nl];B[bj];W[cj];B[pa];W[oa];B[qa];W[pc];B[qc];W[po];B[qr];W[ml];B[od];W[nb];B[bm])\n            ",
          game_date: "2023-08-21T15:00:00+00:00",
          sgf_name: "Xie Ke vs Shin Jinseo",
          black_player: "Shin Jinseo",
          white_player: "Xie Ke",
          black_rank: "9p",
          white_rank: "9p",
          komi: 8.0,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693886995/Seeder%20Data/Shin-Jinseo3_thumbnail_sykatb.png",
          suspended: false,
        },
        {
          user_id: 1,
          sgf_data:
            "(;EV[5th Mlily Cup, round 3]\n            DT[2023-08-06]\n            PB[Shin Jinseo]BR[9p]\n            PW[Li Xuanhao]WR[9p]\n            KM[7.5]RE[W+R]\n            SO[Go4Go.net]\n            ;B[qd];W[pp];B[cd];W[cp];B[fd];W[oc];B[pe];W[lc];B[qq];W[qp];B[pq];W[nq];B[nr];W[mq];B[mr];W[lq];B[qj];W[ep];B[cj];W[ch];B[di];W[dd];B[dc];W[cc];B[ec];W[bd];B[ce];W[be];B[cf];W[bf];B[cb];W[bc];B[cg];W[dh];B[bg];W[bh];B[ah];W[bj];B[bi];W[ci];B[ai];W[dj];B[ck];W[ei];B[eb];W[bk];B[cl];W[bl];B[cm];W[bm];B[cn];W[bn];B[fl];W[gk];B[gl];W[hk];B[hl];W[ik];B[eg];W[il];B[fo];W[fp];B[go];W[qh];B[nd];W[pi];B[nc];W[oq];B[or];W[pj];B[rq];W[nb];B[mb];W[pb];B[na];W[ob];B[mc];W[od];B[oe];W[qc];B[lf];W[mh];B[ng];W[jg];B[ql];W[pk];B[qn];W[on];B[ro];W[je];B[ld];W[eo];B[en];W[hq];B[im];W[jm];B[co];W[bo];B[do];W[dp];B[in];W[fg];B[ff];W[ef];B[gf];W[dg];B[ee];W[eh];B[df];W[lg];B[nh];W[ni];B[om];W[kf];B[nl];W[mf];B[nf];W[me];B[ne];W[jc];B[rc];W[rb];B[rd];W[pd];B[rg];W[lr];B[sb];W[ra];B[gg];W[qk];B[jp];W[iq];B[gp];W[gq];B[mi];W[nj];B[kl];W[jl];B[gi];W[hh];B[gh];W[fj];B[kk];W[mk];B[ml];W[km];B[lm];W[kj];B[jj];W[jk];B[lj];W[ki];B[mg];W[lh];B[lk];W[li];B[rl];W[rh];B[rf];W[mj];B[ll];W[dk];B[el];W[io];B[ho];W[fn];B[gn];W[rk];B[jo];W[hi];B[le];W[gc];B[ic];W[ib];B[hb];W[hc];B[id];W[jb];B[gb];W[hd];B[ig];W[ha];B[fb];W[if];B[ih];W[ii];B[hg];W[pl];B[pm];W[sl];B[jh];W[ji];B[sm];W[sk];B[rm];W[ip];B[ms];W[jn];B[lo];W[nn];B[gj];W[fk];B[mo];W[ls];B[kc];W[kd];B[he];W[ie];B[kb];W[pn];B[lp];W[no];B[op];W[ln];B[mn];W[kn];B[ol];W[np];B[po];W[oo];B[qo];W[oh];B[eg];W[aj];B[ag];W[ef];B[jq];W[jr];B[eg];W[dl];B[dm];W[ef];B[ek];W[ej];B[eg];W[fh])",
          game_date: "2023-08-06T15:00:00+00:00",
          sgf_name: "Shin Jinseo vs Li Xuanhao",
          black_player: "Shin Jinseo",
          white_player: "Li Xuanhao",
          black_rank: "9p",
          white_rank: "9p",
          komi: 7.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693955474/Seeder%20Data/Shin-Jinseo4_thumbnail_xdtivw.png",
          suspended: false,
        },
        {
          user_id: 1,
          sgf_data:
            "(;EV[5th Mlily Cup, round 2]\n            DT[2023-08-04]\n            PB[Fan Tingyu]BR[9p]\n            PW[Shin Jinseo]WR[9p]\n            KM[7.5]RE[W+R]\n            SO[Go4Go.net]\n            ;B[pd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[de];B[bf];W[qc];B[qd];W[pc];B[od];W[nb];B[qk];W[mc];B[po];W[jq];B[cq];W[dq];B[cp];W[do];B[bn];W[pi];B[qh];W[qi];B[ph];W[oi];B[ri];W[rj];B[rh];W[ol];B[hd];W[mq];B[qm];W[cf];B[bg];W[hc];B[id];W[ic];B[ip];W[iq];B[hp];W[hq];B[jd];W[cb];B[bb];W[ig];B[kg];W[ji];B[im];W[li];B[ld];W[ko];B[qj];W[md];B[le];W[gl];B[kj];W[jj];B[kl];W[kk];B[ll];W[jl];B[jm];W[km];B[kp];W[jp];B[kn];W[lo];B[ln];W[mn];B[mm];W[nn];B[lk];W[jk];B[jo];W[io];B[jn];W[op];B[pp];W[lj];B[ho];W[db];B[ce];W[jc];B[gd];W[gc];B[cr];W[pl];B[ql];W[hn];B[gn];W[hm];B[in];W[fp];B[il];W[hk];B[nk];W[nl];B[mk];W[mh];B[me];W[oh];B[ok];W[oo];B[pn];W[on];B[dm];W[dl];B[cm];W[em];B[en];W[go];B[oj];W[el];B[ik];W[ij];B[gg];W[gh];B[fh];W[hh];B[nr];W[or];B[oq];W[nq];B[kc];W[kb];B[lc];W[lb];B[kh];W[ki];B[ck];W[of];B[eg];W[dh];B[ei];W[df];B[ch];W[ff];B[fg];W[di];B[ej];W[dg];B[rc];W[rb];B[rd];W[gf];B[dk];W[ne];B[hf];W[hg];B[if];W[kf];B[ef];W[fe];B[mg];W[jf])\n            ",
          game_date: "2023-08-04T15:00:00+00:00",
          sgf_name: "Fan Tingyu vs Shin Jinseo",
          black_player: "Fan Tingyu",
          white_player: "Shin Jinseo",
          black_rank: "9p",
          white_rank: "9p",
          komi: 7.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693955660/Seeder%20Data/Shin-Jinseo5_thumbnail_grp4np.png",
          suspended: false,
        },
        {
          user_id: 1,
          sgf_data:
            "(;EV[5th Mlily Cup, round 1]\n            DT[2023-08-03]\n            PB[Shin Jinseo]BR[9p]\n            PW[Zhou Hongyu]WR[7p]\n            KM[7.5]RE[B+3.5]\n            SO[Go4Go.net]\n            ;B[qd];W[dp];B[pp];W[dd];B[cc];W[dc];B[cd];W[de];B[bf];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jd];B[nq];W[fq];B[cg];W[mp];B[gp];W[mq];B[np];W[mo];B[pn];W[im];B[gq];W[fp];B[hn];W[in];B[jp];W[om];B[pm];W[pq];B[qq];W[pr];B[or];W[fn];B[kq];W[mr];B[qr];W[ko];B[fr];W[er];B[gr];W[og];B[hd];W[dg];B[dh];W[eh];B[ei];W[fh];B[df];W[eg];B[ef];W[ce];B[be];W[cf];B[ff];W[cb];B[bb];W[eb];B[ch];W[ba];B[je];W[ke];B[jf];W[id];B[he];W[fi];B[kd];W[kc];B[ld];W[lc];B[bc];W[gb];B[ej];W[fj];B[hg];W[cj];B[ek];W[cl];B[dl];W[cm];B[hb];W[ib];B[hk];W[ii];B[hi];W[hj];B[ij];W[hh];B[gj];W[ih];B[gh];W[gi];B[gg];W[hj];B[gc];W[ha];B[hi];W[fk];B[fl];W[hj];B[ic];W[jc];B[hi];W[gk];B[hj];W[gl];B[hl];W[fm];B[hm];W[kh];B[ki];W[jj];B[lh];W[ji];B[kg];W[kj];B[li];W[ho];B[go];W[ip];B[fo];W[el];B[gn];W[iq];B[dq];W[cq];B[dr];W[ep];B[cp];W[co];B[bp];W[cr];B[es];W[bq];B[en];W[dm];B[do];W[bo];B[mk];W[ll];B[ph];W[ap];B[eq];W[pe];B[qe];W[pg];B[qh];W[hr];B[gs];W[ml];B[ol];W[nk];B[ok];W[cs];B[ds];W[le];B[ni];W[di];B[bi];W[ob];B[hc];W[fc];B[pb];W[nr];B[oq];W[qg];B[rg];W[mj];B[nh];W[nb];B[lj];W[lk];B[jk];W[kk];B[jl];W[jm];B[bk];W[bj];B[aj];W[pa];B[qa];W[oa];B[qb];W[nm];B[on];W[rh];B[ri];W[ie];B[if];W[ge];B[nn];W[mn];B[nl];W[rf];B[sh];W[gd];B[hf];W[hs];B[mm];W[lm];B[nf];W[ng];B[mf];W[mg];B[lf];W[oe];B[eo];W[cp];B[em];W[dk];B[an];W[bl];B[al];W[ci];B[bg];W[oh];B[oi];W[jh];B[lg];W[nj];B[oj];W[no];B[oo];W[ns];B[os];W[il];B[ik];W[nm];B[ab];W[ca];B[ee];W[ed];B[gm];W[fl];B[kl];W[km];B[hp];W[io];B[hq];W[ir];B[am];W[ck];B[ak];W[me];B[ne];W[bn];B[dn];W[pd];B[gf];W[fd];B[aa];W[jb];B[kf];W[md];B[mi];W[mk];B[ai];W[ao];B[fg];W[dj];B[fe];W[bm];B[mh];W[cn];B[pf];W[of];B[ig];W[jg];B[om];W[mm])\n            ",
          game_date: "2023-08-04T15:00:00+00:00",
          sgf_name: "Shin Jinseo vs Fan Tingyu",
          black_player: "Shin Jinseo",
          white_player: "Zhou Hongyu",
          black_rank: "9p",
          white_rank: "7p",
          komi: 7.5,
          result: "B+3.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693955875/Seeder%20Data/Shin-Jinseo6_thumbnail_zrejkg.png",
          suspended: false,
        },
        // ********************* 120 SGFs manually grabbed and uploaded from OGS, Fox, and KGS ***************** NOTE: some potential puzzles fail to generate, due to bug (now fixed) with "Pass" being the right move or follow up sequence, as well as AB AW conversion failing on a small amount of puzzles.
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-25]\nPC[OGS: https://online-go.com/game/59224077]\nGN[Friendly Match]\nPB[Michael]\nPW[Rego8512]\nBR[2d]\nWR[4d]\nTM[300]OT[5x40 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dc]\n(;B[pq]\n(;W[dp]\n(;B[po]\n(;W[jq]\n(;B[ce]\n(;W[ci]\n(;B[ed]\n(;W[ec]\n(;B[fd]\n(;W[gc]\n(;B[eh]\n(;W[ej]\n(;B[cq]\n(;W[cp]\n(;B[dq]\n(;W[eq]\n(;B[er]\n(;W[fq]\n(;B[fr]\n(;W[gr]\n(;B[bp]\n(;W[bo]\n(;B[bq]\n(;W[cn]\n(;B[gq]\n(;W[hr]\n(;B[ep]\n(;W[fp]\n(;B[eo]\n(;W[fo]\n(;B[en]\n(;W[cl]\n(;B[fn]\n(;W[hp]\n(;B[gn]\n(;W[ho]\n(;B[im]\n(;W[gd]\n(;B[ch]\n(;W[bh]\n(;B[di]\n(;W[cj]\n(;B[dj]\n(;W[dk]\n(;B[ek]\n(;W[el]\n(;B[fk]\n(;W[fl]\n(;B[hn]\n(;W[cg]\n(;B[dg]\n(;W[ei]\n(;B[dh]\n(;W[gk]\n(;B[fj]\n(;W[fi]\n(;B[gj]\n(;W[fh]\n(;B[fg]\n(;W[df]\n(;B[eg]\n(;W[hj]\n(;B[gi]\n(;W[gh]\n(;B[hi]\n(;W[gg]\n(;B[bg]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-25T00:00:00+00:00",
          sgf_name: "Michael vs Rego8512",
          black_player: "Michael",
          white_player: "Rego8512",
          black_rank: "2d",
          white_rank: "4d",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999075/ahebp16wunn566hztuz3.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]KM[6.50]TM[900]OT[5x30 byo-yomi]\nPW[paul64]PB[com4willuh]WR[5k]BR[5k]DT[2023-09-17]PC[The KGS Go Server at http://www.gokgs.com/]C[paul64 [5k\\]: hi gg\ncom4willuh [5k\\]: hi\n]RE[B+Resign]\n;B[dc]BL[888.964]\n;W[qd]WL[897.398]\n;B[cp]BL[877.35]\n;W[pq]WL[896.169]\n;B[od]BL[863.118]\n;W[mq]WL[893.96]\n;B[qc]BL[837.882]\n;W[pd]WL[888.213]\n;B[pc]BL[835.959]\n;W[oe]WL[887.72]\n;B[nd]BL[811.665]\n;W[ne]WL[886.074]\n;B[md]BL[803.005]\n;W[rc]WL[883.792]\n;B[pe]BL[789.799]\n;W[qe]WL[878.027]\n;B[pf]BL[788.193]\n;W[qf]WL[872.052]\n;B[pg]BL[786.104]\n;W[ng]WL[868.992]\n;B[qg]BL[779.451]\n;W[rg]WL[862.247]\n;B[rh]BL[770.571]\n;W[rf]WL[860.601]\n;B[rb]BL[758.208]\n;W[qh]WL[858.027]\n;B[qi]BL[740.179]\n;W[ri]WL[841.882]\n;B[ph]BL[728.048]\n;W[sh]WL[840.079]\n;B[rj]BL[714.632]\n;W[qh]WL[837.769]\n;B[pj]BL[680.193]\n;W[sd]WL[822.481]\n;B[rh]BL[650.287]\n;W[ep]WL[814.913]\n;B[si]BL[637.181]\n;W[sg]WL[807.678]\n;B[sb]BL[620.003]\n;W[se]WL[795.096]\n;B[rd]BL[586.171]\n;W[sc]WL[791.663]\n;B[eq]BL[573.498]\n;W[fq]WL[785.148]\n;B[dq]BL[561.929]\n;W[gp]WL[781.894]\n;B[cn]BL[551.801]\n;W[jq]WL[778.857]\n;B[qo]BL[538.895]\n;W[pm]WL[776.194]\n;B[oo]BL[528.101]\n;W[qk]WL[774.105]\n;B[nm]BL[518.51]\n;W[ok]WL[771.219]\n;B[pk]BL[505.701]\n;W[ol]WL[769.117]\n;B[mk]BL[493.068]\n;W[nj]WL[762.125]\n;B[mj]BL[484.464]\n;W[ni]WL[748.51]\n;B[mh]BL[470.856]\n;W[nh]WL[745.555]\n;B[lf]BL[451.853]\n;W[mg]WL[741.186]\n;B[lg]BL[434.33]\n;W[mi]WL[738.981]\n;B[li]BL[421.831]\n;W[lh]WL[735.277]\n;B[kh]BL[419.114]\n;W[lj]WL[734.595]\n;B[ki]BL[392.19]\n;W[ml]WL[732.329]\n;B[nl]BL[329.744]\n;W[nk]WL[723.549]\n;B[lk]BL[327.452]\n;W[ll]WL[721.76]\n;B[kk]BL[310.076]\n;W[nn]WL[715.473]\n;B[mm]BL[286.568]\n;W[mn]WL[706.774]\n;B[lm]BL[272.796]\n;W[om]WL[701.464]\n;B[on]BL[263.986]\n;W[ln]WL[699.588]\n;B[km]BL[259.926]\n;W[rn]WL[693.321]\n;B[ro]BL[249.511]\n;W[ql]WL[689.545]\n;B[qn]BL[240.593]\n;W[qj]WL[684.643]\n;B[rk]BL[215.319]C[paul64 [5k\\]: thx\ncom4willuh [5k\\]: ty\n])\n",
          game_date: "2023-09-17T00:00:00+00:00",
          sgf_name: "com4willuh vs paul64",
          black_player: "com4willuh",
          white_player: "paul64",
          black_rank: "5k",
          white_rank: "5k",
          komi: 6.5,
          result: "B+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998479/uebgdvdsobijaqv1gkkd.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]\nPW[pagal]PB[paul64]WR[4k]BR[5k]DT[2023-09-23]PC[The KGS Go Server at http://www.gokgs.com/]C[paul64 [5k\\]: Hi gt\npagal [4k\\]: Hi, gg\n]RE[W+Resign]\n;B[pd]BL[1493.822]\n;W[dp]WL[1498.558]\n;B[pq]BL[1490.485]\n;W[dd]WL[1496.101]\n;B[qk]BL[1487.351]\n;W[op]WL[1494.098]\n;B[pp]BL[1483.313]\n;W[po]WL[1490.918]\n;B[oo]BL[1477.037]\n;W[np]WL[1485.928]\n;B[qo]BL[1473.861]\n;W[pn]WL[1484.278]\n;B[qn]BL[1471.544]\n;W[on]WL[1477.969]\n;B[nr]BL[1465.438]\n;W[ok]WL[1471.465]\n;B[cf]BL[1461.699]\n;W[dg]WL[1469.034]\n;B[cg]BL[1453.517]\n;W[df]WL[1467.311]\n;B[ci]BL[1446.115]\n;W[di]WL[1463.352]\n;B[dj]BL[1442.464]\n;W[ch]WL[1461.202]\n;B[bh]BL[1439.541]\n;W[dh]WL[1459.332]\n;B[bj]BL[1431.524]\n;W[ej]WL[1457.397]\n;B[dk]BL[1429.028]\n;W[ek]WL[1456.3]\n;B[cn]BL[1423.997]\n;W[dl]WL[1454.186]\n;B[cl]BL[1421.721]\n;W[dm]WL[1450.621]\n;B[cm]BL[1419.004]\n;W[dn]WL[1448.944]\n;B[fl]BL[1415.95]\n;W[co]WL[1445.709]\n;B[eo]BL[1412.277]\n;W[en]WL[1442.124]\n;B[do]BL[1407.497]\n;W[fo]WL[1438.999]\n;B[gq]BL[1399.445]\n;W[ep]WL[1433.337]\n;B[lq]BL[1395.761]\n;W[mq]WL[1431.572]\n;B[mr]BL[1392.807]\n;W[lp]WL[1429.462]\n;B[kq]BL[1391.107]\n;W[kp]WL[1427.234]\n;B[mo]BL[1388.241]\n;W[no]WL[1424.276]\n;B[jp]BL[1381.405]\n;W[jo]WL[1418.758]\n;B[mp]BL[1375.524]\n;W[mn]WL[1415.095]\n;B[nq]BL[1372.498]\n;W[lo]WL[1412.88]\n;B[ip]BL[1360.534]\n;W[io]WL[1409.964]\n;B[mc]BL[1355.431]\n;W[nd]WL[1406.354]\n;B[nc]BL[1352.616]\n;W[od]WL[1405.057]\n;B[pc]BL[1348.748]\n;W[oc]WL[1403.62]\n;B[ob]BL[1346.672]\n;W[md]WL[1402.863]\n;B[lc]BL[1343.627]\n;W[ld]WL[1401.363]\n;B[jc]BL[1340.104]\n;W[jd]WL[1399.228]\n;B[id]BL[1337.777]\n;W[kc]WL[1397.715]\n;B[je]BL[1333.591]\n;W[kd]WL[1395.765]\n;B[ic]BL[1328.37]\n;W[kb]WL[1393.217]\n;B[ec]BL[1323.463]\n;W[dc]WL[1388.275]\n;B[eb]BL[1319.068]\n;W[ha]WL[1382.717]\n;B[hb]BL[1316.058]\n;W[ia]WL[1380.662]\n;B[ja]BL[1313.036]\n;W[jb]WL[1378.21]\n;B[ga]BL[1310.66]\n;W[ib]WL[1375.577]\n;B[gc]BL[1307.323]\n;W[gd]WL[1362.962]\n;B[fd]BL[1302.164]\n;W[ge]WL[1360.744]\n;B[if]BL[1296.927]\n;W[he]WL[1355.972]\n;B[ie]BL[1294.46]\n;W[ed]WL[1328.166]\n;B[db]BL[1287.008]\n;W[fa]WL[1316.041]\n;B[gb]BL[1284.168]\n;W[cb]WL[1307.025]\n;B[fe]BL[1272.091]\n;W[ff]WL[1304.757]\n;B[gf]BL[1258.896]\n;W[ee]WL[1293.926]\n;B[fc]BL[1253.082]\n;W[hf]WL[1292.89]\n;B[gg]BL[1236.625]\n;W[hg]WL[1291.019]\n;B[ig]BL[1232.028]\n;W[hh]WL[1281.384]\n;B[lf]BL[1228.069]\n;W[kg]WL[1278.446]\n;B[ih]BL[1225.136]\n;W[lg]WL[1271.45]\n;B[hi]BL[1217.985]\n;W[gh]WL[1269.319]\n;B[ki]BL[1213.85]\n;W[jh]WL[1258.988]\n;B[gi]BL[1204.391]\n;W[fg]WL[1256.51]\n;B[ji]BL[1202.169]\n;W[ij]WL[1254.17]\n;B[kh]BL[1198.633]\n;W[jg]WL[1251.786]\n;B[ii]BL[1196.403]\n;W[mi]WL[1242.407]\n;B[mh]BL[1188.86]\n;W[mg]WL[1236.388]\n;B[mf]BL[1180.799]\n;W[ng]WL[1233.239]\n;B[mj]BL[1177.656]\n;W[lh]WL[1224.173]\n;B[li]BL[1173.083]\n;W[ni]WL[1216.809]\n;B[ik]BL[1170.367]\n;W[hk]WL[1206.708]\n;B[jj]BL[1164.965]\n;W[jk]WL[1204.325]\n;B[hj]BL[1161.039]\n;W[kk]WL[1200.897]\n;B[gk]BL[1155.22]\n;W[hl]WL[1198.633]\n;B[il]BL[1152.642]\n;W[hm]WL[1195.859]\n;B[fi]BL[1141.609]\n;W[ei]WL[1187.57]\n;B[lk]BL[1132.209]\n;W[km]WL[1182.817]\n;B[ll]BL[1129.354]\n;W[jm]WL[1179.951]\n;B[nj]BL[1102.821]\n;W[oj]WL[1160.684]\n;B[oi]BL[1098.809]\n;W[nh]WL[1157.551]\n;B[nl]BL[1096.75]\n;W[nk]WL[1154.4]\n;B[lm]BL[1091.906]\n;W[mm]WL[1142.388]\n;B[ol]BL[1074.313]\n;W[ml]WL[1131.428]\n;B[mk]BL[1071.082]\n;W[pi]WL[1127.681]\n;B[nf]BL[1042.145]\n;W[of]WL[1122.929]\n;B[oe]BL[1036.438]\n;W[ne]WL[1101.739]\n;B[pe]BL[1028.663]\n;W[kf]WL[1088.881]\n;B[og]BL[1012.361]\n;W[pf]WL[1084.013]\n;B[pg]BL[1006.946]\n;W[qf]WL[1075.483]\n;B[qg]BL[998.406]\n;W[rf]WL[1064.677]\n;B[oh]BL[992.843]\n;W[pj]WL[1049.064]\n;B[pl]BL[981.243]\n;W[rh]WL[1031.983]\n;B[ln]BL[957.711]\n;W[mq]WL[1029.746]\n;B[mp]BL[952.057]\n;W[mo]WL[1028.239]\n;B[kn]BL[947.287]\n;W[ko]WL[1026.472]\n;B[im]BL[942.269]\n;W[jn]WL[1020.529]\n;B[hn]BL[929.94]\n;W[gm]WL[1003.752]\n;B[in]BL[893.187]\n;W[ho]WL[988.408]\n;B[gn]BL[889.297]\n;W[fm]WL[975.946]\n;B[go]BL[880.112]\n;W[hp]WL[968.457]\n;B[gp]BL[870.976]\n;W[hq]WL[966.302]\n;B[ir]BL[862.376]\n;W[hr]WL[961.743]\n;B[nm]BL[854.278]\n;W[nn]WL[954.311]\n;B[gr]BL[850.191]\n;W[jq]WL[930.412]\n;B[jr]BL[836.912]\n;W[iq]WL[926.217]\n;B[hs]BL[834.613]\n;W[qb]WL[901.474]\n;B[pb]BL[818.252]\n;W[rc]WL[896.833]\n;B[rd]BL[814.969]\n;W[sd]WL[892.204]\n;B[qc]BL[809.898]\n;W[rb]WL[879.057]\n;B[re]BL[797.008]\n;W[qe]WL[873.371]\n;B[rg]BL[794.19]\n;W[se]WL[867.987]\n;B[qd]BL[751.832]\n;W[sf]WL[865.768]\n;B[sg]BL[747.409]\n;W[sc]WL[864.03]\n;B[ri]BL[737.991]\n;W[rj]WL[857.254]\n;B[qa]BL[704.067]\n;W[le]WL[848.602]\n;B[qi]BL[667.922]\n;W[qj]WL[845.473]C[paul64 [5k\\]: gg\npaul64 [5k\\]: thx\npagal [4k\\]: Thanks for the game\n])\n",
          game_date: "2023-09-23T00:00:00+00:00",
          sgf_name: "paul64 vs pagal",
          black_player: "paul64",
          white_player: "pagal",
          black_rank: "5k",
          white_rank: "4k",
          komi: 0.5,
          result: "W+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998485/ez0qeeygrvvwuz8mhsy6.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]KM[0.50]TM[1500]OT[5x30 byo-yomi]\nPW[paul64]PB[Apeq]WR[5k]BR[6k]DT[2023-11-13]PC[The KGS Go Server at http://www.gokgs.com/]C[paul64 [5k\\]: Hi gg\n]RE[W+Resign]\n;B[cc]BL[1498.723]\n;W[pd]WL[1497.632]C[Apeq [6k\\]: hi\n]\n;B[jj]BL[1494.698]\n;W[pq]WL[1494.662]\n;B[cq]BL[1492.588]\n;W[eq]WL[1489.902]\n;B[cj]BL[1490.377]\n;W[do]WL[1486.99]\n;B[jc]BL[1485.19]\n;W[ce]WL[1473.234]\n;B[dl]BL[1479.424]\n;W[ch]WL[1462.472]\n;B[ci]BL[1477.409]\n;W[dh]WL[1456.95]\n;B[bd]BL[1475.443]\n;W[be]WL[1454.121]\n;B[bh]BL[1472.478]\n;W[bg]WL[1451.942]\n;B[ai]BL[1471.344]\n;W[dc]WL[1438.251]\n;B[db]BL[1468.726]\n;W[cd]WL[1435.46]\n;B[bb]BL[1465.924]\n;W[ad]WL[1428.92]\n;B[bc]BL[1464.625]\n;W[ec]WL[1426.151]\n;B[ee]BL[1462.311]\n;W[eb]WL[1417.313]\n;B[ca]BL[1460.07]\n;W[ea]WL[1413]\n;B[da]BL[1456.342]\n;W[ef]WL[1396.109]\n;B[fe]BL[1450.127]\n;W[dd]WL[1393.563]\n;B[df]BL[1443.783]\n;W[fh]WL[1371.738]\n;B[ff]BL[1436.144]\n;W[eg]WL[1369.148]\n;B[de]BL[1434.917]\n;W[hc]WL[1360.683]\n;B[ib]BL[1432.437]\n;W[hg]WL[1352.411]\n;B[he]BL[1430.637]\n;W[id]WL[1349.86]\n;B[if]BL[1427.779]\n;W[je]WL[1345.717]\n;B[jg]BL[1424.464]\n;W[ek]WL[1337.11]\n;B[em]BL[1420.598]\n;W[cg]WL[1319.671]\n;B[di]BL[1403.872]\n;W[ei]WL[1311.856]\n;B[gi]BL[1397.389]\n;W[gh]WL[1302.577]\n;B[hi]BL[1395.105]\n;W[ld]WL[1282.825]\n;B[lb]BL[1391.086]\n;W[mb]WL[1277.483]\n;B[lc]BL[1388.365]\n;W[mc]WL[1273.868]\n;B[hb]BL[1386.721]\n;W[gb]WL[1266.947]\n;B[kd]BL[1381.229]\n;W[ke]WL[1263.974]\n;B[jd]BL[1371.727]\n;W[la]WL[1236.537]\n;B[kb]BL[1369.166]\n;W[ie]WL[1228.739]\n;B[hf]BL[1365.516]\n;W[me]WL[1204.297]\n;B[gl]BL[1335.13]\n;W[cm]WL[1199.912]\n;B[bo]BL[1332.124]\n;W[co]WL[1184.43]\n;B[bn]BL[1329.979]\n;W[dm]WL[1180.53]\n;B[el]BL[1327.954]\n;W[bm]WL[1169.233]\n;B[cp]BL[1324.154]\n;W[gk]WL[1161.48]\n;B[hm]BL[1320.37]\n;W[dk]WL[1156.866]\n;B[ck]BL[1310.495]\n;W[cl]WL[1154.507]\n;B[ej]BL[1305.679]\n;W[fj]WL[1147.593]\n;B[dj]BL[1300.115]\n;W[fk]WL[1146.109]\n;B[fi]BL[1298.223]\n;W[eh]WL[1143.355]\n;B[hk]BL[1295.336]\n;W[jp]WL[1129.086]\n;B[eo]BL[1293.557]\n;W[dp]WL[1124.06]\n;B[hq]BL[1287.718]\n;W[fo]WL[1120.957]\n;B[en]BL[1284.116]\n;W[gq]WL[1109.146]\n;B[ho]BL[1279.368]\n;W[bk]WL[1102.084]\n;B[bj]BL[1266.011]\n;W[ak]WL[1093.911]\n;B[gj]BL[1262.853]\n;W[dr]WL[1071.085]\n;B[cr]BL[1257.992]\n;W[am]WL[1065.852]\n;B[fr]BL[1250.111]\n;W[gr]WL[1055.646]\n;B[hr]BL[1247.263]\n;W[gs]WL[1045.746]\n;B[ep]BL[1232.664]\n;W[dq]WL[1037.77]\n;B[fq]BL[1219.406]\n;W[fp]WL[1029.542]\n;B[gp]BL[1217.751]\n;W[fs]WL[1016.299]\n;B[ds]BL[1212.531]\n;W[es]WL[995.047]\n;B[cs]BL[1206.413]\n;W[ap]WL[984.334]\n;B[bp]BL[1204.062]\n;W[ar]WL[981.969]\n;B[bq]BL[1190.331]\n;W[aq]WL[978.582]\n;B[an]BL[1187.253]\n;W[go]WL[966.19]\n;B[hp]BL[1183.677]\n;W[er]WL[959.59]\n;B[fq]BL[1179.333]\n;W[cn]WL[926.821]\n;B[gn]BL[1175.036]\n;W[bs]WL[911.046]\n;B[fn]BL[1136.66]\n;W[pn]WL[901.493]\n;B[nq]BL[1134.612]\n;W[mo]WL[884.486]\n;B[op]BL[1131.712]\n;W[pp]WL[882.468]\n;B[on]BL[1129.508]\n;W[om]WL[876.556]\n;B[nn]BL[1126.924]\n;W[oo]WL[864.522]\n;B[no]BL[1125.011]\n;W[po]WL[863.255]\n;B[nm]BL[1123.822]\n;W[ol]WL[861.462]\n;B[mk]BL[1121.167]\n;W[nj]WL[853.027]\n;B[mj]BL[1119.55]\n;W[ni]WL[850.024]\n;B[nr]BL[1115.128]\n;W[pg]WL[838.96]\n;B[nl]BL[1112.406]\n;W[nk]WL[836.269]\n;B[lh]BL[1109.418]\n;W[kg]WL[832.275]\n;B[kh]BL[1106.933]\n;W[mg]WL[828.163]\n;B[ih]BL[1105.115]\n;W[ja]WL[818.49]\n;B[ka]BL[1099.452]\n;W[ha]WL[805.168]\n;B[jb]BL[1097.045]\n;W[ma]WL[799.275]\n;B[qg]BL[1093.591]\n;W[qh]WL[787.954]\n;B[qf]BL[1091.226]\n;W[re]WL[775.741]\n;B[rh]BL[1088.946]\n;W[qi]WL[773.314]\n;B[ri]BL[1088.079]\n;W[rj]WL[772.071]\n;B[pf]BL[1082.657]\n;W[rf]WL[769.845]\n;B[qj]BL[1078.969]\n;W[rk]WL[766.666]\n;B[ph]BL[1075.138]\n;W[pi]WL[764.708]\n;B[og]BL[1073.405]\n;W[oh]WL[762.229]\n;B[rg]BL[1066.267]\n;W[ng]WL[740.128]\n;B[nd]BL[1060.76]\n;W[md]WL[736.445]\n;B[oe]BL[1051.851]\n;W[nf]WL[722.699]\n;B[nc]BL[1048.019]\n;W[ob]WL[717.178]\n;B[nb]BL[1044.54]\n;W[na]WL[700.436]\n;B[oc]BL[1041.632]\n;W[pc]WL[696.062]\n;B[pb]BL[1038.82]\n;W[qb]WL[671.421]\n;B[oa]BL[1036.45]\n;W[rc]WL[661.487]C[paul64 [5k\\]: thx\n])\n",
          game_date: "2023-11-13T00:00:00+00:00",
          sgf_name: "Apeq vs paul64",
          black_player: "Apeq",
          white_player: "paul64",
          black_rank: "6k",
          white_rank: "5k",
          komi: 0.5,
          result: "W+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998491/ruliwprfgld6l1s9fbqf.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x30 byo-yomi]\nPW[goperaw]PB[vtiger]WR[3d]BR[1d]DT[2023-11-09]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd][dp]RE[W+Resign]\n;W[qp]WL[297.251]C[goperaw [3d\\]: hi\n]\n;B[dd]BL[297.174]C[goperaw [3d\\]: hf\nvtiger [1d\\]: hi\n]\n;W[nq]WL[293.804]\n;B[dj]BL[293.342]\n;W[pj]WL[290.915]\n;B[ql]BL[290.327]\n;W[ol]WL[279.692]\n;B[qi]BL[285.083]\n;W[qj]WL[276.792]\n;B[rj]BL[282.888]\n;W[pi]WL[270.63]\n;B[ri]BL[275.998]\n;W[qh]WL[266.62]\n;B[qg]BL[270.306]\n;W[rh]WL[263.993]\n;B[rg]BL[267.123]\n;W[ph]WL[260.615]\n;B[rk]BL[265.181]\n;W[sg]WL[254.051]\n;B[si]BL[262.308]\n;W[sh]WL[241.691]\n;B[po]BL[258.174]\n;W[rm]WL[234.138]\n;B[qo]BL[252.643]\n;W[qm]WL[231.904]\n;B[pm]BL[247.899]\n;W[pl]WL[228.531]\n;B[rp]BL[244.471]\n;W[pn]WL[203.917]\n;B[oo]BL[230.609]\n;W[pq]WL[164.52]\n;B[np]BL[222.523]\n;W[rq]WL[161.394]\n;B[rn]BL[214.661]\n;W[sp]WL[157.888]\n;B[ro]BL[195.05]\n;W[mq]WL[148.715]\n;B[om]BL[183.02]\n;W[rl]WL[140.332]\n;B[oq]BL[173.906]\n;W[or]WL[138.361]\n;B[pp]BL[167.776]\n;W[qq]WL[136.425]\n;B[nm]BL[132.709]\n;W[mp]WL[133.817]\n;B[mo]BL[128.991]\n;W[lo]WL[132.181]\n;B[ln]BL[122.483]\n;W[mn]WL[130.952]\n;B[nn]BL[120.42]\n;W[mm]WL[127.774]\n;B[nl]BL[115.981]\n;W[no]WL[115.491]\n;B[nj]BL[70.283]\n;W[fq]WL[97.358]\n;B[hq]BL[64.353]\n;W[fo]WL[94.784]\n;B[ho]BL[62.324]\n;W[dn]WL[92.477]\n;B[en]BL[59.951]\n;W[eo]WL[90.62]\n;B[do]BL[57.238]\n;W[cn]WL[86.367]\n;B[em]BL[55.066]\n;W[dq]WL[57.247]\n;B[bo]BL[38.185]\n;W[cq]WL[43.724]\n;B[bq]BL[16.818]\n;W[bn]WL[40.143]\n;B[mo]BL[30]OB[3]\n;W[ko]WL[26.52]\n;B[bp]BL[30]OB[3]\n;W[br]WL[15.885]\n;B[ar]BL[30]OB[3]\n;W[cr]WL[10.636]\n;B[cl]BL[30]OB[3]\n;W[ao]WL[0.528]\n;B[co]BL[30]OB[3]\n;W[ep]WL[30]OW[5]\n;B[bm]BL[30]OB[3]\n;W[cp]WL[30]OW[5]\n;B[ll]BL[30]OB[3]\n;W[gm]WL[30]OW[5]\n;B[dm]BL[30]OB[3]\n;W[aq]WL[30]OW[5]\n;B[hm]BL[30]OB[3]\n;W[hl]WL[30]OW[5]\n;B[gn]BL[30]OB[3]\n;W[im]WL[30]OW[5]\n;B[hn]BL[30]OB[3]\n;W[fn]WL[30]OW[5]\n;B[fm]BL[30]OB[3]\n;W[gl]WL[30]OW[5]\n;B[il]BL[30]OB[3]\n;W[jm]WL[30]OW[5]\n;B[ik]BL[30]OB[3]\n;W[gj]WL[30]OW[5]\n;B[hj]BL[30]OB[3]\n;W[fk]WL[30]OW[5]\n;B[gi]BL[30]OB[3]\n;W[fi]WL[30]OW[5]\n;B[gk]BL[30]OB[3]\n;W[hk]WL[30]OW[5]\n;B[fl]BL[30]OB[3]\n;W[gk]WL[30]OW[5]\n;B[ek]BL[30]OB[2]\n;W[fj]WL[30]OW[5]\n;B[hi]BL[30]OB[2]\n;W[fh]WL[30]OW[5]\n;B[ff]BL[30]OB[2]\n;W[gg]WL[30]OW[5]\n;B[he]BL[30]OB[2]\n;W[ig]WL[30]OW[5]\n;B[jh]BL[30]OB[2]\n;W[jg]WL[30]OW[5]\n;B[jp]BL[30]OB[2]\n;W[jo]WL[30]OW[5]\n;B[kq]BL[30]OB[2]\n;W[no]WL[30]OW[5]\n;B[gr]BL[30]OB[2]\n;W[mo]WL[30]OW[5]\n;B[qn]BL[30]OB[2]\n;W[qk]WL[30]OW[5]\n;B[kl]BL[30]OB[2]\n;W[mk]WL[30]OW[5]\n;B[ml]BL[30]OB[2]\n;W[nk]WL[30]OW[5]\n;B[lj]BL[30]OB[2]\n;W[kh]WL[30]OW[5]\n;B[ji]BL[30]OB[2]\n;W[ke]WL[30]OW[5]\n;B[ld]BL[30]OB[2]\n;W[kd]WL[30]OW[5]\n;B[dg]BL[30]OB[2]\n;W[lc]WL[30]OW[5]\n;B[mc]BL[30]OB[2]\n;W[md]WL[30]OW[5]\n;B[le]BL[30]OB[2]\n;W[lf]WL[30]OW[5]\n;B[me]BL[30]OB[2]\n;W[nd]WL[30]OW[5]\n;B[ne]BL[30]OB[2]\n;W[nc]WL[30]OW[5]\n;B[mb]BL[30]OB[2]\n;W[nb]WL[30]OW[5]\n;B[kc]BL[30]OB[1]\n;W[lb]WL[30]OW[5]\n;B[kb]BL[30]OB[1]\n;W[ma]WL[30]OW[5]\n;B[ic]BL[30]OB[1]\n;W[oe]WL[30]OW[5]\n;B[mg]BL[30]OB[1]\n;W[ng]WL[30]OW[5]\n;B[of]BL[30]OB[1]\n;W[nf]WL[30]OW[5]\n;B[qc]BL[30]OB[1]\n;W[rd]WL[30]OW[5]\n;B[rc]BL[30]OB[1]\n;W[pb]WL[30]OW[5]\n;B[re]BL[30]OB[1]\n;W[pe]WL[30]OW[5]\n;B[sd]BL[30]OB[1]\n;W[qe]WL[30]OW[5]\n;B[qd]BL[30]OB[1]\n;W[rf]WL[30]OW[5]\n;B[jf]BL[30]OB[1]\n;W[if]WL[30]OW[5]\n;B[je]BL[30]OB[1]\n;W[jd]WL[30]OW[5]\n;B[ie]BL[30]OB[1]\n;W[kf]WL[30]OW[5]\n;B[mh]BL[30]OB[1]\n;W[mf]WL[30]OW[5]\n;B[dc]BL[30]OB[1]\n;W[dh]WL[30]OW[5]\n;B[ch]BL[30]OB[1]\n;W[id]WL[30]OW[5]\n;B[hd]BL[30]OB[1]\n;W[gf]WL[30]OW[5]\n;B[hc]BL[30]OB[1]\n;W[cg]WL[30]OW[5]\n;B[eh]BL[30]OB[1]\n;W[df]WL[30]OW[5]\n;B[eg]BL[30]OB[1]\n;W[di]WL[30]OW[5]\n;B[ci]BL[30]OB[1]\n;W[fe]WL[30]OW[5]\n;B[ei]BL[30]OB[1]\n;W[ge]WL[30]OW[5]\n;B[fg]BL[30]OB[1]\n;W[gh]WL[30]OW[5]\n;B[ee]BL[30]OB[1]\n;W[fc]WL[30]OW[5]\n;B[fd]BL[30]OB[1]\n;W[gd]WL[30]OW[5]\n;B[gc]BL[30]OB[1]\n;W[fb]WL[30]OW[5]\n;B[ed]BL[30]OB[1]\n;W[gb]WL[30]OW[5]\n;B[hb]BL[30]OB[1]\n;W[jc]WL[30]OW[5]\n;B[eb]BL[30]OB[3]\n;W[hf]WL[30]OW[5]C[vtiger [1d\\]: ty\ngoperaw [3d\\]: tx\n])\n",
          game_date: "2023-11-09T00:00:00+00:00",
          sgf_name: "vtiger vs goperaw",
          black_player: "vtiger",
          white_player: "goperaw",
          black_rank: "1d",
          white_rank: "3d",
          komi: 0.5,
          result: "W+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998496/wii7plvzzp5mcmzlm8y3.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]HA[2]KM[0.50]TM[3000]OT[4x60 byo-yomi]\nPW[goperaw]PB[durian1893]WR[3d]BR[1d]DT[2023-11-10]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd][dp]RE[W+Forfeit]\n;W[qp]WL[2996.968]C[goperaw [3d\\]: hi\n]\n;B[dc]BL[2994.445]\n;W[ce]WL[2994.591]\n;B[dh]BL[2989.683]\n;W[df]WL[2990.074]\n;B[bd]BL[2982.152]\n;W[cc]WL[2975.027]\n;B[cd]BL[2979.73]\n;W[dd]WL[2971.114]\n;B[ed]BL[2978.227]\n;W[de]WL[2970.372]\n;B[cb]BL[2974.894]\n;W[ec]WL[2969.556]\n;B[db]BL[2972.013]\n;W[be]WL[2967.99]\n;B[bc]BL[2962.705]\n;W[fd]WL[2966.93]\n;B[op]BL[2955]\n;W[eb]WL[2964.974]\n;B[qq]BL[2948.405]\n;W[rq]WL[2963.046]\n;B[pq]BL[2945.828]\n;W[qm]WL[2959.426]\n;B[rr]BL[2940.716]\n;W[qj]WL[2958.225]\n;B[mc]BL[2929.994]\n;W[cn]WL[2952.791]\n;B[fq]BL[2923.235]\n;W[ck]WL[2950.941]\n;B[bp]BL[2889.399]\n;W[kc]WL[2935.591]\n;B[qe]BL[2883.8]\n;W[nc]WL[2931.596]\n;B[oc]BL[2872.766]\n;W[nb]WL[2925.725]\n;B[nd]BL[2870.338]\n;W[mb]WL[2923.963]\n;B[md]BL[2866.333]\n;W[ob]WL[2922.369]\n;B[pb]BL[2864.021]\n;W[qc]WL[2921.147]\n;B[pc]BL[2858.68]\n;W[oe]WL[2920.495]\n;B[of]BL[2852.441]\n;W[nf]WL[2881.179]\n;B[pf]BL[2832.37]\n;W[ke]WL[2862.258]\n;B[ci]BL[2806.035]\n;W[dj]WL[2846.203]\n;B[fh]BL[2802.613]\n;W[gj]WL[2842.985]\n;B[hh]BL[2798.893]\n;W[gg]WL[2838.806]\n;B[fi]BL[2786.469]\n;W[fj]WL[2835.274]\n;B[hi]BL[2783.966]\n;W[if]WL[2818.281]\n;B[ik]BL[2777.026]\n;W[di]WL[2804.48]\n;B[dg]BL[2738.93]\n;W[fg]WL[2801.132]\n;B[ei]BL[2716.24]\n;W[eg]WL[2796.587]\n;B[eh]BL[2713.366]\n;W[hl]WL[2790.55]\n;B[il]BL[2709.839]\n;W[hm]WL[2779.256]\n;B[fl]BL[2683.052]\n;W[en]WL[2759.694]\n;B[ej]BL[2620.147]\n;W[ek]WL[2755.221]\n;B[fk]BL[2617.114]\n;W[el]WL[2747.449]\n;B[fm]BL[2547.217]\n;W[fn]WL[2731.721]\n;B[gk]BL[2533.522]\n;W[ho]WL[2715.526]\n;B[hk]BL[2518.525]\n;W[hq]WL[2698.341]\n;B[kq]BL[2508.985]\n;W[qg]WL[2671.288]\n;B[ea]BL[2481.276]\n;W[fa]WL[2665.359]\n;B[da]BL[2473.202]\n;W[gb]WL[2657.476]\n;B[rf]BL[2461.735]\n;W[ro]WL[2624.001]\n;B[sq]BL[2455.765]\n;W[rg]WL[2576.77]\n;B[ng]BL[2429.789]\n;W[ne]WL[2564.475]\n;B[mg]BL[2354.194]\n;W[lf]WL[2553.203]\n;B[od]BL[2347.154]\n;W[qf]WL[2537.135]\n;B[re]BL[2335.945]\n;W[le]WL[2527.013]\n;B[pe]BL[2330.592]\n;W[bo]WL[2504.754]\n;B[co]BL[2324.413]\n;W[bn]WL[2487.347]\n;B[cp]BL[2305.317]\n;W[fp]WL[2464.501]\n;B[gq]BL[2299.805]\n;W[gp]WL[2446.796]\n;B[ep]BL[2294.903]\n;W[jq]WL[2436.556]\n;B[kp]BL[2278.738]\n;W[ch]WL[2431.32]\n;B[cg]BL[2272.963]\n;W[bh]WL[2428.483]\n;B[bf]BL[2239.433]\n;W[bg]WL[2423.518]\n;B[cf]BL[2227.779]\n;W[af]WL[2421.718]\n;B[ad]BL[2214.04]\n;W[ae]WL[2419.872]\n;B[ph]BL[2193.043]\n;W[qi]WL[2413.077]\n;B[dm]BL[2179.833]\n;W[em]WL[2407.402]\n;B[dn]BL[2177.081]\n;W[oj]WL[2390.07]\n;B[rp]BL[2170.172]\n;W[om]WL[2378.328]\n;B[mj]BL[2116.178]\n;W[jh]WL[2362.991]\n;B[qo]BL[2101.783]\n;W[qn]WL[2354.742]\n;B[pp]BL[2098.78]\n;W[jj]WL[2340.238]\n;B[im]BL[2063.89]\n;W[in]WL[2332.685]\n;B[ki]BL[2055.8]\n;W[ji]WL[2325.496]\n;B[kk]BL[2036.841]\n;W[kr]WL[2317.522]\n;B[lr]BL[2032.867]\n;W[jr]WL[2314.192]\n;B[cl]BL[2017.984]\n;W[bl]WL[2309.285]\n;B[sg]BL[1990.501]\n;W[rh]WL[2301.978]\n;B[mq]BL[1966.538]\n;W[kj]WL[2296.596]\n;B[lj]BL[1961.317]\n;W[jk]WL[2273.514]\n;B[kl]BL[1954.401]\n;W[lh]WL[2265.884]\n;B[li]BL[1947.843]\n;W[kh]WL[2252.707]\n;B[oa]BL[1937.258]\n;W[lb]WL[2240.538]\n;B[jp]BL[1856.22]\n;W[hr]WL[2231.524]\n;B[ip]BL[1849.964]\n;W[eq]WL[2217.374]\n;B[er]BL[1840.668]\n;W[fr]WL[2215.623]\n;B[dq]BL[1837.857]\n;W[gr]WL[2214.437]\n;B[eq]BL[1835.41]\n;W[hp]WL[2213.124]\n;B[ao]BL[1820.329]\n;W[dl]WL[2205.096]\n;B[cm]BL[1814.761]\n;W[bm]WL[2198.622]\n;B[do]BL[1812.792]\n;W[an]WL[2194.069]\n;B[ap]BL[1808.823]\n;W[ml]WL[2182.879]\n;B[mm]BL[1767.842]\n;W[lm]WL[2177.873]\n;B[nm]BL[1749.299]\n;W[nl]WL[2166.123]\n;B[on]BL[1743.006]\n;W[jl]WL[2159.816]\n;B[jm]BL[1732.443]\n;W[km]WL[2157.727]\n;B[jn]BL[1727.393]\n;W[ni]WL[2141.846]C[goperaw [3d\\]: tx\n])\n",
          game_date: "2023-11-10T00:00:00+00:00",
          sgf_name: "durian1893 vs goperaw",
          black_player: "durian1893",
          white_player: "goperaw",
          black_rank: "1d",
          white_rank: "3d",
          komi: 0.5,
          result: "W+Forfeit",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998502/hr3rrzxpfq9w6sydwblc.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]HA[3]KM[0.50]TM[1800]OT[5x30 byo-yomi]\nPW[goperaw]PB[akira74]WR[3d]BR[1k]DT[2023-11-16]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd][dp][pp]RE[W+Resign]\n;W[cd]WL[1797.482]C[goperaw [3d\\]: hi\nakira74 [1k\\]: hi\n]\n;B[fc]BL[1784.102]\n;W[dc]WL[1787.774]\n;B[jc]BL[1771.284]\n;W[hc]WL[1773.388]\n;B[hd]BL[1756.798]\n;W[id]WL[1762.151]\n;B[ic]BL[1752.513]\n;W[gd]WL[1761.427]\n;B[he]BL[1747.988]\n;W[gc]WL[1760.133]\n;B[ge]BL[1743.194]\n;W[fd]WL[1758.601]\n;B[je]BL[1737.493]\n;W[kd]WL[1749.759]\n;B[jd]BL[1732.366]\n;W[qq]WL[1738.64]\n;B[pq]BL[1719.435]\n;W[qp]WL[1737.785]\n;B[po]BL[1704.779]\n;W[rn]WL[1735.809]\n;B[qr]BL[1684.843]\n;W[rr]WL[1733.423]\n;B[ro]BL[1675.716]\n;W[qo]WL[1724.373]\n;B[qn]BL[1672.675]\n;W[rp]WL[1721.78]\n;B[rm]BL[1668.62]\n;W[pn]WL[1720.1]\n;B[qm]BL[1663.571]\n;W[on]WL[1717.602]\n(;B[or]BL[1657.097]\n;W[qs]WL[1704.792]\n;B[pr]BL[1636.772]\n;W[so]WL[1702.708]\n;B[no]BL[1590.382]\n;W[pl]WL[1699.986]\n;B[qj]BL[1574.391]\n;W[mm]WL[1692.493]\n;B[lo]BL[1569.657]\n;W[rk]WL[1666.89]\n;B[qk]BL[1548.613]\n;W[rj]WL[1665.188]\n;B[ql]BL[1500.475]\n;W[qi]WL[1663.227]\n;B[oj]BL[1463.937]\n;W[pi]WL[1659.391]\n;B[nk]BL[1449.413]\n;W[ol]WL[1653.517]\n;B[pj]BL[1445.157]\n;W[km]WL[1637.659]\n;B[pg]BL[1423.725]\n;W[oi]WL[1597.949]\n;B[ni]BL[1419.354]\n;W[nh]WL[1596.281]\n;B[mh]BL[1400.085]\n;W[mi]WL[1591.827]\n;B[nj]BL[1395.802]\n;W[og]WL[1589.774]\n;B[pf]BL[1385.567]\n;W[oe]WL[1572.047]\n;B[pe]BL[1372.405]\n;W[mg]WL[1562.081]\n;B[lh]BL[1367.09]\n;W[me]WL[1559.867]\n;B[rh]BL[1356.551]\n;W[ri]WL[1558.037]\n;B[ll]BL[1327.465]\n;W[mn]WL[1542.175]\n;B[kp]BL[1310.424]\n;W[np]WL[1514.366]\n;B[mo]BL[1292.297]\n;W[kn]WL[1502.588]\n;B[lg]BL[1280.826]\n;W[lf]WL[1498.447]\n;B[li]BL[1223.566]\n;W[nc]WL[1488.166]\n;B[of]BL[1211.015]\n;W[nf]WL[1485.713]\n;B[ph]BL[1194.428]\n;W[oh]WL[1483.525]\n;B[nd]BL[1182.999]\n;W[md]WL[1479.776]\n;B[oc]BL[1178.076]\n;W[mb]WL[1471.283]\n;B[lc]BL[1169.889]\n;W[kc]WL[1465.866]\n;B[kb]BL[1154.953]\n;W[lb]WL[1461.384]\n;B[ke]BL[1149.562]\n;W[ld]WL[1459.747]\n;B[cn]BL[1120.591]\n;W[fe]WL[1410.921]\n;B[gg]BL[1113.734]\n;W[eg]WL[1404.874]\n;B[ch]BL[1083.941]\n;W[di]WL[1388.034]\n;B[cj]BL[1073.101]\n;W[kg]WL[1382.055]\n;B[jh]BL[1040.646]\n;W[kf]WL[1364.687]\n;B[ji]BL[1006.046]\n;W[if]WL[1359.871]\n;B[jf]BL[992.27]\n;W[jg]WL[1358.251]\n;B[ig]BL[988.065]\n;W[hg]WL[1356.739]\n;B[ih]BL[980.992]\n;W[hf]WL[1355.449]\n;B[gf]BL[894.074]\n;W[hh]WL[1353.934]\n;B[gi]BL[868.436]\n;W[gh]WL[1342.432]\n;B[fh]BL[863.328]\n;W[hi]WL[1340.756]\n;B[hj]BL[857.46]\n;W[fi]WL[1333.24]\n;B[gj]BL[852.919]\n;W[fg]WL[1331.644]\n;B[ie]BL[831.298]\n;W[eh]WL[1328.668]\n;B[ii]BL[818.609]\n;W[fh]WL[1326.966]\n;B[io]BL[751.286]\n;W[kk]WL[1313.569]\n;B[lk]BL[740.866]\n;W[hm]WL[1256.856]\n;B[kl]BL[705.97]\n;W[jl]WL[1253.052]\n;B[in]BL[688.188]\n;W[im]WL[1246.799]\n;B[fm]BL[656.56]\n;W[fl]WL[1219.528]\n;B[fn]BL[617.573]\n;W[gl]WL[1205.47]\n;B[ek]BL[595.124]\n;W[el]WL[1198.774]\n;B[dk]BL[589.699]\n;W[fj]WL[1183.88]\n;B[fk]BL[582.84]\n;W[gk]WL[1182.739]\n;B[jk]BL[482.813]\n;W[ij]WL[1169.38]\n;B[jj]BL[478.41]\n;W[ik]WL[1162.221]\n;B[ib]BL[430.521]\n;W[ka]WL[1145.711]\n;B[ja]BL[425.869]\n;W[jb]WL[1144.1]\n;B[jn]BL[397.855]\n;W[jm]WL[1136.919]\n;B[kb]BL[393.627]\n;W[ob]WL[1124.858]\n;B[pb]BL[367.575]\n;W[jb]WL[1121.737]\n;B[il]BL[320.344]\n;W[hl]WL[1109.225]\n;B[kb]BL[312.351]\n;W[qc]WL[1086.691]\n;B[la]BL[270.267]\n;W[pc]WL[1080.42]\n;B[qd]BL[239.417]\n;W[rc]WL[1074.234]\n;B[rd]BL[235.123]\n;W[rg]WL[1069.072]\n;B[qh]BL[220.188]\n;W[sh]WL[1065.225]\n;B[rf]BL[216.059]\n;W[si]WL[950.08]\n;B[qg]BL[197.827]\n;W[sg]WL[947.025]\n;B[od]BL[194.305]\n;W[ne]WL[941.209]\n;B[oa]BL[184.736]\n;W[nb]WL[938.525]\n;B[rb]BL[179.682]\n;W[qb]WL[936.108]\n;B[qa]BL[175.883]\n;W[pa]WL[933.247]\n;B[ci]BL[57.981]\n;W[ra]WL[916.007]\n;B[cf]BL[34.852]\n;W[dq]WL[906.499]\n;B[cp]BL[26.92]\n;W[cq]WL[898.098]\n;B[er]BL[20.577]\n;W[eq]WL[894.557]\n;B[fr]BL[17.221]\n;W[fq]WL[891.488]\n;B[gr]BL[5.658]\n;W[gq]WL[886.472]\n;B[hq]BL[30]OB[5]\n;W[hp]WL[883.203]\n;B[go]BL[30]OB[5]\n;W[ip]WL[866.355]\n;B[iq]BL[30]OB[5]\n;W[jp]WL[860.843]\n;B[jq]BL[30]OB[5]\n;W[gp]WL[831.329]\n;B[ko]BL[30]OB[5]\n;W[ho]WL[828.569]\n;B[hn]BL[30]OB[5]\n;W[gn]WL[825.037]\n;B[gm]BL[30]OB[5]\n;W[eo]WL[815.367]\n;B[en]BL[30]OB[5]\n;W[dn]WL[805.266]\n;B[do]BL[30]OB[5]\n;W[dm]WL[803.482]\n;B[ep]BL[30]OB[5]\n;W[jo]WL[801.48]\n;B[gn]BL[30]OB[5]\n;W[em]WL[799.84]\n;B[fo]BL[30]OB[5]\n;W[fp]WL[798.619]\n;B[eo]BL[30]OB[5]\n;W[bp]WL[797.9]\n;B[co]BL[30]OB[5]\n;W[cm]WL[797.202]C[goperaw [3d\\]: tx\n])\n(;B[oq]BL[1617.797]))\n",
          game_date: "2023-11-16T00:00:00+00:00",
          sgf_name: "akira74 vs goperaw",
          black_player: "akira74",
          white_player: "goperaw",
          black_rank: "1k",
          white_rank: "3d",
          komi: 0.5,
          result: "W+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998508/jqb7x4uw1ubg0viv7013.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]KM[0.50]TM[600]OT[5x30 byo-yomi]\nPW[goperaw]PB[winkgs]WR[3d]BR[2d]DT[2023-12-01]PC[The KGS Go Server at http://www.gokgs.com/]C[winkgs [2d\\]: hi\ngoperaw [3d\\]: hi\n]RE[W+Resign]\n;B[pd]BL[592.535]\n;W[dc]WL[597.175]\n;B[do]BL[574.76]\n;W[qq]WL[590.449]\n;B[df]BL[571.069]\n;W[fd]WL[585.83]\n;B[cj]BL[567.758]\n;W[cq]WL[583.465]\n;B[eq]BL[565.01]\n;W[co]WL[577.704]\n;B[cn]BL[562.091]\n;W[dp]WL[575.918]\n;B[ep]BL[559.9]\n;W[bn]WL[573.303]\n;B[dn]BL[557.827]\n;W[bm]WL[572.07]\n;B[pp]BL[555.363]\n;W[qp]WL[569.38]\n;B[po]BL[553.132]\n;W[or]WL[568.346]\n;B[nq]BL[541.79]\n;W[oq]WL[561.481]\n;B[np]BL[539.086]\n;W[op]WL[554.21]\n;B[oo]BL[535.732]\n;W[no]WL[553.119]\n;B[nr]BL[532.014]\n;W[qo]WL[548.929]\n;B[nn]BL[524.899]\n;W[mo]WL[546.269]\n;B[lp]BL[523.062]\n;W[on]WL[531.377]\n;B[pn]BL[518.737]\n;W[om]WL[527.568]\n;B[pm]BL[516.21]\n;W[ol]WL[522.166]\n;B[mm]BL[507.963]\n;W[lo]WL[514.568]\n;B[ko]BL[503.937]\n;W[ln]WL[497.972]\n;B[ll]BL[488.292]\n;W[lm]WL[475.734]\n;B[ml]BL[482.904]\n;W[kp]WL[469.362]\n;B[lq]BL[465.419]\n;W[jo]WL[461.806]\n;B[kq]BL[461.574]\n;W[jp]WL[457.976]\n;B[jq]BL[459.043]\n;W[pl]WL[454.941]\n;B[rn]BL[453.917]\n;W[qm]WL[427.329]\n;B[qn]BL[448.584]\n;W[rm]WL[425.014]\n;B[ro]BL[446.083]\n;W[rp]WL[423.602]\n;B[jn]BL[431.672]\n;W[in]WL[415.969]\n;B[jm]BL[426.68]\n;W[kn]WL[414.151]\n;B[km]BL[423.935]\n;W[iq]WL[405.367]\n;B[ir]BL[416.598]\n;W[hq]WL[402.19]\n;B[hr]BL[414.142]\n;W[im]WL[400.579]\n;B[il]BL[410.153]\n;W[hl]WL[399.16]\n;B[ik]BL[402.26]\n;W[gm]WL[393.464]\n;B[hk]BL[397.172]\n;W[gq]WL[390.304]\n;B[gr]BL[392.498]\n;W[eo]WL[386.829]\n;B[ho]BL[385.315]\n;W[go]WL[383.42]\n;B[fo]BL[371.564]\n;W[en]WL[377.781]\n;B[gn]BL[365.218]\n;W[fn]WL[362.867]\n;B[gp]BL[361.435]\n;W[io]WL[360.834]\n;B[ip]BL[355.507]\n;W[fl]WL[340.317]\n;B[fj]BL[326.903]\n;W[jc]WL[316.312]\n;B[qi]BL[308.572]\n;W[qk]WL[312.047]\n;B[oj]BL[302.435]\n;W[nc]WL[305.53]\n;B[nd]BL[298.039]\n;W[md]WL[301.922]\n;B[ne]BL[296.022]\n;W[pc]WL[300.627]\n;B[qc]BL[293.243]\n;W[oc]WL[299.18]\n;B[qd]BL[291.107]\n;W[me]WL[297.672]\n;B[mf]BL[288.845]\n;W[lf]WL[296.025]\n;B[le]BL[285.203]\n;W[ke]WL[291.579]\n;B[ld]BL[281.184]\n;W[mc]WL[289.878]\n;B[lg]BL[267.644]\n;W[kf]WL[287.248]\n;B[kg]BL[266.12]\n;W[ri]WL[274.454]\n;B[rj]BL[259.897]\n;W[pi]WL[261.893]\n;B[rh]BL[251.554]\n;W[qh]WL[255.872]\n;B[si]BL[246.942]\n;W[qj]WL[253.651]\n;B[ph]BL[244.131]\n;W[ri]WL[250.805]\n;B[mp]BL[227.92]\n;W[hp]WL[248.833]\n;B[qi]BL[224.162]\n;W[qg]WL[219.911]\n;B[pj]BL[218.403]\n;W[ri]WL[217.113]\n;B[mn]BL[207.215]\n;W[ko]WL[212.45]\n;B[qi]BL[204.517]\n;W[nf]WL[199.461]\n;B[oi]BL[196.04]\n;W[mg]WL[179.788]\n;B[pg]BL[192.111]\n;W[hn]WL[165.374]\n;B[rk]BL[174.116]\n;W[rl]WL[157.035]\n;B[mh]BL[162.205]\n;W[nh]WL[153.842]\n;B[mi]BL[158.07]\n;W[jg]WL[146.267]\n;B[jh]BL[153.644]\n;W[ih]WL[144.911]\n;B[ig]BL[149.982]\n;W[jf]WL[143.137]\n;B[ji]BL[147.042]\n;W[hh]WL[140.23]\n;B[gf]BL[140.115]\n;W[hf]WL[136.193]\n;B[ge]BL[135.384]\n;W[hc]WL[133.449]\n;B[cc]BL[121.464]\n;W[dd]WL[127.56]\n;B[cd]BL[117.008]\n;W[ce]WL[126.302]\n;B[de]BL[113.713]\n;W[be]WL[116.897]\n;B[db]BL[111.309]\n;W[cb]WL[71.741]\n;B[fc]BL[101.608]\n;W[eb]WL[54.263]\n;B[gd]BL[97.021]\n;W[gc]WL[21.87]\n;B[ed]BL[89.814]\n;W[ec]WL[20.479]\n;B[fe]BL[88.117]\n;W[fb]WL[18.781]\n;B[ie]BL[81.758]\n;W[if]WL[3.972]\n;B[id]BL[77.472]\n;W[ic]WL[30]OW[5]\n;B[gg]BL[71.083]\n;W[hg]WL[30]OW[5]\n;B[sp]BL[62.883]\n;W[sq]WL[30]OW[5]\n;B[sn]BL[52.562]\n;W[sm]WL[30]OW[5]\n;B[cr]BL[22.98]\n;W[br]WL[30]OW[5]\n;B[dr]BL[21.611]\n;W[bs]WL[30]OW[5]\n;B[bp]BL[15.75]\n;W[cp]WL[30]OW[5]\n;B[em]BL[3.906]\n;W[fm]WL[30]OW[5]\n;B[dl]BL[1.195]\n;W[dm]WL[30]OW[5]C[winkgs [2d\\]: thx\ngoperaw [3d\\]: tx\n])\n",
          game_date: "2023-12-01T00:00:00+00:00",
          sgf_name: "winkgs vs goperaw",
          black_player: "winkgs",
          white_player: "goperaw",
          black_rank: "2d",
          white_rank: "3d",
          komi: 0.5,
          result: "W+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998513/xmwqgrql2gk9jdavdgjn.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]HA[3]KM[0.50]TM[1800]OT[5x30 byo-yomi]\nPW[goperaw]PB[aahja]WR[4d]BR[1d]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd][dp][pp]RE[W+Resign]\n;W[cd]WL[1797.652]C[goperaw [4d\\]: hi\naahja [1d\\]: hi\n]\n;B[ed]BL[1788.895]\n;W[ec]WL[1793.118]\n;B[fc]BL[1784.585]\n;W[dc]WL[1791.352]\n;B[fd]BL[1782.615]\n;W[cg]WL[1790.589]\n;B[jd]BL[1779.314]\n;W[qq]WL[1789.855]\n;B[qp]BL[1770.27]\n;W[pq]WL[1789.027]\n;B[nq]BL[1767.194]\n;W[nr]WL[1781.792]\n;B[mq]BL[1762.086]\n;W[mr]WL[1779.223]\n;B[lq]BL[1757.814]\n;W[qc]WL[1749.527]\n;B[pc]BL[1749.627]\n;W[qd]WL[1747.612]\n;B[qe]BL[1747.13]\n;W[re]WL[1746.576]\n;B[qb]BL[1744.195]\n;W[rb]WL[1730.055]\n;B[rf]BL[1741.341]\n;W[pb]WL[1724.005]\n;B[ob]BL[1738.874]\n;W[pe]WL[1721.813]\n;B[qf]BL[1735.092]\n;W[qa]WL[1720.405]\n;B[og]BL[1702.757]\n;W[oe]WL[1717.197]\n;B[nd]BL[1698.157]\n;W[ne]WL[1701.039]\n;B[md]BL[1694.233]\n;W[me]WL[1699.505]\n;B[ld]BL[1674.93]\n;W[mg]WL[1697.902]\n;B[ni]BL[1641.364]\n;W[jg]WL[1691.995]\n;B[li]BL[1627.086]\n;W[ke]WL[1689.255]\n;B[je]BL[1617.314]\n;W[jf]WL[1685.079]\n;B[ji]BL[1601.531]\n;W[hg]WL[1665.863]\n;B[oq]BL[1588.749]\n;W[or]WL[1662.602]\n;B[rp]BL[1583.203]\n;W[rq]WL[1649.952]\n;B[rd]BL[1579.447]\n;W[rc]WL[1645.601]\n;B[se]BL[1577.33]\n;W[qk]WL[1636.22]\n;B[qm]BL[1554.105]\n;W[pm]WL[1632.033]\n;B[ql]BL[1534.248]\n;W[pl]WL[1629.832]\n;B[pk]BL[1532.566]\n;W[qn]WL[1628.408]\n;B[rn]BL[1527.766]\n;W[ok]WL[1626.946]\n;B[pj]BL[1525.346]\n;W[oj]WL[1625.768]\n;B[pi]BL[1518.919]\n;W[oi]WL[1618.369]\n;B[oh]BL[1512.202]\n;W[mj]WL[1614.427]\n;B[lj]BL[1484.008]\n;W[pn]WL[1609.519]\n;B[nl]BL[1475.111]\n;W[ol]WL[1582.804]\n;B[nn]BL[1458.218]\n;W[ro]WL[1579.478]\n;B[rm]BL[1453.542]\n;W[sp]WL[1577.855]\n;B[rk]BL[1437.445]\n;W[qo]WL[1574.243]\n;B[oo]BL[1433.045]\n;W[ml]WL[1570.54]\n;B[cl]BL[1397.81]\n;W[mm]WL[1542.441]\n;B[fq]BL[1387.219]\n;W[gj]WL[1532.082]\n;B[gl]BL[1374.434]\n;W[hl]WL[1525.958]\n;B[hm]BL[1370.692]\n;W[gm]WL[1515.827]\n;B[fl]BL[1363.282]\n;W[fm]WL[1512.362]\n;B[el]BL[1345.843]\n;W[go]WL[1505.582]\n;B[hp]BL[1333.182]\n;W[im]WL[1501.327]\n;B[hn]BL[1328.459]\n;W[ho]WL[1499.705]\n;B[in]BL[1323.959]\n;W[io]WL[1498.739]\n;B[il]BL[1317.544]\n;W[hk]WL[1496.499]\n;B[jm]BL[1310.074]\n;W[eo]WL[1491.382]\n;B[do]BL[1300.642]\n;W[kn]WL[1472.314]\n;B[jq]BL[1286.17]\n;W[jk]WL[1467.216]\n;B[km]BL[1269.238]\n;W[kp]WL[1461.617]\n;B[kq]BL[1263.745]\n;W[mn]WL[1454.466]\n;B[ik]BL[1243.578]\n;W[ij]WL[1413.742]\n;B[jj]BL[1235.34]\n;W[jn]WL[1409.443]\n;B[ii]BL[1230.781]\n;W[hj]WL[1402.98]\n;B[kk]BL[1228.829]\n;W[gn]WL[1399.165]\n;B[im]BL[1220.108]\n;W[dn]WL[1388.376]\n;B[cn]BL[1216.446]\n;W[dm]WL[1385.829]\n;B[cm]BL[1214.363]\n;W[dl]WL[1380.294]\n;B[dk]BL[1196.461]\n;W[ek]WL[1376.397]\n;B[ej]BL[1188.59]\n;W[ck]WL[1372.854]\n;B[dj]BL[1185.82]\n;W[cj]WL[1367.736]\n;B[ch]BL[1137.497]\n;W[bh]WL[1355.102]\n;B[dh]BL[1103.415]\n;W[ci]WL[1340.895]\n;B[eg]BL[1097.789]\n;W[fh]WL[1313.608]\n;B[di]BL[1091.368]\n;W[dg]WL[1297.505]\n;B[eh]BL[1084.498]\n;W[bj]WL[1286.743]\n;B[fg]BL[1061.024]\n;W[hh]WL[1276.102]\n;B[ce]BL[1053.193]\n;W[be]WL[1267.262]\n;B[de]BL[1049.993]\n;W[bf]WL[1255.227]\n;B[cq]BL[1039.29]\n;W[fk]WL[1247.853]\n;B[gh]BL[1019.55]\n;W[gg]WL[1240.246]\n;B[fj]BL[1001.056]\n;W[gk]WL[1229.25]\n;B[hi]BL[985.094]\n;W[gi]WL[1226.553]\n;B[fi]BL[978.664]\n;W[gh]WL[1223.192]\n;B[dd]BL[965.026]\n;W[cc]WL[1215.023]\n;B[fb]BL[960.008]\n;W[ge]WL[1210.383]\n;B[ff]BL[924.866]\n;W[hd]WL[1195.798]\n;B[hc]BL[920.166]\n;W[ic]WL[1191.526]\n;B[jc]BL[891.114]\n;W[id]WL[1184.033]\n;B[hb]BL[791.39]\n;W[ib]WL[1180.363]\n;B[ie]BL[775.493]\n;W[he]WL[1173.546]\n;B[gd]BL[754.543]\n;W[kb]WL[1161.961]\n;B[jb]BL[726.076]\n;W[ja]WL[1158.284]\n;B[lb]BL[722.923]\n;W[kc]WL[1154.086]\n;B[kd]BL[719.751]\n;W[oc]WL[1145.822]C[goperaw [4d\\]: tx\naahja [1d\\]: thx\n])\n",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "aahja vs goperaw",
          black_player: "aahja",
          white_player: "goperaw",
          black_rank: "1d",
          white_rank: "4d",
          komi: 0.5,
          result: "W+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998518/tjjdzhnzi6ycrolo7wkl.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Chinese]SZ[19]KM[6.50]TM[600]OT[10x20 byo-yomi]\nPW[WeakBot50k]PB[NelMel26]WR[23k]BR[28k]DT[2023-12-05]PC[The KGS Go Server at http://www.gokgs.com/]C[WeakBot50k [23k\\]: GTP Engine for WeakBot50k (white): WeakBot50k: Make your group(s) *impossible* to kill even when you *pass* *all* of your moves and then I will pass. If I'm too hard, try BasicsBot or IdiotBot. If I'm too easy, try humans or LibertyBot or other stronger bots. My info contains links to my source code: version 0.1.8 C version resign\n]RE[B+Resign]\n;B[pc]BL[585.573]\n;W[nr]WL[599.701]\n;B[dd]BL[576.176]\n;W[df]WL[599.381]\n;B[fc]BL[568.929]\n;W[de]WL[599.067]\n;B[ce]BL[564.565]\n;W[be]WL[598.751]\n;B[cd]BL[558.914]\n;W[dc]WL[598.452]\n;B[cc]BL[552.29]\n;W[cb]WL[598.135]\n;B[db]BL[549.503]\n;W[ec]WL[597.622]\n;B[ed]BL[548.539]\n;W[eb]WL[597.315]\n;B[fb]BL[541.571]\n;W[ea]WL[596.992]\n;B[bc]BL[538.536]\n;W[fd]WL[596.676]\n;B[gc]BL[535.297]\n;W[cf]WL[596.374]\n;B[fa]BL[532.26]\n;W[da]WL[596.058]\n;B[bb]BL[530.539]\n;W[hc]WL[595.751]\n;B[ca]BL[529.692]\n;W[ba]WL[595.44]\n;B[aa]BL[527.937]\n;W[ab]WL[595.122]\n;B[ac]BL[526.714]\n;W[ad]WL[594.816]\n;B[qp]BL[512.969]\n;W[ee]WL[594.501]\n;B[bf]BL[510.007]\n;W[bd]WL[594.195]\n;B[hd]BL[503.861]\n;W[bc]WL[593.886]\n;B[id]BL[500.119]\n;W[ed]WL[593.577]\n;B[ld]BL[493.75]\n;W[gd]WL[593.263]\n;B[hb]BL[490.082]\n;W[ic]WL[592.952]\n;B[jc]BL[489.2]\n;W[ib]WL[592.638]\n;B[jb]BL[486.566]\n;W[ia]WL[592.315]\n;B[ha]BL[484.936]\n;W[gb]WL[592.007]\n;B[ja]BL[483.828]\n;W[ae]WL[591.684]\n;B[bh]BL[474.106]\n;W[af]WL[591.358]\n;B[cq]BL[462.842]\n;W[bg]WL[591.047]\n;B[cj]BL[455.044]\n;W[cg]WL[590.724]\n;B[bi]BL[447.129]\n;W[ch]WL[590.412]\n;B[cm]BL[442.364]\n;W[ci]WL[590.091]\n;B[bj]BL[440.463]\n;W[dg]WL[589.774]\n;B[oq]BL[422.784]\n;W[ge]WL[589.444]\n;B[qj]BL[416.551]\n;W[he]WL[589.114]\n;B[hc]BL[404.481]\n;W[ie]WL[588.803]\n;B[je]BL[399.362]\n;W[ib]WL[588.49]\n;B[ga]BL[397.036]\n;W[eg]WL[588.176]\n;B[qe]BL[389.276]\n;W[ff]WL[587.855]\n;B[jh]BL[378.374]\n;W[hf]WL[587.541]\n;B[jq]BL[361.48]\n;W[fg]WL[587.218]\n;B[ej]BL[347.147]\n;W[gg]WL[586.901]\n;B[hi]BL[344.431]\n;W[eh]WL[586.587]\n;B[gi]BL[339.667]\n;W[di]WL[586.26]\n;B[dj]BL[337.362]\n;W[ei]WL[585.945]\n;B[fj]BL[334.947]\n;W[fi]WL[585.627]\n;B[gj]BL[334.053]\n;W[gh]WL[585.31]\n;B[hh]BL[331.827]\n;W[hg]WL[584.998]\n;B[ih]BL[329.029]\n;W[ig]WL[584.672]\n;B[jg]BL[328.167]\n;W[if]WL[584.357]\n;B[jf]BL[327.468]\n;W[ag]WL[584.032]\n;B[ah]BL[325.964]\n;W[gk]WL[583.721]\n;B[hk]BL[315.792]\n;W[ek]WL[583.409]\n;B[gl]BL[312.196]\n;W[fk]WL[583.096]\n;B[fl]BL[311.259]\n;W[kg]WL[582.776]\n;B[el]BL[307.383]\n;W[dk]WL[582.454]\n;B[cl]BL[306.192]\n;W[ji]WL[582.136]\n;B[kj]BL[302.968]\n;W[ke]WL[581.809]\n;B[le]BL[300.455]\n;W[bk]WL[581.485]\n;B[al]BL[297.293]\n;W[kh]WL[581.172]\n;B[ii]BL[291.427]\n;W[ij]WL[580.855]\n;B[ki]BL[288.913]\n;W[jj]WL[580.541]\n;B[jk]BL[282.803]\n;W[aj]WL[580.217]\n;B[ik]BL[281.722]\n;W[hl]WL[579.901]\n;B[hj]BL[279.632]\n;W[jl]WL[579.583]\n;B[il]BL[277.703]\n;W[hm]WL[579.271]\n;B[gm]BL[274.042]\n;W[jj]WL[578.944]\n;B[hn]BL[268.964]\n;W[im]WL[578.625]\n;B[jm]BL[267.488]\n;W[in]WL[578.435]\n;B[jn]BL[265.077]\n;W[io]WL[578.121]\n;B[ho]BL[263.163]\n;W[kl]WL[577.807]\n;B[ll]BL[256.104]\n;W[gn]WL[577.493]\n;B[ip]BL[254.3]\n;W[jo]WL[577.173]\n;B[ko]BL[253.116]\n;W[kn]WL[577.004]\n;B[jp]BL[249.574]\n;W[im]WL[576.682]\n;B[km]BL[243.737]\n;W[ln]WL[576.361]\n;B[kk]BL[242.566]\n;W[lj]WL[576.04]\n;B[li]BL[227.203]\n;W[mi]WL[575.7]\n;B[lg]BL[225.218]\n;W[em]WL[575.375]\n;B[en]BL[218.488]\n;W[lk]WL[575.041]\n;B[go]BL[216.491]\n;W[fn]WL[574.712]\n;B[fo]BL[214.844]\n;W[eo]WL[574.39]\n;B[dn]BL[213.542]\n;W[fp]WL[574.074]\n;B[fm]BL[212.731]\n;W[lh]WL[573.748]\n;B[nh]BL[207.243]\n;W[lf]WL[573.425]\n;B[mg]BL[205.872]\n;W[md]WL[573.107]\n;B[kf]BL[202.74]\n;W[mh]WL[572.778]\n;B[mj]BL[199.099]\n;W[ni]WL[572.461]\n;B[oi]BL[198.177]\n;W[nj]WL[572.134]\n;B[mk]BL[196.681]\n;W[mf]WL[571.811]\n;B[ng]BL[194.213]\n;W[kd]WL[571.482]\n;B[lc]BL[189.739]\n;W[oh]WL[571.158]\n;B[og]BL[187.213]\n;W[ph]WL[570.835]\n;B[pi]BL[185.282]\n;W[of]WL[570.519]\n;B[pg]BL[184.215]\n;W[qh]WL[570.17]\n;B[qg]BL[182.12]\n;W[rg]WL[569.855]\n;B[rf]BL[173.948]\n;W[pf]WL[569.651]\n;B[od]BL[154.487]\n;W[nf]WL[569.321]\n;B[mc]BL[150.095]\n;W[qf]WL[568.988]\n;B[nd]BL[144.999]\n;W[me]WL[568.671]\n;B[pd]BL[141.658]\n;W[re]WL[568.355]\n;B[se]BL[136.674]\n;W[sf]WL[568.035]\n;B[rd]BL[135.905]\n;W[sd]WL[567.706]\n;B[sc]BL[134.571]\n;W[rc]WL[567.388]\n;B[se]BL[132.894]\n;W[nc]WL[567.041]\n;B[rf]BL[128.196]\n;W[sg]WL[566.722]\n;B[qd]BL[124.207]\n;W[re]WL[566.391]\n;B[sd]BL[116.882]\n;W[pb]WL[566.07]\n;B[rf]BL[115.332]\n;W[mb]WL[565.741]\n;B[nb]BL[108.217]\n;W[lb]WL[565.414]\n;B[oc]BL[107.19]\n;W[kc]WL[565.096]\n;B[nc]BL[105.659]\n;W[re]WL[564.776]\n;B[kb]BL[103.293]\n;W[sb]WL[564.458]\n;B[ma]BL[101.263]\n;W[ob]WL[564.192]\n;B[la]BL[100.61]\n;W[pj]WL[563.861]\n;B[rb]BL[96.12]\n;W[qi]WL[563.532]\n;B[sa]BL[95.339]\n;W[oj]WL[563.193]\n;B[qc]BL[94.33]\n;W[ng]WL[562.874]\n;B[pk]BL[92.12]\n;W[rf]WL[562.552]\n;B[rj]BL[86.304]\n;W[oe]WL[562.234]\n;B[qb]BL[80.006]\n;W[ri]WL[561.916]\n;B[pa]BL[78.827]\n;W[si]WL[561.589]\n;B[sj]BL[76.266]\n;W[nk]WL[561.27]\n;B[nl]BL[75.159]\n;W[ok]WL[560.95]\n;B[ol]BL[74.455]\n;W[qk]WL[560.62]\n;B[pl]BL[73.569]\n;W[rk]WL[560.302]\n;B[rl]BL[69.015]\n;W[sk]WL[559.988]\n;B[ql]BL[67.864]\n;W[qj]WL[559.668]\n;B[sl]BL[67.24]\n;W[pm]WL[559.338]\n;B[oa]BL[63.844]\n;W[nm]WL[559.014]\n;B[pn]BL[57.733]\n;W[rm]WL[558.694]\n;B[rn]BL[55.828]\n;W[ne]WL[558.367]\n;B[nn]BL[53.691]\n;W[pe]WL[558.035]\n;B[ml]BL[49.723]\n;W[mm]WL[557.706]\n;B[mn]BL[48.304]\n;W[no]WL[557.372]\n;B[mo]BL[46.818]\n;W[on]WL[557.047]\n;B[oo]BL[44.65]\n;W[np]WL[556.72]\n;B[nq]BL[42.696]\n;W[mp]WL[556.403]\n;B[lo]BL[40.756]\n;W[po]WL[556.081]\n;B[op]BL[39.415]\n;W[qn]WL[555.756]\n;B[lp]BL[31.64]\n;W[mq]WL[555.424]\n;B[mr]BL[28.716]\n;W[lq]WL[555.103]\n;B[lr]BL[26.07]\n;W[kq]WL[554.789]\n;B[kr]BL[24.213]\n;W[jo]WL[554.462]\n;B[kp]BL[23.383]\n;W[hp]WL[554.147]\n;B[hq]BL[19.868]\n;W[gp]WL[553.831]\n;B[ep]BL[17.682]\n;W[do]WL[553.514]\n;B[fq]BL[13.977]\n;W[eq]WL[553.192]\n;B[gq]BL[12.942]\n;W[ro]WL[552.864]\n;B[om]BL[20]OB[10]\n;W[sn]WL[552.526]\n;B[qm]BL[20]OB[10]\n;W[pn]WL[552.208]\n;B[pp]BL[20]OB[10]\n;W[lq]WL[551.869]\n;B[cp]BL[20]OB[10]\n;W[jr]WL[551.546]\n;B[kq]BL[20]OB[10]\n;W[rp]WL[551.226]\n;B[mq]BL[20]OB[10]\n;W[cn]WL[550.894]\n;B[rq]BL[20]OB[10]\n;W[rr]WL[550.563]\n;B[sq]BL[20]OB[10]\n;W[qq]WL[550.245]\n;B[qr]BL[20]OB[10]\n;W[pr]WL[549.909]\n;B[pq]BL[20]OB[10]\n;W[qs]WL[549.573]\n;B[qq]BL[20]OB[10]\n;W[bm]WL[549.204]\n;B[co]BL[20]OB[10]\n;W[bn]WL[548.879]\n;B[bo]BL[20]OB[10]\n;W[bq]WL[548.516]\n;B[dp]BL[20]OB[10])\n",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "NelMel26 vs WeakBot50k",
          black_player: "NelMel26",
          white_player: "WeakBot50k",
          black_rank: "28k",
          white_rank: "23k",
          komi: 6.5,
          result: "B+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998524/sirfceq108zrxelzw1e1.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]KM[6.50]TM[1800]OT[5x30 byo-yomi]\nPW[semence]PB[https]WR[16k]BR[16k]DT[2023-09-16]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]\n;B[pp]BL[1796.891]C[semence [16k\\]: hi \nsemence [16k\\]: gg\n]\n;W[dd]WL[1788.111]C[https [16k\\]: hi\n]\n;B[pd]BL[1787.476]\n;W[dp]WL[1785.294]\n;B[dj]BL[1784.608]\n;W[pj]WL[1781.912]\n;B[cf]BL[1781.725]\n;W[pf]WL[1774.169]\n;B[nd]BL[1774.378]\n;W[gd]WL[1768.035]\n;B[ph]BL[1770.12]\n;W[oh]WL[1765.588]\n;B[pg]BL[1764.441]\n;W[og]WL[1764.171]\n;B[qf]BL[1762.723]\n;W[of]WL[1761.503]\n;B[qe]BL[1759.691]\n;W[pi]WL[1759.112]\n;B[ql]BL[1754.478]\n;W[oi]WL[1754.966]\n;B[cc]BL[1748.549]\n;W[cd]WL[1752.389]\n;B[dc]BL[1746.891]\n;W[ec]WL[1751.023]\n;B[eb]BL[1745.388]\n;W[fc]WL[1746.648]\n;B[fb]BL[1743.432]\n;W[gb]WL[1744.911]\n;B[bd]BL[1741.939]\n;W[be]WL[1741.474]\n;B[bc]BL[1740.056]\n;W[ce]WL[1739.403]\n;B[bf]BL[1738.771]\n;W[ae]WL[1737.662]\n;B[af]BL[1736.747]\n;W[df]WL[1735.045]\n;B[ch]BL[1734.887]\n;W[dh]WL[1733.152]\n;B[di]BL[1729.675]\n;W[dg]WL[1731.01]\n;B[cg]BL[1727.76]\n;W[jp]WL[1728.743]\n;B[lq]BL[1719.54]\n;W[kq]WL[1726.835]\n;B[lp]BL[1717.753]\n;W[hp]WL[1723.204]\n;B[dn]BL[1714.496]\n;W[co]WL[1720.294]\n;B[cn]BL[1711.612]\n;W[fp]WL[1716.655]\n;B[cq]BL[1709.087]\n;W[dq]WL[1714.25]\n;B[cp]BL[1707.389]\n;W[do]WL[1710.718]\n;B[bo]BL[1705.692]\n;W[cr]WL[1708.83]\n;B[br]BL[1682.833]\n;W[dr]WL[1705.442]\n;B[kr]BL[1669.335]\n;W[jr]WL[1702.9]\n;B[kp]BL[1667.5]\n;W[jq]WL[1701.534]\n;B[lr]BL[1665.664]\n;W[jc]WL[1697.984]\n;B[lc]BL[1661.783]\n;W[kb]WL[1695.857]\n;B[lb]BL[1659.132]\n;W[ka]WL[1693.212]\n;B[la]BL[1652.873]\n;W[jj]WL[1686.469]\n;B[gi]BL[1645.8]\n;W[gg]WL[1682.053]\n;B[kc]BL[1642.166]\n;W[jb]WL[1679.766]\n;B[ke]BL[1637.966]\n;W[je]WL[1677.998]\n;B[jf]BL[1635.99]\n;W[ie]WL[1676.051]\n;B[if]BL[1633.21]\n;W[hf]WL[1674.328]\n;B[hb]BL[1618.184]\n;W[ga]WL[1667.265]\n;B[ih]BL[1616.046]\n;W[hc]WL[1662.29]\n;B[bb]BL[1604.329]\n;W[fa]WL[1658.606]\n;B[db]BL[1601.91]\n;W[ea]WL[1652.959]\n;B[da]BL[1600.05]\n;W[ad]WL[1650.739]\n;B[ac]BL[1598.469]\n;W[ib]WL[1642.519]\n;B[gn]BL[1587.115]\n;W[jl]WL[1639.385]\n;B[li]BL[1582.654]\n;W[gk]WL[1635.701]\n;B[jn]BL[1579.914]\n;W[ek]WL[1632.111]\n;B[dk]BL[1574.782]\n;W[em]WL[1629.795]\n;B[en]BL[1572.467]\n;W[fm]WL[1628.358]\n;B[hl]BL[1568.905]\n;W[fn]WL[1626.872]\n;B[fo]BL[1567.563]\n;W[go]WL[1624.563]\n;B[eo]BL[1564.715]\n;W[ep]WL[1622.761]\n;B[hn]BL[1557.891]\n;W[hk]WL[1617.592]\n;B[gl]BL[1552.4]\n;W[fl]WL[1615.447]\n;B[ll]BL[1541.345]\n;W[il]WL[1611.376]\n;B[in]BL[1524.751]\n;W[qh]WL[1601.01]\n;B[qg]BL[1522.477]\n;W[rh]WL[1599.419]\n;B[rg]BL[1520.33]\n;W[sh]WL[1596.26]\n;B[fj]BL[1512.802]\n;W[fk]WL[1593.979]\n;B[ij]BL[1500.161]\n;W[ik]WL[1590.383]\n;B[ji]BL[1493.489]\n;W[kj]WL[1588.388]\n;B[lj]BL[1490.987]\n;W[kk]WL[1586.537]\n;B[kl]BL[1488.257]\n;W[lk]WL[1583.532]\n;B[mk]BL[1486.89]\n;W[ki]WL[1579.593]\n;B[kh]BL[1484.904]\n;W[jk]WL[1578.339]\n;B[ii]BL[1465.138]C[semence [17k\\]: thx\nhttps [15k\\]: thix\n])\n",
          game_date: "2023-09-16T00:00:00+00:00",
          sgf_name: "https vs semence",
          black_player: "https",
          white_player: "semence",
          black_rank: "16k",
          white_rank: "16k",
          komi: 6.5,
          result: "B+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998529/hal1ta2wfwtxpufraku2.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-07]\nPC[OGS: https://online-go.com/game/58693208]\nGN[winchell vs. jaedge]\nPB[winchell]\nPW[jaedge]\nBR[5k]\nWR[3k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+T]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nAB[pd]\n;W[cd]\n(;B[pq]\n(;W[dq]\n(;B[ec]\n(;W[gc]\n(;B[de]\n(;W[jc]\n(;B[ce]\n(;W[co]\n(;B[jp]\n(;W[po]\n(;B[qo]\n(;W[qn]\n(;B[qp]\n(;W[pn]\n(;B[nq]\n(;W[qj]\n(;B[qf]\n(;W[cg]\n(;B[eg]\n(;W[di]\n(;B[fq]\n(;W[eo]\n(;B[lc]\n(;W[je]\n(;B[le]\n(;W[nc]\n(;B[oc]\n(;W[nd]\n(;B[kd]\n(;W[nf]\n(;B[jd]\n(;W[id]\n(;B[ie]\n(;W[he]\n(;B[if]\n(;W[hc]\n(;B[lg]\n(;W[og]\n(;B[ph]\n(;W[ni]\n(;B[pj]\n(;W[pk]\n(;B[oj]\n(;W[li]\n(;B[qi]\n(;W[qk]\n(;B[dk]\n(;W[cj]\n(;B[ck]\n(;W[fi]\n(;B[fk]\n(;W[cm]\n(;B[gg]\n(;W[bk]\n(;B[bl]\n(;W[bj]\n(;B[cl]\n(;W[hi]\n(;B[ji]\n(;W[hf]\n(;B[hg]\n(;W[ig]\n(;B[jf]\n(;W[jg]\n(;B[kf]\n(;W[kh]\n(;B[mh]\n(;W[nh]\n(;B[mi]\n(;W[nj]\n(;B[mj]\n(;W[nk]\n(;B[ok]\n(;W[ol]\n(;B[nl]\n(;W[ml]\n(;B[nm]\n(;W[pi]\n(;B[oi]\n(;W[oh]\n(;B[pi]\n(;W[qg]\n(;B[rg]\n(;W[ri]\n(;B[pg]\n(;W[pf]\n(;B[qh]\n(;W[rh]\n(;B[qg]\n(;W[pe]\n(;B[qe]\n(;W[qd]\n(;B[oe]\n(;W[of]\n(;B[rd]\n(;W[qc]\n(;B[rc]\n(;W[qb]\n(;B[rb]\n(;W[od]\n(;B[pb]\n(;W[ob]\n(;B[mk]\n(;W[ih]\n(;B[dm]\n(;W[bm]\n(;B[go]\n(;W[om]\n(;B[nn]\n(;W[ll]\n(;B[kj]\n(;W[jl]\n(;B[kk]\n(;W[kl]\n(;B[ik]\n(;W[lo]\n(;B[mp]\n(;W[kq]\n(;B[kp]\n(;W[lp]\n(;B[lq]\n(;W[lr]\n(;B[mq]\n(;W[jo]\n(;B[io]\n(;W[ko]\n(;B[ip]\n(;W[in]\n(;B[hn]\n(;W[im]\n(;B[ln]\n(;W[mo]\n(;B[no]\n(;W[mn]\n(;B[mm]\n(;W[lm]\n(;B[kn]\n(;W[jn]\n(;B[km]\n(;W[hm]\n(;B[gm]\n(;W[hk]\n(;B[hj]\n(;W[ij]\n(;B[hl]\n(;W[jm]\n(;B[kn]\n(;W[jk]\n(;B[gk]\n(;W[jj]\n(;B[ki]\n(;W[gj]\n(;B[ii]\n(;W[hk]\n(;B[qa]\n(;W[pc]\n(;B[hj]\n(;W[ho]\n(;B[hk]\n(;W[gn]\n(;B[fn]\n(;W[hp]\n(;B[iq]\n(;W[hq]\n(;B[kr]\n(;W[ir]\n(;B[jq]\n(;W[jr]\n(;B[kq]\n(;W[hn]\n(;B[fo]\n(;W[fm]\n(;B[gr]\n(;W[gl]\n(;B[em]\n(;W[hr]\n(;B[en]\n(;W[ej]\n(;B[er]\n(;W[ek]\n(;B[el]\n(;W[ep]\n(;B[fp]\n(;W[dr]\n(;B[fl]\n(;W[gm]\n(;B[fj]\n(;W[gi]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-07T00:00:00+00:00",
          sgf_name: "winchell vs jaedge",
          black_player: "winchell",
          white_player: "jaedge",
          black_rank: "5k",
          white_rank: "3k",
          komi: 0.5,
          result: "W+T",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999192/atfmtp4ha5b1jrlpzgon.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]KM[6.50]TM[1200]OT[2x20 byo-yomi]\nPW[shoto]PB[Kevxander]WR[9k]BR[9k]DT[2023-10-29]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]\n;B[pp]BL[1196.682]C[Kevxander [9k\\]: hi gl\nshoto [9k\\]: hello\n]\n;W[dp]WL[1189.027]\n;B[pd]BL[1194.65]\n;W[cd]WL[1186.538]\n;B[ed]BL[1192.01]\n;W[gc]WL[1182.767]\n;B[eb]BL[1187.093]\n;W[dc]WL[1180.774]\n;B[ec]BL[1185.461]\n;W[db]WL[1179.369]\n;B[ge]BL[1182.639]\n;W[id]WL[1175.847]\n;B[jc]BL[1180.091]\n;W[jd]WL[1173.704]\n;B[kc]BL[1178.444]\n;W[ic]WL[1171.919]\n;B[md]BL[1176.777]\n;W[oc]WL[1165.71]\n;B[pc]BL[1172.771]\n;W[nd]WL[1163.081]\n;B[ne]BL[1171.012]\n;W[mc]WL[1160.603]\n;B[ld]BL[1167.635]\n;W[lc]WL[1153.857]\n;B[kd]BL[1166.008]\n;W[pb]WL[1151.787]\n;B[qb]BL[1162.62]\n;W[od]WL[1139.137]\n;B[oe]BL[1160.623]\n;W[nb]WL[1133.245]\n;B[pa]BL[1158.788]\n;W[ob]WL[1123.421]\n;B[lb]BL[1155.208]\n;W[mb]WL[1122.31]\n;B[kb]BL[1142.415]\n;W[qa]WL[1120.638]\n;B[ra]BL[1139.53]\n;W[oa]WL[1118.4]\n;B[ma]BL[1137.831]\n;W[pe]WL[1115.965]\n;B[qd]BL[1132.227]\n;W[qe]WL[1114.219]\n;B[rd]BL[1131.448]\n;W[qa]WL[1113.425]\n;B[rc]BL[1124.758]\n;W[re]WL[1110.376]C[shoto [9k\\]: okay\n]\n;B[sb]BL[1118.355]C[shoto [9k\\]: sorry only one eye on board\nshoto [9k\\]: Israel News\nshoto [9k\\]: bye\nKevxander [9k\\]: thx\n])\n",
          game_date: "2023-10-29T00:00:00+00:00",
          sgf_name: "Kevxander vs shoto",
          black_player: "Kevxander",
          white_player: "shoto",
          black_rank: "9k",
          white_rank: "9k",
          komi: 6.5,
          result: "B+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998535/rxdnypyjmazgxqv2xnjx.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]HA[3]KM[0.50]TM[1440]OT[6x48 byo-yomi]\nPW[awk]PB[Kevxander]WR[4k]BR[7k]DT[2023-12-04]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd][dp][pp]RE[B+Resign]\n;W[dc]WL[1436.937]\n;B[cd]BL[1437.311]C[awk [4k\\]: gg\n]\n;W[cc]WL[1434.054]C[Kevxander [7k\\]: gl\n]\n;B[dd]BL[1433.978]\n;W[ed]WL[1432.109]\n;B[ee]BL[1432.15]\n;W[fd]WL[1429.823]\n;B[fe]BL[1430.964]\n;W[gd]WL[1428.618]\n;B[dj]BL[1429.12]\n;W[de]WL[1424.314]\n;B[ce]BL[1424.864]\n;W[df]WL[1423.657]\n;B[cf]BL[1423.332]\n;W[dg]WL[1419.72]\n;B[cg]BL[1413.243]\n;W[gf]WL[1418.92]\n;B[dh]BL[1404.069]\n;W[ff]WL[1412.48]\n;B[eg]BL[1401.349]\n;W[ef]WL[1408.754]\n;B[fh]BL[1400.38]\n;W[cn]WL[1403.718]\n;B[cm]BL[1398.198]\n;W[dn]WL[1400.468]\n;B[dm]BL[1396.349]\n;W[en]WL[1392.974]\n;B[fp]BL[1394.098]\n;W[bp]WL[1391.523]\n;B[cq]BL[1392.909]\n;W[bq]WL[1390.055]\n;B[br]BL[1392.064]\n;W[bm]WL[1388.545]\n;B[bl]BL[1389.682]\n;W[bn]WL[1385.747]\n;B[ck]BL[1388.898]\n;W[nq]WL[1372.262]\n;B[lq]BL[1380.798]\n;W[pr]WL[1369.91]\n;B[qq]BL[1379.238]\n;W[no]WL[1368.329]\n;B[pn]BL[1368.969]\n;W[hq]WL[1364.935]\n;B[iq]BL[1365.57]\n;W[hp]WL[1363.435]\n;B[gr]BL[1360.9]\n;W[hr]WL[1361.31]\n;B[ir]BL[1359.988]\n;W[gq]WL[1353.69]\n;B[fr]BL[1357.377]\n;W[dr]WL[1347.648]\n;B[eq]BL[1329.012]\n;W[cr]WL[1344.777]\n;B[hs]BL[1290.743]\n;W[bs]WL[1339.568]\n;B[gn]BL[1255.424]\n;W[hn]WL[1326.558]\n;B[ho]BL[1229.059]\n;W[io]WL[1321.672]\n;B[go]BL[1224.547]\n;W[ip]WL[1321.092]\n;B[in]BL[1218.932]\n;W[hm]WL[1314.252]\n;B[jn]BL[1211.013]\n;W[jo]WL[1309.258]\n;B[kn]BL[1202.756]\n;W[ko]WL[1307.855]\n;B[lo]BL[1201.247]\n;W[ln]WL[1306.472]\n;B[lm]BL[1183.707]\n;W[lp]WL[1304.055]\n;B[mn]BL[1180.937]\n;W[mp]WL[1301.715]\n;B[kq]BL[1177.076]\n;W[kp]WL[1299.807]\n;B[op]BL[1173.236]\n;W[np]WL[1293.745]\n;B[or]BL[1166.35]\n;W[nr]WL[1290.868]\n;B[oq]BL[1162.08]\n;W[os]WL[1289.223]\n;B[mr]BL[1102.459]\n;W[qr]WL[1285.588]\n;B[rr]BL[1100.89]\n;W[on]WL[1271.65]\n;B[om]BL[1098.096]\n;W[nn]WL[1265.483]\n;B[nm]BL[1095.831]\n;W[po]WL[1260.237]\n;B[qo]BL[1081.554]\n;W[rp]WL[1251.768]\n;B[rq]BL[1060.977]\n;W[qn]WL[1220.975]\n;B[pm]BL[1017.862]\n;W[qp]WL[1212.856]\n;B[ro]BL[1008.295]\n;W[qm]WL[1196.898]\n;B[ql]BL[1003.164]\n;W[nc]WL[1188.752]\n;B[oc]BL[992.89]\n;W[qf]WL[1185.208]\n;B[qc]BL[981.918]\n;W[qi]WL[1178.219]\n;B[kc]BL[974.9]\n;W[nd]WL[1175.5]\n;B[hb]BL[972.063]\n;W[gb]WL[1173.631]\n;B[hc]BL[970.879]\n;W[hd]WL[1171.462]\n;B[gc]BL[969.844]\n;W[fb]WL[1169.485]\n;B[fc]BL[968.98]\n;W[ec]WL[1168.412]\n;B[id]BL[967.999]\n;W[ie]WL[1159.864]\n;B[jd]BL[966.333]\n;W[gm]WL[1136.312]\n;B[fm]BL[913.359]\n;W[fn]WL[1134.004]\n;B[em]BL[911.383]\n;W[gl]WL[1132.445]\n;B[ih]BL[888.587]\n;W[fq]WL[1130.055]C[awk [4k\\]: very exciting game\nKevxander [7k\\]: yeah\nKevxander [7k\\]: i saw that scenario but played it out from the other direction and thought i had one more move\nKevxander [7k\\]: such a long chase to end that way\nKevxander [7k\\]: well done\n]\n;B[fo]BL[728.842]C[awk [4k\\]: :)\n]\n;W[er]WL[1126.599]\n;B[mq]BL[715.513]\n;W[fs]WL[1114.584]C[Kevxander [7k\\]: lol\nKevxander [7k\\]: not even looking now\n]\n;B[is]BL[696.312]\n;W[gs]WL[1112.195]\n;B[ks]BL[694.094]\n;W[jr]WL[1082.325]C[Kevxander [7k\\]: whole bottom depended on killing your group for life\n]\n;B[nh]BL[639.413]\n;W[jq]WL[1077.655]\n;B[of]BL[628.596]\n;W[oe]WL[1074.519]\n;B[pe]BL[627.25]\n;W[pf]WL[1073.627]\n;B[ne]BL[619]\n;W[od]WL[1071.299]\n;B[mf]BL[612.059]\n;W[ob]WL[1070.437]\n;B[pc]BL[610.45]\n;W[pb]WL[1067.939]\n;B[qb]BL[609.633]\n;W[ld]WL[1052.395]\n;B[mb]BL[602.957]\n;W[nb]WL[1050.758]\n;B[lc]BL[596.67]\n;W[me]WL[1049.297]\n;B[nf]BL[593.499]\n;W[mc]WL[1045.94]\n;B[lb]BL[586.136]\n;W[lf]WL[1045.069]\n;B[ke]BL[581.448]\n;W[le]WL[1043.268]\n;B[kf]BL[574.198]\n;W[kd]WL[1042.029]\n;B[lg]BL[569.765]\n;W[md]WL[1041.029]\n;B[na]BL[556.639]\n;W[je]WL[1027.818]\n;B[pa]BL[552.103]\n;W[ic]WL[1027.047]\n;B[oa]BL[548.541]\n;W[ib]WL[1026.447]C[Kevxander [7k\\]: i'm not dead overall yet though\n]\n;B[qh]BL[515.109]\n;W[ph]WL[1007.79]\n;B[rh]BL[512.717]\n;W[ri]WL[1004.536]\n;B[pi]BL[481.698]\n;W[qg]WL[995.394]\n;B[pj]BL[478.468]\n;W[rg]WL[993.635]\n;B[oh]BL[476.975]\n;W[pg]WL[991.731]\n;B[re]BL[474.572]\n;W[ml]WL[987.038]\n;B[mm]BL[468.987]\n;W[oi]WL[985.969]\n;B[nj]BL[459.691]\n;W[ei]WL[979.354]\n;B[eh]BL[453.428]\n;W[ej]WL[978.277]\n;B[ek]BL[451.186]\n;W[fk]WL[975.162]\n;B[fj]BL[438.615]\n;W[fi]WL[972.987]\n;B[gj]BL[436.431]\n;W[gi]WL[972.074]\n;B[hj]BL[423.747]\n;W[gh]WL[968.642]\n;B[di]BL[419.183]\n;W[jl]WL[958.348]\n;B[jj]BL[402.787]\n;W[el]WL[955.271]\n;B[dk]BL[399.681]\n;W[kj]WL[941.183]\n;B[rj]BL[368.086]\n;W[qj]WL[936.49]\n;B[qk]BL[366.188]\n;W[sh]WL[935.585]\n;B[sj]BL[360.964]\n;W[pk]WL[923.63]\n;B[oj]BL[355.45]\n;W[si]WL[907.65]\n;B[rk]BL[344.005]\n;W[qe]WL[896.694]\n;B[rd]BL[334.249]\n;W[ki]WL[877.008]\n;B[jh]BL[319.314]\n;W[kh]WL[799.831]\n;B[jg]BL[293.601]C[Kevxander [7k\\]: thanks\nawk [4k\\]: well done\nKevxander [7k\\]: it was a good one\nKevxander [7k\\]: ty sir\nawk [4k\\]: ty\n])\n",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "Kevxander vs awk",
          black_player: "Kevxander",
          white_player: "awk",
          black_rank: "7k",
          white_rank: "4k",
          komi: 0.5,
          result: "B+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998540/zkpukioqvgpv9jcws3p2.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]KM[0.50]TM[600]OT[3x20 byo-yomi]\nPW[Kevxander]PB[alango]WR[7k]BR[8k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]C[Kevxander [7k\\]: hi gl\nalango [8k\\]: hi\n]RE[W+Resign]\n;B[dq]BL[588.044]\n;W[pc]WL[597.304]\n;B[cc]BL[585.668]\n;W[qp]WL[592.21]\n;B[co]BL[584.789]\n;W[oq]WL[590.245]\n;B[qe]BL[581.178]\n;W[qd]WL[588.002]\n;B[pe]BL[578.593]\n;W[mc]WL[585.78]\n;B[qh]BL[577.633]\n;W[dd]WL[583.894]\n;B[oc]BL[576.374]\n;W[od]WL[579.439]\n;B[pd]BL[575.386]\n;W[nd]WL[565.602]\n;B[qc]BL[573.5]\n;W[pb]WL[564.535]\n;B[qb]BL[570.5]\n;W[ob]WL[561.289]\n;B[dc]BL[568.058]\n;W[ec]WL[553.3]\n;B[ed]BL[563.772]\n;W[fd]WL[549.58]\n;B[ee]BL[562.339]\n;W[de]WL[546.396]\n;B[fc]BL[560.021]\n;W[eb]WL[538.598]\n;B[fb]BL[558.046]\n;W[ef]WL[514.203]\n;B[fe]BL[555.417]\n;W[gd]WL[512.77]\n;B[ge]BL[553.83]\n;W[hd]WL[509.942]\n;B[db]BL[552.642]\n;W[cf]WL[504.734]\n;B[be]BL[549.893]\n;W[bf]WL[502.988]\n;B[ce]BL[547.551]\n;W[dj]WL[499.941]\n;B[hb]BL[543.346]\n;W[jc]WL[497.949]\n;B[ic]BL[541.77]\n;W[id]WL[495.853]\n;B[jb]BL[540.783]\n;W[kc]WL[493.961]\n;B[gg]BL[537.839]\n;W[eh]WL[489.992]\n;B[ck]BL[535.463]\n;W[cj]WL[488.321]\n;B[bk]BL[534.137]\n;W[bj]WL[486.788]\n;B[fp]BL[533.253]\n;W[jq]WL[480.476]\n;B[mq]BL[529.845]\n;W[ql]WL[472.784]\n;B[rk]BL[527.542]\n;W[rl]WL[470.68]\n;B[qk]BL[526.134]\n;W[pk]WL[468.968]\n;B[pj]BL[524.683]\n;W[ok]WL[468.086]\n;B[oj]BL[523.392]\n;W[nk]WL[466.359]\n;B[mo]BL[522.647]\n;W[ko]WL[464.582]\n;B[ln]BL[520.611]\n;W[jm]WL[461.328]\n;B[ll]BL[519.277]\n;W[lj]WL[458.161]\n;B[kk]BL[517.049]\n;W[lm]WL[455.425]\n;B[mm]BL[515.517]\n;W[km]WL[453.307]\n;B[mk]BL[514.012]\n;W[nj]WL[449.554]\n;B[mj]BL[511.833]\n;W[mi]WL[444.706]\n;B[li]BL[507.464]\n;W[kj]WL[431.168]\n;B[lk]BL[504.33]\n;W[oi]WL[417.691]\n;B[pi]BL[502.347]\n;W[jj]WL[405.885]\n;B[jk]BL[500.629]\n;W[ik]WL[400.418]\n;B[ij]BL[498.481]\n;W[ji]WL[396.7]\n;B[il]BL[496.594]\n;W[hk]WL[395.248]\n;B[jl]BL[495.079]\n;W[hi]WL[393.692]\n;B[hl]BL[493.051]\n;W[nl]WL[376.207]\n;B[ml]BL[490.462]\n;W[nn]WL[367.474]\n;B[mn]BL[488.572]\n;W[mp]WL[359.549]\n;B[np]BL[486.027]\n;W[lp]WL[358.171]\n;B[no]BL[484.85]\n;W[nq]WL[355.808]\n;B[nm]BL[483.305]\n;W[on]WL[354.517]\n;B[om]BL[482.011]\n;W[pm]WL[349.439]\n;B[pn]BL[480.215]\n;W[oo]WL[347.304]\n;B[op]BL[478.858]\n;W[po]WL[346.02]\n;B[qn]BL[477.501]\n;W[pp]WL[341.161]\n;B[qm]BL[475.502]\n;W[pl]WL[339.203]\n;B[oh]BL[472.665]\n;W[ni]WL[335.812]\n;B[lh]BL[469.12]\n;W[mh]WL[327.051]\n;B[mg]BL[466.931]\n;W[ng]WL[323.88]\n;B[lg]BL[463.28]\n;W[og]WL[319.286]\n;B[pg]BL[458.585]\n;W[ne]WL[309.365]\n;B[ph]BL[456.933]\n;W[nh]WL[307.128]\n;B[kn]BL[454.642]\n;W[jn]WL[281.709]\n;B[gk]BL[447.886]\n;W[hj]WL[279.02]\n;B[jg]BL[446.666]\n;W[gl]WL[272.097]\n;B[gm]BL[444.409]\n;W[fl]WL[270.54]\n;B[hn]BL[442.746]\n;W[im]WL[264.811]\n;B[hm]BL[438.733]\n;W[io]WL[256.713]\n;B[hf]BL[436.19]\n;W[cm]WL[234.697]\n;B[dm]BL[433.287]\n;W[cl]WL[230.108]\n;B[dl]BL[431.542]\n;W[dk]WL[228.86]\n;B[cn]BL[429.059]\n;W[bl]WL[225.028]\n;B[el]BL[427.981]\n;W[fk]WL[218.308]\n;B[fm]BL[424.998]\n;W[en]WL[168.729]\n;B[em]BL[422.287]\n;W[hq]WL[139.432]\n;B[hp]BL[420.503]\n;W[ho]WL[136.297]\n;B[go]BL[418.434]\n;W[ip]WL[135.132]\n;B[gp]BL[417.137]\n;W[fr]WL[127.051]\n;B[er]BL[415.322]\n;W[fq]WL[113.239]\n;B[gq]BL[411.906]\n;W[gr]WL[110.875]\n;B[eq]BL[406.855]\n;W[hr]WL[109.355]\n;B[ek]BL[405.89]\n;W[fj]WL[106.237]\n;B[ej]BL[405.053]\n;W[ei]WL[105.212]\n;B[fi]BL[403.673]\n;W[gj]WL[101]\n;B[fh]BL[402.438]\n;W[fg]WL[85.78]\n;B[gh]BL[400.413]\n;W[ih]WL[76.031]\n;B[ig]BL[398.418]\n;W[hh]WL[69.692]\n;B[hg]BL[395.681]\n;W[ke]WL[61.4]\n;B[ff]BL[394.52]\n;W[eg]WL[59.552]\n;B[of]BL[392.229]\n;W[nf]WL[57.48]\n;B[oe]BL[391.384]\n;W[rj]WL[20]OW[3]\n;B[qj]BL[388.975]\n;W[sk]WL[20]OW[3]\n;B[ri]BL[387.95]\n;W[sj]WL[20]OW[3]\n;B[si]BL[386.838]\n;W[sl]WL[20]OW[3]\n;B[lq]BL[385.771]\n;W[kq]WL[20]OW[3]\n;B[lo]BL[380.159]\n;W[kp]WL[20]OW[3]\n;B[nr]BL[378.675]\n;W[or]WL[20]OW[3]\n;B[kr]BL[375.093]\n;W[jr]WL[20]OW[3]\n;B[ks]BL[373.413]\n;W[mr]WL[20]OW[3]\n;B[lr]BL[371.667]\n;W[ns]WL[20]OW[3]\n;B[kf]BL[368.593]\n;W[je]WL[20]OW[3]\n;B[jh]BL[367.494]\n;W[ki]WL[20]OW[3]\n;B[kh]BL[365.32]\n;W[ii]WL[20]OW[3]\n;B[le]BL[364.337]\n;W[ld]WL[20]OW[3]\n;B[me]BL[363.47]\n;W[mf]WL[20]OW[3]\n;B[lf]BL[362.148]\n;W[he]WL[20]OW[3]\n;B[gf]BL[355.681]\n;W[hc]WL[20]OW[3]\n;B[ib]BL[344.43]\n;W[kb]WL[20]OW[3]\n;B[cd]BL[337.415]\n;W[df]WL[20]OW[3]\n;B[af]BL[335.797]\n;W[ag]WL[20]OW[3]\n;B[ae]BL[333.592]\n;W[bh]WL[20]OW[3]C[Kevxander [7k\\]: thanks\n])\n",
          game_date: "2023-12-06T00:00:00+00:00",
          sgf_name: "alango vs Kevxander",
          black_player: "alango",
          white_player: "Kevxander",
          black_rank: "8k",
          white_rank: "7k",
          komi: 0.5,
          result: "W+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998546/ezgmrexn6ftui5lq7nhh.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]HA[2]KM[0.50]TM[300]OT[5x20 byo-yomi]\nPW[WeiqiLover]PB[beak]WR[1k]BR[3k]DT[2023-12-03]PC[The KGS Go Server at http://www.gokgs.com/]AB[pd][dp]C[WeiqiLover [1k\\]: hi\nbeak [3k\\]: hi gg\n]RE[W+7.50]\n;W[cd]WL[283.796]\n;B[po]BL[297.311]\n;W[nc]WL[281.746]\n;B[lc]BL[294.79]\n;W[ne]WL[280.043]\n;B[qf]BL[292.775]\n;W[kd]WL[278.575]\n;B[md]BL[290.918]\n;W[me]WL[274.693]\n;B[nd]BL[289.225]\n;W[od]WL[272.214]\n;B[oc]BL[287.146]\n;W[oe]WL[270.722]\n;B[pc]BL[284.594]\n;W[ld]WL[267.683]\n;B[mc]BL[282.485]\n;W[kc]WL[266.332]\n;B[kb]BL[270.594]\n;W[jb]WL[262.022]\n;B[mb]BL[265.298]\n;W[ic]WL[256.351]\n;B[pq]BL[262.824]\n;W[cn]WL[252.648]\n;B[cl]BL[259.452]\n;W[en]WL[250.559]\n;B[ci]BL[257.441]\n;W[cg]WL[247.997]\n;B[ce]BL[254.967]\n;W[dd]WL[245.323]\n;B[de]BL[253.036]\n;W[dh]WL[242.708]\n;B[ef]BL[250.519]\n;W[ed]WL[239.945]\n;B[di]BL[247.895]\n;W[eh]WL[237.949]\n;B[fj]BL[245.777]\n;W[ei]WL[235.441]\n;B[ej]BL[243.594]\n;W[gh]WL[234.009]\n;B[bg]BL[232.609]\n;W[bh]WL[229.032]\n;B[ch]BL[230.368]\n;W[bf]WL[226.553]\n;B[dg]BL[228.668]\n;W[cf]WL[218.414]\n;B[be]BL[226.462]\n;W[ag]WL[216.144]\n;B[df]BL[220.576]\n;W[bi]WL[213.736]\n;B[bj]BL[215.579]\n;W[ai]WL[208.144]\n;B[fh]BL[211.343]\n;W[fi]WL[205.242]\n;B[gi]BL[209.808]\n;W[fg]WL[203.63]\n;B[eg]BL[206.487]\n;W[fh]WL[200.46]\n;B[ff]BL[202.699]\n;W[ii]WL[198.512]\n;B[hh]BL[200.483]\n;W[gg]WL[196.568]\n;B[hg]BL[195.044]\n;W[gf]WL[194.301]\n;B[ge]BL[193.36]\n;W[hf]WL[192.141]\n;B[fd]BL[190.782]\n;W[fc]WL[177.605]\n;B[gc]BL[188.9]\n;W[fb]WL[175.03]\n;B[gb]BL[181.871]\n;W[he]WL[163.939]\n;B[db]BL[176.456]\n;W[ec]WL[161.532]\n;B[bc]BL[173.741]\n;W[bd]WL[156.916]\n;B[ad]BL[171.873]\n;W[cc]WL[141.125]\n;B[ae]BL[169.694]\n;W[af]WL[137.005]\n;B[bb]BL[167.882]\n;W[cb]WL[130.984]\n;B[ca]BL[165.914]\n;W[ga]WL[123.331]\n;B[ha]BL[163.675]\n;W[ea]WL[120.687]\n;B[da]BL[152.725]\n;W[hb]WL[116.126]\n;B[fa]BL[150.63]\n;W[gd]WL[108.879]\n;B[hd]BL[147.972]\n;W[ga]WL[104.117]\n;B[id]BL[144.953]\n;W[hi]WL[100.325]\n;B[fa]BL[138.482]\n;W[fe]WL[95.785]\n;B[ee]BL[134.294]\n;W[ga]WL[93.485]\n;B[gj]BL[130.076]\n;W[ig]WL[90.064]\n;B[fa]BL[127.354]\n;W[dj]WL[83.704]\n;B[cj]BL[122.017]\n;W[ga]WL[81.492]\n;B[if]BL[119.326]\n;W[ih]WL[79.323]\n;B[fa]BL[117.025]\n;W[dk]WL[75.031]\n;B[eb]BL[103.273]\n;W[el]WL[71.971]\n;B[dm]BL[98.884]\n;W[em]WL[69.502]\n;B[dn]BL[97.141]\n;W[do]WL[67.919]\n;B[co]BL[95.216]\n;W[eo]WL[66.263]\n;B[bn]BL[92.628]\n;W[ck]WL[60.893]\n;B[bk]BL[90.271]\n;W[cp]WL[57.519]\n;B[bo]BL[83.323]\n;W[dq]WL[55.027]\n;B[jd]BL[73.129]\n;W[jc]WL[50.308]\n;B[kf]BL[64.908]\n;W[lf]WL[47.092]\n;B[ke]BL[61.355]\n;W[le]WL[44.721]\n;B[kg]BL[59.329]\n;W[mh]WL[42.395]\n;B[lh]BL[57.132]\n;W[li]WL[40.29]\n;B[ki]BL[54.756]\n;W[kj]WL[36.573]\n;B[mi]BL[51.656]\n;W[lj]WL[34.304]\n;B[mg]BL[49.727]\n;W[nh]WL[32.793]\n;B[lg]BL[46.234]\n;W[ng]WL[29.077]\n;B[nj]BL[44.323]\n;W[oj]WL[25.914]\n;B[nk]BL[42.192]\n;W[ok]WL[20.67]\n;B[ni]BL[38.769]\n;W[oi]WL[18.597]\n;B[nl]BL[36.345]\n;W[pg]WL[14.942]\n;B[qg]BL[34.082]\n;W[om]WL[10.705]\n;B[nm]BL[26.697]\n;W[on]WL[8.688]\n;B[gm]BL[9.707]\n;W[gl]WL[20]OW[5]\n;B[hk]BL[6.587]\n;W[hl]WL[20]OW[5]\n;B[ik]BL[4.78]\n;W[jj]WL[20]OW[5]\n;B[il]BL[1.059]\n;W[km]WL[20]OW[5]\n;B[jm]BL[20]OB[5]\n;W[kn]WL[20]OW[5]\n;B[hm]BL[20]OB[5]\n;W[fm]WL[20]OW[5]\n;B[kl]BL[20]OB[5]\n;W[ll]WL[20]OW[5]\n;B[jn]BL[20]OB[5]\n;W[ko]WL[20]OW[5]\n;B[nn]BL[20]OB[5]\n;W[oo]WL[20]OW[5]\n;B[no]BL[20]OB[5]\n;W[op]WL[20]OW[5]\n;B[lm]BL[20]OB[5]\n;W[kk]WL[20]OW[5]\n;B[jl]BL[20]OB[5]\n;W[ln]WL[20]OW[5]\n;B[mm]BL[20]OB[5]\n;W[np]WL[20]OW[5]\n;B[mp]BL[20]OB[5]\n;W[lp]WL[20]OW[5]\n;B[mo]BL[20]OB[5]\n;W[ip]WL[20]OW[5]\n;B[lq]BL[20]OB[5]\n;W[kq]WL[20]OW[5]\n;B[nq]BL[20]OB[5]\n;W[oq]WL[20]OW[5]\n;B[pp]BL[20]OB[5]\n;W[nr]WL[20]OW[5]\n;B[mr]BL[20]OB[5]\n;W[pr]WL[20]OW[5]\n;B[qr]BL[20]OB[5]\n;W[pn]WL[20]OW[5]\n;B[ns]BL[20]OB[5]\n;W[or]WL[20]OW[5]\n;B[kr]BL[20]OB[5]\n;W[jq]WL[20]OW[5]\n;B[jr]BL[20]OB[5]\n;W[ir]WL[20]OW[5]\n;B[hq]BL[20]OB[5]\n;W[iq]WL[20]OW[3]\n;B[mq]BL[20]OB[5]\n;W[hp]WL[20]OW[3]\n;B[fp]BL[20]OB[5]\n;W[go]WL[20]OW[3]\n;B[ep]BL[20]OB[5]\n;W[fo]WL[20]OW[3]\n;B[cq]BL[20]OB[5]\n;W[gq]WL[20]OW[3]\n;B[ol]BL[20]OB[5]\n;W[pl]WL[20]OW[3]\n;B[ph]BL[20]OB[5]\n;W[oh]WL[20]OW[3]\n;B[qo]BL[20]OB[5]\n;W[qn]WL[20]OW[3]\n;B[rq]BL[20]OB[5]\n;W[pi]WL[20]OW[3]\n;B[rn]BL[20]OB[5]\n;W[rm]WL[20]OW[3]\n;B[ro]BL[20]OB[5]\n;W[qh]WL[20]OW[3]\n;B[rl]BL[20]OB[5]\n;W[sm]WL[20]OW[3]\n;B[pf]BL[20]OB[5]\n;W[eq]WL[20]OW[3]\n;B[fq]BL[20]OB[5]\n;W[fr]WL[20]OW[3]\n;B[bp]BL[20]OB[5]\n;W[gp]WL[20]OW[3]\n;B[cp]BL[20]OB[5]\n;W[dr]WL[20]OW[3]\n;B[cr]BL[20]OB[5]\n;W[cs]WL[20]OW[3]\n;B[bs]BL[20]OB[5]\n;W[ds]WL[20]OW[3]\n;B[es]BL[20]OB[5]\n;W[gr]WL[20]OW[3]\n;B[er]BL[20]OB[5]\n;W[dl]WL[20]OW[3]\n;B[cm]BL[20]OB[5]\n;W[io]WL[20]OW[3]\n;B[of]BL[20]OB[5]\n;W[nf]WL[20]OW[2]\n;B[ql]BL[20]OB[5]\n;W[pk]WL[20]OW[2]\n;B[qm]BL[20]OB[5]\n;W[pm]WL[20]OW[2]\n;B[rk]BL[20]OB[5]\n;W[rj]WL[20]OW[2]\n;B[qj]BL[20]OB[5]\n;W[ri]WL[20]OW[2]\n;B[qk]BL[20]OB[5]\n;W[ka]WL[20]OW[2]\n;B[lb]BL[20]OB[5]\n;W[ia]WL[20]OW[2]\n;B[ga]BL[20]OB[5]\n;W[hc]WL[20]OW[2]\n;B[rg]BL[20]OB[5]\n;W[qi]WL[20]OW[2]\n;B[og]BL[20]OB[5]\n;W[ls]WL[20]OW[2]\n;B[ms]BL[20]OB[5]\n;W[js]WL[20]OW[2]\n;B[lr]BL[20]OB[5]\n;W[is]WL[20]OW[2]\n;B[ks]BL[20]OB[5]\n;W[os]WL[20]OW[2]\n;B[qs]BL[20]OB[5]\n;W[lo]WL[20]OW[2]\n;B[rh]BL[20]OB[5]\n;W[mj]WL[20]OW[2]\n;B[nb]BL[20]OB[5]\n;W[mk]WL[20]OW[2]\n;B[la]BL[20]OB[5]\n;W[ja]WL[20]OW[2]\n;B[ie]BL[20]OB[5]\n;W[ji]WL[20]OW[2]\n;B[sn]BL[20]OB[5]\n;W[ml]WL[20]OW[2]\n;B[pe]BL[20]OB[5]\n;W[mn]WL[20]OW[2]\n;B[jg]BL[20]OB[5]\n;W[kh]WL[20]OW[2]\n;B[jh]BL[20]OB[5]\n;W[ak]WL[20]OW[2]\n;B[bl]BL[20]OB[5]\n;W[aj]WL[20]OW[2]\n;B[al]BL[20]OB[5]\n;W[fs]WL[20]OW[2]\n;B[si]BL[20]OB[5]\n;W[sj]WL[20]OW[2]\n;B[sh]BL[20]OB[5]\n;W[ls]WL[20]OW[2]\n;B[sl]BL[20]OB[5]\n;W[]WL[20]OW[2]\n;B[ki]BL[20]OB[5]\n;W[]WL[20]OW[2]\n;B[kh]BL[20]OB[5]\n;W[]WL[20]OW[2]\n;B[ph]BL[20]OB[5]\n;W[]WL[20]OW[2]\n;B[pg]BL[20]OB[5]\n;W[]WL[20]OW[2]\n;B[]BL[20]OB[5]TW[ib][bg][hg][ah][hh][gi][mi][ni][ej][fj][gj][hj][ij][nj][ek][fk][gk][hk][ik][jk][lk][nk][fl][il][jl][kl][nl][ol][gm][hm][im][jm][lm][mm][nm][fn][gn][hn][in][jn][nn][ho][jo][mo][no][jp][kp][mp][hq][lq][mq][nq][hr][jr][kr][lr][mr][gs][hs][ks][ms][ns]TB[aa][ba][ea][ma][na][oa][pa][qa][ra][sa][ab][cb][fb][ob][pb][qb][rb][sb][ac][cc][dc][ec][fc][nc][qc][rc][sc][bd][cd][dd][ed][gd][qd][rd][sd][fe][je][qe][re][se][jf][rf][sf][sg][am][bm][rm][sm][an][cn][ao][so][ap][qp][rp][sp][aq][bq][dq][eq][qq][sq][ar][br][dr][rr][sr][as][cs][ds][rs][ss]C[WeiqiLover [1k\\]: thanks\nbeak [3k\\]: thx\n])\n",
          game_date: "2023-12-03T00:00:00+00:00",
          sgf_name: "beak vs WeiqiLover",
          black_player: "beak",
          white_player: "WeiqiLover",
          black_rank: "3k",
          white_rank: "1k",
          komi: 0.5,
          result: "W+7.50",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998553/xfyw8os2mpmbclej103m.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-06]\nPC[OGS: https://online-go.com/game/59517614]\nGN[Willowdale vs. chipsflying]\nPB[Willowdale]\nPW[chipsflying]\nBR[2k]\nWR[1k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+44.5]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nAB[pp]\n;W[dd]\n(;B[cp]\n(;W[pd]\n(;B[qn]\n(;W[eq]\n(;B[dn]\n(;W[pq]\n(;B[oq]\n(;W[qp]\n(;B[po]\n(;W[qr]\n(;B[or]\n(;W[ro]\n(;B[rn]\n(;W[rq]\n(;B[iq]\n(;W[qf]\n(;B[dq]\n(;W[dr]\n(;B[cr]\n(;W[hq]\n(;B[hr]\n(;W[ip]\n(;B[jp]\n(;W[ir]\n(;B[jq]\n(;W[gr]\n(;B[hp]\n(;W[gq]\n(;B[jr]\n(;W[hs]\n(;B[jc]\n(;W[dp]\n(;B[cq]\n(;W[hc]\n(;B[mc]\n(;W[oc]\n(;B[ph]\n(;W[pj]\n(;B[qj]\n(;W[qk]\n(;B[qi]\n(;W[nk]\n(;B[nh]\n(;W[of]\n(;B[nf]\n(;W[ne]\n(;B[me]\n(;W[ng]\n(;B[mf]\n(;W[og]\n(;B[oh]\n(;W[mg]\n(;B[pk]\n(;W[pl]\n(;B[ok]\n(;W[ol]\n(;B[oj]\n(;W[nj]\n(;B[pi]\n(;W[mm]\n(;B[ql]\n(;W[kb]\n(;B[jb]\n(;W[lc]\n(;B[ld]\n(;W[mb]\n(;B[kc]\n(;W[lb]\n(;B[hd]\n(;W[gc]\n(;B[gd]\n(;W[fd]\n(;B[id]\n(;W[ke]\n(;B[kf]\n(;W[jf]\n(;B[je]\n(;W[lf]\n(;B[kg]\n(;W[le]\n(;B[lg]\n(;W[md]\n(;B[mh]\n(;W[if]\n(;B[gf]\n(;W[jh]\n(;B[ki]\n(;W[gh]\n(;B[fe]\n(;W[ed]\n(;B[hg]\n(;W[hh]\n(;B[ih]\n(;W[ji]\n(;B[jg]\n(;W[ig]\n(;B[ii]\n(;W[ij]\n(;B[hi]\n(;W[jj]\n(;B[hf]\n(;W[np]\n(;B[pr]\n(;W[qq]\n(;B[io]\n(;W[cj]\n(;B[ie]\n(;W[qm]\n(;B[rl]\n(;W[pn]\n(;B[on]\n(;W[pm]\n(;B[qo]\n(;W[op]\n(;B[rm]\n(;W[mq]\n(;B[nl]\n(;W[ml]\n(;B[om]\n(;W[mo]\n(;B[ln]\n(;W[mn]\n(;B[lk]\n(;W[mk]\n(;B[hj]\n(;W[kl]\n(;B[kk]\n(;W[jl]\n(;B[jk]\n(;W[ik]\n(;B[il]\n(;W[hk]\n(;B[gk]\n(;W[hl]\n(;B[im]\n(;W[li]\n(;B[ll]\n(;W[kj]\n(;B[lm]\n(;W[gl]\n(;B[lj]\n(;W[kh]\n(;B[mi]\n(;W[fk]\n(;B[gj]\n(;W[fj]\n(;B[fl]\n(;W[gi]\n(;B[ig]\n(;W[fm]\n(;B[el]\n(;W[em]\n(;B[dm]\n(;W[dl]\n(;B[ek]\n(;W[ej]\n(;B[dk]\n(;W[cl]\n(;B[js]\n(;W[lr]\n(;B[fn]\n(;W[ck]\n(;B[fs]\n(;W[es]\n(;B[ep]\n(;W[fr]\n(;B[fp]\n(;W[is]\n(;B[cf]\n(;W[df]\n(;B[cc]\n(;W[cd]\n(;B[bd]\n(;W[be]\n(;B[bc]\n(;W[db]\n(;B[cb]\n(;W[cg]\n(;B[da]\n(;W[eb]\n(;B[bf]\n(;W[ce]\n(;B[bg]\n(;W[ch]\n(;B[ga]\n(;W[gb]\n(;B[fh]\n(;W[dj]\n(;B[fi]\n(;W[bn]\n(;B[ae]\n(;W[ad]\n(;B[bh]\n(;W[af]\n(;B[dg]\n(;W[dh]\n(;B[eg]\n(;W[ha]\n(;B[ef]\n(;W[de]\n(;B[ia]\n(;W[fa]\n(;B[so]\n(;W[rp]\n(;B[rg]\n(;W[rf]\n(;B[sf]\n(;W[se]\n(;B[sg]\n(;W[rd]\n(;B[qg]\n(;W[co]\n(;B[do]\n(;W[bp]\n(;B[bq]\n(;W[hm]\n(;B[hn]\n(;W[lo]\n(;B[sp]\n(;W[sq]\n(;B[sn]\n(;W[nr]\n(;B[qs]\n(;W[rs]\n(;B[sr]\n(;W[ps]\n(;B[os]\n(;W[ns]\n(;B[qs]\n(;W[mj]\n(;B[rr]\n(;W[kn]\n(;B[jn]\n(;W[aq]\n(;B[ar]\n(;W[ap]\n(;B[cs]\n(;W[cn]\n(;B[ko]\n(;W[km]\n(;B[lp]\n(;W[lq]\n(;B[gn]\n(;W[mp]\n(;B[kp]\n(;W[en]\n(;B[eo]\n(;W[eh]\n(;B[jm]\n(;W[ks]\n(;B[kr]\n(;W[ls]\n(;B[ic]\n(;W[hb]\n(;B[kd]\n(;W[nm]\n(;B[ol]\n(;W[ei]\n(;B[gg]\n(;W[pg]\n(;B[gp]\n(;W[ni]\n(;B[ka]\n(;W[la]\n(;B[ja]\n(;W[oo]\n(;B[cm]\n(;W[bm]\n(;B[lh]\n(;W[nn]\n(;B[fq]\n(;W[er]\n(;B[nq]\n(;W[]\n(;B[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-06T00:00:00+00:00",
          sgf_name: "Willowdale vs chipsflying",
          black_player: "Willowdale",
          white_player: "chipsflying",
          black_rank: "2k",
          white_rank: "1k",
          komi: 0.5,
          result: "W+44.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998560/a4xxjkeueaxoazva2nrl.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59516222]\nGN[protarie vs. M.FUJISAWA]\nPB[protarie]\nPW[M.FUJISAWA]\nBR[13k]\nWR[11k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nHA[2]\nAB[pd][dp]\n;W[dd]\n(;B[pp]\n(;W[nc]\n(;B[lc]\n(;W[jc]\n(;B[le]\n(;W[qc]\n(;B[pc]\n(;W[qd]\n(;B[qe]\n(;W[re]\n(;B[qf]\n(;W[rf]\n(;B[qg]\n(;W[ne]\n(;B[lg]\n(;W[ng]\n(;B[li]\n(;W[ni]\n(;B[lk]\n(;W[lb]\n(;B[jp]\n(;W[mc]\n(;B[ld]\n(;W[kb]\n(;B[dj]\n(;W[lm]\n(;B[nk]\n(;W[mj]\n(;B[mk]\n(;W[lj]\n(;B[kj]\n(;W[ki]\n(;B[mi]\n(;W[nj]\n(;B[kk]\n(;W[lh]\n(;B[mh]\n(;W[kh]\n(;B[mg]\n(;W[nh]\n(;B[jf]\n(;W[kf]\n(;B[kg]\n(;W[jh]\n(;B[jg]\n(;W[ih]\n(;B[dh]\n(;W[hg]\n(;B[ie]\n(;W[hd]\n(;B[he]\n(;W[gd]\n(;B[ge]\n(;W[eg]\n(;B[dg]\n(;W[ef]\n(;B[df]\n(;W[ee]\n(;B[gg]\n(;W[gh]\n(;B[fg]\n(;W[fh]\n(;B[ig]\n(;W[fe]\n(;B[eh]\n(;W[gf]\n(;B[hf]\n(;W[ff]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "protarie vs M.FUJISAWA",
          black_player: "protarie",
          white_player: "M.FUJISAWA",
          black_rank: "13k",
          white_rank: "11k",
          komi: 0.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998566/qnuj72t8xd7r7cba5rqm.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59513862]\nGN[Friendly Match]\nPB[Willowdale]\nPW[ou5603]\nBR[2k]\nWR[1k]\nTM[0]OT[30 simple]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pp]\n(;W[dd]\n(;B[cp]\n(;W[qd]\n(;B[oc]\n(;W[md]\n(;B[ne]\n(;W[nd]\n(;B[pe]\n(;W[oe]\n(;B[of]\n(;W[od]\n(;B[pd]\n(;W[pc]\n(;B[qc]\n(;W[pb]\n(;B[qe]\n(;W[qb]\n(;B[rd]\n(;W[nf]\n(;B[rb]\n(;W[ob]\n(;B[ng]\n(;W[me]\n(;B[oh]\n(;W[mg]\n(;B[fc]\n(;W[hc]\n(;B[fe]\n(;W[df]\n(;B[id]\n(;W[hd]\n(;B[he]\n(;W[ie]\n(;B[ic]\n(;W[ib]\n(;B[hb]\n(;W[gb]\n(;B[gc]\n(;W[ha]\n(;B[gd]\n(;W[hb]\n(;B[fb]\n(;W[je]\n(;B[cc]\n(;W[dc]\n(;B[db]\n(;W[eb]\n(;B[cb]\n(;W[ec]\n(;B[ea]\n(;W[cd]\n(;B[bd]\n(;W[be]\n(;B[ac]\n(;W[ep]\n(;B[dm]\n(;W[ck]\n(;B[dp]\n(;W[eo]\n(;B[dk]\n(;W[cl]\n(;B[dl]\n(;W[cm]\n(;B[dn]\n(;W[do]\n(;B[cn]\n(;W[co]\n(;B[bo]\n(;W[cj]\n(;B[bq]\n(;W[jp]\n(;B[eq]\n(;W[fq]\n(;B[fr]\n(;W[gq]\n(;B[er]\n(;W[nq]\n(;B[pn]\n(;W[ql]\n(;B[qj]\n(;W[ol]\n(;B[rn]\n(;W[pr]\n(;B[rl]\n(;W[pi]\n(;B[qg]\n(;W[qi]\n(;B[qk]\n(;W[pl]\n(;B[mh]\n(;W[rm]\n(;B[qm]\n(;W[rk]\n(;B[sm]\n(;W[rj]\n(;B[lg]\n(;W[mf]\n(;B[nj]\n(;W[qq]\n(;B[rp]\n(;W[rg]\n(;B[rf]\n(;W[rh]\n(;B[dj]\n(;W[di]\n(;B[ei]\n(;W[dh]\n(;B[go]\n(;W[fp]\n(;B[hp]\n(;W[hq]\n(;B[lp]\n(;W[lq]\n(;B[ip]\n(;W[iq]\n(;B[jo]\n(;W[kp]\n(;B[ko]\n(;W[fn]\n(;B[kq]\n(;W[jq]\n(;B[mq]\n(;W[kr]\n(;B[np]\n(;W[mr]\n(;B[mp]\n(;W[oq]\n(;B[op]\n(;W[lh]\n(;B[kg]\n(;W[hf]\n(;B[ge]\n(;W[mi]\n(;B[nh]\n(;W[kh]\n(;B[jg]\n(;W[mj]\n(;B[oj]\n(;W[pj]\n(;B[mk]\n(;W[kj]\n(;B[jh]\n(;W[ji]\n(;B[hg]\n(;W[lk]\n(;B[li]\n(;W[ki]\n(;B[ml]\n(;W[hi]\n(;B[if]\n(;W[jc]\n(;B[jk]\n(;W[ll]\n(;B[mm]\n(;W[ik]\n(;B[jl]\n(;W[il]\n(;B[jm]\n(;W[gk]\n(;B[ij]\n(;W[jj]\n(;B[gf]\n(;W[hn]\n(;B[im]\n(;W[hm]\n(;B[in]\n(;W[ho]\n(;B[io]\n(;W[bm]\n(;B[bn]\n(;W[eh]\n(;B[fi]\n(;W[gp]\n(;B[fh]\n(;W[on]\n(;B[nn]\n(;W[om]\n(;B[bf]\n(;W[ae]\n(;B[ef]\n(;W[cf]\n(;B[fl]\n(;W[gl]\n(;B[fk]\n(;W[rq]\n(;B[sq]\n(;W[sr]\n(;B[sp]\n(;W[qp]\n(;B[qo]\n(;W[rr]\n(;B[oo]\n(;W[gr]\n(;B[qa]\n(;W[ra]\n(;B[sa]\n(;W[pa]\n(;B[ra]\n(;W[ph]\n(;B[og]\n(;W[pg]\n(;B[pf]\n(;W[lm]\n(;B[ln]\n(;W[eg]\n(;B[fg]\n(;W[ee]\n(;B[ff]\n(;W[kf]\n(;B[lf]\n(;W[le]\n(;B[jf]\n(;W[ke]\n(;B[ih]\n(;W[ii]\n(;B[am]\n(;W[al]\n(;B[an]\n(;W[ci]\n(;B[fa]\n(;W[pk]\n(;B[gj]\n(;W[hj]\n(;B[gi]\n(;W[fm]\n(;B[em]\n(;W[hh]\n(;B[km]\n(;W[sk]\n(;B[nl]\n(;W[sl]\n(;B[rm]\n(;W[fs]\n(;B[es]\n(;W[gs]\n(;B[ad]\n(;W[gh]\n(;B[fd]\n(;W[ed]\n(;B[ok]\n(;W[sf]\n(;B[se]\n(;W[sg]\n(;B[ak]\n(;W[bl]\n(;B[ce]\n(;W[de]\n(;B[af]\n(;W[ce]\n(;B[cg]\n(;W[dg]\n(;B[bh]\n(;W[ag]\n(;B[bg]\n(;W[bi]\n(;B[ai]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "Willowdale vs ou5603",
          black_player: "Willowdale",
          white_player: "ou5603",
          black_rank: "2k",
          white_rank: "1k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998572/y91rnslbcranfdw5ri8b.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59512848]\nGN[Friendly Match]\nPB[shelly613]\nPW[GoTomasgo]\nBR[10k]\nWR[11k]\nTM[480]OT[3x30 byo-yomi]\nRE[W+53.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[dq]\n(;W[pd]\n(;B[qp]\n(;W[cd]\n(;B[jq]\n(;W[nq]\n(;B[oq]\n(;W[np]\n(;B[mq]\n(;W[mp]\n(;B[lq]\n(;W[nr]\n(;B[or]\n(;W[op]\n(;B[pp]\n(;W[po]\n(;B[qo]\n(;W[pn]\n(;B[qn]\n(;W[qm]\n(;B[rm]\n(;W[ql]\n(;B[rl]\n(;W[qk]\n(;B[rk]\n(;W[om]\n(;B[lp]\n(;W[lo]\n(;B[ko]\n(;W[ln]\n(;B[jn]\n(;W[co]\n(;B[cp]\n(;W[dn]\n(;B[eo]\n(;W[mc]\n(;B[gc]\n(;W[fc]\n(;B[fb]\n(;W[ec]\n(;B[jc]\n(;W[eb]\n(;B[fa]\n(;W[ea]\n(;B[hb]\n(;W[kb]\n(;B[jb]\n(;W[kc]\n(;B[fe]\n(;W[df]\n(;B[cj]\n(;W[ej]\n(;B[cm]\n(;W[dm]\n(;B[bo]\n(;W[cn]\n(;B[bn]\n(;W[bm]\n(;B[cl]\n(;W[dl]\n(;B[bl]\n(;W[dk]\n(;B[ck]\n(;W[dh]\n(;B[ch]\n(;W[fq]\n(;B[hq]\n(;W[fo]\n(;B[en]\n(;W[fn]\n(;B[em]\n(;W[fm]\n(;B[fp]\n(;W[gp]\n(;B[ep]\n(;W[gq]\n(;B[go]\n(;W[ho]\n(;B[gn]\n(;W[gm]\n(;B[hn]\n(;W[in]\n(;B[hm]\n(;W[im]\n(;B[hl]\n(;W[ip]\n(;B[hp]\n(;W[iq]\n(;B[io]\n(;W[hr]\n(;B[ho]\n(;W[jp]\n(;B[kp]\n(;W[jr]\n(;B[kq]\n(;W[kr]\n(;B[lr]\n(;W[er]\n(;B[dr]\n(;W[eq]\n(;B[el]\n(;W[fs]\n(;B[fl]\n(;W[jm]\n(;B[kn]\n(;W[km]\n(;B[lm]\n(;W[ll]\n(;B[mm]\n(;W[mo]\n(;B[gl]\n(;W[kk]\n(;B[ml]\n(;W[mk]\n(;B[ek]\n(;W[dj]\n(;B[fj]\n(;W[eh]\n(;B[ci]\n(;W[ls]\n(;B[ms]\n(;W[mr]\n(;B[ks]\n(;W[js]\n(;B[jo]\n(;W[ir]\n(;B[ls]\n(;W[gs]\n(;B[ds]\n(;W[ns]\n(;B[os]\n(;W[rj]\n(;B[qr]\n(;W[ik]\n(;B[hk]\n(;W[ij]\n(;B[hj]\n(;W[ii]\n(;B[hi]\n(;W[qi]\n(;B[ih]\n(;W[jh]\n(;B[jg]\n(;W[kh]\n(;B[kg]\n(;W[lg]\n(;B[lh]\n(;W[li]\n(;B[mh]\n(;W[mg]\n(;B[mi]\n(;W[lj]\n(;B[mj]\n(;W[nk]\n(;B[ng]\n(;W[nf]\n(;B[kd]\n(;W[nh]\n(;B[ni]\n(;W[oh]\n(;B[oi]\n(;W[ph]\n(;B[og]\n(;W[pg]\n(;B[of]\n(;W[oe]\n(;B[il]\n(;W[jl]\n(;B[lf]\n(;W[mf]\n(;B[me]\n(;W[ne]\n(;B[ld]\n(;W[kf]\n(;B[le]\n(;W[ig]\n(;B[jf]\n(;W[hh]\n(;B[if]\n(;W[hf]\n(;B[he]\n(;W[md]\n(;B[ke]\n(;W[lc]\n(;B[gf]\n(;W[hg]\n(;B[gh]\n(;W[gg]\n(;B[fg]\n(;W[ih]\n(;B[fh]\n(;W[ef]\n(;B[ff]\n(;W[cg]\n(;B[bg]\n(;W[bf]\n(;B[bh]\n(;W[gd]\n(;B[hd]\n(;W[fd]\n(;B[ge]\n(;W[ee]\n(;B[eg]\n(;W[dg]\n(;B[ei]\n(;W[di]\n(;B[fi]\n(;W[sk]\n(;B[rn]\n(;W[sl]\n(;B[sm]\n(;W[sj]\n(;B[do]\n(;W[qc]\n(;B[qf]\n(;W[pf]\n(;B[qe]\n(;W[qg]\n(;B[rg]\n(;W[rh]\n(;B[rd]\n(;W[rf]\n(;B[re]\n(;W[sg]\n(;B[rc]\n(;W[rb]\n(;B[sb]\n(;W[qb]\n(;B[cc]\n(;W[bc]\n(;B[be]\n(;W[af]\n(;B[ce]\n(;W[cf]\n(;B[dd]\n(;W[bd]\n(;B[dc]\n(;W[ed]\n(;B[de]\n(;W[cb]\n(;B[db]\n(;W[bb]\n(;B[ag]\n(;W[ae]\n(;B[ka]\n(;W[la]\n(;B[ja]\n(;W[mb]\n(;B[am]\n(;W[es]\n(;B[ok]\n(;W[nl]\n(;B[nm]\n(;W[ol]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "shelly613 vs GoTomasgo",
          black_player: "shelly613",
          white_player: "GoTomasgo",
          black_rank: "10k",
          white_rank: "11k",
          komi: 6.5,
          result: "W+53.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998592/mnhzphc6owi7kgk7nphc.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-10-20]\nPC[OGS: https://online-go.com/game/27705836]\nGN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]\nPB[mvs]\nPW[Dzhelilov]\nBR[4k]\nWR[6k]\nTM[30]OT[10 fischer]\nRE[W+6.5]\nSZ[9]\nKM[5.5]\nRU[Chinese]\n;B[gd]\n(;W[df]\n(;B[ed]\n(;W[ff]\n(;B[cc]\n(;W[fc]\n(;B[fd]\n(;W[dc]\n(;B[ec]\n(;W[dd]\n(;B[ee]\n(;W[de]\n(;B[ef]\n(;W[eg]\n(;B[fg]\n(;W[fh]\n(;B[gg]\n(;W[gh]\n(;B[hg]\n(;W[cb]\n(;B[dg]\n(;W[eh]\n(;B[dh]\n(;W[cg]\n(;B[ch]\n(;W[bg]\n(;B[bh]\n(;W[ah]\n(;B[ag]\n(;W[af]\n(;B[hh]\n(;W[di]\n(;B[ei]\n(;W[fi]\n(;B[hi]\n(;W[bi]\n(;B[gi]\n(;W[ci]\n(;B[eb]\n(;W[db]\n(;B[da]\n(;W[ca]\n(;B[ea]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-10-20T00:00:00+00:00",
          sgf_name: "mvs vs Dzhelilov",
          black_player: "mvs",
          white_player: "Dzhelilov",
          black_rank: "4k",
          white_rank: "6k",
          komi: 5.5,
          result: "W+6.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999652/alfo5axbiazokx3znkst.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59512616]\nGN[Friendly Match]\nPB[shelly613]\nPW[istisna]\nBR[11k]\nWR[11k]\nTM[480]OT[3x30 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[dq]\n(;W[qd]\n(;B[qp]\n(;W[dc]\n(;B[jq]\n(;W[op]\n(;B[oq]\n(;W[pp]\n(;B[pq]\n(;W[qo]\n(;B[rp]\n(;W[ro]\n(;B[sp]\n(;W[mq]\n(;B[nq]\n(;W[mr]\n(;B[np]\n(;W[mp]\n(;B[no]\n(;W[po]\n(;B[mo]\n(;W[kp]\n(;B[kq]\n(;W[lp]\n(;B[nr]\n(;W[kr]\n(;B[jr]\n(;W[ks]\n(;B[js]\n(;W[lq]\n(;B[ls]\n(;W[lr]\n(;B[jp]\n(;W[lo]\n(;B[ln]\n(;W[ko]\n(;B[jo]\n(;W[kn]\n(;B[jn]\n(;W[km]\n(;B[lm]\n(;W[jm]\n(;B[on]\n(;W[pn]\n(;B[pm]\n(;W[qm]\n(;B[pl]\n(;W[ql]\n(;B[qk]\n(;W[rk]\n(;B[qj]\n(;W[rj]\n(;B[kl]\n(;W[jl]\n(;B[hn]\n(;W[ll]\n(;B[ml]\n(;W[kk]\n(;B[lk]\n(;W[kl]\n(;B[im]\n(;W[mk]\n(;B[nl]\n(;W[lj]\n(;B[hk]\n(;W[nk]\n(;B[ok]\n(;W[oj]\n(;B[pj]\n(;W[oi]\n(;B[pi]\n(;W[ph]\n(;B[qh]\n(;W[pg]\n(;B[qg]\n(;W[ri]\n(;B[qi]\n(;W[qf]\n(;B[rf]\n(;W[qe]\n(;B[rh]\n(;W[rm]\n(;B[re]\n(;W[rd]\n(;B[se]\n(;W[sd]\n(;B[sh]\n(;W[of]\n(;B[dj]\n(;W[hp]\n(;B[fo]\n(;W[fp]\n(;B[ep]\n(;W[fq]\n(;B[eq]\n(;W[go]\n(;B[gn]\n(;W[er]\n(;B[dr]\n(;W[es]\n(;B[hr]\n(;W[gr]\n(;B[hq]\n(;W[io]\n(;B[in]\n(;W[ho]\n(;B[gq]\n(;W[gp]\n(;B[ip]\n(;W[fr]\n(;B[hs]\n(;W[eo]\n(;B[fn]\n(;W[do]\n(;B[cp]\n(;W[co]\n(;B[bo]\n(;W[ds]\n(;B[cr]\n(;W[cs]\n(;B[br]\n(;W[bs]\n(;B[bq]\n(;W[dp]\n(;B[bn]\n(;W[dm]\n(;B[dn]\n(;W[en]\n(;B[cn]\n(;W[em]\n(;B[fm]\n(;W[fl]\n(;B[gl]\n(;W[il]\n(;B[el]\n(;W[fk]\n(;B[dl]\n(;W[cm]\n(;B[bm]\n(;W[cl]\n(;B[ck]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "shelly613 vs istisna",
          black_player: "shelly613",
          white_player: "istisna",
          black_rank: "11k",
          white_rank: "11k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998601/kawibdvyu3xyezjo6mmc.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59509328]\nGN[jaedge vs. physicsred]\nPB[jaedge]\nPW[physicsred]\nBR[3k]\nWR[1k]\nTM[1200]OT[5x30 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nHA[2]\nAB[pd][dp]\n;W[pp]\n(;B[dc]\n(;W[qm]\n(;B[cf]\n(;W[qf]\n(;B[nd]\n(;W[nf]\n(;B[rd]\n(;W[fq]\n(;B[cn]\n(;W[jp]\n(;B[hq]\n(;W[jq]\n(;B[ho]\n(;W[oq]\n(;B[in]\n(;W[dg]\n(;B[df]\n(;W[fo]\n(;B[dr]\n(;W[fl]\n(;B[dl]\n(;W[fi]\n(;B[fm]\n(;W[em]\n(;B[el]\n(;W[gm]\n(;B[fn]\n(;W[gn]\n(;B[en]\n(;W[go]\n(;B[ip]\n(;W[jo]\n(;B[gp]\n(;W[jn]\n(;B[fp]\n(;W[eo]\n(;B[dn]\n(;W[im]\n(;B[ep]\n(;W[gl]\n(;B[jm]\n(;W[il]\n(;B[km]\n(;W[kf]\n(;B[jk]\n(;W[jl]\n(;B[kl]\n(;W[kk]\n(;B[lk]\n(;W[kj]\n(;B[mm]\n(;W[nl]\n(;B[ml]\n(;W[nk]\n(;B[lj]\n(;W[ki]\n(;B[li]\n(;W[kh]\n(;B[ni]\n(;W[lc]\n(;B[lo]\n(;W[lq]\n(;B[qi]\n(;W[oc]\n(;B[od]\n(;W[nc]\n(;B[pb]\n(;W[gc]\n(;B[md]\n(;W[mc]\n(;B[ld]\n(;W[kd]\n(;B[kc]\n(;W[jd]\n(;B[kb]\n(;W[jc]\n(;B[jb]\n(;W[ib]\n(;B[ob]\n(;W[lb]\n(;B[mf]\n(;W[mg]\n(;B[ng]\n(;W[mh]\n(;B[mi]\n(;W[nh]\n(;B[oi]\n(;W[ph]\n(;B[qk]\n(;W[pi]\n(;B[pj]\n(;W[qh]\n(;B[on]\n(;W[pn]\n(;B[om]\n(;W[qc]\n(;B[pc]\n(;W[qd]\n(;B[qe]\n(;W[re]\n(;B[qb]\n(;W[rc]\n(;B[rb]\n(;W[pe]\n(;B[sb]\n(;W[nb]\n(;B[oa]\n(;W[bd]\n(;B[cd]\n(;W[cc]\n(;B[cb]\n(;W[ce]\n(;B[bc]\n(;W[bq]\n(;B[bg]\n(;W[bi]\n(;B[bk]\n(;W[fj]\n(;B[fe]\n(;W[gf]\n(;B[eg]\n(;W[de]\n(;B[ee]\n(;W[bf]\n(;B[cg]\n(;W[dd]\n(;B[cc]\n(;W[ed]\n(;B[fd]\n(;W[ec]\n(;B[fc]\n(;W[eb]\n(;B[fb]\n(;W[fa]\n(;B[ga]\n(;W[da]\n(;B[hb]\n(;W[ic]\n(;B[gd]\n(;W[ba]\n(;B[ad]\n(;W[be]\n(;B[ca]\n(;W[ab]\n(;B[ac]\n(;W[ae]\n(;B[ea]\n(;W[ol]\n(;B[pl]\n(;W[fa]\n(;B[ia]\n(;W[db]\n(;B[ja]\n(;W[hc]\n(;B[ea]\n(;W[bb]\n(;B[gg]\n(;W[am]\n(;B[bm]\n(;W[gb]\n(;B[fa]\n(;W[ha]\n(;B[mp]\n(;W[mq]\n(;B[hb]\n(;W[bo]\n(;B[ha]\n(;W[bn]\n(;B[bl]\n(;W[cr]\n(;B[cp]\n(;W[bp]\n(;B[ar]\n(;W[aq]\n(;B[cq]\n(;W[br]\n(;B[ir]\n(;W[jr]\n(;B[og]\n(;W[oh]\n(;B[of]\n(;W[ri]\n(;B[qj]\n(;W[pm]\n(;B[rj]\n(;W[rh]\n(;B[rl]\n(;W[ql]\n(;B[pk]\n(;W[rm]\n(;B[sk]\n(;W[sm]\n(;B[sl]\n(;W[si]\n(;B[oj]\n(;W[sj]\n(;B[rk]\n(;W[no]\n(;B[mn]\n(;W[cs]\n(;B[fr]\n(;W[ds]\n(;B[js]\n(;W[ks]\n(;B[is]\n(;W[kr]\n(;B[di]\n(;W[hg]\n(;B[gh]\n(;W[mo]\n(;B[oo]\n(;W[np]\n(;B[lp]\n(;W[hh]\n(;B[gi]\n(;W[hi]\n(;B[gj]\n(;W[hj]\n(;B[gk]\n(;W[fk]\n(;B[hk]\n(;W[ik]\n(;B[he]\n(;W[hf]\n(;B[ie]\n(;W[ff]\n(;B[ef]\n(;W[fg]\n(;B[jf]\n(;W[jg]\n(;B[ke]\n(;W[je]\n(;B[if]\n(;W[le]\n(;B[eh]\n(;W[fh]\n(;B[sd]\n(;W[se]\n(;B[sc]\n(;W[qe]\n(;B[ne]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "jaedge vs physicsred",
          black_player: "jaedge",
          white_player: "physicsred",
          black_rank: "3k",
          white_rank: "1k",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998613/gdnkvfxpzfddrigcwyur.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59508980]\nGN[Friendly Match]\nPB[KingChucklz]\nPW[shelly613]\nBR[12k]\nWR[10k]\nTM[480]OT[3x30 byo-yomi]\nRE[B+36.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dq]\n(;B[pp]\n(;W[cd]\n(;B[co]\n(;W[cp]\n(;B[do]\n(;W[cn]\n(;B[ep]\n(;W[bo]\n(;B[eq]\n(;W[dr]\n(;B[ed]\n(;W[dd]\n(;B[ee]\n(;W[de]\n(;B[df]\n(;W[cf]\n(;B[dg]\n(;W[cg]\n(;B[dh]\n(;W[ci]\n(;B[ch]\n(;W[bh]\n(;B[di]\n(;W[cj]\n(;B[dj]\n(;W[dk]\n(;B[ek]\n(;W[dl]\n(;B[el]\n(;W[em]\n(;B[dn]\n(;W[cm]\n(;B[dm]\n(;W[fm]\n(;B[hm]\n(;W[bl]\n(;B[gk]\n(;W[dp]\n(;B[nq]\n(;W[er]\n(;B[gq]\n(;W[eo]\n(;B[fo]\n(;W[en]\n(;B[gn]\n(;W[ec]\n(;B[fc]\n(;W[eb]\n(;B[fb]\n(;W[ea]\n(;B[fa]\n(;W[fd]\n(;B[gd]\n(;W[fe]\n(;B[ef]\n(;W[gc]\n(;B[gb]\n(;W[hc]\n(;B[ge]\n(;W[ff]\n(;B[fg]\n(;W[gf]\n(;B[hf]\n(;W[hb]\n(;B[gg]\n(;W[jd]\n(;B[lc]\n(;W[kc]\n(;B[lb]\n(;W[kb]\n(;B[jf]\n(;W[ld]\n(;B[md]\n(;W[le]\n(;B[me]\n(;W[je]\n(;B[lf]\n(;W[ke]\n(;B[kf]\n(;W[id]\n(;B[qm]\n(;W[mf]\n(;B[nf]\n(;W[mg]\n(;B[mi]\n(;W[ng]\n(;B[of]\n(;W[og]\n(;B[pf]\n(;W[mc]\n(;B[mb]\n(;W[nc]\n(;B[nb]\n(;W[ne]\n(;B[od]\n(;W[nd]\n(;B[oc]\n(;W[mh]\n(;B[oi]\n(;W[pg]\n(;B[qg]\n(;W[qh]\n(;B[rg]\n(;W[rh]\n(;B[sg]\n(;W[sh]\n(;B[qe]\n(;W[pi]\n(;B[oj]\n(;W[pj]\n(;B[pk]\n(;W[qk]\n(;B[pl]\n(;W[rk]\n(;B[kh]\n(;W[lh]\n(;B[li]\n(;W[oh]\n(;B[jr]\n(;W[rm]\n(;B[rn]\n(;W[sm]\n(;B[sn]\n(;W[ql]\n(;B[pm]\n(;W[fl]\n(;B[fk]\n(;W[gl]\n(;B[hl]\n(;W[fr]\n(;B[gr]\n(;W[fq]\n(;B[fp]\n(;W[gp]\n(;B[go]\n(;W[hp]\n(;B[jp]\n(;W[ir]\n(;B[iq]\n(;W[hq]\n(;B[hr]\n(;W[io]\n(;B[jn]\n(;W[ip]\n(;B[jq]\n(;W[jo]\n(;B[ko]\n(;W[in]\n(;B[im]\n(;W[qq]\n(;B[qp]\n(;W[rp]\n(;B[ro]\n(;W[sp]\n(;B[qo]\n(;W[rr]\n(;B[pq]\n(;W[pr]\n(;B[or]\n(;W[ps]\n(;B[os]\n(;W[rs]\n(;B[is]\n(;W[fs]\n(;B[gs]\n(;W[cc]\n(;B[ie]\n(;W[hd]\n(;B[he]\n(;W[ha]\n(;B[fd]\n(;W[la]\n(;B[ma]\n(;W[ka]\n(;B[ob]\n(;W[oe]\n(;B[pe]\n(;W[ni]\n(;B[nj]\n(;W[nh]\n(;B[kg]\n(;W[kn]\n(;B[jm]\n(;W[hk]\n(;B[hj]\n(;W[ik]\n(;B[hn]\n(;W[ij]\n(;B[hi]\n(;W[ii]\n(;B[hh]\n(;W[kp]\n(;B[lo]\n(;W[lq]\n(;B[lp]\n(;W[kq]\n(;B[mq]\n(;W[kl]\n(;B[km]\n(;W[ki]\n(;B[kj]\n(;W[ji]\n(;B[kk]\n(;W[lj]\n(;B[mj]\n(;W[lk]\n(;B[ll]\n(;W[mk]\n(;B[ml]\n(;W[nk]\n(;B[ok]\n(;W[jl]\n(;B[nl]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "KingChucklz vs shelly613",
          black_player: "KingChucklz",
          white_player: "shelly613",
          black_rank: "12k",
          white_rank: "10k",
          komi: 6.5,
          result: "B+36.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998628/daqqkijr6l6edl77alte.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59508348]\nGN[player_piano vs. winchell]\nPB[player_piano]\nPW[winchell]\nBR[5k]\nWR[6k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+67.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dp]\n(;B[pp]\n(;W[dc]\n(;B[fq]\n(;W[cn]\n(;B[dq]\n(;W[cq]\n(;B[cr]\n(;W[eq]\n(;B[dr]\n(;W[ep]\n(;B[er]\n(;W[fp]\n(;B[gq]\n(;W[di]\n(;B[ce]\n(;W[cd]\n(;B[de]\n(;W[fd]\n(;B[ch]\n(;W[ci]\n(;B[dh]\n(;W[ei]\n(;B[eh]\n(;W[fh]\n(;B[fe]\n(;W[ge]\n(;B[ed]\n(;W[ec]\n(;B[dd]\n(;W[cc]\n(;B[ff]\n(;W[gf]\n(;B[fg]\n(;W[gg]\n(;B[df]\n(;W[nd]\n(;B[gc]\n(;W[fc]\n(;B[ic]\n(;W[kc]\n(;B[jd]\n(;W[kd]\n(;B[jf]\n(;W[hd]\n(;B[hc]\n(;W[je]\n(;B[id]\n(;W[ie]\n(;B[ke]\n(;W[le]\n(;B[kf]\n(;W[gd]\n(;B[if]\n(;W[he]\n(;B[lf]\n(;W[me]\n(;B[oc]\n(;W[mf]\n(;B[mc]\n(;W[nc]\n(;B[nb]\n(;W[pe]\n(;B[lb]\n(;W[kb]\n(;B[ld]\n(;W[lc]\n(;B[mb]\n(;W[md]\n(;B[ka]\n(;W[ja]\n(;B[jb]\n(;W[la]\n(;B[ia]\n(;W[ka]\n(;B[gb]\n(;W[fb]\n(;B[hb]\n(;W[qe]\n(;B[qd]\n(;W[ga]\n(;B[ob]\n(;W[mh]\n(;B[ji]\n(;W[qn]\n(;B[qo]\n(;W[pn]\n(;B[np]\n(;W[pj]\n(;B[be]\n(;W[lq]\n(;B[ab]\n(;W[bb]\n(;B[ad]\n(;W[iq]\n(;B[mq]\n(;W[lp]\n(;B[ro]\n(;W[rn]\n(;B[ma]\n(;W[ld]\n(;B[mg]\n(;W[ng]\n(;B[lg]\n(;W[mi]\n(;B[jc]\n(;W[od]\n(;B[nh]\n(;W[og]\n(;B[ni]\n(;W[nj]\n(;B[li]\n(;W[mj]\n(;B[lj]\n(;W[lk]\n(;B[kk]\n(;W[oo]\n(;B[op]\n(;W[mn]\n(;B[re]\n(;W[rf]\n(;B[qf]\n(;W[pf]\n(;B[qg]\n(;W[rd]\n(;B[rc]\n(;W[se]\n(;B[rg]\n(;W[sc]\n(;B[rb]\n(;W[ri]\n(;B[sg]\n(;W[sb]\n(;B[ra]\n(;W[bq]\n(;B[pg]\n(;W[oh]\n(;B[sa]\n(;W[br]\n(;B[sd]\n(;W[sc]\n(;B[sb]\n(;W[hr]\n(;B[hq]\n(;W[ip]\n(;B[gr]\n(;W[ir]\n(;B[fs]\n(;W[lr]\n(;B[mr]\n(;W[gp]\n(;B[hp]\n(;W[ho]\n(;B[sd]\n(;W[re]\n(;B[sf]\n(;W[nf]\n(;B[oi]\n(;W[pi]\n(;B[ph]\n(;W[oj]\n(;B[gl]\n(;W[el]\n(;B[ll]\n(;W[ml]\n(;B[mk]\n(;W[nk]\n(;B[jm]\n(;W[sc]\n(;B[pc]\n(;W[bh]\n(;B[bg]\n(;W[bi]\n(;B[gh]\n(;W[fi]\n(;B[hi]\n(;W[gj]\n(;B[hj]\n(;W[lh]\n(;B[kh]\n(;W[fm]\n(;B[sn]\n(;W[sm]\n(;B[so]\n(;W[rl]\n(;B[gk]\n(;W[fk]\n(;B[gm]\n(;W[gn]\n(;B[no]\n(;W[nn]\n(;B[jo]\n(;W[io]\n(;B[im]\n(;W[jp]\n(;B[ko]\n(;W[lo]\n(;B[kp]\n(;W[kq]\n(;B[ms]\n(;W[hs]\n(;B[gs]\n(;W[po]\n(;B[fl]\n(;W[em]\n(;B[lm]\n(;W[qq]\n(;B[qp]\n(;W[or]\n(;B[pq]\n(;W[mp]\n(;B[nq]\n(;W[pr]\n(;B[qr]\n(;W[rq]\n(;B[rr]\n(;W[ls]\n(;B[mm]\n(;W[nl]\n(;B[nm]\n(;W[om]\n(;B[ln]\n(;W[mo]\n(;B[hg]\n(;W[gi]\n(;B[hh]\n(;W[hm]\n(;B[hl]\n(;W[hn]\n(;B[in]\n(;W[cs]\n(;B[ds]\n(;W[bs]\n(;B[ag]\n(;W[ah]\n(;B[bd]\n(;W[bc]\n(;B[ac]\n(;W[ba]\n(;B[sd]\n(;W[lk]\n(;B[kl]\n(;W[mk]\n(;B[sc]\n(;W[]\n(;B[hf]\n(;W[fa]\n(;B[aa]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "player_piano vs winchell",
          black_player: "player_piano",
          white_player: "winchell",
          black_rank: "5k",
          white_rank: "6k",
          komi: 6.5,
          result: "W+67.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998637/n1jtmanslrvizypl7vpy.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59507740]\nGN[Partie amicale]\nPB[achil.asus]\nPW[Glukkabar]\nBR[20k]\nWR[26k]\nTM[1200]OT[0 absolute]\nRE[B+61.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pp]\n(;W[pd]\n(;B[cq]\n(;W[dd]\n(;B[pj]\n(;W[cj]\n(;B[jp]\n(;W[em]\n(;B[jj]\n(;W[je]\n(;B[ne]\n(;W[og]\n(;B[mf]\n(;W[mc]\n(;B[ph]\n(;W[qg]\n(;B[pg]\n(;W[pf]\n(;B[of]\n(;W[pe]\n(;B[ng]\n(;W[oh]\n(;B[oi]\n(;W[nh]\n(;B[mh]\n(;W[oe]\n(;B[ni]\n(;W[nd]\n(;B[me]\n(;W[md]\n(;B[qc]\n(;W[pc]\n(;B[qd]\n(;W[qb]\n(;B[qe]\n(;W[qf]\n(;B[re]\n(;W[rf]\n(;B[sf]\n(;W[sg]\n(;B[se]\n(;W[rc]\n(;B[rb]\n(;W[ra]\n(;B[sc]\n(;W[sb]\n(;B[sd]\n(;W[rd]\n(;B[qh]\n(;W[rh]\n(;B[ri]\n(;W[si]\n(;B[rj]\n(;W[sj]\n(;B[sk]\n(;W[sh]\n(;B[rk]\n(;W[ld]\n(;B[le]\n(;W[fp]\n(;B[eq]\n(;W[io]\n(;B[jo]\n(;W[fq]\n(;B[ip]\n(;W[hp]\n(;B[ho]\n(;W[in]\n(;B[gp]\n(;W[go]\n(;B[hq]\n(;W[hn]\n(;B[hp]\n(;W[gq]\n(;B[jn]\n(;W[fr]\n(;B[jl]\n(;W[im]\n(;B[jm]\n(;W[il]\n(;B[ik]\n(;W[hk]\n(;B[ij]\n(;W[hj]\n(;B[hi]\n(;W[hh]\n(;B[ii]\n(;W[ih]\n(;B[fo]\n(;W[gn]\n(;B[eo]\n(;W[gi]\n(;B[jh]\n(;W[jg]\n(;B[kh]\n(;W[ke]\n(;B[kg]\n(;W[jf]\n(;B[kf]\n(;W[en]\n(;B[ep]\n(;W[do]\n(;B[dp]\n(;W[co]\n(;B[bp]\n(;W[bo]\n(;B[ap]\n(;W[ao]\n(;B[er]\n(;W[es]\n(;B[ds]\n(;W[fs]\n(;B[dr]\n(;W[hr]\n(;B[cp]\n(;W[ir]\n(;B[kr]\n(;W[jr]\n(;B[kq]\n(;W[ks]\n(;B[ls]\n(;W[js]\n(;B[lr]\n(;W[hs]\n(;B[jq]\n(;W[qq]\n(;B[qp]\n(;W[pq]\n(;B[oq]\n(;W[rq]\n(;B[rp]\n(;W[or]\n(;B[nr]\n(;W[ns]\n(;B[nq]\n(;W[os]\n(;B[sp]\n(;W[sq]\n(;B[op]\n(;W[qs]\n(;B[ms]\n(;W[pr]\n(;B[gj]\n(;W[fj]\n(;B[gk]\n(;W[fk]\n(;B[hl]\n(;W[fn]\n(;B[fi]\n(;W[gh]\n(;B[ej]\n(;W[ei]\n(;B[fh]\n(;W[fg]\n(;B[eh]\n(;W[dh]\n(;B[di]\n(;W[ci]\n(;B[fl]\n(;W[ek]\n(;B[el]\n(;W[dk]\n(;B[dl]\n(;W[dj]\n(;B[eg]\n(;W[ei]\n(;B[gg]\n(;W[ff]\n(;B[ig]\n(;W[gf]\n(;B[hg]\n(;W[if]\n(;B[hf]\n(;W[he]\n(;B[dg]\n(;W[ch]\n(;B[gm]\n(;W[fm]\n(;B[dm]\n(;W[dn]\n(;B[cl]\n(;W[hm]\n(;B[gl]\n(;W[bl]\n(;B[ck]\n(;W[bk]\n(;B[bm]\n(;W[al]\n(;B[cn]\n(;W[bn]\n(;B[cm]\n(;W[cg]\n(;B[df]\n(;W[cf]\n(;B[de]\n(;W[ce]\n(;B[ee]\n(;W[ed]\n(;B[fe]\n(;W[fd]\n(;B[gd]\n(;W[ge]\n(;B[an]\n(;W[hd]\n(;B[gc]\n(;W[gb]\n(;B[fc]\n(;W[ec]\n(;B[fb]\n(;W[fa]\n(;B[hb]\n(;W[ga]\n(;B[ea]\n(;W[ha]\n(;B[ia]\n(;W[db]\n(;B[hc]\n(;W[da]\n(;B[eb]\n(;W[dc]\n(;B[ga]\n(;W[ic]\n(;B[ib]\n(;W[jb]\n(;B[jc]\n(;W[id]\n(;B[kb]\n(;W[kc]\n(;B[ja]\n(;W[jd]\n(;B[jb]\n(;W[lb]\n(;B[ef]\n(;W[la]\n(;B[ka]\n(;W[np]\n(;B[no]\n(;W[nn]\n(;B[mp]\n(;W[nm]\n(;B[nl]\n(;W[pm]\n(;B[om]\n(;W[ol]\n(;B[on]\n(;W[lm]\n(;B[mm]\n(;W[ml]\n(;B[mn]\n(;W[nk]\n(;B[nm]\n(;W[ll]\n(;B[ok]\n(;W[pl]\n(;B[mk]\n(;W[lk]\n(;B[nj]\n(;W[lo]\n(;B[ln]\n(;W[kn]\n(;B[km]\n(;W[pn]\n(;B[ko]\n(;W[rl]\n(;B[ql]\n(;W[pk]\n(;B[rm]\n(;W[qm]\n(;B[sl]\n(;W[ro]\n(;B[qk]\n(;W[rn]\n(;B[po]\n(;W[qo]\n(;B[qn]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "achil.asus vs Glukkabar",
          black_player: "achil.asus",
          white_player: "Glukkabar",
          black_rank: "20k",
          white_rank: "26k",
          komi: 6.5,
          result: "B+61.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998645/nsslebmrbozpl4nklkoa.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-06]\nPC[OGS: https://online-go.com/game/58666673]\nGN[Steal-Your-Money vs. winchell]\nPB[Steal-Your-Money]\nPW[winchell]\nBR[6k]\nWR[5k]\nTM[1200]OT[5x30 byo-yomi]\nRE[?]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[qd]\n(;W[dd]\n(;B[cp]\n(;W[pq]\n(;B[cc]\n(;W[dc]\n(;B[cd]\n(;W[de]\n(;B[ce]\n(;W[cf]\n(;B[bf]\n(;W[nc]\n(;B[lc]\n(;W[ic]\n(;B[pc]\n(;W[ne]\n(;B[le]\n(;W[pf]\n(;B[rf]\n(;W[kd]\n(;B[ld]\n(;W[mb]\n(;B[nf]\n(;W[oe]\n(;B[jf]\n(;W[mf]\n(;B[cg]\n(;W[df]\n(;B[cb]\n(;W[rg]\n(;B[jd]\n(;W[re]\n(;B[rd]\n(;W[qe]\n(;B[qo]\n(;W[ob]\n(;B[pb]\n(;W[rb]\n(;B[se]\n(;W[qf]\n(;B[qb]\n(;W[rc]\n(;B[ra]\n(;W[pa]\n(;B[sb]\n(;W[sc]\n(;B[pd]\n(;W[sa]\n(;B[nd]\n(;W[od]\n(;B[sb]\n(;W[sf]\n(;B[sd]\n(;W[sa]\n(;B[md]\n(;W[qa]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-06T00:00:00+00:00",
          sgf_name: "Steal-Your-Money vs winchell",
          black_player: "Steal-Your-Money",
          white_player: "winchell",
          black_rank: "6k",
          white_rank: "5k",
          komi: 6.5,
          result: "?",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999244/xg29mi6m3snrnwmzuxq2.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-05]\nPC[OGS: https://online-go.com/game/59488502]\nGN[\u89aa\u7766\u6226]\nPB[morikon25]\nPW[pitsodark]\nBR[1k]\nWR[1k]\nTM[300]OT[5x30 byo-yomi]\nRE[W+21.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[oc]\n(;W[qd]\n(;B[pf]\n(;W[od]\n(;B[pd]\n(;W[pe]\n(;B[pc]\n(;W[qe]\n(;B[oe]\n(;W[nd]\n(;B[qc]\n(;W[qf]\n(;B[pg]\n(;W[ne]\n(;B[of]\n(;W[qg]\n(;B[ph]\n(;W[nc]\n(;B[qh]\n(;W[rc]\n(;B[rb]\n(;W[sd]\n(;B[nb]\n(;W[sb]\n(;B[pb]\n(;W[mb]\n(;B[rg]\n(;W[ra]\n(;B[lb]\n(;W[na]\n(;B[qa]\n(;W[qb]\n(;B[mc]\n(;W[pa]\n(;B[ma]\n(;W[ob]\n(;B[ed]\n(;W[pp]\n(;B[ep]\n(;W[cc]\n(;B[ce]\n(;W[dd]\n(;B[de]\n(;W[ec]\n(;B[fd]\n(;W[fc]\n(;B[gd]\n(;W[cq]\n(;B[cp]\n(;W[co]\n(;B[bp]\n(;W[dp]\n(;B[do]\n(;W[dq]\n(;B[cn]\n(;W[eo]\n(;B[bo]\n(;W[dn]\n(;B[nq]\n(;W[qn]\n(;B[jp]\n(;W[pj]\n(;B[mg]\n(;W[dm]\n(;B[cl]\n(;W[cm]\n(;B[bm]\n(;W[co]\n(;B[bn]\n(;W[dl]\n(;B[ck]\n(;W[lq]\n(;B[pq]\n(;W[qq]\n(;B[qr]\n(;W[oq]\n(;B[pr]\n(;W[np]\n(;B[or]\n(;W[op]\n(;B[mq]\n(;W[mp]\n(;B[lr]\n(;W[kq]\n(;B[kr]\n(;W[jq]\n(;B[hp]\n(;W[ke]\n(;B[jd]\n(;W[kd]\n(;B[kc]\n(;W[ic]\n(;B[jc]\n(;W[he]\n(;B[gc]\n(;W[id]\n(;B[je]\n(;W[kf]\n(;B[jf]\n(;W[jg]\n(;B[kg]\n(;W[lg]\n(;B[kh]\n(;W[lh]\n(;B[lf]\n(;W[mf]\n(;B[oj]\n(;W[pk]\n(;B[ok]\n(;W[ig]\n(;B[li]\n(;W[mh]\n(;B[mi]\n(;W[nh]\n(;B[hf]\n(;W[ge]\n(;B[hg]\n(;W[ff]\n(;B[fb]\n(;W[eb]\n(;B[hb]\n(;W[ib]\n(;B[if]\n(;W[ki]\n(;B[jh]\n(;W[ih]\n(;B[ji]\n(;W[ee]\n(;B[bc]\n(;W[gb]\n(;B[ga]\n(;W[hc]\n(;B[cb]\n(;W[ea]\n(;B[da]\n(;W[db]\n(;B[cd]\n(;W[ii]\n(;B[jj]\n(;W[oi]\n(;B[pl]\n(;W[ql]\n(;B[ol]\n(;W[ij]\n(;B[lo]\n(;W[jk]\n(;B[kj]\n(;W[gh]\n(;B[qm]\n(;W[rm]\n(;B[lp]\n(;W[iq]\n(;B[gq]\n(;W[gr]\n(;B[fr]\n(;W[fq]\n(;B[hr]\n(;W[ip]\n(;B[io]\n(;W[kp]\n(;B[gj]\n(;W[gi]\n(;B[eh]\n(;W[jb]\n(;B[gg]\n(;W[fg]\n(;B[fh]\n(;W[fe]\n(;B[ik]\n(;W[hk]\n(;B[il]\n(;W[hj]\n(;B[fl]\n(;W[fj]\n(;B[gk]\n(;W[fi]\n(;B[ek]\n(;W[di]\n(;B[dh]\n(;W[dj]\n(;B[dk]\n(;W[ch]\n(;B[dg]\n(;W[cg]\n(;B[ef]\n(;W[hl]\n(;B[im]\n(;W[gl]\n(;B[fk]\n(;W[gn]\n(;B[bi]\n(;W[ci]\n(;B[kn]\n(;W[kb]\n(;B[ka]\n(;W[ja]\n(;B[la]\n(;W[ld]\n(;B[lc]\n(;W[md]\n(;B[oa]\n(;W[jo]\n(;B[hn]\n(;W[na]\n(;B[dc]\n(;W[ie]\n(;B[oa]\n(;W[gf]\n(;B[hd]\n(;W[jn]\n(;B[km]\n(;W[pm]\n(;B[gm]\n(;W[hh]\n(;B[eg]\n(;W[bj]\n(;B[bk]\n(;W[ai]\n(;B[bf]\n(;W[hm]\n(;B[in]\n(;W[nm]\n(;B[fm]\n(;W[nj]\n(;B[nk]\n(;W[mk]\n(;B[mj]\n(;W[ni]\n(;B[ml]\n(;W[lk]\n(;B[kk]\n(;W[ll]\n(;B[lm]\n(;W[nl]\n(;B[er]\n(;W[dr]\n(;B[eq]\n(;W[om]\n(;B[rp]\n(;W[jl]\n(;B[jm]\n(;W[kl]\n(;B[qp]\n(;W[qo]\n(;B[ia]\n(;W[mm]\n(;B[mo]\n(;W[rq]\n(;B[rr]\n(;W[ro]\n(;B[sq]\n(;W[no]\n(;B[ag]\n(;W[bh]\n(;B[cf]\n(;W[mn]\n(;B[ko]\n(;W[bq]\n(;B[aq]\n(;W[ar]\n(;B[bs]\n(;W[br]\n(;B[cs]\n(;W[go]\n(;B[ho]\n(;W[al]\n(;B[ak]\n(;W[ap]\n(;B[do]\n(;W[fp]\n(;B[ds]\n(;W[hq]\n(;B[gs]\n(;W[gp]\n(;B[jp]\n(;W[gr]\n(;B[en]\n(;W[gq]\n(;B[fo]\n(;W[ln]\n(;B[ir]\n(;W[jo]\n(;B[jr]\n(;W[jn]\n(;B[so]\n(;W[sn]\n(;B[na]\n(;W[]\n(;B[sp]\n(;W[ei]\n(;B[fn]\n(;W[]\n(;B[ah]\n(;W[]\n(;B[bg]\n(;W[cj]\n(;B[aj]\n(;W[bi]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "morikon25 vs pitsodark",
          black_player: "morikon25",
          white_player: "pitsodark",
          black_rank: "1k",
          white_rank: "1k",
          komi: 6.5,
          result: "W+21.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998658/z7wvhk0sy9h9ai0s9ldw.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-04]\nPC[OGS: https://online-go.com/game/59485431]\nGN[Partie amicale]\nPB[achil.asus]\nPW[John-Lee]\nBR[21k]\nWR[23k]\nTM[1200]OT[0 absolute]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pp]\n(;W[dd]\n(;B[dp]\n(;W[pd]\n(;B[pj]\n(;W[og]\n(;B[mh]\n(;W[mg]\n(;B[nh]\n(;W[ng]\n(;B[oi]\n(;W[rg]\n(;B[qi]\n(;W[cg]\n(;B[kg]\n(;W[kf]\n(;B[lg]\n(;W[lf]\n(;B[if]\n(;W[jg]\n(;B[jf]\n(;W[lh]\n(;B[kh]\n(;W[ki]\n(;B[li]\n(;W[he]\n(;B[jh]\n(;W[ig]\n(;B[ih]\n(;W[hg]\n(;B[kj]\n(;W[hf]\n(;B[je]\n(;W[ke]\n(;B[jd]\n(;W[kc]\n(;B[kd]\n(;W[ld]\n(;B[jc]\n(;W[jb]\n(;B[ic]\n(;W[id]\n(;B[hc]\n(;W[gc]\n(;B[hd]\n(;W[ie]\n(;B[gd]\n(;W[fd]\n(;B[ge]\n(;W[ff]\n(;B[fe]\n(;W[ee]\n(;B[gb]\n(;W[fc]\n(;B[gf]\n(;W[gg]\n(;B[fg]\n(;W[ef]\n(;B[gh]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "achil.asus vs John-Lee",
          black_player: "achil.asus",
          white_player: "John-Lee",
          black_rank: "21k",
          white_rank: "23k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998668/kvsrbolk86jlv58xndke.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-04]\nPC[OGS: https://online-go.com/game/59479343]\nGN[Friendly Match]\nPB[shelly613]\nPW[S3BA]\nBR[11k]\nWR[12k]\nTM[480]OT[3x30 byo-yomi]\nRE[B+26.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[dq]\n(;W[pd]\n(;B[qp]\n(;W[dd]\n(;B[jq]\n(;W[pj]\n(;B[nq]\n(;W[dj]\n(;B[gp]\n(;W[jd]\n(;B[dl]\n(;W[cg]\n(;B[ql]\n(;W[jl]\n(;B[jj]\n(;W[hk]\n(;B[ok]\n(;W[mk]\n(;B[nj]\n(;W[mj]\n(;B[mi]\n(;W[li]\n(;B[lj]\n(;W[lk]\n(;B[kj]\n(;W[kh]\n(;B[lh]\n(;W[ki]\n(;B[ij]\n(;W[mh]\n(;B[ni]\n(;W[lg]\n(;B[hj]\n(;W[lm]\n(;B[gk]\n(;W[jn]\n(;B[hl]\n(;W[ik]\n(;B[il]\n(;W[jk]\n(;B[kk]\n(;W[kl]\n(;B[gj]\n(;W[nm]\n(;B[nl]\n(;W[ml]\n(;B[nn]\n(;W[mn]\n(;B[om]\n(;W[mm]\n(;B[nk]\n(;W[ko]\n(;B[lo]\n(;W[ln]\n(;B[mo]\n(;W[im]\n(;B[hm]\n(;W[hn]\n(;B[gn]\n(;W[io]\n(;B[ho]\n(;W[in]\n(;B[ip]\n(;W[kp]\n(;B[kq]\n(;W[lp]\n(;B[mp]\n(;W[lq]\n(;B[mq]\n(;W[lr]\n(;B[hq]\n(;W[jp]\n(;B[jr]\n(;W[mr]\n(;B[nr]\n(;W[km]\n(;B[ph]\n(;W[qh]\n(;B[qi]\n(;W[qg]\n(;B[pi]\n(;W[pg]\n(;B[og]\n(;W[of]\n(;B[nh]\n(;W[ng]\n(;B[oh]\n(;W[pe]\n(;B[rh]\n(;W[rg]\n(;B[sh]\n(;W[sg]\n(;B[rj]\n(;W[qc]\n(;B[ji]\n(;W[jh]\n(;B[ih]\n(;W[gc]\n(;B[jc]\n(;W[ic]\n(;B[kc]\n(;W[kd]\n(;B[lc]\n(;W[mc]\n(;B[ld]\n(;W[md]\n(;B[le]\n(;W[me]\n(;B[ib]\n(;W[hb]\n(;B[id]\n(;W[hc]\n(;B[je]\n(;W[hd]\n(;B[ie]\n(;W[he]\n(;B[jb]\n(;W[cc]\n(;B[mb]\n(;W[nb]\n(;B[ma]\n(;W[na]\n(;B[lb]\n(;W[oc]\n(;B[jg]\n(;W[kg]\n(;B[mf]\n(;W[mg]\n(;B[lf]\n(;W[nf]\n(;B[ke]\n(;W[gg]\n(;B[gh]\n(;W[fh]\n(;B[fi]\n(;W[eh]\n(;B[hg]\n(;W[gf]\n(;B[hf]\n(;W[ei]\n(;B[ej]\n(;W[ck]\n(;B[dk]\n(;W[ci]\n(;B[cl]\n(;W[bk]\n(;B[bl]\n(;W[on]\n(;B[no]\n(;W[oo]\n(;B[op]\n(;W[jf]\n(;B[ig]\n(;W[kf]\n(;B[if]\n(;W[cq]\n(;B[cr]\n(;W[cp]\n(;B[bq]\n(;W[bp]\n(;B[br]\n(;W[al]\n(;B[am]\n(;W[ak]\n(;B[bn]\n(;W[]\n(;B[ha]\n(;W[ga]\n(;B[ia]\n(;W[]\n(;B[fg]\n(;W[ff]\n(;B[eg]\n(;W[dh]\n(;B[ef]\n(;W[fe]\n(;B[ee]\n(;W[fd]\n(;B[ed]\n(;W[ec]\n(;B[]\n(;W[]\n(;B[ms]\n(;W[ls]\n(;B[ns]\n(;W[]\n(;B[js]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "shelly613 vs S3BA",
          black_player: "shelly613",
          white_player: "S3BA",
          black_rank: "11k",
          white_rank: "12k",
          komi: 6.5,
          result: "B+26.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998681/n096qnlv3lxapuqnwxlw.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-04]\nPC[OGS: https://online-go.com/game/59479111]\nGN[Friendly Match]\nPB[skr0nk]\nPW[shelly613]\nBR[11k]\nWR[12k]\nTM[480]OT[3x30 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dq]\n(;B[cd]\n(;W[qp]\n(;B[ec]\n(;W[jq]\n(;B[cj]\n(;W[nq]\n(;B[co]\n(;W[gp]\n(;B[jc]\n(;W[cp]\n(;B[do]\n(;W[dp]\n(;B[ej]\n(;W[eo]\n(;B[en]\n(;W[fo]\n(;B[fn]\n(;W[gn]\n(;B[fl]\n(;W[hl]\n(;B[qj]\n(;W[qk]\n(;B[oj]\n(;W[ok]\n(;B[mk]\n(;W[nk]\n(;B[nj]\n(;W[ml]\n(;B[lk]\n(;W[ll]\n(;B[je]\n(;W[kk]\n(;B[li]\n(;W[kj]\n(;B[ki]\n(;W[gj]\n(;B[gk]\n(;W[hk]\n(;B[hj]\n(;W[ij]\n(;B[hi]\n(;W[ii]\n(;B[hh]\n(;W[gl]\n(;B[fk]\n(;W[ih]\n(;B[ig]\n(;W[jh]\n(;B[kh]\n(;W[jg]\n(;B[hg]\n(;W[kg]\n(;B[lg]\n(;W[lf]\n(;B[mg]\n(;W[kf]\n(;B[qc]\n(;W[qg]\n(;B[ph]\n(;W[rj]\n(;B[qh]\n(;W[rh]\n(;B[qf]\n(;W[pg]\n(;B[rf]\n(;W[rg]\n(;B[pf]\n(;W[og]\n(;B[mf]\n(;W[of]\n(;B[oe]\n(;W[oh]\n(;B[oi]\n(;W[pj]\n(;B[pi]\n(;W[qi]\n(;B[nh]\n(;W[ng]\n(;B[me]\n(;W[mj]\n(;B[mi]\n(;W[lj]\n(;B[mc]\n(;W[ni]\n(;B[jf]\n(;W[jj]\n(;B[cg]\n(;W[bo]\n(;B[bn]\n(;W[bp]\n(;B[cn]\n(;W[le]\n(;B[ld]\n(;W[mh]\n(;B[lh]\n(;W[nh]\n(;B[qn]\n(;W[po]\n(;B[qq]\n(;W[rq]\n(;B[pq]\n(;W[qr]\n(;B[pp]\n(;W[qo]\n(;B[pr]\n(;W[rr]\n(;B[lq]\n(;W[op]\n(;B[nr]\n(;W[mr]\n(;B[or]\n(;W[mq]\n(;B[gm]\n(;W[hm]\n(;B[fm]\n(;W[ho]\n(;B[ke]\n(;W[cc]\n(;B[dc]\n(;W[cb]\n(;B[db]\n(;W[bd]\n(;B[be]\n(;W[ce]\n(;B[dd]\n(;W[bf]\n(;B[ae]\n(;W[af]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "skr0nk vs shelly613",
          black_player: "skr0nk",
          white_player: "shelly613",
          black_rank: "11k",
          white_rank: "12k",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998692/vzpx6vpytez00cwbbzfj.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-04]\nPC[OGS: https://online-go.com/game/59470492]\nGN[Partie amicale]\nPB[achil.asus]\nPW[tim.lyonnet]\nBR[21k]\nWR[26k]\nTM[1200]OT[0 absolute]\nRE[?]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[dp]\n(;W[pd]\n(;B[pp]\n(;W[dd]\n(;B[qj]\n(;W[jj]\n(;B[jp]\n(;W[pj]\n(;B[qk]\n(;W[pk]\n(;B[ql]\n(;W[pl]\n(;B[qm]\n(;W[pm]\n(;B[qn]\n(;W[pn]\n(;B[qo]\n(;W[po]\n(;B[qq]\n(;W[op]\n(;B[oq]\n(;W[np]\n(;B[oo]\n(;W[no]\n(;B[on]\n(;W[om]\n(;B[nn]\n(;W[mn]\n(;B[nm]\n(;W[nl]\n(;B[ll]\n(;W[ml]\n(;B[lm]\n(;W[mm]\n(;B[ln]\n(;W[lo]\n(;B[lp]\n(;W[mo]\n(;B[mp]\n(;W[nq]\n(;B[or]\n(;W[nr]\n(;B[mq]\n(;W[lk]\n(;B[kl]\n(;W[kk]\n(;B[jl]\n(;W[os]\n(;B[ps]\n(;W[ns]\n(;B[pq]\n(;W[mr]\n(;B[kj]\n(;W[ki]\n(;B[lj]\n(;W[mj]\n(;B[qc]\n(;W[pc]\n(;B[qd]\n(;W[qe]\n(;B[pe]\n(;W[pf]\n(;B[oe]\n(;W[qf]\n(;B[pb]\n(;W[oc]\n(;B[of]\n(;W[ob]\n(;B[rd]\n(;W[qb]\n(;B[pg]\n(;W[qg]\n(;B[re]\n(;W[ph]\n(;B[og]\n(;W[oh]\n(;B[qh]\n(;W[qi]\n(;B[rh]\n(;W[ri]\n(;B[rg]\n(;W[rc]\n(;B[rf]\n(;W[rb]\n(;B[rj]\n(;W[pi]\n(;B[si]\n(;W[ne]\n(;B[ng]\n(;W[nh]\n(;B[mg]\n(;W[mh]\n(;B[mf]\n(;W[me]\n(;B[lf]\n(;W[ke]\n(;B[sh]\n(;W[sd]\n(;B[sj]\n(;W[kf]\n(;B[le]\n(;W[ld]\n(;B[md]\n(;W[nd]\n(;B[mc]\n(;W[nc]\n(;B[kd]\n(;W[lc]\n(;B[mb]\n(;W[lb]\n(;B[se]\n(;W[ma]\n(;B[sc]\n(;W[nb]\n(;B[jk]\n(;W[li]\n(;B[kp]\n(;W[sb]\n(;B[sd]\n(;W[jd]\n(;B[kg]\n(;W[jg]\n(;B[kh]\n(;W[jh]\n(;B[lg]\n(;W[ik]\n(;B[il]\n(;W[hk]\n(;B[gk]\n(;W[gl]\n(;B[fl]\n(;W[fk]\n(;B[gj]\n(;W[gi]\n(;B[hl]\n(;W[gm]\n(;B[ij]\n(;W[fm]\n(;B[hj]\n(;W[el]\n(;B[ii]\n(;W[ih]\n(;B[ji]\n(;W[kj]\n(;B[fj]\n(;W[fi]\n(;B[ek]\n(;W[fl]\n(;B[ej]\n(;W[hm]\n(;B[im]\n(;W[in]\n(;B[ko]\n(;W[io]\n(;B[ip]\n(;W[hp]\n(;B[hq]\n(;W[gp]\n(;B[gq]\n(;W[fq]\n(;B[fr]\n(;W[ep]\n(;B[eq]\n(;W[fp]\n(;B[dq]\n(;W[do]\n(;B[dm]\n(;W[dl]\n(;B[cm]\n(;W[dn]\n(;B[cn]\n(;W[co]\n(;B[cl]\n(;W[dk]\n(;B[dj]\n(;W[ck]\n(;B[cj]\n(;W[bk]\n(;B[bo]\n(;W[cp]\n(;B[cq]\n(;W[bp]\n(;B[bq]\n(;W[bn]\n(;B[ao]\n(;W[an]\n(;B[aq]\n(;W[ap]\n(;B[bj]\n(;W[bl]\n(;B[ak]\n(;W[al]\n(;B[aj]\n(;W[em]\n(;B[gg]\n(;W[fg]\n(;B[gf]\n(;W[ff]\n(;B[he]\n(;W[ge]\n(;B[gd]\n(;W[fe]\n(;B[hd]\n(;W[hf]\n(;B[hg]\n(;W[if]\n(;B[ie]\n(;W[gh]\n(;B[ig]\n(;W[jf]\n(;B[je]\n(;W[hh]\n(;B[kc]\n(;W[jc]\n(;B[fd]\n(;W[ed]\n(;B[ei]\n(;W[eh]\n(;B[dh]\n(;W[di]\n(;B[ci]\n(;W[dg]\n(;B[cg]\n(;W[eg]\n(;B[cf]\n(;W[ce]\n(;B[be]\n(;W[bd]\n(;B[bf]\n(;W[ae]\n(;B[af]\n(;W[ad]\n(;B[ec]\n(;W[fc]\n(;B[fb]\n(;W[gc]\n(;B[hc]\n(;W[eb]\n(;B[gb]\n(;W[dc]\n(;B[fc]\n(;W[fa]\n(;B[ga]\n(;W[ea]\n(;B[ib]\n(;W[kb]\n(;B[jb]\n(;W[db]\n(;B[ha]\n(;W[ja]\n(;B[ia]\n(;W[ka]\n(;B[lr]\n(;W[ls]\n(;B[ks]\n(;W[ms]\n(;B[kr]\n(;W[pa]\n(;B[od]\n(;W[]\n(;B[jn]\n(;W[jo]\n(;B[nf]\n(;W[qf]\n(;B[qg]\n(;W[iq]\n(;B[ir]\n(;W[gr]\n(;B[jq]\n(;W[fs]\n(;B[er]\n(;W[es]\n(;B[hr]\n(;W[rr]\n(;B[rq]\n(;W[qr]\n(;B[pr]\n(;W[rp]\n(;B[sq]\n(;W[ro]\n(;B[qp]\n(;W[rn]\n(;B[rm]\n(;W[sm]\n(;B[sl]\n(;W[sn]\n(;B[sp]\n(;W[df]\n(;B[so]\n(;W[]\n(;B[gs]\n(;W[cr]\n(;B[ds]\n(;W[]\n(;B[]\n(;W[]\n(;B[sr]\n(;W[]\n(;B[qs]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "achil.asus vs tim.lyonnet",
          black_player: "achil.asus",
          white_player: "tim.lyonnet",
          black_rank: "21k",
          white_rank: "26k",
          komi: 6.5,
          result: "?",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998708/xd4fxprccdqrssgpcglz.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-04]\nPC[OGS: https://online-go.com/game/59467934]\nGN[GuillaumeCouty vs. HungYuk]\nPB[GuillaumeCouty]\nPW[HungYuk]\nBR[9k]\nWR[8k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+36.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pc]\n(;W[pp]\n(;B[cd]\n(;W[dp]\n(;B[cn]\n(;W[cp]\n(;B[ck]\n(;W[jp]\n(;B[nq]\n(;W[oq]\n(;B[np]\n(;W[pe]\n(;B[pd]\n(;W[qe]\n(;B[qn]\n(;W[oo]\n(;B[kq]\n(;W[ql]\n(;B[rp]\n(;W[qq]\n(;B[rq]\n(;W[pm]\n(;B[qm]\n(;W[pl]\n(;B[rl]\n(;W[rk]\n(;B[sm]\n(;W[jq]\n(;B[kp]\n(;W[ko]\n(;B[no]\n(;W[on]\n(;B[lo]\n(;W[jn]\n(;B[ln]\n(;W[ni]\n(;B[og]\n(;W[nf]\n(;B[ng]\n(;W[mf]\n(;B[mg]\n(;W[lf]\n(;B[lg]\n(;W[id]\n(;B[mc]\n(;W[ec]\n(;B[dc]\n(;W[ed]\n(;B[cf]\n(;W[li]\n(;B[kg]\n(;W[fg]\n(;B[kf]\n(;W[kd]\n(;B[ke]\n(;W[of]\n(;B[ld]\n(;W[kc]\n(;B[le]\n(;W[ph]\n(;B[pg]\n(;W[qg]\n(;B[qh]\n(;W[qi]\n(;B[qf]\n(;W[rh]\n(;B[pf]\n(;W[rf]\n(;B[oe]\n(;W[qc]\n(;B[qd]\n(;W[re]\n(;B[rc]\n(;W[rd]\n(;B[qb]\n(;W[kr]\n(;B[lr]\n(;W[fn]\n(;B[jr]\n(;W[ir]\n(;B[ks]\n(;W[fl]\n(;B[in]\n(;W[io]\n(;B[jm]\n(;W[hq]\n(;B[kn]\n(;W[jo]\n(;B[im]\n(;W[km]\n(;B[kl]\n(;W[lm]\n(;B[mm]\n(;W[ll]\n(;B[lk]\n(;W[ml]\n(;B[jk]\n(;W[nm]\n(;B[mn]\n(;W[mk]\n(;B[lj]\n(;W[mj]\n(;B[ki]\n(;W[rr]\n(;B[qp]\n(;W[qr]\n(;B[pn]\n(;W[po]\n(;B[qo]\n(;W[sq]\n(;B[rn]\n(;W[dh]\n(;B[ch]\n(;W[di]\n(;B[ci]\n(;W[dj]\n(;B[dk]\n(;W[ek]\n(;B[go]\n(;W[hn]\n(;B[hm]\n(;W[gn]\n(;B[eo]\n(;W[do]\n(;B[dn]\n(;W[en]\n(;B[dg]\n(;W[eg]\n(;B[fi]\n(;W[fj]\n(;B[gj]\n(;W[gk]\n(;B[hj]\n(;W[hk]\n(;B[ik]\n(;W[gi]\n(;B[hi]\n(;W[gh]\n(;B[hh]\n(;W[hg]\n(;B[ig]\n(;W[hf]\n(;B[if]\n(;W[ie]\n(;B[lh]\n(;W[de]\n(;B[ce]\n(;W[bo]\n(;B[bn]\n(;W[lb]\n(;B[mb]\n(;W[db]\n(;B[cb]\n(;W[dd]\n(;B[cc]\n(;W[dm]\n(;B[cm]\n(;W[dl]\n(;B[cj]\n(;W[cl]\n(;B[bl]\n(;W[co]\n(;B[an]\n(;W[ao]\n(;B[bk]\n(;W[df]\n(;B[cg]\n(;W[oh]\n(;B[mi]\n(;W[nh]\n(;B[mh]\n(;W[nn]\n(;B[mp]\n(;W[nr]\n(;B[mr]\n(;W[or]\n(;B[sp]\n(;W[sk]\n(;B[eb]\n(;W[sl]\n(;B[fb]\n(;W[so]\n(;B[gd]\n(;W[gc]\n(;B[fc]\n(;W[fd]\n(;B[hc]\n(;W[hd]\n(;B[gb]\n(;W[ge]\n(;B[ic]\n(;W[jc]\n(;B[lc]\n(;W[kb]\n(;B[je]\n(;W[jd]\n(;B[ib]\n(;W[gc]\n(;B[ho]\n(;W[hp]\n(;B[fo]\n(;W[fp]\n(;B[ep]\n(;W[eq]\n(;B[em]\n(;W[el]\n(;B[hl]\n(;W[gp]\n(;B[is]\n(;W[hs]\n(;B[js]\n(;W[ms]\n(;B[ls]\n(;W[ns]\n(;B[gm]\n(;W[fm]\n(;B[gl]\n(;W[fk]\n(;B[sd]\n(;W[se]\n(;B[sc]\n(;W[ma]\n(;B[na]\n(;W[la]\n(;B[ob]\n(;W[ia]\n(;B[ha]\n(;W[ja]\n(;B[da]\n(;W[jb]\n(;B[hb]\n(;W[gd]\n(;B[op]\n(;W[]\n(;B[qk]\n(;W[pk]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "GuillaumeCouty vs HungYuk",
          black_player: "GuillaumeCouty",
          white_player: "HungYuk",
          black_rank: "9k",
          white_rank: "8k",
          komi: 6.5,
          result: "W+36.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998733/fgos9naqzqp0frf7t9m3.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-04]\nPC[OGS: https://online-go.com/game/59465870]\nGN[M.FUJISAWA vs. SgtSunshine]\nPB[M.FUJISAWA]\nPW[SgtSunshine]\nBR[10k]\nWR[10k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+22.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dp]\n(;B[pq]\n(;W[dc]\n(;B[de]\n(;W[po]\n(;B[cc]\n(;W[bc]\n(;B[cb]\n(;W[cd]\n(;B[dd]\n(;W[bd]\n(;B[ec]\n(;W[bf]\n(;B[cg]\n(;W[bg]\n(;B[ch]\n(;W[cf]\n(;B[df]\n(;W[ce]\n(;B[eg]\n(;W[np]\n(;B[qo]\n(;W[pp]\n(;B[qp]\n(;W[oq]\n(;B[pr]\n(;W[or]\n(;B[pn]\n(;W[qn]\n(;B[on]\n(;W[qm]\n(;B[no]\n(;W[op]\n(;B[mn]\n(;W[kq]\n(;B[rr]\n(;W[ps]\n(;B[qr]\n(;W[qj]\n(;B[qh]\n(;W[ro]\n(;B[rp]\n(;W[so]\n(;B[rq]\n(;W[hq]\n(;B[mp]\n(;W[mq]\n(;B[lp]\n(;W[lq]\n(;B[kp]\n(;W[kn]\n(;B[jp]\n(;W[jq]\n(;B[hp]\n(;W[ip]\n(;B[io]\n(;W[iq]\n(;B[jn]\n(;W[km]\n(;B[gp]\n(;W[gq]\n(;B[fp]\n(;W[fq]\n(;B[ep]\n(;W[eq]\n(;B[do]\n(;W[fn]\n(;B[fo]\n(;W[cp]\n(;B[co]\n(;W[en]\n(;B[eo]\n(;W[hm]\n(;B[bp]\n(;W[bq]\n(;B[aq]\n(;W[bo]\n(;B[ap]\n(;W[ao]\n(;B[bn]\n(;W[ar]\n(;B[cm]\n(;W[dn]\n(;B[cn]\n(;W[fl]\n(;B[dk]\n(;W[jm]\n(;B[hn]\n(;W[kc]\n(;B[mc]\n(;W[hc]\n(;B[pl]\n(;W[ql]\n(;B[pj]\n(;W[pk]\n(;B[ok]\n(;W[qk]\n(;B[pi]\n(;W[oj]\n(;B[nk]\n(;W[ni]\n(;B[nh]\n(;W[mi]\n(;B[mh]\n(;W[li]\n(;B[oi]\n(;W[pm]\n(;B[om]\n(;W[ol]\n(;B[nl]\n(;W[nj]\n(;B[mm]\n(;W[kk]\n(;B[lh]\n(;W[kh]\n(;B[kg]\n(;W[lf]\n(;B[ki]\n(;W[kj]\n(;B[jh]\n(;W[hj]\n(;B[lj]\n(;W[lk]\n(;B[mj]\n(;W[kf]\n(;B[jf]\n(;W[ig]\n(;B[jg]\n(;W[ld]\n(;B[ne]\n(;W[je]\n(;B[if]\n(;W[ie]\n(;B[hf]\n(;W[he]\n(;B[hg]\n(;W[fj]\n(;B[gm]\n(;W[gl]\n(;B[gn]\n(;W[fm]\n(;B[im]\n(;W[il]\n(;B[hl]\n(;W[hk]\n(;B[hm]\n(;W[jk]\n(;B[gb]\n(;W[hb]\n(;B[gc]\n(;W[gd]\n(;B[fd]\n(;W[fe]\n(;B[ee]\n(;W[ff]\n(;B[fg]\n(;W[ge]\n(;B[kb]\n(;W[lb]\n(;B[lc]\n(;W[jb]\n(;B[kd]\n(;W[ka]\n(;B[le]\n(;W[jd]\n(;B[md]\n(;W[ke]\n(;B[ld]\n(;W[ob]\n(;B[mb]\n(;W[qc]\n(;B[qd]\n(;W[rc]\n(;B[ma]\n(;W[la]\n(;B[oc]\n(;W[pc]\n(;B[nc]\n(;W[rd]\n(;B[re]\n(;W[sd]\n(;B[qf]\n(;W[rh]\n(;B[ri]\n(;W[rj]\n(;B[rg]\n(;W[si]\n(;B[sh]\n(;W[sj]\n(;B[qa]\n(;W[ra]\n(;B[oa]\n(;W[qb]\n(;B[pa]\n(;W[sb]\n(;B[nb]\n(;W[pb]\n(;B[na]\n(;W[mf]\n(;B[nf]\n(;W[me]\n(;B[nd]\n(;W[gh]\n(;B[gg]\n(;W[fh]\n(;B[eh]\n(;W[hh]\n(;B[ih]\n(;W[ii]\n(;B[ji]\n(;W[jj]\n(;B[ej]\n(;W[ei]\n(;B[di]\n(;W[fi]\n(;B[fk]\n(;W[gk]\n(;B[ek]\n(;W[aj]\n(;B[ai]\n(;W[bi]\n(;B[bj]\n(;W[ah]\n(;B[ak]\n(;W[ai]\n(;B[bh]\n(;W[ag]\n(;B[cj]\n(;W[bk]\n(;B[al]\n(;W[bb]\n(;B[ca]\n(;W[ba]\n(;B[db]\n(;W[ll]\n(;B[ko]\n(;W[ln]\n(;B[lo]\n(;W[sm]\n(;B[qs]\n(;W[os]\n(;B[sp]\n(;W[se]\n(;B[sf]\n(;W[ga]\n(;B[fa]\n(;W[ha]\n(;B[qi]\n(;W[fb]\n(;B[fc]\n(;W[ea]\n(;B[eb]\n(;W[fa]\n(;B[an]\n(;W[dl]\n(;B[cl]\n(;W[dm]\n(;B[el]\n(;W[mg]\n(;B[ng]\n(;W[pl]\n(;B[rm]\n(;W[rl]\n(;B[ml]\n(;W[rn]\n(;B[ci]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "M.FUJISAWA vs SgtSunshine",
          black_player: "M.FUJISAWA",
          white_player: "SgtSunshine",
          black_rank: "10k",
          white_rank: "10k",
          komi: 6.5,
          result: "W+22.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998751/up3ya9uztvuyob9hncsh.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-04]\nPC[OGS: https://online-go.com/game/59462930]\nGN[Friendly Match]\nPB[Michael]\nPW[hanayeol]\nBR[2d]\nWR[5d]\nTM[300]OT[5x40 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[pp]\n(;B[cd]\n(;W[cp]\n(;B[eq]\n(;W[dn]\n(;B[hq]\n(;W[ec]\n(;B[de]\n(;W[hc]\n(;B[cl]\n(;W[dq]\n(;B[ep]\n(;W[bn]\n(;B[qq]\n(;W[qp]\n(;B[pq]\n(;W[op]\n(;B[nr]\n(;W[qf]\n(;B[pj]\n(;W[rd]\n(;B[mc]\n(;W[pc]\n(;B[qd]\n(;W[qc]\n(;B[re]\n(;W[rc]\n(;B[qe]\n(;W[rf]\n(;B[od]\n(;W[se]\n(;B[jc]\n(;W[oc]\n(;B[nd]\n(;W[of]\n(;B[dc]\n(;W[ed]\n(;B[ee]\n(;W[ge]\n(;B[di]\n(;W[ql]\n(;B[mq]\n(;W[nj]\n(;B[pl]\n(;W[qm]\n(;B[ni]\n(;W[mi]\n(;B[nh]\n(;W[ph]\n(;B[mj]\n(;W[nk]\n(;B[oi]\n(;W[li]\n(;B[nf]\n(;W[lk]\n(;B[qk]\n(;W[cj]\n(;B[ci]\n(;W[bj]\n(;B[dj]\n(;W[bl]\n(;B[bi]\n(;W[ip]\n(;B[iq]\n(;W[kp]\n(;B[dr]\n(;W[cr]\n(;B[er]\n(;W[mp]\n(;B[lq]\n(;W[lp]\n(;B[nl]\n(;W[ml]\n(;B[pm]\n(;W[mg]\n(;B[ng]\n(;W[jd]\n(;B[kd]\n(;W[je]\n(;B[ic]\n(;W[hd]\n(;B[ke]\n(;W[kf]\n(;B[jf]\n(;W[kc]\n(;B[kb]\n(;W[ld]\n(;B[le]\n(;W[if]\n(;B[jg]\n(;W[lf]\n(;B[me]\n(;W[ig]\n(;B[kj]\n(;W[lj]\n(;B[co]\n(;W[bo]\n(;B[dp]\n(;W[cq]\n(;B[cm]\n(;W[bm]\n(;B[cn]\n(;W[ai]\n(;B[ah]\n(;W[aj]\n(;B[ck]\n(;W[bk]\n(;B[bg]\n(;W[hj]\n(;B[hl]\n(;W[hn]\n(;B[ij]\n(;W[ik]\n(;B[hi]\n(;W[hk]\n(;B[ih]\n(;W[jj]\n(;B[kh]\n(;W[ii]\n(;B[hg]\n(;W[hf]\n(;B[id]\n(;W[ie]\n(;B[gf]\n(;W[he]\n(;B[eb]\n(;W[fb]\n(;B[db]\n(;W[kg]\n(;B[jh]\n(;W[gg]\n(;B[hh]\n(;W[ff]\n(;B[fh]\n(;W[fg]\n(;B[fe]\n(;W[gh]\n(;B[gi]\n(;W[fi]\n(;B[fj]\n(;W[eh]\n(;B[gj]\n(;W[ei]\n(;B[eg]\n(;W[ej]\n(;B[ek]\n(;W[fk]\n(;B[dh]\n(;W[fh]\n(;B[ef]\n(;W[gf]\n(;B[hb]\n(;W[gc]\n(;B[gk]\n(;W[gb]\n(;B[fd]\n(;W[ib]\n(;B[jb]\n(;W[ha]\n(;B[fa]\n(;W[fl]\n(;B[il]\n(;W[jl]\n(;B[gl]\n(;W[el]\n(;B[dk]\n(;W[gm]\n(;B[fm]\n(;W[em]\n(;B[fn]\n(;W[fo]\n(;B[jm]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "Michael vs hanayeol",
          black_player: "Michael",
          white_player: "hanayeol",
          black_rank: "2d",
          white_rank: "5d",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998779/puqprf6uo2iitmcsnryp.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-04]\nPC[OGS: https://online-go.com/game/59461288]\nGN[Friendly Match]\nPB[HarpSeal]\nPW[YOUNGROCK]\nBR[4k]\nWR[3k]\nTM[600]OT[5x30 byo-yomi]\nRE[B+3.5]\nSZ[19]\nKM[7.5]\nRU[Chinese]\n;B[pd]\n(;W[dp]\n(;B[qp]\n(;W[dd]\n(;B[nq]\n(;W[nc]\n(;B[pf]\n(;W[jd]\n(;B[cf]\n(;W[df]\n(;B[dg]\n(;W[ef]\n(;B[cd]\n(;W[cc]\n(;B[ce]\n(;W[dc]\n(;B[cn]\n(;W[cl]\n(;B[en]\n(;W[ch]\n(;B[cg]\n(;W[bh]\n(;B[dh]\n(;W[cj]\n(;B[di]\n(;W[ek]\n(;B[fi]\n(;W[fp]\n(;B[gn]\n(;W[gl]\n(;B[hp]\n(;W[hq]\n(;B[iq]\n(;W[go]\n(;B[ho]\n(;W[hn]\n(;B[hm]\n(;W[fn]\n(;B[in]\n(;W[fo]\n(;B[gq]\n(;W[fq]\n(;B[qi]\n(;W[gg]\n(;B[hi]\n(;W[gj]\n(;B[gi]\n(;W[ik]\n(;B[ji]\n(;W[kk]\n(;B[if]\n(;W[he]\n(;B[li]\n(;W[mk]\n(;B[lc]\n(;W[md]\n(;B[ld]\n(;W[le]\n(;B[ke]\n(;W[kd]\n(;B[me]\n(;W[lf]\n(;B[je]\n(;W[ie]\n(;B[jf]\n(;W[mf]\n(;B[ne]\n(;W[mc]\n(;B[lb]\n(;W[mb]\n(;B[hf]\n(;W[ge]\n(;B[jc]\n(;W[ic]\n(;B[jb]\n(;W[ib]\n(;B[nf]\n(;W[mh]\n(;B[mi]\n(;W[nh]\n(;B[ni]\n(;W[oh]\n(;B[oi]\n(;W[qh]\n(;B[ph]\n(;W[pg]\n(;B[pi]\n(;W[og]\n(;B[qf]\n(;W[qg]\n(;B[oc]\n(;W[ja]\n(;B[nd]\n(;W[la]\n(;B[ol]\n(;W[ln]\n(;B[ll]\n(;W[kl]\n(;B[lk]\n(;W[lm]\n(;B[km]\n(;W[jm]\n(;B[kn]\n(;W[jn]\n(;B[ko]\n(;W[jo]\n(;B[jp]\n(;W[lj]\n(;B[ml]\n(;W[kj]\n(;B[lh]\n(;W[mg]\n(;B[mj]\n(;W[ri]\n(;B[rj]\n(;W[ij]\n(;B[ii]\n(;W[rf]\n(;B[re]\n(;W[rg]\n(;B[cq]\n(;W[cp]\n(;B[bp]\n(;W[bo]\n(;B[br]\n(;W[ap]\n(;B[aq]\n(;W[bq]\n(;B[id]\n(;W[hd]\n(;B[bp]\n(;W[ao]\n(;B[co]\n(;W[bq]\n(;B[nb]\n(;W[ma]\n(;B[bp]\n(;W[pb]\n(;B[bq]\n(;W[qc]\n(;B[qd]\n(;W[oe]\n(;B[of]\n(;W[rc]\n(;B[ob]\n(;W[rd]\n(;B[se]\n(;W[rb]\n(;B[na]\n(;W[ka]\n(;B[qa]\n(;W[pa]\n(;B[ra]\n(;W[sd]\n(;B[sb]\n(;W[qe]\n(;B[pe]\n(;W[sf]\n(;B[qe]\n(;W[pc]\n(;B[od]\n(;W[sj]\n(;B[rk]\n(;W[sk]\n(;B[sl]\n(;W[si]\n(;B[rl]\n(;W[em]\n(;B[dm]\n(;W[el]\n(;B[sh]\n(;W[rh]\n(;B[lg]\n(;W[fr]\n(;B[gr]\n(;W[bm]\n(;B[bn]\n(;W[am]\n(;B[an]\n(;W[dr]\n(;B[bc]\n(;W[bb]\n(;B[ad]\n(;W[ab]\n(;B[bg]\n(;W[ci]\n(;B[kf]\n(;W[kb]\n(;B[gf]\n(;W[ff]\n(;B[fg]\n(;W[eg]\n(;B[fh]\n(;W[de]\n(;B[hl]\n(;W[gk]\n(;B[dj]\n(;W[gm]\n(;B[hn]\n(;W[cs]\n(;B[bs]\n(;W[eo]\n(;B[cm]\n(;W[bl]\n(;B[cr]\n(;W[ds]\n(;B[dq]\n(;W[fs]\n(;B[dk]\n(;W[dl]\n(;B[ck]\n(;W[bk]\n(;B[ah]\n(;W[ai]\n(;B[ag]\n(;W[bj]\n(;B[dn]\n(;W[gs]\n(;B[hs]\n(;W[eq]\n(;B[do]\n(;W[ki]\n(;B[kh]\n(;W[il]\n(;B[fj]\n(;W[im]\n(;B[gp]\n(;W[io]\n(;B[ip]\n(;W[fk]\n(;B[ac]\n(;W[jj]\n(;B[ej]\n(;W[eh]\n(;B[ep]\n(;W[dp]\n(;B[cp]\n(;W[ep]\n(;B[hk]\n(;W[hj]\n(;B[hr]\n(;W[]\n(;B[ei]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "HarpSeal vs YOUNGROCK",
          black_player: "HarpSeal",
          white_player: "YOUNGROCK",
          black_rank: "4k",
          white_rank: "3k",
          komi: 7.5,
          result: "B+3.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998827/eqr2c32dhjbvc3tquqbu.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-03]\nPC[OGS: https://online-go.com/game/59458123]\nGN[Willowdale vs. san-dan]\nPB[Willowdale]\nPW[san-dan]\nBR[2k]\nWR[1d]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nAB[pp]\n;W[dd]\n(;B[cp]\n(;W[qd]\n(;B[oc]\n(;W[ld]\n(;B[pe]\n(;W[qe]\n(;B[pf]\n(;W[qf]\n(;B[pg]\n(;W[qh]\n(;B[jd]\n(;W[pd]\n(;B[od]\n(;W[ne]\n(;B[lc]\n(;W[mc]\n(;B[kc]\n(;W[md]\n(;B[oe]\n(;W[hc]\n(;B[hd]\n(;W[gd]\n(;B[ge]\n(;W[id]\n(;B[he]\n(;W[ic]\n(;B[ie]\n(;W[fd]\n(;B[kf]\n(;W[ke]\n(;B[je]\n(;W[lf]\n(;B[ph]\n(;W[qi]\n(;B[ob]\n(;W[mb]\n(;B[lg]\n(;W[kg]\n(;B[jf]\n(;W[mg]\n(;B[lh]\n(;W[mh]\n(;B[mf]\n(;W[nf]\n(;B[le]\n(;W[nh]\n(;B[pi]\n(;W[pj]\n(;B[oj]\n(;W[mj]\n(;B[li]\n(;W[nj]\n(;B[pk]\n(;W[qj]\n(;B[oi]\n(;W[ok]\n(;B[rc]\n(;W[qb]\n(;B[qc]\n(;W[pc]\n(;B[pb]\n(;W[rb]\n(;B[qk]\n(;W[qg]\n(;B[nk]\n(;W[ol]\n(;B[mk]\n(;W[lj]\n(;B[pm]\n(;W[om]\n(;B[pn]\n(;W[on]\n(;B[lk]\n(;W[kj]\n(;B[kk]\n(;W[jj]\n(;B[lo]\n(;W[op]\n(;B[np]\n(;W[po]\n(;B[qo]\n(;W[oo]\n(;B[oq]\n(;W[pl]\n(;B[ql]\n(;W[qn]\n(;B[qm]\n(;W[rn]\n(;B[qq]\n(;W[ro]\n(;B[qp]\n(;W[rk]\n(;B[no]\n(;W[jk]\n(;B[hk]\n(;W[jm]\n(;B[jl]\n(;W[il]\n(;B[kl]\n(;W[ik]\n(;B[im]\n(;W[hm]\n(;B[in]\n(;W[hl]\n(;B[hj]\n(;W[hn]\n(;B[io]\n(;W[ho]\n(;B[ip]\n(;W[hp]\n(;B[gl]\n(;W[iq]\n(;B[jq]\n(;W[jr]\n(;B[kq]\n(;W[kr]\n(;B[hq]\n(;W[ir]\n(;B[gq]\n(;W[lq]\n(;B[ko]\n(;W[nr]\n(;B[nq]\n(;W[mr]\n(;B[gp]\n(;W[fn]\n(;B[el]\n(;W[dn]\n(;B[eo]\n(;W[fm]\n(;B[cl]\n(;W[dm]\n(;B[dl]\n(;W[bn]\n(;B[bo]\n(;W[bm]\n(;B[bl]\n(;W[ii]\n(;B[hi]\n(;W[ih]\n(;B[hh]\n(;W[ig]\n(;B[kh]\n(;W[hg]\n(;B[gg]\n(;W[do]\n(;B[dp]\n(;W[co]\n(;B[bp]\n(;W[cm]\n(;B[hr]\n(;W[or]\n(;B[pr]\n(;W[ls]\n(;B[cd]\n(;W[ce]\n(;B[dc]\n(;W[de]\n(;B[ec]\n(;W[fe]\n(;B[ff]\n(;W[cc]\n(;B[gb]\n(;W[gc]\n(;B[cb]\n(;W[bd]\n(;B[bc]\n(;W[ci]\n(;B[bb]\n(;W[cg]\n(;B[ei]\n(;W[fb]\n(;B[fc]\n(;W[eb]\n(;B[db]\n(;W[hb]\n(;B[ad]\n(;W[ac]\n(;B[ab]\n(;W[bf]\n(;B[da]\n(;W[ba]\n(;B[cd]\n(;W[be]\n(;B[fa]\n(;W[ga]\n(;B[ea]\n(;W[jc]\n(;B[kd]\n(;W[kb]\n(;B[lb]\n(;W[la]\n(;B[gb]\n(;W[fb]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-03T00:00:00+00:00",
          sgf_name: "Willowdale vs san-dan",
          black_player: "Willowdale",
          white_player: "san-dan",
          black_rank: "2k",
          white_rank: "1d",
          komi: 0.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998840/ctmg814fbb2v5av3xas8.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-03]\nPC[OGS: https://online-go.com/game/59452921]\nGN[Friendly Match]\nPB[delightspirit]\nPW[shelly613]\nBR[12k]\nWR[11k]\nTM[480]OT[3x30 byo-yomi]\nRE[B+9.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pq]\n(;W[cd]\n(;B[cp]\n(;W[pc]\n(;B[nd]\n(;W[nc]\n(;B[mc]\n(;W[nb]\n(;B[md]\n(;W[od]\n(;B[oe]\n(;W[pe]\n(;B[of]\n(;W[pf]\n(;B[og]\n(;W[pg]\n(;B[kf]\n(;W[oh]\n(;B[ph]\n(;W[qh]\n(;B[pi]\n(;W[qi]\n(;B[oi]\n(;W[nh]\n(;B[mf]\n(;W[ni]\n(;B[oj]\n(;W[nj]\n(;B[ok]\n(;W[qj]\n(;B[nk]\n(;W[lh]\n(;B[lj]\n(;W[mj]\n(;B[mk]\n(;W[li]\n(;B[kj]\n(;W[ki]\n(;B[jj]\n(;W[kg]\n(;B[lf]\n(;W[ji]\n(;B[mg]\n(;W[mh]\n(;B[ng]\n(;W[jg]\n(;B[jf]\n(;W[ij]\n(;B[kl]\n(;W[if]\n(;B[jd]\n(;W[mb]\n(;B[lb]\n(;W[gd]\n(;B[ie]\n(;W[hf]\n(;B[ik]\n(;W[hj]\n(;B[hk]\n(;W[gj]\n(;B[gk]\n(;W[fk]\n(;B[fl]\n(;W[ek]\n(;B[el]\n(;W[dl]\n(;B[dm]\n(;W[cl]\n(;B[cm]\n(;W[bl]\n(;B[jp]\n(;W[bm]\n(;B[bn]\n(;W[jq]\n(;B[kq]\n(;W[iq]\n(;B[ip]\n(;W[hq]\n(;B[gp]\n(;W[hp]\n(;B[ho]\n(;W[gq]\n(;B[fp]\n(;W[fq]\n(;B[ep]\n(;W[eq]\n(;B[dq]\n(;W[dr]\n(;B[cr]\n(;W[ds]\n(;B[cs]\n(;W[fr]\n(;B[kr]\n(;W[jr]\n(;B[lo]\n(;W[fs]\n(;B[ql]\n(;W[qk]\n(;B[pk]\n(;W[ch]\n(;B[rl]\n(;W[rk]\n(;B[hc]\n(;W[gc]\n(;B[gb]\n(;W[fb]\n(;B[ga]\n(;W[fa]\n(;B[ib]\n(;W[ec]\n(;B[he]\n(;W[ge]\n(;B[hd]\n(;W[kb]\n(;B[la]\n(;W[lc]\n(;B[kc]\n(;W[ld]\n(;B[le]\n(;W[ma]\n(;B[kd]\n(;W[qq]\n(;B[qp]\n(;W[rq]\n(;B[rp]\n(;W[pr]\n(;B[oq]\n(;W[or]\n(;B[nq]\n(;W[nr]\n(;B[mr]\n(;W[qs]\n(;B[sq]\n(;W[rr]\n(;B[ms]\n(;W[ns]\n(;B[sr]\n(;W[rs]\n(;B[am]\n(;W[al]\n(;B[an]\n(;W[em]\n(;B[cn]\n(;W[kp]\n(;B[io]\n(;W[lp]\n(;B[mq]\n(;W[mp]\n(;B[oo]\n(;W[ko]\n(;B[ln]\n(;W[kn]\n(;B[lm]\n(;W[jm]\n(;B[gm]\n(;W[sk]\n(;B[sl]\n(;W[rg]\n(;B[dk]\n(;W[ck]\n(;B[dj]\n(;W[cj]\n(;B[fj]\n(;W[fi]\n(;B[ej]\n(;W[di]\n(;B[ei]\n(;W[eh]\n(;B[gi]\n(;W[ii]\n(;B[fh]\n(;W[eg]\n(;B[fg]\n(;W[ff]\n(;B[gg]\n(;W[gf]\n(;B[hg]\n(;W[hh]\n(;B[ig]\n(;W[ih]\n(;B[fi]\n(;W[gh]\n(;B[js]\n(;W[is]\n(;B[ks]\n(;W[hr]\n(;B[sp]\n(;W[np]\n(;B[pp]\n(;W[op]\n(;B[po]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-03T00:00:00+00:00",
          sgf_name: "delightspirit vs shelly613",
          black_player: "delightspirit",
          white_player: "shelly613",
          black_rank: "12k",
          white_rank: "11k",
          komi: 6.5,
          result: "B+9.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998864/a7zxyfbhqhtow42rlhnr.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-07-27]\nPC[OGS: https://online-go.com/game/25711635]\nGN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]\nPB[poonperm8025]\nPW[BorisD]\nBR[6k]\nWR[5k]\nTM[60]OT[10 fischer]\nRE[W+R]\nSZ[9]\nKM[5.5]\nRU[Japanese]\n;B[fd]\n(;W[df]\n(;B[fg]\n(;W[gc]\n(;B[fc]\n(;W[gd]\n(;B[cd]\n(;W[ff]\n(;B[eg]\n(;W[ef]\n(;B[dg]\n(;W[gg]\n(;B[cf]\n(;W[cg]\n(;B[gh]\n(;W[hg]\n(;B[bf]\n(;W[ch]\n(;B[hh]\n(;W[ei]\n(;B[fh]\n(;W[dh]\n(;B[bh]\n(;W[fb]\n(;B[eb]\n(;W[dd]\n(;B[dc]\n(;W[cc]\n(;B[bc]\n(;W[ce]\n(;B[bd]\n(;W[bg]\n(;B[be]\n(;W[bi]\n(;B[ah]\n(;W[ag]\n(;B[fi]\n(;W[ge]\n(;B[ih]\n(;W[hi]\n(;B[hf]\n(;W[gf]\n(;B[ig]\n(;W[he]\n(;B[if]\n(;W[ie]\n(;B[hb]\n(;W[gb]\n(;B[fa]\n(;W[ga]\n(;B[ea]\n(;W[ed]\n(;B[ec]\n(;W[cb]\n(;B[de]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-07-27T00:00:00+00:00",
          sgf_name: "poonperm8025 vs BorisD",
          black_player: "poonperm8025",
          white_player: "BorisD",
          black_rank: "6k",
          white_rank: "5k",
          komi: 5.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999659/s2eszmket1fpr2j2qpo7.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-03]\nPC[OGS: https://online-go.com/game/59451687]\nGN[Friendly Match]\nPB[victor_zym]\nPW[shelly613]\nBR[13k]\nWR[10k]\nTM[480]OT[3x30 byo-yomi]\nRE[B+1.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[cp]\n(;W[qd]\n(;B[dc]\n(;W[pq]\n(;B[kc]\n(;W[qj]\n(;B[oc]\n(;W[pc]\n(;B[od]\n(;W[pd]\n(;B[of]\n(;W[pf]\n(;B[jq]\n(;W[og]\n(;B[nf]\n(;W[nh]\n(;B[np]\n(;W[op]\n(;B[oo]\n(;W[no]\n(;B[mo]\n(;W[nn]\n(;B[mn]\n(;W[po]\n(;B[oq]\n(;W[on]\n(;B[mq]\n(;W[mm]\n(;B[lm]\n(;W[ml]\n(;B[lh]\n(;W[li]\n(;B[mi]\n(;W[mh]\n(;B[lk]\n(;W[mj]\n(;B[ni]\n(;W[mk]\n(;B[ki]\n(;W[lj]\n(;B[kj]\n(;W[oi]\n(;B[lg]\n(;W[ll]\n(;B[kl]\n(;W[or]\n(;B[nq]\n(;W[nr]\n(;B[kk]\n(;W[nj]\n(;B[cj]\n(;W[cf]\n(;B[ce]\n(;W[ci]\n(;B[bf]\n(;W[cg]\n(;B[bg]\n(;W[bh]\n(;B[ah]\n(;W[bj]\n(;B[ck]\n(;W[ai]\n(;B[ae]\n(;W[bk]\n(;B[bl]\n(;W[cl]\n(;B[cm]\n(;W[dl]\n(;B[ej]\n(;W[dj]\n(;B[di]\n(;W[dk]\n(;B[ei]\n(;W[dh]\n(;B[eh]\n(;W[eg]\n(;B[ff]\n(;W[ef]\n(;B[ee]\n(;W[fg]\n(;B[gf]\n(;W[ek]\n(;B[gj]\n(;W[fk]\n(;B[fj]\n(;W[df]\n(;B[de]\n(;W[bm]\n(;B[bn]\n(;W[al]\n(;B[dm]\n(;W[em]\n(;B[dn]\n(;W[en]\n(;B[eo]\n(;W[do]\n(;B[cn]\n(;W[dp]\n(;B[dq]\n(;W[ep]\n(;B[fo]\n(;W[fp]\n(;B[go]\n(;W[gp]\n(;B[hp]\n(;W[co]\n(;B[bo]\n(;W[bp]\n(;B[bq]\n(;W[cq]\n(;B[cr]\n(;W[cp]\n(;B[ap]\n(;W[an]\n(;B[bs]\n(;W[ao]\n(;B[eq]\n(;W[fq]\n(;B[fr]\n(;W[gr]\n(;B[fs]\n(;W[gs]\n(;B[dr]\n(;W[hq]\n(;B[aq]\n(;W[ar]\n(;B[br]\n(;W[ir]\n(;B[ip]\n(;W[jr]\n(;B[kr]\n(;W[mr]\n(;B[lr]\n(;W[lq]\n(;B[mp]\n(;W[kp]\n(;B[lp]\n(;W[kq]\n(;B[ko]\n(;W[ob]\n(;B[nb]\n(;W[oa]\n(;B[kn]\n(;W[qb]\n(;B[na]\n(;W[hc]\n(;B[ib]\n(;W[hb]\n(;B[gb]\n(;W[fb]\n(;B[gc]\n(;W[fc]\n(;B[gd]\n(;W[ga]\n(;B[ea]\n(;W[fa]\n(;B[eb]\n(;W[ec]\n(;B[db]\n(;W[ic]\n(;B[jb]\n(;W[ge]\n(;B[he]\n(;W[hd]\n(;B[fe]\n(;W[ie]\n(;B[if]\n(;W[je]\n(;B[jd]\n(;W[jc]\n(;B[kd]\n(;W[id]\n(;B[jf]\n(;W[ke]\n(;B[le]\n(;W[kf]\n(;B[kg]\n(;W[lf]\n(;B[mf]\n(;W[oe]\n(;B[ne]\n(;W[pe]\n(;B[mc]\n(;W[ls]\n(;B[jp]\n(;W[ks]\n(;B[qq]\n(;W[qr]\n(;B[qp]\n(;W[rr]\n(;B[pp]\n(;W[pr]\n(;B[oo]\n(;W[qo]\n(;B[op]\n(;W[rp]\n(;B[rq]\n(;W[ro]\n(;B[sp]\n(;W[so]\n(;B[sq]\n(;W[pm]\n(;B[sr]\n(;W[rs]\n(;B[gk]\n(;W[gl]\n(;B[hl]\n(;W[gm]\n(;B[hm]\n(;W[gn]\n(;B[hn]\n(;W[fn]\n(;B[ho]\n(;W[gg]\n(;B[hg]\n(;W[gh]\n(;B[hh]\n(;W[mg]\n(;B[gi]\n(;W[ha]\n(;B[md]\n(;W[ia]\n(;B[kb]\n(;W[ag]\n(;B[af]\n(;W[ah]\n(;B[fh]\n(;W[jg]\n(;B[kh]\n(;W[]\n(;B[os]\n(;W[ps]\n(;B[ng]\n(;W[ph]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-03T00:00:00+00:00",
          sgf_name: "victor_zym vs shelly613",
          black_player: "victor_zym",
          white_player: "shelly613",
          black_rank: "13k",
          white_rank: "10k",
          komi: 6.5,
          result: "B+1.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998900/hvvgsrf4fj8gmrl1nmbe.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-03]\nPC[OGS: https://online-go.com/game/59451687]\nGN[Friendly Match]\nPB[victor_zym]\nPW[shelly613]\nBR[13k]\nWR[10k]\nTM[480]OT[3x30 byo-yomi]\nRE[B+1.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[cp]\n(;W[qd]\n(;B[dc]\n(;W[pq]\n(;B[kc]\n(;W[qj]\n(;B[oc]\n(;W[pc]\n(;B[od]\n(;W[pd]\n(;B[of]\n(;W[pf]\n(;B[jq]\n(;W[og]\n(;B[nf]\n(;W[nh]\n(;B[np]\n(;W[op]\n(;B[oo]\n(;W[no]\n(;B[mo]\n(;W[nn]\n(;B[mn]\n(;W[po]\n(;B[oq]\n(;W[on]\n(;B[mq]\n(;W[mm]\n(;B[lm]\n(;W[ml]\n(;B[lh]\n(;W[li]\n(;B[mi]\n(;W[mh]\n(;B[lk]\n(;W[mj]\n(;B[ni]\n(;W[mk]\n(;B[ki]\n(;W[lj]\n(;B[kj]\n(;W[oi]\n(;B[lg]\n(;W[ll]\n(;B[kl]\n(;W[or]\n(;B[nq]\n(;W[nr]\n(;B[kk]\n(;W[nj]\n(;B[cj]\n(;W[cf]\n(;B[ce]\n(;W[ci]\n(;B[bf]\n(;W[cg]\n(;B[bg]\n(;W[bh]\n(;B[ah]\n(;W[bj]\n(;B[ck]\n(;W[ai]\n(;B[ae]\n(;W[bk]\n(;B[bl]\n(;W[cl]\n(;B[cm]\n(;W[dl]\n(;B[ej]\n(;W[dj]\n(;B[di]\n(;W[dk]\n(;B[ei]\n(;W[dh]\n(;B[eh]\n(;W[eg]\n(;B[ff]\n(;W[ef]\n(;B[ee]\n(;W[fg]\n(;B[gf]\n(;W[ek]\n(;B[gj]\n(;W[fk]\n(;B[fj]\n(;W[df]\n(;B[de]\n(;W[bm]\n(;B[bn]\n(;W[al]\n(;B[dm]\n(;W[em]\n(;B[dn]\n(;W[en]\n(;B[eo]\n(;W[do]\n(;B[cn]\n(;W[dp]\n(;B[dq]\n(;W[ep]\n(;B[fo]\n(;W[fp]\n(;B[go]\n(;W[gp]\n(;B[hp]\n(;W[co]\n(;B[bo]\n(;W[bp]\n(;B[bq]\n(;W[cq]\n(;B[cr]\n(;W[cp]\n(;B[ap]\n(;W[an]\n(;B[bs]\n(;W[ao]\n(;B[eq]\n(;W[fq]\n(;B[fr]\n(;W[gr]\n(;B[fs]\n(;W[gs]\n(;B[dr]\n(;W[hq]\n(;B[aq]\n(;W[ar]\n(;B[br]\n(;W[ir]\n(;B[ip]\n(;W[jr]\n(;B[kr]\n(;W[mr]\n(;B[lr]\n(;W[lq]\n(;B[mp]\n(;W[kp]\n(;B[lp]\n(;W[kq]\n(;B[ko]\n(;W[ob]\n(;B[nb]\n(;W[oa]\n(;B[kn]\n(;W[qb]\n(;B[na]\n(;W[hc]\n(;B[ib]\n(;W[hb]\n(;B[gb]\n(;W[fb]\n(;B[gc]\n(;W[fc]\n(;B[gd]\n(;W[ga]\n(;B[ea]\n(;W[fa]\n(;B[eb]\n(;W[ec]\n(;B[db]\n(;W[ic]\n(;B[jb]\n(;W[ge]\n(;B[he]\n(;W[hd]\n(;B[fe]\n(;W[ie]\n(;B[if]\n(;W[je]\n(;B[jd]\n(;W[jc]\n(;B[kd]\n(;W[id]\n(;B[jf]\n(;W[ke]\n(;B[le]\n(;W[kf]\n(;B[kg]\n(;W[lf]\n(;B[mf]\n(;W[oe]\n(;B[ne]\n(;W[pe]\n(;B[mc]\n(;W[ls]\n(;B[jp]\n(;W[ks]\n(;B[qq]\n(;W[qr]\n(;B[qp]\n(;W[rr]\n(;B[pp]\n(;W[pr]\n(;B[oo]\n(;W[qo]\n(;B[op]\n(;W[rp]\n(;B[rq]\n(;W[ro]\n(;B[sp]\n(;W[so]\n(;B[sq]\n(;W[pm]\n(;B[sr]\n(;W[rs]\n(;B[gk]\n(;W[gl]\n(;B[hl]\n(;W[gm]\n(;B[hm]\n(;W[gn]\n(;B[hn]\n(;W[fn]\n(;B[ho]\n(;W[gg]\n(;B[hg]\n(;W[gh]\n(;B[hh]\n(;W[mg]\n(;B[gi]\n(;W[ha]\n(;B[md]\n(;W[ia]\n(;B[kb]\n(;W[ag]\n(;B[af]\n(;W[ah]\n(;B[fh]\n(;W[jg]\n(;B[kh]\n(;W[]\n(;B[os]\n(;W[ps]\n(;B[ng]\n(;W[ph]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-03T00:00:00+00:00",
          sgf_name: "victor_zym vs shelly613",
          black_player: "victor_zym",
          white_player: "shelly613",
          black_rank: "13k",
          white_rank: "10k",
          komi: 6.5,
          result: "B+1.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998929/bw59fb4f51lr0vzfxpdt.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-03]\nPC[OGS: https://online-go.com/game/59446583]\nGN[au123 vs. jaedge]\nPB[au123]\nPW[jaedge]\nBR[3k]\nWR[3k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[cd]\n(;B[qp]\n(;W[dq]\n(;B[jp]\n(;W[qf]\n(;B[nc]\n(;W[rd]\n(;B[qc]\n(;W[qi]\n(;B[of]\n(;W[fc]\n(;B[rc]\n(;W[oq]\n(;B[pq]\n(;W[op]\n(;B[pn]\n(;W[lp]\n(;B[kq]\n(;W[lq]\n(;B[gq]\n(;W[co]\n(;B[ci]\n(;W[cg]\n(;B[cl]\n(;W[ql]\n(;B[qm]\n(;W[pl]\n(;B[jc]\n(;W[eg]\n(;B[di]\n(;W[bm]\n(;B[cm]\n(;W[bl]\n(;B[bk]\n(;W[cn]\n(;B[bh]\n(;W[bg]\n(;B[al]\n(;W[an]\n(;B[ag]\n(;W[af]\n(;B[ah]\n(;W[be]\n(;B[en]\n(;W[eo]\n(;B[fo]\n(;W[fn]\n(;B[em]\n(;W[gn]\n(;B[ep]\n(;W[do]\n(;B[go]\n(;W[hn]\n(;B[ho]\n(;W[in]\n(;B[jo]\n(;W[gl]\n(;B[fk]\n(;W[gk]\n(;B[fj]\n(;W[lm]\n(;B[kn]\n(;W[km]\n(;B[ln]\n(;W[mn]\n(;B[mo]\n(;W[nn]\n(;B[no]\n(;W[oo]\n(;B[lo]\n(;W[on]\n(;B[im]\n(;W[jn]\n(;B[jm]\n(;W[jl]\n(;B[il]\n(;W[jk]\n(;B[ik]\n(;W[gj]\n(;B[ij]\n(;W[gi]\n(;B[jj]\n(;W[ml]\n(;B[fi]\n(;W[fh]\n(;B[gh]\n(;W[hh]\n(;B[gg]\n(;W[hi]\n(;B[kj]\n(;W[lk]\n(;B[hf]\n(;W[jh]\n(;B[kh]\n(;W[jg]\n(;B[mi]\n(;W[kg]\n(;B[lh]\n(;W[ie]\n(;B[hc]\n(;W[he]\n(;B[ge]\n(;W[gd]\n(;B[if]\n(;W[je]\n(;B[jf]\n(;W[kf]\n(;B[hd]\n(;W[fe]\n(;B[ff]\n(;W[gf]\n(;B[dp]\n(;W[cq]\n(;B[ge]\n(;W[kd]\n(;B[ee]\n(;W[gf]\n(;B[cp]\n(;W[bp]\n(;B[ge]\n(;W[fd]\n(;B[ef]\n(;W[dg]\n(;B[dd]\n(;W[dc]\n(;B[cc]\n(;W[db]\n(;B[bd]\n(;W[ce]\n(;B[bb]\n(;W[cb]\n(;B[bc]\n(;W[kc]\n(;B[gc]\n(;W[fb]\n(;B[ca]\n(;W[ba]\n(;B[aa]\n(;W[gf]\n(;B[fg]\n(;W[eh]\n(;B[ge]\n(;W[gb]\n(;B[hb]\n(;W[gf]\n(;B[bq]\n(;W[br]\n(;B[ge]\n(;W[ed]\n(;B[de]\n(;W[gf]\n(;B[aq]\n(;W[ap]\n(;B[ge]\n(;W[hg]\n(;B[ad]\n(;W[df]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-03T00:00:00+00:00",
          sgf_name: "au123 vs jaedge",
          black_player: "au123",
          white_player: "jaedge",
          black_rank: "3k",
          white_rank: "3k",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998951/rrc4jayqcdew6xkuzqph.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-02]\nPC[OGS: https://online-go.com/game/59424882]\nGN[Fun Game]\nPB[tim.lyonnet]\nPW[Imhotep3]\nBR[24k]\nWR[24k]\nTM[600]OT[10 fischer]\nRE[W+6.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[pp]\n(;B[dd]\n(;W[dp]\n(;B[dj]\n(;W[pj]\n(;B[jj]\n(;W[jp]\n(;B[jd]\n(;W[mg]\n(;B[mh]\n(;W[nh]\n(;B[ng]\n(;W[lh]\n(;B[mi]\n(;W[ni]\n(;B[lg]\n(;W[og]\n(;B[mf]\n(;W[nf]\n(;B[mg]\n(;W[of]\n(;B[li]\n(;W[pe]\n(;B[kh]\n(;W[qd]\n(;B[od]\n(;W[pc]\n(;B[oc]\n(;W[qb]\n(;B[pb]\n(;W[qc]\n(;B[ne]\n(;W[oe]\n(;B[nd]\n(;W[ob]\n(;B[oa]\n(;W[nb]\n(;B[mb]\n(;W[nc]\n(;B[mc]\n(;W[pa]\n(;B[ma]\n(;W[na]\n(;B[op]\n(;W[oq]\n(;B[pq]\n(;W[qq]\n(;B[pr]\n(;W[qp]\n(;B[or]\n(;W[nq]\n(;B[np]\n(;W[mq]\n(;B[ep]\n(;W[nr]\n(;B[do]\n(;W[eo]\n(;B[cp]\n(;W[dq]\n(;B[eq]\n(;W[cq]\n(;B[bq]\n(;W[co]\n(;B[dr]\n(;W[bp]\n(;B[fo]\n(;W[dn]\n(;B[cr]\n(;W[br]\n(;B[aq]\n(;W[ar]\n(;B[en]\n(;W[fn]\n(;B[do]\n(;W[em]\n(;B[cp]\n(;W[ap]\n(;B[cq]\n(;W[eo]\n(;B[bo]\n(;W[dp]\n(;B[ao]\n(;W[cn]\n(;B[bn]\n(;W[dq]\n(;B[do]\n(;W[dp]\n(;B[dq]\n(;W[do]\n(;B[cm]\n(;W[go]\n(;B[fp]\n(;W[gn]\n(;B[dm]\n(;W[en]\n(;B[gp]\n(;W[hp]\n(;B[el]\n(;W[gj]\n(;B[gk]\n(;W[hj]\n(;B[hk]\n(;W[fj]\n(;B[fk]\n(;W[ek]\n(;B[ej]\n(;W[dk]\n(;B[dl]\n(;W[ck]\n(;B[bm]\n(;W[cj]\n(;B[fl]\n(;W[ei]\n(;B[di]\n(;W[dh]\n(;B[ci]\n(;W[bi]\n(;B[ch]\n(;W[cg]\n(;B[ho]\n(;W[io]\n(;B[hn]\n(;W[hm]\n(;B[in]\n(;W[jn]\n(;B[im]\n(;W[il]\n(;B[jm]\n(;W[km]\n(;B[jl]\n(;W[ik]\n(;B[gm]\n(;W[bh]\n(;B[jk]\n(;W[hl]\n(;B[ij]\n(;W[ii]\n(;B[gl]\n(;W[ji]\n(;B[kj]\n(;W[ki]\n(;B[lj]\n(;W[hi]\n(;B[hq]\n(;W[ip]\n(;B[iq]\n(;W[kq]\n(;B[kn]\n(;W[jo]\n(;B[ko]\n(;W[lq]\n(;B[lm]\n(;W[ln]\n(;B[mn]\n(;W[lo]\n(;B[kl]\n(;W[kp]\n(;B[km]\n(;W[mo]\n(;B[no]\n(;W[nn]\n(;B[mm]\n(;W[oo]\n(;B[jh]\n(;W[ih]\n(;B[ig]\n(;W[hg]\n(;B[hf]\n(;W[if]\n(;B[ie]\n(;W[jg]\n(;B[jf]\n(;W[ig]\n(;B[he]\n(;W[kg]\n(;B[lh]\n(;W[kf]\n(;B[je]\n(;W[ke]\n(;B[kd]\n(;W[le]\n(;B[me]\n(;W[ld]\n(;B[lc]\n(;W[md]\n(;B[gg]\n(;W[gh]\n(;B[fh]\n(;W[gf]\n(;B[fg]\n(;W[fi]\n(;B[ff]\n(;W[kc]\n(;B[jc]\n(;W[kb]\n(;B[jb]\n(;W[lb]\n(;B[ka]\n(;W[la]\n(;B[ge]\n(;W[ja]\n(;B[ia]\n(;W[ib]\n(;B[ka]\n(;W[gc]\n(;B[ja]\n(;W[ed]\n(;B[ee]\n(;W[fc]\n(;B[ec]\n(;W[fd]\n(;B[hb]\n(;W[de]\n(;B[hc]\n(;W[gb]\n(;B[dc]\n(;W[fe]\n(;B[gd]\n(;W[ef]\n(;B[ga]\n(;W[fa]\n(;B[ha]\n(;W[cl]\n(;B[ea]\n(;W[fb]\n(;B[eb]\n(;W[ee]\n(;B[ce]\n(;W[cf]\n(;B[bf]\n(;W[be]\n(;B[cd]\n(;W[af]\n(;B[bd]\n(;W[bg]\n(;B[ad]\n(;W[ae]\n(;B[bl]\n(;W[bk]\n(;B[ak]\n(;W[aj]\n(;B[al]\n(;W[eg]\n(;B[jq]\n(;W[eh]\n(;B[ic]\n(;W[gf]\n(;B[kr]\n(;W[ns]\n(;B[lr]\n(;W[qr]\n(;B[nm]\n(;W[mp]\n(;B[on]\n(;W[no]\n(;B[pn]\n(;W[pm]\n(;B[pl]\n(;W[ql]\n(;B[qm]\n(;W[ok]\n(;B[qk]\n(;W[rl]\n(;B[rk]\n(;W[pk]\n(;B[om]\n(;W[ol]\n(;B[pm]\n(;W[rm]\n(;B[rn]\n(;W[nj]\n(;B[sl]\n(;W[po]\n(;B[qo]\n(;W[nk]\n(;B[mk]\n(;W[ml]\n(;B[nl]\n(;W[mj]\n(;B[ll]\n(;W[ri]\n(;B[rh]\n(;W[rj]\n(;B[sm]\n(;W[qj]\n(;B[sh]\n(;W[si]\n(;B[fm]\n(;W[ro]\n(;B[qn]\n(;W[so]\n(;B[bs]\n(;W[sn]\n(;B[rm]\n(;W[sj]\n(;B[sk]\n(;W[lf]\n(;B[qg]\n(;W[qh]\n(;B[qe]\n(;W[rg]\n(;B[qf]\n(;W[rf]\n(;B[re]\n(;W[rd]\n(;B[se]\n(;W[sd]\n(;B[ph]\n(;W[sg]\n(;B[pi]\n(;W[pg]\n(;B[qi]\n(;W[rh]\n(;B[oi]\n(;W[oh]\n(;B[rp]\n(;W[rq]\n(;B[sp]\n(;W[sq]\n(;B[as]\n(;W[]\n(;B[ls]\n(;W[mr]\n(;B[gq]\n(;W[ms]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-02T00:00:00+00:00",
          sgf_name: "tim.lyonnet vs Imhotep3",
          black_player: "tim.lyonnet",
          white_player: "Imhotep3",
          black_rank: "24k",
          white_rank: "24k",
          komi: 6.5,
          result: "W+6.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998965/ludbsgv7rxaen5i0nky2.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-02]\nPC[OGS: https://online-go.com/game/59413653]\nGN[Patrick.S vs. oneiropompos]\nPB[Patrick.S]\nPW[oneiropompos]\nBR[15k]\nWR[15k]\nTM[259200]OT[86400 fischer]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[dp]\n(;W[pd]\n(;B[pp]\n(;W[dd]\n(;B[jq]\n(;W[jf]\n(;B[qc]\n(;W[rc]\n(;B[qd]\n(;W[qe]\n(;B[rd]\n(;W[pc]\n(;B[pb]\n(;W[ob]\n(;B[qa]\n(;W[rb]\n(;B[ra]\n(;W[qb]\n(;B[pa]\n(;W[re]\n))))))))))))))))))))",
          game_date: "2023-12-02T00:00:00+00:00",
          sgf_name: "Patrick.S vs oneiropompos",
          black_player: "Patrick.S",
          white_player: "oneiropompos",
          black_rank: "15k",
          white_rank: "15k",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701998980/kfjqqf7whhej1vpbhglg.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-07]\nPC[OGS: https://online-go.com/game/58681937]\nGN[Gra towarzyska]\nPB[konrad.wodnik87]\nPW[JosefineTemrell]\nBR[22k]\nWR[16k]\nTM[0]OT[150 simple]\nRE[B+28.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pq]\n(;W[dd]\n(;B[qd]\n(;W[dp]\n(;B[cj]\n(;W[pj]\n(;B[qj]\n(;W[oi]\n(;B[qh]\n(;W[pl]\n(;B[ql]\n(;W[pm]\n(;B[cm]\n(;W[qp]\n(;B[qq]\n(;W[qo]\n(;B[cg]\n(;W[df]\n(;B[jd]\n(;W[gd]\n(;B[md]\n(;W[of]\n(;B[nf]\n(;W[og]\n(;B[ng]\n(;W[nh]\n(;B[mh]\n(;W[ni]\n(;B[mi]\n(;W[qg]\n(;B[rg]\n(;W[qf]\n(;B[rf]\n(;W[qe]\n(;B[re]\n(;W[pd]\n(;B[pc]\n(;W[qc]\n(;B[rd]\n(;W[oc]\n(;B[rc]\n(;W[pb]\n(;B[hd]\n(;W[hc]\n(;B[jg]\n(;W[id]\n(;B[he]\n(;W[ie]\n(;B[if]\n(;W[je]\n(;B[kd]\n(;W[hf]\n(;B[ge]\n(;W[gf]\n(;B[fe]\n(;W[jf]\n(;B[ig]\n(;W[jc]\n(;B[ld]\n(;W[fd]\n(;B[ff]\n(;W[fg]\n(;B[gg]\n(;W[eg]\n(;B[hg]\n(;W[ee]\n(;B[fh]\n(;W[eh]\n(;B[fi]\n(;W[ei]\n(;B[ej]\n(;W[di]\n(;B[ci]\n(;W[dj]\n(;B[ck]\n(;W[ek]\n(;B[fj]\n(;W[dk]\n(;B[fk]\n(;W[cf]\n(;B[bg]\n(;W[bf]\n(;B[cp]\n(;W[do]\n(;B[co]\n(;W[dq]\n(;B[cq]\n(;W[cr]\n(;B[bq]\n(;W[br]\n(;B[fm]\n(;W[el]\n(;B[em]\n(;W[fl]\n(;B[gl]\n(;W[dn]\n(;B[cn]\n(;W[dm]\n(;B[cl]\n(;W[dl]\n(;B[gm]\n(;W[jp]\n(;B[jq]\n(;W[ip]\n(;B[iq]\n(;W[hq]\n(;B[lq]\n(;W[gq]\n(;B[ir]\n(;W[kp]\n(;B[kq]\n(;W[hr]\n(;B[nq]\n(;W[pp]\n(;B[jm]\n(;W[kn]\n(;B[km]\n(;W[mn]\n(;B[mm]\n(;W[nm]\n(;B[ml]\n(;W[nl]\n(;B[mk]\n(;W[nk]\n(;B[mj]\n(;W[nj]\n(;B[ne]\n(;W[nd]\n(;B[kf]\n(;W[ke]\n(;B[le]\n(;W[ic]\n(;B[jn]\n(;W[ko]\n(;B[jo]\n(;W[io]\n(;B[in]\n(;W[hn]\n(;B[hm]\n(;W[gn]\n(;B[qb]\n(;W[pc]\n(;B[rb]\n(;W[qa]\n(;B[ra]\n(;W[pa]\n(;B[nc]\n(;W[od]\n(;B[mc]\n(;W[nb]\n(;B[mb]\n(;W[na]\n(;B[ma]\n(;W[oe]\n(;B[kc]\n(;W[jb]\n(;B[kb]\n(;W[ka]\n(;B[la]\n(;W[ja]\n(;B[qm]\n(;W[qn]\n(;B[rm]\n(;W[rn]\n(;B[sm]\n(;W[sn]\n(;B[rh]\n(;W[ph]\n(;B[qi]\n(;W[pi]\n(;B[qk]\n(;W[pk]\n(;B[rq]\n(;W[rp]\n(;B[sq]\n(;W[sp]\n(;B[is]\n(;W[hs]\n(;B[aq]\n(;W[ar]\n(;B[ag]\n(;W[ch]\n(;B[bh]\n(;W[dh]\n(;B[bi]\n(;W[op]\n(;B[oq]\n(;W[lm]\n(;B[ll]\n(;W[ln]\n(;B[mq]\n(;W[mp]\n(;B[np]\n(;W[lp]\n(;B[no]\n(;W[oo]\n(;B[nn]\n(;W[on]\n(;B[mo]\n(;W[fn]\n(;B[en]\n(;W[eo]\n(;B[dg]\n(;W[ef]\n(;B[af]\n(;W[be]\n(;B[ae]\n(;W[lf]\n(;B[kg]\n(;W[mg]\n(;B[lg]\n(;W[gk]\n(;B[hk]\n(;W[gj]\n(;B[gi]\n(;W[hj]\n(;B[ij]\n(;W[hi]\n(;B[gh]\n(;W[ii]\n(;B[ik]\n(;W[ji]\n(;B[jj]\n(;W[ki]\n(;B[kj]\n(;W[lh]\n(;B[mf]\n(;W[lj]\n(;B[li]\n(;W[kl]\n(;B[lk]\n(;W[jl]\n(;B[im]\n(;W[il]\n(;B[hl]\n(;W[bd]\n(;B[ad]\n(;W[bc]\n(;B[ac]\n(;W[bb]\n(;B[ab]\n(;W[ba]\n(;B[aa]\n(;W[gc]\n(;B[kk]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-07T00:00:00+00:00",
          sgf_name: "konrad.wodnik87 vs JosefineTemrell",
          black_player: "konrad.wodnik87",
          white_player: "JosefineTemrell",
          black_rank: "22k",
          white_rank: "16k",
          komi: 6.5,
          result: "B+28.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999223/eycfvpgbylo9uogkxp0t.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-02]\nPC[OGS: https://online-go.com/game/59407017]\nGN[BaryonicLord vs. HungYuk]\nPB[BaryonicLord]\nPW[HungYuk]\nBR[8k]\nWR[8k]\nTM[1200]OT[5x30 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[pq]\n(;B[dq]\n(;W[dd]\n(;B[jp]\n(;W[qf]\n(;B[cf]\n(;W[ce]\n(;B[qe]\n(;W[ec]\n(;B[pf]\n(;W[qc]\n(;B[pc]\n(;W[qb]\n(;B[pb]\n(;W[rd]\n(;B[sb]\n(;W[re]\n(;B[rf]\n(;W[rg]\n(;B[qg]\n(;W[sf]\n(;B[rh]\n(;W[qf]\n(;B[pp]\n(;W[mq]\n(;B[rf]\n(;W[dh]\n(;B[sg]\n(;W[df]\n(;B[qq]\n(;W[oq]\n(;B[qr]\n(;W[pr]\n(;B[po]\n(;W[jq]\n(;B[kq]\n(;W[iq]\n(;B[kr]\n(;W[kp]\n(;B[lp]\n(;W[ko]\n(;B[lq]\n(;W[no]\n(;B[lo]\n(;W[ip]\n(;B[nr]\n(;W[mr]\n(;B[np]\n(;W[mp]\n(;B[op]\n(;W[mo]\n(;B[kn]\n(;W[jo]\n(;B[mn]\n(;W[nn]\n(;B[nq]\n(;W[nl]\n(;B[mm]\n(;W[nm]\n(;B[ml]\n(;W[qm]\n(;B[nj]\n(;W[qo]\n(;B[pn]\n(;W[qn]\n(;B[pk]\n(;W[pl]\n(;B[qk]\n(;W[rl]\n(;B[pm]\n(;W[ql]\n(;B[ok]\n(;W[ol]\n(;B[rp]\n(;W[ro]\n(;B[rk]\n(;W[qp]\n(;B[rq]\n(;W[sp]\n(;B[or]\n(;W[sq]\n(;B[sr]\n(;W[so]\n(;B[sm]\n(;W[sl]\n(;B[sk]\n(;W[rs]\n(;B[qs]\n(;W[se]\n(;B[qd]\n(;W[sc]\n(;B[qa]\n(;W[rb]\n(;B[ra]\n(;W[sa]\n(;B[pa]\n(;W[sb]\n(;B[co]\n(;W[fq]\n(;B[jd]\n(;W[gn]\n(;B[gd]\n(;W[gc]\n(;B[hc]\n(;W[fd]\n(;B[gb]\n(;W[fc]\n(;B[ge]\n(;W[hd]\n(;B[he]\n(;W[hb]\n(;B[ic]\n(;W[fb]\n(;B[ib]\n(;W[ck]\n(;B[hj]\n(;W[jk]\n(;B[il]\n(;W[jl]\n(;B[jm]\n(;W[im]\n(;B[ik]\n(;W[km]\n(;B[jn]\n(;W[in]\n(;B[ln]\n(;W[mk]\n(;B[lk]\n(;W[lj]\n(;B[mj]\n(;W[nk]\n(;B[kk]\n(;W[jj]\n(;B[kj]\n(;W[li]\n(;B[ki]\n(;W[lh]\n(;B[ji]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-02T00:00:00+00:00",
          sgf_name: "BaryonicLord vs HungYuk",
          black_player: "BaryonicLord",
          white_player: "HungYuk",
          black_rank: "8k",
          white_rank: "8k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999011/eqk8sln58lnf7lrul2zr.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-12-02]\nPC[OGS: https://online-go.com/game/59401137]\nGN[M.FUJISAWA vs. hankjadeite]\nPB[M.FUJISAWA]\nPW[hankjadeite]\nBR[8k]\nWR[9k]\nTM[1200]OT[5x30 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dq]\n(;B[qp]\n(;W[dd]\n(;B[do]\n(;W[ep]\n(;B[cp]\n(;W[cq]\n(;B[eo]\n(;W[fo]\n(;B[fn]\n(;W[go]\n(;B[gn]\n(;W[oq]\n(;B[ho]\n(;W[hp]\n(;B[ip]\n(;W[gp]\n(;B[io]\n(;W[iq]\n(;B[jq]\n(;W[ir]\n(;B[jr]\n(;W[qr]\n(;B[op]\n(;W[nq]\n(;B[np]\n(;W[qq]\n(;B[mq]\n(;W[rp]\n(;B[qo]\n(;W[ro]\n(;B[rn]\n(;W[qn]\n(;B[qm]\n(;W[pn]\n(;B[rm]\n(;W[pm]\n(;B[pl]\n(;W[ol]\n(;B[pk]\n(;W[mr]\n(;B[lq]\n(;W[nm]\n(;B[ok]\n(;W[nk]\n(;B[nj]\n(;W[mk]\n(;B[mj]\n(;W[qf]\n(;B[qh]\n(;W[of]\n(;B[nd]\n(;W[rd]\n(;B[qc]\n(;W[rc]\n(;B[mf]\n(;W[qb]\n(;B[pb]\n(;W[qd]\n(;B[pc]\n(;W[qa]\n(;B[pe]\n(;W[pf]\n(;B[qe]\n(;W[re]\n(;B[rg]\n(;W[rf]\n(;B[pa]\n(;W[sb]\n(;B[lk]\n(;W[ll]\n(;B[kl]\n(;W[kk]\n(;B[lj]\n(;W[ml]\n(;B[km]\n(;W[po]\n(;B[pp]\n(;W[lm]\n(;B[kn]\n(;W[mn]\n(;B[mo]\n(;W[on]\n(;B[ln]\n(;W[pq]\n(;B[lr]\n(;W[nr]\n(;B[cf]\n(;W[fc]\n(;B[ee]\n(;W[ic]\n(;B[gd]\n(;W[gc]\n(;B[id]\n(;W[dj]\n(;B[hc]\n(;W[hb]\n(;B[hd]\n(;W[ib]\n(;B[jc]\n(;W[cm]\n(;B[bc]\n(;W[cc]\n(;B[bd]\n(;W[bb]\n(;B[cd]\n(;W[cb]\n(;B[ed]\n(;W[ec]\n(;B[de]\n(;W[ab]\n(;B[dc]\n(;W[db]\n(;B[dl]\n(;W[cl]\n(;B[dm]\n(;W[ch]\n(;B[ej]\n(;W[dk]\n(;B[ek]\n(;W[ei]\n(;B[fi]\n(;W[oh]\n(;B[oi]\n(;W[ph]\n(;B[pi]\n(;W[mh]\n(;B[lh]\n(;W[oe]\n(;B[mc]\n(;W[qg]\n(;B[rh]\n(;W[eh]\n(;B[fh]\n(;W[eg]\n(;B[fg]\n(;W[jb]\n(;B[kc]\n(;W[kb]\n(;B[lb]\n(;W[nh]\n(;B[lg]\n(;W[cn]\n(;B[bp]\n(;W[bq]\n(;B[dn]\n(;W[bn]\n(;B[gr]\n(;W[hq]\n(;B[is]\n(;W[hs]\n(;B[js]\n(;W[hr]\n(;B[fq]\n(;W[eq]\n(;B[fp]\n(;W[fr]\n(;B[bh]\n(;W[bg]\n(;B[cg]\n(;W[bi]\n(;B[dh]\n(;W[ah]\n(;B[dg]\n(;W[di]\n(;B[ef]\n(;W[bf]\n(;B[be]\n(;W[sg]\n(;B[ri]\n(;W[od]\n(;B[oc]\n(;W[nb]\n(;B[nc]\n(;W[la]\n(;B[ma]\n(;W[ka]\n(;B[mb]\n(;W[so]\n(;B[sn]\n(;W[sq]\n(;B[ql]\n(;W[ne]\n(;B[me]\n(;W[sh]\n(;B[si]\n(;W[sf]\n(;B[ng]\n(;W[og]\n(;B[mi]\n(;W[mg]\n(;B[nf]\n(;W[ac]\n(;B[af]\n(;W[ag]\n(;B[ae]\n(;W[fd]\n(;B[fe]\n(;W[ap]\n(;B[ao]\n(;W[aq]\n(;B[bo]\n(;W[an]\n(;B[co]\n(;W[ls]\n(;B[ks]\n(;W[ms]\n(;B[no]\n(;W[nn]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-12-02T00:00:00+00:00",
          sgf_name: "M.FUJISAWA vs hankjadeite",
          black_player: "M.FUJISAWA",
          white_player: "hankjadeite",
          black_rank: "8k",
          white_rank: "9k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999021/fa8gigduz5heurwwx4eu.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-29]\nPC[OGS: https://online-go.com/game/59339841]\nGN[Friendly Match]\nPB[RoughRider]\nPW[Michael]\nBR[3d]\nWR[2d]\nTM[300]OT[5x40 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[dp]\n(;W[pd]\n(;B[qp]\n(;W[dd]\n(;B[kq]\n(;W[pp]\n(;B[qq]\n(;W[pn]\n(;B[po]\n(;W[oo]\n(;B[qo]\n(;W[on]\n(;B[qm]\n(;W[fq]\n(;B[cn]\n(;W[nq]\n(;B[eq]\n(;W[fp]\n(;B[hp]\n(;W[fm]\n(;B[dm]\n(;W[iq]\n(;B[hq]\n(;W[jq]\n(;B[kp]\n(;W[kr]\n(;B[lr]\n(;W[jr]\n(;B[jo]\n(;W[lq]\n(;B[hn]\n(;W[do]\n(;B[co]\n(;W[cq]\n(;B[dq]\n(;W[lp]\n(;B[fn]\n(;W[fr]\n(;B[hr]\n(;W[eo]\n(;B[cr]\n(;W[en]\n(;B[fo]\n(;W[em]\n(;B[ep]\n(;W[io]\n(;B[ho]\n(;W[dl]\n(;B[cl]\n(;W[dk]\n(;B[ck]\n(;W[dj]\n(;B[cj]\n(;W[di]\n(;B[bh]\n(;W[hl]\n(;B[jm]\n(;W[jk]\n(;B[cg]\n(;W[qk]\n(;B[fc]\n(;W[fd]\n(;B[gd]\n(;W[fe]\n(;B[ec]\n(;W[dc]\n(;B[hc]\n(;W[nc]\n(;B[ed]\n(;W[de]\n(;B[ee]\n(;W[df]\n(;B[qi]\n(;W[qg]\n(;B[oi]\n(;W[pl]\n(;B[pm]\n(;W[om]\n(;B[rl]\n(;W[rk]\n(;B[og]\n(;W[pf]\n(;B[li]\n(;W[mi]\n(;B[mh]\n(;W[mj]\n(;B[lh]\n(;W[ph]\n(;B[pi]\n(;W[oh]\n(;B[nh]\n(;W[ni]\n(;B[ok]\n(;W[ol]\n(;B[mk]\n(;W[lj]\n(;B[lk]\n(;W[kj]\n(;B[nj]\n(;W[ji]\n(;B[kl]\n(;W[kg]\n(;B[lf]\n(;W[ke]\n(;B[kf]\n(;W[jf]\n(;B[le]\n(;W[kd]\n(;B[ld]\n(;W[kc]\n(;B[mb]\n(;W[nb]\n(;B[kb]\n(;W[lc]\n(;B[mc]\n(;W[lb]\n(;B[ma]\n(;W[ie]\n(;B[nd]\n(;W[od]\n(;B[oe]\n(;W[of]\n(;B[oc]\n(;W[ob]\n(;B[pc]\n(;W[qc]\n(;B[pe]\n(;W[qd]\n(;B[qe]\n(;W[re]\n(;B[ne]\n(;W[rf]\n(;B[nf]\n(;W[rh]\n(;B[la]\n(;W[jb]\n(;B[ja]\n(;W[ia]\n(;B[ka]\n(;W[md]\n(;B[me]\n(;W[ic]\n(;B[id]\n(;W[jd]\n(;B[he]\n(;W[hd]\n(;B[pb]\n(;W[qb]\n(;B[id]\n(;W[je]\n(;B[ha]\n(;W[ib]\n(;B[hb]\n(;W[hd]\n(;B[pa]\n(;W[qa]\n(;B[id]\n(;W[jc]\n(;B[jg]\n(;W[if]\n(;B[ig]\n(;W[hf]\n(;B[hg]\n(;W[gf]\n(;B[fg]\n(;W[hd]\n(;B[ij]\n(;W[ef]\n(;B[ik]\n(;W[ii]\n(;B[hi]\n(;W[il]\n(;B[jl]\n(;W[hj]\n(;B[hk]\n(;W[gj]\n(;B[gk]\n(;W[hh]\n(;B[gi]\n(;W[gg]\n(;B[fj]\n(;W[jh]\n(;B[eh]\n(;W[dh]\n(;B[dg]\n(;W[eg]\n(;B[fh]\n(;W[db]\n(;B[lo]\n(;W[mo]\n(;B[mn]\n(;W[ln]\n(;B[ko]\n(;W[pq]\n(;B[qr]\n(;W[pr]\n(;B[ps]\n(;W[os]\n(;B[qs]\n(;W[nr]\n(;B[be]\n(;W[bd]\n(;B[bf]\n(;W[is]\n(;B[ir]\n(;W[ip]\n(;B[hs]\n(;W[in]\n(;B[im]\n(;W[no]\n(;B[js]\n(;W[ls]\n(;B[mm]\n(;W[nl]\n(;B[nk]\n(;W[ml]\n(;B[ll]\n(;W[sl]\n(;B[rn]\n(;W[ae]\n(;B[af]\n(;W[ad]\n(;B[ri]\n(;W[sm]\n(;B[sn]\n(;W[sk]\n(;B[sh]\n(;W[rg]\n(;B[jj]\n(;W[ki]\n(;B[ff]\n(;W[ge]\n(;B[kk]\n(;W[qn]\n(;B[rm]\n(;W[sp]\n(;B[sq]\n(;W[rq]\n(;B[rr]\n(;W[sr]\n(;B[rp]\n(;W[ql]\n(;B[sq]\n(;W[br]\n(;B[bq]\n(;W[rq]\n(;B[kh]\n(;W[ih]\n(;B[sq]\n(;W[pj]\n(;B[oj]\n(;W[rq]\n(;B[na]\n(;W[oa]\n(;B[sq]\n(;W[bi]\n(;B[ci]\n(;W[rq]\n(;B[qh]\n(;W[pg]\n(;B[sq]\n(;W[bp]\n(;B[so]\n(;W[cp]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-29T00:00:00+00:00",
          sgf_name: "RoughRider vs Michael",
          black_player: "RoughRider",
          white_player: "Michael",
          black_rank: "3d",
          white_rank: "2d",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999045/z82vqyewmcpoouvjrnpr.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-29]\nPC[OGS: https://online-go.com/game/59325731]\nGN[\u89aa\u7766\u6226]\nPB[morikon25]\nPW[\u611b\u570d\u68cb]\nBR[2k]\nWR[2k]\nTM[300]OT[5x30 byo-yomi]\nRE[B+26.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[oc]\n(;W[dp]\n(;B[oq]\n(;W[dc]\n(;B[qd]\n(;W[di]\n(;B[qp]\n(;W[jq]\n(;B[pj]\n(;W[qj]\n(;B[qk]\n(;W[qi]\n(;B[pi]\n(;W[rk]\n(;B[qh]\n(;W[rh]\n(;B[rl]\n(;W[rj]\n(;B[ql]\n(;W[qg]\n(;B[ph]\n(;W[rf]\n(;B[jo]\n(;W[mq]\n(;B[mo]\n(;W[hp]\n(;B[cq]\n(;W[dq]\n(;B[cp]\n(;W[co]\n(;B[bo]\n(;W[cn]\n(;B[bn]\n(;W[cm]\n(;B[dr]\n(;W[er]\n(;B[cr]\n(;W[np]\n(;B[on]\n(;W[op]\n(;B[pp]\n(;W[oo]\n(;B[nn]\n(;W[po]\n(;B[qo]\n(;W[pn]\n(;B[pm]\n(;W[qn]\n(;B[rn]\n(;W[of]\n(;B[ld]\n(;W[nq]\n(;B[or]\n(;W[cf]\n(;B[kq]\n(;W[kr]\n(;B[kp]\n(;W[ir]\n(;B[de]\n(;W[gc]\n(;B[ce]\n(;W[df]\n(;B[ee]\n(;W[cc]\n(;B[fd]\n(;W[fc]\n(;B[hd]\n(;W[ic]\n(;B[id]\n(;W[jc]\n(;B[fh]\n(;W[fj]\n(;B[hn]\n(;W[hj]\n(;B[gk]\n(;W[gj]\n(;B[ik]\n(;W[hh]\n(;B[jd]\n(;W[lb]\n(;B[kc]\n(;W[kb]\n(;B[ji]\n(;W[mi]\n(;B[ng]\n(;W[lh]\n(;B[jg]\n(;W[ke]\n(;B[kd]\n(;W[lf]\n(;B[me]\n(;W[nf]\n(;B[mf]\n(;W[mg]\n(;B[nh]\n(;W[ki]\n(;B[jj]\n(;W[lk]\n(;B[nk]\n(;W[kj]\n(;B[kl]\n(;W[ll]\n(;B[kg]\n(;W[ln]\n(;B[lo]\n(;W[nl]\n(;B[ol]\n(;W[km]\n(;B[jl]\n(;W[mk]\n(;B[nj]\n(;W[nm]\n(;B[mm]\n(;W[mn]\n(;B[mj]\n(;W[jn]\n(;B[io]\n(;W[ni]\n(;B[oi]\n(;W[if]\n(;B[lg]\n(;W[mh]\n(;B[hf]\n(;W[kh]\n(;B[lj]\n(;W[jh]\n(;B[ig]\n(;W[ih]\n(;B[kk]\n(;W[gg]\n(;B[ef]\n(;W[gf]\n(;B[he]\n(;W[dh]\n(;B[hc]\n(;W[hb]\n(;B[ec]\n(;W[fb]\n(;B[eb]\n(;W[db]\n(;B[fa]\n(;W[bd]\n(;B[be]\n(;W[da]\n(;B[ea]\n(;W[bb]\n(;B[ah]\n(;W[nb]\n(;B[ob]\n(;W[eg]\n(;B[aj]\n(;W[go]\n(;B[gn]\n(;W[fn]\n(;B[fm]\n(;W[en]\n(;B[ib]\n(;W[jb]\n(;B[gd]\n(;W[gb]\n(;B[fr]\n(;W[eq]\n(;B[es]\n(;W[fq]\n(;B[gr]\n(;W[ds]\n(;B[cs]\n(;W[hr]\n(;B[gq]\n(;W[gp]\n(;B[mc]\n(;W[mb]\n(;B[pg]\n(;W[og]\n(;B[oh]\n(;W[pf]\n(;B[qe]\n(;W[qf]\n(;B[re]\n(;W[od]\n(;B[pd]\n(;W[hg]\n(;B[jf]\n(;W[nc]\n(;B[nd]\n(;W[oe]\n(;B[sf]\n(;W[sg]\n(;B[se]\n(;W[si]\n(;B[qb]\n(;W[nr]\n(;B[em]\n(;W[hk]\n(;B[hl]\n(;W[gl]\n(;B[gm]\n(;W[fk]\n(;B[dl]\n(;W[im]\n(;B[il]\n(;W[bl]\n(;B[ck]\n(;W[bk]\n(;B[cj]\n(;W[bj]\n(;B[ci]\n(;W[bi]\n(;B[ch]\n(;W[bh]\n(;B[bg]\n(;W[dg]\n(;B[ai]\n(;W[bf]\n(;B[af]\n(;W[cg]\n(;B[ag]\n(;W[dm]\n(;B[fl]\n(;W[ek]\n(;B[el]\n(;W[ii]\n(;B[jm]\n(;W[bm]\n(;B[ap]\n(;W[fs]\n(;B[gs]\n(;W[hq]\n(;B[ds]\n(;W[hs]\n(;B[fs]\n(;W[qm]\n(;B[rm]\n(;W[pr]\n(;B[pq]\n(;W[os]\n(;B[qr]\n(;W[ps]\n(;B[qs]\n(;W[ns]\n(;B[lq]\n(;W[lr]\n(;B[oa]\n(;W[jp]\n(;B[ko]\n(;W[ij]\n(;B[kn]\n(;W[jk]\n(;B[jj]\n(;W[ad]\n(;B[ae]\n(;W[an]\n(;B[ar]\n(;W[ne]\n(;B[md]\n(;W[na]\n(;B[dj]\n(;W[fg]\n(;B[ej]\n(;W[ei]\n(;B[sk]\n(;W[sj]\n(;B[sl]\n(;W[gi]\n(;B[ed]\n(;W[ia]\n(;B[ga]\n(;W[ha]\n(;B[ip]\n(;W[iq]\n(;B[mp]\n(;W[no]\n(;B[om]\n(;W[am]\n(;B[ao]\n(;W[ak]\n(;B[gk]\n(;W[dk]\n(;B[cl]\n(;W[gl]\n(;B[ja]\n(;W[ka]\n(;B[gk]\n(;W[je]\n(;B[ie]\n(;W[gl]\n(;B[pe]\n(;W[rg]\n(;B[gk]\n(;W[pc]\n(;B[pb]\n(;W[gl]\n(;B[mr]\n(;W[ms]\n(;B[gk]\n(;W[ji]\n(;B[gl]\n(;W[jk]\n(;B[ls]\n(;W[ks]\n(;B[jj]\n(;W[li]\n(;B[ml]\n(;W[jk]\n(;B[do]\n(;W[eo]\n(;B[jj]\n(;W[bq]\n(;B[bp]\n(;W[jk]\n(;B[fp]\n(;W[ep]\n(;B[jj]\n(;W[pk]\n(;B[oj]\n(;W[jk]\n(;B[lm]\n(;W[jj]\n(;B[le]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-29T00:00:00+00:00",
          sgf_name: "morikon25 vs \u611b\u570d\u68cb",
          black_player: "morikon25",
          white_player: "\u611b\u570d\u68cb",
          black_rank: "2k",
          white_rank: "2k",
          komi: 6.5,
          result: "B+26.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999057/wpkjxla5cb5lum1yariq.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-27]\nPC[OGS: https://online-go.com/game/59280703]\nGN[Friendly Match]\nPB[Michael]\nPW[eee222]\nBR[2d]\nWR[3d]\nTM[300]OT[5x40 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[pp]\n(;B[cd]\n(;W[co]\n(;B[dq]\n(;W[ed]\n(;B[ec]\n(;W[fc]\n(;B[dc]\n(;W[nc]\n(;B[qf]\n(;W[pg]\n(;B[oc]\n(;W[nd]\n(;B[pf]\n(;W[ep]\n(;B[eq]\n(;W[fp]\n(;B[gq]\n(;W[fd]\n(;B[cf]\n(;W[ob]\n(;B[pb]\n(;W[od]\n(;B[pc]\n(;W[ng]\n(;B[nf]\n(;W[mf]\n(;B[og]\n(;W[oh]\n(;B[of]\n(;W[mg]\n(;B[id]\n(;W[kd]\n(;B[fg]\n(;W[gf]\n(;B[if]\n(;W[gg]\n(;B[ih]\n(;W[gi]\n(;B[ij]\n(;W[jg]\n(;B[ig]\n(;W[dg]\n(;B[cg]\n(;W[fq]\n(;B[fr]\n(;W[gp]\n(;B[hq]\n(;W[gr]\n(;B[hr]\n(;W[il]\n(;B[hk]\n(;W[ji]\n(;B[ii]\n(;W[jj]\n(;B[fk]\n(;W[mp]\n(;B[cp]\n(;W[bp]\n(;B[bq]\n(;W[dp]\n(;B[cq]\n(;W[qi]\n(;B[fh]\n(;W[ib]\n(;B[ge]\n(;W[ff]\n(;B[gb]\n(;W[hc]\n(;B[hd]\n(;W[fb]\n(;B[fe]\n(;W[dd]\n(;B[cc]\n(;W[ej]\n(;B[ee]\n(;W[cl]\n(;B[jb]\n(;W[jc]\n(;B[ic]\n(;W[hb]\n(;B[ke]\n(;W[ld]\n(;B[jd]\n(;W[kc]\n(;B[qn]\n(;W[qo]\n(;B[pn]\n(;W[pl]\n(;B[ql]\n(;W[qk]\n(;B[rk]\n(;W[rl]\n(;B[qm]\n(;W[rj]\n(;B[pk]\n(;W[sk]\n(;B[ol]\n(;W[pj]\n(;B[op]\n(;W[oq]\n(;B[oo]\n(;W[nq]\n(;B[qq]\n(;W[ro]\n(;B[pq]\n(;W[rn]\n(;B[mo]\n(;W[ok]\n(;B[lp]\n(;W[lq]\n(;B[kp]\n(;W[kq]\n(;B[jp]\n(;W[lo]\n(;B[ln]\n(;W[ko]\n(;B[jn]\n(;W[mn]\n(;B[no]\n(;W[kn]\n(;B[km]\n(;W[lm]\n(;B[jo]\n(;W[ln]\n(;B[ll]\n(;W[ml]\n(;B[mr]\n(;W[mq]\n(;B[rm]\n(;W[qp]\n(;B[rq]\n(;W[sm]\n(;B[or]\n(;W[nr]\n(;B[ps]\n(;W[jr]\n(;B[ns]\n(;W[lr]\n(;B[sn]\n(;W[so]\n(;B[sp]\n(;W[ms]\n(;B[rp]\n(;W[sl]\n(;B[kk]\n(;W[jm]\n(;B[kl]\n(;W[jk]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-27T00:00:00+00:00",
          sgf_name: "Michael vs eee222",
          black_player: "Michael",
          white_player: "eee222",
          black_rank: "2d",
          white_rank: "3d",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999067/yqlpd3b45ewbag73kviv.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-23]\nPC[OGS: https://online-go.com/game/59142141]\nGN[Friendly Match]\nPB[Michael]\nPW[\uc18c\uc774\ubd80\ub2f5]\nBR[3d]\nWR[5d]\nTM[300]OT[5x40 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dp]\n(;B[pq]\n(;W[dc]\n(;B[po]\n(;W[pn]\n(;B[qn]\n(;W[qm]\n(;B[qo]\n(;W[qf]\n(;B[qe]\n(;W[pf]\n(;B[nd]\n(;W[pj]\n(;B[ql]\n(;W[lc]\n(;B[ld]\n(;W[kd]\n(;B[le]\n(;W[mb]\n(;B[ob]\n(;W[fq]\n(;B[id]\n(;W[ke]\n(;B[jc]\n(;W[kc]\n(;B[if]\n(;W[lf]\n(;B[nf]\n(;W[oe]\n(;B[od]\n(;W[ne]\n(;B[mf]\n(;W[me]\n(;B[md]\n(;W[kf]\n(;B[mh]\n(;W[hc]\n(;B[ib]\n(;W[hb]\n(;B[kb]\n(;W[kh]\n(;B[mj]\n(;W[rf]\n(;B[re]\n(;W[pm]\n(;B[qj]\n(;W[qi]\n(;B[pk]\n(;W[rj]\n(;B[qk]\n(;W[ok]\n(;B[oj]\n(;W[pi]\n(;B[ol]\n(;W[nk]\n(;B[rm]\n(;W[nj]\n(;B[ni]\n(;W[oi]\n(;B[mk]\n(;W[nl]\n(;B[lm]\n(;W[nm]\n(;B[kj]\n(;W[ih]\n(;B[gd]\n(;W[he]\n(;B[hd]\n(;W[fc]\n(;B[gg]\n(;W[nh]\n(;B[mi]\n(;W[gh]\n(;B[fg]\n(;W[fh]\n(;B[eg]\n(;W[eh]\n(;B[hh]\n(;W[hg]\n(;B[hi]\n(;W[hf]\n(;B[ig]\n(;W[ie]\n(;B[jh]\n(;W[jf]\n(;B[ii]\n(;W[fe]\n(;B[ge]\n(;W[gf]\n(;B[ff]\n(;W[je]\n(;B[dg]\n(;W[fd]\n(;B[dh]\n(;W[ej]\n(;B[lb]\n(;W[mc]\n(;B[cj]\n(;W[el]\n(;B[cd]\n(;W[cc]\n(;B[nn]\n(;W[mn]\n(;B[no]\n(;W[pl]\n(;B[rk]\n(;W[sk]\n(;B[rl]\n(;W[ll]\n(;B[kg]\n(;W[lg]\n(;B[mg]\n(;W[jg]\n(;B[ih]\n(;W[ic]\n(;B[kl]\n(;W[mm]\n(;B[kn]\n(;W[ki]\n(;B[cl]\n(;W[ln]\n(;B[km]\n(;W[dn]\n(;B[lp]\n(;W[se]\n(;B[sd]\n(;W[sf]\n(;B[rc]\n(;W[bm]\n(;B[cq]\n(;W[er]\n(;B[cn]\n(;W[co]\n(;B[dm]\n(;W[en]\n(;B[em]\n(;W[fm]\n(;B[fl]\n(;W[bl]\n(;B[dl]\n(;W[bk]\n(;B[bn]\n(;W[cm]\n(;B[bo]\n(;W[ck]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-23T00:00:00+00:00",
          sgf_name: "Michael vs \uc18c\uc774\ubd80\ub2f5",
          black_player: "Michael",
          white_player: "\uc18c\uc774\ubd80\ub2f5",
          black_rank: "3d",
          white_rank: "5d",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999085/vngnye4igrhzwm7mgnyd.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-22]\nPC[OGS: https://online-go.com/game/59134462]\nGN[winchell vs. TreePine]\nPB[winchell]\nPW[TreePine]\nBR[6k]\nWR[4k]\nTM[1200]OT[5x30 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nAB[pd]\n;W[dp]\n(;B[pq]\n(;W[dd]\n(;B[qk]\n(;W[dj]\n(;B[fq]\n(;W[hq]\n(;B[cq]\n(;W[cp]\n(;B[dq]\n(;W[ep]\n(;B[bq]\n(;W[eq]\n(;B[er]\n(;W[bp]\n(;B[fp]\n(;W[fo]\n(;B[go]\n(;W[gp]\n(;B[gr]\n(;W[gq]\n(;B[fr]\n(;W[ho]\n(;B[gn]\n(;W[fn]\n(;B[fm]\n(;W[em]\n(;B[en]\n(;W[eo]\n(;B[el]\n(;W[gm]\n(;B[dm]\n(;W[hn]\n(;B[gl]\n(;W[hl]\n(;B[gk]\n(;W[cl]\n(;B[mq]\n(;W[dn]\n(;B[qo]\n(;W[hk]\n(;B[gi]\n(;W[gj]\n(;B[fj]\n(;W[hj]\n(;B[ej]\n(;W[dk]\n(;B[ek]\n(;W[em]\n(;B[dl]\n(;W[fl]\n(;B[di]\n(;W[cm]\n(;B[cf]\n(;W[dh]\n(;B[ci]\n(;W[ck]\n(;B[eh]\n(;W[dg]\n(;B[cg]\n(;W[eg]\n(;B[fh]\n(;W[ch]\n(;B[bh]\n(;W[ce]\n(;B[df]\n(;W[ef]\n(;B[ee]\n(;W[ff]\n(;B[fe]\n(;W[gf]\n(;B[de]\n(;W[cd]\n(;B[ec]\n(;W[db]\n(;B[dc]\n(;W[cc]\n(;B[eb]\n(;W[cb]\n(;B[be]\n(;W[bd]\n(;B[bf]\n(;W[hg]\n(;B[ab]\n(;W[ac]\n(;B[ba]\n(;W[bb]\n(;B[aa]\n(;W[bj]\n(;B[bi]\n(;W[ed]\n(;B[fd]\n(;W[fc]\n(;B[gc]\n(;W[fb]\n(;B[gb]\n(;W[ea]\n(;B[he]\n(;W[nc]\n(;B[lc]\n(;W[ne]\n(;B[pf]\n(;W[jc]\n(;B[kd]\n(;W[ie]\n(;B[id]\n(;W[jd]\n(;B[je]\n(;W[if]\n(;B[ic]\n(;W[ke]\n(;B[jf]\n(;W[kc]\n(;B[ld]\n(;W[lb]\n(;B[mb]\n(;W[kb]\n(;B[mc]\n(;W[ib]\n(;B[hb]\n(;W[nb]\n(;B[la]\n(;W[ja]\n(;B[mf]\n(;W[kf]\n(;B[jg]\n(;W[kg]\n(;B[jh]\n(;W[me]\n(;B[le]\n(;W[kh]\n(;B[lf]\n(;W[ji]\n(;B[ih]\n(;W[hh]\n(;B[ii]\n(;W[hi]\n(;B[ij]\n(;W[jj]\n(;B[ik]\n(;W[jl]\n(;B[ma]\n(;W[ka]\n(;B[ha]\n(;W[jk]\n(;B[ia]\n(;W[nf]\n(;B[ng]\n(;W[pc]\n(;B[qc]\n(;W[od]\n(;B[pe]\n(;W[pb]\n(;B[qb]\n(;W[og]\n(;B[of]\n(;W[qa]\n(;B[ra]\n(;W[pa]\n(;B[rc]\n(;W[na]\n(;B[nh]\n(;W[ob]\n(;B[nk]\n(;W[on]\n(;B[mn]\n(;W[qn]\n(;B[rn]\n(;W[po]\n(;B[qp]\n(;W[np]\n(;B[nq]\n(;W[mp]\n(;B[lp]\n(;W[qm]\n(;B[rm]\n(;W[nl]\n(;B[ml]\n(;W[nm]\n(;B[mm]\n(;W[ok]\n(;B[pl]\n(;W[nj]\n(;B[mk]\n(;W[pk]\n(;B[ql]\n(;W[ol]\n(;B[mj]\n(;W[ni]\n(;B[mi]\n(;W[oh]\n(;B[pi]\n(;W[pm]\n(;B[oo]\n(;W[op]\n(;B[no]\n(;W[pp]\n(;B[mo]\n(;W[qq]\n(;B[oq]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-22T00:00:00+00:00",
          sgf_name: "winchell vs TreePine",
          black_player: "winchell",
          white_player: "TreePine",
          black_rank: "6k",
          white_rank: "4k",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999102/crckts1zs6rpl53ortjx.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-20]\nPC[OGS: https://online-go.com/game/59053976]\nGN[Gra towarzyska]\nPB[konrad.wodnik87]\nPW[tex.boonjue]\nBR[22k]\nWR[23k]\nTM[0]OT[150 simple]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pq]\n(;W[dp]\n(;B[cd]\n(;W[pd]\n(;B[nc]\n(;W[ne]\n(;B[jc]\n(;W[cg]\n(;B[ch]\n(;W[dh]\n(;B[ci]\n(;W[di]\n(;B[dg]\n(;W[df]\n(;B[eg]\n(;W[eh]\n(;B[cf]\n(;W[bg]\n(;B[bf]\n(;W[fg]\n(;B[ef]\n(;W[de]\n(;B[ee]\n(;W[dd]\n(;B[ed]\n(;W[dc]\n(;B[ec]\n(;W[db]\n(;B[eb]\n(;W[ea]\n(;B[fa]\n(;W[da]\n(;B[cb]\n(;W[cc]\n(;B[ca]\n(;W[ce]\n(;B[bd]\n(;W[be]\n(;B[af]\n(;W[ae]\n(;B[ad]\n(;W[ag]\n))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-20T00:00:00+00:00",
          sgf_name: "konrad.wodnik87 vs tex.boonjue",
          black_player: "konrad.wodnik87",
          white_player: "tex.boonjue",
          black_rank: "22k",
          white_rank: "23k",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999117/gibnni9gvpdo8zni1wgu.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-19]\nPC[OGS: https://online-go.com/game/59046302]\nGN[jaedge vs. jaypak1]\nPB[jaedge]\nPW[jaypak1]\nBR[3k]\nWR[3k]\nTM[1200]OT[5x30 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pc]\n(;W[dp]\n(;B[pq]\n(;W[dd]\n(;B[fp]\n(;W[eq]\n(;B[fq]\n(;W[iq]\n(;B[cq]\n(;W[dq]\n(;B[cp]\n(;W[do]\n(;B[co]\n(;W[dn]\n(;B[lq]\n(;W[io]\n(;B[fn]\n(;W[cn]\n(;B[bn]\n(;W[bm]\n(;B[an]\n(;W[dr]\n(;B[cr]\n(;W[cl]\n(;B[po]\n(;W[qe]\n(;B[qg]\n(;W[oe]\n(;B[nd]\n(;W[qj]\n(;B[ql]\n(;W[oj]\n(;B[rc]\n(;W[rf]\n(;B[hn]\n(;W[in]\n(;B[hm]\n(;W[im]\n(;B[jp]\n(;W[ip]\n(;B[fl]\n(;W[hl]\n(;B[gl]\n(;W[hk]\n(;B[fj]\n(;W[di]\n(;B[hj]\n(;W[ij]\n(;B[gj]\n(;W[ii]\n(;B[gh]\n(;W[hg]\n(;B[fg]\n(;W[dg]\n(;B[fc]\n(;W[ec]\n(;B[fd]\n(;W[ic]\n(;B[hf]\n(;W[lc]\n(;B[mc]\n(;W[ld]\n(;B[ig]\n(;W[hh]\n(;B[jl]\n(;W[il]\n(;B[jk]\n(;W[ik]\n(;B[ie]\n(;W[gg]\n(;B[ff]\n(;W[fh]\n(;B[eh]\n(;W[gi]\n(;B[ei]\n(;W[eg]\n(;B[dh]\n(;W[dj]\n(;B[cg]\n(;W[df]\n(;B[cf]\n(;W[ce]\n(;B[ci]\n(;W[cj]\n(;B[bi]\n(;W[fr]\n(;B[gr]\n(;W[gq]\n(;B[fs]\n(;W[er]\n(;B[hq]\n(;W[gp]\n(;B[hp]\n(;W[go]\n(;B[ho]\n(;W[hr]\n(;B[gn]\n(;W[gs]\n(;B[fo]\n(;W[gr]\n(;B[be]\n(;W[bd]\n(;B[ae]\n(;W[ad]\n(;B[bg]\n(;W[cc]\n(;B[me]\n(;W[kf]\n(;B[ih]\n(;W[hi]\n(;B[kh]\n(;W[lf]\n(;B[mf]\n(;W[lg]\n(;B[mg]\n(;W[lh]\n(;B[ji]\n(;W[mh]\n(;B[og]\n(;W[rh]\n(;B[rg]\n(;W[sg]\n(;B[qh]\n(;W[ri]\n(;B[ni]\n(;W[nh]\n(;B[oi]\n(;W[ng]\n(;B[pi]\n(;W[pj]\n(;B[nj]\n(;W[lj]\n(;B[nk]\n(;W[jj]\n(;B[jd]\n(;W[kd]\n(;B[jc]\n(;W[jb]\n(;B[kb]\n(;W[hb]\n(;B[gb]\n(;W[lb]\n(;B[ja]\n(;W[ia]\n(;B[ib]\n(;W[fi]\n(;B[ej]\n(;W[jb]\n(;B[ee]\n(;W[de]\n(;B[ib]\n(;W[ol]\n(;B[nl]\n(;W[jb]\n(;B[eb]\n(;W[db]\n(;B[ib]\n(;W[pl]\n(;B[qm]\n(;W[jb]\n(;B[ka]\n(;W[kc]\n(;B[ib]\n(;W[nm]\n(;B[mm]\n(;W[jb]\n(;B[nn]\n(;W[la]\n(;B[of]\n(;W[nf]\n(;B[ne]\n(;W[pf]\n(;B[pg]\n(;W[rd]\n(;B[qf]\n(;W[pe]\n(;B[qd]\n(;W[rk]\n(;B[rl]\n(;W[sc]\n(;B[sb]\n(;W[sd]\n(;B[qb]\n(;W[om]\n(;B[ll]\n(;W[on]\n(;B[no]\n(;W[oo]\n(;B[op]\n(;W[pn]\n(;B[qo]\n(;W[fm]\n(;B[em]\n(;W[np]\n(;B[lo]\n(;W[kn]\n(;B[ln]\n(;W[km]\n(;B[ed]\n(;W[ge]\n(;B[dc]\n(;W[cb]\n(;B[gf]\n(;W[hd]\n(;B[he]\n(;W[gd]\n(;B[jf]\n(;W[ec]\n(;B[kg]\n(;W[ki]\n(;B[jh]\n(;W[qn]\n(;B[rn]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-19T00:00:00+00:00",
          sgf_name: "jaedge vs jaypak1",
          black_player: "jaedge",
          white_player: "jaypak1",
          black_rank: "3k",
          white_rank: "3k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999130/amuqbhiu2vo9qdbn9oft.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-19]\nPC[OGS: https://online-go.com/game/59027287]\nGN[AlpacaFury vs. levithedegu]\nPB[AlpacaFury]\nPW[levithedegu]\nBR[7k]\nWR[6k]\nTM[259200]OT[86400 fischer]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[pp]\n(;B[cc]\n(;W[dp]\n(;B[df]\n(;W[qf]\n(;B[nc]\n(;W[rd]\n(;B[qn]\n(;W[nq]\n(;B[qk]\n(;W[cn]\n(;B[er]\n(;W[dq]\n(;B[dr]\n(;W[cr]\n(;B[hq]\n(;W[dc]\n(;B[dd]\n(;W[ec]\n(;B[ed]\n(;W[fc]\n(;B[hc]\n(;W[fd]\n(;B[cb]\n(;W[fe]\n(;B[he]\n(;W[ef]\n(;B[dg]\n(;W[eg]\n(;B[di]\n(;W[ck]\n(;B[cj]\n(;W[fi]\n(;B[dk]\n(;W[bk]\n(;B[gg]\n(;W[fh]\n(;B[hi]\n(;W[fk]\n(;B[el]\n(;W[hj]\n(;B[ij]\n(;W[hk]\n(;B[pf]\n(;W[qc]\n(;B[qe]\n(;W[mc]\n(;B[mb]\n(;W[nd]\n(;B[nb]\n(;W[mf]\n(;B[re]\n(;W[pb]\n(;B[pc]\n(;W[rb]\n(;B[ph]\n(;W[oe]\n(;B[qd]\n(;W[sd]\n(;B[of]\n(;W[nf]\n(;B[md]\n(;W[lc]\n(;B[od]\n(;W[ne]\n(;B[ld]\n(;W[kd]\n(;B[kc]\n(;W[le]\n(;B[lb]\n(;W[jd]\n(;B[ke]\n(;W[je]\n(;B[kf]\n(;W[nh]\n(;B[kh]\n(;W[nj]\n(;B[oj]\n(;W[ok]\n(;B[nk]\n(;W[mk]\n(;B[nl]\n(;W[mj]\n(;B[ml]\n(;W[oi]\n(;B[pj]\n(;W[kk]\n(;B[ik]\n(;W[ll]\n(;B[il]\n(;W[lm]\n(;B[mn]\n(;W[mm]\n(;B[nm]\n(;W[nn]\n(;B[om]\n(;W[ln]\n(;B[gm]\n(;W[mo]\n(;B[gi]\n(;W[hd]\n(;B[id]\n(;W[gd]\n(;B[ie]\n(;W[ic]\n(;B[ib]\n(;W[jf]\n(;B[jg]\n(;W[jc]\n(;B[jb]\n(;W[hf]\n(;B[if]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-19T00:00:00+00:00",
          sgf_name: "AlpacaFury vs levithedegu",
          black_player: "AlpacaFury",
          white_player: "levithedegu",
          black_rank: "7k",
          white_rank: "6k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999147/ebop9dee0guxgk5aoiax.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-17]\nPC[OGS: https://online-go.com/game/58977717]\nGN[Gra towarzyska]\nPB[konrad.wodnik87]\nPW[hermanstadt]\nBR[23k]\nWR[20k]\nTM[0]OT[150 simple]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pq]\n(;W[dd]\n(;B[qd]\n(;W[dp]\n(;B[qh]\n(;W[pj]\n(;B[qj]\n(;W[ph]\n(;B[lq]\n(;W[jp]\n(;B[jq]\n(;W[lp]\n(;B[hq]\n(;W[hp]\n(;B[fq]\n(;W[fp]\n(;B[dj]\n(;W[cj]\n(;B[dl]\n(;W[cl]\n(;B[dq]\n(;W[cq]\n(;B[dr]\n(;W[cr]\n(;B[qn]\n(;W[pn]\n(;B[po]\n(;W[oo]\n(;B[op]\n(;W[qo]\n(;B[pp]\n(;W[qm]\n(;B[rn]\n(;W[ro]\n(;B[rm]\n(;W[rl]\n(;B[ql]\n(;W[pm]\n(;B[sl]\n(;W[rk]\n(;B[sk]\n(;W[sj]\n(;B[sm]\n(;W[sn]\n))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-17T00:00:00+00:00",
          sgf_name: "konrad.wodnik87 vs hermanstadt",
          black_player: "konrad.wodnik87",
          white_player: "hermanstadt",
          black_rank: "23k",
          white_rank: "20k",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999172/wqvaz8m6f2tcxbhzabod.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-06-26]\nPC[OGS: https://online-go.com/game/24983936]\nGN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]\nPB[JEnG]\nPW[BorisD]\nBR[7k]\nWR[5k]\nTM[180]OT[3x30 byo-yomi]\nRE[W+2.5]\nSZ[9]\nKM[5.5]\nRU[Chinese]\n;B[gd]\n(;W[df]\n(;B[ce]\n(;W[cd]\n(;B[cf]\n(;W[de]\n(;B[dg]\n(;W[cg]\n(;B[bd]\n(;W[bg]\n(;B[cc]\n(;W[dd]\n(;B[dc]\n(;W[eg]\n(;B[gg]\n(;W[ec]\n(;B[eb]\n(;W[fc]\n(;B[fb]\n(;W[gc]\n(;B[hd]\n(;W[be]\n(;B[ae]\n(;W[bf]\n(;B[bc]\n(;W[ff]\n(;B[gf]\n(;W[hc]\n(;B[fh]\n(;W[eh]\n(;B[fg]\n(;W[fe]\n(;B[ge]\n(;W[hh]\n(;B[hg]\n(;W[af]\n(;B[ad]\n(;W[ga]\n(;B[gb]\n(;W[hb]\n(;B[db]\n(;W[fa]\n(;B[ea]\n(;W[ha]\n(;B[ei]\n(;W[di]\n(;B[fi]\n(;W[dh]\n(;B[ic]\n(;W[ib]\n(;B[id]\n(;W[fd]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-06-26T00:00:00+00:00",
          sgf_name: "JEnG vs BorisD",
          black_player: "JEnG",
          white_player: "BorisD",
          black_rank: "7k",
          white_rank: "5k",
          komi: 5.5,
          result: "W+2.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999672/lc3ym8kwxqfcljd9emjx.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-05]\nPC[OGS: https://online-go.com/game/58625748]\nGN[jaedge vs. Jh100]\nPB[jaedge]\nPW[Jh100]\nBR[3k]\nWR[2k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nAB[pc]\n;W[dp]\n(;B[pq]\n(;W[dd]\n(;B[fp]\n(;W[fq]\n(;B[gq]\n(;W[eq]\n(;B[gp]\n(;W[cm]\n(;B[po]\n(;W[pe]\n(;B[qe]\n(;W[qf]\n(;B[qd]\n(;W[pf]\n(;B[nc]\n(;W[qj]\n(;B[ql]\n(;W[oj]\n(;B[cc]\n(;W[dc]\n(;B[cd]\n(;W[de]\n(;B[bf]\n(;W[cf]\n(;B[bg]\n(;W[ic]\n(;B[kc]\n(;W[ld]\n(;B[kd]\n(;W[lc]\n(;B[lb]\n(;W[mb]\n(;B[kb]\n(;W[mc]\n(;B[le]\n(;W[me]\n(;B[lf]\n(;W[je]\n(;B[ke]\n(;W[mf]\n(;B[nd]\n(;W[md]\n(;B[lg]\n(;W[jg]\n(;B[mg]\n(;W[ki]\n(;B[nb]\n(;W[ng]\n(;B[nh]\n(;W[na]\n(;B[nf]\n(;W[ne]\n(;B[og]\n(;W[od]\n(;B[ob]\n(;W[ph]\n(;B[of]\n(;W[oe]\n(;B[oa]\n(;W[ma]\n(;B[nj]\n(;W[nk]\n(;B[mj]\n(;W[kk]\n(;B[ok]\n(;W[pk]\n(;B[ol]\n(;W[pl]\n(;B[mk]\n(;W[pm]\n(;B[nl]\n(;W[dh]\n(;B[ci]\n(;W[ej]\n(;B[ck]\n(;W[em]\n(;B[id]\n(;W[hd]\n(;B[ie]\n(;W[if]\n(;B[he]\n(;W[hf]\n(;B[ge]\n(;W[hc]\n(;B[jd]\n(;W[jp]\n(;B[ff]\n(;W[ho]\n(;B[iq]\n(;W[jq]\n(;B[ip]\n(;W[jr]\n(;B[io]\n(;W[jo]\n(;B[hn]\n(;W[in]\n(;B[gn]\n(;W[fo]\n(;B[go]\n(;W[eo]\n(;B[gl]\n(;W[im]\n(;B[il]\n(;W[jl]\n(;B[ik]\n(;W[db]\n(;B[fc]\n(;W[fb]\n(;B[gb]\n(;W[gc]\n(;B[eb]\n(;W[fd]\n(;B[fa]\n(;W[hb]\n(;B[gd]\n(;W[ec]\n(;B[bb]\n(;W[cb]\n(;B[fe]\n(;W[fb]\n(;B[rh]\n(;W[rf]\n(;B[fc]\n(;W[ed]\n(;B[jc]\n(;W[fb]\n(;B[rj]\n(;W[ga]\n(;B[rl]\n(;W[oh]\n(;B[qn]\n(;W[rc]\n(;B[rd]\n(;W[qb]\n(;B[ra]\n(;W[qa]\n(;B[rb]\n(;W[qc]\n(;B[sc]\n(;W[sb]\n(;B[sd]\n(;W[pd]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-05T00:00:00+00:00",
          sgf_name: "jaedge vs Jh100",
          black_player: "jaedge",
          white_player: "Jh100",
          black_rank: "3k",
          white_rank: "2k",
          komi: 0.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999259/nn5ek4tilyogizorrkar.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-04]\nPC[OGS: https://online-go.com/game/58592087]\nGN[csabaszferle vs. JosefineTemrell]\nPB[csabaszferle]\nPW[JosefineTemrell]\nBR[18k]\nWR[15k]\nTM[1200]OT[5x30 byo-yomi]\nRE[B+47.5]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nHA[2]\nAB[pd][dp]\n;W[op]\n(;B[dd]\n(;W[pn]\n(;B[nm]\n(;W[qc]\n(;B[pc]\n(;W[qb]\n(;B[pb]\n(;W[qd]\n(;B[qe]\n(;W[rd]\n(;B[rb]\n(;W[ra]\n(;B[sb]\n(;W[re]\n(;B[sa]\n(;W[qf]\n(;B[pe]\n(;W[qg]\n(;B[ph]\n(;W[qa]\n(;B[pg]\n(;W[pf]\n(;B[of]\n(;W[qh]\n(;B[qi]\n(;W[rh]\n(;B[ri]\n(;W[si]\n(;B[sj]\n(;W[sh]\n(;B[rf]\n(;W[sf]\n(;B[rj]\n(;W[mp]\n(;B[lo]\n(;W[lp]\n(;B[kp]\n(;W[lq]\n(;B[kq]\n(;W[fc]\n(;B[fd]\n(;W[gc]\n(;B[gd]\n(;W[hd]\n(;B[hc]\n(;W[ic]\n(;B[he]\n(;W[id]\n(;B[ie]\n(;W[jd]\n(;B[je]\n(;W[ec]\n(;B[ed]\n(;W[dc]\n(;B[cc]\n(;W[cb]\n(;B[bc]\n(;W[bb]\n(;B[ab]\n(;W[db]\n(;B[cd]\n(;W[ke]\n(;B[kf]\n(;W[le]\n(;B[lf]\n(;W[me]\n(;B[mf]\n(;W[md]\n(;B[ne]\n(;W[nd]\n(;B[od]\n(;W[nc]\n(;B[nb]\n(;W[mb]\n(;B[ob]\n(;W[ma]\n(;B[na]\n(;W[dj]\n(;B[ej]\n(;W[di]\n(;B[ei]\n(;W[ek]\n(;B[fk]\n(;W[el]\n(;B[fl]\n(;W[jj]\n(;B[ok]\n(;W[lj]\n(;B[ii]\n(;W[jl]\n(;B[im]\n(;W[lh]\n(;B[kh]\n(;W[ml]\n(;B[nl]\n(;W[mm]\n(;B[mn]\n(;W[ln]\n(;B[nn]\n(;W[mo]\n(;B[ko]\n(;W[kn]\n(;B[jn]\n(;W[jm]\n(;B[mk]\n(;W[lm]\n(;B[lk]\n(;W[kk]\n(;B[ik]\n(;W[in]\n(;B[jo]\n(;W[il]\n(;B[hm]\n(;W[jk]\n(;B[li]\n(;W[mi]\n(;B[ki]\n(;W[kj]\n(;B[mj]\n(;W[ij]\n(;B[hk]\n(;W[hl]\n(;B[hj]\n(;W[hn]\n(;B[gm]\n(;W[nj]\n(;B[ni]\n(;W[oj]\n(;B[mh]\n(;W[nk]\n(;B[pj]\n(;W[oi]\n(;B[oh]\n(;W[ji]\n(;B[jh]\n(;W[ol]\n(;B[pi]\n(;W[pl]\n(;B[ql]\n(;W[pm]\n(;B[qm]\n(;W[po]\n(;B[qn]\n(;W[no]\n(;B[qo]\n(;W[qp]\n(;B[rp]\n(;W[rq]\n(;B[qq]\n(;W[pp]\n(;B[rr]\n(;W[pq]\n(;B[sq]\n(;W[qr]\n(;B[rq]\n(;W[ps]\n(;B[ro]\n(;W[kr]\n(;B[jr]\n(;W[ls]\n(;B[js]\n(;W[ks]\n(;B[jq]\n(;W[on]\n(;B[nk]\n(;W[dh]\n(;B[eh]\n(;W[dg]\n(;B[eg]\n(;W[em]\n(;B[fm]\n(;W[en]\n(;B[fn]\n(;W[eo]\n(;B[fo]\n(;W[do]\n(;B[ep]\n(;W[co]\n(;B[cp]\n(;W[bo]\n(;B[bp]\n(;W[ao]\n(;B[fp]\n(;W[df]\n(;B[ef]\n(;W[cf]\n(;B[be]\n(;W[bf]\n(;B[ae]\n(;W[af]\n(;B[ap]\n(;W[ce]\n(;B[ee]\n(;W[de]\n(;B[gl]\n(;W[io]\n(;B[ip]\n(;W[hp]\n(;B[hq]\n(;W[gp]\n(;B[gq]\n(;W[pk]\n(;B[qk]\n(;W[rs]\n(;B[sr]\n(;W[ih]\n(;B[hi]\n(;W[ig]\n(;B[hf]\n(;W[jg]\n(;B[lg]\n(;W[kg]\n(;B[hg]\n(;W[hh]\n(;B[gh]\n(;W[ba]\n(;B[ac]\n(;W[hb]\n(;B[jf]\n(;W[qs]\n(;B[om]\n(;W[ss]\n(;B[oc]\n(;W[]\n(;B[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-04T00:00:00+00:00",
          sgf_name: "csabaszferle vs JosefineTemrell",
          black_player: "csabaszferle",
          white_player: "JosefineTemrell",
          black_rank: "18k",
          white_rank: "15k",
          komi: 0.5,
          result: "B+47.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999277/kdpqrmqetrxvtsrdviu7.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-03]\nPC[OGS: https://online-go.com/game/58571372]\nGN[winchell vs. tada123456]\nPB[winchell]\nPW[tada123456]\nBR[5k]\nWR[4k]\nTM[1200]OT[5x30 byo-yomi]\nRE[B+8.5]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nAB[pd]\n;W[dq]\n(;B[cd]\n(;W[qo]\n(;B[id]\n(;W[do]\n(;B[pq]\n(;W[op]\n(;B[oq]\n(;W[np]\n(;B[mq]\n(;W[lo]\n(;B[pl]\n(;W[nq]\n(;B[nr]\n(;W[lq]\n(;B[lr]\n(;W[mp]\n(;B[mr]\n(;W[kq]\n(;B[jr]\n(;W[kr]\n(;B[ks]\n(;W[jq]\n(;B[ir]\n(;W[qc]\n(;B[pc]\n(;W[qd]\n(;B[qe]\n(;W[re]\n(;B[rf]\n(;W[qf]\n(;B[pe]\n(;W[rg]\n(;B[rd]\n(;W[sf]\n(;B[rc]\n(;W[pf]\n(;B[of]\n(;W[og]\n(;B[nf]\n(;W[ng]\n(;B[ph]\n(;W[pg]\n(;B[mf]\n(;W[mg]\n(;B[lf]\n(;W[rl]\n(;B[rk]\n(;W[qk]\n(;B[pk]\n(;W[rj]\n(;B[qj]\n(;W[sk]\n(;B[ql]\n(;W[rk]\n(;B[ll]\n(;W[hq]\n(;B[rp]\n(;W[qp]\n(;B[qq]\n(;W[ro]\n(;B[qi]\n(;W[ri]\n(;B[mi]\n(;W[je]\n(;B[jd]\n(;W[ke]\n(;B[ld]\n(;W[kd]\n(;B[kc]\n(;W[le]\n(;B[md]\n(;W[kh]\n(;B[lg]\n(;W[lh]\n(;B[mh]\n(;W[jg]\n(;B[fd]\n(;W[hr]\n(;B[dj]\n(;W[qh]\n(;B[oi]\n(;W[cl]\n(;B[fj]\n(;W[hj]\n(;B[hf]\n(;W[lj]\n(;B[mj]\n(;W[lk]\n(;B[mk]\n(;W[kl]\n(;B[gh]\n(;W[ml]\n(;B[nl]\n(;W[bj]\n(;B[ci]\n(;W[bi]\n(;B[ch]\n(;W[mm]\n(;B[nm]\n(;W[oh]\n(;B[pi]\n(;W[bh]\n(;B[cg]\n(;W[gl]\n(;B[dn]\n(;W[el]\n(;B[cp]\n(;W[co]\n(;B[cq]\n(;W[dp]\n(;B[bo]\n(;W[bn]\n(;B[bp]\n(;W[dr]\n(;B[cr]\n(;W[br]\n(;B[ds]\n(;W[fr]\n(;B[bm]\n(;W[cn]\n(;B[an]\n(;W[aq]\n(;B[bs]\n(;W[bl]\n(;B[dm]\n(;W[cm]\n(;B[dl]\n(;W[dk]\n(;B[ek]\n(;W[ck]\n(;B[fl]\n(;W[em]\n(;B[fm]\n(;W[en]\n(;B[fn]\n(;W[hn]\n(;B[dc]\n(;W[rq]\n(;B[rr]\n(;W[sp]\n(;B[sr]\n(;W[fo]\n(;B[gk]\n(;W[hk]\n(;B[mn]\n(;W[lm]\n(;B[pn]\n(;W[qm]\n(;B[pm]\n(;W[gm]\n(;B[bg]\n(;W[gn]\n(;B[jf]\n(;W[if]\n(;B[kf]\n(;W[hg]\n(;B[ie]\n(;W[ig]\n(;B[gg]\n(;W[gj]\n(;B[fi]\n(;W[fk]\n(;B[ej]\n(;W[ar]\n(;B[iq]\n(;W[ls]\n(;B[js]\n(;W[ip]\n(;B[ms]\n(;W[hs]\n(;B[pr]\n(;W[ag]\n(;B[af]\n(;W[ah]\n(;B[be]\n(;W[sd]\n(;B[qb]\n(;W[hh]\n(;B[li]\n(;W[ki]\n(;B[ln]\n(;W[kn]\n(;B[nn]\n(;W[qn]\n(;B[gi]\n(;W[hi]\n(;B[nh]\n(;W[oo]\n(;B[on]\n(;W[sq]\n(;B[sc]\n(;W[se]\n(;B[cj]\n(;W[kg]\n(;B[cs]\n(;W[ao]\n(;B[]\n(;W[po]\n(;B[]\n(;W[mo]\n(;B[]\n(;W[is]\n(;B[ls]\n(;W[pp]\n(;B[]\n(;W[gf]\n(;B[he]\n(;W[no]\n(;B[]\n(;W[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-03T00:00:00+00:00",
          sgf_name: "winchell vs tada123456",
          black_player: "winchell",
          white_player: "tada123456",
          black_rank: "5k",
          white_rank: "4k",
          komi: 0.5,
          result: "B+8.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999315/jxtjslqycf83gmfsokfe.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-11-01]\nPC[OGS: https://online-go.com/game/58506928]\nGN[jaedge vs. OGGGS]\nPB[jaedge]\nPW[OGGGS]\nBR[3k]\nWR[3k]\nTM[1200]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pc]\n(;W[dp]\n(;B[pq]\n(;W[dc]\n(;B[dj]\n(;W[cj]\n(;B[ci]\n(;W[ck]\n(;B[di]\n(;W[dk]\n(;B[ce]\n(;W[bg]\n(;B[cg]\n(;W[bf]\n(;B[cf]\n(;W[be]\n(;B[cd]\n(;W[bd]\n(;B[cc]\n(;W[bc]\n(;B[bb]\n(;W[bi]\n(;B[bh]\n(;W[ah]\n(;B[ch]\n(;W[aj]\n(;B[ic]\n(;W[db]\n(;B[cb]\n(;W[gc]\n(;B[hd]\n(;W[gd]\n(;B[he]\n(;W[ge]\n(;B[gf]\n(;W[hb]\n(;B[ib]\n(;W[hc]\n(;B[ff]\n(;W[fb]\n(;B[ed]\n(;W[ec]\n(;B[qf]\n(;W[id]\n(;B[if]\n(;W[jd]\n(;B[kc]\n(;W[kd]\n(;B[lc]\n(;W[ld]\n(;B[mc]\n(;W[kf]\n(;B[mf]\n(;W[md]\n(;B[nd]\n(;W[kh]\n(;B[lg]\n(;W[kg]\n(;B[mi]\n(;W[kj]\n(;B[ji]\n(;W[ki]\n(;B[hi]\n(;W[pi]\n(;B[pk]\n(;W[oj]\n(;B[mk]\n(;W[ok]\n(;B[ql]\n(;W[om]\n(;B[nl]\n(;W[ol]\n(;B[qo]\n(;W[oo]\n(;B[nq]\n(;W[lm]\n(;B[qh]\n(;W[qi]\n(;B[kl]\n(;W[ll]\n(;B[kk]\n(;W[lk]\n(;B[lj]\n(;W[li]\n(;B[mj]\n(;W[mh]\n(;B[nh]\n(;W[mg]\n(;B[ng]\n(;W[lh]\n(;B[oi]\n(;W[lf]\n(;B[pj]\n(;W[nf]\n(;B[of]\n(;W[me]\n(;B[ne]\n(;W[ml]\n(;B[nk]\n(;W[nm]\n(;B[jj]\n(;W[ni]\n(;B[oh]\n(;W[ph]\n(;B[og]\n(;W[qg]\n(;B[rh]\n(;W[rg]\n(;B[rf]\n(;W[ri]\n(;B[rk]\n(;W[qn]\n(;B[rn]\n(;W[pf]\n(;B[oe]\n(;W[qe]\n(;B[pg]\n(;W[sh]\n(;B[pe]\n(;W[qc]\n(;B[qd]\n(;W[rc]\n(;B[rd]\n(;W[pb]\n(;B[oc]\n(;W[ob]\n(;B[rb]\n(;W[rm]\n(;B[qm]\n(;W[qp]\n(;B[pp]\n(;W[ro]\n(;B[pn]\n(;W[po]\n(;B[qn]\n(;W[qq]\n(;B[qr]\n(;W[rr]\n(;B[pr]\n(;W[rq]\n(;B[rs]\n(;W[sn]\n(;B[rl]\n(;W[pl]\n(;B[qk]\n(;W[sp]\n(;B[sr]\n(;W[sm]\n(;B[qs]\n(;W[sj]\n(;B[rj]\n(;W[on]\n(;B[sl]\n(;W[hg]\n(;B[hf]\n(;W[jk]\n(;B[km]\n(;W[ik]\n(;B[ln]\n(;W[nj]\n(;B[hj]\n(;W[hk]\n(;B[im]\n(;W[kn]\n(;B[jn]\n(;W[ko]\n(;B[jo]\n(;W[kp]\n(;B[jp]\n(;W[gl]\n(;B[kq]\n(;W[lp]\n(;B[lq]\n(;W[mp]\n(;B[fq]\n(;W[mq]\n(;B[mr]\n(;W[lr]\n(;B[kr]\n(;W[nr]\n(;B[ls]\n(;W[oq]\n(;B[or]\n(;W[ns]\n(;B[op]\n(;W[np]\n(;B[oq]\n(;W[so]\n(;B[ss]\n(;W[os]\n(;B[ms]\n(;W[pm]\n(;B[ps]\n(;W[qj]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-11-01T00:00:00+00:00",
          sgf_name: "jaedge vs OGGGS",
          black_player: "jaedge",
          white_player: "OGGGS",
          black_rank: "3k",
          white_rank: "3k",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999326/l8dif8l2eb7crsaxuppn.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-10-25]\nPC[OGS: https://online-go.com/game/58309282]\nGN[jaedge vs. \u963f\u91cc\u5df4\u5df4]\nPB[jaedge]\nPW[\u963f\u91cc\u5df4\u5df4]\nBR[4k]\nWR[3k]\nTM[1200]OT[5x30 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pc]\n(;W[dp]\n(;B[pq]\n(;W[dc]\n(;B[fp]\n(;W[eq]\n(;B[fq]\n(;W[dn]\n(;B[jq]\n(;W[qf]\n(;B[qd]\n(;W[nf]\n(;B[nd]\n(;W[kc]\n(;B[qh]\n(;W[qg]\n(;B[ph]\n(;W[oe]\n(;B[mc]\n(;W[le]\n(;B[ql]\n(;W[qo]\n(;B[qp]\n(;W[qm]\n(;B[pm]\n(;W[pn]\n(;B[rm]\n(;W[qn]\n(;B[om]\n(;W[on]\n(;B[nm]\n(;W[rp]\n(;B[rq]\n(;W[rn]\n(;B[rl]\n(;W[pp]\n(;B[qq]\n(;W[op]\n(;B[nq]\n(;W[oq]\n(;B[or]\n(;W[np]\n(;B[mq]\n(;W[so]\n(;B[sq]\n(;W[sp]\n(;B[ce]\n(;W[cd]\n(;B[de]\n(;W[gc]\n(;B[ci]\n(;W[cl]\n(;B[nh]\n(;W[mg]\n(;B[ld]\n(;W[kd]\n(;B[ke]\n(;W[lf]\n(;B[je]\n(;W[id]\n(;B[kg]\n(;W[mh]\n(;B[ni]\n(;W[mi]\n(;B[ki]\n(;W[lj]\n(;B[nk]\n(;W[mk]\n(;B[kj]\n(;W[kk]\n(;B[jk]\n(;W[kl]\n(;B[ml]\n(;W[jl]\n(;B[ik]\n(;W[ko]\n(;B[ie]\n(;W[hd]\n(;B[gf]\n(;W[hq]\n(;B[ip]\n(;W[hp]\n(;B[ho]\n(;W[io]\n(;B[go]\n(;W[jp]\n(;B[iq]\n(;W[kq]\n(;B[in]\n(;W[jo]\n(;B[kr]\n(;W[hr]\n(;B[er]\n(;W[jr]\n(;B[cq]\n(;W[cp]\n(;B[bq]\n(;W[bp]\n(;B[bk]\n(;W[dj]\n(;B[ck]\n(;W[dl]\n(;B[bl]\n(;W[dk]\n(;B[bn]\n(;W[cn]\n(;B[di]\n(;W[fj]\n(;B[ei]\n(;W[gi]\n(;B[gl]\n(;W[gk]\n(;B[fl]\n(;W[hl]\n(;B[hk]\n(;W[ej]\n(;B[il]\n(;W[hm]\n(;B[im]\n(;W[hj]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-10-25T00:00:00+00:00",
          sgf_name: "jaedge vs \u963f\u91cc\u5df4\u5df4",
          black_player: "jaedge",
          white_player: "\u963f\u91cc\u5df4\u5df4",
          black_rank: "4k",
          white_rank: "3k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999338/btvm3z5jlpkewvyidafh.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-06-26]\nPC[OGS: https://online-go.com/game/24984266]\nGN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]\nPB[BorisD]\nPW[Patrice]\nBR[5k]\nWR[5k]\nTM[180]OT[3x30 byo-yomi]\nRE[W+0.5]\nSZ[9]\nKM[5.5]\nRU[Chinese]\n;B[fd]\n(;W[ff]\n(;B[dd]\n(;W[ce]\n(;B[cg]\n(;W[cd]\n(;B[gg]\n(;W[fg]\n(;B[gf]\n(;W[de]\n(;B[ed]\n(;W[dg]\n(;B[bf]\n(;W[be]\n(;B[dh]\n(;W[eh]\n(;B[bh]\n(;W[ag]\n(;B[af]\n(;W[di]\n(;B[ci]\n(;W[ch]\n(;B[cc]\n(;W[bc]\n(;B[dh]\n(;W[ge]\n(;B[ei]\n(;W[fe]\n(;B[fh]\n(;W[eg]\n(;B[gh]\n(;W[gc]\n(;B[gd]\n(;W[hd]\n(;B[fc]\n(;W[gb]\n(;B[fb]\n(;W[hc]\n(;B[cb]\n(;W[bb]\n(;B[db]\n(;W[ea]\n(;B[fa]\n(;W[ca]\n(;B[eb]\n(;W[hf]\n(;B[hg]\n(;W[ba]\n(;B[da]\n(;W[ig]\n(;B[ih]\n(;W[if]\n(;B[ga]\n(;W[ha]\n(;B[ae]\n(;W[ad]\n(;B[ee]\n(;W[cf]\n(;B[bg]\n(;W[ef]\n(;B[id]\n(;W[ic]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-06-26T00:00:00+00:00",
          sgf_name: "BorisD vs Patrice",
          black_player: "BorisD",
          white_player: "Patrice",
          black_rank: "5k",
          white_rank: "5k",
          komi: 5.5,
          result: "W+0.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999665/zngfxshhv47fpf7xagou.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-10-18]\nPC[OGS: https://online-go.com/game/58080468]\nGN[MrMiagi vs. AldnYildiz]\nPB[MrMiagi]\nPW[AldnYildiz]\nBR[9k]\nWR[8k]\nTM[259200]OT[86400 fischer]\nRE[B+T]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nHA[2]\nAB[pd][dp]\n;W[pq]\n(;B[dd]\n(;W[fq]\n(;B[cm]\n(;W[jc]\n(;B[mc]\n(;W[gc]\n(;B[dg]\n(;W[qf]\n(;B[qd]\n(;W[pi]\n(;B[po]\n(;W[np]\n(;B[pl]\n(;W[oe]\n(;B[od]\n(;W[ne]\n(;B[oh]\n(;W[ok]\n(;B[qj]\n(;W[qi]\n(;B[pj]\n(;W[oj]\n(;B[ol]\n(;W[pk]\n(;B[qk]\n(;W[nl]\n(;B[nm]\n(;W[ql]\n(;B[nk]\n(;W[rl]\n(;B[oi]\n(;W[nj]\n(;B[ml]\n(;W[rj]\n(;B[qp]\n(;W[qq]\n(;B[qm]\n(;W[rm]\n(;B[qn]\n(;W[kq]\n(;B[gp]\n(;W[fp]\n(;B[go]\n(;W[dr]\n(;B[cq]\n(;W[hr]\n(;B[fo]\n(;W[eo]\n(;B[ep]\n(;W[en]\n(;B[ko]\n(;W[cn]\n(;B[dj]\n(;W[dm]\n(;B[cl]\n(;W[cr]\n(;B[bq]\n(;W[bo]\n(;B[dq]\n(;W[br]\n(;B[gq]\n(;W[fr]\n(;B[gr]\n(;W[gs]\n(;B[iq]\n(;W[ir]\n(;B[jq]\n(;W[jr]\n(;B[mh]\n(;W[kp]\n(;B[jo]\n(;W[lo]\n(;B[mj]\n(;W[rk]\n(;B[fb]\n(;W[fc]\n(;B[eb]\n(;W[on]\n(;B[pm]\n(;W[lm]\n(;B[ll]\n(;W[kl]\n(;B[kk]\n(;W[jl]\n(;B[jk]\n(;W[ik]\n(;B[ji]\n(;W[hq]\n(;B[io]\n(;W[hp]\n(;B[ho]\n(;W[gm]\n(;B[km]\n(;W[kn]\n(;B[jm]\n(;W[il]\n(;B[hi]\n(;W[fj]\n(;B[fi]\n(;W[ej]\n(;B[ei]\n(;W[dk]\n(;B[cj]\n(;W[dl]\n(;B[kb]\n(;W[jb]\n(;B[kc]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-10-18T00:00:00+00:00",
          sgf_name: "MrMiagi vs AldnYildiz",
          black_player: "MrMiagi",
          white_player: "AldnYildiz",
          black_rank: "9k",
          white_rank: "8k",
          komi: 0.5,
          result: "B+T",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999355/ifpw4vsnxbvilg10s32l.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-10-07]\nPC[OGS: https://online-go.com/game/57748950]\nGN[Friendly Match]\nPB[shelly613]\nPW[crazybluespacedude]\nBR[12k]\nWR[11k]\nTM[480]OT[5x30 byo-yomi]\nRE[W+61.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[dq]\n(;W[pd]\n(;B[qp]\n(;W[cd]\n(;B[jq]\n(;W[fc]\n(;B[kc]\n(;W[nq]\n(;B[oq]\n(;W[np]\n(;B[mq]\n(;W[nr]\n(;B[or]\n(;W[ks]\n(;B[kr]\n(;W[ls]\n(;B[js]\n(;W[mr]\n(;B[lr]\n(;W[ms]\n(;B[lq]\n(;W[ir]\n(;B[jr]\n(;W[co]\n(;B[hr]\n(;W[iq]\n(;B[is]\n(;W[cq]\n(;B[ip]\n(;W[dl]\n(;B[hq]\n(;W[dr]\n(;B[eq]\n(;W[ch]\n(;B[er]\n(;W[cr]\n(;B[do]\n(;W[dn]\n(;B[eo]\n(;W[en]\n(;B[fn]\n(;W[qm]\n(;B[qn]\n(;W[pm]\n(;B[pn]\n(;W[pj]\n(;B[nc]\n(;W[oc]\n(;B[ob]\n(;W[pb]\n(;B[od]\n(;W[pc]\n(;B[oa]\n(;W[pa]\n(;B[mb]\n(;W[pg]\n(;B[oe]\n(;W[pe]\n(;B[mf]\n(;W[ic]\n(;B[jc]\n(;W[id]\n(;B[ib]\n(;W[hb]\n(;B[ia]\n(;W[ha]\n(;B[kb]\n(;W[fm]\n(;B[gn]\n(;W[gm]\n(;B[hn]\n(;W[hm]\n(;B[mp]\n(;W[no]\n(;B[mo]\n(;W[nn]\n(;B[op]\n(;W[jg]\n(;B[jd]\n(;W[ie]\n(;B[je]\n(;W[jf]\n(;B[kf]\n(;W[kg]\n(;B[lg]\n(;W[lh]\n(;B[mh]\n(;W[li]\n(;B[of]\n(;W[pf]\n(;B[og]\n(;W[oh]\n(;B[nh]\n(;W[oi]\n(;B[mi]\n(;W[lj]\n(;B[im]\n(;W[il]\n(;B[jm]\n(;W[jl]\n(;B[km]\n(;W[kl]\n(;B[mn]\n(;W[nm]\n(;B[mm]\n(;W[nl]\n(;B[ml]\n(;W[rn]\n(;B[ro]\n(;W[sn]\n(;B[so]\n(;W[rm]\n(;B[oo]\n(;W[nk]\n(;B[mk]\n(;W[mj]\n(;B[ll]\n(;W[gh]\n(;B[cc]\n(;W[dc]\n(;B[cb]\n(;W[db]\n(;B[bd]\n(;W[ce]\n(;B[be]\n(;W[bf]\n(;B[ac]\n(;W[bb]\n(;B[ca]\n(;W[ba]\n(;B[ae]\n(;W[bc]\n(;B[cf]\n(;W[bg]\n(;B[df]\n(;W[dd]\n(;B[dp]\n(;W[cp]\n(;B[qj]\n(;W[qh]\n(;B[qi]\n(;W[rh]\n(;B[os]\n(;W[ni]\n(;B[ng]\n(;W[lk]\n(;B[es]\n(;W[ds]\n(;B[cl]\n(;W[cj]\n(;B[ck]\n(;W[dk]\n(;B[cm]\n(;W[cn]\n(;B[bj]\n(;W[bi]\n(;B[dj]\n(;W[ci]\n(;B[dm]\n(;W[em]\n(;B[ej]\n(;W[el]\n(;B[eh]\n(;W[bk]\n(;B[]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-10-07T00:00:00+00:00",
          sgf_name: "shelly613 vs crazybluespacedude",
          black_player: "shelly613",
          white_player: "crazybluespacedude",
          black_rank: "12k",
          white_rank: "11k",
          komi: 6.5,
          result: "W+61.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999373/uothmqwhnvoakbeki2kj.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-09-26]\nPC[OGS: https://online-go.com/game/57433249]\nGN[NAGF Online League Match]\nPB[jsmattsonjr]\nPW[levithedegu]\nBR[6k]\nWR[6k]\nTM[2700]OT[3x30 byo-yomi]\nRE[B+R]\nSZ[19]\nKM[7.5]\nRU[AGA]\n;B[pd]\n(;W[dp]\n(;B[pp]\n(;W[dd]\n(;B[fc]\n(;W[cf]\n(;B[db]\n(;W[cc]\n(;B[hd]\n(;W[qf]\n(;B[qe]\n(;W[pf]\n(;B[nd]\n(;W[qj]\n(;B[cq]\n(;W[cp]\n(;B[dq]\n(;W[eq]\n(;B[er]\n(;W[fr]\n(;B[fq]\n(;W[ep]\n(;B[gr]\n(;W[dr]\n(;B[fs]\n(;W[cr]\n(;B[jp]\n(;W[qq]\n(;B[pq]\n(;W[qp]\n(;B[qo]\n(;W[ro]\n(;B[qn]\n(;W[rn]\n(;B[qm]\n(;W[rm]\n(;B[ql]\n(;W[dk]\n(;B[di]\n(;W[fp]\n(;B[gp]\n(;W[go]\n(;B[hp]\n(;W[lq]\n(;B[ho]\n(;W[gn]\n(;B[hn]\n(;W[gm]\n(;B[qr]\n(;W[rr]\n(;B[lo]\n(;W[or]\n(;B[pr]\n(;W[mo]\n(;B[mp]\n(;W[lp]\n(;B[np]\n(;W[jr]\n(;B[ir]\n(;W[ko]\n(;B[ln]\n(;W[kp]\n(;B[nr]\n(;W[kn]\n(;B[lm]\n(;W[km]\n(;B[ll]\n(;W[hm]\n(;B[jq]\n(;W[in]\n(;B[pi]\n(;W[qi]\n(;B[ph]\n(;W[qh]\n(;B[rl]\n(;W[rs]\n(;B[ch]\n(;W[pb]\n(;B[cb]\n(;W[rc]\n(;B[re]\n(;W[oe]\n(;B[od]\n(;W[ng]\n(;B[qc]\n(;W[qb]\n(;B[ni]\n(;W[nh]\n(;B[ne]\n(;W[nf]\n(;B[rg]\n(;W[qg]\n(;B[rd]\n(;W[nb]\n(;B[lc]\n(;W[mc]\n(;B[md]\n(;W[lb]\n(;B[kc]\n(;W[kb]\n(;B[lf]\n(;W[mi]\n(;B[nj]\n(;W[lh]\n(;B[df]\n(;W[dg]\n(;B[cg]\n(;W[ef]\n(;B[de]\n(;W[ce]\n(;B[ee]\n(;W[fe]\n(;B[ed]\n(;W[ec]\n(;B[fd]\n(;W[bb]\n(;B[hh]\n(;W[pk]\n(;B[pj]\n(;W[mj]\n(;B[ok]\n(;W[mk]\n(;B[nm]\n(;W[nl]\n(;B[ol]\n(;W[jg]\n(;B[lg]\n(;W[kh]\n(;B[kj]\n(;W[jj]\n(;B[kl]\n(;W[jl]\n(;B[ji]\n(;W[ki]\n(;B[lj]\n(;W[ii]\n(;B[jk]\n(;W[ij]\n(;B[il]\n(;W[im]\n(;B[jm]\n(;W[ih]\n(;B[hg]\n(;W[gk]\n(;B[sm]\n(;W[rp]\n(;B[ek]\n(;W[el]\n(;B[ej]\n(;W[je]\n(;B[ke]\n(;W[hf]\n(;B[gf]\n(;W[he]\n(;B[ge]\n(;W[id]\n(;B[if]\n(;W[ie]\n(;B[jf]\n(;W[jc]\n(;B[ic]\n(;W[ib]\n(;B[jd]\n(;W[hb]\n(;B[jb]\n(;W[ja]\n(;B[eb]\n(;W[bd]\n(;B[ba]\n(;W[ca]\n(;B[da]\n(;W[dc]\n(;B[gb]\n(;W[gi]\n(;B[fh]\n(;W[fi]\n(;B[eh]\n(;W[gh]\n(;B[hi]\n(;W[hj]\n(;B[dl]\n(;W[dm]\n(;B[cl]\n(;W[cm]\n(;B[bl]\n(;W[bm]\n(;B[fl]\n(;W[em]\n(;B[fk]\n(;W[fm]\n(;B[rb]\n(;W[pc]\n(;B[sc]\n(;W[nc]\n(;B[og]\n(;W[oh]\n(;B[pg]\n(;W[oi]\n(;B[oj]\n(;W[of]\n(;B[qk]\n(;W[rh]\n(;B[rf]\n(;W[rj]\n(;B[kr]\n(;W[lr]\n(;B[jn]\n(;W[jo]\n(;B[jl]\n(;W[io]\n(;B[ip]\n(;W[al]\n(;B[bk]\n(;W[ak]\n(;B[aj]\n(;W[am]\n(;B[bj]\n(;W[gg]\n(;B[ff]\n(;W[fg]\n(;B[eg]\n(;W[nk]\n(;B[mm]\n(;W[jc]\n(;B[bq]\n(;W[br]\n(;B[jb]\n(;W[om]\n(;B[pl]\n(;W[jc]\n(;B[mg]\n(;W[mh]\n(;B[jb]\n(;W[js]\n(;B[ks]\n(;W[jc]\n(;B[bf]\n(;W[be]\n(;B[jb]\n(;W[bg]\n(;B[bh]\n(;W[af]\n(;B[jc]\n(;W[ah]\n(;B[qa]\n(;W[pa]\n(;B[oc]\n(;W[ob]\n(;B[ma]\n(;W[na]\n(;B[hc]\n(;W[ka]\n(;B[ai]\n(;W[ag]\n(;B[ra]\n(;W[sn]\n(;B[sl]\n(;W[lk]\n(;B[kk]\n(;W[ls]\n(;B[kq]\n(;W[ns]\n(;B[oq]\n(;W[os]\n(;B[mr]\n(;W[ms]\n(;B[ig]\n(;W[kg]\n(;B[ds]\n(;W[bp]\n(;B[ga]\n(;W[ia]\n(;B[ab]\n(;W[bc]\n(;B[aa]\n(;W[ac]\n(;B[ca]\n(;W[mf]\n(;B[sg]\n(;W[sh]\n(;B[me]\n(;W[kf]\n(;B[le]\n(;W[mq]\n(;B[nq]\n(;W[cs]\n(;B[es]\n(;W[ei]\n(;B[gj]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-09-26T00:00:00+00:00",
          sgf_name: "jsmattsonjr vs levithedegu",
          black_player: "jsmattsonjr",
          white_player: "levithedegu",
          black_rank: "6k",
          white_rank: "6k",
          komi: 7.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999383/cgl4wspqnlv0z1mk19di.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-09-25]\nPC[OGS: https://online-go.com/game/57368350]\nGN[Game 1]\nPB[oneiropompos]\nPW[DramaTheurgist]\nBR[16k]\nWR[16k]\nTM[1814400]OT[0 absolute]\nRE[B+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dp]\n(;B[dd]\n(;W[pp]\n(;B[jj]\n(;W[jp]\n(;B[dj]\n(;W[pj]\n(;B[pi]\n(;W[oi]\n(;B[oj]\n(;W[pk]\n(;B[ph]\n(;W[oh]\n(;B[nj]\n(;W[ok]\n(;B[nk]\n(;W[pg]\n(;B[qg]\n(;W[qh]\n(;B[qi]\n(;W[qj]\n(;B[rh]\n(;W[ri]\n(;B[qh]\n(;W[nf]\n(;B[og]\n(;W[ng]\n(;B[pf]\n(;W[of]\n(;B[pg]\n(;W[od]\n(;B[oc]\n(;W[nd]\n(;B[pc]\n(;W[pe]\n(;B[qe]\n(;W[oe]\n(;B[nh]\n(;W[lc]\n(;B[qq]\n(;W[qp]\n(;B[pq]\n(;W[op]\n(;B[oq]\n(;W[nq]\n(;B[nr]\n(;W[mq]\n(;B[mr]\n(;W[lq]\n(;B[or]\n(;W[rj]\n(;B[cq]\n(;W[dq]\n(;B[cp]\n(;W[do]\n(;B[co]\n(;W[dn]\n(;B[cn]\n(;W[fc]\n(;B[dm]\n(;W[em]\n(;B[el]\n(;W[fm]\n(;B[fl]\n(;W[gl]\n(;B[gm]\n(;W[hl]\n(;B[gn]\n(;W[fo]\n(;B[go]\n(;W[fp]\n(;B[jl]\n(;W[nl]\n(;B[ml]\n(;W[nm]\n(;B[jn]\n(;W[im]\n(;B[in]\n(;W[jm]\n(;B[km]\n(;W[ln]\n(;B[kn]\n(;W[cf]\n(;B[df]\n(;W[ce]\n(;B[de]\n(;W[cc]\n(;B[cd]\n(;W[bd]\n(;B[dc]\n(;W[bc]\n(;B[cg]\n(;W[bg]\n(;B[bh]\n(;W[bf]\n(;B[ch]\n(;W[jf]\n(;B[je]\n(;W[ke]\n(;B[jd]\n(;W[kd]\n(;B[if]\n(;W[jc]\n(;B[kf]\n(;W[jg]\n(;B[kg]\n(;W[gj]\n(;B[ig]\n(;W[jh]\n(;B[ih]\n(;W[kh]\n(;B[lh]\n(;W[lg]\n(;B[lf]\n(;W[mg]\n(;B[mh]\n(;W[ii]\n(;B[ji]\n(;W[rq]\n(;B[rr]\n(;W[fh]\n(;B[dl]\n(;W[ik]\n(;B[il]\n(;W[nc]\n(;B[hm]\n(;W[hq]\n(;B[ic]\n(;W[ib]\n(;B[jb]\n(;W[kc]\n(;B[hc]\n(;W[hb]\n(;B[gc]\n(;W[gb]\n(;B[fd]\n(;W[gd]\n(;B[id]\n(;W[db]\n(;B[eb]\n(;W[cr]\n(;B[br]\n(;W[bs]\n(;B[dr]\n(;W[er]\n(;B[cs]\n(;W[lr]\n(;B[fn]\n(;W[en]\n(;B[eq]\n(;W[fq]\n(;B[rp]\n(;W[ro]\n(;B[sq]\n(;W[so]\n(;B[cb]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-09-25T00:00:00+00:00",
          sgf_name: "oneiropompos vs DramaTheurgist",
          black_player: "oneiropompos",
          white_player: "DramaTheurgist",
          black_rank: "16k",
          white_rank: "16k",
          komi: 6.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999396/uihtzkx7rcjgqe6iqd9e.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-09-09]\nPC[OGS: https://online-go.com/game/56939843]\nGN[levithedegu vs. winchell]\nPB[levithedegu]\nPW[winchell]\nBR[6k]\nWR[5k]\nTM[259200]OT[86400 fischer]\nRE[B+R]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nAB[dd]\n;W[pp]\n(;B[pd]\n(;W[cp]\n(;B[jd]\n(;W[cf]\n(;B[fc]\n(;W[dj]\n(;B[pj]\n(;W[qc]\n(;B[qd]\n(;W[pc]\n(;B[od]\n(;W[nb]\n(;B[eq]\n(;W[dm]\n(;B[bq]\n(;W[cq]\n(;B[bp]\n(;W[co]\n(;B[bo]\n(;W[bn]\n(;B[cr]\n(;W[dr]\n(;B[cs]\n(;W[dq]\n(;B[ar]\n(;W[jq]\n(;B[nq]\n(;W[oq]\n(;B[np]\n(;W[qn]\n(;B[kr]\n(;W[jr]\n(;B[kq]\n(;W[kp]\n(;B[lp]\n(;W[lo]\n(;B[mo]\n(;W[ln]\n(;B[mn]\n(;W[lm]\n(;B[mm]\n(;W[ll]\n(;B[om]\n(;W[or]\n(;B[jp]\n(;W[ko]\n(;B[ip]\n(;W[hq]\n(;B[im]\n(;W[ik]\n(;B[hk]\n(;W[hl]\n(;B[il]\n(;W[jk]\n(;B[gl]\n(;W[hm]\n(;B[hn]\n(;W[gm]\n(;B[fm]\n(;W[gn]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-09-09T00:00:00+00:00",
          sgf_name: "levithedegu vs winchell",
          black_player: "levithedegu",
          white_player: "winchell",
          black_rank: "6k",
          white_rank: "5k",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999407/o6pjd0ijdfkeebiwbsxr.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-08-02]\nPC[OGS: https://online-go.com/game/55848920]\nGN[Tournament Game: Monthly Simultaneous McMahon 2022-08-16 17:00 (93050) R:3 (\u627e\u501f\u53e3\u5b89\u9759 vs Sadaharu)]\nPB[Sadaharu]\nPW[\u627e\u501f\u53e3\u5b89\u9759]\nBR[6d]\nWR[3d]\nTM[259200]OT[86400 fischer]\nRE[W+R]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dp]\n(;B[pp]\n(;W[dd]\n(;B[cq]\n(;W[cp]\n(;B[dq]\n(;W[ep]\n(;B[fr]\n(;W[qc]\n(;B[qd]\n(;W[pc]\n(;B[od]\n(;W[nb]\n(;B[qn]\n(;W[mc]\n(;B[cc]\n(;W[dc]\n(;B[cd]\n(;W[ce]\n(;B[be]\n(;W[bf]\n(;B[cf]\n(;W[de]\n(;B[bg]\n(;W[bd]\n(;B[af]\n(;W[bc]\n(;B[ck]\n(;W[or]\n(;B[pr]\n(;W[pq]\n(;B[oq]\n(;W[qq]\n(;B[qr]\n(;W[op]\n(;B[nq]\n(;W[qp]\n(;B[po]\n(;W[nr]\n(;B[rq]\n(;W[mq]\n(;B[np]\n(;W[mo]\n(;B[no]\n(;W[nn]\n(;B[mp]\n(;W[lp]\n(;B[oo]\n(;W[lo]\n(;B[lq]\n(;W[kq]\n(;B[mr]\n(;W[pi]\n(;B[kr]\n(;W[qf]\n(;B[md]\n(;W[ld]\n(;B[nc]\n(;W[lb]\n(;B[le]\n(;W[ke]\n(;B[kd]\n(;W[lc]\n(;B[lf]\n(;W[kf]\n(;B[lg]\n(;W[kg]\n(;B[kh]\n(;W[jh]\n(;B[ji]\n(;W[ih]\n(;B[ki]\n(;W[ii]\n(;B[if]\n(;W[jd]\n(;B[gg]\n(;W[ij]\n(;B[kk]\n(;W[eg]\n(;B[gi]\n(;W[ei]\n(;B[gk]\n(;W[il]\n(;B[hm]\n(;W[ho]\n(;B[im]\n(;W[jl]\n(;B[jm]\n(;W[kl]\n(;B[jp]\n(;W[jo]\n(;B[ko]\n(;W[kp]\n(;B[io]\n(;W[ip]\n(;B[jn]\n(;W[jq]\n(;B[cb]\n(;W[bb]\n(;B[hp]\n(;W[jo]\n(;B[db]\n(;W[eb]\n(;B[jp]\n(;W[iq]\n(;B[go]\n(;W[fq]\n(;B[gq]\n(;W[er]\n(;B[eq]\n(;W[fp]\n(;B[gr]\n(;W[bq]\n(;B[dr]\n(;W[cr]\n(;B[es]\n(;W[bo]\n(;B[lm]\n(;W[ll]\n(;B[ln]\n(;W[mi]\n(;B[mj]\n(;W[ni]\n(;B[ml]\n(;W[mk]\n(;B[nj]\n(;W[nk]\n(;B[oj]\n(;W[lj]\n(;B[li]\n(;W[pk]\n(;B[ok]\n(;W[ol]\n(;B[nl]\n(;W[lk]\n(;B[pl]\n(;W[om]\n(;B[pj]\n(;W[qj]\n(;B[qk]\n(;W[oi]\n(;B[pk]\n(;W[rk]\n(;B[pm]\n(;W[of]\n(;B[ne]\n(;W[oc]\n(;B[jg]\n(;W[mm]\n(;B[kj]\n(;W[qi]\n(;B[mn]\n(;W[rd]\n(;B[re]\n(;W[rc]\n(;B[qe]\n(;W[rf]\n(;B[ik]\n(;W[jk]\n(;B[hk]\n(;W[se]\n(;B[ig]\n(;W[nf]\n(;B[ec]\n(;W[ed]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-08-02T00:00:00+00:00",
          sgf_name: "Sadaharu vs \u627e\u501f\u53e3\u5b89\u9759",
          black_player: "Sadaharu",
          white_player: "\u627e\u501f\u53e3\u5b89\u9759",
          black_rank: "6d",
          white_rank: "3d",
          komi: 6.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999415/h3phshjplpswp9aedb9s.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-07-23]\nPC[OGS: https://online-go.com/game/55569680]\nGN[Friendly Match]\nPB[monroe10]\nPW[gcnaccount]\nBR[11k]\nWR[6k]\nTM[0]OT[20 simple]\nRE[W+65.5]\nSZ[13]\nKM[5.5]\nRU[Japanese]\n;B[kk]\n(;W[dd]\n(;B[kd]\n(;W[dj]\n(;B[gk]\n(;W[lf]\n(;B[lc]\n(;W[jf]\n(;B[he]\n(;W[gc]\n(;B[id]\n(;W[li]\n(;B[hh]\n(;W[cg]\n(;B[mj]\n(;W[lj]\n(;B[lk]\n(;W[mi]\n(;B[kh]\n(;W[lh]\n(;B[kg]\n(;W[kf]\n(;B[lg]\n(;W[ji]\n(;B[ki]\n(;W[kj]\n(;B[jj]\n(;W[mk]\n(;B[jh]\n(;W[jk]\n(;B[ij]\n(;W[ll]\n(;B[ii]\n(;W[mg]\n(;B[kl]\n(;W[jl]\n(;B[km]\n(;W[lm]\n(;B[cc]\n(;W[dc]\n(;B[ck]\n(;W[dk]\n(;B[cd]\n(;W[ce]\n(;B[cj]\n(;W[ci]\n(;B[db]\n(;W[eb]\n(;B[dl]\n(;W[el]\n(;B[be]\n(;W[bf]\n(;B[bi]\n(;W[bh]\n(;B[bj]\n(;W[cl]\n(;B[bl]\n(;W[dm]\n(;B[ak]\n(;W[bd]\n(;B[bc]\n(;W[ae]\n(;B[da]\n(;W[bb]\n(;B[ab]\n(;W[cb]\n(;B[ac]\n(;W[ea]\n(;B[de]\n(;W[df]\n(;B[ee]\n(;W[ef]\n(;B[fe]\n(;W[ff]\n(;B[gf]\n(;W[gg]\n(;B[hg]\n(;W[gh]\n(;B[gi]\n(;W[fi]\n(;B[fj]\n(;W[ei]\n(;B[fl]\n(;W[bm]\n(;B[ai]\n(;W[ib]\n(;B[jb]\n(;W[jc]\n(;B[kb]\n(;W[ic]\n(;B[jd]\n(;W[if]\n(;B[hf]\n(;W[hl]\n(;B[gl]\n(;W[ik]\n(;B[hk]\n(;W[hd]\n(;B[ie]\n(;W[gd]\n(;B[ge]\n(;W[ec]\n(;B[hb]\n(;W[ia]\n(;B[kc]\n(;W[hc]\n(;B[me]\n(;W[le]\n(;B[ld]\n(;W[mf]\n(;B[jg]\n(;W[jm]\n(;B[ig]\n(;W[gm]\n(;B[fm]\n(;W[hm]\n(;B[ek]\n(;W[ej]\n(;B[fk]\n(;W[em]\n(;B[ah]\n(;W[ag]\n(;B[al]\n(;W[dl]\n(;B[dh]\n(;W[ch]\n(;B[fg]\n(;W[fh]\n(;B[eg]\n(;W[di]\n(;B[dg]\n(;W[eh]\n(;B[am]\n(;W[cm]\n(;B[md]\n(;W[ja]\n(;B[ka]\n(;W[hj]\n(;B[je]\n(;W[mh]\n(;B[hi]\n(;W[gj]\n(;B[]\n(;W[fd]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-07-23T00:00:00+00:00",
          sgf_name: "monroe10 vs gcnaccount",
          black_player: "monroe10",
          white_player: "gcnaccount",
          black_rank: "11k",
          white_rank: "6k",
          komi: 5.5,
          result: "W+65.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999424/oobxfupwgi8skodc1c2m.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-07-12]\nPC[OGS: https://online-go.com/game/55276885]\nGN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]\nPB[maksatmerzoanov]\nPW[Eraschenkov]\nBR[19k]\nWR[12k]\nTM[600]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[0.5]\nRU[Japanese]\nHA[7]\nAB[dj][pj][jj][dd][pp][pd][dp]\n;W[nc]\n(;B[nd]\n(;W[oc]\n(;B[mc]\n(;W[md]\n(;B[mb]\n(;W[pc]\n(;B[kd]\n(;W[me]\n(;B[od]\n(;W[qd]\n(;B[qe]\n(;W[rd]\n(;B[nb]\n(;W[ob]\n(;B[oa]\n(;W[qc]\n(;B[pa]\n(;W[pe]\n(;B[oe]\n(;W[pf]\n(;B[of]\n(;W[pg]\n(;B[mf]\n(;W[fq]\n(;B[ne]\n(;W[dr]\n(;B[le]\n(;W[cq]\n(;B[dq]\n(;W[eq]\n(;B[cp]\n(;W[bq]\n(;B[bp]\n(;W[nq]\n(;B[aq]\n(;W[br]\n(;B[ep]\n(;W[fp]\n(;B[eo]\n(;W[pq]\n(;B[oq]\n(;W[op]\n(;B[or]\n(;W[po]\n(;B[qp]\n(;W[qq]\n(;B[oo]\n(;W[np]\n(;B[qo]\n(;W[pn]\n(;B[rq]\n(;W[qr]\n(;B[rr]\n(;W[nn]\n(;B[on]\n(;W[om]\n(;B[pr]\n(;W[fc]\n(;B[qs]\n(;W[cc]\n(;B[qn]\n(;W[pm]\n(;B[qm]\n(;W[dc]\n(;B[ed]\n(;W[ec]\n(;B[fd]\n(;W[gd]\n(;B[ge]\n(;W[hd]\n(;B[he]\n(;W[jc]\n(;B[jd]\n(;W[ic]\n(;B[id]\n(;W[gn]\n(;B[kc]\n(;W[ml]\n(;B[jb]\n(;W[ib]\n(;B[ja]\n(;W[hc]\n(;B[ia]\n(;W[mj]\n(;B[gb]\n(;W[gc]\n(;B[hb]\n(;W[fb]\n(;B[fa]\n(;W[ha]\n(;B[ga]\n(;W[ea]\n(;B[ha]\n(;W[kb]\n(;B[lb]\n(;W[ka]\n(;B[ld]\n(;W[ce]\n(;B[cd]\n(;W[bd]\n(;B[de]\n(;W[cf]\n(;B[fe]\n(;W[dg]\n(;B[df]\n(;W[dh]\n(;B[rg]\n(;W[rf]\n(;B[qf]\n(;W[qg]\n(;B[ri]\n(;W[rh]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-07-12T00:00:00+00:00",
          sgf_name: "maksatmerzoanov vs Eraschenkov",
          black_player: "maksatmerzoanov",
          white_player: "Eraschenkov",
          black_rank: "19k",
          white_rank: "12k",
          komi: 0.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999435/urvpw7ebhnaeg8jnaxyn.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2023-06-27]\nPC[OGS: https://online-go.com/game/54863242]\nGN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]\nPB[JayApril]\nPW[MaximKutiansky]\nBR[9k]\nWR[7k]\nTM[259200]OT[86400 fischer]\nRE[B+4.5]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[pd]\n(;W[dp]\n(;B[qp]\n(;W[dc]\n(;B[cn]\n(;W[fq]\n(;B[cp]\n(;W[cq]\n(;B[bq]\n(;W[co]\n(;B[bp]\n(;W[do]\n(;B[bo]\n(;W[cr]\n(;B[cl]\n(;W[op]\n(;B[mq]\n(;W[jq]\n(;B[oq]\n(;W[cj]\n(;B[ce]\n(;W[cg]\n(;B[ee]\n(;W[fc]\n(;B[bc]\n(;W[eg]\n(;B[ff]\n(;W[fg]\n(;B[he]\n(;W[hd]\n(;B[gg]\n(;W[gh]\n(;B[hg]\n(;W[id]\n(;B[gd]\n(;W[gc]\n(;B[pj]\n(;W[nc]\n(;B[oc]\n(;W[nd]\n(;B[qg]\n(;W[ie]\n(;B[ge]\n(;W[hh]\n(;B[lo]\n(;W[pq]\n(;B[pp]\n(;W[nq]\n(;B[or]\n(;W[nr]\n(;B[np]\n(;W[pr]\n(;B[oo]\n(;W[os]\n(;B[op]\n(;W[mr]\n(;B[lq]\n(;W[lr]\n(;B[ig]\n(;W[jg]\n(;B[ih]\n(;W[hj]\n(;B[of]\n(;W[pi]\n(;B[qi]\n(;W[oi]\n(;B[oj]\n(;W[nj]\n(;B[nk]\n(;W[mj]\n(;B[mk]\n(;W[pf]\n(;B[pg]\n(;W[oe]\n(;B[pe]\n(;W[nf]\n(;B[og]\n(;W[kn]\n(;B[ni]\n(;W[nh]\n(;B[mi]\n(;W[lj]\n(;B[oh]\n(;W[mh]\n(;B[li]\n(;W[ki]\n(;B[lh]\n(;W[lg]\n(;B[kh]\n(;W[jh]\n(;B[ph]\n(;W[kg]\n(;B[oi]\n(;W[kj]\n(;B[ed]\n(;W[el]\n(;B[dk]\n(;W[ek]\n(;B[dj]\n(;W[ci]\n(;B[dh]\n(;W[di]\n(;B[kl]\n(;W[jl]\n(;B[cb]\n(;W[bl]\n(;B[bm]\n(;W[ck]\n(;B[dl]\n(;W[ej]\n(;B[ec]\n(;W[eb]\n(;B[db]\n(;W[ll]\n(;B[lk]\n(;W[kk]\n(;B[ml]\n(;W[lm]\n(;B[mm]\n(;W[ko]\n(;B[ln]\n(;W[km]\n(;B[nb]\n(;W[mb]\n(;B[ob]\n(;W[lc]\n(;B[od]\n(;W[ne]\n(;B[ng]\n(;W[mg]\n(;B[kr]\n(;W[kq]\n(;B[qr]\n(;W[jr]\n(;B[ns]\n(;W[ms]\n(;B[qq]\n(;W[ks]\n(;B[ps]\n(;W[dm]\n(;B[cm]\n(;W[bk]\n(;B[dn]\n(;W[en]\n(;B[em]\n(;W[fm]\n(;B[br]\n(;W[am]\n(;B[an]\n(;W[al]\n(;B[dg]\n(;W[df]\n(;B[cf]\n(;W[ch]\n(;B[ef]\n(;W[eh]\n(;B[dq]\n(;W[dm]\n(;B[bn]\n(;W[dr]\n(;B[bs]\n(;W[bg]\n(;B[fb]\n(;W[gb]\n(;B[ea]\n(;W[ad]\n(;B[bd]\n(;W[ae]\n(;B[ii]\n(;W[ij]\n(;B[be]\n(;W[bf]\n(;B[ac]\n(;W[af]\n(;B[kp]\n(;W[jp]\n(;B[lp]\n(;W[ga]\n(;B[if]\n(;W[jf]\n(;B[hi]\n(;W[gi]\n(;B[er]\n(;W[eq]\n(;B[ds]\n(;W[fr]\n(;B[es]\n(;W[hc]\n(;B[de]\n(;W[dg]\n(;B[cs]\n(;W[dq]\n(;B[em]\n(;W[fn]\n(;B[ns]\n(;W[na]\n(;B[oa]\n(;W[ma]\n(;B[os]\n(;W[fa]\n(;B[eb]\n(;W[ji]\n(;B[fd]\n(;W[fs]\n(;B[dm]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2023-06-27T00:00:00+00:00",
          sgf_name: "JayApril vs MaximKutiansky",
          black_player: "JayApril",
          white_player: "MaximKutiansky",
          black_rank: "9k",
          white_rank: "7k",
          komi: 6.5,
          result: "B+4.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999450/qb8zxio4ou9ygpmivcih.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2022-11-20]\nPC[OGS: https://online-go.com/game/48760474]\nGN[DielesAlder vs. Grok Grock]\nPB[DielesAlder]\nPW[Grok Grock]\nBR[14k]\nWR[12k]\nTM[600]OT[4x30 byo-yomi]\nRE[B+16.5]\nSZ[13]\nKM[0.5]\nRU[Japanese]\nAB[jj]\n;W[cc]\n(;B[kd]\n(;W[ck]\n(;B[lk]\n(;W[jc]\n(;B[kc]\n(;W[jb]\n(;B[kb]\n(;W[jd]\n(;B[ja]\n(;W[je]\n(;B[ke]\n(;W[gc]\n(;B[ib]\n(;W[ic]\n(;B[hb]\n(;W[hc]\n(;B[gb]\n(;W[fb]\n(;B[ga]\n(;W[fa]\n(;B[fc]\n(;W[ec]\n(;B[fd]\n(;W[fe]\n(;B[ed]\n(;W[dc]\n(;B[eb]\n(;W[kf]\n(;B[ea]\n(;W[dd]\n(;B[ee]\n(;W[de]\n(;B[ff]\n(;W[ef]\n(;B[ge]\n(;W[eg]\n(;B[jf]\n(;W[hg]\n(;B[if]\n(;W[hf]\n(;B[he]\n(;W[ie]\n(;B[kg]\n(;W[lf]\n(;B[jg]\n(;W[lg]\n(;B[ki]\n(;W[kh]\n(;B[jh]\n(;W[lh]\n(;B[ii]\n(;W[ih]\n(;B[ji]\n(;W[gh]\n(;B[gf]\n(;W[gg]\n(;B[fb]\n(;W[fg]\n(;B[gd]\n(;W[le]\n(;B[ld]\n(;W[li]\n(;B[lj]\n(;W[md]\n(;B[mc]\n(;W[mb]\n(;B[me]\n(;W[mf]\n(;B[md]\n(;W[lb]\n(;B[ka]\n(;W[la]\n(;B[ia]\n(;W[hi]\n(;B[hj]\n(;W[gj]\n(;B[hk]\n(;W[gk]\n(;B[hl]\n(;W[gl]\n(;B[db]\n(;W[cb]\n(;B[ca]\n(;W[ba]\n(;B[da]\n(;W[ab]\n(;B[cg]\n(;W[df]\n(;B[ci]\n(;W[ch]\n(;B[dh]\n(;W[bh]\n(;B[bg]\n(;W[bi]\n(;B[bj]\n(;W[cj]\n(;B[di]\n(;W[bk]\n(;B[ah]\n(;W[aj]\n(;B[be]\n(;W[cf]\n(;B[bf]\n(;W[bd]\n(;B[dg]\n(;W[eh]\n(;B[dj]\n(;W[dk]\n(;B[ek]\n(;W[el]\n(;B[ej]\n(;W[fi]\n(;B[ai]\n(;W[bj]\n(;B[ag]\n(;W[fj]\n(;B[gm]\n(;W[fm]\n(;B[hm]\n(;W[fl]\n(;B[ig]\n(;W[hh]\n(;B[]\n(;W[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2022-11-20T00:00:00+00:00",
          sgf_name: "DielesAlder vs Grok Grock",
          black_player: "DielesAlder",
          white_player: "Grok Grock",
          black_rank: "14k",
          white_rank: "12k",
          komi: 0.5,
          result: "B+16.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999513/qojho1waxadxtzmwo9kg.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2022-11-25]\nPC[OGS: https://online-go.com/game/48883893]\nGN[\u53cb\u8c0a\u8d5b]\nPB[Thomas2015-1]\nPW[DylanZhang]\nBR[3k]\nWR[?]\nTM[3600]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[19]\nKM[7.5]\nRU[AGA]\n;B[pd]\n(;W[cp]\n(;B[pp]\n(;W[dc]\n(;B[ce]\n(;W[cd]\n(;B[de]\n(;W[fc]\n(;B[ci]\n(;W[nq]\n(;B[lq]\n(;W[qq]\n(;B[pq]\n(;W[qp]\n(;B[po]\n(;W[pr]\n(;B[or]\n(;W[qr]\n(;B[nr]\n(;W[qn]\n(;B[ep]\n(;W[eq]\n(;B[fq]\n(;W[dq]\n(;B[fp]\n(;W[cn]\n(;B[jp]\n(;W[pn]\n(;B[on]\n(;W[om]\n(;B[nn]\n(;W[pl]\n(;B[qf]\n(;W[kc]\n(;B[hc]\n(;W[nc]\n(;B[oc]\n(;W[id]\n(;B[hd]\n(;W[ie]\n(;B[fd]\n(;W[he]\n(;B[ge]\n(;W[gc]\n(;B[gd]\n(;W[qi]\n(;B[ld]\n(;W[lc]\n(;B[nd]\n(;W[md]\n(;B[me]\n(;W[mc]\n(;B[ne]\n(;W[ml]\n(;B[pj]\n(;W[qj]\n(;B[kd]\n(;W[ic]\n(;B[ib]\n(;W[jb]\n(;B[gb]\n(;W[fb]\n(;B[jd]\n(;W[jc]\n(;B[lf]\n(;W[hg]\n(;B[ki]\n(;W[jg]\n(;B[kg]\n(;W[jh]\n(;B[ji]\n(;W[ii]\n(;B[gg]\n(;W[gh]\n(;B[fg]\n(;W[ij]\n(;B[lj]\n(;W[pi]\n(;B[if]\n(;W[jf]\n(;B[hf]\n(;W[ig]\n(;B[gf]\n(;W[kf]\n(;B[le]\n(;W[je]\n(;B[hi]\n(;W[gj]\n(;B[gi]\n(;W[fi]\n(;B[dd]\n(;W[bd]\n(;B[cc]\n(;W[cb]\n(;B[ec]\n(;W[db]\n(;B[eb]\n(;W[be]\n(;B[bf]\n(;W[ck]\n(;B[da]\n(;W[bc]\n(;B[qo]\n(;W[ro]\n(;B[np]\n(;W[hn]\n(;B[ho]\n(;W[in]\n(;B[kn]\n(;W[jm]\n(;B[en]\n(;W[kh]\n(;B[lh]\n(;W[lg]\n(;B[mh]\n(;W[mg]\n(;B[nh]\n(;W[ng]\n(;B[oh]\n(;W[og]\n(;B[ph]\n(;W[pg]\n(;B[qh]\n(;W[qg]\n(;B[rg]\n(;W[rf]\n(;B[rh]\n(;W[qe]\n(;B[pf]\n(;W[pe]\n(;B[of]\n(;W[oe]\n(;B[nf]\n(;W[od]\n(;B[qd]\n(;W[re]\n(;B[pc]\n(;W[rd]\n(;B[rc]\n(;W[ke]\n(;B[sd]\n(;W[mf]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2022-11-25T00:00:00+00:00",
          sgf_name: "Thomas2015-1 vs DylanZhang",
          black_player: "Thomas2015-1",
          white_player: "DylanZhang",
          black_rank: "3k",
          white_rank: "?",
          komi: 7.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999457/kimi3jsm3awyqvq8izgm.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2022-11-24]\nPC[OGS: https://online-go.com/game/48836629]\nGN[grebal vs. Grok Grock]\nPB[grebal]\nPW[Grok Grock]\nBR[13k]\nWR[12k]\nTM[600]OT[4x30 byo-yomi]\nRE[B+R]\nSZ[13]\nKM[0.5]\nRU[Japanese]\nAB[kj]\n;W[cc]\n(;B[jd]\n(;W[cj]\n(;B[fk]\n(;W[kc]\n(;B[jc]\n(;W[kb]\n(;B[kd]\n(;W[ld]\n(;B[le]\n(;W[md]\n(;B[lb]\n(;W[jb]\n(;B[ib]\n(;W[ia]\n(;B[hb]\n(;W[ja]\n(;B[lc]\n(;W[ha]\n(;B[ga]\n))))))))))))))))))))",
          game_date: "2022-11-24T00:00:00+00:00",
          sgf_name: "grebal vs Grok Grock",
          black_player: "grebal",
          white_player: "Grok Grock",
          black_rank: "13k",
          white_rank: "12k",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999466/wzpa83ryikakd9a7pvno.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2022-11-23]\nPC[OGS: https://online-go.com/game/48829460]\nGN[MattPs vs. Grok Grock]\nPB[MattPs]\nPW[Grok Grock]\nBR[13k]\nWR[12k]\nTM[600]OT[4x30 byo-yomi]\nRE[W+34.5]\nSZ[13]\nKM[0.5]\nRU[Japanese]\nAB[jd]\n;W[ck]\n(;B[jj]\n(;W[dc]\n(;B[dl]\n(;W[cl]\n(;B[fk]\n(;W[kc]\n(;B[kd]\n(;W[ld]\n(;B[le]\n(;W[md]\n(;B[me]\n(;W[lb]\n(;B[jg]\n(;W[jf]\n(;B[kf]\n(;W[je]\n(;B[if]\n(;W[ie]\n(;B[ig]\n(;W[id]\n(;B[ke]\n(;W[jc]\n(;B[he]\n(;W[hd]\n(;B[hj]\n(;W[kj]\n(;B[ki]\n(;W[li]\n(;B[kk]\n(;W[kg]\n(;B[lg]\n(;W[kh]\n(;B[lj]\n(;W[lh]\n(;B[mh]\n(;W[mf]\n(;B[jh]\n(;W[lf]\n(;B[ff]\n(;W[ge]\n(;B[gf]\n(;W[hf]\n(;B[hg]\n(;W[he]\n(;B[fe]\n(;W[ej]\n(;B[fd]\n(;W[fc]\n(;B[eh]\n(;W[fh]\n(;B[fi]\n(;W[ei]\n(;B[fg]\n(;W[dh]\n(;B[gh]\n(;W[eg]\n(;B[fh]\n(;W[ef]\n(;B[ee]\n(;W[de]\n(;B[dd]\n(;W[cd]\n(;B[df]\n(;W[ed]\n(;B[dg]\n(;W[gc]\n(;B[ch]\n(;W[di]\n(;B[ci]\n(;W[dk]\n(;B[el]\n(;W[ek]\n(;B[cg]\n(;W[bj]\n(;B[cj]\n(;W[dm]\n(;B[em]\n(;W[fl]\n(;B[cm]\n(;W[fm]\n(;B[fj]\n(;W[gl]\n(;B[hl]\n(;W[gk]\n(;B[gj]\n(;W[hk]\n(;B[ik]\n(;W[dm]\n(;B[im]\n(;W[bi]\n(;B[ce]\n(;W[dd]\n(;B[bh]\n(;W[be]\n(;B[cf]\n(;W[ai]\n(;B[ah]\n(;W[bk]\n(;B[bg]\n(;W[ae]\n(;B[hm]\n(;W[gd]\n(;B[gm]\n(;W[bm]\n(;B[mi]\n(;W[mg]\n(;B[mj]\n(;W[af]\n(;B[]\n(;W[dj]\n(;B[]\n(;W[ag]\n(;B[eg]\n(;W[bd]\n(;B[]\n(;W[bf]\n(;B[]\n(;W[ii]\n(;B[]\n(;W[ij]\n(;B[jk]\n(;W[ji]\n(;B[kj]\n(;W[hh]\n(;B[hi]\n(;W[jm]\n(;B[il]\n(;W[km]\n(;B[ih]\n(;W[ll]\n(;B[]\n(;W[lk]\n(;B[mk]\n(;W[]\n(;B[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2022-11-23T00:00:00+00:00",
          sgf_name: "MattPs vs Grok Grock",
          black_player: "MattPs",
          white_player: "Grok Grock",
          black_rank: "13k",
          white_rank: "12k",
          komi: 0.5,
          result: "W+34.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999473/stk5ngjkrxgzgmmu3usd.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2022-11-23]\nPC[OGS: https://online-go.com/game/48826633]\nGN[Grok Grock vs. silly boy]\nPB[Grok Grock]\nPW[silly boy]\nBR[11k]\nWR[11k]\nTM[600]OT[4x30 byo-yomi]\nRE[W+39.5]\nSZ[13]\nKM[5.5]\nRU[Japanese]\n;B[kk]\n(;W[dd]\n(;B[dk]\n(;W[jd]\n(;B[kc]\n(;W[kd]\n(;B[lc]\n(;W[jc]\n(;B[jb]\n(;W[ld]\n(;B[md]\n(;W[mc]\n(;B[mb]\n(;W[me]\n(;B[mc]\n(;W[lf]\n(;B[ib]\n(;W[hc]\n(;B[ic]\n(;W[id]\n(;B[hb]\n(;W[gc]\n(;B[gb]\n(;W[fb]\n(;B[bj]\n(;W[fd]\n(;B[ce]\n(;W[cd]\n(;B[bd]\n(;W[de]\n(;B[cf]\n(;W[df]\n(;B[bc]\n(;W[cg]\n(;B[bg]\n(;W[ch]\n(;B[bh]\n(;W[ci]\n(;B[bi]\n(;W[cj]\n(;B[ck]\n(;W[dj]\n(;B[ej]\n(;W[ei]\n(;B[fj]\n(;W[fi]\n(;B[he]\n(;W[gj]\n(;B[gk]\n(;W[hj]\n(;B[hk]\n(;W[ik]\n(;B[hd]\n(;W[if]\n(;B[ie]\n(;W[jf]\n(;B[je]\n(;W[ke]\n(;B[gd]\n(;W[fc]\n(;B[gh]\n(;W[gi]\n(;B[hh]\n(;W[hf]\n(;B[fh]\n(;W[ii]\n(;B[ff]\n(;W[ge]\n(;B[ih]\n(;W[jh]\n(;B[ji]\n(;W[jj]\n(;B[ki]\n(;W[kj]\n(;B[jk]\n(;W[il]\n(;B[kh]\n(;W[jg]\n(;B[lj]\n(;W[ij]\n(;B[fl]\n(;W[lg]\n(;B[lh]\n(;W[mh]\n(;B[mi]\n(;W[kg]\n(;B[mg]\n(;W[mf]\n(;B[lk]\n(;W[kl]\n(;B[jl]\n(;W[ll]\n(;B[jm]\n(;W[hl]\n(;B[gl]\n(;W[gm]\n(;B[fm]\n(;W[ek]\n(;B[fk]\n(;W[el]\n(;B[hm]\n(;W[im]\n(;B[eh]\n(;W[em]\n(;B[dh]\n(;W[mh]\n(;B[di]\n(;W[gm]\n(;B[mg]\n(;W[mk]\n(;B[mj]\n(;W[mh]\n(;B[ml]\n(;W[li]\n(;B[lm]\n(;W[eg]\n(;B[cc]\n(;W[dc]\n(;B[db]\n(;W[eb]\n(;B[da]\n(;W[ea]\n(;B[bb]\n(;W[cl]\n(;B[bl]\n(;W[dl]\n(;B[bk]\n(;W[bm]\n(;B[al]\n(;W[cm]\n(;B[ga]\n(;W[ia]\n(;B[ka]\n(;W[fa]\n(;B[dg]\n(;W[ej]\n(;B[ef]\n(;W[gg]\n(;B[fg]\n(;W[gf]\n(;B[ee]\n(;W[ed]\n(;B[am]\n(;W[ba]\n(;B[cb]\n(;W[ab]\n(;B[be]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2022-11-23T00:00:00+00:00",
          sgf_name: "Grok Grock vs silly boy",
          black_player: "Grok Grock",
          white_player: "silly boy",
          black_rank: "11k",
          white_rank: "11k",
          komi: 5.5,
          result: "W+39.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999483/ooenzse1blywb9liceg0.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2022-11-21]\nPC[OGS: https://online-go.com/game/48777408]\nGN[duncan.bordin vs. Grok Grock]\nPB[duncan.bordin]\nPW[Grok Grock]\nBR[15k]\nWR[13k]\nTM[600]OT[4x30 byo-yomi]\nRE[B+R]\nSZ[13]\nKM[0.5]\nRU[Japanese]\nAB[jj]\n;W[dd]\n(;B[dj]\n(;W[kc]\n(;B[ke]\n(;W[ci]\n(;B[cj]\n(;W[di]\n(;B[ei]\n(;W[eh]\n(;B[gi]\n(;W[fi]\n(;B[ej]\n(;W[gh]\n(;B[fj]\n(;W[fh]\n(;B[jg]\n(;W[kk]\n(;B[jk]\n(;W[jl]\n(;B[il]\n(;W[jm]\n(;B[im]\n(;W[ll]\n(;B[km]\n(;W[kl]\n(;B[kj]\n(;W[lj]\n(;B[li]\n(;W[mj]\n(;B[mi]\n(;W[ml]\n(;B[jh]\n(;W[hi]\n(;B[hj]\n(;W[gj]\n(;B[gk]\n(;W[hk]\n(;B[gi]\n(;W[ik]\n(;B[hl]\n(;W[gj]\n(;B[ij]\n(;W[ii]\n(;B[ji]\n(;W[bj]\n(;B[jc]\n(;W[jb]\n(;B[kd]\n(;W[ic]\n(;B[jd]\n(;W[lc]\n(;B[ld]\n(;W[id]\n(;B[cc]\n(;W[dc]\n(;B[cd]\n(;W[ce]\n(;B[cb]\n(;W[db]\n(;B[da]\n(;W[ea]\n(;B[ca]\n(;W[fb]\n(;B[hf]\n(;W[ig]\n(;B[if]\n(;W[ge]\n(;B[ih]\n(;W[hg]\n(;B[gf]\n(;W[gg]\n(;B[ff]\n(;W[ef]\n(;B[fe]\n(;W[ee]\n(;B[fd]\n(;W[gc]\n(;B[gd]\n(;W[he]\n(;B[hd]\n(;W[ie]\n(;B[hc]\n(;W[ib]\n(;B[hb]\n(;W[ha]\n(;B[ga]\n(;W[je]\n(;B[jf]\n(;W[gb]\n(;B[ia]\n(;W[ja]\n(;B[ha]\n(;W[lb]\n(;B[ka]\n(;W[kb]\n(;B[mc]\n(;W[la]\n(;B[mb]\n(;W[kf]\n(;B[lf]\n(;W[kh]\n(;B[kg]\n(;W[lh]\n(;B[ki]\n(;W[ed]\n(;B[bd]\n(;W[be]\n(;B[ad]\n(;W[ab]\n(;B[bb]\n(;W[aa]\n(;B[ac]\n(;W[ae]\n(;B[bk]\n(;W[ck]\n(;B[bi]\n(;W[bh]\n(;B[aj]\n(;W[ch]\n(;B[ai]\n(;W[gi]\n(;B[fk]\n(;W[ah]\n(;B[]\n(;W[cl]\n(;B[dl]\n(;W[dk]\n(;B[el]\n(;W[ma]\n(;B[md]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2022-11-21T00:00:00+00:00",
          sgf_name: "duncan.bordin vs Grok Grock",
          black_player: "duncan.bordin",
          white_player: "Grok Grock",
          black_rank: "15k",
          white_rank: "13k",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999498/xealfb28idygpkfx97rf.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2022-03-17]\nPC[OGS: https://online-go.com/game/42076483]\nGN[Friendly Match]\nPB[olympia.anacodam]\nPW[misakikou]\nBR[13k]\nWR[11k]\nTM[2419200]OT[604800 fischer]\nRE[W+T]\nSZ[19]\nKM[6.5]\nRU[Japanese]\n;B[dd]\n(;W[pp]\n(;B[oo]\n(;W[op]\n(;B[np]\n(;W[po]\n(;B[on]\n(;W[qm]\n(;B[dp]\n(;W[pd]\n(;B[oc]\n(;W[pc]\n(;B[jr]\n(;W[cf]\n(;B[df]\n(;W[cg]\n(;B[ce]\n(;W[cj]\n(;B[dj]\n(;W[di]\n(;B[ei]\n(;W[dh]\n(;B[eh]\n(;W[jc]\n(;B[lc]\n(;W[kd]\n(;B[le]\n(;W[gc]\n(;B[kb]\n(;W[ld]\n(;B[md]\n(;W[ke]\n(;B[lf]\n(;W[kf]\n(;B[kh]\n(;W[kg]\n(;B[lg]\n(;W[hg]\n(;B[ii]\n(;W[jl]\n(;B[gl]\n(;W[jo]\n(;B[ll]\n(;W[go]\n(;B[fn]\n(;W[hn]\n(;B[fp]\n(;W[gp]\n(;B[gq]\n(;W[hq]\n(;B[gr]\n(;W[iq]\n(;B[ir]\n(;W[km]\n(;B[kl]\n(;W[jm]\n(;B[jp]\n(;W[ip]\n(;B[gn]\n(;W[hm]\n(;B[jk]\n(;W[ik]\n(;B[hl]\n(;W[il]\n(;B[ij]\n(;W[hk]\n(;B[gk]\n(;W[hj]\n(;B[hi]\n(;W[gm]\n(;B[fm]\n(;W[fo]\n(;B[eo]\n(;W[mp]\n(;B[nq]\n(;W[gj]\n(;B[fj]\n(;W[pj]\n(;B[pf]\n(;W[qf]\n(;B[qg]\n(;W[qe]\n(;B[lo]\n(;W[kp]\n(;B[jq]\n(;W[ko]\n(;B[lp]\n(;W[kq]\n(;B[lq]\n(;W[kr]\n(;B[hr]\n(;W[io]\n(;B[gi]\n(;W[dk]\n(;B[cl]\n(;W[ck]\n(;B[ek]\n(;W[dl]\n(;B[cm]\n(;W[fl]\n(;B[fk]\n(;W[el]\n(;B[en]\n(;W[ej]\n(;B[fi]\n(;W[cq]\n(;B[bp]\n(;W[fq]\n(;B[eq]\n(;W[ep]\n(;B[dq]\n(;W[fr]\n(;B[fp]\n(;W[dg]\n(;B[ep]\n(;W[ef]\n(;B[eg]\n(;W[de]\n(;B[be]\n(;W[ed]\n(;B[dc]\n(;W[ec]\n(;B[eb]\n(;W[fb]\n(;B[da]\n(;W[qi]\n(;B[ok]\n(;W[oj]\n(;B[nj]\n(;W[ni]\n(;B[mi]\n(;W[nk]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2022-03-17T00:00:00+00:00",
          sgf_name: "olympia.anacodam vs misakikou",
          black_player: "olympia.anacodam",
          white_player: "misakikou",
          black_rank: "13k",
          white_rank: "11k",
          komi: 6.5,
          result: "W+T",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999527/ti6dp8qyaxaz9kgv4ot5.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2022-01-29]\nPC[OGS: https://online-go.com/game/40797080]\nGN[AlessandroFatucci_ vs. 2CupsOfAdorable]\nPB[AlessandroFatucci_]\nPW[2CupsOfAdorable]\nBR[12k]\nWR[12k]\nTM[300]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[9]\nKM[5.5]\nRU[Japanese]\n;B[ee]\n(;W[dg]\n(;B[ec]\n(;W[ce]\n(;B[fg]\n(;W[cc]\n(;B[db]\n(;W[fh]\n(;B[eg]\n(;W[gg]\n(;B[eh]\n(;W[fi]\n(;B[ei]\n(;W[hh]\n(;B[df]\n(;W[cg]\n(;B[cf]\n(;W[bf]\n(;B[gf]\n(;W[hf]\n(;B[bb]\n(;W[ge]\n(;B[ff]\n(;W[gd]\n(;B[gc]\n(;W[hc]\n(;B[bc]\n(;W[gb]\n(;B[bd]\n(;W[fc]\n(;B[be]\n(;W[af]\n(;B[ae]\n(;W[bh]\n(;B[ci]\n(;W[dh]\n(;B[di]\n(;W[bi]\n(;B[ch]\n(;W[bg]\n(;B[ah]\n(;W[de]\n(;B[ef]\n(;W[ed]\n))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2022-01-29T00:00:00+00:00",
          sgf_name: "AlessandroFatucci_ vs 2CupsOfAdorable",
          black_player: "AlessandroFatucci_",
          white_player: "2CupsOfAdorable",
          black_rank: "12k",
          white_rank: "12k",
          komi: 5.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999537/aewnq1h5bgcgovrlvwjz.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2021-08-15]\nPC[OGS: https://online-go.com/game/36216519]\nGN[AlessandroFatucci_ vs. vxr]\nPB[AlessandroFatucci_]\nPW[vxr]\nBR[12k]\nWR[13k]\nTM[300]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[9]\nKM[5.5]\nRU[Japanese]\n;B[ee]\n(;W[gc]\n(;B[gg]\n(;W[cc]\n(;B[cg]\n(;W[bd]\n(;B[be]\n(;W[ce]\n(;B[bf]\n(;W[cf]\n(;B[df]\n(;W[de]\n(;B[ed]\n(;W[dd]\n(;B[ec]\n(;W[ae]\n(;B[af]\n(;W[bg]\n(;B[ad]\n(;W[ag]\n(;B[gb]\n(;W[dg]\n(;B[ef]\n(;W[ch]\n(;B[eg]\n(;W[eh]\n(;B[fh]\n(;W[fi]\n(;B[gi]\n(;W[ei]\n(;B[gd]\n(;W[hg]\n(;B[hh]\n(;W[hf]\n(;B[cb]\n(;W[db]\n(;B[dc]\n(;W[bb]\n(;B[eb]\n(;W[ca]\n(;B[gf]\n(;W[he]\n(;B[hd]\n(;W[id]\n(;B[ic]\n(;W[ih]\n(;B[ie]\n(;W[hi]\n(;B[ii]\n(;W[ig]\n(;B[ge]\n(;W[hi]\n(;B[di]\n(;W[gh]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2021-08-15T00:00:00+00:00",
          sgf_name: "AlessandroFatucci_ vs vxr",
          black_player: "AlessandroFatucci_",
          white_player: "vxr",
          black_rank: "12k",
          white_rank: "13k",
          komi: 5.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999545/pwfvzbbaam8mpyhbizdi.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2021-06-24]\nPC[OGS: https://online-go.com/game/34776344]\nGN[Partie amicale]\nPB[AlessandroFatucci_]\nPW[Hihiove]\nBR[13k]\nWR[13k]\nTM[0]OT[300 simple]\nRE[B+R]\nSZ[9]\nKM[5.5]\nRU[Japanese]\n;B[ee]\n(;W[ff]\n(;B[ef]\n(;W[fe]\n(;B[fc]\n(;W[fd]\n(;B[ed]\n(;W[ec]\n(;B[dc]\n(;W[eb]\n(;B[fb]\n(;W[db]\n(;B[cc]\n(;W[cb]\n(;B[gd]\n(;W[ge]\n(;B[hd]\n(;W[he]\n(;B[hc]\n(;W[bc]\n(;B[bd]\n(;W[cd]\n(;B[dd]\n(;W[bb]\n(;B[fg]\n)))))))))))))))))))))))))",
          game_date: "2021-06-24T00:00:00+00:00",
          sgf_name: "AlessandroFatucci_ vs Hihiove",
          black_player: "AlessandroFatucci_",
          white_player: "Hihiove",
          black_rank: "13k",
          white_rank: "13k",
          komi: 5.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999556/mexg7psyxiyaritshx63.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2021-06-24]\nPC[OGS: https://online-go.com/game/34776344]\nGN[Partie amicale]\nPB[AlessandroFatucci_]\nPW[Hihiove]\nBR[13k]\nWR[13k]\nTM[0]OT[300 simple]\nRE[B+R]\nSZ[9]\nKM[5.5]\nRU[Japanese]\n;B[ee]\n(;W[ff]\n(;B[ef]\n(;W[fe]\n(;B[fc]\n(;W[fd]\n(;B[ed]\n(;W[ec]\n(;B[dc]\n(;W[eb]\n(;B[fb]\n(;W[db]\n(;B[cc]\n(;W[cb]\n(;B[gd]\n(;W[ge]\n(;B[hd]\n(;W[he]\n(;B[hc]\n(;W[bc]\n(;B[bd]\n(;W[cd]\n(;B[dd]\n(;W[bb]\n(;B[fg]\n)))))))))))))))))))))))))",
          game_date: "2021-06-24T00:00:00+00:00",
          sgf_name: "AlessandroFatucci_ vs Hihiove",
          black_player: "AlessandroFatucci_",
          white_player: "Hihiove",
          black_rank: "13k",
          white_rank: "13k",
          komi: 5.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999583/gqirjhxhkogmoefll4yw.png",
          suspended: true,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-11-27]\nPC[OGS: https://online-go.com/game/28658803]\nGN[Friendly Match]\nPB[meghanapple2]\nPW[AlessandroFatucci_]\nBR[12k]\nWR[13k]\nTM[180]OT[30 fischer]\nRE[W+T]\nSZ[9]\nKM[5.5]\nRU[Japanese]\n;B[ce]\n(;W[ee]\n(;B[ge]\n(;W[ec]\n(;B[ef]\n(;W[ff]\n(;B[eg]\n(;W[gd]\n(;B[de]\n(;W[ed]\n(;B[fe]\n(;W[gf]\n(;B[fd]\n(;W[gc]\n(;B[he]\n(;W[hf]\n(;B[hd]\n(;W[hc]\n(;B[gg]\n(;W[hg]\n(;B[gh]\n(;W[hh]\n(;B[hi]\n(;W[bc]\n(;B[dc]\n(;W[db]\n(;B[cc]\n(;W[cb]\n(;B[fb]\n(;W[fc]\n(;B[eb]\n(;W[id]\n(;B[da]\n(;W[ca]\n(;B[bb]\n(;W[dd]\n(;B[ba]\n(;W[cd]\n(;B[bd]\n(;W[gb]\n(;B[ga]\n(;W[ha]\n(;B[fa]\n(;W[be]\n(;B[ac]\n(;W[cg]\n(;B[bf]\n(;W[cf]\n(;B[ae]\n(;W[dh]\n(;B[bh]\n(;W[bg]\n(;B[ag]\n(;W[eh]\n(;B[fg]\n(;W[df]\n(;B[ch]\n(;W[dg]\n(;B[ei]\n(;W[be]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-11-27T00:00:00+00:00",
          sgf_name: "meghanapple2 vs AlessandroFatucci_",
          black_player: "meghanapple2",
          white_player: "AlessandroFatucci_",
          black_rank: "12k",
          white_rank: "13k",
          komi: 5.5,
          result: "W+T",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999620/bg0jp7nuttdu50w49j6q.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-11-06]\nPC[OGS: https://online-go.com/game/28101359]\nGN[AlessandroFatucci_ vs. davidrobs]\nPB[AlessandroFatucci_]\nPW[davidrobs]\nBR[13k]\nWR[11k]\nTM[300]OT[5x30 byo-yomi]\nRE[B+R]\nSZ[9]\nKM[3.5]\nRU[Japanese]\nAB[ee]\n;W[gc]\n(;B[gg]\n(;W[cc]\n(;B[cd]\n(;W[bd]\n(;B[cg]\n(;W[ge]\n(;B[if]\n(;W[ce]\n(;B[dd]\n(;W[df]\n(;B[ef]\n(;W[dg]\n(;B[cf]\n(;W[de]\n(;B[be]\n(;W[bf]\n(;B[bc]\n(;W[ae]\n(;B[dc]\n(;W[cb]\n(;B[bb]\n(;W[db]\n(;B[eb]\n(;W[ec]\n(;B[ed]\n(;W[dh]\n(;B[fh]\n(;W[eg]\n(;B[fg]\n(;W[ch]\n(;B[gb]\n(;W[fc]\n(;B[fb]\n(;W[ba]\n(;B[da]\n(;W[hb]\n(;B[hd]\n(;W[hc]\n(;B[ha]\n(;W[he]\n(;B[ie]\n(;W[hf]\n(;B[hg]\n))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-11-06T00:00:00+00:00",
          sgf_name: "AlessandroFatucci_ vs davidrobs",
          black_player: "AlessandroFatucci_",
          white_player: "davidrobs",
          black_rank: "13k",
          white_rank: "11k",
          komi: 3.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999631/gqxbrjpkhntkymcxoaqm.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-06-26]\nPC[OGS: https://online-go.com/game/24978029]\nGN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]\nPB[BorisD]\nPW[r7tc]\nBR[6k]\nWR[1d]\nTM[180]OT[3x30 byo-yomi]\nRE[W+R]\nSZ[9]\nKM[5.5]\nRU[Chinese]\n;B[fd]\n(;W[df]\n(;B[de]\n(;W[ce]\n(;B[cf]\n(;W[cg]\n(;B[bf]\n(;W[be]\n(;B[dg]\n(;W[ef]\n(;B[bg]\n(;W[ch]\n(;B[bh]\n(;W[dh]\n(;B[cd]\n(;W[bd]\n(;B[cc]\n(;W[bc]\n(;B[bb]\n(;W[cb]\n(;B[db]\n(;W[dd]\n(;B[ee]\n(;W[dc]\n(;B[eg]\n(;W[ff]\n(;B[eh]\n(;W[fh]\n(;B[di]\n(;W[fg]\n(;B[ci]\n(;W[fe]\n(;B[ed]\n(;W[gd]\n(;B[gc]\n(;W[fc]\n))))))))))))))))))))))))))))))))))))",
          game_date: "2020-06-26T00:00:00+00:00",
          sgf_name: "BorisD vs r7tc",
          black_player: "BorisD",
          white_player: "r7tc",
          black_rank: "6k",
          white_rank: "1d",
          komi: 5.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999690/v4oym8dp0fnem9hqyfj2.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-06-22]\nPC[OGS: https://online-go.com/game/24887622]\nGN[\u0414\u0440\u0443\u0436\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0447]\nPB[hanga]\nPW[BorisD]\nBR[10k]\nWR[6k]\nTM[180]OT[3x30 byo-yomi]\nRE[W+16.5]\nSZ[9]\nKM[5.5]\nRU[Chinese]\n;B[ff]\n(;W[dd]\n(;B[fc]\n(;W[dg]\n(;B[eg]\n(;W[gc]\n(;B[gd]\n(;W[fd]\n(;B[hc]\n(;W[ge]\n(;B[hd]\n(;W[fe]\n(;B[gf]\n(;W[he]\n(;B[hf]\n(;W[ec]\n(;B[gb]\n(;W[dh]\n(;B[eh]\n(;W[fb]\n(;B[ha]\n(;W[if]\n(;B[ig]\n(;W[ie]\n(;B[hh]\n(;W[df]\n(;B[ee]\n(;W[ef]\n(;B[ib]\n(;W[ei]\n(;B[fi]\n(;W[fg]\n(;B[fh]\n(;W[di]\n(;B[id]\n(;W[ed]\n(;B[eb]\n(;W[db]\n(;B[fa]\n(;W[cc]\n(;B[da]\n(;W[ca]\n(;B[ea]\n(;W[gg]\n(;B[hg]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-06-22T00:00:00+00:00",
          sgf_name: "hanga vs BorisD",
          black_player: "hanga",
          white_player: "BorisD",
          black_rank: "10k",
          white_rank: "6k",
          komi: 5.5,
          result: "W+16.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999699/nu2vaskwzkcjqryjta1c.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-06-19]\nPC[OGS: https://online-go.com/game/24813853]\nGN[Blueringedoctopus vs. AlessandroFatucci_]\nPB[Blueringedoctopus]\nPW[AlessandroFatucci_]\nBR[12k]\nWR[12k]\nTM[300]OT[5x30 byo-yomi]\nRE[W+R]\nSZ[9]\nKM[5.5]\nRU[Japanese]\n;B[ee]\n(;W[dd]\n(;B[ed]\n(;W[de]\n(;B[ef]\n(;W[gc]\n(;B[cc]\n(;W[dc]\n(;B[cd]\n(;W[ec]\n(;B[ce]\n(;W[df]\n(;B[cf]\n(;W[dg]\n(;B[eg]\n(;W[cg]\n(;B[bg]\n(;W[eh]\n(;B[fh]\n(;W[ge]\n(;B[dh]\n(;W[ch]\n(;B[ei]\n(;W[gg]\n(;B[bh]\n(;W[cb]\n(;B[fc]\n(;W[fb]\n(;B[fd]\n(;W[gd]\n(;B[eb]\n(;W[db]\n(;B[gf]\n(;W[hf]\n(;B[ff]\n(;W[gh]\n(;B[gi]\n(;W[hi]\n(;B[fi]\n(;W[ih]\n(;B[gb]\n(;W[ea]\n(;B[ga]\n(;W[fa]\n(;B[hc]\n(;W[hb]\n(;B[hd]\n(;W[ha]\n(;B[bb]\n(;W[ba]\n(;B[ab]\n(;W[ci]\n(;B[di]\n(;W[bi]\n(;B[ah]\n(;W[fg]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-06-19T00:00:00+00:00",
          sgf_name: "Blueringedoctopus vs AlessandroFatucci_",
          black_player: "Blueringedoctopus",
          white_player: "AlessandroFatucci_",
          black_rank: "12k",
          white_rank: "12k",
          komi: 5.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999707/tbblndp5p5v5ez6c9hqs.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2020-02-07]\nPC[OGS: https://online-go.com/game/21729075]\nGN[Friendly Match]\nPB[viento]\nPW[gcnaccount]\nBR[8k]\nWR[8k]\nTM[180]OT[1x10 byo-yomi]\nRE[W+9.5]\nSZ[13]\nKM[5.5]\nRU[Japanese]\n;B[kd]\n(;W[ej]\n(;B[cd]\n(;W[ik]\n(;B[cj]\n(;W[dk]\n(;B[ck]\n(;W[ic]\n(;B[kj]\n(;W[kk]\n(;B[jb]\n(;W[jc]\n(;B[kc]\n(;W[ib]\n(;B[kb]\n(;W[ec]\n(;B[cb]\n(;W[ee]\n(;B[df]\n(;W[ie]\n(;B[jf]\n(;W[je]\n(;B[ke]\n(;W[if]\n(;B[jg]\n(;W[ig]\n(;B[jh]\n(;W[ih]\n(;B[ii]\n(;W[ji]\n(;B[jj]\n(;W[ki]\n(;B[kh]\n(;W[li]\n(;B[lj]\n(;W[lh]\n(;B[kf]\n(;W[ij]\n(;B[hi]\n(;W[lk]\n(;B[mi]\n(;W[jk]\n(;B[dj]\n(;W[ek]\n(;B[ei]\n(;W[fi]\n(;B[gh]\n(;W[fh]\n(;B[gg]\n(;W[fg]\n(;B[dh]\n(;W[gf]\n(;B[ef]\n(;W[ff]\n(;B[de]\n(;W[ed]\n(;B[ea]\n(;W[ga]\n(;B[fb]\n(;W[eb]\n(;B[fa]\n(;W[gc]\n(;B[gb]\n(;W[ha]\n(;B[db]\n(;W[fc]\n(;B[da]\n(;W[hb]\n(;B[dm]\n(;W[fl]\n(;B[dl]\n(;W[lg]\n(;B[lf]\n(;W[eh]\n(;B[di]\n(;W[fm]\n(;B[dc]\n(;W[ja]\n(;B[ka]\n(;W[mj]\n(;B[mg]\n(;W[mh]\n(;B[mf]\n(;W[el]\n(;B[dd]\n(;W[eg]\n(;B[dg]\n(;W[]\n(;B[]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2020-02-07T00:00:00+00:00",
          sgf_name: "viento vs gcnaccount",
          black_player: "viento",
          white_player: "gcnaccount",
          black_rank: "8k",
          white_rank: "8k",
          komi: 5.5,
          result: "W+9.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999714/fkzqnkj414vhe41bn9nv.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2019-04-23]\nPC[OGS: https://online-go.com/game/17548906]\nGN[Friendly Match]\nPB[JosekiJungle]\nPW[gcnaccount]\nBR[7k]\nWR[7k]\nTM[360]OT[5x20 byo-yomi]\nRE[B+R]\nSZ[13]\nKM[5.5]\nRU[Japanese]\n;B[jd]\n(;W[ci]\n(;B[jk]\n(;W[dc]\n(;B[ck]\n(;W[ek]\n(;B[dj]\n(;W[hk]\n(;B[ji]\n(;W[hc]\n(;B[cg]\n(;W[di]\n(;B[ej]\n(;W[fj]\n(;B[ei]\n(;W[dh]\n(;B[dg]\n(;W[eh]\n(;B[fi]\n(;W[eg]\n(;B[cd]\n(;W[cc]\n(;B[dd]\n(;W[bd]\n(;B[be]\n(;W[bc]\n(;B[ef]\n(;W[ff]\n(;B[ee]\n(;W[fe]\n(;B[fd]\n(;W[ec]\n(;B[ed]\n(;W[gd]\n(;B[fc]\n(;W[fb]\n(;B[gb]\n(;W[gc]\n(;B[eb]\n(;W[hb]\n(;B[fa]\n(;W[ce]\n(;B[cf]\n(;W[bf]\n(;B[ae]\n(;W[bg]\n(;B[de]\n(;W[gi]\n(;B[fh]\n(;W[gh]\n(;B[fg]\n(;W[gg]\n(;B[bi]\n(;W[cj]\n(;B[dk]\n(;W[el]\n(;B[bj]\n)))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2019-04-23T00:00:00+00:00",
          sgf_name: "JosekiJungle vs gcnaccount",
          black_player: "JosekiJungle",
          white_player: "gcnaccount",
          black_rank: "7k",
          white_rank: "7k",
          komi: 5.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999722/zn1g3g2cl3r5qk2itxgw.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2018-12-30]\nPC[OGS: https://online-go.com/game/15916103]\nGN[cupid]\nPB[forseti]\nPW[gcnaccount]\nBR[10k]\nWR[8k]\nTM[120]OT[30 fischer]\nRE[B+2.5]\nSZ[13]\nKM[5.5]\nRU[Japanese]\n;B[cj]\n(;W[jc]\n(;B[dc]\n(;W[jj]\n(;B[cf]\n(;W[fk]\n(;B[kk]\n(;W[kj]\n(;B[jk]\n(;W[ik]\n(;B[il]\n(;W[hk]\n(;B[lj]\n(;W[li]\n(;B[mj]\n(;W[mi]\n(;B[ll]\n(;W[kh]\n(;B[hc]\n(;W[fc]\n(;B[he]\n(;W[fe]\n(;B[je]\n(;W[ld]\n(;B[hg]\n(;W[fg]\n(;B[ii]\n(;W[ij]\n(;B[hi]\n(;W[lf]\n(;B[jg]\n(;W[kg]\n(;B[jh]\n(;W[id]\n(;B[hd]\n(;W[gf]\n(;B[hf]\n(;W[if]\n(;B[ie]\n(;W[jf]\n(;B[ig]\n(;W[kf]\n(;B[ic]\n(;W[jd]\n(;B[fi]\n(;W[ei]\n(;B[fh]\n(;W[eh]\n(;B[gg]\n(;W[ef]\n(;B[de]\n(;W[gb]\n(;B[jb]\n(;W[kb]\n(;B[ib]\n(;W[ed]\n(;B[dd]\n(;W[eb]\n(;B[ka]\n(;W[la]\n(;B[kc]\n(;W[kd]\n(;B[lb]\n(;W[lc]\n(;B[kb]\n(;W[mb]\n(;B[ia]\n(;W[gi]\n(;B[gj]\n(;W[fj]\n(;B[gh]\n(;W[gk]\n(;B[hj]\n(;W[ji]\n(;B[ch]\n(;W[db]\n(;B[cb]\n(;W[cc]\n(;B[bc]\n(;W[bb]\n(;B[cd]\n(;W[ca]\n(;B[ab]\n(;W[cc]\n(;B[ad]\n(;W[cl]\n(;B[bk]\n(;W[bl]\n(;B[dk]\n(;W[dl]\n(;B[bi]\n(;W[dj]\n(;B[ck]\n(;W[cb]\n(;B[di]\n(;W[ej]\n(;B[dh]\n(;W[dg]\n(;B[df]\n(;W[cg]\n(;B[bg]\n(;W[eg]\n(;B[be]\n(;W[hl]\n(;B[jl]\n(;W[im]\n(;B[jm]\n(;W[hm]\n(;B[ek]\n(;W[el]\n(;B[al]\n(;W[bm]\n(;B[ma]\n(;W[mc]\n(;B[ge]\n(;W[ff]\n(;B[gc]\n(;W[fd]\n(;B[ke]\n(;W[le]\n(;B[ga]\n(;W[fa]\n(;B[ha]\n(;W[fb]\n(;B[aj]\n(;W[am]\n(;B[ak]\n(;W[la]\n(;B[]\n(;W[ma]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2018-12-30T00:00:00+00:00",
          sgf_name: "forseti vs gcnaccount",
          black_player: "forseti",
          white_player: "gcnaccount",
          black_rank: "10k",
          white_rank: "8k",
          komi: 5.5,
          result: "B+2.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999728/cmhpvbugyqasukbavsnn.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2018-12-22]\nPC[OGS: https://online-go.com/game/15811113]\nGN[Friendly Match]\nPB[JosekiJungle]\nPW[gcnaccount]\nBR[8k]\nWR[8k]\nTM[300]OT[5x30 byo-yomi]\nRE[W+4.5]\nSZ[13]\nKM[5.5]\nRU[Japanese]\n;B[cj]\n(;W[jd]\n(;B[dc]\n(;W[kg]\n(;B[ce]\n(;W[jk]\n(;B[jc]\n(;W[kc]\n(;B[ic]\n(;W[kb]\n(;B[id]\n(;W[je]\n(;B[jb]\n(;W[ek]\n(;B[dh]\n(;W[cl]\n(;B[ji]\n(;W[ki]\n(;B[jj]\n(;W[kj]\n(;B[ik]\n(;W[jl]\n(;B[hj]\n(;W[il]\n(;B[hl]\n(;W[gk]\n(;B[hk]\n(;W[ig]\n(;B[gj]\n(;W[fk]\n(;B[fj]\n(;W[ej]\n(;B[fh]\n(;W[fi]\n(;B[gi]\n(;W[ei]\n(;B[gg]\n(;W[eh]\n(;B[eg]\n(;W[di]\n(;B[ch]\n(;W[ci]\n(;B[bi]\n(;W[ck]\n(;B[bk]\n(;W[bl]\n(;B[ak]\n(;W[al]\n(;B[bh]\n(;W[dj]\n(;B[bj]\n(;W[hh]\n(;B[gh]\n(;W[he]\n(;B[ie]\n(;W[if]\n(;B[hd]\n(;W[hf]\n(;B[ge]\n(;W[gf]\n(;B[ff]\n(;W[gd]\n(;B[fe]\n(;W[gc]\n(;B[gb]\n(;W[fb]\n(;B[hb]\n(;W[ja]\n(;B[ia]\n(;W[ga]\n(;B[fc]\n(;W[fd]\n(;B[ec]\n(;W[ed]\n(;B[dd]\n(;W[ee]\n(;B[ef]\n(;W[ka]\n(;B[de]\n(;W[jh]\n(;B[ii]\n(;W[gl]\n(;B[hi]\n(;W[hm]\n(;B[ih]\n(;W[jg]\n(;B[hc]\n(;W[hg]\n(;B[kd]\n(;W[ke]\n(;B[ld]\n(;W[lc]\n(;B[le]\n(;W[lf]\n(;B[mc]\n(;W[me]\n(;B[lb]\n(;W[md]\n(;B[]\n(;W[]\n))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))",
          game_date: "2018-12-22T00:00:00+00:00",
          sgf_name: "JosekiJungle vs gcnaccount",
          black_player: "JosekiJungle",
          white_player: "gcnaccount",
          black_rank: "8k",
          white_rank: "8k",
          komi: 5.5,
          result: "W+4.5",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999734/s9qhbd5tgkknbtmtyn6e.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;FF[4]\nCA[UTF-8]\nGM[1]\nDT[2018-10-27]\nPC[OGS: https://online-go.com/game/15028490]\nGN[CAPTAIN PEWPYPANTS vs. gcnaccount]\nPB[CAPTAIN PEWPYPANTS]\nPW[gcnaccount]\nBR[10k]\nWR[8k]\nTM[600]OT[4x30 byo-yomi]\nRE[B+R]\nSZ[13]\nKM[0.5]\nRU[Japanese]\nAB[cc]\n;W[jj]\n(;B[kd]\n(;W[dj]\n(;B[ee]\n(;W[kg]\n(;B[ck]\n(;W[cj]\n(;B[dk]\n(;W[ek]\n(;B[bj]\n(;W[dl]\n(;B[cl]\n(;W[em]\n(;B[ci]\n(;W[cm]\n(;B[bm]\n(;W[bl]\n(;B[dm]\n(;W[bk]\n(;B[el]\n(;W[fl]\n(;B[ej]\n(;W[dl]\n(;B[di]\n(;W[cm]\n(;B[fk]\n(;W[am]\n(;B[el]\n))))))))))))))))))))))))))))",
          game_date: "2018-10-27T00:00:00+00:00",
          sgf_name: "CAPTAIN PEWPYPANTS vs gcnaccount",
          black_player: "CAPTAIN PEWPYPANTS",
          white_player: "gcnaccount",
          black_rank: "10k",
          white_rank: "8k",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999740/kkvm22zp9jjmhlz95ris.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]\nRU[Japanese]SZ[19]KM[6.50]TM[60]OT[5x15 byo-yomi]\nPW[WeiqiLover]PB[bogazici]WR[1k]BR[1k]DT[2023-12-06]PC[The KGS Go Server at http://www.gokgs.com/]RE[B+Resign]\n;B[pp]BL[56.178]C[WeiqiLover [1k\\]: hi\nbogazici [1k\\]: gg\n]\n;W[dd]WL[55.743]\n;B[dp]BL[53.868]\n;W[pd]WL[52.718]\n;B[cf]BL[51.893]\n;W[df]WL[51.011]\n;B[dg]BL[48.607]\n;W[ef]WL[49.637]\n;B[ce]BL[47.454]\n;W[cd]WL[48.189]\n;B[de]BL[46.208]\n;W[ee]WL[46.794]\n;B[ed]BL[42.155]\n;W[cg]WL[43.878]\n;B[bg]BL[40.561]\n;W[ch]WL[42.757]\n;B[bd]BL[35.181]\n;W[bc]WL[40.817]\n;B[be]BL[31.946]\n;W[bh]WL[39.182]\n;B[af]BL[28.178]\n;W[cb]WL[30.248]\n;B[ad]BL[16.305]\n;W[fd]WL[26.427]\n;B[cj]BL[10.494]\n;W[eh]WL[20.598]\n;B[ej]BL[1.975]\n;W[cn]WL[15.041]\n;B[eo]BL[15]OB[5]\n;W[em]WL[12.482]\n;B[cl]BL[15]OB[5]\n;W[en]WL[10.44]\n;B[cp]BL[15]OB[5]\n;W[gn]WL[6.966]\n;B[hp]BL[15]OB[5]\n;W[cm]WL[4.631]\n;B[bl]BL[15]OB[5]\n;W[in]WL[0.189]\n;B[gl]BL[15]OB[5]\n;W[fk]WL[15]OW[5]\n;B[fl]BL[15]OB[5]\n;W[ek]WL[15]OW[5]\n;B[el]BL[15]OB[5]\n;W[dk]WL[15]OW[5]\n;B[dl]BL[15]OB[5]\n;W[dj]WL[15]OW[5]\n;B[gk]BL[15]OB[5]\n;W[fj]WL[15]OW[5]\n;B[jl]BL[15]OB[5]\n;W[kn]WL[15]OW[5]\n;B[ll]BL[15]OB[5]\n;W[jp]WL[15]OW[5]\n;B[lp]BL[15]OB[5]\n;W[gp]WL[15]OW[5]\n;B[ho]BL[15]OB[5]\n;W[hn]WL[15]OW[5]\n;B[go]BL[15]OB[5]\n;W[il]WL[15]OW[5]\n;B[jk]BL[15]OB[5]\n;W[ik]WL[15]OW[5]\n;B[ij]BL[15]OB[5]\n;W[hj]WL[15]OW[5]\n;B[gj]BL[15]OB[5]\n;W[ii]WL[15]OW[5]\n;B[jj]BL[15]OB[5]\n;W[gi]WL[15]OW[5]\n;B[hk]BL[15]OB[5]\n;W[hl]WL[15]OW[5]\n;B[hi]BL[15]OB[5]\n;W[hh]WL[15]OW[5]\n;B[jm]BL[15]OB[5]\n;W[jn]WL[15]OW[5]\n;B[hj]BL[15]OB[5]\n;W[mn]WL[15]OW[5]\n;B[hq]BL[15]OB[5]\n;W[kp]WL[15]OW[5]\n;B[lo]BL[15]OB[5]\n;W[km]WL[15]OW[5]\n;B[mk]BL[15]OB[5]\n;W[mm]WL[15]OW[5]\n;B[lq]BL[15]OB[5]\n;W[om]WL[15]OW[5]\n;B[ok]BL[15]OB[5]\n;W[np]WL[15]OW[5]\n;B[nq]BL[15]OB[5]\n;W[op]WL[15]OW[5]\n;B[oq]BL[15]OB[5]\n;W[po]WL[15]OW[5]\n;B[qo]BL[15]OB[5]\n;W[pn]WL[15]OW[5]\n;B[qp]BL[15]OB[5]\n;W[qn]WL[15]OW[5]\n;B[rl]BL[15]OB[5]\n;W[ql]WL[15]OW[5]\n;B[qk]BL[15]OB[5]\n;W[pl]WL[15]OW[5]\n;B[pk]BL[15]OB[5]\n;W[rm]WL[15]OW[5]\n;B[rk]BL[15]OB[5]\n;W[ro]WL[15]OW[5]\n;B[qf]BL[15]OB[5]\n;W[pf]WL[15]OW[5]\n;B[pe]BL[15]OB[5]\n;W[oe]WL[15]OW[5]\n;B[qe]BL[15]OB[5]\n;W[od]WL[15]OW[5]\n;B[of]BL[15]OB[5]\n;W[nf]WL[15]OW[5]\n;B[og]BL[15]OB[5]\n;W[ng]WL[15]OW[5]\n;B[qd]BL[15]OB[5]\n;W[oh]WL[15]OW[5]\n;B[pg]BL[15]OB[5]\n;W[mh]WL[15]OW[5]\n;B[kc]BL[15]OB[5]\n;W[ic]WL[15]OW[5]\n;B[nc]BL[15]OB[5]\n;W[nd]WL[15]OW[5]\n;B[mc]BL[15]OB[5]\n;W[qc]WL[15]OW[5]\n;B[gb]BL[15]OB[5]\n;W[ib]WL[15]OW[5]\n;B[ec]BL[15]OB[5]\n;W[fc]WL[15]OW[5]\n;B[eb]BL[15]OB[5]\n;W[fb]WL[15]OW[5]\n;B[fa]BL[15]OB[5]\n;W[db]WL[15]OW[5]\n;B[gd]BL[15]OB[5]\n;W[dc]WL[15]OW[5]\n;B[ea]BL[15]OB[5]\n;W[da]WL[15]OW[5]\n;B[fi]BL[15]OB[5]\n;W[gh]WL[15]OW[5]\n;B[eg]BL[15]OB[5]\n;W[fg]WL[15]OW[5]\n;B[ga]BL[15]OB[5]\n;W[fe]WL[15]OW[5]\n;B[gc]BL[15]OB[5]\n;W[ac]WL[15]OW[5]\n;B[id]BL[15]OB[5]\n;W[jd]WL[15]OW[5]\n;B[ie]BL[15]OB[5]\n;W[jc]WL[15]OW[5]\n;B[je]BL[15]OB[5]\n;W[kd]WL[15]OW[5]\n;B[ld]BL[15]OB[5]\n;W[ke]WL[15]OW[5]\n;B[me]BL[15]OB[5]\n;W[ne]WL[15]OW[4]\n;B[kf]BL[15]OB[5]\n;W[le]WL[15]OW[4]\n;B[jg]BL[15]OB[5]\n;W[ge]WL[15]OW[4]\n;B[he]BL[15]OB[5]\n;W[md]WL[15]OW[4]\n;B[rc]BL[15]OB[4]\n;W[pb]WL[15]OW[4]\n;B[qb]BL[15]OB[4]\n;W[pc]WL[15]OW[4]\n;B[rb]BL[15]OB[4]\n;W[jh]WL[15]OW[4]\n;B[kh]BL[15]OB[4]\n;W[kl]WL[15]OW[4]\n;B[kk]BL[15]OB[4]\n;W[lj]WL[15]OW[4]\n;B[lk]BL[15]OB[4]\n;W[nj]WL[15]OW[4]\n;B[nk]BL[15]OB[4]\n;W[ki]WL[15]OW[4]\n;B[ji]BL[15]OB[4]\n;W[ih]WL[15]OW[4]\n;B[li]BL[15]OB[4]\n;W[pi]WL[15]OW[4]\n;B[qi]BL[15]OB[4]\n;W[ph]WL[15]OW[2]\n;B[qh]BL[15]OB[4]\n;W[mj]WL[15]OW[2]\n;B[kj]BL[15]OB[4]\n;W[kr]WL[15]OW[2]\n;B[rp]BL[15]OB[4]\n;W[sp]WL[15]OW[2]\n;B[sq]BL[15]OB[4]\n;W[so]WL[15]OW[2]\n;B[qq]BL[15]OB[4]\n;W[ah]WL[15]OW[2]\n;B[ag]BL[15]OB[4]\n;W[ig]WL[15]OW[2]\n;B[lr]BL[15]OB[4]\n;W[ir]WL[15]OW[2]\n;B[hr]BL[15]OB[4]C[bogazici [1k\\]: ty\nWeiqiLover [1k\\]: thanks\n])\n",
          game_date: "2023-12-06T00:00:00+00:00",
          sgf_name: "bogazici vs WeiqiLover",
          black_player: "bogazici",
          white_player: "WeiqiLover",
          black_rank: "1k",
          white_rank: "1k",
          komi: 6.5,
          result: "B+Resign",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999746/cr4eg6e40uxamtus3axx.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2023-12-05]\r\nPB[\u65e0\u5fc3\u7231\u68cb]\r\nPW[\u9646\u627f\u8f69]\r\nBR[9\u6bb5]\r\nWR[9\u6bb5]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RE[B+R]TM[60]TC[3]TT[15]AP[foxwq]RL[0]\r\n;B[pd];W[dd];B[pq];W[dp];B[po];W[pn];B[qn];W[qf];B[pm];W[nc];B[nd];W[md];B[ne];W[pc];B[qc];W[oc];B[qd];W[qi];B[ph];W[qh];B[kd];W[ld];B[ke];W[kb];B[jb];W[lb];B[ic];W[pg];B[mf];W[kc];B[eb];W[cc];B[ed];W[ee];B[fd];W[jc];B[de];W[ce];B[df];W[cf];B[dg];W[ch];B[fq];W[id];B[dc];W[cd];B[cb];W[dh];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[fr];B[gq];W[iq];B[cn];W[gr];B[kq];W[io];B[ko];W[on];B[ql];W[pr];B[or];W[oq];B[op];W[nq];B[qr];W[ln];B[kn];W[np];B[lm];W[nr];B[ps];W[om];B[ol];W[nl];B[ok];W[mm];B[ll];W[oo];B[pp];W[nk];B[nj];W[mk];B[oi];W[mj];B[in];W[hn];B[im];W[nh];B[re];W[lo];B[rf];W[ni];B[oj];W[oh];B[pi];W[rm];B[rl];W[pl];B[pk];W[qm];B[rn];W[pl];B[sm];W[od];B[oe];W[pe];B[qe];W[of];B[pf];W[qg];B[mi];W[pm];B[qj];W[li];B[mh];W[mg];B[lh];W[lg];B[kh];W[nf];B[kj];W[ki];B[ji];W[lj];B[jh];W[jj];B[kk];W[kp];B[jp];W[lp];B[ip];W[hp];B[jo];W[jq];B[hq];W[hr];B[ho];W[ij];B[ie];W[hc];B[hd];W[ib];B[ff];W[lf];B[cg];W[bg];B[bh];W[af];B[bi];W[cj];B[bj];W[ck];B[bk];W[cm];B[bm];W[co];B[cl];W[bo];B[bb];W[jl];B[il];W[ig];B[hh];W[jk];B[kl];W[jm];B[km];W[hi];B[ih];W[gh];B[hg];W[em];B[el];W[fl];B[ek];W[dm];B[dl];W[gm];B[gk];W[fk];B[fj];W[gj];B[gl];W[fm];B[fi];W[fh];B[ei];W[eh];B[fg];W[gi];B[go];W[jn];B[hl];W[fo];B[gg])",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "\u65e0\u5fc3\u7231\u68cb vs \u9646\u627f\u8f69",
          black_player: "\u65e0\u5fc3\u7231\u68cb",
          white_player: "\u9646\u627f\u8f69",
          black_rank: "9\u6bb5",
          white_rank: "9\u6bb5",
          komi: 375.0,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999752/bmdxw5hpjbzo6tmgw8wl.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            '(;GM[1]FF[4]\r\nSZ[19]\r\nGN[\u7b2c25\u5c4a\u519c\u5fc3\u676f\u4e16\u754c\u56e2\u4f53\u64c2\u53f0\u8d5b\u7b2c9\u5c40<\u5f20\u5b66\u658c\uff06\u7edd\u827a\u89e3\u8bf4>]\r\nDT[2023-12-04]\r\nPB[\uc2e0\uc9c4\uc11c]\r\nPW[\u8c22\u5c14\u8c6a]\r\nBR[P9\u6bb5]\r\nWR[P9\u6bb5]\r\nKM[650]HA[0]RU[Japanese]AP[GNU Go:3.8]RE[B+R]TM[3600]TC[1]TT[60]AP[foxwq]RL[0]\r\n;B[qd]C[\u7b2c25\u5c4a\u519c\u5fc3\u676f\u4e16\u754c\u56e2\u4f53\u64c2\u53f0\u8d5b\u7b2c9\u5c40<\u5f20\u5b66\u658c\uff06\u7edd\u827a\u89e3\u8bf4>/"gz\n13:00\u731c\u5148]\r\n(;W[dp]\r\n(;B[dc]\r\n(;W[qp]\r\n(;B[df]C[\u5927\u5bb6\u597d\uff0c\u6211\u662f\u4eca\u5929\u7684\u89e3\u8bf4\u5f20\u5b66\u658c\uff0c\u4eca\u5929\u8c6a\u54e5\u4f9d\u65e7\u662f\u767d\u68cb\uff01]\r\n(;W[op]\r\n(;B[cq]\r\n(;W[cp]\r\n(;B[dq]\r\n(;W[fq]\r\n(;B[fr]\r\n(;W[gq]\r\n(;B[gr]\r\n(;W[hq]C[\u8c6a\u54e5\u4ee5\u4e0d\u53d8\u5e94\u4e07\u53d8\uff0c\u5343\u7bc7\u4e00\u5f8b\u7684\u4e0b\u6cd5/"huaix\n\u8c6a\u54e5\u4eca\u5929\u662f\u5411\u519c\u5fc3\u676f\u8bb0\u5f55\u53d1\u8d77\u51b2\u51fb\n\u4e4b\u524d\u8303\u8001\u677f\u4e24\u6b21\u4e03\u8fde\u80dc\u88ab\u8001\u6734\u7ec8\u7ed3]\r\n(;B[od]\r\n(;W[pj]C[\u6768\u9f0e\u65b0\u4e03\u8fde\u80dc\u88ab\u4e95\u5c71\u7ec8\u7ed3\n\u4eca\u5929\u5c0f\u7533\u53ef\u80fd\u662f\u804c\u4e1a\u751f\u6daf\u8fc4\u4eca\u4e3a\u6b62\uff0c\u538b\u529b\u6700\u5927\u7684\u4e00\u76d8\u68cb];B[jc]\r\n(;W[ch]\r\n(;B[cj]C[\u6253\u6563\n\u4eca\u5929\u6211\u7384\u5b66\u7684\u7a7f\u4e86\u4ef6\u7ea2\u8272\u8fd0\u52a8\u670d\uff0c\u4e0d\u77e5\u9053\u80fd\u5426\u7ed9\u8c6a\u54e5\u5e26\u6765\u597d\u8fd0/"ka\n> \u5b50\u8d85\u522b\u9001\u4e86 6\u6bb5: \u7b2c\u4e09\u9636\u6bb5\u5565\u65f6\u5019\u5f00\u59cb\n\u8fd9\u4e2a\u6211\u8fd8\u4e0d\u77e5\u9053\uff0c\u611f\u89c9\u4f1a\u662f2\u6708\u4efd]\r\n(;W[eh]\r\n(;B[cg]\r\n(;W[ci]\r\n(;B[ej]C[\u4eca\u5929\u5c0f\u7533\u80af\u5b9a\u4f1a\u4e0b\u7684\u5feb\u4e00\u4e9b];W[fg]\r\n(;B[gj]\r\n(;W[fd]C[\u8c6a\u54e5\u4f9d\u7136\u662f\u4e0b\u7684\u5f88\u81ea\u4fe1]\r\n(;B[hd]C[> \u54c8\u54c8\u683c\u9ed1\u718a 9\u6bb5: \u6211\u600e\u4e48\u611f\u89c9\u9ed127 \u4e0d\u662f\u597d\u68cb\n\u770b\u7740\u8fd8\u884c\u5427]\r\n(;W[ig]C[> zwg1806 5\u6bb5: \u767d\u4e0b\u4e0d\u51fa\u4e00\u9009\n2\u9009\u5f88\u63a5\u5730\u6c14];B[bk]\r\n(;W[kd]C[\u80a9\u51b2\u65e0\u6076\u624b\u5427\n\u4eca\u5929\u5927\u5bb6\u5fc3\u6001\u53ef\u4ee5\u6bd4\u8f83\u653e\u677e\uff0c\u8d62\u4e86\u521b\u9020\u5386\u53f2\uff0c\u8f93\u4e86\u8c6a\u54e5\u4e5f\u8db3\u591f\u4f18\u79c0\uff0c\u53ef\u4ee5\u7ed9\u4e0b\u4e2a\u9636\u6bb5\u7559\u6709\u60ac\u5ff5]\r\n(;B[jd]C[> \u9060\u91ce\u8cb4\u6a39 7\u7ea7: \u5386\u53f2\u6700\u9ad8\u662f\u5f90\u8001\u4e5d\u8fde\u80dc\u5427\n\u90a3\u662f\u65e9\u5e74\u7684\u771f\u9732\u676f\uff0c\u4e0d\u662f\u519c\u5fc3\u676f\n> \u5f97\u9053136856 3\u6bb5: \u5f20\u8001\u5e08\uff0c\u65e5\u672c\u4eba\u62ff\u8fc7\u519c\u5fc3\u676f\u5417/"yiw/"yiw/"yiw\n\u5e94\u8be5\u662f\u62ff\u8fc7\u4e00\u6b21\uff0c\u90a3\u65f6\u5019\u4f9d\u7530\u514b\u674e\u660c\u9550];W[nd]C[\u8c6a\u54e5\u7387\u5148\u53d1\u96be]\r\n(;B[ne]C[> \u73b2\u73d1\u78a7\u7a7a 4\u6bb5: \u4e0d\u7ba1\u600e\u4e48\u4e0b\uff0c\u5148\u8d62\u5f97\u65f6\u95f4\u4f18\u52bf\n\u5c0f\u7533\u7684\u901f\u5ea6\u6b63\u5e38\u6765\u8bf4\u4e5f\u7b97\u5feb\u7684]\r\n(;W[oc];B[nc]\r\n(;W[md]\r\n(;B[ob]C[\u5c0f\u7533\u62d2\u7edd\u653e\u5f03\u5b9e\u5730\uff01]\r\n(;W[pc];B[pd]C[> Overture19 16\u7ea7: \u5c0f\u7533\u6253\u4e86\u4e2a\u5475\u6b20\u4ec0\u4e48\u610f\u601d\u554a\n\u538b\u529b\u5927\uff0c\u6628\u665a\u6ca1\u7761\u597d\uff1f]\r\n(;W[mc]\r\n(;B[nb]\r\n(;W[mb]\r\n(;B[pb]C[\u8c6a\u54e5\u9009\u62e9\u4e86\u4e0d\u53ef\u601d\u8bae\u7684\u5b9a\u578b\uff01\n\u8fd9\u91cc\u4e0b\u53bb\u5f88\u662f\u65e0\u8da3\u554a];W[kf]C[> \u9e1f\u751f\u9c7c\u6c64 9\u6bb5: \u6211\u6765\u55bd\uff0c\u4eca\u5929\u4e0b\u96e8\uff0c\u5e94\u8be5\u662f\u5728\u4e3a\u5c0f\u7533\u54ed\u6ce3\n\u90a3\u662f\u4f60\u798f\u5efa\u4e0b\u96e8\u5427\uff0c\u5317\u4eac\u6ca1\u4e0b\u554a\n\u6211\u770b\u5c0f\u7533\u672a\u5fc5\u4f1a\u51b2\u51fb\u767d\u68cb]\r\n(;B[ff]C[\u5c0f\u7533\u4eca\u5929\u4e0d\u4fdd\u5b88\uff01\u4e5f\u4e3b\u52a8\u51fa\u51fb\u4e86]\r\n(;W[gf]\r\n(;B[fe]\r\n(;W[dd]\r\n(;B[ge]C[\u8fd9\u6837\u5f62\u6210\u4e86\u53e6\u5916\u4e00\u79cd\u683c\u5c40]\r\n(;W[ec]C[> \u4e09\u516d\u5341\u516b\u4e4b 3\u6bb5: \u5f20\u9e21\u817f\u4eca\u5929\u4e0b\u73ed\u80af\u5b9a\u65e9\n\u65e9\u4e0d\u4e86\uff0c\u6211\u516d\u70b9\u8fd8\u8981\u51fa\u53bb\u8c08\u70b9\u9e21\u817f\u751f\u610f/"huaix]\r\n(;B[hf]C[\u6362\u505a\u6211\u662f\u53ea\u6562\u5403\u89d2\u4e86\n\u4e3b\u8981\u662f\u767d\u68cb\u5916\u9762\u4e00\u624b\u4e5f\u4e0d\u597d\u5b8c\u5168\u8054\u7edc\n\u4eca\u5929\u8c6a\u54e5\u8c8c\u4f3c\u901f\u5ea6\u4e0a\u6ca1\u4f18\u52bf\u554a]\r\n(;W[hg]\r\n(;B[gg]\r\n(;W[gh]C[\u767d\u68cb\u5c31\u8fd9\u6837\u987d\u5f3a\u7684\u8054\u7edc]\r\n(;B[jf]C[\u5c0f\u7533\u4eca\u5929\u751a\u662f\u82f1\u52c7\u554a\n\u76ee\u524d\u7528\u65f6\u4e00\u6837\uff0c\u90fd\u8fd8\u526932\u5206\u949f];W[jg]\r\n(;B[kg]\r\n(;W[lf]\r\n(;B[kh]C[\u8c6a\u54e5\u5230\u5904\u4e0d\u6d3b\uff0c\u9677\u5165\u82e6\u6218]\r\n(;W[mh]\r\n(;B[ji]C[\u8fd9\u68cb\u592a\u60ac\u4e86\uff0c\u65f6\u95f4\u4e5f\u8981\u6d88\u8017\u5f88\u591a]\r\n(;W[hj]\r\n(;B[hi]\r\n(;W[gi]C[\u7d22\u6027\u9760\u65ad\u62fc\u4e86\uff01];B[gk]\r\n(;W[if]\r\n(;B[je]\r\n(;W[gf]C[\u770b\u770b\u9ed1\u68cb\u6562\u4e0d\u6562\u6740\n\u95ee\u9898\u662f\u9ed1\u68cb\u53ef\u4ee5\u4e0d\u6740\uff0c\u800c\u767d\u68cb\u5fc5\u987b\u5f97\u6d3b/"dk]\r\n(;B[he]C[\u5c0f\u7533\u4e0d\u7ed9\u6d3b\u8def!\u8fd9\u4e0d\u592a\u50cf\u5c0f\u7533\u7684\u98ce\u683c]\r\n(;W[ii]\r\n(;B[ij]\r\n(;W[hh]\r\n(;B[ik]\r\n(;W[jh]\r\n(;B[ki]C[\u8c6a\u54e5\u82e6\u6d3b\u5fcd\u8010/"ch]\r\n(;W[cc]C[\u5148\u6d3b\u89d2\n\u53f3\u4e0a\u4e5f\u8981\u88ab\u9ed1\u68cb\u5206\u65ad\u731b\u653b\n\u767d\u68cb\u8fd9\u56e2\u5b50\u6709\u4e9b\u60e8\u4e0d\u5fcd\u7779\n\u53ea\u8981\u4e0d\u6b7b\u68cb\uff0c\u5c31\u4e00\u5207\u8fd8\u65e9/"xyx\n\u5148\u575a\u6301\u4f4f\n\u6000\u7591\u4eca\u5929\u7ed3\u675f\uff0c\u8c6a\u54e5\u660e\u5929\u662f\u4e0d\u662f\u8fd8\u5f97\u53bb\u56f4\u7532/"fd\n\u90a3\u771f\u662f\u592a\u7d2f\u4e86\n> \u5f97\u9053136856 3\u6bb5: \u5f20\u8001\u5e08\uff0c\u8981\u4e0d\u8981\u6211\u53bb\u76d8\u4e1d\u6d1e\u8bf7\u957f\u8001\u8fc7\u6765/"yiw/"yiw/"yiw\n\u4f60\u786e\u5b9a\u957f\u8001\u73b0\u5728\u76d8\u4e1d\u6d1e\uff0c\u6ca1\u5728\u522b\u7684\u5996\u602a\u5e9c\u4e2d\u505a\u5ba2/"huaix\n\u7b49\u4e00\u4f1a\u90fd\u8bfb\u79d2\u4e86\uff0c\u5565\u4e8b\u90fd\u53ef\u80fd\u53d1\u751f\n> \u9e1f\u751f\u9c7c\u6c64 9\u6bb5: \u957f\u8001\u5728\u5973\u513f\u56fd\u5427\n\u90fd\u6709\u53ef\u80fd/"huaix]\r\n(;B[fi]C[\u4e1d\u6beb\u4e0d\u624b\u8f6f\uff01]\r\n(;W[dg]C[> \u9e1f\u751f\u9c7c\u6c64 9\u6bb5: \u611f\u89c9\u673a\u4f1a\u6765\u4e86\n\u4e00\u76f4\u90fd\u6ca1\u7edd\u671b\uff0c\u8fd9\u624d\u54ea\u5230\u54ea]\r\n(;B[bg];W[bj]C[\u8c6a\u54e5\u8fd8\u526922\uff0c\u5c0f\u7533\u8fd8\u526917\n> \u51b7\u9762\u6398\u5893\u4eba 7\u6bb5: \u5f20\u8001\u5e08\uff0c\u8fd9\u79cd\u5c40\u9762\u767d\u4e8b\u5148\u77e5\u9053\u5417\uff1f\n\u5f53\u7136\u4e0d\u77e5\u9053\u4e86\uff0c\u5426\u5219\u8fd8\u80fd\u8fd9\u6837\u4e0b\u5417/"wulk\n> V316823658 5\u7ea7: \u767d\u68cb\u80fd\u6d3b\u5c31\u884c\uff0c\u6162\u6162\u4e0b\n\u662f\u554a\uff0c\u7559\u5f97\u9752\u5c71\u5728\u4e0d\u6101\u6ca1\u67f4\u70e7]\r\n(;B[dj]C[> \u9e1f\u751f\u9c7c\u6c64 9\u6bb5: \u6218\u7ebf\u62c9\u957f\u4e86\uff0c\u6bd4\u9884\u60f3\u4e2d\u6d3b\u5f97\u597d\u4e00\u4e9b\uff0c\u6ca1\u6709\u4ed8\u51fa\u592a\u591a\u4ee3\u4ef7\n\u80fd\u7a7f\u51fa\u6765\u5b8c\u5168\u4e0d\u4e00\u5b9a\u4e86\n> hessenna 7\u6bb5: \u672a\u5fc5\u6562\u5f00\u52ab\n\u5e0c\u671b\u80fd\u4e0b\u51fa\u6765\u5427\n\u9ed14\u662f\u4e0d\u662f\u597d\u624b\uff1f\u5c40\u90e8\u767d\u68cb\u8fd8\u662f\u4e0d\u80fd\u51c0\u6d3b]\r\n(;W[ef]\r\n(;B[ee]C[\u597d\u7684\uff0c\u8fd9\u6837\u6253\u52ab\u767d\u68cb\u53ef\u7b97\u8131\u79bb\u82e6\u6d77\u4e86\uff01]\r\n(;W[de]\r\n(;B[eg]\r\n(;W[hk]\r\n(;B[dh]\r\n(;W[hl]\r\n(;B[kk]C[\u8fd9\u4e0b\u6f2b\u957f\u4e86]\r\n(;W[ni]C[\u6162\u6162\u6765\uff0c\u8c6a\u54e5\u5e76\u4e0d\u7740\u6025];B[nk]C[> \u9876\u76d6\u513f\u80a5 3\u6bb5: \u624d18\u7684\u80dc\u7387\uff0c\u8fd8\u5728\u5439\uff0c\u8fd9\u4e0d\u662f\u4e94\u5341\u6b65\u7b11\u4e00\u767e\u6b65\n18\u603b\u6bd4\u4e2a\u4f4d\u6570\u597d\u4e0d\u5c11\u5427\uff0c\u603b\u5f97\u7ed9\u70b9\u5e0c\u671b\u554a]\r\n(;W[ol]C[\u60f3\u56f4\u70b9\u7a7a]\r\n(;B[nl]\r\n(;W[om];B[nm]C[\u5c0f\u7533\u7684\u5224\u65ad\u548c\u7edd\u827a\u4e00\u6837\u4e50\u89c2\n\u53cc\u65b9\u90fd\u8fd8\u526911\u5206\u949f\uff01]\r\n(;W[nn]\r\n(;B[mn]\r\n(;W[no]C[\u8fd9\u6837\u56f4\uff0c\u96be\u514d\u53f3\u4e0a\u8981\u88ab\u9ed1\u68cb\u9a9a\u6270]\r\n(;B[jm];W[hn]C[\u9ed1\u68cb\u5b8c\u5168\u8d70\u539a\u4e86\uff0c\u8981\u5728\u53f3\u4e0a\u52a8\u624b\u4e86\n\u9ed1\u68cb\u73b0\u5728\u5927\u6982\u4e00\u4e2a\u8d34\u76ee\u7684\u4f18\u52bf]\r\n(;B[oj]C[\u8fd9\u6837\u51b2\u51fb\n\u767d\u68cb\u9664\u4e86\u6321\u4e0a\u6ca1\u5565\u5e94\u624b]\r\n(;W[oi]\r\n(;B[of]C[\u8fd9\u6b65\u68cb\u771f\u662f\u8d85\u7ea7\u7a33\uff0c\u5f3a\u8c03\u4e24\u4e2a\u65ad\u70b9]\r\n(;W[ng]\r\n(;B[pi]C[\u53cc\u65b9\u5404\u52695\u5206\u949f\uff01]\r\n(;W[ph]\r\n(;B[qi]\r\n(;W[qh];B[ri]\r\n(;W[ok]\r\n(;B[nj]\r\n(;W[qk]\r\n(;B[rh]\r\n(;W[mj]\r\n(;B[lg]\r\n(;W[mf]C[\u8c6a\u54e5\u5148\u8bfb\u79d2\u4e86\u3002\u3002\u3002\n\u5c0f\u7533\u8fd8\u67095\u5206\u949f];B[og]\r\n(;W[qc]C[\u6253\u4e00\u5c06];B[rc];W[ll]\r\n(;B[mk];W[lk]\r\n(;B[lj]\r\n(;W[li]\r\n(;B[mi]\r\n(;W[qb]\r\n(;B[rb]C[\u6ca1\u52ab\u800c\u4ea1\uff0c\u6709\u70b9\u60e8\n> \u6211\u662f\u5c0f\u592a\u9633 9\u6bb5: \u53f3\u4e0a\u5982\u679c\u4e0d\u6253\u5c06\u7684\u8bdd\uff0c\u662f\u4e0d\u662f\u6253\u52ab\u8fd8\u6709\u673a\u4f1a\uff1f\n\u672c\u8eab\u8dd1\u4e00\u4e2a\u672a\u5fc5\u662f\u5148\u624b/"qd];W[mj]\r\n(;B[kj]\r\n(;W[di]\r\n(;B[mm]\r\n(;W[dg]\r\n(;B[ef]C[> \u957f\u6b4c\u4e00\u66f299 4\u6bb5: \u5f20\u8001\u5e08\u80cc\u4e00\u4e0b\u9505\u7b97\u4e86\n\u8fd9\u53e3\u9505\u6211\u4e0d\u80cc\u554a\uff0c\u5df2\u7ecf\u8bb2\u8d62\u4e86\u8fd9\u4e48\u591a\u76d8\u4e86\n\u8ba4\u8f93\u4e86\uff0c\u9ed1\u4e2d\u76d8\u80dc\uff01])\r\n(;B[ef]C[/"jueyi\u9ed199.9%];W[fh];B[bi];W[bh];B[aj];W[ah];B[ce];W[cd];B[be];W[bd]))\r\n(;W[dg]C[/"jueyi\u767d0.1%];B[ef];W[fh];B[bi];W[bh];B[aj];W[ah];B[ce];W[cd];B[be]))\r\n(;B[mm]C[/"jueyi\u9ed199.9%];W[dg];B[ef];W[fh];B[bi];W[bh];B[aj];W[ah];B[ce];W[cd]))\r\n(;W[mm]C[/"jueyi\u767d0.2% /"wn];B[mi];W[rg];B[lh];W[qg];B[oh];W[nh];B[nf];W[mg];B[me]))\r\n(;B[kj]C[/"jueyi\u9ed199.8%];W[mi];B[mm];W[lm];B[ln];W[kn];B[km];W[lo];B[kl];W[mo]))\r\n(;B[rb]C[/"jueyi\u9ed199.8%];W[mj];B[kj];W[mi];B[mm];W[lm];B[ln];W[kn];B[km];W[lo]))\r\n(;W[qb]C[/"jueyi\u767d0.5%];B[rb];W[mj];B[kj];W[mm];B[mi];W[ie];B[lh];W[id];B[ic]))\r\n(;B[mi]C[/"jueyi\u9ed199.5%];W[qb];B[rb];W[mj];B[kj];W[mm];B[mi];W[jb];B[lh];W[ib]))\r\n(;W[li]C[/"jueyi\u767d0.6% \u6ca1\u6709\u52ab\u8d22\u4e86/"lb];B[mi];W[qb];B[rb];W[mj];B[kj];W[mm];B[mi]))\r\n(;B[lj]C[/"jueyi\u9ed199.5%];W[li];B[mi];W[qb];B[rb];W[mj];B[kj];W[mm];B[mi];W[jl]))\r\n(;B[mk]C[/"jueyi\u9ed199.4%];W[lk];B[lj];W[li];B[mi];W[qb];B[rb];W[mj];B[kj];W[mm]))\r\n(;W[oh]C[/"jueyi\u767d2.9% \u88ab\u5c0f\u7533\u6740\u6761\u9f99\u590d\u4ec7/"qd];B[ll];W[rg];B[rf];W[kc];B[mg];W[nf];B[rk];W[rl];B[jb]))\r\n(;W[nf]C[/"jueyi\u767d4.4%];B[og];W[oh];B[oe];W[rg];B[rf];W[me];B[mg];W[mf];B[ll]))\r\n(;B[qg]C[/"jueyi\u9ed196.9% \u4e0d\u653e\u8fc7\u767d\u68cb];W[qc];B[rc];W[qb];B[rb];W[me];B[oh];W[il];B[ll];W[jl]))\r\n(;W[mj]C[/"jueyi\u767d4.0%];B[qg];W[pg];B[lg];W[nf];B[me];W[mf];B[ll];W[kc];B[oe]))\r\n(;B[rh]C[/"jueyi\u9ed195.6%];W[mj];B[lg];W[nf];B[og];W[oh];B[oe];W[me];B[mg];W[mf]))\r\n(;W[qk]C[/"jueyi\u767d5.2%];B[rh];W[mj];B[lg];W[nf];B[og];W[oh];B[mg];W[mf];B[ll]))\r\n(;B[nj]C[/"jueyi\u9ed195.9%];W[qk];B[rh];W[mj];B[og];W[oh];B[lg];W[nf];B[oe];W[me]))\r\n(;W[ok]C[/"jueyi\u767d5.0% \u8fd9\u6837\u8981\u6b7b\u4e86];B[nj];W[qk];B[rh];W[mj];B[lg];W[nf];B[og];W[oh];B[mg])\r\n(;W[qj]C[/"jueyi\u767d4.7% \u65e0\u6cd5\u6536\u62fe];B[rh];W[rg];B[rj];W[ok];B[nj];W[rk];B[qg];W[rf];B[qf])\r\n(;W[rh]C[/"jueyi\u767d3.9% \u7acb\u4e0b\u53bb\u4e09\u4e2a\u88ab\u5403\uff0c\u7a7a\u6ca1\u4e86];B[pk];W[qj];B[rj];W[ok];B[nj];W[qk];B[ql];W[rk];B[rl]))\r\n(;W[qh]C[/"jueyi\u767d5.0% /"wn];B[ri];W[qj];B[rh];W[rg];B[rj];W[ok];B[nj];W[rk];B[qg]))\r\n(;B[qi]C[/"jueyi\u9ed194.3%];W[qh];B[ri];W[qj];B[rh];W[rg];B[qg];W[pg];B[qf];W[ok]))\r\n(;W[ph]C[/"jueyi\u767d6.4% \u4e0d\u592a\u884c/"gg];B[qi];W[qh];B[ri];W[qj];B[rh];W[ok];B[nj];W[rg];B[qg]))\r\n(;B[pi]C[/"jueyi\u9ed193.1%];W[ph];B[qi];W[qh];B[ri];W[qj];B[rh];W[rg];B[qg];W[pg]))\r\n(;W[ng]C[/"jueyi\u767d8.4% \u8981\u57ae\u4e86];B[pi];W[ph];B[qi];W[qh];B[ri];W[qc];B[rc];W[rh];B[pk]))\r\n(;B[pi]C[/"jueyi\u9ed190.9%];W[ph];B[qi];W[qh];B[rj];W[rc];B[rd];W[qc];B[sc];W[ok]))\r\n(;W[oi]C[/"jueyi\u767d9.9% \u9ed1\u68cb\u8fd9\u624b\u6bb5\u770b\u8d77\u6765\u633a\u5389\u5bb3];B[pi];W[ph];B[qi];W[qh];B[rj];W[rc];B[rd];W[qc];B[sc]))\r\n(;B[qh]C[/"jueyi\u9ed192.5% \u53f3\u8fb9\u5148\u8d70\u76ee\u6570\u592a\u5927\u4e86];W[qi];B[ri];W[ph];B[oh];W[nj];B[pg];W[il];B[mj];W[ok])\r\n(;B[be]C[/"jueyi\u9ed192.5% 2\u8def\u6f5c\u6c34\u8247\u7834\u7a7a];W[bd];B[ce];W[cd];B[rp];W[qq];B[rj];W[qi];B[ri]))\r\n(;B[qh]C[/"jueyi\u9ed195.2% \u7edd\u827a\u7b80\u660e\u6536\u5175\u4e86];W[ph];B[qi];W[pi];B[of];W[mg];B[jn];W[in];B[il];W[eq]))\r\n(;W[il]C[/"jueyi\u767d7.3%];B[jl];W[lj];B[kj];W[of];B[nf];W[pg];B[oh];W[mg];B[ph]))\r\n(;B[mn]C[/"jueyi\u9ed193.6%];W[il];B[jl];W[lj];B[kj];W[of];B[nf];W[pg];B[og];W[mg]))\r\n(;W[il]C[/"jueyi\u767d12.8% \u767d\u68cb\u53f3\u8fb9\u8981\u987d\u5f3a\u7684\u6297\u4f4f];B[jl];W[lj];B[kj];W[of];B[nf];W[pg];B[oh];W[mg];B[on]))\r\n(;W[om]C[/"jueyi\u767d12.2%];B[nm];W[il];B[jl];W[lj];B[kj];W[of];B[jn];W[hn];B[on]))\r\n(;B[nl]C[/"jueyi\u9ed188.0% \u9ed1\u68cb\u5c31\u5728\u4e2d\u592e\u642d\u623f\u5b50];W[om];B[nm];W[il];B[jl];W[lj];B[kj];W[of];B[jn];W[hn]))\r\n(;W[jm]C[/"jueyi\u767d18.3% \u8fd9\u80dc\u7387\u4e0d\u5c31\u6162\u6162\u4e0a\u6765\u4e86\u5417];B[lm];W[ol];B[nm];W[of];B[nf];W[mn];B[ln];W[ng])\r\n(;W[il]C[/"jueyi\u767d18.0% \u62d0\u4e5f\u4e0d\u9519];B[mj];W[ol];B[jl];W[of];B[nf];W[ng];B[pf];W[mm];B[og])\r\n(;W[il]C[\u864e\u7684\u8bdd\u767d3\u4e25\u5389];B[jl];W[lj]))\r\n(;W[of]C[/"jueyi\u767d13.3% \u53ef\u7b97\u662f\u80fd\u5598\u53e3\u6c14\u4e86];B[mi];W[ni];B[mj];W[oe];B[ok];W[nj];B[nk];W[jm];B[lm])\r\n(;W[ni]C[/"jueyi\u767d10.9% \u6de1\u6de1\u7684\u5c0f\u5c16];B[mj];W[of];B[nj];W[oj];B[mi];W[nh];B[qg];W[jm]))\r\n(;B[mi]C[/"jueyi\u9ed190.5%];W[ni];B[mg];W[lg];B[lh];W[nh];B[ng];W[kk];B[mj];W[nk]))\r\n(;W[hl]C[/"jueyi\u767d9.7%];B[mi];W[ni];B[mg];W[lg];B[lh];W[nh];B[ng];W[kk];B[mj]))\r\n(;B[dh]C[/"jueyi\u9ed190.7%];W[hl];B[mi];W[nh];B[of];W[lg];B[il];W[im];B[jm];W[hm]))\r\n(;W[hl]C[/"jueyi\u767d10.2%];B[dh];W[hk];B[mi];W[ni];B[mg];W[lg];B[lh];W[nh];B[ng]))\r\n(;B[eg]C[/"jueyi\u9ed189.7%];W[hl];B[dh];W[hk];B[mi];W[ni];B[mg];W[lg];B[lh];W[nh]))\r\n(;W[de]C[/"jueyi\u767d10.4% \u767d\u68cb\u8fd9\u6837\u662f\u5f03\u6389\u4e0a\u9762\uff0c\u56f4\u53f3\u4e0b\uff0c\u4e0b\u4e00\u76d8\u5927\u68cb];B[eg];W[hl];B[dh];W[hk];B[mi];W[ni];B[mg];W[lg];B[lh]))\r\n(;B[ee]C[/"jueyi\u9ed189.5%];W[de];B[eg];W[hl];B[dh];W[hk];B[mi];W[ni];B[mg];W[lg]))\r\n(;W[ef]C[/"jueyi\u767d10.3% \u6253\u52ab\u662f\u4e2a\u597d\u673a\u4f1a\uff01];B[ee];W[de];B[eg];W[hl];B[dh];W[hk];B[mi];W[ni];B[mg])\r\n(;W[bh]C[\u9ed14\u540e\u5c40\u90e8\u8fd8\u662f\u6253\u52ab];B[ef];W[fh];B[af]))\r\n(;B[di]C[/"jueyi\u9ed194.9% \u653e\u767d\u68cb\u6d3b];W[dh];B[de];W[ck];B[dj];W[bh];B[cl];W[ak];B[bl];W[be])\r\n(;B[ck]C[/"jueyi\u9ed191.8% \u6d3b\u7684\u5f88\u96be\u770b\uff0c\u4e0d\u8fc7\u603b\u6bd4\u6b7b\u4e86\u5f3a];W[bh];B[ce];W[di];B[ef];W[ei];B[eg];W[hk];B[hl];W[hi]))\r\n(;B[bg]C[/"jueyi\u9ed190.3% \u5c31\u662f\u8981\u6253\u52ab];W[bh];B[ef];W[ei];B[aj];W[ai];B[eg];W[dj];B[dk];W[di])\r\n(;B[cf]C[/"jueyi\u9ed183.9% \u7ed9\u767d\u68cb\u90a3\u5c31\u8e0f\u5b9e\u591a\u4e86];W[di];B[ei];W[dj];B[dk];W[bj];B[ck];W[bg];B[bf];W[ai]))\r\n(;W[dg]C[/"jueyi\u767d10.7% \u65ad\u4e86\u6253\u52ab];B[bg];W[dj];B[dk];W[di];B[ef];W[ei];B[eg];W[bh];B[aj]))\r\n(;B[di]C[/"jueyi\u9ed192.7% \u9ed11\u864e\u767d\u68cb\u5c40\u90e8\u5f88\u96be\u4e86];W[dh];B[fi];W[ei];B[bf];W[dj];B[dk];W[bh];B[di];W[ce]))\r\n(;W[cc]C[/"jueyi\u767d8.0% \u89d2\u548c\u9f99\u672a\u5fc5\u80fd\u4e24\u5168];B[di];W[dh];B[fi];W[ei];B[bf];W[dj];B[dk];W[bh];B[di]))\r\n(;B[ki]C[/"jueyi\u9ed192.3%];W[cc];B[bg];W[dg];B[ef];W[bh];B[eg];W[dj];B[dk];W[ei]))\r\n(;W[bj]C[/"jueyi\u767d12.9%];B[dk];W[cc];B[bf];W[dg];B[bh];W[bi];B[ef];W[hk];B[hl]))\r\n(;B[ik]C[/"jueyi\u9ed187.4%];W[cc];B[jh];W[bj];B[ck];W[ei];B[di];W[dh];B[bf];W[fi]))\r\n(;W[hh]C[/"jueyi\u767d12.5%];B[ik];W[bj];B[dk];W[cc];B[bf];W[dg];B[bh];W[bi];B[ef]))\r\n(;B[ij]C[/"jueyi\u9ed187.6%];W[hh];B[ik];W[bj];B[dk];W[cc];B[bf];W[dg];B[bh];W[ce]))\r\n(;W[ii]C[/"jueyi\u767d12.9% \u82e6\u6d3b];B[ij];W[hh];B[ik];W[cc];B[bg];W[bj];B[dk];W[dg];B[de]))\r\n(;B[hk]C[/"jueyi\u9ed191.3% \u82e6\u4e2d\u4f5c\u4e50\u5427/"wn];W[he];B[gd];W[cc];B[ie];W[ij];B[ii];W[bh];B[bg];W[dg]))\r\n(;W[ii]C[/"jueyi\u767d14.5%];B[ij];W[hh];B[ik];W[bj];B[dk];W[dg];B[bg];W[cc];B[ef]))\r\n(;B[je]C[/"jueyi\u9ed186.7%];W[ii];B[ij];W[hh];B[ik];W[cc];B[bg];W[bj];B[dk];W[dg]))\r\n(;W[ii]C[/"jueyi\u767d16.7% \u9ed18\u8fd9\u6b65\u68cb\u770b\u8d77\u6765\u50cf\u662f\u80dc\u5229\u5ba3\u8a00\u4e86/"gg];B[ij];W[hh];B[ik];W[bj];B[dj];W[cc];B[kj];W[dg];B[cf]))\r\n(;W[gi]C[/"jueyi\u767d13.5%];B[ij];W[fj];B[hk];W[fk];B[ei];W[fi];B[dh];W[di];B[dg]))\r\n(;B[hi]C[/"jueyi\u9ed186.7%];W[gi];B[ij];W[fj];B[hk];W[fk];B[ei];W[fi];B[dh];W[di]))\r\n(;W[if]C[/"jueyi\u767d16.3% \u8fd9\u6837\u6d3b\u4e86\u4e5f\u592a\u82e6];B[je];W[gf];B[hi];W[he];B[gd];W[cc];B[ie];W[cl];B[dl]))\r\n(;B[ji]C[/"jueyi\u9ed183.8%];W[if];B[je];W[gf];B[he];W[fj];B[fk];W[fi];B[gk];W[cc]))\r\n(;W[hj]C[/"jueyi\u767d20.9% \u53f3\u4e0a\u88ab\u5c01\u8fdb\u53bb\uff0c\u80af\u5b9a\u662f\u6b7b\u4e86];B[mh];W[mg];B[nh];W[of];B[oe];W[ph];B[og];W[pg];B[nf])\r\n(;W[mg]C[/"jueyi\u767d19.7% \u8c8c\u4f3c\u4e24\u5757\u5fc5\u6b7b\u4e00\u5757\uff1f/"lh];B[ii];W[jh];B[ji];W[ki];B[lh];W[kj];B[ni];W[hi];B[mh]))\r\n(;B[kh]C[/"jueyi\u9ed180.1%];W[hj];B[eg];W[gf];B[mh];W[mg];B[nh];W[of];B[gg];W[oe]))\r\n(;W[fk]C[/"jueyi\u767d28.3%];B[fj];W[kh];B[lg];W[lh];B[mg];W[ni];B[hl];W[jl];B[jj]))\r\n(;B[kg]C[/"jueyi\u9ed172.2%];W[fk];B[fj];W[kh];B[lg];W[lh];B[mg];W[ni];B[hl];W[jl]))\r\n(;B[jf]C[/"jueyi\u9ed172.1% \u5f03\u5b50\u80af\u5b9a\u975e\u767d\u672c\u610f\u5427];W[jg];B[kg];W[fk];B[fi];W[kh];B[lg];W[lh];B[mg];W[mh]))\r\n(;W[gh]C[/"jueyi\u767d28.5%];B[jf];W[jg];B[kg];W[fk];B[fj];W[kh];B[lg];W[lh];B[mg]))\r\n(;B[jf]C[/"jueyi\u9ed169.7%];W[hj];B[gg];W[gh];B[eg];W[cc];B[fh];W[kg];B[eq];W[ep]))\r\n(;W[if]C[/"jueyi\u767d43.6% \u4e0a\u6765\u5c31\u640f\u6740];B[cc];W[cd];B[bc];W[bd];B[eb];W[fb];B[da];W[gc];B[bf])\r\n(;W[fk]C[/"jueyi\u767d43.2% \u8fd9\u4e2a\u8865\u6cd5\u4e0d\u592a\u50cf];B[fj];W[ii];B[cc];W[cd];B[bc];W[bd];B[eb];W[fb];B[da])\r\n(;W[cc]C[/"jueyi\u767d41.8% \u5403\u89d2\u9ed1\u68cb\u8981\u91ce\u86ee\u7684\u9760\u65ad\uff01];B[jf];W[lh];B[jg];W[of];B[eq];W[ep];B[ki];W[cl];B[dl])\r\n(;W[bd]C[\u89d2\u56f4\u5927\u70b9]))\r\n(;B[hf]C[/"jueyi\u9ed157.0% \u767d10\u6ca1\u6562\u76f4\u63a5\u6740];W[if];B[cc];W[cd];B[bc];W[bd];B[eb];W[fb];B[da];W[gc])\r\n(;B[cc]C[/"jueyi\u9ed154.5% \u9ed1\u68cb\u8fd9\u4e2a\u4e0b\u6cd5\u6709\u95ee\u9898\u5427];W[cd];B[bc];W[bd];B[eb];W[fb];B[db];W[ab];B[ac];W[bb]))\r\n(;W[ec]C[/"jueyi\u767d44.2% \u5403\u5927\u732a\u5634\uff0c\u8981\u6740\u6c14\uff0c\u6709\u53ef\u80fd\u6253\u52ab];B[hf];W[if];B[cc];W[cd];B[bc];W[bd];B[eb];W[fb];B[da]))\r\n(;B[ge]C[/"jueyi\u9ed154.9%];W[ec];B[hf];W[if];B[cc];W[cd];B[bc];W[bd];B[eb];W[fb]))\r\n(;W[dd]C[/"jueyi\u767d45.1%];B[ge];W[ec];B[hf];W[if];B[cc];W[cd];B[bc];W[bd];B[eb]))\r\n(;B[fe]C[/"jueyi\u9ed154.1%];W[dd];B[ge];W[ec];B[cc];W[cd];B[bc];W[bd];B[eb];W[fb]))\r\n(;W[dd]C[/"jueyi\u767d60.6% \u8fd9\u6837\u628a\u767d\u68cb\u649e\u539a\u4e86];B[cd];W[gf];B[eg];W[fe];B[ef];W[gg];B[ec];W[fi];B[fj])\r\n(;W[gf]C[/"jueyi\u767d47.5% \u5148\u6273\u518d\u9760\uff0c\u9ed1\u68cb\u8981\u53cd\u51fb\u4e86];B[fe];W[dd];B[ge];W[ec];B[hf];W[ii];B[cc];W[cd];B[bc]))\r\n(;B[hf]C[/"jueyi\u9ed156.6% \u6211\u4ee5\u4e3a\u9ed1\u68cb\u4f1a\u81ea\u5df1\u8fde\u56de\u53bb];W[hg];B[ff];W[dd];B[eg];W[ce];B[gg];W[bg];B[ec];W[gh])\r\n(;B[eq]C[/"jueyi\u9ed155.8% \u9ed1\u68cb\u5c31\u662f\u8981\u5206\u65ad];W[ep];B[hf];W[ef];B[jf];W[jg];B[kg];W[lf];B[kh];W[mg])\r\n(;B[fc]C[/"jueyi\u9ed150.7% \u6258\u8fc7\u767d2\u662f\u597d\u68cb];W[dd];B[ec];W[de];B[eq];W[ep];B[fo];W[fm];B[fp];W[dm]))\r\n(;B[pb]C[/"jueyi\u9ed155.9%];W[je];B[ke];W[me];B[ee];W[ie];B[gf];W[id];B[ic];W[ge]))\r\n(;W[mb]C[/"jueyi\u767d44.6%];B[pb];W[je];B[ke];W[me];B[ee];W[ie];B[gf];W[id];B[ic]))\r\n(;B[nb]C[/"jueyi\u9ed154.7%];W[mb];B[pb];W[je];B[fc];W[dd];B[ec];W[fk];B[ei];W[dg]))\r\n(;W[nb]C[/"jueyi\u767d55.9% \u767d\u68cb\u662f\u89d2\u8981\u6d3b\uff0c\u5916\u9762\u4e5f\u4e0d\u7ed9];B[mc];W[mb];B[lc];W[pb];B[lb];W[me];B[nf];W[lg];B[jf]))\r\n(;W[pc]C[/"jueyi\u767d54.7% \u60f3\u6d3b\u89d2\u5f88\u5bb9\u6613];B[pd];W[nb];B[mc];W[mb];B[lc];W[pb];B[lb];W[me];B[nf]))\r\n(;B[ob]C[/"jueyi\u9ed146.0%];W[pc];B[pd];W[nb];B[mc];W[mb];B[lc];W[pb];B[lb];W[me]))\r\n(;W[md]C[/"jueyi\u767d54.4%];B[ob];W[pc];B[pd];W[nb];B[mc];W[mb];B[lc];W[pb];B[lb]))\r\n(;W[me]C[/"jueyi\u767d48.2% \u6362\u62db\u4e86];B[mf];W[md];B[oc];W[lf];B[nf];W[lg];B[eq];W[ep];B[fo])\r\n(;W[oc]C[/"jueyi\u767d45.7% \u4e0b\u6273\u6211\u4f30\u8ba1\u53ef\u80fd\u6027\u5927\u4e00\u4e9b];B[oe];W[qc];B[nc];W[pd];B[pe];W[pc];B[md];W[qe];B[qf]))\r\n(;B[ne]C[/"jueyi\u9ed152.7% \u4e0d\u592a\u4fbf\u5b9c\uff0c\u7ed9\u9ed1\u68cb\u8d70\u539a\u4e86];W[me];B[oe];W[je];B[ie];W[jf];B[mf];W[kc];B[hh];W[ec])\r\n(;B[ke]C[/"jueyi\u9ed152.0% \u8fd9\u4e2a\u56fe\u4e00\u4eba\u5f00\u6735\u82b1\u592a\u6709\u8da3\u4e86];W[oe];B[ne];W[le];B[md];W[kf];B[nc];W[je];B[eq];W[ep]))\r\n(;B[jd]C[/"jueyi\u9ed146.5% \u4e0d\u7ed9\u9ed15\u70b9\u5230\uff0c\u8981\u53cd\u51fb];W[kf];B[eq];W[ep];B[fo];W[fm];B[fp];W[bq];B[br];W[dn]))\r\n(;W[il]C[/"jueyi\u767d52.6% \u767d1\u9009100\u6b21\u6211\u4e5f\u8d70\u4e0d\u51fa\u6765/"wulk];B[fm];W[cl];B[eq];W[ep]))\r\n(;W[jd]C[/"jueyi\u767d51.3% \u8fd9\u4e2a\u767d1\u770b\u770b\u5c31\u597d/"am];B[kd];W[ic];B[id];W[je];B[hc];W[kc];B[ib];W[bj];B[ck])\r\n(;W[ig]C[/"jueyi\u767d50.0% \u51fa\u5934\u6bd4\u8f83\u6b63\u5e38];B[eq];W[ep];B[bj];W[kd];B[jd];W[kf]))\r\n(;B[bj]C[/"jueyi\u9ed152.6% \u9ed11\u4ee5\u9759\u5236\u52a8];W[if];B[ke];W[hr];B[bq];W[ep];B[eq];W[gm];B[mq];W[mp])\r\n(;B[eq]C[/"jueyi\u9ed152.0% \u5148\u9876\u4e00\u4e0b\u6ca1\u533a\u522b];W[ep];B[bj];W[if];B[hd];W[he];B[ff]))\r\n(;W[bj]C[/"jueyi\u767d50.7%];B[ck];W[ce];B[de];W[bg];B[bf];W[cf];B[dg];W[be];B[eq]))\r\n(;B[gj]C[/"jueyi\u9ed150.2% \u8fd9\u4e2a\u56fe\u767d\u68cb\u5f88\u5b9e\u60e0\u554a];W[bj];B[ck];W[ce];B[de];W[bg];B[bf];W[cf];B[dg];W[be]))\r\n(;B[ej]C[/"jueyi\u9ed146.0%];W[ef];B[ee];W[ff];B[fe];W[dg];B[cf];W[gf];B[ge];W[cd]))\r\n(;W[bg]C[/"jueyi\u767d53.8% \u7edd\u827a\u7684\u767d\u68cb\u8fd9\u4e48\u4fd7\u7684\u4e0b\u6cd5];B[bf];W[dg];B[cf];W[ef];B[ee];W[ff];B[fe];W[gf];B[ge])\r\n(;W[ci]C[/"jueyi\u767d53.6% \u9876\u770b\u7740\u6bd4\u4fd7\u6273\u597d/"tx];B[ej];W[bj];B[ck];W[ce];B[bf];W[ed];B[ff];W[dd];B[bh]))\r\n(;B[ej]C[/"jueyi\u9ed146.9%];W[dd];B[cc];W[gi];B[ff];W[cd];B[ed];W[bc];B[be];W[bd]))\r\n(;W[eh]C[/"jueyi\u767d53.1% \u767d\u68cb\u7684\u4e0b\u6cd5\u6bd4\u8f83\u719f\u6089];B[ej];W[dd];B[cc];W[fd];B[cd];W[fg];B[cm];W[qe];B[pe]))\r\n(;B[dh]C[/"jueyi\u9ed147.0% \u9ed1\u68cb\u9760\u538b\u6269\u5f20];W[di];B[eh];W[bg];B[ce];W[kf];B[fj];W[be];B[cg];W[bi]))\r\n(;W[ch]C[/"jueyi\u767d53.1%];B[dh];W[di];B[eh];W[bg];B[ce];W[kf];B[fj];W[be];B[cg]))\r\n(;W[pj]C[/"jueyi\u767d51.9%];B[dj];W[qe];B[pe];W[qf];B[pg];W[qg];B[pf];W[rd];B[qc]))\r\n(;B[di]C[/"jueyi\u9ed150.5% \u62c6\u8fb9];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jd];B[hc];W[cd]))\r\n(;W[hq]C[/"jueyi\u767d50.0%];B[di];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jd];B[hc]))\r\n(;B[cn]C[/"jueyi\u9ed150.7%];W[eq];B[bp];W[bo];B[bq];W[bn];B[cm];W[co];B[er];W[ck]))\r\n(;W[gr]C[/"jueyi\u767d51.0%];B[eq];W[fp];B[ep];W[eo];B[do];W[bo];B[dn];W[en];B[em]))\r\n(;B[eq]C[/"jueyi\u9ed149.1%];W[ep];B[fr];W[oc];B[kc];W[pe];B[qe];W[pf];B[qf];W[pg]))\r\n(;W[fq]C[/"jueyi\u767d50.8%];B[eq];W[ep];B[fr];W[oc];B[kc];W[pe];B[qe];W[pf];B[qf]))\r\n(;B[dq]C[/"jueyi\u9ed149.3%];W[fq];B[eq];W[ep];B[fr];W[oc];B[kc];W[pe];B[qe];W[pf]))\r\n(;W[cp]C[/"jueyi\u767d50.7%];B[dq];W[fq];B[eq];W[ep];B[fr];W[oc];B[kc];W[pe];B[qe]))\r\n(;B[od]C[/"jueyi\u9ed150.0% \u7edd\u827a\u4e0d\u70b9\u4e09\u4e09];W[pj];B[jc];W[cn];B[mq];W[jq];B[mo];W[lp];B[mp];W[kn]))\r\n(;W[od]C[/"jueyi\u767d50.1%];B[oc];W[nc];B[pc];W[nd];B[qf];W[jd];B[cq];W[dq];B[cp]))\r\n(;B[df]C[/"jueyi\u9ed150.0%];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jd];B[cq];W[dq]))\r\n(;W[pq]C[/"jueyi\u767d50.9% - 6.5\u76ee];B[ce];W[oc];B[pf];W[po];B[cn]))\r\n(;B[dc]C[/"jueyi\u9ed149.2% - 6.5\u76ee];W[pq];B[ce];W[oc];B[pf]))\r\n(;W[dd]C[/"jueyi\u767d50.9% - 6.5\u76ee];B[pp];W[dq];B[od];W[nq]))',
          game_date: "2023-12-04T00:00:00+00:00",
          sgf_name: "\uc2e0\uc9c4\uc11c vs \u8c22\u5c14\u8c6a",
          black_player: "\uc2e0\uc9c4\uc11c",
          white_player: "\u8c22\u5c14\u8c6a",
          black_rank: "P9\u6bb5",
          white_rank: "P9\u6bb5",
          komi: 650.0,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999759/yk2ztez622f7shdhzucp.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-03-09]\r\nPB[\u732b\u72d7]\r\nPW[arbyter73]\r\nBR[8\u7ea7]\r\nWR[8\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pd];W[dp];B[dd];W[qp];B[jd];W[cf];B[df];W[dg];B[ce];W[ef];B[de];W[cg];B[eg];W[ff];B[eh];W[di];B[gg];W[gf];B[dm];W[if];B[gi];W[ei];B[fi];W[hg];B[ej];W[dj];B[dk];W[ck];B[dl];W[ii];B[he];W[hf];B[fd];W[jp];B[oq];W[mp];B[po];W[qo];B[pn];W[qn];B[pm];W[ql];B[lo];W[jn];B[lp];W[fj];B[ek];W[gk];B[hj];W[hk];B[ij];W[ik];B[ji];W[ih];B[jk];W[jl];B[kg];W[jg];B[kf];W[jh];B[kh];W[fg];B[fh];W[gh];B[gj];W[fk];B[dh];W[ch];B[bk];W[cl];B[cj];W[bj];B[ci];W[bi];B[bl];W[cn];B[cm];W[be];B[bd];W[af];B[bg];W[bh];B[aj];W[ag];B[ai])",
          game_date: "2022-03-09T00:00:00+00:00",
          sgf_name: "\u732b\u72d7 vs arbyter73",
          black_player: "\u732b\u72d7",
          white_player: "arbyter73",
          black_rank: "8\u7ea7",
          white_rank: "8\u7ea7",
          komi: 375.0,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999764/stvyhqik5txqegl53smg.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2023-12-05]\r\nPB[\u661f\u96e8R]\r\nPW[\u5927\u98ce\u58020704]\r\nBR[7\u6bb5]\r\nWR[7\u6bb5]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pd];W[dp];B[pq];W[dd];B[pn];W[ql];B[qj];W[pp];B[qp];W[qo];B[po];W[op];B[qq];W[qn];B[pm];W[pl];B[nn];W[qm];B[np];W[qf];B[oj];W[nl];B[mj];W[ll];B[qe];W[pf];B[nd];W[mf];B[kj];W[le];B[lc];W[qc];B[re];W[oc];B[od];W[nc];B[pc];W[pb];B[qb];W[rb];B[ob];W[qa];B[nb];W[qh];B[pi];W[kh];B[mh];W[ni];B[mi];W[nj];B[nk];W[ok];B[nh];W[mk];B[oi];W[nk];B[og];W[of];B[lg];W[je];B[jf];W[ie];B[jc];W[if];B[ih];W[gc];B[jk];W[kp];B[cq];W[dq];B[cp];W[do];B[bn];W[cm];B[gh];W[bm];B[cn];W[dn];B[dr];W[er];B[cr];W[jm];B[hd];W[ic];B[hc];W[ib];B[gd];W[id];B[ke];W[kf];B[kd];W[lf];B[jg];W[kg];B[ji];W[ki];B[lk];W[jh];B[ig];W[ii];B[hi];W[ij];B[hk];W[ik];B[il];W[jj];B[hj];W[ji];B[jl];W[hl];B[im];W[rj];B[ri];W[qi];B[rk];W[pj];B[pk];W[qk];B[pj];W[pg];B[sj];W[kb];B[jb];W[ld];B[kc];W[md];B[mc];W[ng];B[oh];W[mg];B[ne])",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "\u661f\u96e8R vs \u5927\u98ce\u58020704",
          black_player: "\u661f\u96e8R",
          white_player: "\u5927\u98ce\u58020704",
          black_rank: "7\u6bb5",
          white_rank: "7\u6bb5",
          komi: 375.0,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999771/ezb9lfktfzn7ovdzn2hn.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2020-05-20]\r\nPB[\u661f\u96e8R]\r\nPW[bemigod]\r\nBR[7\u6bb5]\r\nWR[7\u6bb5]\r\nKM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]RE[B+R]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[pd];W[dd];B[pq];W[dp];B[fq];W[dm];B[ip];W[po];B[np];W[nc];B[qf];W[pg];B[pf];W[qq];B[qr];W[qp];B[pl];W[pj];B[on];W[rr];B[pr];W[qm];B[pm];W[ql];B[qk];W[pk];B[qn];W[rn];B[pn];W[rm];B[qj];W[pi];B[rh];W[mk];B[nf];W[cc];B[rk];W[rs];B[oc];W[ob];B[pb];W[od];B[pc];W[jd];B[ll];W[dr];B[lk];W[cj];B[mi];W[mh];B[nh];W[mn];B[ml];W[li];B[mj];W[mg];B[ng];W[gc];B[di];W[dj];B[fi];W[ei];B[eh];W[ej];B[hh];W[gi];B[gh];W[fj];B[fh];W[kq];B[jq];W[jo];B[jp];W[kp];B[qo];W[ro];B[pp];W[io];B[hp];W[no];B[mp];W[lo];B[oo];W[im];B[gn];W[ij];B[er];W[eq];B[fr];W[fp];B[gp];W[fo];B[hn];W[jk];B[jg];W[ji];B[kh];W[lj];B[lh];W[nk];B[nj];W[nl];B[nm];W[oj];B[ni];W[mm];B[ph];W[kl];B[ol];W[lm];B[ok];W[mb];B[lc];W[kc];B[le];W[ld];B[md];W[kd];B[mc];W[lb];B[nd];W[cg];B[df];W[ge];B[cf];W[es];B[fs];W[ds];B[kr];W[lr];B[jr];W[lq];B[bg];W[nb];B[ci];W[bj];B[bd];W[bc];B[fm];W[em];B[cd];W[ed];B[bi];W[ad];B[kk];W[hl];B[fn];W[en];B[in];W[jn];B[gl];W[hk];B[el];W[dl];B[aj];W[ak];B[ai];W[bk];B[ke];W[pa];B[qa];W[oa];B[qb];W[je];B[jf];W[jj];B[ie];W[id];B[he];W[hd];B[gf];W[hf];B[if];W[ff];B[gg];W[ef];B[fe];W[gd];B[de];W[ee];B[ae];W[ac];B[bf];W[eg];B[dg];W[nr];B[kb];W[jb];B[mo];W[oq];B[km];W[jl];B[nn];W[ln];B[mq];W[mr];B[or];W[nq];B[ks];W[op];B[sm];W[sl];B[rl];W[sn];B[sk];W[ek];B[fl];W[ih];B[hi];W[ig];B[jh];W[ii];B[hg];W[gj];B[rp];W[rq];B[sp];W[sq];B[hm];W[so];B[no];W[lp];B[sm];W[be];B[ce];W[sl];B[os];W[qs];B[sm];W[ns];B[ls];W[sl];B[dc];W[ec];B[sm];W[af];B[ag];W[sl];B[db];W[cb];B[sm];W[qi];B[ri];W[sl];B[rp];W[sp];B[sm];W[rj];B[sj];W[sl];B[po];W[sm];B[ho];W[jm])",
          game_date: "2020-05-20T00:00:00+00:00",
          sgf_name: "\u661f\u96e8R vs bemigod",
          black_player: "\u661f\u96e8R",
          white_player: "bemigod",
          black_rank: "7\u6bb5",
          white_rank: "7\u6bb5",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999777/yn9b7gjp0le9qeplqtrf.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2023-12-05]\r\nPB[\u4ef2\u5c3c\u95e8\u4e0ba]\r\nPW[\u661f\u96e8R]\r\nBR[6\u6bb5]\r\nWR[7\u6bb5]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[W+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pd];W[dd];B[pq];W[dp];B[fq];W[cn];B[pn];W[eq];B[fp];W[jp];B[lp];W[hp];B[gm];W[fn];B[gn];W[go];B[fo];W[en];B[iq];W[ip];B[gp];W[ho];B[hq];W[jq];B[er];W[dr];B[gr];W[es];B[jr];W[kr];B[ir];W[lq];B[fr];W[mp];B[cm];W[dn];B[bn];W[bo];B[dk];W[ci];B[ei];W[cf];B[np];W[mo];B[bl];W[fl];B[ao];W[ap];B[an];W[bp];B[bj];W[hl];B[eb];W[db];B[ec];W[dc];B[ic];W[qc];B[pc];W[qd];B[qf];W[qe];B[pf];W[pe];B[oe];W[of];B[ne];W[pb];B[ob];W[qb];B[nc];W[rf];B[rg];W[re];B[qh];W[ql];B[qm];W[pl];B[nm];W[nl];B[ml];W[nk];B[mn];W[og];B[ph];W[oh];B[oi];W[ni];B[oj];W[nj];B[qj];W[no];B[om];W[pk];B[rk];W[rl];B[nq];W[pj];B[ri];W[qo];B[qp];W[po];B[oo];W[op];B[on];W[pp];B[ro];W[rp];B[qq];W[rn];B[qn];W[so];B[oq];W[ro];B[rm];W[rq];B[rr];W[sm];B[sr];W[lk];B[sq];W[sl];B[in];W[lo];B[il];W[ik];B[jk];W[jl];B[im];W[ij];B[kl];W[kk];B[jj];W[ji];B[jm];W[kj])",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "\u4ef2\u5c3c\u95e8\u4e0ba vs \u661f\u96e8R",
          black_player: "\u4ef2\u5c3c\u95e8\u4e0ba",
          white_player: "\u661f\u96e8R",
          black_rank: "6\u6bb5",
          white_rank: "7\u6bb5",
          komi: 0.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999792/olihsi6ei5khpxm5hsgp.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-02-18]\r\nPB[zjas98]\r\nPW[\u4e09\u7678]\r\nBR[16\u7ea7]\r\nWR[15\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[W+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[dd];W[dq];B[pd];W[pq];B[qo];W[cf];B[fp];W[cc];B[cd];W[bd];B[dc];W[cb];B[gd];W[ce];B[oo];W[pm];B[om];W[ol];B[nc];W[nm];B[on];W[qm];B[pn];W[rm];B[pp];W[pk];B[oq];W[qq];B[lo];W[lm];B[jn];W[jm];B[hn];W[nk];B[ph];W[lk];B[hl];W[hk];B[do];W[co];B[dn];W[cn];B[gk];W[ik];B[gi];W[hi];B[gf];W[gh];B[fi];W[fh];B[ig];W[hh];B[kg];W[ei];B[ej];W[di];B[dj];W[gj];B[fj];W[hj];B[fl];W[cj];B[ck];W[bj];B[ef];W[ch];B[cm];W[bm];B[bl];W[am];B[dl];W[dp];B[ep];W[eq];B[fq];W[qc];B[qd];W[pc];B[oc];W[rc];B[rd];W[ob];B[nb];W[oa];B[pb];W[qb];B[qa];W[pa];B[ra];W[rb];B[na];W[sa];B[qa];W[ra];B[sc];W[sb];B[sd];W[qi];B[qh];W[rh];B[ni];W[qg];B[pg];W[qf];B[pf];W[qe];B[ri];W[rj];B[rg];W[sh];B[rf];W[pi];B[oi];W[oh];B[og];W[nh];B[mh];W[mi];B[ng];W[li];B[lh];W[kh];B[jh];W[ki];B[ji];W[jj];B[ih];W[ii];B[oj];W[pj];B[pe];W[hg];B[hf];W[if];B[jg];W[ie];B[id];W[jd];B[ic];W[he];B[ge];W[lg];B[lf];W[hd];B[hc];W[je];B[jc];W[kd];B[kc];W[ld];B[lc];W[md];B[mc];W[od];B[mg];W[nd];B[kf];W[eb];B[db];W[da];B[fb];W[ec];B[ed];W[fc];B[gc];W[gb];B[hb];W[fa];B[fd];W[ga];B[ha];W[ba];B[bc];W[bb];B[ac];W[ad];B[dg];W[cg];B[de];W[dh];B[fg];W[eh];B[df];W[eg];B[gg];W[nj];B[fe];W[ok];B[me];W[oh];B[nh];W[si];B[re];W[ro];B[qp];W[rp];B[pr];W[qn];B[mn];W[qr];B[or];W[qs];B[er];W[np];B[nq];W[mp];B[lp];W[op];B[po];W[nn])",
          game_date: "2022-02-18T00:00:00+00:00",
          sgf_name: "zjas98 vs \u4e09\u7678",
          black_player: "zjas98",
          white_player: "\u4e09\u7678",
          black_rank: "16\u7ea7",
          white_rank: "15\u7ea7",
          komi: 0.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999799/busyg38h0cqkfdy52hfq.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2023-10-29]\r\nPB[AB41]\r\nPW[\u4e00\u53ea\u704f\u5b50]\r\nBR[18\u7ea7]\r\nWR[16\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pd];W[dc];B[pp];W[cp];B[eq];W[dq];B[ep];W[dp];B[en];W[dn];B[dm];W[dl];B[el];W[cm];B[em];W[dk];B[cl];W[bl];B[cn];W[ck];B[do];W[bm];B[jp];W[gd];B[pj];W[oq];B[pq];W[op];B[oo];W[no];B[on];W[nn];B[pl];W[pr];B[qr];W[ps];B[np];W[nq];B[mp];W[qs];B[rr];W[po];B[pn];W[qo];B[qp];W[mq];B[lq];W[lp];B[mo];W[kp];B[kq];W[mn];B[lo];W[ko];B[ln];W[lm];B[kn];W[jo];B[jn];W[io];B[ip];W[jq];B[iq];W[jr];B[lr];W[ls];B[mr];W[nr];B[ns];W[or];B[rs];W[ms];B[os])",
          game_date: "2023-10-29T00:00:00+00:00",
          sgf_name: "AB41 vs \u4e00\u53ea\u704f\u5b50",
          black_player: "AB41",
          white_player: "\u4e00\u53ea\u704f\u5b50",
          black_rank: "18\u7ea7",
          white_rank: "16\u7ea7",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999806/v5mvgzadrr0xdq5tfsda.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2023-11-05]\r\nPB[AB41]\r\nPW[\u7edd\u671b\u7684\u65b021]\r\nBR[18\u7ea7]\r\nWR[17\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[1]RE[W+46.00]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pd];W[dp];B[pp];W[cd];B[fq];W[dn];B[dr];W[cq];B[iq];W[nc];B[oc];W[nd];B[qf];W[jd];B[nq];W[qk];B[ci];W[ck];B[cf];W[ed];B[qm];W[qh];B[rk];W[rl];B[ee];W[fd];B[bk];W[bj];B[cj];W[bl];B[bi];W[ak];B[dk];W[dl];B[ek];W[rm];B[rn];W[qn];B[pn];W[qo];B[qp];W[ro];B[rp];W[sn];B[po];W[pm];B[om];W[ql];B[go];W[cr];B[kn];W[er];B[fr];W[dq];B[im];W[fs];B[gs];W[es];B[eq];W[ds];B[hr];W[sp];B[sq];W[so];B[rr];W[ol];B[nm];W[nl];B[ml];W[mk];B[ll];W[lk];B[kk];W[kj];B[jj];W[ji];B[ij];W[od];B[pc];W[pf];B[ih];W[jh];B[jg];W[ii];B[hi];W[hh];B[ig];W[hj];B[gi];W[jk];B[ik];W[kl];B[jl];W[kk];B[km];W[kg];B[hk];W[gg];B[gh];W[hg];B[fg];W[ge];B[gf];W[hf];B[ff];W[he];B[jf];W[kf];B[ki];W[kh];B[li];W[nj];B[ke];W[pe];B[je];W[mg];B[lg];W[lf];B[lh];W[mf];B[le];W[kc];B[qe];W[qg];B[rg];W[rh];B[nb];W[mb];B[lc];W[lb];B[ld];W[ob];B[pb];W[na];B[jc];W[id];B[kd];W[kb];B[jb];W[rf];B[em];W[el];B[fl];W[dm];B[eo];W[en];B[fm];W[fn];B[gn];W[fo];B[dd];W[dc];B[de];W[cc];B[be];W[re];B[bd];W[bc];B[gb];W[ib];B[ic];W[hc];B[ie];W[ja];B[fe];W[qd];B[if];W[gc];B[mj];W[ai];B[lj];W[nk];B[nh];W[fp];B[ep];W[gp];B[hp];W[gq];B[gr];W[hq];B[io];W[do];B[ir];W[bh];B[ch];W[bg];B[cg];W[bf];B[ce];W[ah];B[me];W[nf];B[mh];W[af])",
          game_date: "2023-11-05T00:00:00+00:00",
          sgf_name: "AB41 vs \u7edd\u671b\u7684\u65b021",
          black_player: "AB41",
          white_player: "\u7edd\u671b\u7684\u65b021",
          black_rank: "18\u7ea7",
          white_rank: "17\u7ea7",
          komi: 0.5,
          result: "W+46.00",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999829/yfzhc2wfjxpwxjygyer4.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2023-12-05]\r\nPB[\u9646\u627f\u8f69]\r\nPW[\u65e0\u5fc3\u7231\u68cb]\r\nBR[9\u6bb5]\r\nWR[9\u6bb5]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RE[W+R]TM[60]TC[3]TT[15]AP[foxwq]RL[0]\r\n;B[qd];W[dp];B[cd];W[qp];B[nd];W[ec];B[gd];W[de];B[dd];W[ed];B[ee];W[ce];B[be];W[bf];B[bd];W[fe];B[ef];W[dg];B[eg];W[dh];B[eh];W[di];B[gc];W[ei];B[fd];W[fq];B[bp];W[bn];B[cq];W[dq];B[co];W[cm];B[dm];W[dl];B[cn];W[bl];B[bo];W[em];B[an];W[op];B[kq];W[mq];B[qq];W[ro];B[or];W[lq];B[rq];W[pj];B[ko];W[qg];B[fn];W[en];B[bm];W[dn];B[mo];W[jq];B[kr];W[kp];B[jp];W[lp];B[iq];W[jo];B[ip];W[lo];B[kn];W[ln];B[qn];W[pq];B[pr];W[rp];B[nq];W[np];B[mr];W[ok];B[po];W[pp];B[nl];W[km];B[nk];W[nj];B[mj];W[ni];B[qk];W[ol];B[qi];W[og];B[rh];W[rg];B[rn];W[qh];B[rj];W[rl];B[ql];W[rm];B[sg];W[pd];B[rf];W[qe];B[qf];W[pe];B[re];W[qc];B[rd];W[oc];B[rc];W[eb];B[dc];W[jc];B[qm];W[je];B[nm];W[om];B[nn];W[on];B[mi];W[mh];B[lh];W[mg];B[ll];W[io];B[jk];W[lr];B[ls];W[jr];B[ks];W[ho];B[ir];W[kh];B[oh];W[pi];B[pg];W[ph];B[pf];W[lg];B[of];W[lj];B[kl];W[fh];B[gg];W[gh];B[gf];W[hh];B[ij];W[kj];B[ih];W[hg];B[mk];W[he];B[ge];W[jn];B[hl];W[li];B[gm];W[gp];B[gj];W[hi];B[im];W[fl];B[jm];W[hb];B[gb];W[hk];B[hj];W[gk];B[ik];W[sn];B[rk];W[pb];B[oo];W[no];B[mn];W[mp];B[ng];W[nh];B[mc];W[mb];B[lb];W[nb];B[kc];W[rb];B[bg];W[ld];B[lc];W[cf];B[af];W[sm];B[jb];W[hc];B[hd];W[ic];B[kd];W[le];B[ke];W[kf];B[od];W[sf];B[se];W[ie];B[sb];W[ra];B[oe];W[pc];B[ga];W[ia];B[me];W[dr];B[ii];W[lm];B[hn];W[gl];B[go];W[fo];B[hp];W[gn];B[ig];W[fj];B[go];W[jl];B[gn];W[kk];B[il];W[lk];B[ml];W[in];B[sp];W[fm];B[hm];W[if];B[sq];W[so])",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "\u9646\u627f\u8f69 vs \u65e0\u5fc3\u7231\u68cb",
          black_player: "\u9646\u627f\u8f69",
          white_player: "\u65e0\u5fc3\u7231\u68cb",
          black_rank: "9\u6bb5",
          white_rank: "9\u6bb5",
          komi: 375.0,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999836/arktudtwwbyz4zb2kdpr.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-09-23]\r\nPB[qweasd0130]\r\nPW[jonwick01]\r\nBR[3\u7ea7]\r\nWR[2\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[1]RE[B+0.50]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[pd];W[dq];B[dd];W[qp];B[oq];W[pq];B[op];W[qn];B[pp];W[pr];B[ql];W[pm];B[pl];W[om];B[lq];W[co];B[fq];W[hq];B[gp];W[io];B[hp];W[ip];B[iq];W[hr];B[jq];W[fr];B[er];W[gq];B[fs];W[fp];B[gr];W[go];B[ir];W[hs];B[gs];W[ho];B[eq];W[ep];B[dr];W[cq];B[cr];W[mr];B[mq];W[or];B[lr];W[nr];B[nq];W[ln];B[nn];W[nm];B[mn];W[mm];B[lo];W[kn];B[po];W[ko];B[kp];W[qo];B[ok];W[ks];B[kr];W[is];B[jr];W[on];B[no];W[di];B[dl];W[fi];B[ej];W[ei];B[fj];W[ck];B[cl];W[bk];B[dn];W[do];B[en];W[gl];B[gk];W[fl];B[dk];W[dj];B[el];W[cf];B[ce];W[df];B[gi];W[fk];B[ek];W[hk];B[gj];W[il];B[gg];W[db];B[cc];W[fc];B[cb];W[ec];B[fe];W[ic];B[kc];W[mc];B[nb];W[mb];B[nc];W[md];B[jd];W[hd];B[ie];W[mf];B[ne];W[me];B[nd];W[he];B[if];W[mh];B[ng];W[mg];B[nh];W[mj];B[ni];W[mi];B[jb];W[ib];B[id];W[gb];B[hf];W[jc];B[ke];W[rd];B[qc];W[pf];B[qe];W[nf];B[of];W[og];B[oe];W[nj];B[pg];W[oh];B[oi];W[ph];B[pi];W[qg];B[qh];W[oj];B[pj];W[kb];B[jj];W[jh];B[ih];W[jg];B[kk];W[kl];B[lk];W[nk];B[ll];W[lm];B[rm];W[rn];B[eg];W[ed];B[ee];W[de];B[be];W[bf];B[dc];W[eb];B[bd];W[ca];B[ba];W[bb];B[da];W[ea];B[bc];W[bl];B[bm];W[cn];B[cm];W[bn];B[am];W[an];B[al];W[ak];B[dg];W[cg];B[bi];W[ci];B[bh];W[ch];B[aj];W[cj];B[af];W[ag];B[ae];W[bg];B[ah];W[bj];B[fh];W[ol];B[pk];W[ii];B[jl];W[jm];B[ij];W[hj];B[hi];W[ji];B[ig];W[lc];B[kd];W[jk];B[bq];W[bp];B[aq];W[ap];B[br];W[sm];B[sl];W[sn];B[qm];W[pg];B[rh];W[rg];B[re];W[sh];B[ri];W[rk];B[rl];W[rj];B[si];W[qj];B[qi];W[sf];B[se];W[qk];B[rf];W[sj];B[sk];W[rj];B[sg];W[na];B[oa];W[ma];B[pb];W[kf];B[gd];W[gc];B[ge];W[hc];B[js];W[ms];B[ls];W[fn];B[em];W[fm];B[eo];W[fo];B[jf];W[lf];B[ef];W[ca];B[ab];W[da];B[eh];W[ai];B[dh];W[jp];B[oo];W[le];B[ld];B[pn];B[rc];B[pe];W[kj];B[fd];W[qq];B[qf])",
          game_date: "2022-09-23T00:00:00+00:00",
          sgf_name: "qweasd0130 vs jonwick01",
          black_player: "qweasd0130",
          white_player: "jonwick01",
          black_rank: "3\u7ea7",
          white_rank: "2\u7ea7",
          komi: 0.5,
          result: "B+0.50",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999842/dfnpoaobgkuychvgkuda.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2021-12-19]\r\nPB[quiteso]\r\nPW[\u864e\u95e8\u535756]\r\nBR[11\u7ea7]\r\nWR[10\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pp];W[dp];B[pd];W[hq];B[dd];W[mq];B[nq];W[nr];B[oq];W[or];B[mp];W[pr];B[pq];W[lq];B[lp];W[kp];B[cq];W[cp];B[dq];W[eq];B[er];W[fr];B[fq];W[ep];B[gr];W[fp];B[fs];W[gq];B[hr];W[bq];B[br];W[bp];B[fr];W[iq];B[cf];W[ci];B[dl];W[ei];B[fl];W[kn];B[hk];W[dg];B[df];W[eg];B[fd];W[ge];B[fe];W[gf];B[qf];W[qn];B[qo];W[ro];B[rp];W[po];B[qp];W[rm];B[so];W[rn];B[oo];W[pn];B[on];W[no];B[nn];W[mo];B[lo];W[mn];B[ln];W[mm];B[ko];W[jp];B[jo];W[np];B[op];W[jn];B[io];W[ho];B[in];W[km];B[hn];W[go];B[gn];W[fn];B[gm];W[jl];B[nc];W[mk];B[qr];W[rq];B[rr];W[ol];B[ph];W[oi];B[pi];W[pj];B[lm];W[ll];B[kk];W[kl];B[dj];W[cj];B[ck];W[ek];B[ej];W[el];B[em];W[fk];B[nl];W[ml];B[fj];W[fm];B[gl];W[dm];B[en];W[fo];B[dn];W[cm];B[cn];W[bm];B[bk];W[bn];B[qj];W[jk];B[ij];W[jj];B[ih];W[pk];B[ff];W[fg];B[gg];W[hg];B[gh];W[gi];B[hh];W[fi];B[ii];W[hl];B[hj];W[ik];B[jd];W[gd];B[gc];W[hc];B[gb];W[id];B[je];W[jc];B[ie];W[hb];B[ib];W[jb];B[mb];W[fc];B[fb];W[ec];B[eb];W[dc];B[cc];W[db];B[cb];W[ga];B[da];W[hf];B[kc];W[kb];B[lc];W[lb];B[kr];W[kq];B[la];W[kd];B[ke];W[ld];B[mc];W[le];B[jg])",
          game_date: "2021-12-19T00:00:00+00:00",
          sgf_name: "quiteso vs \u864e\u95e8\u535756",
          black_player: "quiteso",
          white_player: "\u864e\u95e8\u535756",
          black_rank: "11\u7ea7",
          white_rank: "10\u7ea7",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999853/smsheoevjiewsilx9e8v.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2021-12-06]\r\nPB[quiteso]\r\nPW[\u857e\u857e0102]\r\nBR[11\u7ea7]\r\nWR[10\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pp];W[pd];B[dp];W[dd];B[qc];W[pc];B[qd];W[qe];B[re];W[qf];B[rf];W[qg];B[pb];W[ob];B[qb];W[oe];B[cc];W[dc];B[cd];W[de];B[bf];W[ce];B[be];W[db];B[cb];W[jd];B[nb];W[oa];B[mc];W[nc];B[nd];W[oc];B[ld];W[mb];B[lb];W[na];B[jc];W[kc];B[kd];W[kb];B[jb];W[la];B[id];W[je];B[ie];W[ja];B[lc];W[ka];B[ia];W[ib];B[ma];W[ne];B[lf];W[me];B[kg];W[le];B[ke];W[md];B[fg];W[la];B[ka];W[jf];B[ih];W[if];B[hf];W[he];B[ge];W[hd];B[ic];W[hg];B[gf];W[ig];B[hh];W[gd];B[fd];W[gg];B[gc];W[fe];B[hc];W[gh];B[ee];W[fh];B[eg];W[eh];B[dg];W[jh];B[ij];W[ji];B[gj];W[jg];B[kf];W[kh];B[mh];W[jj];B[ik];W[ii];B[hi];W[gi];B[hj];W[jk];B[fj];W[dh];B[cg];W[dj];B[el];W[dl];B[dk];W[ck];B[ek];W[ej];B[dm];W[cl];B[cm];W[il];B[hl];W[im];B[hm];W[kl];B[ho];W[pj];B[bl];W[bk];B[bm];W[ch];B[in];W[kn];B[jm];W[jl];B[km];W[jn];B[lm];W[ln];B[mm];W[mn];B[mk];W[lk];B[mj];W[lj];B[li];W[ki];B[lh];W[nm];B[ml];W[pn];B[qo];W[qn];B[ro];W[po];B[qp];W[rn];B[op];W[no];B[np];W[mp];B[mq];W[lq];B[mr];W[lr];B[nq];W[io];B[hn];W[hp];B[gp];W[hq];B[gq];W[hr];B[gr];W[bh];B[oh];W[ph];B[og];W[oi];B[nh];W[ni];B[mi];W[ok];B[pf];W[pe];B[rg];W[rh];B[hs];W[ir];B[is];W[js];B[gs];W[jq];B[ks];W[jr];B[ls];W[kr];B[ms];W[so];B[sp];W[sn];B[rp];W[sg];B[sf];W[rd];B[sh];W[sd];B[ri];W[qh];B[rc];W[rj];B[sc];W[sj];B[se];W[si];B[sg];W[qi];B[mf];W[nf];B[ng];W[pg];B[of];W[pa];B[qa];W[ma];B[bg];W[nl];B[nj];W[oj];B[ah];W[ai];B[ag];W[al];B[am];W[ak];B[bi];W[bj];B[aj];W[ci];B[cj];W[fi];B[lp];W[mo];B[jo];W[ip];B[jp];W[kp];B[ko];W[lo];B[da];W[ll];B[oo];W[on];B[nk])",
          game_date: "2021-12-06T00:00:00+00:00",
          sgf_name: "quiteso vs \u857e\u857e0102",
          black_player: "quiteso",
          white_player: "\u857e\u857e0102",
          black_rank: "11\u7ea7",
          white_rank: "10\u7ea7",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999857/acgqsheuwq6djhkmmndw.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2021-12-05]\r\nPB[quiteso]\r\nPW[\u8001l\u516d]\r\nBR[13\u7ea7]\r\nWR[13\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[W+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pp];W[qn];B[qo];W[ro];B[rp];W[so];B[np];W[sp];B[rq];W[sq];B[pd];W[rr];B[qr];W[qq];B[qp];W[sr];B[qs];W[rs];B[oq];W[rm];B[dd];W[qf];B[qe];W[re];B[rd];W[se];B[pf];W[qg];B[pg];W[qh];B[ph];W[qi];B[dp];W[cp];B[co];W[bp];B[bo];W[dq];B[ep];W[eq];B[fq];W[fr];B[gq];W[gr];B[hr];W[er];B[hp];W[jq];B[ap];W[bq];B[ao];W[aq];B[en];W[iq];B[hq];W[mq];B[mp];W[lq];B[ir];W[jr];B[jo];W[kp];B[ko];W[lp];B[lo];W[nr];B[jp];W[or];B[pq];W[kr];B[qk];W[rk];B[pl];W[ql];B[pm];W[pn];B[on];W[pk];B[ok];W[pj];B[qm];W[rl];B[po];W[rn];B[oi];W[oj];B[nj];W[ol];B[om];W[nk];B[ni];W[pi];B[lk];W[mk];B[li];W[mj];B[lj];W[mi];B[mh];W[lh];B[mg];W[lg];B[nl];W[ok];B[ml];W[ll];B[mn];W[kl];B[jj];W[jl];B[jh];W[lf];B[mf];W[le];B[me];W[ld];B[md];W[mc];B[nc];W[mb];B[nb];W[kc];B[jd];W[jc];B[id];W[ic];B[ma];W[lb];B[la];W[ka];B[na];W[hd];B[he];W[gd];B[ec];W[fc];B[fb];W[gb];B[fd];W[gc];B[eb];W[fe];B[ed];W[ge];B[ee];W[ie];B[hf];W[je];B[hg];W[ff];B[ef];W[cf];B[dg];W[cg];B[dh];W[ch];B[ce];W[be];B[bd];W[ae];B[ad];W[bf];B[ci];W[bi];B[cj];W[bj];B[bk];W[ck];B[dk];W[cl];B[bl];W[dl];B[ek];W[bm];B[ei];W[fg];B[gi];W[gh];B[gg];W[fh];B[fi];W[hh];B[ig];W[hi];B[hk];W[ik];B[ij];W[hj];B[il];W[jk];B[kf];W[hl];B[gk];W[im];B[gl];W[gm];B[fm];W[gn];B[jf];W[in];B[ip];W[fn];B[eo];W[ho];B[go];W[fl];B[em];W[el];B[fk];W[al];B[cm];W[ak];B[dm];W[bk];B[bn];W[jn];B[kn];W[km];B[mm];W[hn];B[ih];W[ii];B[ji];W[kg];B[kh];W[jg];B[if];W[kd];B[gj];W[df];B[eg];W[de];B[cd];W[bh];B[os];W[ns];B[ps];W[nq];B[op];W[pr];B[qq];W[gs];B[ga];W[hb];B[ha];W[ia];B[fa];W[fo];B[fp];W[am];B[dn];W[cr];B[js];W[ks];B[is];W[lr];B[lm];W[kk];B[sd];W[rf];B[eh];W[qc];B[qd];W[rc];B[qa];W[pb];B[pa];W[qb];B[ra];W[oc];B[nd];W[od];B[oe];W[sc];B[ob];W[pc];B[nh];W[pe])",
          game_date: "2021-12-05T00:00:00+00:00",
          sgf_name: "quiteso vs \u8001l\u516d",
          black_player: "quiteso",
          white_player: "\u8001l\u516d",
          black_rank: "13\u7ea7",
          white_rank: "13\u7ea7",
          komi: 375.0,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999863/ab4tizejdwopxxcnyrr8.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2021-11-23]\r\nPB[quiteso]\r\nPW[Gxu24]\r\nBR[14\u7ea7]\r\nWR[13\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[1]RE[W+14.50]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pp];W[dd];B[pd];W[dp];B[cq];W[cp];B[dq];W[eq];B[er];W[fr];B[fq];W[ep];B[gr];W[dr];B[fs];W[cr];B[fp];W[fo];B[bq];W[br];B[go];W[fn];B[gn];W[fm];B[cf];W[ce];B[df];W[gd];B[dj];W[ck];B[dk];W[dl];B[cl];W[cm];B[bl];W[bk];B[ak];W[bm];B[al];W[aj];B[bj];W[am];B[cj];W[bi];B[ci];W[bh];B[cg];W[ch];B[dh];W[bg];B[bf];W[be];B[ag];W[ai];B[ae];W[ad];B[af];W[bd];B[fk];W[fl];B[gk];W[gm];B[hm];W[nc];B[oc];W[nd];B[pf];W[jc];B[qn];W[qq];B[pq];W[qp];B[qo];W[pr];B[or];W[qr];B[rp];W[rq];B[so];W[oq];B[nr];W[nq];B[mr];W[mq];B[lr];W[no];B[lq];W[nm];B[oo];W[lo];B[ok];W[mk];B[om];W[nl];B[kp];W[ko];B[jo];W[jn];B[io];W[im];B[il];W[hl];B[hk];W[hn];B[ho];W[ik];B[jl];W[ij];B[mo];W[mn];B[kk];W[lj];B[km];W[kn];B[rs];W[ff];B[eg];W[fg];B[ef];W[fi];B[ei];W[hi];B[gi];W[gh];B[gj];W[nj];B[oj];W[ni];B[oh];W[oi];B[pi];W[pj];B[qj];W[pk];B[pl];W[ol];B[qk];W[nh];B[og];W[mf];B[ng];W[mg];B[ne];W[me];B[nb];W[mb];B[nf];W[ob];B[pb];W[na];B[od];W[kj];B[ee];W[ed];B[fe];W[ge];B[gg];W[hg];B[eh];W[fh];B[fj];W[lp];B[np];W[nn];B[on];W[nk];B[pa];W[oa];B[fd];W[fc];B[jj];W[ji];B[jk];W[hj];B[in];W[ll];B[el];W[em];B[ek];W[ds];B[es];W[de];B[op];W[mp];B[jq];W[hm];B[gl];W[lk];B[ah];W[ak])",
          game_date: "2021-11-23T00:00:00+00:00",
          sgf_name: "quiteso vs Gxu24",
          black_player: "quiteso",
          white_player: "Gxu24",
          black_rank: "14\u7ea7",
          white_rank: "13\u7ea7",
          komi: 0.5,
          result: "W+14.50",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999871/gvxotduoczgels7lr8rt.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2021-12-05]\r\nPB[quiteso]\r\nPW[Fat2020]\r\nBR[13\u7ea7]\r\nWR[13\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pp];W[dd];B[dp];W[pd];B[qc];W[pc];B[qd];W[qe];B[re];W[qf];B[rf];W[qb];B[qg];W[rc];B[rd];W[sb];B[og];W[pg];B[pf];W[pe];B[ph];W[of];B[ng];W[nf];B[mf];W[me];B[ne];W[oe];B[le];W[nd];B[lf];W[ld];B[kd];W[lc];B[kc];W[kb];B[jb];W[mb];B[je];W[gd];B[cc];W[id];B[jc];W[ic];B[ib];W[hb];B[ie];W[he];B[dc];W[ec];B[cd];W[de];B[eb];W[fc];B[fb];W[gb];B[ce];W[ch];B[df];W[ef];B[ee];W[ed];B[eg];W[fe];B[dg];W[fg];B[ei];W[cj];B[cn];W[cl];B[di];W[ci];B[bg];W[cg];B[bf];W[cf];B[dk];W[ck];B[dl];W[dj];B[ek];W[ej];B[gk];W[eh];B[fj];W[fi];B[gi];W[dh];B[gh];W[gg];B[hg];W[hf];B[ig];W[if];B[jf];W[qo];B[po];W[qm];B[qp];W[qn];B[pn];W[pm];B[qj];W[qk];B[pj];W[pk];B[nl];W[ol];B[nm];W[nk];B[no];W[mp];B[jp];W[kp];B[jo];W[ko];B[kq];W[lq];B[jq];W[kn];B[kl];W[jn];B[in];W[jl];B[jm];W[im];B[km];W[ik];B[ki];W[kk];B[mm];W[ll];B[lm];W[np];B[lr];W[mr];B[kr];W[oq];B[pq];W[pr];B[nr];W[or];B[ms];W[mq];B[qr];W[os];B[ns];W[mo];B[nn];W[mk];B[hm];W[il];B[lo];W[ln];B[mn];W[lp];B[op];W[rr];B[qs];W[rq];B[ps];W[rp];B[rk];W[rl];B[sl];W[rj];B[ri];W[sk];B[oj];W[ok];B[mj];W[nj];B[lj];W[lk];B[kj];W[ni];B[jj];W[jk];B[hj];W[ij];B[ii];W[hl];B[gm];W[gl];B[fl];W[fm];B[ho];W[em];B[dm];W[fo];B[do];W[fp];B[eq];W[hp];B[go];W[gp];B[io];W[fq];B[er];W[fr];B[fs];W[gs];B[es];W[hr];B[iq];W[ir];B[is];W[js];B[jr];W[hs];B[ks];W[hq];B[gn];W[fn];B[cm];W[jh];B[kh];W[ih];B[hh];W[mh];B[mg];W[lh];B[kg];W[oh];B[nh];W[oi];B[pi];W[pg];B[qh];W[pf];B[jg];W[sj];B[si];W[rg];B[rh];W[sg];B[sf];W[ia];B[ja];W[sd];B[sh];W[ha];B[ka];W[lb])",
          game_date: "2021-12-05T00:00:00+00:00",
          sgf_name: "quiteso vs Fat2020",
          black_player: "quiteso",
          white_player: "Fat2020",
          black_rank: "13\u7ea7",
          white_rank: "13\u7ea7",
          komi: 375.0,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999874/om1lb3ptwjxpz2zgtiiy.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2021-12-21]\r\nPB[quiteso]\r\nPW[DeadKnigh]\r\nBR[11\u7ea7]\r\nWR[10\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0]\r\n;B[pp];W[pd];B[dp];W[dd];B[qc];W[qd];B[pc];W[oc];B[ob];W[nc];B[nb];W[mc];B[rd];W[re];B[rc];W[oe];B[cc];W[dc];B[cd];W[ce];B[be];W[cf];B[bf];W[cg];B[db];W[eb];B[cb];W[ee];B[qn];W[qo];B[po];W[qp];B[qq];W[rq];B[rn];W[rp];B[pq];W[qr];B[pr];W[qs];B[so];W[sp];B[sr];W[pn];B[rr];W[ro];B[sq];W[fq];B[cn];W[dr];B[cq];W[cr];B[dk];W[iq];B[eq];W[er];B[fp];W[gq];B[gp];W[bq];B[hp];W[dq];B[ep];W[cp];B[hq];W[hr];B[gr];W[fr];B[ir];W[gs];B[jq];W[ip];B[io];W[bg];B[jp];W[cj];B[mn];W[ck];B[dl];W[cl];B[cm];W[qh];B[rf];W[se];B[qj];W[qf];B[nj];W[ql];B[pi];W[ph];B[ni];W[qi];B[pj];W[rj];B[rk];W[sj];B[sk];W[rh];B[qk];W[on];B[ml];W[jc];B[ei];W[dj];B[ej];W[ek];B[fk];W[el];B[dm];W[fl];B[hj];W[gk];B[gj];W[fj];B[gi];W[fi];B[fh];W[fk];B[eh];W[gh];B[hk];W[hl];B[il];W[hm];B[im];W[ik];B[ij];W[jk];B[jj];W[kk];B[kj];W[in];B[hn];W[gn];B[jn];W[em];B[en];W[fn];B[eo];W[gm];B[hh];W[gg];B[hg];W[fg];B[hf];W[eg];B[he];W[hc];B[jf];W[je];B[kf];W[ke];B[le];W[mg];B[mf];W[ng];B[lg];W[mh];B[lh];W[mi];B[mj];W[li];B[ki];W[lj];B[lk];W[ld];B[kl])",
          game_date: "2021-12-21T00:00:00+00:00",
          sgf_name: "quiteso vs DeadKnigh",
          black_player: "quiteso",
          white_player: "DeadKnigh",
          black_rank: "11\u7ea7",
          white_rank: "10\u7ea7",
          komi: 0.5,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999878/nmynhxhdon0lsx1jz9do.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-03-30]\r\nPB[jonwick01]\r\nPW[\u5c71\u91ce\u6e38\u4fa0]\r\nBR[4\u7ea7]\r\nWR[4\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[2]RE[B+0.02]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[qd];W[pp];B[dc];W[dp];B[oc];W[gq];B[ce];W[qm];B[jd];W[md];B[lc];W[mc];B[kc];W[od];B[pd];W[oe];B[qg];W[nc];B[ob];W[pf];B[qf];W[pg];B[pi];W[ph];B[qh];W[oi];B[pj];W[oj];B[gd];W[mq];B[qq];W[qp];B[pq];W[oq];B[or];W[nr];B[rp];W[pr];B[qr];W[os];B[ro];W[qn];B[rn];W[rm];B[sr];W[sn];B[rs];W[qo];B[bp];W[cp];B[co];W[bq];B[bn];W[ap];B[bo];W[cl];B[dm];W[cj];B[ch];W[ci];B[bh];W[bi];B[fn];W[cm];B[dn];W[dl];B[el];W[ek];B[fl];W[fk];B[eh];W[ei];B[fh];W[dh];B[dg];W[di];B[cg];W[hf];B[jf];W[ig];B[ng];W[og];B[kh];W[nf];B[fi];W[fj];B[ii];W[hi];B[hh];W[ih];B[ji];W[gh];B[hj];W[gi];B[gj];W[hg];B[ef];W[fg];B[eg];W[ff];B[fe];W[gf];B[gk];W[dk];B[gl];W[jp];B[fq];W[eq];B[gr];W[fr];B[fp];W[er];B[hp];W[hq];B[iq];W[hr];B[ir];W[gs];B[ip];W[jq];B[kr];W[jr];B[js];W[lq];B[gp];W[kq];B[rk];W[rl];B[qk];W[pl];B[jo];W[ko];B[jn];W[kn];B[km];W[lm];B[kl];W[ll];B[lk];W[mk];B[mj];W[nk];B[kk];W[nh];B[ie];W[ge];B[fd];W[mg];B[kg];W[ke];B[je];W[kf];B[le];W[lf];B[ld];W[me];B[ak];W[bk];B[al];W[aj];B[am];W[do];B[cn];W[lg];B[li];W[nb];B[lb];W[qe];B[re];W[pe];B[oa];W[rd];B[rc];W[pc];B[qc];W[pb];B[qb];W[na];B[pa];W[pk];B[qj];W[mi];B[nj];W[ni];B[lj];W[lh];B[ql];W[sk];B[sj];W[sl];B[ri];W[so];B[sp];W[sm];B[lr];W[mr];B[ls];W[ms];B[hs];W[gr];B[is];W[ks];B[ep];W[eo];B[en];W[fo];B[go];W[cq];B[gn];W[aq];B[dr];W[cr];B[es];W[dq];B[cs];W[bs];B[ah];W[ai];B[he];W[jg];B[jh];W[kd];B[la];W[mb];B[jc];W[ps];B[qs];W[rq];B[sq];W[rf];B[sd];W[rg];B[rh];W[sh];B[sg];W[sf];B[se];W[ma];B[op];W[pm];B[np];W[nq];B[ln];W[ml];B[lo];W[kp];B[ao];W[ds];B[bm];W[bl];B[bc];W[jm];B[ij];W[in];B[io];W[il];B[hm];W[im];B[ik];W[jk];B[jl];W[kj];B[jj];W[mn])",
          game_date: "2022-03-30T00:00:00+00:00",
          sgf_name: "jonwick01 vs \u5c71\u91ce\u6e38\u4fa0",
          black_player: "jonwick01",
          white_player: "\u5c71\u91ce\u6e38\u4fa0",
          black_rank: "4\u7ea7",
          white_rank: "4\u7ea7",
          komi: 375.0,
          result: "B+0.02",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999884/bzn6ltquj4bbx3ziinrj.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-04-22]\r\nPB[jonwick01]\r\nPW[\u5c0f\u5b501205]\r\nBR[2\u7ea7]\r\nWR[2\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[qd];W[pp];B[dc];W[cp];B[oc];W[eq];B[be];W[qm];B[jd];W[cd];B[dd];W[ce];B[cf];W[de];B[fc];W[df];B[cg];W[cc];B[dj];W[fd];B[gd];W[ed];B[ec];W[ge];B[hd];W[he];B[ie];W[dg];B[ch];W[gg];B[cm];W[ck];B[dk];W[cl];B[dl];W[cj];B[di];W[bm];B[cn];W[bn];B[dp];W[co];B[do];W[dn];B[dm];W[en];B[dq];W[eo];B[cq];W[bo];B[er];W[fq];B[bq];W[fr];B[ds];W[bp];B[ci];W[bi];B[bh];W[bj];B[ap];W[ao];B[aq];W[ak];B[pr];W[nq];B[qq];W[rp];B[qp];W[qo];B[po];W[op];B[ro];W[qn];B[rq];W[rn];B[sp];W[pj];B[qh];W[qi];B[ph];W[ni];B[ig];W[lg];B[me];W[ji];B[jp];W[iq];B[ep];W[fp];B[fo];W[fn];B[ho];W[go];B[ip];W[jq];B[jm];W[in];B[jn];W[io];B[hq];W[jo];B[ko];W[hn];B[kq];W[hr];B[mm];W[lp];B[kp];W[ln];B[lo];W[mn];B[mo];W[nn];B[kn];W[lm];B[hl];W[fl];B[fk];W[gk];B[gl];W[fm];B[fj];W[gj];B[fi];W[gi];B[gh];W[hh];B[fh];W[hg];B[hi];W[hj];B[ii];W[ij];B[ih];W[bd];B[af];W[if];B[jf];W[hf];B[kg];W[cb];B[jj];W[jk];B[kj];W[ik];B[kk];W[il];B[im])",
          game_date: "2022-04-22T00:00:00+00:00",
          sgf_name: "jonwick01 vs \u5c0f\u5b501205",
          black_player: "jonwick01",
          white_player: "\u5c0f\u5b501205",
          black_rank: "2\u7ea7",
          white_rank: "2\u7ea7",
          komi: 375.0,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999888/kvaek03bxfjyvavwyldn.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-03-13]\r\nPB[462205562]\r\nPW[jonwick01]\r\nBR[6\u7ea7]\r\nWR[6\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[W+R]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[pp];W[cd];B[pd];W[dq];B[bq];W[cq];B[cp];W[dp];B[co];W[br];B[bp];W[gq];B[cm];W[lq];B[jq];W[qq];B[pq];W[qp];B[qr];W[rr];B[pr];W[po];B[mq];W[lp];B[mp];W[lo];B[oo];W[pn];B[rm];W[rn];B[qm];W[io];B[hp];W[en];B[ho];W[im];B[ip];W[jo];B[hq];W[gr];B[fo];W[eo];B[fp];W[fq];B[hm];W[mo];B[no];W[lr];B[mr];W[nm];B[qn];W[qo];B[ro];W[rp];B[sn];W[om];B[ck];W[ec];B[cf];W[di];B[ci];W[ch];B[dj];W[bi];B[cj];W[eh];B[ef];W[ej];B[ek];W[gd];B[fd];W[fc];B[ed];W[ge];B[ff];W[gf];B[fg];W[fk];B[el];W[fj];B[fl];W[hh];B[fh];W[gi];B[fi];W[ei];B[cg];W[bg];B[bf];W[dd];B[de];W[fe];B[ee];W[dg];B[gj];W[gk];B[hj];W[hk];B[gh];W[hi];B[hg];W[gg];B[ij];W[ig];B[il];W[ik];B[jk];W[jl];B[hl];W[jj];B[ii];W[ih];B[ji];W[kk];B[hf];W[if];B[he];W[hd];B[ie];W[je])",
          game_date: "2022-03-13T00:00:00+00:00",
          sgf_name: "462205562 vs jonwick01",
          black_player: "462205562",
          white_player: "jonwick01",
          black_rank: "6\u7ea7",
          white_rank: "6\u7ea7",
          komi: 375.0,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1702266059/ajivd7qqhftagmwzngek.png",
          suspended: true,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-04-04]\r\nPB[jonwick01]\r\nPW[\u5929\u6daf010269]\r\nBR[4\u7ea7]\r\nWR[3\u7ea7]\r\nKM[0]HA[1]RU[Chinese]AP[GNU Go:3.8]RN[1]RE[B+8.50]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[qd];W[pp];B[dc];W[dq];B[oc];W[dn];B[ce];W[ck];B[jc];W[ch];B[cp];W[dp];B[co];W[cq];B[do];W[cn];B[eo];W[fp];B[fo];W[gp];B[jq];W[iq];B[jo];W[ip];B[jp];W[mq];B[fm];W[mo];B[cl];W[bl];B[bm];W[cm];B[dl];W[bn];B[bk];W[am];B[cj];W[bo];B[bp];W[ao];B[mr];W[lr];B[kr];W[nr];B[lq];W[ms];B[ir];W[hr];B[js];W[lp];B[gr];W[hs];B[is];W[hq];B[ep];W[eq];B[io];W[ho];B[hn];W[go];B[gn];W[fr];B[lm];W[nm];B[rp];W[qn];B[qq];W[pq];B[rn];W[qo];B[ro];W[qr];B[rr];W[pr];B[qm];W[qp];B[qk];W[pm];B[pl];W[ol];B[ok];W[nk];B[oj];W[rq];B[sq];W[rs];B[sr];W[qq];B[qg];W[kn];B[jm];W[km];B[jl];W[kl];B[je];W[fh];B[dk];W[cf];B[de];W[df];B[ef];W[eg];B[ff];W[di];B[bi];W[bh];B[dj];W[ej];B[fk];W[fj];B[nj];W[mk];B[br];W[bq];B[aq];W[ap];B[aj];W[al];B[ak];W[em];B[el];W[fn];B[gm];W[en];B[oe];W[mj];B[mi];W[li];B[lh];W[ki];B[kh];W[jk];B[ik];W[ij];B[jj];W[kk];B[hj];W[ii];B[hl];W[hf];B[hd];W[ge];B[ec];W[fe];B[ee];W[fc];B[bf];W[bg];B[ae];W[gc];B[hc];W[jf];B[kf];W[jg];B[lf];W[ie];B[jd];W[jh];B[hi];W[hh];B[gg];W[hg];B[gh];W[gi];B[dg];W[cg];B[gj];W[fi];B[eh];W[dh];B[mh];W[hb];B[ib];W[ga];B[fb];W[gb];B[eb];W[id];B[ic];W[gf];B[fg];W[ei];B[ko];W[lo];B[kq];W[jn];B[in];W[ek];B[gk];W[ag];B[bc];W[af];B[be];W[ks];B[ls];W[rm];B[ql];W[ks];B[pn];W[om];B[ls];W[sp];B[rl];W[ss];B[mr];W[im];B[il];W[lr];B[if];W[he];B[mr];W[so];B[sm];W[lr];B[ih];W[ig];B[mr];W[qc];B[ob];W[lr];B[ks];W[mr];B[rd];W[ci];B[ai];W[fa];B[ea];W[ed];B[dd];W[kg];B[lg];W[ja];B[ia];W[gd];B[sn];W[sq];B[pd];W[ha];B[ke];W[fd];B[ah];W[dm];B[oh];W[ji];B[hm];W[kj];W[ln];W[kp];B[sl];W[gq];B[rc];W[gs])",
          game_date: "2022-04-04T00:00:00+00:00",
          sgf_name: "jonwick01 vs \u5929\u6daf010269",
          black_player: "jonwick01",
          white_player: "\u5929\u6daf010269",
          black_rank: "4\u7ea7",
          white_rank: "3\u7ea7",
          komi: 0.5,
          result: "B+8.50",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999894/qgvjt9gxsjeuuljujot8.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-09-17]\r\nPB[jonwick01]\r\nPW[V754224921]\r\nBR[1\u7ea7]\r\nWR[1\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[1]RE[W+3.25]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[qd];W[dd];B[pq];W[dp];B[qo];W[od];B[oc];W[nc];B[pc];W[md];B[pg];W[qe];B[re];W[qf];B[qg];W[rf];B[rd];W[pd];B[rg];W[sf];B[pe];W[pf];B[oe];W[of];B[nd];W[pi];B[rj];W[ri];B[qi];W[qj];B[ph];W[oi];B[oh];W[ne];B[nf];W[od];B[pd];W[ng];B[mf];W[og];B[nh];W[mg];B[ni];W[qh];B[nk];W[ol];B[ql];W[pk];B[lj];W[lf];B[mm];W[on];B[mp];W[rk];B[qk];W[rl];B[qm];W[op];B[oq];W[pp];B[qp];W[mo];B[np];W[no];B[lp];W[lo];B[kp];W[pn];B[qn];W[lm];B[ll];W[km];B[kl];W[dj];B[il];W[jm];B[jh];W[jf];B[gk];W[dm];B[cc];W[cd];B[dc];W[ec];B[eb];W[fc];B[fb];W[gc];B[bd];W[be];B[bc];W[cf];B[cq];W[cp];B[dq];W[eq];B[er];W[fr];B[fq];W[ep];B[gr];W[dr];B[fs];W[cr];B[bq];W[br];B[fp];W[fo];B[go];W[fn];B[ee];W[ff];B[dh];W[ei];B[gh];W[eh];B[hf];W[he];B[if];W[ie];B[jg];W[kg];B[ge];W[gf];B[fe];W[ed];B[gg];W[fg];B[gb];W[hc];B[hb];W[ib];B[ic];W[jc];B[gn];W[io];B[ip];W[gm];B[hm];W[gl];B[hl];W[fk];B[gj];W[fj];B[bp];W[bo];B[co];W[ap];B[fm];W[em];B[eo];W[aq];B[en];W[fl];B[cn];W[cm];B[bn];W[bm];B[nb];W[mc];B[mb];W[lb];B[ia];W[jb];B[kh];W[lh];B[li];W[hp];B[iq];W[ho];B[jo];W[in];B[nm];W[om];B[la];W[ka];B[ob];W[ma];B[na];W[gi];B[hi];W[fi];B[hj];W[jl];B[jk];W[nl];B[ml];W[hq];B[hr];W[rh];B[sg];W[sj];B[rm];W[po];B[se];W[fh];B[hg];W[ok];B[nj];W[me];B[hd];W[id];B[cg];W[bg];B[am];W[al];B[an];W[bl];B[ao];W[bp];B[ln];W[kn];B[mn];W[ko];B[jp];W[fn];B[fo];W[sh];B[oj];W[pj];B[lc];W[mh];B[la];W[dn];B[do];W[ma];B[jn];W[im];B[la];W[kb];B[ma];W[sm];B[sn];W[sl];B[qq];W[mi];B[mj];W[hn];B[ik];W[nn];B[nd];W[ha];B[ga];W[od];B[jd];W[je];B[nd];W[rn];B[ro];W[od];B[ae];W[af];B[ad];W[gq];B[ds];W[cs];B[es];W[gp];B[fr];W[fm];B[ha];W[ja];B[kd];W[gd];W[pl];B[nd];W[so];B[sp];W[od];B[kc];W[ic];B[nd];W[ir];B[jr];W[od];B[de];W[ce];B[nd];W[is];B[js];W[od];B[kf];W[ke];B[nd];W[hs];B[gs];W[od];B[pm];W[nd];W[df];W[ld];B[db])",
          game_date: "2022-09-17T00:00:00+00:00",
          sgf_name: "jonwick01 vs V754224921",
          black_player: "jonwick01",
          white_player: "V754224921",
          black_rank: "1\u7ea7",
          white_rank: "1\u7ea7",
          komi: 375.0,
          result: "W+3.25",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999899/asuh4c9fulopcixrxqi6.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-03-15]\r\nPB[jonwick01]\r\nPW[180941375]\r\nBR[5\u7ea7]\r\nWR[5\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[qd];W[dd];B[pq];W[dp];B[qo];W[qf];B[oc];W[qj];B[ql];W[qm];B[pm];W[qn];B[pn];W[rl];B[qk];W[rk];B[pj];W[pi];B[qi];W[rj];B[oi];W[ph];B[ok];W[ro];B[qp];W[rp];B[rq];W[oh];B[fp];W[fq];B[gq];W[gp];B[fo];W[ep];B[gr];W[fr];B[hp];W[ni];B[go];W[oj];B[pk];W[nk];B[lm];W[nm];B[nn];W[mn];B[mm];W[on];B[no];W[ol];B[pl];W[po];B[pp];W[oo];B[op];W[om];B[mo];W[gc];B[cc];W[cd];B[dc];W[ec];B[eb];W[fb];B[da];W[bb];B[bd];W[bc];B[be];W[ed];B[cb];W[ba];B[cg];W[ci];B[dk];W[bk];B[di];W[ch];B[dh];W[bg];B[cf];W[bf];B[ce];W[dj];B[ej];W[cj];B[eg];W[ek];B[dl];W[ei];B[eh];W[fi];B[fj];W[gi];B[gg];W[kn];B[ln];W[km];B[lk];W[kl];B[fk];W[ll];B[ml];W[mk];B[lj];W[kk];B[kj];W[jj];B[kh];W[ji];B[lh];W[jh];B[hi];W[gj];B[he];W[hh];B[kc];W[hg];B[gd];W[hc];B[hf];W[gh];B[fg];W[fe];B[gf];W[id];B[jf];W[kg];B[lg];W[kf];B[je];W[lf];B[jg];W[mf];B[jd];W[kp];B[il];W[ik];B[ko];W[jo];B[lo];W[ip];B[dr];W[dq];B[cq];W[cp];B[bq];W[bp];B[er];W[eq];B[fs];W[es];B[ds];W[aq];B[hl];W[hk];B[jn];W[in];B[jm];W[im];B[jl];W[gl];B[jk];W[el];B[fl];W[em];B[fm];W[fn];B[en];W[dm];B[dn];W[cm];B[gn];W[gk];B[ii];W[gm];B[fn];W[hm];B[kq];W[jq];B[lq];W[kr];B[ir];W[lr];B[lp];W[iq];B[jr];W[hq];B[hr];W[ho];B[gp];W[mr];B[hn];W[io];B[ig];W[ih];B[cn];W[bm];B[bn];W[cr];B[br])",
          game_date: "2022-03-15T00:00:00+00:00",
          sgf_name: "jonwick01 vs 180941375",
          black_player: "jonwick01",
          white_player: "180941375",
          black_rank: "5\u7ea7",
          white_rank: "5\u7ea7",
          komi: 375.0,
          result: "B+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999905/jyfcxcuewoqb9aq6fex0.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-03-13]\r\nPB[gzhtt]\r\nPW[jonwick01]\r\nBR[6\u7ea7]\r\nWR[6\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[W+R]TM[60]TC[3]TT[20]AP[foxwq]RL[0]\r\n;B[pp];W[cd];B[dp];W[pc];B[qd];W[nd];B[pd];W[qc];B[od];W[oc];B[ne];W[md];B[me];W[qh];B[qg];W[pg];B[qf];W[of];B[ph];W[oh];B[pi];W[oe];B[qi];W[rh];B[ri];W[mh];B[le];W[fc];B[ld];W[lc];B[kc];W[lb];B[jd];W[ic];B[kb];W[nb];B[rc];W[rb];B[rd];W[jc];B[pm];W[qo];B[qp];W[qm];B[ql];W[pl];B[qk];W[pn];B[om];W[on];B[rm];W[qn];B[ol];W[rn];B[np];W[rp];B[rq];W[sq];B[rr];W[rl];B[rk];W[sm];B[kq];W[hq];B[fq];W[ho];B[cn];W[cq];B[dq];W[cp];B[co];W[dr];B[er];W[br];B[ds];W[cs];B[bo];W[es];B[fs];W[ds];B[bp];W[bq];B[ck];W[ch];B[ec];W[fd];B[ed];W[fe];B[de];W[ce];B[df];W[cf];B[cb];W[dg];B[ef];W[gf];B[fg];W[hg];B[fh];W[kg];B[ib];W[hb];B[hc];W[hd];B[jb];W[id];B[je];W[kf];B[bc];W[bj];B[cj];W[bk];B[ci];W[bi];B[bl];W[di];B[ej];W[cl];B[bm];W[dj];B[dk];W[ek];B[dl];W[ei];B[fj];W[fi];B[gj];W[gi];B[gl];W[bd];B[eb];W[fb];B[ab];W[ba];B[ca];W[dc];B[gb];W[gc];B[ea];W[db];B[jm];W[kr];B[lr];W[jr];B[kp];W[eo];B[do];W[fp];B[gq];W[gp];B[ip];W[gs];B[fr];W[hp];B[hs];W[hr];B[gr];W[is];B[iq];W[fm];B[el];W[jn];B[kn];W[ks];B[ir];W[io];B[jo];W[hm];B[hl];W[im];B[il];W[in];B[eq];W[gn];B[gm];W[em];B[en];W[fn];B[ep];W[dn])",
          game_date: "2022-03-13T00:00:00+00:00",
          sgf_name: "gzhtt vs jonwick01",
          black_player: "gzhtt",
          white_player: "jonwick01",
          black_rank: "6\u7ea7",
          white_rank: "6\u7ea7",
          komi: 375.0,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999912/hpsaa8x7imnbkqi9umwh.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2023-12-05]\r\nPB[gopro]\r\nPW[\u65e0\u5fc3\u7231\u68cb]\r\nBR[9\u6bb5]\r\nWR[9\u6bb5]\r\nKM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]RE[W+R]TM[60]TC[3]TT[15]AP[foxwq]RL[0]\r\n;B[qd];W[dp];B[dd];W[qp];B[cq];W[dq];B[cp];W[cn];B[bn];W[pd];B[pc];W[qe];B[od];W[pe];B[qc];W[bm];B[co];W[dn];B[do];W[eo];B[dr];W[er];B[en];W[fo];B[cr];W[fq];B[fn];W[bo];B[go];W[fp];B[bp];W[an];B[el];W[dk];B[eq];W[ep];B[hq];W[hp];B[gp];W[gq];B[gr];W[hr];B[iq];W[gn];B[ho];W[gs];B[ir];W[fr];B[gm];W[hn];B[io];W[hm];B[oq];W[po];B[ar];W[gl];B[qi];W[nf];B[oe];W[of];B[pf];W[qh];B[qf];W[pi];B[pj];W[qj];B[ri];W[rj];B[rh];W[ph];B[rg];W[ql];B[oj];W[ni];B[oo];W[on];B[no];W[pq];B[pr];W[nn];B[mn];W[mm];B[pn];W[pm];B[lm];W[ml];B[ll];W[mk];B[ln];W[qr];B[op];W[pp];B[cf];W[fc];B[ec];W[fd];B[ic];W[ch];B[dh];W[di];B[dg];W[ei];B[fg];W[he];B[jd];W[je];B[ke];W[jf];B[me];W[hc];B[id];W[ib];B[jb];W[eb];B[db];W[gb];B[or];W[bg];B[bf];W[kf];B[le];W[jm];B[jn];W[gh];B[fh];W[fi];B[gg];W[hh];B[hg];W[da];B[ca];W[ea];B[cb];W[kd];B[ia];W[hb];B[kc];W[af];B[ae];W[ag];B[ce];W[in];B[jo];W[jk];B[mg];W[nh];B[sj];W[rk];B[ih];W[ii];B[ji];W[ij];B[li];W[jh];B[ig];W[ki];B[kh];W[jj];B[jg];W[hd];B[nj];W[mj];B[mi];W[ng];B[ji];W[is];B[js];W[hs];B[jr];W[qs];B[qn];W[rn];B[cl];W[bi];B[cj];W[ci];B[hl];W[im];B[kj];W[km];B[pg];W[pk];B[nm];W[om];B[dm];W[fm];B[ee];W[ed];B[dc];W[ld];B[md];W[kl];B[lc];W[hf])",
          game_date: "2023-12-05T00:00:00+00:00",
          sgf_name: "gopro vs \u65e0\u5fc3\u7231\u68cb",
          black_player: "gopro",
          white_player: "\u65e0\u5fc3\u7231\u68cb",
          black_rank: "9\u6bb5",
          white_rank: "9\u6bb5",
          komi: 0.5,
          result: "W+R",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999916/phh7prsmnklphtlxlnlx.png",
          suspended: false,
        },
        {
          user_id: 4,
          sgf_data:
            "(;GM[1]FF[4]\r\nSZ[19]\r\nGN[]\r\nDT[2022-02-21]\r\nPB[arbyter73]\r\nPW[V263850611]\r\nBR[8\u7ea7]\r\nWR[8\u7ea7]\r\nKM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[1]RE[B+22.75]TM[1200]TC[3]TT[60]AP[foxwq]RL[0]\r\n;B[pd];W[dd];B[pq];W[dp];B[qk];W[po];B[qo];W[qn];B[qp];W[pn];B[nq];W[np];B[mp];W[op];B[oq];W[mo];B[qh];W[lo];B[fq];W[hq];B[cq];W[dq];B[cp];W[co];B[dr];W[er];B[cr];W[fr];B[do];W[eo];B[dn];W[fp];B[en];W[fn];B[cl];W[fm];B[jd];W[nd];B[pf];W[od];B[pc];W[of];B[og];W[pe];B[qe];W[oe];B[qg];W[ng];B[fc];W[hd];B[hc];W[fd];B[ec];W[ed];B[id];W[gc];B[gb];W[gd];B[hb];W[dc];B[if];W[db];B[fb];W[dg];B[ok];W[oh];B[pg];W[mh];B[ni];W[nh];B[nm];W[nn];B[mm];W[om];B[ol];W[pl];B[pk];W[ql];B[lc];W[ld];B[mc];W[md];B[kd];W[mf];B[lj];W[hf];B[gf];W[he];B[gg];W[hg];B[gh];W[hh];B[fi];W[ie];B[di];W[je];B[ch];W[cg];B[oc];W[nc];B[nb];W[ke];B[kc];W[hj];B[kq];W[lp];B[lq];W[mq];B[mr];W[kp];B[jq];W[jp];B[km];W[gi];B[eh];W[fj];B[ej];W[ek];B[dk];W[el];B[dm];W[dl];B[ck];W[em];B[cn];W[eg];B[dh];W[bh];B[bi];W[bg];B[im];W[kh];B[oi];W[kj];B[kk];W[li];B[mj];W[jk];B[kl];W[ji];B[rn];W[rm];B[ro];W[rk];B[rj];W[sj];B[ri];W[mp];B[pp];W[iq];B[ir];W[hr];B[jr];W[io];B[ef];W[df];B[fg];W[ee];B[gp];W[gq];B[go];W[fo];B[hn];W[in];B[hm];W[gk];B[si];W[sk];B[ah];W[ag];B[ai];W[ff];B[bo];W[ds];B[cs];W[es];B[lr];W[ho];B[gn];W[jl];B[jm];W[is];B[js];W[hs];B[ph];W[mi];B[lm];W[jn];B[kn];W[hp];B[ik];W[il];B[hl];W[jj];B[hk];W[ij];B[gl];W[fl];B[sm];W[sl];B[rl];W[qm];B[ea];W[da];B[eb];W[ko];B[mn];W[gm];B[ge];W[fe];B[fh];W[ln])",
          game_date: "2022-02-21T00:00:00+00:00",
          sgf_name: "arbyter73 vs V263850611",
          black_player: "arbyter73",
          white_player: "V263850611",
          black_rank: "8\u7ea7",
          white_rank: "8\u7ea7",
          komi: 375.0,
          result: "B+22.75",
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1701999922/nsboqtdzsrlcc6lb3edw.png",
          suspended: false,
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
