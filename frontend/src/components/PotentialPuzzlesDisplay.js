import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles/PotentialPuzzlesDisplay.css";
import "../lib/glift";
import { fetchAllPotentialPuzzlesBySgfIdThunk } from "../store/potentialPuzzles";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const PotentialPuzzlesDisplay = () => {
  const { sgf_id } = useParams();
  const dispatch = useDispatch();

  // Fetch the data from the Redux store
  const potentialPuzzlesData = useSelector(
    (state) => state.potentialPuzzles.currentSgfPotentialPuzzle
  );

  useEffect(() => {
    dispatch(fetchAllPotentialPuzzlesBySgfIdThunk(sgf_id));
  }, [dispatch, sgf_id]);

  // Use useRef to keep track of the current Glift instance
  const gliftInstance = useRef(null);

  // Map the data from the store to the sgfCollection format
  // Ensure it's only called if the potentialPuzzlesdata is not null or not undefined
  useEffect(() => {
    const sgfCollection = potentialPuzzlesData
      ? potentialPuzzlesData.map((puzzle) => ({

          sgfString: puzzle.sgf_data,
          // ** below line shows 9 by 9 board properly ** //
          // sgfString: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[6.50] AW[da][eb][dc][ad][cd][dd][be][ce]AB[ba][cb][db][bc][cc][bd] (;B[ab]C[CORRECT]) (;B[ac]C[Incorrect] ;W[ab]C[Incorrect]) (;B[ec]C[Incorrect] ;W[fc] ;B[ed] ;W[ee] ;B[fd] ;W[gd] ;B[fe] ;W[ff] ;B[ge] ;W[he] ;B[gf] ;W[gg] ;B[hf] ;W[hg] ;B[if] ;W[ie]))",
          // sgfString: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[13]KM[0.00] PW[White]PB[Black]AW[ia][ib][jc][kc][lc][id]AB[ja][jb][kb][lb][mb] ;B[la]C[Correct])",
          // sgfString: "(;FF[4] CA[UTF-8] GM[1] DT[2023-09-03] PC[OGS: https://online-go.com/game/56766164] GN[play for fun] PB[iself101] PW[erikdeviking] BR[7k] WR[6k] TM[0]OT[15 simple] RE[B+16.5] SZ[9] KM[5.5] RU[Japanese] ;B[gc] ;W[gd])",
          // sgfString: '(;AB[mc][pd][qd][oe][of][pf][cp]AW[lc][oc][md][od][ne][pe][eq]C[Copy this joseki.]CA[UTF-8]FF[4]GM[1]PL[B]SZ[19];B[gq];W[do];B[dp];W[ep];B[eo];W[fo];B[en];W[gp];B[dn];GB[]W[hq])',
          // ************* Manually adding the sgfString below works for rending a 9 by 9 Go board! But it only has AB and AW properties *********************
          // sgfString: "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Japanese]SZ[9]KM[0.00]PW[White]PB[Black]AW[ga][gb][hb][hc][ic]AB[fb][gc][fd][hd]C[9x9! An example diagram])",

          // Go one move before the mistake "move_number", so the user can try the puzzle
          initialPosition: puzzle.move_number - 1, // *********** THIS IS CAUSING ISSUES somehow ********************
          // initialPosition: 0,
          problemConditions: {
            C: ["CORRECT"],
          },
          widgetType: "STANDARD_PROBLEM",
        }))
      : [];

    if (sgfCollection.length > 0) {
      // Destroy the previous instance if it exists
      if (gliftInstance.current) {
        gliftInstance.current.destroy();
      }

      // Log the SGF strings
    sgfCollection.forEach((item, index) => {
      console.log(`SGF string ${index + 1}:`, item.sgfString);
    });

      // Create a new Glift instance
      gliftInstance.current = glift.create({
        sgfCollection,
        divId: "gliftContainer",
        display: {
          drawBoardCoords: true,
          disableZoomForMobile: true,
        },
      });
    }
  }, [potentialPuzzlesData]);

  return <div id="gliftContainer"></div>;
};

export default PotentialPuzzlesDisplay;
