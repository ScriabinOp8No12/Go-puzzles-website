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
  // const [currentPuzzle, setCurrentPuzzle] = useState(null);
  // const [saveError, setSaveError] = useState(null);
  // const [saveSuccessMessage, setSaveSuccessMessage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const potentialPuzzle = useSelector(
    (state) => state.userPuzzles.userPuzzle
  );

  const isBoardInitialized = useRef(false); // Keep track of board initialization
  const [gliftState, setGliftState] = useState(null);

  useEffect(() => {
    // Fetch the puzzle data when the component mounts, put query parameters inside the thunk?
    dispatch(fetchUserPuzzleByIdThunk(puzzle_id));
  }, [dispatch, puzzle_id]);


  // useEffect(() => {
  //   // Ensures Glift board will only be initialized when there's a valid puzzleData and if it hasn't been initialized already
  //   // isBoardinitialized starts as false, so it will pass the first time
  //   if (puzzleData && !isBoardInitialized.current) {
  //     // Prevent further reintializations of the board
  //     isBoardInitialized.current = true;
  //     let checkCorrectHook = new glift.api.HookOptions({
  //       problemCorrect: onProblemCorrect,
  //       problemIncorrect: onProblemIncorrect,
  //     });

  //     setGliftState(
  //       glift.create({
  //         divId: "gliftContainer",
  //         sgf: {
  //           sgfString: puzzleData.sgf_data, // sgf_data column from the database
  //           initialPosition: puzzleData.move_number - 1, // move_number is the column from the database, need to go back one because the mistake happens on the move_number
  //           problemConditions: { C: ["CORRECT"] },
  //           widgetType: "STANDARD_PROBLEM",
  //         },
  //         display: {
  //           drawBoardCoords: true,
  //           disableZoomForMobile: true,
  //           // theme: "DEPTH",
  //         },
  //         hooks: checkCorrectHook,
  //       })
  //     );

  //     // Cleanup function, otherwise we need a hard refresh to show the puzzle (it'll show the previous puzzle we were on)
  //     return () => {
  //       if (gliftState) {
  //         gliftState.destroy();
  //       }
  //       glift.api.iconActionDefaults["problem-explanation"].click =
  //         originalClick;
  //       glift.api.iconActionDefaults["problem-explanation"].tooltip =
  //         "Explore the solution";
  //       isBoardInitialized.current = false; // Reset the flag here otherwise the Go board doesn't show up when we swap to a different puzzle
  //     };
  //   }
  //   // gliftState in the dependency array messes up the rendering as it goes into an infinite loop
  //   // eslint-disable-next-line
  // }, [puzzleData, onProblemCorrect, onProblemIncorrect, originalClick]);

  return (
    <>
      <div id="gliftContainer"></div>
    </>
  );
};

export default UserPuzzleDisplay;
