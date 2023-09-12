import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPublicPuzzlesThunk } from '../store/publicPuzzles';

const GliftPuzzleDisplay = () => {
  const dispatch = useDispatch();
  const puzzleData = useSelector((state) => state.puzzles.currentPuzzle); // need to modify based on store structure

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
          // Verify that this will actually work here..., we used url: the other time,
          // but now we are reading from the database
          sgfString: puzzleData.sgf_data, // this will get the sgf_data column from the database
          initialPosition: puzzleData.move_number, // move_number is the correct column from the database
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
