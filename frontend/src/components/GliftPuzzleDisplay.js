import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPublicPuzzleByIdThunk } from "../store/publicPuzzles";
import "./styles/GliftPublicPuzzle.css"
// import "../../public/glift.js" // Can't import from outside src in React, so I moved glift.js into the src/lib folder instead
import "../lib/glift"
/* global glift */  // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const GliftPuzzleDisplay = () => {
  const { puzzle_id } = useParams();
  const dispatch = useDispatch();
  const puzzleData = useSelector((state) => state.puzzles.currentPublicPuzzle); // need to modify based on store structure
  const [problemSolved, setProblemSolved] = useState(false);

  // Use useCallback to memoize callback functions, good for performance and avoiding unnecessary rerenders
  const onProblemCorrect = useCallback(() => {
    if (!problemSolved) {
      alert("Correct!");
      setProblemSolved(true);
      updateUserRanking(true);
    }
  }, [problemSolved]);

  const onProblemIncorrect = useCallback(() => {
    if (!problemSolved) {
      alert("Incorrect!");
      setProblemSolved(true);
      updateUserRanking(false);
    }
  }, [problemSolved]);

  const updateUserRanking = (isCorrect) => {
    if (isCorrect) console.log("ranking goes up");
    else console.log("ranking goes down");
  };

  useEffect(() => {
    // Fetch the puzzle data when the component mounts, put query parameters inside the thunk?
    dispatch(fetchPublicPuzzleByIdThunk(puzzle_id));
  }, [dispatch, puzzle_id]);


  useEffect(() => {
    if (puzzleData) {
      let checkCorrectHook = new glift.api.HookOptions({
        problemCorrect: onProblemCorrect,
        problemIncorrect: onProblemIncorrect,
      });
      // [puzzleData, onProblemCorrect, onProblemIncorrect]);

      glift.api.iconActionDefaults['problem-explanation'].click = function() {
        // Do nothing when the icon is clicked.
      };
      glift.api.iconActionDefaults['problem-explanation'].tooltip = "Explore the solution disabled";

      glift.create({
        divId: "gliftContainer",
        sgf: {
          // Verify that this will actually work here..., we used url: the other time,
          // but now we are reading from the database
          sgfString: puzzleData.sgf_data, // this will get the sgf_data column from the database
          initialPosition: puzzleData.move_number, // move_number is the correct column from the database
          problemConditions: { C: ["CORRECT"] },
          widgetType: "STANDARD_PROBLEM",
        },
        display: { theme: 'DEPTH' },
        hooks: checkCorrectHook,
      });
    }
  }, [puzzleData, onProblemCorrect, onProblemIncorrect]);

  return (
  <div id="gliftContainer"></div>
  );
};

export default GliftPuzzleDisplay;
