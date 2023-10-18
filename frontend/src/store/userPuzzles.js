import { csrfFetch } from "./csrf";

// ************* Action Type ***************** //

// Get all user puzzles
const FETCH_USER_PUZZLES = "puzzles/FETCH_PUBLIC_PUZZLES";
const FETCH_USER_PUZZLE_BY_ID = "puzzles/FETCH_PUBLIC_PUZZLE_BY_ID";

// ************* Action Creators ***************** //

export const fetchUserPuzzles = (puzzles) => ({
  type: FETCH_USER_PUZZLES,
  payload: puzzles,
});

export const fetchUserPuzzleById = (puzzleId) => ({
  type: FETCH_USER_PUZZLE_BY_ID,
  payload: puzzleId
})
