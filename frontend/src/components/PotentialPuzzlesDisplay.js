import React, { useEffect } from "react";
import "./styles/GliftPublicPuzzle.css";
import "../lib/glift";
/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

// ********** Render the specific sgf_id from the url (useParams()) **************** //
const PotentialPuzzlesDisplay = () => {
  // Dynamically pass in sgf strings (loop) in order from backend sorted by lowest move_number / initialPosition
  // Also pass in database move_number value to substitute the "initialPosition" value below (remember to subtract 1)

  // const { sgf_id } = useParams();
  // const dispatch = useDispatch();
  // // const sgfData = useSelector(state => state.sgfs.currentSgf);
  // // useRef here is to persist the reference to the div across re-renders so that the Go board can be correctly initialized and manipulated
  // // const boardRef = useRef(null);

  // useEffect(() => {
  //   dispatch(fetchSgfByIdThunk(sgf_id));
  // }, [dispatch, sgf_id]);

  const sgf1 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq](;B[qr]C[Incorrect - This was the actual move played in the game!])(;B[jp]C[CORRECT];W[jq]C[CORRECT];B[ip]C[CORRECT];W[iq]C[CORRECT];B[hq]C[CORRECT];W[hr]C[CORRECT];B[gq]C[CORRECT];W[gr]C[CORRECT];B[fq]C[CORRECT])(;B[qq]C[CORRECT];W[jp]C[CORRECT];B[po]C[CORRECT];W[pn]C[CORRECT])(;B[cb]C[CORRECT];W[bb]C[CORRECT];B[jp]C[CORRECT];W[jq]C[CORRECT];B[ip]C[CORRECT])(;B[rr]C[CORRECT];W[jp]C[CORRECT];B[nn]C[CORRECT];W[on]C[CORRECT];B[om]C[CORRECT];W[pm]C[CORRECT])(;B[mn]C[CORRECT];W[nn]C[CORRECT];B[jp]C[CORRECT];W[jq]C[CORRECT];B[iq]C[CORRECT])(;B[nn]C[CORRECT];W[on]C[CORRECT];B[om]C[CORRECT];W[qr]C[CORRECT])(;B[on]C[CORRECT];W[nn]C[CORRECT];B[pp]C[CORRECT])(;B[ip]C[CORRECT];W[jp]C[CORRECT]))",
    initialPosition: 30,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgf2 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr](;B[nq]C[Incorrect - This was the actual move played in the game!])(;B[ip]C[CORRECT];W[jp]C[CORRECT];B[jo]C[CORRECT];W[iq]C[CORRECT];B[hq]C[CORRECT];W[io]C[CORRECT];B[hp]C[CORRECT];W[ko]C[CORRECT]))",
    initialPosition: 34,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgf3 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on](;B[jp]C[Incorrect - This was the actual move played in the game!])(;B[ip]C[CORRECT];W[iq]C[CORRECT];B[hq]C[CORRECT];W[jp]C[CORRECT];B[ir]C[CORRECT]))",
    initialPosition: 36,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgf4 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd](;W[pe]C[Incorrect - This was the actual move played in the game!])(;W[qq]C[CORRECT];B[qs]C[CORRECT];W[ll]C[CORRECT];B[jl]C[CORRECT]))",
    initialPosition: 53,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgf5 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb](;W[nd]C[Incorrect - This was the actual move played in the game!])(;W[ll]C[CORRECT];B[ro]C[CORRECT];W[qp]C[CORRECT])(;W[lm]C[CORRECT];B[ro]C[CORRECT];W[qp]C[CORRECT])(;W[or]C[CORRECT];B[ro]C[CORRECT];W[rn]C[CORRECT];B[qn]C[CORRECT])(;W[nl]C[CORRECT];B[nk]C[CORRECT];W[ok]C[CORRECT];B[oj]C[CORRECT])(;W[pk]C[CORRECT];B[pl]C[CORRECT])(;W[km]C[CORRECT]))",
    initialPosition: 57,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgf6 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob](;W[od]C[Incorrect - This was the actual move played in the game!])(;W[or]C[CORRECT];B[ro]C[CORRECT];W[qp]C[CORRECT];B[rn]C[CORRECT]))",
    initialPosition: 59,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgf7 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob];W[od];B[mc];W[md];B[ld];W[le];B[ke](;W[kf]C[Incorrect - This was the actual move played in the game!])(;W[lf]C[CORRECT];B[ro]C[CORRECT];W[rn]C[CORRECT];B[qn]C[CORRECT];W[qm]C[CORRECT];B[qp]C[CORRECT])(;W[kd]C[CORRECT];B[lc]C[CORRECT];W[kf]C[CORRECT];B[je]C[CORRECT];W[mf]C[CORRECT];B[ro]C[CORRECT];W[qp]C[CORRECT])(;W[pb]C[CORRECT];B[pa]C[CORRECT];W[lf]C[CORRECT];B[kf]C[CORRECT];W[lg]C[CORRECT]))",
    initialPosition: 65,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgf8 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[7.50]TM[300]GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]RE[B+Resign];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr];B[nq];W[on];B[jp];W[iq];B[ip];W[hq];B[go];W[fp];B[ol];W[nm];B[mk];W[rd];B[re];W[qc];B[rc];W[pd];B[qe];W[rb];B[sd];W[pe];B[pc];W[oc];B[qb];W[nd];B[ob];W[od];B[mc];W[md];B[ld];W[le];B[ke];W[kf](;B[kd]C[Incorrect - This was the actual move played in the game!])(;B[lf]C[CORRECT];W[me]C[CORRECT];B[kd]C[CORRECT];W[oj]C[CORRECT];B[ro]C[CORRECT];W[qp]C[CORRECT]))",
    initialPosition: 66,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgfCollection = [sgf1, sgf2, sgf3, sgf4, sgf5, sgf6, sgf7, sgf8];

  useEffect(() => {
    glift.create({
      // pass sgfCollection here, it has default behavior that gives us the arrow keys to navigate between the sgfs in the collection
      sgfCollection,
      divId: "gliftContainer",
    });
  });

  return <div id="gliftContainer"></div>;
};

export default PotentialPuzzlesDisplay;
