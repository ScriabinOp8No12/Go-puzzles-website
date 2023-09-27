import React, { useEffect } from "react";
import "./styles/GliftPublicPuzzle.css";
import "../lib/glift";
/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const PotentialPuzzles = () => {
  // Dynamically pass in sgf strings (loop) in order from backend sorted by lowest move_number / initialPosition
  // Also pass in database move_number value to substitute the "initialPosition" value below (remember to subtract 1)
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

  const sgfCollection = [sgf1, sgf2, sgf3];

  useEffect(() => {
    glift.create({
      // pass sgfCollection here, it has default behavior that gives us the arrow keys to navigate between the sgfs in the collection
      sgfCollection,
      divId: "gliftContainer",
    });
  });

  return <div id="gliftContainer"></div>;
};

export default PotentialPuzzles;
