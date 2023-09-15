import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const RankingDisplay = () => {
  const rankingData = useSelector((state) => state.puzzles.userWin);
  const [displayMessage, setDisplayMessage] = useState("");

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
    }
  }, [rankingData]);

  return (
    <>
      <div className="rankingContainer">{displayMessage}</div>
    </>
  );
};

export default RankingDisplay;
