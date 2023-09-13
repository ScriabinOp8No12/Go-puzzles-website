import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPublicPuzzleByIdThunk } from "../store/publicPuzzles";
import "./styles/GliftPublicPuzzle.css";
import "../lib/glift";
/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const GliftPuzzleDisplay = () => {
  const { puzzle_id } = useParams();
  const dispatch = useDispatch();
  const puzzleData = useSelector((state) => state.puzzles.currentPublicPuzzle); // need to modify based on store structure
  const [problemSolved, setProblemSolved] = useState(false);

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
      // Restore the original function and tooltip
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
