import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPublicPuzzlesThunk } from '../store/publicPuzzles';

const GliftPuzzleDisplay = () => {
  const dispatch = useDispatch();
  const puzzleData = useSelector((state) => state.puzzles.currentPuzzle); // modify based on store structure

  const [problemSolved, setProblemSolved] = useState(false);

  const onProblemCorrect = () => {
    if (!problemSolved) {
      alert("Correct!");
      setProblemSolved(true);
      updateUserRanking(true);
    }
  };

  const onProblemIncorrect = () => {
    if (!problemSolved) {
      alert("Incorrect!");
      setProblemSolved(true);
      updateUserRanking(false);
    }
  };

  const updateUserRanking = (isCorrect) => {
    if (isCorrect) console.log("ranking goes up");
    else console.log("ranking goes down");
  };

  useEffect(() => {
    // Fetch the puzzle data when the component mounts, put query parameters inside the thunk?
    dispatch(getPublicPuzzlesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (puzzleData) {
      let checkCorrectHook = new glift.api.HookOptions({
        problemCorrect: onProblemCorrect,
        problemIncorrect: onProblemIncorrect
      });

      glift.create({
        divId: "gliftContainer",
        sgf: {
          sgfString: puzzleData.sgf_data,
          initialPosition: puzzleData.move_number,
          problemConditions: { C: ['CORRECT'] },
          widgetType: 'STANDARD_PROBLEM'
        },
        hooks: checkCorrectHook,
      });
    }
  }, [puzzleData]);

  return (
    <div id="gliftContainer"></div>
  );
};

export default GliftPuzzleDisplay;
