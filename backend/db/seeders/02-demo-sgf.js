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
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Sgfs";
    return queryInterface.bulkDelete(options, null, {});
  },
};
