import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams} from "react-router-dom";
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
  const puzzleData = useSelector((state) => state.puzzles.currentPublicPuzzle);
  const [problemSolved, setProblemSolved] = useState(false);
  const isBoardInitialized = useRef(false); // Keep track of board initialization
  const isRankingUpdated = useRef(false); // Track if the ranking has been updated.
  const [showRankingDisplay, setShowRankingDisplay] = useState(false); // Track if we want to display the ranking display component
  const [gliftState, setGliftState] = useState(null);
  const [originalClick, setOriginalClick] = useState(null);

  useEffect(() => {
    // Fetch the puzzle data when the component mounts, put query parameters inside the thunk?
    dispatch(fetchPublicPuzzleByIdThunk(puzzle_id));
  }, [dispatch, puzzle_id]);

  const updateUserRanking = useCallback(
    (isCorrect) => {
      // Only proceed if the ranking has not yet been updated
      if (!isRankingUpdated.current) {
        // Adding this here properly dispatches the action, and updates the user ranking in the backend!
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

    // ****** Block below is used to disable the explore the solution button, until the problemSolved state becomes true! ****** //
  // Capture original function only once, when the component mounts, so we can reset it back to the original function after our problemSolved state becomes true
  useEffect(() => {
    setOriginalClick(
      () => glift.api.iconActionDefaults["problem-explanation"].click
    );
  }, []);

  useEffect(() => {
    if (!problemSolved) {

      // Grab all 4 elements of the explanation_buttons and disable them with css property
      const problem_explanation_buttons = document.querySelectorAll(
        '[id$="button_problem-explanation"]'
      );

      Array.from(problem_explanation_buttons).forEach(
        (problem_explanation_button) => {
          if (problem_explanation_button) {
            problem_explanation_button.style.pointerEvents = "none";
          }
        }
      );

    } else if (problemSolved) {

      // Restore the original function by setting it to the originalClick state! Manually change the tooltip back too.
      glift.api.iconActionDefaults["problem-explanation"].click = originalClick;
      glift.api.iconActionDefaults["problem-explanation"].tooltip =
        "Explore the solution";
    }
    // Need gliftstate in dependency array because otherwise the disabled button is not disabled on initial render
  }, [problemSolved, originalClick, gliftState]); // Effect runs whenever problemSolved or originalClick changes

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

      setGliftState(
        glift.create({
          divId: "gliftContainer",
          sgf: {
            sgfString: puzzleData.sgf_data, // sgf_data column from the database
            initialPosition: puzzleData.move_number - 1, // move_number is the column from the database, need to go back one because the mistake happens on the move_number
            problemConditions: { C: ["CORRECT"] },
            widgetType: "STANDARD_PROBLEM",
          },
          display: {
            drawBoardCoords: true,
            disableZoomForMobile: true,
            theme: "DEPTH",
          },
          hooks: checkCorrectHook,
        })
      );

      // Cleanup function, otherwise we need a hard refresh to show the puzzle (it'll show the previous puzzle we were on)
      return () => {
        if (gliftState) {
          gliftState.destroy();
        }
        glift.api.iconActionDefaults["problem-explanation"].click =
          originalClick;
        glift.api.iconActionDefaults["problem-explanation"].tooltip =
          "Explore the solution";
        isBoardInitialized.current = false; // Reset the flag here otherwise the Go board doesn't show up when we swap to a different puzzle
      };
    }
  }, [puzzleData, onProblemCorrect, onProblemIncorrect, originalClick]);

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
