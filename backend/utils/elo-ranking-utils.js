const K = 32; // max gain or loss of elo per puzzle
// const DEFAULT_ELO = 1500; // default to 1500 elo, which is ~6kyu in Go (intermediate)

function calculateNewElo(playerElo, puzzleElo, isWin) {
  // Calculate expected score for the player using the ELO formula, the expected score is the probability of the player winning against the puzzle
  const expectedPlayerWinRate = 1 / (1 + Math.pow(10, (puzzleElo - playerElo) / 400));
  const expectedPuzzleWinRate = 1 - expectedPlayerWinRate;

  // Calculate new ELO rating, if expectedPlayerWinRate is near the boundaries (0 or 1), the user's puzzle rating won't appear to change
  // because it will round to the nearest integer on the calculation (~750 elo diff (7.5 stones in Go))
  const newPlayerElo = playerElo + K * (isWin - expectedPlayerWinRate);
  const newPuzzleElo = puzzleElo + K * ((isWin ? 0 : 1) - expectedPuzzleWinRate);

  // Return new ELO ratings as an array
  return [Math.round(newPlayerElo), Math.round(newPuzzleElo)];
}

module.exports = {calculateNewElo};


// console.log(calculateNewElo(1000, 1750, 0)) // [ 1000, 1075 ]   new player elo is 1020, new puzzle elo is 1080
// console.log(calculateNewElo(1600, 2000, 0)) // [ 1597, 2003 ]   new player elo is 1597, new puzzle elo is 2003
// console.log(calculateNewElo(1600, 2000, 1)) // [ 1629, 1971 ]   at a 400 elo difference, getting it right increases rating by nearly the max elo, 29 instead of 32
// console.log(calculateNewElo(1000, 1000, 1)) // [ 1016, 984 ]    at same elo, rating changes by 16 elo, which is equivalent to roughly 1/5th of a stone, that seems reasonable actually
// console.log(calculateNewElo(200, 2500, 0)) // [ 200, 2500] IT WORKS BUT IF WINRATE BASICALLY 0, it will appear as if it's NOT WORKING, HAHAHAHAHAHA
