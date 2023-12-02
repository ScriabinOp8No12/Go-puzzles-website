from sgfmill import sgf

def convert_rank_to_elo(rank):
    if not rank:
        return 1500  # Default ELO if rank is not provided

    rank_lower = rank.lower()
    numeric_rank = int(''.join(filter(str.isdigit, rank_lower)))

    if 'p' in rank_lower:
        elo = 3000  # Professional ranks
    elif 'd' in rank_lower or '段' in rank or '단' in rank: # Chinese/Japanese and Korean character for dan ranks
        elo = 2000 + numeric_rank * 100
    elif 'k' in rank_lower or '级' in rank or '급' in rank: # Chinese/Japanese and Korean character for kyu ranks
        elo = max(100, (21 - numeric_rank) * 100)
    else:
        return 1500  # Default for unrecognized format, likely different language

    return min(3000, max(100, elo))  # Ensure ELO is between 100 and 3000

def get_average_elo(black_elo, white_elo):
    return round((black_elo + white_elo) / 2)

def set_potential_puzzle_difficulty(sgf_data):
    sgf_game = sgf.Sgf_game.from_string(sgf_data)
    game_info = sgf_game.get_root().get_raw_property_map()

    black_rank = game_info.get('BR', [None])[0].decode('utf-8') if game_info.get('BR') else None
    white_rank = game_info.get('WR', [None])[0].decode('utf-8') if game_info.get('WR') else None

    black_elo = convert_rank_to_elo(black_rank)
    white_elo = convert_rank_to_elo(white_rank)

    return get_average_elo(black_elo, white_elo)


sgf_data1 = "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[19]HA[4]KM[0.50]TM[300]OT[3x20 byo-yomi] PW[fastgun]PB[cartus]WR[5d]BR[1d]DT[2023-11-30]PC[The KGS Go Server at http://www.gokgs.com/]AB[dd][pd][dp][pp]RE[W+Resign] ;W[qn]WL[297.647]C[cartus [1d\]: hi fastgun [5d\]: hi ] ;B[qo]BL[293.765] ;W[pn]WL[295.95] ;B[nq]BL[292.278] ;W[qf]WL[292.713] ;B[pi]BL[289.739] ;W[of]WL[290.86] ;B[nd]BL[288.04] ;W[ni]WL[287.642] ;B[nj]BL[286.577] ;W[mi]WL[284.896] ;B[oj]BL[285.321] ;W[lc]WL[280.338] ;B[ld]BL[282.142] ;W[kd]WL[278.729] ;B[le]BL[280.782] ;W[mc]WL[277.28] ;B[nc]BL[279.631] ;W[rd]WL[276.27] ;B[nn]BL[273.096] ;W[oo]WL[267.764] ;B[mo]BL[270.514] ;W[qq]WL[260.535] ;B[pq]BL[262.72] ;W[ro]WL[258.613] ;B[qp]BL[261.65] ;W[rm]WL[249.867] ;B[rp]BL[259.875] ;W[ri]WL[246.113] ;B[rj]BL[252.925] ;W[qj]WL[243.871] ;B[qi]BL[252.031] ;W[rk]WL[242.393] ;B[rh]BL[251.141] ;W[sj]WL[241.391] ;B[qg]BL[249.536] ;W[pg]WL[237.217] ;B[rf]BL[244.902] ;W[qe]WL[234.457] ;B[qd]BL[242.507] ;W[re]WL[232.243] ;B[hc]BL[236.69] ;W[ke]WL[227.535] ;B[lf]BL[234.149] ;W[qc]WL[221.232] ;B[pc]BL[232.084] ;W[qb]WL[220.268] ;B[kf]BL[226.115] ;W[id]WL[216.477] ;B[jf]BL[219.238] ;W[hd]WL[206.402] ;B[gc]BL[217.154] ;W[ic]WL[202.625] ;B[md]BL[215.233] ;W[hf]WL[195.046] ;B[ji]BL[212.997] ;W[mj]WL[180.758] ;B[mk]BL[205.636] ;W[lk]WL[166.377] ;B[ml]BL[202.728] ;W[ol]WL[163.464] ;B[nk]BL[198.576] ;W[kh]WL[154.663] ;B[jh]BL[196.68] ;W[ig]WL[153.174] ;B[jg]BL[194.776] ;W[hi]WL[150.176] ;B[ij]BL[187.557] ;W[cc]WL[143.622] ;B[cd]BL[184.23] ;W[dc]WL[142.576] ;B[ec]BL[183.002] ;W[eb]WL[140.651] ;B[fc]BL[182.342] ;W[bd]WL[138.754] ;B[be]BL[181.134] ;W[bc]WL[137.696] ;B[cf]BL[180.367] ;W[ee]WL[134.822] ;B[ed]BL[178.601] ;W[hj]WL[130.637] ;B[ik]BL[172.321] ;W[ch]WL[128.946] ;B[dg]BL[144.459] ;W[dh]WL[125.667] ;B[fg]BL[142.504] ;W[eh]WL[123.468] ;B[fb]BL[133.637] ;W[db]WL[121.194] ;B[fe]BL[131.91] ;W[gl]WL[107.852] ;B[oh]BL[119.757] ;W[ng]WL[100.448] ;B[nh]BL[116.608] ;W[mh]WL[94.924] ;B[pj]BL[103.019] ;W[ph]WL[88.597] ;B[qk]BL[98.93] ;W[rj]WL[85.534] ;B[qh]BL[84.194] ;W[pk]WL[75.309] ;B[oi]BL[79.338] ;W[mf]WL[59.748] ;B[ll]BL[55.21] ;W[cn]WL[56.175] ;B[em]BL[51.854] ;W[eo]WL[53.521] ;B[do]BL[46.323] ;W[dn]WL[51.154] ;B[en]BL[45.633] ;W[fo]WL[49.263] ;B[fq]BL[43.866] ;W[gn]WL[45.19] ;B[cl]BL[41.907] ;W[bp]WL[37.852] ;B[fh]BL[35.012] ;W[fi]WL[34.962] ;B[hh]BL[27.606] ;W[ih]WL[26.217] ;B[hg]BL[24.752] ;W[ii]WL[19.93] ;B[if]BL[17.438] ;W[eg]WL[16.723] ;B[ef]BL[13.732] ;W[nb]WL[20]OW[2] ;B[ob]BL[8.903] ;W[ma]WL[20]OW[2] ;B[ei]BL[20]OB[3] ;W[fj]WL[20]OW[2] ;B[bq]BL[20]OB[3] ;W[bn]WL[20]OW[2] ;B[cp]BL[20]OB[3] ;W[bl]WL[20]OW[2] ;B[bk]BL[20]OB[3] ;W[ck]WL[20]OW[2] ;B[cj]BL[20]OB[3] ;W[dk]WL[20]OW[2] ;B[dj]BL[20]OB[3] ;W[bj]WL[20]OW[2] ;B[ek]BL[20]OB[3] ;W[ak]WL[20]OW[2] ;B[dl]BL[20]OB[3] ;W[bk]WL[20]OW[2] ;B[ej]BL[20]OB[3] ;W[fl]WL[20]OW[2] ;B[el]BL[20]OB[3] ;W[gq]WL[20]OW[2] ;B[gr]BL[20]OB[3] ;W[hq]WL[20]OW[2] ;B[ql]BL[20]OB[3] ;W[pl]WL[20]OW[2] ;B[kb]BL[20]OB[3] ;W[kc]WL[20]OW[2] ;B[so]BL[20]OB[3] ;W[ib]WL[20]OW[2] ;B[rn]BL[20]OB[3] ;W[sm]WL[20]OW[2] ;B[fp]BL[20]OB[3] ;W[gp]WL[20]OW[2] ;B[io]BL[20]OB[3] ;W[hr]WL[20]OW[2] ;B[oa]BL[20]OB[3] ;W[gf]WL[20]OW[2] ;B[ff]BL[20]OB[3] ;W[je]WL[20]OW[2] ;B[bh]BL[20]OB[3] ;W[bi]WL[20]OW[2] ;B[bg]BL[20]OB[3] ;W[ci]WL[20]OW[2] ;B[hb]BL[20]OB[3] ;W[co]WL[20]OW[2] ;B[ap]BL[20]OB[3] ;W[bo]WL[20]OW[2] ;B[fr]BL[20]OB[3] ;W[ep]WL[20]OW[2] ;B[dq]BL[20]OB[3] ;W[eq]WL[20]OW[2] ;B[er]BL[20]OB[3] ;W[dr]WL[20]OW[2] ;B[cq]BL[20]OB[3] ;W[lq]WL[20]OW[2] ;B[ho]BL[20]OB[3] ;W[go]WL[20]OW[2] ;B[jq]BL[20]OB[3] ;W[jr]WL[20]OW[2] ;B[ir]BL[20]OB[3] ;W[kr]WL[20]OW[2] ;B[iq]BL[20]OB[3] ;W[is]WL[20]OW[2] ;B[js]BL[20]OB[3] ;W[hs]WL[20]OW[2] ;B[mr]BL[20]OB[3] ;W[cr]WL[20]OW[2] ;B[br]BL[20]OB[3] ;W[gs]WL[20]OW[2] ;B[cs]BL[20]OB[3] ;W[es]WL[20]OW[2] ;B[ds]BL[20]OB[3] ;W[dr]WL[20]OW[2] ;B[og]BL[20]OB[3] ;W[pf]WL[20]OW[2] ;B[lg]BL[20]OB[3] ;W[mg]WL[20]OW[2] ;B[ra]BL[20]OB[3] ;W[qa]WL[20]OW[2] ;B[rb]BL[20]OB[3] ;W[rc]WL[20]OW[2] ;B[se]BL[20]OB[3] ;W[kk]WL[20]OW[2] ;B[lj]BL[20]OB[3] ;W[kl]WL[20]OW[2] ;B[im]BL[20]OB[3] ;W[kn]WL[20]OW[2] ;B[ko]BL[20]OB[3] ;W[ln]WL[20]OW[2] ;B[mn]BL[20]OB[3] ;W[lo]WL[20]OW[2] ;B[kj]BL[20]OB[3] ;W[lm]WL[20]OW[2] ;B[nl]BL[20]OB[3] ;W[mp]WL[20]OW[2] ;B[np]BL[20]OB[3] ;W[no]WL[20]OW[2] ;B[on]BL[20]OB[3] ;W[po]WL[20]OW[2] ;B[om]BL[20]OB[3] ;W[rl]WL[20]OW[2] ;B[mm]BL[20]OB[3] ;W[sd]WL[20]OW[2] ;B[sb]BL[20]OB[3] ;W[sf]WL[20]OW[2] ;B[sg]BL[20]OB[3] ;W[rg]WL[20]OW[2] ;B[fk]BL[20]OB[2] ;W[gk]WL[20]OW[2] ;B[rf]BL[20]OB[2] ;W[si]WL[20]OW[2] ;B[sh]BL[20]OB[2] ;W[rg]WL[20]OW[2] ;B[nf]BL[20]OB[2] ;W[ne]WL[20]OW[2] ;B[rf]BL[20]OB[2] ;W[se]WL[20]OW[2] ;B[me]BL[20]OB[2] ;W[pm]WL[20]OW[2] ;B[oe]BL[20]OB[2] ;W[nf]WL[20]OW[2] ;B[pb]BL[20]OB[2] ;W[lh]WL[20]OW[2]C[fastgun [5d\]: tx cartus [1d\]: th ])"
sgf_data2 = "(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))"
sgf_data3 = "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[0.00]TM[300]PW[Game 5]PB[arbyter73]DT[2023-10-19]RE[W+3.00];B[pd];W[dp];B[pq];W[dc];B[fq];W[jp];B[cq];W[dq];B[cp];W[do];B[dr];W[er];B[cr];W[eq];B[cn];W[fp];B[de];W[ce];B[cf];W[cd];B[dg];W[fc];B[cj];W[cl];B[dm];W[dj];B[ck];W[dl];B[em];W[dk];B[ci];W[di];B[dh];W[gj];B[pn];W[nq];B[lq];W[lp];B[kp];W[pp];B[qp];W[op];B[mp];W[lo];B[mq];W[qq];B[pr];W[qr];B[or] (;W[nr]C[Incorrect - This was the actual move played in the game!]) (;W[qo]C[CORRECT] ;B[ko]C[CORRECT] ;W[nr]C[CORRECT] ;B[hp]C[CORRECT] ;W[hq]C[CORRECT]))"
sgf_data4 = "(;FF[4] CA[UTF-8] GM[1] DT[2023-09-03] PC[OGS: https://online-go.com/game/56766164] GN[play for fun] PB[iself101] PW[erikdeviking] BR[7k] WR[6k] TM[0]OT[15 simple] RE[B+16.5] SZ[9] KM[5.5] RU[Japanese] ;B[gc] (;W[df] (;B[gg] (;W[ge] (;B[dg] (;W[ef] (;B[eg] (;W[ec] (;B[cc] (;W[db] (;B[bf] (;W[cf] (;B[be] (;W[cg] (;B[ff] (;W[fe] (;B[gf] (;W[cb] (;B[bb] (;W[ba] (;B[bc] (;W[bg] (;B[ag] (;W[ad] (;B[ce] (;W[ed] (;B[dd] (;W[de] (;B[dc] (;W[bd] (;B[bh] (;W[ch] (;B[ah] (;W[bi] (;B[dh] (;W[di] (;B[ei] (;W[ci] (;B[fd] (;W[gd] (;B[fc] (;W[hc] (;B[eb] (;W[ee] (;B[fb] (;W[af] (;B[ae] (;W[ai] (;B[da] (;W[af] (;B[ag] (;W[fh] (;B[fg] (;W[eh] (;B[gh] (;W[fi] (;B[gi] (;W[ei] (;B[hb] (;W[hf] (;B[hg] (;W[he] (;B[ih] (;W[hi] (;B[ic] (;W[id] (;B[hd] (;W[ie] (;B[hc] (;W[ah] (;B[cd] (;W[af] (;B[ac] (;W[ag] (;B[ig] (;W[ii] (;B[hh] (;W[ii] (;B[hi] (;W[] (;B[] (;W[] ))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))"
sgf_data5 = "(;FF[4] CA[UTF-8] GM[1] DT[2023-12-01] PC[OGS: https://online-go.com/game/59372929] GN[친선 대국] PB[pitching] PW[oneplay] BR[3d] WR[4d] TM[300]OT[3x20 byo-yomi] RE[W+15.5] SZ[19] KM[6.5] RU[Korean] ;B[pd] (;W[dp] (;B[pq] (;W[dd] (;B[nc] (;W[md] (;B[jd] (;W[nd] (;B[mc] (;W[lc] (;B[ld] (;W[oc] (;B[lb] (;W[od] (;B[kc] (;W[pe] (;B[pc] (;W[pb] (;B[qb] (;W[nb] (;B[pa] (;W[ob] (;B[qe] (;W[qf] (;B[rd] (;W[re] (;B[qd] (;W[rf] (;B[pf] (;W[oe] (;B[pg] (;W[qh] (;B[rb] (;W[ng] (;B[ph] (;W[qi] (;B[nh] (;W[mh] (;B[ni] (;W[lg] (;B[qk] (;W[pk] (;B[ql] (;W[pj] (;B[mi] (;W[li] (;B[lj] (;W[ki] (;B[mk] (;W[pl] (;B[pm] (;W[om] (;B[pn] (;W[nl] (;B[kj] (;W[no] (;B[ji] (;W[kh] (;B[jh] (;W[jg] (;B[ig] (;W[jf] (;B[jj] (;W[if] (;B[on] (;W[nn] (;B[mm] (;W[nm] (;B[fc] (;W[df] (;B[nq] (;W[rj] (;B[lp] (;W[qo] (;B[pp] (;W[rq] (;B[rn] (;W[qn] (;B[qm] (;W[ro] (;B[sm] (;W[qr] (;B[pr] (;W[sr] (;B[fq] (;W[dn] (;B[eo] (;W[do] (;B[dr] (;W[cq] (;B[fm] (;W[gq] (;B[fr] (;W[go] (;B[fo] (;W[jq] (;B[kr] (;W[np] (;B[op] (;W[mq] (;B[mp] (;W[nr] (;B[oq] (;W[ko] (;B[lq] (;W[ml] (;B[ln] (;W[km] (;B[kn] (;W[jn] (;B[lo] (;W[ll] (;B[jm] (;W[gm] (;B[im] (;W[gl] (;B[dm] (;W[hg] (;B[gj] (;W[fj] (;B[fi] (;W[fk] (;B[em] (;W[hi] (;B[hn] (;W[gn] (;B[hj] (;W[gi] (;B[jo] (;W[ik] (;B[jk] (;W[hc] (;B[hd] (;W[gd] (;B[gc] (;W[id] (;B[hb] (;W[he] (;B[ib] (;W[eb] (;B[cr] (;W[br] (;B[bs] (;W[bp] (;B[bm] (;W[bn] (;B[ar] (;W[bq] (;B[cn] (;W[co] (;B[cm] (;W[an] (;B[nk] (;W[rk] (;B[ci] (;W[ij] (;B[ii] (;W[hk] (;B[pi] (;W[qj] (;B[oj] (;W[cg] (;B[bh] (;W[fb] (;B[gb] (;W[bg] (;B[ec] (;W[dc] (;B[rl] (;W[qg] (;B[nf] (;W[of] (;B[og] (;W[mg] (;B[le] (;W[me] (;B[lf] (;W[mf] (;B[kf] (;W[kg] (;B[ei] (;W[dj] (;B[di] (;W[ck] (;B[bk] (;W[gr] (;B[gp] (;W[hp] (;B[fp] (;W[ho] (;B[ir] (;W[hq] (;B[cj] (;W[jr] (;B[js] (;W[jp] (;B[kp] (;W[dk] (;B[am] (;W[cl] (;B[bl] (;W[ah] (;B[ai] (;W[ag] (;B[rh] (;W[sk] (;B[si] (;W[sg] (;B[se] (;W[mr] (;B[sl] (;W[so] (;B[ps] (;W[qq] (;B[sn] (;W[hs] (;B[is] (;W[cs] (;B[ds] (;W[eq] (;B[er] (;W[fs] (;B[bi] (;W[ic] (;B[je] (;W[fg] (;B[eg] (;W[fh] (;B[dg] (;W[ef] (;B[mb] (;W[ed] (;B[ie] (;W[ih] (;B[fd] (;W[fe] (;B[jc] (;W[hd] (;B[fa] (;W[db] (;B[ga] (;W[eh] (;B[dh] (;W[io] (;B[in] (;W[oa] (;B[qa] (;W[ma] (;B[kl] (;W[lm] (;B[mn] (;W[il] (;B[jl] (;W[hm] (;B[ej] (;W[ek] (;B[ea] (;W[da] (;B[la] (;W[iq] (;B[lk] (;W[qs] (;B[qp] (;W[rp] (;B[lr] (;W[ri] (;B[sh] (;W[sf] (;B[sd] (;W[fl] (;B[cs] (;W[aq] (;B[as] (;W[gs] (;B[ks] (;W[na] (;B[ak] (;W[] (;B[] )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))"
sgf_data6 = "(;FF[4] CA[UTF-8] GM[1] DT[2023-11-30] PC[OGS: https://online-go.com/game/59361237] GN[lyq vs. san-dan] PB[lyq] PW[san-dan] BR[3k] WR[1d] TM[1200]OT[5x30 byo-yomi] RE[W+R] SZ[19] KM[6.5] RU[Japanese] ;B[pp] (;W[dd] (;B[dq] (;W[co] (;B[cm] (;W[eo] (;B[fp] (;W[dl] (;B[dm] (;W[em] (;B[cl] (;W[dk] (;B[fo] (;W[ck] (;B[dn] (;W[en] (;B[do] (;W[dp] (;B[cp] (;W[ep] (;B[cq] (;W[eq] (;B[fq] (;W[er] (;B[bo] (;W[jp] (;B[iq] (;W[jq] (;B[ip] (;W[ir] (;B[hr] (;W[jr] (;B[io] (;W[jo] (;B[in] (;W[gr] (;B[hs] (;W[fr] (;B[gq] (;W[jn] (;B[nq] (;W[im] (;B[hm] (;W[hl] (;B[gm] (;W[gl] (;B[il] (;W[jm] (;B[fn] (;W[fm] (;B[ho] (;W[gn] (;B[hn] (;W[hq] (;B[hp] (;W[go] ))))))))))))))))))))))))))))))))))))))))))))))))))))))))"
sgf_data7 = "(;GM[1]FF[4] SZ[19] GN[] DT[2021-12-13] PB[feetbull] PW[yepstonks] BR[8段] WR[8段] KM[0]HA[0]RU[Japanese]AP[GNU Go:3.8]RE[W+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0] ;B[pd];W[dd];B[pp];W[dp];B[fq];W[hq];B[fo];W[dn];B[ip];W[hp];B[ho];W[iq];B[jp];W[jq];B[kp];W[lq];B[mo];W[gp];B[cq];W[dq];B[dr];W[er];B[br];W[ds];B[cr];W[fr];B[co];W[do];B[cn];W[cm];B[dm];W[cl];B[dl];W[dk];B[ck];W[bk];B[cj];W[bj];B[ci];W[ek];B[em];W[bi];B[bn];W[am];B[ch];W[bh];B[bm];W[bl];B[cg];W[go];B[fl];W[bf];B[fj];W[hn];B[mq];W[lp];B[mp];W[lo];B[ln];W[kn];B[lr];W[lm];B[mn];W[kq];B[km];W[ll];B[kl];W[lk];B[kk];W[kj];B[lj];W[mj];B[li];W[ki];B[mk];W[ml];B[jn];W[nk];B[lh];W[ko];B[il];W[kh];B[kg];W[lg];B[mh];W[ih];B[ii];W[kf];B[jg];W[jh];B[jf];W[mg];B[nh];W[hg];B[ng];W[me];B[ke];W[le];B[kd];W[lc];B[ld];W[md];B[mc];W[nc];B[mb];W[nb];B[lb];W[od];B[pc];W[pe];B[qe];W[pf];B[ph];W[qf];B[pk];W[re];B[hi];W[pl];B[qk];W[ok];B[ql];W[pm];B[nm];W[oi];B[pg];W[pi];B[qi];W[qj];B[rj];W[qh];B[pj];W[qg];B[ol];W[ri];B[qj];W[nf];B[lf];W[mf];B[qm];W[nl];B[om];W[ni];B[ce];W[cf];B[de];W[df];B[ee];W[fc];B[cd];W[bg];B[ej];W[ic];B[jb];W[cc];B[al];W[bc];B[be];W[ge];B[ef];W[ae];B[ad];W[af];B[bd];W[eg];B[fg];W[dg];B[fd];W[ed];B[gd];W[fe];B[ff];W[hd];B[eh];W[ak];B[hb];W[gc];B[ib];W[dh];B[ei];W[kr];B[oj];W[nj];B[hh];W[ig];B[mr];W[jo];B[ob];W[ma];B[rd];W[qd];B[qc];W[rb];B[qe];W[na];B[la];W[qd];B[dc];W[db];B[qe];W[kb];B[kc];W[qd];B[ai];W[ah];B[qe];W[ka];B[ja];W[qd];B[eq];W[fp];B[qe];W[qq];B[qp];W[qd];B[oe];W[of];B[qe];W[rp];B[rr];W[qd];B[oc];W[nd];B[qe];W[rq];B[pr];W[qd];B[rc];W[oa];B[pa];W[qb];B[sb];W[ra];B[qe];W[rf];B[rh];W[hl];B[hk];W[im];B[ik];W[gl];B[gm];W[hm];B[gk];W[fn];B[cp];W[fm];B[fk];W[en];B[el];W[ac];B[gg];W[ie];B[cs];W[gb];B[gr];W[gq];B[fs];W[ep];B[es];W[hr];B[gs];W[hs];B[ds];W[jm])"
sgf_data8 = "(;GM[1]FF[4] SZ[19] GN[] DT[2023-11-29] PB[V500195220] PW[arbyter73] BR[7级] WR[7级] KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RN[3]RE[B+R]TM[300]TC[3]TT[30]AP[foxwq]RL[0] ;B[pp];W[dq];B[pd];W[ec];B[hq];W[qn];B[nq];W[qk];B[qh];W[pi];B[rj];W[ph];B[rk];W[ql];B[qg];W[qp];B[qq];W[rq];B[pq];W[qo];B[fr];W[do];B[kq];W[cd];B[rr];W[qc];B[qe];W[pc];B[hc];W[jc];B[he];W[fe];B[fb];W[dj];B[dm];W[cn];B[cl];W[ck];B[bk];W[bj];B[bm];W[cm];B[bn];W[dl];B[bl];W[em];B[co];W[dn];B[cp];W[cq];B[bq])"
sgf_data9 = """(;GM[1]FF[4]
SZ[19]
GN[2023房开杯棋王争霸赛16强<绝艺讲解>]
DT[2023-12-01]
PB[党毅飞]
PW[丁浩]
BR[P9段]
WR[P9段]
KM[375]HA[0]RU[Chinese]AP[GNU Go:3.8]RE[W+R]TM[3600]TC[1]TT[60]AP[foxwq]RL[0]
;B[qd]
(;W[dp]
(;B[pq]
(;W[dc]
(;B[nd]
(;W[qo]
(;B[np]
(;W[de]
(;B[qk]
(;W[lc]
(;B[fq]
(;W[dn]
(;B[ip]
(;W[pd]
(;B[qc]
(;W[pc]
(;B[pe]
(;W[qb]
(;B[rb]
(;W[ob]
(;B[qa]
(;W[eq]
(;B[fp]
(;W[jo]
(;B[io]
(;W[jn]
(;B[kq]
(;W[qq]
(;B[qr]
(;W[pr]
(;B[or]
(;W[pp]
(;B[ps]
(;W[fr]
(;B[gr]
(;W[ck]
(;B[jc]
(;W[le]
(;B[gc]
(;W[oe]
(;B[pf]
(;W[ne]
(;B[cg]
(;W[bf]
(;B[ff]
(;W[eg]
(;B[ed]
(;W[dd]
(;B[fg]
(;W[eh]
(;B[ef]
(;W[df]
(;B[dj]
(;W[cj]
(;B[gj]
(;W[di]
(;B[qm]
(;W[nl]
(;B[on]
(;W[oq]
(;B[nq]
(;W[pr]
(;B[md]
(;W[me]
(;B[pq]
(;W[pb]
(;B[op]
(;W[oi]
(;B[qi]
(;W[er]
(;B[ll]
(;W[lj]
(;B[em]
(;W[en]
(;B[fm]
(;W[jk]
(;B[cl]
(;W[dk]
(;B[dm]
(;W[go]
(;B[hm]
(;W[hq]
(;B[gq]
(;W[gn]
(;B[gm]
(;W[hp]
(;B[ir]
(;W[iq]
(;B[jq]
(;W[in]
(;B[hn]
(;W[ho]
(;B[jp]
(;W[hr]
(;B[hs]
(;W[jr]
(;B[is]
(;W[ep]
(;B[lp]
(;W[il]
(;B[mk]
(;W[gi]
(;B[hj]
(;W[ji]
(;B[ii]
(;W[jh]
(;B[ih]
(;W[ig]
(;B[kl]
(;W[hg]
(;B[jj]
(;W[kc]
(;B[ec]
(;W[jb]
(;B[db]
(;W[cb]
(;B[fb]
(;W[da]
(;B[ib]
(;W[ic]
(;B[hb]
(;W[kj]
(;B[ij]
(;W[nj]
(;B[ph]
(;W[pl]
(;B[ql]
(;W[jd]
(;B[kk]
(;W[fk]
(;B[fj]
(;W[mm]
(;B[ln]
(;W[fs]
(;B[gs]
(;W[ej]
(;B[ng]
(;W[rp]
(;B[rr]
(;W[qe]
(;B[qf]
(;W[ra]
(;B[sa]
(;W[mg]
(;B[nh]
(;W[mj]
(;B[bm]
(;W[gd]
(;B[hd]
(;W[ge]
(;B[fi]
(;W[fh]
(;B[eb]
(;W[fd]
(;B[ga]
(;W[fo]
(;B[kr]
(;W[hc]
(;B[bp]
(;W[bn]
(;B[cq]
(;W[cn]
(;B[bk]
(;W[br]
(;B[fc]
(;W[lm]
(;B[km]
(;W[mn]
(;B[kn]
(;W[gk]
(;B[hl]
(;W[bj]
(;B[cr]
(;W[bs]
(;B[cs]
(;W[ao]
(;B[cc]
(;W[bc]
(;B[fn]
(;W[eo]
(;B[mh]
(;W[lh]
(;B[lg]
(;W[ee]
(;B[kh]
(;W[li]
(;B[mf]
(;W[kg]
(;B[kf]
(;W[jg]
(;B[lf]
(;W[hk]
(;B[ik]
(;W[pa]
(;B[ke]
(;W[kd]
(;B[ap]
(;W[bq]
(;B[aq]
(;W[bo]
(;B[cp]
(;W[co])
(;W[co]C[/"jueyi白99.8% | +7.5目];B[cm];W[dr];B[ds];W[es];B[ar];W[dq];B[as];W[br];B[am]))
(;B[cp]C[/"jueyi黑0.2% | -7.5目];W[co];B[cm];W[dr];B[ds];W[es];B[ar];W[dq];B[as];W[br]))
(;W[bo]C[/"jueyi白99.8% | +7.5目];B[cp];W[co];B[cm];W[dr];B[ds];W[es];B[ar];W[dq];B[as]))
(;B[cp]C[/"jueyi黑0.2% | -7.5目];W[co];B[cm];W[bo];B[am];W[ak];B[al];W[aj];B[mo];W[nn]))
(;W[bo]C[/"jueyi白99.8% | +7.5目];B[cp];W[co];B[ar];W[bq];B[aq];W[dr];B[ds];W[es];B[as]))
(;B[od]C[/"jueyi黑0.5% | -9.0目];W[ld];B[nb];W[nc];B[mc];W[mb];B[lb];W[oc];B[nk];W[ok]))
(;W[ld]C[/"jueyi白99.3% | +9.0目];B[rc];W[ra];B[re];W[sb];B[sc];W[mo];B[mp];W[pm];B[pn]))
(;B[rc]C[/"jueyi黑0.5% | -10.0目以上];W[ra];B[re];W[sb];B[sc];W[ke];B[jf];W[if];B[gh];W[hh]))
(;W[hh]C[/"jueyi白99.4% | +8.5目];B[jl];W[hi];B[im];W[mo];B[lo];W[pm];B[pn];W[pj];B[qj]))
(;B[ik]C[/"jueyi黑0.4% | -8.5目];W[hh];B[jl];W[hi];B[im];W[mo];B[lo];W[pm];B[pn];W[pj]))
(;W[ke]C[/"jueyi白99.5% | +7.0目];B[jf];W[if];B[gh];W[hh];B[hi];W[gg];B[hk];W[ak];B[bl]))
(;B[lf]C[/"jueyi黑0.4% | -7.0目];W[ke];B[jf];W[if];B[gh];W[hh];B[hi];W[gg];B[hk];W[ak]))
(;W[jg]C[/"jueyi白99.6% | +7.0目];B[lf];W[ke];B[jf];W[if];B[gh];W[hh];B[hi];W[gg];B[hk]))
(;B[kf]C[/"jueyi黑0.5% | -7.0目];W[jg];B[lf];W[ke];B[jf];W[if];B[gh];W[hh];B[hi];W[gg]))
(;W[kg]C[/"jueyi白99.5% | +7.0目];B[kf];W[jg];B[lf];W[ke];B[jf];W[if];B[gh];W[hh];B[hi]))
(;B[mf]C[/"jueyi黑0.5% | -7.0目];W[kg];B[kf];W[jg];B[lf];W[ke];B[jf];W[if];B[gh];W[hh]))
(;W[kg]C[/"jueyi白99.5% | +6.5目];B[li];W[ki];B[kf];W[jg];B[lf];W[lh];B[mf];W[ke];B[jf]))
(;B[kh]C[/"jueyi黑0.6% | -6.0目];W[kg];B[li];W[ki];B[kf];W[jg];B[lf];W[lh];B[mf];W[ke]))
(;W[mf]C[/"jueyi白99.5% | +10.0目以上];B[kh];W[li];B[jg];W[ki];B[hf];W[ee];B[gf];W[fe];B[gh]))
(;B[lg]C[/"jueyi黑0.5% | -8.0目];W[mf];B[kh];W[li];B[jg];W[ki];B[hf];W[ee];B[gf];W[fe]))
(;W[lh]C[/"jueyi白99.3% | +7.5目];B[lg];W[mf];B[kh];W[li];B[jg];W[ki];B[hf];W[ee];B[gf]))
(;B[bo]C[/"jueyi黑0.9% | -6.5目];W[co];B[bq];W[an];B[ap];W[ar];B[ds];W[es];B[aq];W[dr]))
(;W[bq]C[/"jueyi白99.4% | +8.0目];B[eo];W[do];B[aq];W[cp];B[ar];W[bo];B[as];W[ap];B[ee]))
(;B[cd]C[/"jueyi黑1.1% | -7.5目];W[bd];B[ce];W[cf];B[bb];W[be];B[cc];W[cd];B[bo];W[bq]))
(;W[bc]C[/"jueyi白98.9% | +7.5目];B[cd];W[bd];B[ce];W[cf];B[bb];W[be];B[cc];W[cd];B[bo]))
(;B[bo]C[/"jueyi黑1.4% | -6.0目];W[co];B[bq];W[an];B[ap];W[ar];B[fn];W[eo];B[cm];W[dr]))
(;W[bo]C[/"jueyi白99.5% | +7.5目];B[cp];W[ap];B[ao];W[an];B[aq];W[ao];B[eo];W[fn];B[cm]))
(;B[bo]C[/"jueyi黑2.0% | -6.0目];W[ao];B[bq];W[cs];B[ds];W[dr];B[ar];W[es];B[fn];W[eo]))
(;W[bo]C[/"jueyi白99.4% | +7.5目];B[ar];W[bs];B[ds];W[ap];B[ao];W[an];B[cp];W[aq];B[bq]))
(;B[cr]C[/"jueyi黑1.0% | -7.0目];W[bo];B[bs];W[ar];B[aq];W[ds];B[dr];W[cp];B[ao];W[an]))
(;W[ee]C[/"jueyi白99.1% | +7.5目];B[cr];W[bo];B[bs];W[ar];B[aq];W[ds];B[dr];W[cp];B[ao]))
(;B[hk]C[/"jueyi黑0.7% | -6.5目];W[hl];B[gl];W[bj];B[cr];W[bo];B[cp];W[ds];B[bs];W[ar]))
(;W[gk]C[/"jueyi白99.1% | +6.0目];B[hl];W[ee];B[cr];W[bo];B[bs];W[ar];B[aq];W[ds];B[dr]))
(;B[kn]C[/"jueyi黑0.9% | -6.5目];W[gk];B[hk];W[hl];B[gl];W[ee];B[cr];W[bo];B[bs];W[ar]))
(;W[mn]C[/"jueyi白99.1% | +6.5目];B[kn];W[gk];B[hl];W[ee];B[cr];W[bo];B[bs];W[ar];B[aq]))
(;B[km]C[/"jueyi黑1.2% | -6.5目];W[mn];B[kn];W[gk];B[hl];W[ee];B[cr];W[bo];B[bs];W[ar]))
(;W[ee]C[/"jueyi白99.3% | +8.0目];B[bi];W[bj];B[aj];W[bh];B[cr];W[bo];B[cp];W[ds];B[bs]))
(;B[cr]C[/"jueyi黑0.6% | -8.5目];W[bo];B[ee];W[fc];B[he];W[gb];B[gg];W[gh];B[gc];W[re]))
(;W[cr]C[/"jueyi白99.8% | +10.0目以上];B[br];W[dr];B[bs];W[bo];B[cp];W[ap];B[aq];W[ao];B[cs]))
(;B[bk]C[/"jueyi黑0.3% | -10.0目以上];W[cr];B[br];W[dr];B[bs];W[bo];B[cp];W[ap];B[aq];W[ao]))
(;W[cn]C[/"jueyi白99.6% | +10.0目以上];B[bk];W[cr];B[br];W[dr];B[bs];W[bo];B[cp];W[ap];B[aq]))
(;B[cq]C[/"jueyi黑0.4% | -10.0目以上];W[cn];B[bk];W[cr];B[br];W[dr];B[bs];W[bo];B[cp];W[ap]))
(;W[bn]C[/"jueyi白99.6% | +9.5目];B[cq];W[cn];B[bk];W[cr];B[br];W[dr];B[bs];W[bo];B[cp]))
(;B[fc]C[/"jueyi黑1.4% | -5.0目];W[bn];B[ee];W[cn];B[bk];W[am];B[bl];W[bj];B[mh];W[lh]))
(;W[hc]C[/"jueyi白98.4% | +6.0目];B[fc];W[bn];B[ee];W[cn];B[bk];W[am];B[bl];W[bj];B[mh]))
(;B[kr]C[/"jueyi黑2.0% | -6.5目];W[hc];B[ee];W[fc];B[he];W[gb];B[gg];W[gh];B[gc];W[re]))
(;W[hc]C[/"jueyi白98.7% | +6.0目];B[fc];W[bo];B[ee];W[gk];B[hk];W[bk];B[mh];W[lh];B[lg]))
(;B[ee]C[/"jueyi黑1.7% | -10.0目以上];W[ga];B[he];W[hf];B[gf];W[hc];B[fc];W[ia];B[fe];W[gd]))
(;W[fd]C[/"jueyi白97.9% | +8.5目];B[ee];W[ga];B[he];W[hf];B[gf];W[hc];B[fe];W[ia];B[fc]))
(;B[bp]C[/"jueyi黑8.5% | -8.0目];W[eb];B[cq];W[cr];B[br];W[ds];B[dq];W[bn];B[dr];W[cn]))
(;W[fh]C[/"jueyi白93.1% | +7.5目];B[bp];W[eb];B[cq];W[cr];B[br];W[ds];B[dq];W[bn];B[dr]))
(;B[gg]C[/"jueyi黑15.2% | -5.5目];W[fi];B[ki];W[jg];B[bo];W[bq];B[cq];W[cr];B[bp];W[cp]))
(;W[ge]C[/"jueyi白86.2% | +5.5目];B[gg];W[fi];B[ki];W[kg];B[bo];W[bq];B[cq];W[cp];B[bp]))
(;B[hd]C[/"jueyi黑19.0% | -4.5目];W[fi];B[bp];W[bn];B[fo];W[fn];B[cn];W[co];B[cm];W[bo]))
(;W[gd]C[/"jueyi白83.7% | +5.0目];B[hd];W[ge];B[gg];W[hh];B[ki];W[kh];B[mh];W[lh];B[bp]))
(;B[he]C[/"jueyi黑55.8% | +0.5目];W[mn];B[kn];W[gk];B[hk];W[hl];B[gl];W[fi];B[im];W[eb]))
(;W[mj]C[/"jueyi白43.7% | -0.5目];B[he];W[mn];B[lm];W[gk];B[hl];W[bn];B[bm];W[bk];B[pj]))
(;B[nh]C[/"jueyi黑60.7% | +1.0目];W[mj];B[mh];W[lh];B[bn];W[gd];B[hd];W[ge];B[fd];W[lm]))
(;W[lm]C[/"jueyi白66.7% | +1.0目];B[km];W[ml];B[im];W[mn];B[lo];W[jm];B[kn];W[gk];B[hk]))
(;B[lh]C[/"jueyi黑43.6% | -0.5目];W[li];B[nh];W[lm];B[km];W[ml];B[im];W[kg];B[sa];W[gd]))
(;W[lm]C[/"jueyi白65.0% | +0.5目];B[km];W[ml];B[im];W[mn];B[lo];W[jm];B[kn];W[re];B[rd]))
(;B[qf]C[/"jueyi黑37.6% | -0.5目];W[lm];B[km];W[ml];B[im];W[mn];B[lo];W[jm];B[kn];W[fo]))
(;W[rn]C[/"jueyi白62.0% | +1.0目];B[rq];W[lm];B[km];W[ml];B[im];W[qe];B[re];W[mn];B[lh]))
(;B[rr]C[/"jueyi黑44.2% | -0.5目];W[lm];B[km];W[ml];B[im];W[mn];B[lh];W[li];B[lo];W[og]))
(;W[lm]C[/"jueyi白64.1% | +0.5目];B[km];W[ml];B[im];W[mn];B[lh];W[li];B[lo];W[jm];B[kn]))
(;B[bn]C[/"jueyi黑49.7% | -0.5目];W[cn];B[bm];W[bo];B[nh];W[gd];B[lh];W[oh];B[jg];W[kg]))
(;W[gd]C[/"jueyi白88.9% | +3.5目];B[hd];W[ge];B[he];W[lm];B[km];W[kn];B[im];W[qe];B[re]))
(;B[gs]C[/"jueyi黑16.8% | -2.5目];W[ge];B[eb];W[lm];B[km];W[ml];B[kn];W[ej];B[bn];W[bo]))
(;W[gd]C[/"jueyi白91.2% | +3.5目];B[hd];W[ge];B[he];W[lm];B[km];W[kn];B[im];W[qe];B[re]))
(;B[lm]C[/"jueyi黑19.8% | -2.5目];W[ge];B[eb];W[fd];B[ee];W[ej];B[gk];W[gd];B[fi];W[fh]))
(;W[ge]C[/"jueyi白79.5% | +2.0目];B[eb];W[mm];B[lm];W[rp];B[rr];W[rn];B[rq];W[nn];B[mn]))
(;B[fj]C[/"jueyi黑21.0% | -2.0目];W[ge];B[eb];W[mm];B[lm];W[rp];B[rr];W[rn];B[rq];W[nn]))
(;W[ge]C[/"jueyi白85.3% | +3.0目];B[fd];W[eb];B[gd];W[mm];B[lm];W[mn];B[ln];W[oh];B[bn]))
(;B[kk]C[/"jueyi黑15.3% | -2.5目];W[ge];B[fd];W[eb];B[gd];W[mm];B[lm];W[mn];B[ln];W[oh]))
(;W[ml]C[/"jueyi白96.7% | +5.5目];B[jl];W[lm];B[im];W[jm];B[ik];W[nn];B[jd]))
(;B[ql]C[/"jueyi黑4.1% | -5.0目];W[ml];B[jl];W[lm];B[im];W[jm];B[km];W[ln];B[kn];W[lk]))
(;W[qe]C[/"jueyi白96.3% | +5.0目];B[re];W[pl];B[ql];W[ml];B[jl];W[mn];B[ln];W[jd];B[ng]))
(;B[nk]C[/"jueyi黑21.7% | -2.5目];W[ok];B[ol];W[kk];B[jl];W[ik];B[im];W[pl];B[om];W[qh]))
(;W[qh]C[/"jueyi白86.8% | +4.0目];B[mj];W[kr];B[lr];W[pi];B[ri];W[pg];B[rf];W[qf];B[qe]))
(;B[ij]C[/"jueyi黑13.5% | -4.0目];W[qh];B[mj];W[pi];B[ri];W[pl];B[oj];W[pj];B[pk];W[ok]))
(;W[kj]C[/"jueyi白86.7% | +3.5目];B[im];W[qh];B[qg];W[pi];B[rh];W[qj];B[ph];W[ri];B[qh]))
(;B[kj]C[/"jueyi黑22.3% | -3.0目];W[hb];B[hc];W[id];B[hd];W[qh];B[ie];W[ia];B[jg];W[ri]))
(;W[kj]C[/"jueyi白88.8% | +4.5目];B[ij];W[qh];B[mj];W[ic];B[hb];W[pi];B[ri];W[pl];B[oj]))
(;B[kj]C[/"jueyi黑51.0% | +0.5目];W[hb];B[ea];W[eb];B[jg];W[he];B[ng];W[og];B[of];W[qe]))
(;W[kj]C[/"jueyi白82.3% | +3.5目];B[ij];W[qh];B[mj];W[pi];B[ri];W[pl];B[oj];W[pj];B[pk]))
(;B[jg]C[/"jueyi黑30.9% | -2.0目];W[kj];B[ij];W[nj];B[ic];W[pl];B[kd];W[ld];B[ql];W[jf]))
(;W[cb]C[/"jueyi白68.3% | +2.0目];B[jg];W[kj];B[ij];W[mj];B[nk];W[hd];B[gd];W[fk];B[hl]))
(;B[jg]C[/"jueyi黑33.9% | -1.5目];W[kj];B[ij];W[he];B[ni];W[fk];B[hl];W[hb];B[gh];W[nh]))
(;W[kj]C[/"jueyi白74.8% | +3.0目];B[ij];W[kk];B[jl];W[ic];B[jg];W[hd];B[ib];W[jb];B[hb]))
(;B[jg]C[/"jueyi黑28.6% | -2.5目];W[kj];B[ij];W[jf];B[ec];W[qh];B[mj];W[pi];B[kg];W[pl]))
(;W[kj]C[/"jueyi白80.2% | +4.0目];B[ij];W[fk];B[kk];W[ib];B[ic];W[jb];B[hb];W[kc];B[ie]))
(;B[im]C[/"jueyi黑23.7% | -3.5目];W[ib];B[jb];W[hc];B[hd];W[gb];B[ic];W[hb];B[ld];W[qe]))
(;W[jl]C[/"jueyi白94.8% | +8.0目];B[jj];W[kj];B[ij];W[kk];B[jg];W[hg];B[hh];W[ie];B[je]))
(;B[kl]C[/"jueyi黑5.4% | -7.5目];W[jl];B[jj];W[kj];B[ij];W[kk];B[jg];W[hg];B[hh];W[ie]))
(;W[pl]C[/"jueyi白97.8% | +8.0目];B[mj];W[ql];B[rl];W[rm];B[rk];W[pm];B[qn];W[pn];B[rn]))
(;B[ih]C[/"jueyi黑2.5% | -7.5目];W[pl];B[mj];W[ql];B[rl];W[rm];B[rk];W[pm];B[qn];W[pn]))
(;W[jh]C[/"jueyi白97.5% | +7.5目];B[ih];W[pl];B[oj];W[ql];B[rl];W[pj];B[pk];W[nj];B[ok]))
(;B[fi]C[/"jueyi黑2.5% | -7.5目];W[fk];B[hl];W[pl];B[mj];W[ql];B[rl];W[rm];B[rk];W[pm]))
(;W[ji]C[/"jueyi白97.5% | +7.5目];B[ih];W[qh];B[ni];W[pi];B[nh];W[qj];B[ri];W[rj];B[pk]))
(;B[hj]C[/"jueyi黑2.7% | -7.5目];W[ji];B[ii];W[jh];B[ih];W[pl];B[mj];W[ql];B[rl];W[rm]))
(;W[gi]C[/"jueyi白97.4% | +7.5目];B[hj];W[ji];B[ih];W[pl];B[mj];W[ql];B[rl];W[rm];B[rk]))
(;B[ii]C[/"jueyi黑5.1% | -6.5目];W[mm];B[kl];W[jl];B[cn];W[co];B[kn];W[hj];B[gi];W[hi]))
(;W[il]C[/"jueyi白95.9% | +6.5目];B[ii];W[mm];B[kl];W[jl];B[kn];W[lr];B[kr];W[ko];B[ln]))
(;B[jl]C[/"jueyi黑6.8% | -5.5目];W[kr];B[lq];W[lr];B[mr];W[fs];B[ok];W[nk];B[lh];W[nh]))
(;W[ep]C[/"jueyi白93.5% | +5.5目];B[jl];W[kr];B[lq];W[lr];B[mr];W[pl];B[ql];W[fs];B[mi]))
(;B[is]C[/"jueyi黑6.8% | -5.5目];W[ep];B[jl];W[kr];B[lq];W[lr];B[mr];W[pl];B[ql];W[fs]))
(;W[jr]C[/"jueyi白93.2% | +5.5目];B[is];W[ep];B[jl];W[kr];B[lq];W[lr];B[mr];W[fs];B[mi]))
(;B[hs]C[/"jueyi黑7.1% | -5.5目];W[jr];B[is];W[ep];B[jl];W[kr];B[lq];W[lr];B[mr];W[fs]))
(;W[hr]C[/"jueyi白92.6% | +5.5目];B[hs];W[jr];B[is];W[ep];B[jl];W[kr];B[lq];W[lr];B[mr]))
(;B[jp]C[/"jueyi黑8.2% | -5.0目];W[hr];B[jl];W[jr];B[kr];W[kc];B[mk];W[il];B[kk];W[kj]))
(;W[ho]C[/"jueyi白91.1% | +5.0目];B[jp];W[hr];B[jl];W[jr];B[kr];W[kc];B[mk];W[il];B[kk]))
(;B[lb]C[/"jueyi黑11.3% | -4.5目];W[mb];B[fn];W[fo];B[eo];W[jp];B[do];W[ep];B[cn];W[hr]))
(;W[hr]C[/"jueyi白92.5% | +5.5目];B[hs];W[jr];B[is];W[in];B[hn];W[ho];B[jp];W[ep];B[jl]))
(;B[jq]C[/"jueyi黑8.5% | -5.5目];W[hr];B[hs];W[jr];B[is];W[in];B[hn];W[ho];B[jp];W[ep]))
(;W[iq]C[/"jueyi白91.8% | +5.5目];B[jq];W[hr];B[hs];W[jr];B[is];W[in];B[hn];W[ho];B[jp]))
(;B[cn]C[/"jueyi黑16.0% | -3.5目];W[iq];B[cp];W[cq];B[co];W[bp];B[jq];W[hr];B[mk];W[mj]))
(;W[hp]C[/"jueyi白84.3% | +4.0目];B[cn];W[iq];B[cp];W[cq];B[co];W[bp];B[jq];W[hr];B[jl]))
(;B[cn]C[/"jueyi黑28.4% | -2.0目];W[hp];B[bp];W[iq];B[lb];W[mb];B[cq];W[qh];B[ph];W[pi]))
(;W[gn]C[/"jueyi白72.2% | +2.0目];B[cn];W[hp];B[bp];W[iq];B[lb];W[mb];B[cq];W[qh];B[ph]))
(;B[kk]C[/"jueyi黑50.4% | +0.5目];W[iq];B[hp];W[kj];B[jl];W[il];B[ik];W[jj];B[im];W[gq]))
(;W[im]C[/"jueyi白60.7% | +0.5目];B[il];W[jl];B[in];W[jm];B[kj];W[pl];B[lb];W[mb];B[ql]))
(;B[hm]C[/"jueyi黑39.7% | -0.5目];W[im];B[il];W[jl];B[in];W[jm];B[kj];W[pl];B[lb];W[mb]))
(;W[kc]C[/"jueyi白65.4% | +1.5目];B[jd];W[il];B[mk];W[qh];B[ph];W[pi];B[qg];W[pk];B[pl]))
(;B[mk]C[/"jueyi黑53.5% | +1.0目];W[pl];B[ql];W[nj];B[mj];W[mi];B[li];W[kj];B[lm];W[jh]))
(;W[dk]C[/"jueyi白48.2% | -0.5目];B[co];W[cp];B[mk];W[pl];B[mj];W[ql];B[rl];W[rm];B[rn]))
(;B[mk]C[/"jueyi黑53.9% | +1.0目];W[qh];B[mj];W[og];B[rf];W[pl];B[ql];W[pj];B[qj];W[lh]))
(;W[kl]C[/"jueyi白48.8% | -0.5目];B[lb];W[mb];B[mc];W[kc];B[kb];W[nb];B[cl];W[dk];B[co]))
(;B[fm]C[/"jueyi黑52.4% | +1.0目];W[kl];B[lb];W[mb];B[mc];W[kc];B[kb];W[nb];B[cl];W[dk]))
(;W[qh]C[/"jueyi白49.5% | -0.5目];B[ph];W[pi];B[qg];W[jk];B[dm];W[cm];B[en];W[cn];B[mk]))
(;B[jl]C[/"jueyi黑59.6% | +1.5目];W[pj];B[lb];W[kc];B[kb];W[mb];B[qj];W[rm];B[mc];W[nb]))
(;W[qh]C[/"jueyi白45.6% | -1.0目];B[pi];W[rl];B[ql];W[og];B[oh];W[re];B[rf];W[pg];B[rd]))
(;B[kk]C[/"jueyi黑56.1% | +1.5目];W[pj];B[qj];W[pm];B[pn];W[pl];B[ql];W[ph];B[nj];W[qg]))
(;W[kk]C[/"jueyi白57.5% | +0.5目];B[lb];W[mb];B[mc];W[kc];B[kb];W[nb];B[er];W[dr];B[fs]))
(;B[ph]C[/"jueyi黑46.4% | -0.5目];W[pi];B[qi];W[qh];B[qg];W[pk];B[pl];W[qj];B[rh];W[rk]))
(;W[pg]C[/"jueyi白63.6% | +1.0目];B[rg];W[pl];B[ql];W[oj];B[pi];W[pj];B[qi];W[oi];B[dl]))
(;B[op]C[/"jueyi黑37.2% | -1.0目];W[pg];B[rg];W[pl];B[ql];W[oj];B[el];W[dl];B[ll];W[qg]))
(;W[pm]C[/"jueyi白71.3% | +2.5目];B[pn];W[pr];B[pb];W[qn];B[rm];W[pl];B[pq];W[nn];B[oo]))
(;B[pq]C[/"jueyi黑30.2% | -2.0目];W[pm];B[pn];W[pr];B[pb];W[qn];B[rm];W[pq];B[nr];W[rr]))
(;W[ld]C[/"jueyi白70.8% | +2.5目];B[pb];W[hd];B[hc];W[jd];B[pq];W[pl];B[ql];W[pr];B[kk]))
(;B[md]C[/"jueyi黑29.6% | -2.5目];W[ld];B[pb];W[hd];B[hc];W[jd];B[pq];W[pl];B[pm];W[pr]))
(;W[pr]C[/"jueyi白70.8% | +2.5目];B[md];W[ld];B[pb];W[hd];B[hc];W[jd];B[pq];W[pm];B[pn]))
(;B[nq]C[/"jueyi黑29.4% | -2.5目];W[pr];B[pb];W[hd];B[hc];W[id];B[pq];W[jd];B[op];W[ic]))
(;W[oq]C[/"jueyi白70.9% | +2.5目];B[nq];W[pr];B[pb];W[hd];B[hc];W[id];B[pq];W[pl];B[ql]))
(;B[om]C[/"jueyi黑38.5% | -1.0目];W[oq];B[nq];W[pr];B[md];W[ld];B[nb];W[jd];B[ic];W[od]))
(;W[oq]C[/"jueyi白67.4% | +1.5目];B[nq];W[pr];B[md];W[me];B[pq];W[rm];B[rl];W[pm];B[pb]))
(;B[qm]C[/"jueyi黑32.6% | -1.5目];W[oq];B[nq];W[pr];B[md];W[me];B[pq];W[pl];B[pm];W[pr]))
(;W[oq]C[/"jueyi白69.5% | +2.0目];B[nq];W[pr];B[md];W[ld];B[pb];W[hd];B[hc];W[jd];B[di]))
(;B[gi]C[/"jueyi黑34.2% | -1.5目];W[fj];B[qm];W[rm];B[ql];W[oq];B[nq];W[pr];B[md];W[me]))
(;W[fj]C[/"jueyi白70.4% | +2.0目];B[dk];W[cl];B[fk];W[gk];B[fl];W[gl];B[gm];W[gi];B[dl]))
(;B[dj]C[/"jueyi黑30.0% | -2.0目];W[fj];B[dk];W[cl];B[fk];W[gk];B[fl];W[gl];B[gm];W[gi]))
(;W[df]C[/"jueyi白69.6% | +2.0目];B[dj];W[fj];B[dk];W[cl];B[fk];W[gk];B[fl];W[gl];B[gm]))
(;B[dj]C[/"jueyi黑36.5% | -1.5目];W[fh];B[fj];W[hh];B[cj];W[cl];B[el];W[fb];B[ig];W[ik]))
(;W[fh]C[/"jueyi白74.1% | +3.0目];B[eh];W[ef];B[ee];W[df];B[ei];W[gh];B[dk];W[cl];B[gj]))
(;B[dj]C[/"jueyi黑37.1% | -1.0目];W[cj];B[gh];W[fi];B[qm];W[hf];B[ef];W[df];B[fg];W[fh]))
(;W[dd]C[/"jueyi白62.9% | +1.0目];B[dj];W[cj];B[gh];W[fi];B[qm];W[hf];B[ef];W[df];B[fg]))
(;B[dj]C[/"jueyi黑37.4% | -1.0目];W[dk];B[fj];W[oq];B[nq];W[pr];B[ef];W[df];B[dg];W[eh]))
(;W[fe]C[/"jueyi白67.7% | +2.0目];B[ge];W[gf];B[fg];W[fd];B[gd];W[hf];B[gh];W[ig];B[fb]))
(;B[qm]C[/"jueyi黑41.4% | -0.5目];W[oq];B[nq];W[pr];B[bk];W[dk];B[pq];W[pl];B[pm];W[pr]))
(;W[ci]C[/"jueyi白67.3% | +2.0目];B[el];W[fj];B[eh];W[id];B[dj];W[di];B[ei];W[ej];B[dk]))
(;B[qm]C[/"jueyi黑33.9% | -2.0目];W[oq];B[nq];W[pr];B[bk];W[cj];B[pq];W[id];B[ic];W[pr]))
(;W[pb]C[/"jueyi白69.9% | +2.5目];B[el];W[dj];B[me];W[lf];B[of];W[hd];B[hc];W[id];B[gd]))
(;B[pf]C[/"jueyi黑30.5% | -2.5目];W[pb];B[el];W[dj];B[me];W[lf];B[of];W[hd];B[hc];W[id]))
(;W[oe]C[/"jueyi白69.8% | +2.5目];B[pf];W[pb];B[el];W[dj];B[me];W[hd];B[lf];W[ke];B[of]))
(;B[oe]C[/"jueyi黑33.9% | -2.0目];W[ie];B[el];W[dj];B[qm];W[pa];B[pb];W[pl];B[pk];W[qb]))
(;W[oe]C[/"jueyi白69.6% | +2.5目];B[pf];W[le];B[gc];W[pb];B[el];W[dj];B[me];W[hd];B[lf]))
(;B[oe]C[/"jueyi黑33.2% | -2.0目];W[id];B[qm];W[oq];B[nq];W[pr];B[cd];W[dd];B[pq];W[pl]))
(;W[cj]C[/"jueyi白69.4% | +2.5目];B[jc];W[oe];B[pf];W[le];B[gc];W[je];B[he];W[gf];B[ge]))
(;B[bo]C[/"jueyi黑32.8% | -2.0目];W[co];B[cm];W[ck];B[dm];W[bp];B[ci];W[oq];B[nq];W[pr]))
(;W[fr]C[/"jueyi白67.9% | +2.0目];B[bo];W[co];B[cm];W[ck];B[dm];W[bp];B[en];W[dh];B[qm]))
(;B[ps]C[/"jueyi黑32.4% | -2.0目];W[fr];B[bo];W[cp];B[cl];W[gr];B[ci];W[oq];B[nq];W[pr]))
(;W[pp]C[/"jueyi白67.5% | +2.0目];B[ps];W[fr];B[bo];W[cp];B[cl];W[gr];B[ci];W[oq];B[nq]))
(;B[or]C[/"jueyi黑32.5% | -2.0目];W[pp];B[ps];W[fr];B[bo];W[cp];B[cl];W[gr];B[ci];W[oq]))
(;W[pr]C[/"jueyi白67.7% | +2.0目];B[or];W[pp];B[ps];W[fr];B[bo];W[cp];B[cl];W[gr];B[ci]))
(;B[qr]C[/"jueyi黑32.4% | -2.0目];W[pr];B[or];W[pp];B[ps];W[fr];B[bo];W[cm];B[cq];W[dr]))
(;W[fr]C[/"jueyi白68.6% | +2.0目];B[gr];W[qq];B[qr];W[pr];B[or];W[pp];B[ps];W[cj];B[jc]))
(;B[kq]C[/"jueyi黑32.2% | -2.0目];W[fr];B[gr];W[qq];B[qr];W[pr];B[or];W[pp];B[ps];W[cj]))
(;W[jn]C[/"jueyi白68.0% | +2.0目];B[kq];W[cj];B[jc];W[oe];B[pf];W[le];B[gc];W[ne];B[cl]))
(;B[jp]C[/"jueyi黑33.5% | -2.0目];W[lo];B[nn];W[kp];B[hn];W[kq];B[qp];W[jm];B[cl];W[dl]))
(;W[jo]C[/"jueyi白66.9% | +2.0目];B[jp];W[lo];B[nn];W[kp];B[hn];W[kq];B[qp];W[mm];B[mn]))
(;B[fp]C[/"jueyi黑33.5% | -2.0目];W[jo];B[jp];W[lo];B[nn];W[kp];B[hn];W[kq];B[qp];W[mm]))
(;W[oe]C[/"jueyi白67.4% | +2.0目];B[pf];W[ql];B[rl];W[pk];B[qm];W[pl];B[qj];W[pm];B[rm]))
(;B[qa]C[/"jueyi黑33.9% | -2.0目];W[oe];B[pf];W[ql];B[rl];W[pk];B[qm];W[pl];B[qj];W[pm]))
(;W[ob]C[/"jueyi白66.7% | +2.0目];B[qa];W[oe];B[pf];W[ql];B[rl];W[pk];B[qm];W[pl];B[qj]))
(;B[rb]C[/"jueyi黑34.2% | -2.0目];W[ob];B[qa];W[oe];B[pf];W[ql];B[rl];W[pk];B[qm];W[pl]))
(;W[qb]C[/"jueyi白66.7% | +2.0目];B[rb];W[ob];B[qa];W[oe];B[pf];W[ql];B[rl];W[pk];B[qm]))
(;B[pe]C[/"jueyi黑34.0% | -2.0目];W[qb];B[rb];W[ob];B[qa];W[oe];B[pf];W[ql];B[rl];W[pk]))
(;W[pc]C[/"jueyi白65.9% | +2.0目];B[pe];W[qb];B[rb];W[ob];B[qa];W[oe];B[pf];W[ql];B[rl]))
(;B[qc]C[/"jueyi黑34.6% | -2.0目];W[pc];B[pe];W[qb];B[rb];W[ob];B[qa];W[oe];B[pf];W[ql]))
(;W[pd]C[/"jueyi白65.4% | +2.0目];B[qc];W[pc];B[pe];W[qb];B[rb];W[ob];B[qa];W[oe];B[pf]))
(;B[eo]C[/"jueyi黑37.5% | -1.5目];W[do];B[dr];W[cj];B[qp];W[pd];B[pe];W[pc];B[qc];W[qb]))
(;W[hq]C[/"jueyi白63.8% | +1.5目];B[qp];W[pd];B[pe];W[pc];B[qc];W[qb];B[qf];W[ob];B[ok]))
(;B[fq]C[/"jueyi黑36.8% | -1.5目];W[hq];B[jc];W[le];B[nf];W[id];B[ic];W[hd];B[jd];W[je]))
(;W[lc]C[/"jueyi白63.7% | +1.5目];B[fq];W[hq];B[qp];W[pd];B[pe];W[pc];B[qc];W[qb];B[qf]))
(;B[qk]C[/"jueyi黑36.7% | -1.5目];W[lc];B[fq];W[hq];B[jc];W[le];B[nf];W[id];B[ic];W[hd]))
(;W[de]C[/"jueyi白63.7% | +1.5目];B[qk];W[lc];B[fq];W[hq];B[jc];W[le];B[nf];W[id];B[ic]))
(;B[pm]C[/"jueyi黑37.9% | -1.5目];W[oo];B[np];W[pj];B[fq];W[qg];B[ce];W[pd];B[pe];W[qc]))
(;W[po]C[/"jueyi白63.3% | +1.5目];B[qo];W[qn];B[qp];W[pn];B[nq];W[pj];B[ce];W[fd];B[di]))
(;B[oc]C[/"jueyi黑37.5% | -1.5目];W[qo];B[np];W[nd];B[od];W[pk];B[ce];W[cd];B[de];W[fc]))
(;W[dc]C[/"jueyi白63.0% - 3.75子];B[oc];W[qo];B[np];W[nd];B[od];W[pk];B[ce]))
(;B[cd]C[/"jueyi黑37.3% - 3.75子];W[qp];B[fd];W[oc];B[md];W[ne]))
(;W[dd]C[/"jueyi白62.9% - 3.75子];B[pp];W[dq];B[od];W[nq]))"""

difficulty1 = set_potential_puzzle_difficulty(sgf_data1) # dan ranks, 5d vs 1d from KGS, expected 2300, got 2300
difficulty2 = set_potential_puzzle_difficulty(sgf_data2) # pro ranks, expected 3000, got 3000
difficulty3 = set_potential_puzzle_difficulty(sgf_data3) # no ranks, expected 1500, got 1500
difficulty4 = set_potential_puzzle_difficulty(sgf_data4) # kyu ranks, 6k vs 7k from OGS, expected 1450, got 1450
difficulty5 = set_potential_puzzle_difficulty(sgf_data5) # dan ranks, 3d vs 4d from OGS, expected 2350, got 2350
difficulty6 = set_potential_puzzle_difficulty(sgf_data6) # kyu vs dan ranks, 3k vs 1d from OGS, expected 1950, got 1950
difficulty7 = set_potential_puzzle_difficulty(sgf_data7) # fox dan ranks, 8 dan against 8dan, expected 2800, got 2800
difficulty8 = set_potential_puzzle_difficulty(sgf_data8) # fox kyu ranks, 7kyu against 7kyu, expected 1400, got 1400
difficulty9 = set_potential_puzzle_difficulty(sgf_data9) # fox pro ranks, 9p (dan is in there too), expected 3000, got 3000
# ************ ABOVE ONLY WORKS IF it's not converted into a one liner! ************

# print("Puzzle difficulty1: ", difficulty1)
# print("Puzzle difficulty2: ", difficulty2)
# print("Puzzle difficulty3: ", difficulty3)
# print("Puzzle difficulty4: ", difficulty4)
# print("Puzzle difficulty5: ", difficulty5)
# print("Puzzle difficulty7: ", difficulty6)
print("Puzzle difficulty7: ", difficulty7)
print("Puzzle difficulty8: ", difficulty8)
print("Puzzle difficulty9: ", difficulty9)
