import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadSgfThunk } from '../store/sgfs';

const UserSGFs = () => {
  const dispatch = useDispatch();
  const userSGF = useSelector(state => state.sgfs.userSGF);

  useEffect(() => {
    // vscode can't format it because of the long line, but it works
    const data = "(;FF[4] CA[UTF-8] GM[1] DT[2023-02-25] GN[Friendly Match] PC[https://online-go.com/review/1031029] PB[goritan] PW[HarpSeal] BR[5k] WR[5k] TM[600]OT[5x30 byo-yomi] RE[W+26.5] SZ[19] KM[7.5] RU[Chinese] ;B[pd] ;W[dp] ;B[pp] ;W[dc] ;B[ce] ;W[ci] ;B[ed] ;W[ec] ;B[fd] ;W[gc] ;B[cn] ;W[cl]CR[ed]CR[fd]CR[ce]SQ[ci]SQ[cl]TR[cn]C[I figure if I can strengthen the square group it will help me attack the circle group later] ;B[fq] ;W[fp] ;B[gp] ;W[fo] ;B[cq] (;W[dq] ;B[cp] ;W[do] ;B[bm] (;W[nq]TR[gp]TR[fq]C[Trying to attack way from afar] ;B[lq] ;W[no] ;B[qn] ;W[iq] ;B[hq] ;W[ip] ;B[ho] ;W[ko] ;B[mp] ;W[np] ;B[lo] ;W[ln] ;B[kp] ;W[jo] ;B[kn] ;W[mo] ;B[io] ;W[jp] ;B[jn] ;W[kq]CR[jn]CR[kn]CR[ho]CR[io]TR[lo]CR[gp]TR[kp]TR[mp]CR[fq]CR[hq]TR[lq]C[the triangle group is captured, but it's not too bad for Black since the circle group is pretty strong now] ;B[lm] ;W[lp] ;B[im] ;W[em]TR[do]TR[fo]TR[dp]TR[fp]TR[dq]C[My triangle group was suddenly in some danger] ;B[dk] ;W[ck] ;B[di] ;W[dh] ;B[cj] ;W[bj] ;B[dj] ;W[bh] ;B[eh] (;W[dg] ;B[eg] (;W[df] ;B[dd] ;W[ef] ;B[ff] ;W[fg] ;B[fi] ;W[fe] ;B[gd] ;W[gf] ;B[hc] ;W[gb] ;B[id] ;W[hi]TR[eg]TR[eh]TR[di]TR[fi]TR[cj]TR[dj]TR[dk]C[the marked group will probably die unless it connects back] ;B[gk] ;W[hk] ;B[hl] ;W[gj] ;B[fl] ;W[fk] ;B[el] ;W[gl] ;B[gm] ;W[dl] ;B[ek] ;W[fm] ;B[gk] ;W[co]MA[bo]C[pretty big ko threat] ;B[bo] ;W[gl] ;B[hh] ;W[gk] ;B[fc] ;W[fb] ;B[cc] ;W[cb] ;B[db] ;W[eb] ;B[bb] ;W[da] ;B[hb] ;W[ei]TR[eg]TR[eh]TR[di]TR[fi]TR[cj]TR[dj]TR[dk]TR[ek]TR[el]TR[fl]C[This whole group dies now, and White has a comfortable lead] ;B[qf] ;W[ob] ;B[nc] ;W[qc] ;B[nb] ;W[pc] ;B[qd] ;W[rd] ;B[re] ;W[rc] ;B[oc] ;W[pb] ;B[pj] ;W[qq] ;B[qp] ;W[pq] ;B[nm] ;W[jj] ;B[ik] ;W[ij] ;B[lj] ;W[kh] ;B[lh] (;W[lg] ;B[kg] ;W[jg] ;B[kf] ;W[li] ;B[mh] (;W[mi] ;B[ki] ;W[jh] ;B[ni] ;W[nl]TR[li]TR[mi]C[ladder breaker, but not sure if it's all that effective] ;B[mj] ;W[om] ;B[on] ;W[nn] ;B[mm] ;W[pn] ;B[pm] ;W[oo] ;B[ol] ;W[pl]MA[on]C[seems like a flower ko for White, it's really awful for Black to lose it] ;B[on] ;W[cr] ;B[br] ;W[om] ;B[ca]TR[da]TR[cb]TR[eb]TR[fb]TR[gb]TR[dc]TR[ec]TR[gc]CR[ol]CR[pm]CR[qn]CR[pp]CR[qp]C[I thought even this trade was still better for White!] ;W[qm] ;B[db] ;W[rj] ;B[ea] ;W[qi]MA[qi]MA[ri]MA[si]MA[qj]MA[rj]MA[sj]MA[qk]MA[rk]MA[sk]MA[ql]MA[rl]MA[sl]MA[qm]MA[rm]MA[sm]C[White scoops out a bunch of what was previously Black territory] ;B[ph] ;W[ok] ;B[qk] ;W[rl] ;B[rk] ;W[sk] ;B[dr] ;W[er] ;B[cs] ;W[eq] ;B[rh] ;W[pi] ;B[oj] ;W[qj] ;B[pk] ;W[fr] ;B[qh] ;W[gq] ;B[hp] ;W[kl] ;B[jk] ;W[kk] ;B[kj]TR[kk]TR[kl]C[These ended up getting cut off, a bit of an overplay from White, but the rest is pretty simple endgame and White wins by 20+] ;W[gn] ;B[km] ;W[hm] ;B[il] ;W[ml] ;B[ll] ;W[hr] ;B[lk] ;W[jf] ;B[je] ;W[he] ;B[ji] ;W[ii] ;B[if] ;W[ke] ;B[lf] ;W[ie] ;B[jd] ;W[ig] ;B[oa] ;W[ra] ;B[oi] ;W[sj] ;B[si] ;W[sl] ;B[ql] ;W[rn] ;B[nk] ;W[ol] ;B[bl] ;W[bk] ;B[bf] ;W[bg] ;B[cf] ;W[pa] ;B[na] ;W[es] ;B[dn] ;W[en] ;B[cg] ;W[ch] ;B[ds] ;W[al] ;B[am] ;W[ak] ;B[cm] ;W[dm] ;B[ao] ;W[se] ;B[sf] ;W[sd] ;B[ag] ;W[ah] ;B[af] ;W[hn] ;B[in] ;W[mk] ;B[nj] ;W[mn] ;B[ge] ;W[ri] ;B[sh] ;W[ee] ;B[hd] ;W[hf] ;B[de] ;W[go] ;B[] ;W[] )(;W[ki] ;B[mi]C[this line might have been better for White, a bit safer] ))(;W[kg]C[I think was was simpler, White can just reduce from here and it's enough to win] ))(;W[ef] ;B[df] ;W[ff]C[also possible?] ))(;W[eg] ;B[dg] ;W[ch] ;B[df] ;W[ei] ;B[fh] ;W[fi]TR[di]TR[cj]TR[dj]TR[dk]C[This might have been good too] ))(;W[gq] ;B[hq] ;W[gr]C[cutting directly was possible, but I thought it might be a bit too small since Black can fall back like so] ))(;W[cp] ;B[dq]C[maybe this direction was better?] ))"
    const sgf_data = {
      "sgf_data": [data]
    };
    dispatch(uploadSgfThunk(sgf_data))
  }, [dispatch]);

  return (
    <div>
      {userSGF && (
        <div>
          <img src={userSGF.thumbnail} alt="SGF Thumbnail" />
        </div>
      )}
    </div>
  );
};

export default UserSGFs;
