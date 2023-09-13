import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPublicPuzzleByIdThunk } from "../store/publicPuzzles";
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

  // ****** Block below is used to disable the explore the solution button, until the problemSolved state becomes true! ****** //
  const [originalClick, setOriginalClick] = useState(null);

  // Capture original function only once, when the component mounts, so we can reset it back to the original function after our problemSolved state becomes true
  useEffect(() => {
    setOriginalClick(
      () => glift.api.iconActionDefaults["problem-explanation"].click
    );
  }, []);

  useEffect(() => {
    if (!problemSolved) {
      // Disable problem explanation (? button) when the problem isn't solved yet
      glift.api.iconActionDefaults["problem-explanation"].click = function () {
        // Do nothing when the icon is clicked.
      };
      // Change tooltip text to "Explore the solution disabled"
      glift.api.iconActionDefaults["problem-explanation"].tooltip =
        "Explore the solution disabled";
    } else {
      // Restore the original function by setting it to the originalClick state! Manually change the tooltip back too.
      glift.api.iconActionDefaults["problem-explanation"].click = originalClick;
      glift.api.iconActionDefaults["problem-explanation"].tooltip =
        "Explore the solution";
    }
  }, [problemSolved, originalClick]); // Effect runs whenever problemSolved or originalClick changes

  // ****** Above block disables the explore the solution button until the user has tried solving the puzzle ****** //

  // Use useCallback to memoize callback functions, good for performance and avoiding unnecessary rerenders
  const onProblemCorrect = useCallback(() => {
    if (!problemSolved) {
      // alert("Correct!");
      setProblemSolved(true);
      updateUserRanking(true);
    }
  }, [problemSolved]);

  const onProblemIncorrect = useCallback(() => {
    if (!problemSolved) {
      // alert("Incorrect!");
      setProblemSolved(true);
      updateUserRanking(false);
    }
  }, [problemSolved]);

  const updateUserRanking = (isCorrect) => {
    // Only proceed if the ranking has not yet been updated
    if (!isRankingUpdated.current) {
      if (isCorrect) {
        // Show ranking display in comment box area where user rank goes up and puzzle rank goes down
        console.log("ranking goes up");
      }
      // Otherwise show the user rank went down, and the puzzle rank went up
      else console.log("ranking goes down");
      // Mark that the ranking has been updated, so that subsequent triggers do not result in multiple logs or UI updates.
      isRankingUpdated.current = true;
    }
  };

  useEffect(() => {
    // Fetch the puzzle data when the component mounts, put query parameters inside the thunk?
    dispatch(fetchPublicPuzzleByIdThunk(puzzle_id));
  }, [dispatch, puzzle_id]);

  useEffect(() => {
    // Ensures Glift board will only be initialized when there's a valid puzzleDat and if it hasn't been initialized already
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
          initialPosition: puzzleData.move_number, // move_number is the column from the database
          problemConditions: { C: ["CORRECT"] },
          widgetType: "STANDARD_PROBLEM",
        },
        display: { theme: "DEPTH" },
        hooks: checkCorrectHook,
      });
    }
  }, [puzzleData, onProblemCorrect, onProblemIncorrect]);

  return <div id="gliftContainer"></div>;
};

export default GliftPuzzleDisplay;
