from katago.sgf_to_oneLineJson_all_moves import sgf_to_one_line_json
import json

def test_sgf_to_one_line_json():
  ''' This function tests to make sure the sgf passed in can be properly converted to a valid one line json string for KataGo Analysis
      KataGo Analysis Engine docs specify that the following are required properties in the one line json for KataG, docs here: https://github.com/lightvector/KataGo/blob/master/docs/Analysis_Engine.md

      1. id (string),
      2. rules (string or json),
      3. komi (optional but highly recommended) Values of komi outside of [-150,150] are not supported
      4. boardXSize(integer) Sizes > 19 not supported
      5. boardYSize (integer)

      The python script imported into this pytest file "sgf_to_oneLineJson_all_moves.py" sets a default value
      for the rules, komi, and boardXSize/boardYSize if they are not able to be parsed from the SGF
      Rules are set to "japanese", komi is set to 6.5 (does this also if komi is > 150 or < 150), and boardXSize and boardYSize are set to 19
  '''

  # This is an SGF found from go4go.net, it does not include the SZ property (board size) nor does it include the rules
  sgf_data = "(;EV[9th Kuksu Mountains Tournament, round 1] DT[2023-07-26] PB[Ida Atsushi]BR[9p] PW[Shin Jinseo]WR[9p] KM[6.5]RE[W+R] SO[Go4Go.net] ;B[qd];W[dc];B[qq];W[dq];B[od];W[de];B[co];W[fp];B[dk];W[ci];B[hq];W[jq];B[ho];W[mq];B[bq];W[cl];B[dn];W[dl];B[el];W[ek];B[em];W[ej];B[jc];W[go];B[gp];W[hn];B[fo];W[gn];B[io];W[fq];B[in];W[br];B[gl];W[oq];B[qn];W[hc];B[pj];W[lc];B[cc];W[cd];B[hd];W[ic];B[jd];W[id];B[je];W[ie];B[jf];W[hg];B[jh];W[pc];B[qc];W[pi];B[qj];W[pd];B[pe];W[oc];B[oe];W[qb];B[rb];W[pb];B[md];W[qe];B[re];W[qf];B[rf];W[ra];B[rc];W[kb];B[jb];W[nb];B[nn];W[oj];B[kj];W[qi];B[rh];W[lj];B[kk];W[lk];B[ok];W[nj];B[nk];W[pk];B[pl];W[qg];B[rg];W[ki];B[ji];W[mg];B[og];W[oh];B[qh];W[kl];B[kh];W[li];B[lm];W[ll];B[kn];W[il];B[hk];W[ik];B[ij];W[ld];B[lf];W[mf];B[me];W[nm];B[qk];W[le];B[lg];W[mh];B[ni];W[hj];B[hl];W[mm];B[mn];W[km];B[ln];W[im];B[oi];W[hm];B[fn];W[eo];B[gm];W[lh];B[ml];W[do];B[dm];W[bm];B[bn];W[ih];B[jj];W[jg])"

  output_str = sgf_to_one_line_json(sgf_data)
  output = json.loads(output_str)
  print(output)

  assert isinstance(output, dict), "Output is not a dictionary"
  assert "id" in output, "Key 'id' not in output"
  assert isinstance(output["id"], str), "'id' is not a string"

  assert "rules" in output, "Key 'rules' not in output"
  assert isinstance(output["rules"], (str, dict)), "'rules' is not a string or json"

  assert "komi" in output, "Key 'komi' not in output"
  assert -150 < output["komi"] < 150, "'komi' is not between -150 and 150"

  assert "boardXSize" in output, "Key 'boardXSize' not in output"
  assert output["boardXSize"] in [9, 13, 19], "'boardXSize' is not 9, 13 or 19"

  assert "boardYSize" in output, "Key 'boardYSize' not in output"
  assert output["boardYSize"] in [9, 13, 19], "'boardYSize' is not 9, 13 or 19"
