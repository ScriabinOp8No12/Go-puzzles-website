import React, { useEffect, useRef} from "react";

import "../../lib/glift";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const BasicRulesPage7 = () => {

  const gliftInstance = useRef(null);

  useEffect(() => {
    // if (potentialPuzzlesData) {
      const sgfCollection = [{
        sgfString: "(;GM[1]FF[4]CA[UTF-8]AP[Glift]ST[2]\n" +
        "RU[Japanese]SZ[19]KM[0.00]\n" +
        "C[Black to play. There aren't many options " +
        "to choose from, but you might be surprised at the answer!]" +
        "PW[White]PB[Black]AW[pa][qa][nb][ob][qb][oc][pc][md][pd][ne][oe]\n" +
        "AB[na][ra][mb][rb][lc][qc][ld][od][qd][le][pe][qe][mf][nf][of][pg]\n" +
        "(;B[mc]\n" +
          ";W[nc]C[White lives.])\n" +
        "(;B[ma]\n" +
          "(;W[oa]\n" +
            ";B[nc]\n" +
            ";W[nd]\n" +
            ";B[mc]C[White dies.]GB[1])\n" +
          "(;W[mc]\n" +
            "(;B[oa]\n" +
            ";W[nd]\n" +
            ";B[pb]C[White lives])\n" +
            "(;B[nd]\n" +
              ";W[nc]\n" +
              ";B[oa]C[White dies.]GB[1]))\n" +
          "(;W[nd]\n" +
            ";B[mc]\n" +
            ";W[oa]\n" +
            ";B[nc]C[White dies.]GB[1]))\n" +
        "(;B[nc]\n" +
          ";W[mc]C[White lives])\n" +
        "(;B[]C[A default consideration]\n" +
          ";W[mc]C[White lives easily]))",
        // initialPosition: '', // ******* THIS AUTO PLAYS THE NEXT MOVE IN THE SGF if we play the sgf move?!?!?!?
        // // initialPosition: puzzle.move_number - 1,
        problemConditions: { GB: [] },
        widgetType: "STANDARD_PROBLEM",
      }];

      const instance = glift.create({
        sgfCollection,
        divId: "gliftContainer",
        display: {
          drawBoardCoords: true,
          disableZoomForMobile: true,
        },
      });

      gliftInstance.current = instance;

      return () => {
        instance.destroy();
        // Restore Glift's default behavior upon unmounting
        // glift.api.iconActionDefaults["chevron-right"].click = defaultNextSgf;
        // glift.api.iconActionDefaults["chevron-left"].click = defaultPrevSgf;
      };
    // }
  }, []);

  return (
    <div className="tutorial-puzzle-page">
      <h2>Basic Rules: Capturing Stones</h2>
      <p>To capture a stone, you must take away all of the stone(s) liberties</p>
      <p>A liberty is any straight line coming off of the stone(s)</p>
      <p>How would we capture the following stone?</p>

      <div className="glift-wrapper">
      <div id="gliftContainer"></div>
      </div>
    </div>
  );
};

export default BasicRulesPage7;
