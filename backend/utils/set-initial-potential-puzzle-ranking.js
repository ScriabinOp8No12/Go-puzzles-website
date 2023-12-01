// Converts rank of players in sgf into an elo ranking system
// Should be easy for OGS and other sites that put k, d, or p in the sgf, but Fox and other asian sites use asian characters, which will require different logic
// Look at BR and WR sgf properties for black rank and white rank respectively, For later? Use logic to determine which color made the mistake

const jssgf = require("jssgf");

function convertRankToElo(rank) {

  if (!rank) return 1500; // if rank is not provided, default to 1500 elo, which is 6 kyu in our elo system
  const rankLowerCase = rank.toLowerCase();
  let elo;
  // Extract numeric part of the rank
  const numericRank = parseInt(rankLowerCase.match(/\d+/)[0]);

  if (rankLowerCase.includes('p')) {
    // pro ranks
    elo = 3000;
  } else if (rankLowerCase.includes('d')) {
    // dan ranks, 1 dan is 2100 elo
    elo = 2000 + numericRank * 100;
  } else if (rankLowerCase.includes('k')) {
    // kyu ranks, 20k or weaker is 100 elo
    elo = Math.max(100, (21 - numericRank) * 100);
  } else {
    // unrecognized rank format, return the default 1500 elo
    return 1500;
  }
  return Math.min(3000, Math.max(100, elo)); // Ensure ELO is between 100 and 3000
}

function getAverageElo(blackElo, whiteElo) {
  return Math.round((blackElo + whiteElo) / 2);
}

function setPotentialPuzzleDifficulty(sgf_data) {
  // Parse the SGF data
  const parsedSgf = jssgf.parse(sgf_data);
  const gameInfo = parsedSgf[0];

  // Extract the ranks from the SGF data
  const blackRank = gameInfo.BR;
  const whiteRank = gameInfo.WR;

  console.log("blackRank", blackRank)
  console.log("whiteRank", whiteRank)

  const blackElo = convertRankToElo(blackRank);
  const whiteElo = convertRankToElo(whiteRank);

  return getAverageElo(blackElo, whiteElo);
}

module.exports = { setPotentialPuzzleDifficulty };

// PRO:
// const output1 = setPotentialPuzzleDifficulty("(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))")
// NO RANKS:
// const output2 = setPotentialPuzzleDifficulty("(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or] (;W[nr]C[Incorrect - This was the actual move played in the game!]) (;W[qo]C[CORRECT] ;B[ko]C[CORRECT] ;W[nr]C[CORRECT] ;B[hp]C[CORRECT] ;W[hq]C[CORRECT]))")
// Kyu ranks (6k and 7k from OGS):
// const output3 = setPotentialPuzzleDifficulty("(;FF[4] CA[UTF-8] GM[1] DT[2023-09-03] PC[OGS: https://online-go.com/game/56766164] GN[play for fun] PB[iself101] PW[erikdeviking] BR[7k] WR[6k] TM[0]OT[15 simple] RE[B+16.5] SZ[9] KM[5.5] RU[Japanese] ;B[gc] (;W[df] (;B[gg] (;W[ge] (;B[dg] (;W[ef] (;B[eg] (;W[ec] (;B[cc] (;W[db] (;B[bf] (;W[cf] (;B[be] (;W[cg] (;B[ff] (;W[fe] (;B[gf] (;W[cb] (;B[bb] (;W[ba] (;B[bc] (;W[bg] (;B[ag] (;W[ad] (;B[ce] (;W[ed] (;B[dd] (;W[de] (;B[dc] (;W[bd] (;B[bh] (;W[ch] (;B[ah] (;W[bi] (;B[dh] (;W[di] (;B[ei] (;W[ci] (;B[fd] (;W[gd] (;B[fc] (;W[hc] (;B[eb] (;W[ee] (;B[fb] (;W[af] (;B[ae] (;W[ai] (;B[da] (;W[af] (;B[ag] (;W[fh] (;B[fg] (;W[eh] (;B[gh] (;W[fi] (;B[gi] (;W[ei] (;B[hb] (;W[hf] (;B[hg] (;W[he] (;B[ih] (;W[hi] (;B[ic] (;W[id] (;B[hd] (;W[ie] (;B[hc] (;W[ah] (;B[cd] (;W[af] (;B[ac] (;W[ag] (;B[ig] (;W[ii] (;B[hh] (;W[ii] (;B[hi] (;W[] (;B[] (;W[] ))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))")
// Dan ranks (3d and 4d from OGS)
// const output4 = setPotentialPuzzleDifficulty("(;FF[4] CA[UTF-8] GM[1] DT[2023-12-01] PC[OGS: https://online-go.com/game/59372929] GN[친선 대국] PB[pitching] PW[oneplay] BR[3d] WR[4d] TM[300]OT[3x20 byo-yomi] RE[W+15.5] SZ[19] KM[6.5] RU[Korean] ;B[pd] (;W[dp] (;B[pq] (;W[dd] (;B[nc] (;W[md] (;B[jd] (;W[nd] (;B[mc] (;W[lc] (;B[ld] (;W[oc] (;B[lb] (;W[od] (;B[kc] (;W[pe] (;B[pc] (;W[pb] (;B[qb] (;W[nb] (;B[pa] (;W[ob] (;B[qe] (;W[qf] (;B[rd] (;W[re] (;B[qd] (;W[rf] (;B[pf] (;W[oe] (;B[pg] (;W[qh] (;B[rb] (;W[ng] (;B[ph] (;W[qi] (;B[nh] (;W[mh] (;B[ni] (;W[lg] (;B[qk] (;W[pk] (;B[ql] (;W[pj] (;B[mi] (;W[li] (;B[lj] (;W[ki] (;B[mk] (;W[pl] (;B[pm] (;W[om] (;B[pn] (;W[nl] (;B[kj] (;W[no] (;B[ji] (;W[kh] (;B[jh] (;W[jg] (;B[ig] (;W[jf] (;B[jj] (;W[if] (;B[on] (;W[nn] (;B[mm] (;W[nm] (;B[fc] (;W[df] (;B[nq] (;W[rj] (;B[lp] (;W[qo] (;B[pp] (;W[rq] (;B[rn] (;W[qn] (;B[qm] (;W[ro] (;B[sm] (;W[qr] (;B[pr] (;W[sr] (;B[fq] (;W[dn] (;B[eo] (;W[do] (;B[dr] (;W[cq] (;B[fm] (;W[gq] (;B[fr] (;W[go] (;B[fo] (;W[jq] (;B[kr] (;W[np] (;B[op] (;W[mq] (;B[mp] (;W[nr] (;B[oq] (;W[ko] (;B[lq] (;W[ml] (;B[ln] (;W[km] (;B[kn] (;W[jn] (;B[lo] (;W[ll] (;B[jm] (;W[gm] (;B[im] (;W[gl] (;B[dm] (;W[hg] (;B[gj] (;W[fj] (;B[fi] (;W[fk] (;B[em] (;W[hi] (;B[hn] (;W[gn] (;B[hj] (;W[gi] (;B[jo] (;W[ik] (;B[jk] (;W[hc] (;B[hd] (;W[gd] (;B[gc] (;W[id] (;B[hb] (;W[he] (;B[ib] (;W[eb] (;B[cr] (;W[br] (;B[bs] (;W[bp] (;B[bm] (;W[bn] (;B[ar] (;W[bq] (;B[cn] (;W[co] (;B[cm] (;W[an] (;B[nk] (;W[rk] (;B[ci] (;W[ij] (;B[ii] (;W[hk] (;B[pi] (;W[qj] (;B[oj] (;W[cg] (;B[bh] (;W[fb] (;B[gb] (;W[bg] (;B[ec] (;W[dc] (;B[rl] (;W[qg] (;B[nf] (;W[of] (;B[og] (;W[mg] (;B[le] (;W[me] (;B[lf] (;W[mf] (;B[kf] (;W[kg] (;B[ei] (;W[dj] (;B[di] (;W[ck] (;B[bk] (;W[gr] (;B[gp] (;W[hp] (;B[fp] (;W[ho] (;B[ir] (;W[hq] (;B[cj] (;W[jr] (;B[js] (;W[jp] (;B[kp] (;W[dk] (;B[am] (;W[cl] (;B[bl] (;W[ah] (;B[ai] (;W[ag] (;B[rh] (;W[sk] (;B[si] (;W[sg] (;B[se] (;W[mr] (;B[sl] (;W[so] (;B[ps] (;W[qq] (;B[sn] (;W[hs] (;B[is] (;W[cs] (;B[ds] (;W[eq] (;B[er] (;W[fs] (;B[bi] (;W[ic] (;B[je] (;W[fg] (;B[eg] (;W[fh] (;B[dg] (;W[ef] (;B[mb] (;W[ed] (;B[ie] (;W[ih] (;B[fd] (;W[fe] (;B[jc] (;W[hd] (;B[fa] (;W[db] (;B[ga] (;W[eh] (;B[dh] (;W[io] (;B[in] (;W[oa] (;B[qa] (;W[ma] (;B[kl] (;W[lm] (;B[mn] (;W[il] (;B[jl] (;W[hm] (;B[ej] (;W[ek] (;B[ea] (;W[da] (;B[la] (;W[iq] (;B[lk] (;W[qs] (;B[qp] (;W[rp] (;B[lr] (;W[ri] (;B[sh] (;W[sf] (;B[sd] (;W[fl] (;B[cs] (;W[aq] (;B[as] (;W[gs] (;B[ks] (;W[na] (;B[ak] (;W[] (;B[] )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))")
// KGS dan and kyu ranks -> jssgf can't parse it for some reason?
const output5 = setPotentialPuzzleDifficulty(`(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]
  RU[Japanese]SZ[19]HA[4]KM[0.50]TM[300]OT[3x20 byo-yomi]
  PW[fastgun]PB[cartus]WR[5d]BR[1d]DT[2023-11-30]PC[The KGS Go Server at http://www.gokgs.com/]AB[dd][pd][dp][pp]RE[W+Resign]
  ;W[qn]WL[297.647]
  ;B[qo]BL[293.765]
  ;W[pn]WL[295.95]
  ;B[nq]BL[292.278]
  ;W[qf]WL[292.713]
  ;B[pi]BL[289.739]
  ;W[of]WL[290.86]
  ;B[nd]BL[288.04]
  ;W[ni]WL[287.642]
  ;B[nj]BL[286.577]
  ;W[mi]WL[284.896]
  ;B[oj]BL[285.321]
  ;W[lc]WL[280.338]
  ;B[ld]BL[282.142]
  ;W[kd]WL[278.729]
  ;B[le]BL[280.782]
  ;W[mc]WL[277.28]
  ;B[nc]BL[279.631]
  ;W[rd]WL[276.27]
  ;B[nn]BL[273.096]
  ;W[oo]WL[267.764]
  ;B[mo]BL[270.514]
  ;W[qq]WL[260.535]
  ;B[pq]BL[262.72]
  ;W[ro]WL[258.613]
  ;B[qp]BL[261.65]
  ;W[rm]WL[249.867]
  ;B[rp]BL[259.875]
  ;W[ri]WL[246.113]
  ;B[rj]BL[252.925]
  ;W[qj]WL[243.871]
  ;B[qi]BL[252.031]
  ;W[rk]WL[242.393]
  ;B[rh]BL[251.141]
  ;W[sj]WL[241.391]
  ;B[qg]BL[249.536]
  ;W[pg]WL[237.217]
  ;B[rf]BL[244.902]
  ;W[qe]WL[234.457]
  ;B[qd]BL[242.507]
  ;W[re]WL[232.243]
  ;B[hc]BL[236.69]
  ;W[ke]WL[227.535]
  ;B[lf]BL[234.149]
  ;W[qc]WL[221.232]
  ;B[pc]BL[232.084]
  ;W[qb]WL[220.268]
  ;B[kf]BL[226.115]
  ;W[id]WL[216.477]
  ;B[jf]BL[219.238]
  ;W[hd]WL[206.402]
  ;B[gc]BL[217.154]
  ;W[ic]WL[202.625]
  ;B[md]BL[215.233]
  ;W[hf]WL[195.046]
  ;B[ji]BL[212.997]
  ;W[mj]WL[180.758]
  ;B[mk]BL[205.636]
  ;W[lk]WL[166.377]
  ;B[ml]BL[202.728]
  ;W[ol]WL[163.464]
  ;B[nk]BL[198.576]
  ;W[kh]WL[154.663]
  ;B[jh]BL[196.68]
  ;W[ig]WL[153.174]
  ;B[jg]BL[194.776]
  ;W[hi]WL[150.176]
  ;B[ij]BL[187.557]
  ;W[cc]WL[143.622]
  ;B[cd]BL[184.23]
  ;W[dc]WL[142.576]
  ;B[ec]BL[183.002]
  ;W[eb]WL[140.651]
  ;B[fc]BL[182.342]
  ;W[bd]WL[138.754]
  ;B[be]BL[181.134]
  ;W[bc]WL[137.696]
  ;B[cf]BL[180.367]
  ;W[ee]WL[134.822]
  ;B[ed]BL[178.601]
  ;W[hj]WL[130.637]
  ;B[ik]BL[172.321]
  ;W[ch]WL[128.946]
  ;B[dg]BL[144.459]
  ;W[dh]WL[125.667]
  ;B[fg]BL[142.504]
  ;W[eh]WL[123.468]
  ;B[fb]BL[133.637]
  ;W[db]WL[121.194]
  ;B[fe]BL[131.91]
  ;W[gl]WL[107.852]
  ;B[oh]BL[119.757]
  ;W[ng]WL[100.448]
  ;B[nh]BL[116.608]
  ;W[mh]WL[94.924]
  ;B[pj]BL[103.019]
  ;W[ph]WL[88.597]
  ;B[qk]BL[98.93]
  ;W[rj]WL[85.534]
  ;B[qh]BL[84.194]
  ;W[pk]WL[75.309]
  ;B[oi]BL[79.338]
  ;W[mf]WL[59.748]
  ;B[ll]BL[55.21]
  ;W[cn]WL[56.175]
  ;B[em]BL[51.854]
  ;W[eo]WL[53.521]
  ;B[do]BL[46.323]
  ;W[dn]WL[51.154]
  ;B[en]BL[45.633]
  ;W[fo]WL[49.263]
  ;B[fq]BL[43.866]
  ;W[gn]WL[45.19]
  ;B[cl]BL[41.907]
  ;W[bp]WL[37.852]
  ;B[fh]BL[35.012]
  ;W[fi]WL[34.962]
  ;B[hh]BL[27.606]
  ;W[ih]WL[26.217]
  ;B[hg]BL[24.752]
  ;W[ii]WL[19.93]
  ;B[if]BL[17.438]
  ;W[eg]WL[16.723]
  ;B[ef]BL[13.732]
  ;W[nb]WL[20]OW[2]
  ;B[ob]BL[8.903]
  ;W[ma]WL[20]OW[2]
  ;B[ei]BL[20]OB[3]
  ;W[fj]WL[20]OW[2]
  ;B[bq]BL[20]OB[3]
  ;W[bn]WL[20]OW[2]
  ;B[cp]BL[20]OB[3]
  ;W[bl]WL[20]OW[2]
  ;B[bk]BL[20]OB[3]
  ;W[ck]WL[20]OW[2]
  ;B[cj]BL[20]OB[3]
  ;W[dk]WL[20]OW[2]
  ;B[dj]BL[20]OB[3]
  ;W[bj]WL[20]OW[2]
  ;B[ek]BL[20]OB[3]
  ;W[ak]WL[20]OW[2]
  ;B[dl]BL[20]OB[3]
  ;W[bk]WL[20]OW[2]
  ;B[ej]BL[20]OB[3]
  ;W[fl]WL[20]OW[2]
  ;B[el]BL[20]OB[3]
  ;W[gq]WL[20]OW[2]
  ;B[gr]BL[20]OB[3]
  ;W[hq]WL[20]OW[2]
  ;B[ql]BL[20]OB[3]
  ;W[pl]WL[20]OW[2]
  ;B[kb]BL[20]OB[3]
  ;W[kc]WL[20]OW[2]
  ;B[so]BL[20]OB[3]
  ;W[ib]WL[20]OW[2]
  ;B[rn]BL[20]OB[3]
  ;W[sm]WL[20]OW[2]
  ;B[fp]BL[20]OB[3]
  ;W[gp]WL[20]OW[2]
  ;B[io]BL[20]OB[3]
  ;W[hr]WL[20]OW[2]
  ;B[oa]BL[20]OB[3]
  ;W[gf]WL[20]OW[2]
  ;B[ff]BL[20]OB[3]
  ;W[je]WL[20]OW[2]
  ;B[bh]BL[20]OB[3]
  ;W[bi]WL[20]OW[2]
  ;B[bg]BL[20]OB[3]
  ;W[ci]WL[20]OW[2]
  ;B[hb]BL[20]OB[3]
  ;W[co]WL[20]OW[2]
  ;B[ap]BL[20]OB[3]
  ;W[bo]WL[20]OW[2]
  ;B[fr]BL[20]OB[3]
  ;W[ep]WL[20]OW[2]
  ;B[dq]BL[20]OB[3]
  ;W[eq]WL[20]OW[2]
  ;B[er]BL[20]OB[3]
  ;W[dr]WL[20]OW[2]
  ;B[cq]BL[20]OB[3]
  ;W[lq]WL[20]OW[2]
  ;B[ho]BL[20]OB[3]
  ;W[go]WL[20]OW[2]
  ;B[jq]BL[20]OB[3]
  ;W[jr]WL[20]OW[2]
  ;B[ir]BL[20]OB[3]
  ;W[kr]WL[20]OW[2]
  ;B[iq]BL[20]OB[3]
  ;W[is]WL[20]OW[2]
  ;B[js]BL[20]OB[3]
  ;W[hs]WL[20]OW[2]
  ;B[mr]BL[20]OB[3]
  ;W[cr]WL[20]OW[2]
  ;B[br]BL[20]OB[3]
  ;W[gs]WL[20]OW[2]
  ;B[cs]BL[20]OB[3]
  ;W[es]WL[20]OW[2]
  ;B[ds]BL[20]OB[3]
  ;W[dr]WL[20]OW[2]
  ;B[og]BL[20]OB[3]
  ;W[pf]WL[20]OW[2]
  ;B[lg]BL[20]OB[3]
  ;W[mg]WL[20]OW[2]
  ;B[ra]BL[20]OB[3]
  ;W[qa]WL[20]OW[2]
  ;B[rb]BL[20]OB[3]
  ;W[rc]WL[20]OW[2]
  ;B[se]BL[20]OB[3]
  ;W[kk]WL[20]OW[2]
  ;B[lj]BL[20]OB[3]
  ;W[kl]WL[20]OW[2]
  ;B[im]BL[20]OB[3]
  ;W[kn]WL[20]OW[2]
  ;B[ko]BL[20]OB[3]
  ;W[ln]WL[20]OW[2]
  ;B[mn]BL[20]OB[3]
  ;W[lo]WL[20]OW[2]
  ;B[kj]BL[20]OB[3]
  ;W[lm]WL[20]OW[2]
  ;B[nl]BL[20]OB[3]
  ;W[mp]WL[20]OW[2]
  ;B[np]BL[20]OB[3]
  ;W[no]WL[20]OW[2]
  ;B[on]BL[20]OB[3]
  ;W[po]WL[20]OW[2]
  ;B[om]BL[20]OB[3]
  ;W[rl]WL[20]OW[2]
  ;B[mm]BL[20]OB[3]
  ;W[sd]WL[20]OW[2]
  ;B[sb]BL[20]OB[3]
  ;W[sf]WL[20]OW[2]
  ;B[sg]BL[20]OB[3]
  ;W[rg]WL[20]OW[2]
  ;B[fk]BL[20]OB[2]
  ;W[gk]WL[20]OW[2]
  ;B[rf]BL[20]OB[2]
  ;W[si]WL[20]OW[2]
  ;B[sh]BL[20]OB[2]
  ;W[rg]WL[20]OW[2]
  ;B[nf]BL[20]OB[2]
  ;W[ne]WL[20]OW[2]
  ;B[rf]BL[20]OB[2]
  ;W[se]WL[20]OW[2]
  ;B[me]BL[20]OB[2]
  ;W[pm]WL[20]OW[2]
  ;B[oe]BL[20]OB[2]
  ;W[nf]WL[20]OW[2]
  ;B[pb]BL[20]OB[2]
  ;W[lh]WL[20]OW[2])
  `)
// const output5 = setPotentialPuzzleDifficulty("(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[19]HA[4]KM[0.50]TM[300]OT[3x20 byo-yomi] PW[fastgun]PB[cartus]WR[5d]BR[1d]DT[2023-11-30]PC[The KGS Go Server at http://www.gokgs.com/]AB[dd][pd][dp][pp]RE[W+Resign] ;W[qn])")

console.log(output5)
