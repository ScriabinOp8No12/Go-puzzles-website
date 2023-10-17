import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RankingDisplay = () => {
  const rankingData = useSelector((state) => state.puzzles.userWin);
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    if (rankingData !== null) {
      const { oldUserRank, oldPuzzleRank, newUserRank, newPuzzleRank } =
        rankingData;

      let message;

      // NOTE: If the user's / puzzles rank wouldn't change after the attempt at the puzzle, meaning the rank difference was too large between the user and the puzzle,
      // we won't see the following "Your rank increased/decreased ..." message, instead we will see: "Your rank is <rank here> and the puzzle's rank ..."
      if (newUserRank && newPuzzleRank) {
        const userRankDirection =
          newUserRank >= oldUserRank ? "increased" : "decreased";
        const puzzleRankDirection =
          newPuzzleRank >= oldPuzzleRank ? "increased" : "decreased";

        message = `Your rank ${userRankDirection} from ${oldUserRank} to ${newUserRank}.
      The puzzle's rank ${puzzleRankDirection} from ${oldPuzzleRank} to ${newPuzzleRank}.`;
      } else {
        message = `Your rank is ${oldUserRank}. The puzzle's rank is ${oldPuzzleRank}.`
      }
      // Your solved puzzles count is ${newUserSolvedPuzzlesCount}, and this puzzle has been solved ${newPuzzleTimesSolvedCount} times.;

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
