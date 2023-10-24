import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import "./styles/PotentialPuzzlesDisplay.css";
import "../lib/glift";
import { fetchUserPuzzleByIdThunk } from "../store/userPuzzles";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const UserPuzzleDisplay = () => {
  const { puzzle_id } = useParams();
  const dispatch = useDispatch();
  const gliftInstance = useRef(null) // Keep track of the glift instance

  const userPuzzle = useSelector(
    (state) => state.userPuzzles.userPuzzle
  );

  useEffect(() => {
    // Fetch the userpuzzle data when the component mounts
    dispatch(fetchUserPuzzleByIdThunk(puzzle_id));
  }, [dispatch, puzzle_id]);

  useEffect(() => {
    if (userPuzzle && userPuzzle.Puzzle) { // Check that both userPuzzle and its nested Puzzle object are defined
      const puzzle = userPuzzle.Puzzle; // userPuzzle.Puzzle contains the relevant puzzle data
      const userPuzzleSgf = {
        sgfString: puzzle.sgf_data,
        initialPosition: puzzle.move_number - 1,
        problemConditions: { C: ["CORRECT"] },
        widgetType: "STANDARD_PROBLEM",
      };

      const instance = glift.create({
        divId: "gliftContainer",
        sgf: userPuzzleSgf,
        display: {
          drawBoardCoords: true,
          disableZoomForMobile: true,
        },
      });

      gliftInstance.current = instance;

      // Clean up the glift instance
      return () => {
        instance.destroy();
      };
    }
  }, [userPuzzle]);

  return (
    <>
      <div id="gliftContainer"></div>
    </>
  );
};

export default UserPuzzleDisplay;
