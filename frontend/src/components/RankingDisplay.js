import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateRankingsAndSolvedCounterThunk } from "../store/publicPuzzles";

const RankingDisplay = () => {
  const { puzzle_id } = useParams();
  const dispatch = useDispatch();
  const rankingData = useSelector((state) => state.puzzles.userWin);
  const [displayMessage, setDisplayMessage] = useState("");

// ****** FOR TESTING THUNK MANUALLY *****
  // useEffect(() => {
  //   console.log("Manually dispatching the update rankings thunk");
  //   dispatch(updateRankingsAndSolvedCounterThunk(puzzle_id, 1)); // replace true with appropriate value for userWin
  // }, []);

// **************

  useEffect(() => {
    if (rankingData !== null) {
      const {
        oldUserRank,
        oldPuzzleRank,
        newUserRank,
        newPuzzleRank,
        newUserSolvedPuzzlesCount,
        newPuzzleTimesSolvedCount,
      } = rankingData;

      const userRankDirection = newUserRank >= oldUserRank ? "up" : "down";
      const puzzleRankDirection =
        newPuzzleRank >= oldPuzzleRank ? "up" : "down";

      let message = `Your rank went ${userRankDirection} from ${oldUserRank} to ${newUserRank}, and the puzzle rank went ${puzzleRankDirection} from ${oldPuzzleRank} to ${newPuzzleRank}. Your solved puzzles count is ${newUserSolvedPuzzlesCount}, and this puzzle has been solved ${newPuzzleTimesSolvedCount} times.`;

      setDisplayMessage(message);
      dispatch(updateRankingsAndSolvedCounterThunk(puzzle_id, rankingData));
    }
  }, [dispatch, puzzle_id, rankingData]);

  return (
    <>
      <div className="rankingContainer">{displayMessage}</div>
    </>
  );
};

export default RankingDisplay;
