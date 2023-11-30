const K = 32; // max gain or loss of elo per puzzle

function calculateNewElo(playerElo, puzzleElo, isWin) {
  // Calculate expected score for the player using the ELO formula, the expected score is the probability of the player winning against the puzzle
  const expectedPlayerWinRate = 1 / (1 + Math.pow(10, (puzzleElo - playerElo) / 400));
  const expectedPuzzleWinRate = 1 - expectedPlayerWinRate;

  // Calculate the change in ELO
  let changeInPlayerElo = K * (isWin - expectedPlayerWinRate);
  let changeInPuzzleElo = K * ((isWin ? 0 : 1) - expectedPuzzleWinRate);

  // Apply a minimum elo change of 1 point, if there is any change
  // Otherwise: if expectedPlayerWinRate is near the boundaries (0 or 1), the user's puzzle rating won't appear to change
  // because it will round to the nearest integer on the calculation (at ~750 elo diff, a user could gain or lose 0 elo after attempting a puzzle)
  changeInPlayerElo = Math.sign(changeInPlayerElo) * Math.max(1, Math.abs(changeInPlayerElo));
  changeInPuzzleElo = Math.sign(changeInPuzzleElo) * Math.max(1, Math.abs(changeInPuzzleElo));

  // Calculate new ELO ratings
  let newPlayerElo = playerElo + changeInPlayerElo;
  let newPuzzleElo = puzzleElo + changeInPuzzleElo;

  // Ensure the puzzle's and user's ELO do not drop below 100
  newPlayerElo = Math.max(100, newPlayerElo);
  newPuzzleElo = Math.max(100, newPuzzleElo);

  // Round ELO ratings to nearest integer
  newPlayerElo = Math.round(newPlayerElo);
  newPuzzleElo = Math.round(newPuzzleElo);

  // Return new ELO ratings as an array
  return [newPlayerElo, newPuzzleElo];
}

module.exports = {calculateNewElo};

// node backend/utils/elo-ranking-utils.js
// to test the below examples (start at root of project)

// console.log(calculateNewElo(1000, 1750, 0)) // [ 1000, 1075 ]   new player elo is 1020, new puzzle elo is 1080
// console.log(calculateNewElo(1600, 2000, 0)) // [ 1597, 2003 ]   new player elo is 1597, new puzzle elo is 2003
// console.log(calculateNewElo(1600, 2000, 1)) // [ 1629, 1971 ]   at a 400 elo difference, getting it right increases rating by nearly the max elo, 29 instead of 32
// console.log(calculateNewElo(1000, 1000, 1)) // [ 1016, 984 ]    at same elo, rating changes by 16 elo, which is equivalent to roughly 1/5th of a stone, that seems reasonable actually
// console.log(calculateNewElo(200, 2500, 0)) // [ 199, 2501] edge case
// console.log(calculateNewElo(100, 3000, 0)) // [ 199, 2501] edge case
