import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  fetchPublicPuzzleByIdThunk,
  updateRankingsAndSolvedCounterThunk,
} from "../store/publicPuzzles";
import RankingDisplay from "./RankingDisplay";

import "./styles/GliftPublicPuzzle.css";
import "../lib/glift";
/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const GliftPuzzleDisplay = () => {
  const { puzzle_id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const puzzleData = useSelector((state) => state.puzzles.currentPublicPuzzle);
  const [problemSolved, setProblemSolved] = useState(false);
  const isBoardInitialized = useRef(false); // Keep track of board initialization
  const isRankingUpdated = useRef(false); // Track if the ranking has been updated.
  const [showRankingDisplay, setShowRankingDisplay] = useState(false); // Track if we want to display the ranking display component

  // ****** Temporary solution for glift rendering issue when clicking a different puzzle -> simply refresh the home page whenever we go there ******
  // Issue with the temporary solution is that the filter on the home page would be reset too unless we save it, and user experience slightly less optimal with a refresh
  // Better solution would be to use .destroy() on the glift instance, then recreate it for each new puzzle when we click on it
  useEffect(() => {
    return history.listen((location) => {
      // Temporarily hard refresh the home page and potential_puzzles page to solve the glift instance bug issue,
      // maybe we could pass in the filter query parameters as another temporary solution
      if (location.pathname === "/" || location.pathname === "/potential_puzzles") {
        window.location.reload();
      }
    });
  }, [history]);

  useEffect(() => {
    // Fetch the puzzle data when the component mounts, put query parameters inside the thunk?
    dispatch(fetchPublicPuzzleByIdThunk(puzzle_id));
  }, [dispatch, puzzle_id]);

  // ****** Block below is used to disable the explore the solution button, until the problemSolved state becomes true! ****** //
  const [originalClick, setOriginalClick] = useState(null);

  const updateUserRanking = useCallback(
    (isCorrect) => {
      // Only proceed if the ranking has not yet been updated
      if (!isRankingUpdated.current) {
        // Adding this here properly dispatches the action, and updates the user ranking in the backend! :) now we have to display the component
        dispatch(updateRankingsAndSolvedCounterThunk(puzzle_id, isCorrect));
        isRankingUpdated.current = true;
      }
    },
    [dispatch, puzzle_id]
  );

  // Use useCallback to memoize callback functions, good for performance and avoiding unnecessary rerenders
  const onProblemCorrect = useCallback(() => {
    if (!problemSolved) {
      setProblemSolved(true);
      updateUserRanking(true); // pass in true into isCorrect (increase user ranking)
      setShowRankingDisplay(true); // set state of ranking display to true
    }
  }, [problemSolved, updateUserRanking]);

  const onProblemIncorrect = useCallback(() => {
    if (!problemSolved) {
      setProblemSolved(true);
      updateUserRanking(false); // pass in false into isCorrect (decrease user ranking)
      setShowRankingDisplay(true); // set state of ranking display to true
    }
  }, [problemSolved, updateUserRanking]);

  // Capture original function only once, when the component mounts, so we can reset it back to the original function after our problemSolved state becomes true
  useEffect(() => {
    setOriginalClick(
      () => glift.api.iconActionDefaults["problem-explanation"].click
    );
  }, []);

  // console.log("value of problemSolved right before disable button: ", problemSolved)

  useEffect(() => {
    // console.log("value of problemSolved within useEffect that triggers disabled button: ", problemSolved)
    if (!problemSolved) {
      // console.log("problem solved state within 1st useEffect:", problemSolved)
      // Disable problem explanation (? button) when the problem isn't solved yet
      glift.api.iconActionDefaults["problem-explanation"].click = function () {
        // Do nothing when the icon is clicked.
      };
      // Change tooltip text to "Explore the solution disabled"
      glift.api.iconActionDefaults["problem-explanation"].tooltip =
        "Explore the solution disabled";
    } else if (problemSolved) {
      // Restore the original function by setting it to the originalClick state! Manually change the tooltip back too.
      glift.api.iconActionDefaults["problem-explanation"].click = originalClick;
      glift.api.iconActionDefaults["problem-explanation"].tooltip =
        "Explore the solution";
    }
  }, [problemSolved, originalClick]); // Effect runs whenever problemSolved or originalClick changes

  // ****** Above block disables the explore the solution button until the user has tried solving the puzzle ****** //

  useEffect(() => {
    // Ensures Glift board will only be initialized when there's a valid puzzleData and if it hasn't been initialized already
    // isBoardinitialized starts as false, so it will pass the first time
    if (puzzleData && !isBoardInitialized.current) {
      // Prevent further reintializations of the board
      isBoardInitialized.current = true;
      let checkCorrectHook = new glift.api.HookOptions({
        problemCorrect: onProblemCorrect,
        problemIncorrect: onProblemIncorrect,
      });

      glift.create({
        divId: "gliftContainer",
        sgf: {
          sgfString: puzzleData.sgf_data, // sgf_data column from the database
          initialPosition: puzzleData.move_number - 1, // move_number is the column from the database, need to go back one because the mistake happens on the move_number
          problemConditions: { C: ["CORRECT"] },
          widgetType: "STANDARD_PROBLEM",
        },
        display:
        { drawBoardCoords: true,
          disableZoomForMobile: true,
          theme: "DEPTH" },
        hooks: checkCorrectHook,
      });
    }
  }, [puzzleData, onProblemCorrect, onProblemIncorrect]);

  // console.log("isRankingUpdated VALUE near end of code: ", isRankingUpdated.current)
  return (
    <>
      <div id="gliftContainer">
        {showRankingDisplay && (
          <div className="rankingDisplayComponent">
            <RankingDisplay />
          </div>
        )}
      </div>
    </>
  );
};

export default GliftPuzzleDisplay;

// ******************************************** //

// Code snippet for destroying the gliftinstance so when we click different puzzles, it reloads glift, but we have to recreate it otherwise the original
// puzzle functionality is messed up again, so this is pretty tricky

// useEffect(() => {
//   return () => {
//     // Cleanup code to destroy the existing Glift board instance
//     if (gliftInstance.current) {
//       gliftInstance.current.destroy();
//       gliftInstance.current = null;
//       isBoardInitialized.current = false;
//     }
//   };
// }, [puzzle_id]);  // Dependency on puzzle_id
