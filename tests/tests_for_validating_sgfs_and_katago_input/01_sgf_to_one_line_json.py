from katago.sgf_to_oneLineJson_all_moves_for_endpoint import sgf_to_one_line_json
import json

def test_sgf_to_one_line_json():

  ''' Converts a SGF string into the specific JSON format that KataGo Analysis Engine requires
      Required fields are: id, rules, boardXSize, and boardYSize. Komi is highly recommended, but not required
      The assertions in this test requires that all of the above fields are in the output'''

  sgf_data = "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[7.50]TM[300] GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]C[SGF generated by KaTrain 1.12.3ㅤ​]RE[B+Resign]KTV[1.0]RL[0]RN[3]TC[3]TT[30] ;B[qd] ;W[dp] ;B[pq] ;W[dd] ;B[cc] ;W[dc] ;B[cd] ;W[ce] ;B[be] ;W[bf] ;B[cf] ;W[de] ;B[bg] ;W[bd] ;B[af] ;W[bc] ;B[nc] ;W[qo] ;B[ql] ;W[op] ;B[oq] ;W[np] ;B[mr] ;W[lq] ;B[mq] ;W[mp] ;B[lp] ;W[kq] ;B[lo] ;W[rq] ;B[qr]C[Move 31: B R2 Score: W+3.9 Win rate: W 71.1% Estimated point loss: 4.3 Predicted top move was S2 (B+0.5). PV: BS2 K4 O6 P6 P7 O7 Q6 P5 P8 R3 R2 M6 Move was #96 according to policy (0.00%). Top policy move was K4 (40.0%). ㅤ​] ;W[rr] ;B[lr] ;W[kr] ;B[nq]C[Move 35: B O3 Score: W+8.9 Win rate: W 87.0% Estimated point loss: 4.4 Predicted top move was J4 (W+4.2). PV: BJ4 K4 K5 J3 H4 H3 G3 G4 G2 J5 H5 L5 J6 M6 N5 L4 Move was #33 according to policy (0.03%). Top policy move was J4 (29.8%). ㅤ​] ;W[on] ;B[jp] ;W[iq] ;B[ip] ;W[hq] ;B[go] ;W[fp] ;B[ol] ;W[nm] ;B[mk] ;W[rd] ;B[re] ;W[qc] ;B[rc] ;W[pd] ;B[qe] ;W[rb] ;B[sd] ;W[pe] ;B[pc] ;W[oc] ;B[qb] ;W[nd] ;B[ob] ;W[od]C[Move 60: W P16 Score: W+5.4 Win rate: W 78.3% Estimated point loss: 4.8 Predicted top move was M7 (W+10.4). PV: WM7 K7 L8 K8 L9 K9 L10 N12 Move was #134 according to policy (0.01%). Top policy move was M7 (32.0%). ㅤ​] ;B[mc] ;W[md] ;B[ld] ;W[le] ;B[ke] ;W[kf]C[Move 66: W L14 Score: W+0.5 Win rate: W 55.3% Estimated point loss: 5.4 Predicted top move was M14 (W+6.0). PV: WM14 F5 E5 L14 M13 P13 L13 L16 M7 K7 L9 Move was #3 according to policy (1.72%). Top policy move was M14 (75.8%). ㅤ​] ;B[kd])"

  one_line_json_output = sgf_to_one_line_json(sgf_data)

  # Invalid one line json output below for testing
  # one_line_json_output = '''{"komi": 7.5, "boardXSize": 19, "boardYSize": 19, "initialPlayer": "W", "analyzeTurns": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67], "initialStones": [], "moves": [["B", "R16"], ["W", "D4"], ["B", "Q3"], ["W", "D16"], ["B", "C17"], ["W", "D17"], ["B", "C16"], ["W", "C15"], ["B", "B15"], ["W", "B14"], ["B", "C14"], ["W", "D15"], ["B", "B13"], ["W", "B16"], ["B", "A14"], ["W", "B17"], ["B", "O17"], ["W", "R5"], ["B", "R8"], ["W", "P4"], ["B", "P3"], ["W", "O4"], ["B", "N2"], ["W", "M3"], ["B", "N3"], ["W", "N4"], ["B", "M4"], ["W", "L3"], ["B", "M5"], ["W", "S3"], ["B", "R2"], ["W", "S2"], ["B", "M2"], ["W", "L2"], ["B", "O3"], ["W", "P6"], ["B", "K4"], ["W", "J3"], ["B", "J4"], ["W", "H3"], ["B", "G5"], ["W", "F4"], ["B", "P8"], ["W", "O7"], ["B", "N9"], ["W", "S16"], ["B", "S15"], ["W", "R17"], ["B", "S17"], ["W", "Q16"], ["B", "R15"], ["W", "S18"], ["B", "T16"], ["W", "Q15"], ["B", "Q17"], ["W", "P17"], ["B", "R18"], ["W", "O16"], ["B", "P18"], ["W", "P16"], ["B", "N17"], ["W", "N16"], ["B", "M16"], ["W", "M15"], ["B", "L15"], ["W", "L14"], ["B", "L16"]]}'''
  print(one_line_json_output)

  # Remove the last newline character if present
  if one_line_json_output.endswith('\n'):
      one_line_json_output = one_line_json_output[:-1]

  # Check that there are no newline characters in the output to verify that the output is on one line
  assert '\n' not in one_line_json_output

  # Parse JSON string to Python dictionary
  parsed_json = json.loads(one_line_json_output)
  errors = []

  if 'id' not in parsed_json:
      errors.append("Missing 'id' key")

  if 'rules' not in parsed_json or not isinstance(parsed_json['rules'], (str, dict)):
      errors.append("Missing or incorrect type for 'rules' key")

  if 'komi' not in parsed_json:
      errors.append("Missing 'komi' key")

  if 'boardXSize' not in parsed_json:
      errors.append("Missing 'boardXSize' key")

  if 'boardYSize' not in parsed_json:
      errors.append("Missing 'boardYSize' key")

  assert not errors, "Errors detected:\n" + "\n".join(errors)
