import React, { useEffect } from "react";
import "./styles/GliftPublicPuzzle.css";
import "../lib/glift";
/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const PotentialPuzzles = () => {
  const sgf1 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[375.00];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq](;B[qr]C[Incorrect - This was the actual move played in the game!])(;B[on]C[CORRECT])(;B[qq]C[CORRECT])(;B[nn]C[CORRECT])(;B[rr]C[CORRECT])(;B[cb]C[CORRECT])(;B[jp]C[CORRECT]))",
    initialPosition: 30,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgf2 = {
    sgfString:
      "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Chinese]SZ[19]KM[375.00];B[qd];W[dp];B[pq];W[dd];B[cc];W[dc];B[cd];W[ce];B[be];W[bf];B[cf];W[de];B[bg];W[bd];B[af];W[bc];B[nc];W[qo];B[ql];W[op];B[oq];W[np];B[mr];W[lq];B[mq];W[mp];B[lp];W[kq];B[lo];W[rq];B[qr];W[rr];B[lr];W[kr](;B[nq]C[Incorrect - This was the actual move played in the game!])(;B[ip]C[CORRECT]))",
    initialPosition: 34,
    problemConditions: {
      C: ["CORRECT"],
    },
    widgetType: "STANDARD_PROBLEM",
  };

  const sgfCollection = [sgf1, sgf2];

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
