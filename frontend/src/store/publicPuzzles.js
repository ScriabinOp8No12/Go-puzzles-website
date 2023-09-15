import { csrfFetch } from "./csrf"

// ************* Action Type ***************** //

// Get all public puzzles for landing page / home page
const FETCH_PUBLIC_PUZZLES = "puzzles/FETCH_PUBLIC_PUZZLES"
const FETCH_PUBLIC_PUZZLE_BY_ID = "puzzles/FETCH_PUBLIC_PUZZLE_BY_ID"
const UPDATE_RANKINGS_AND_SOLVED_COUNTS = "puzzles/UPDATE_RANKINGS_AND_SOLVED_COUNTS"

// ************* Action Creators ***************** //
export const fetchPublicPuzzles = (puzzles) => ({
  type: FETCH_PUBLIC_PUZZLES,
  payload: puzzles
})

export const fetchPublicPuzzleById = (puzzle) => ({
  type: FETCH_PUBLIC_PUZZLE_BY_ID,
  payload: puzzle
})

export const updateRankingsAndSolvedCounter = (ranking) => ({
  type: UPDATE_RANKINGS_AND_SOLVED_COUNTS,
  payload: ranking
})

// ************* Thunks ***************** //

export const fetchPublicPuzzlesThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/puzzles")

  if (response.ok) {
    const data = await response.json()
    dispatch(fetchPublicPuzzles(data.puzzles))
  }
}

export const fetchPublicPuzzleByIdThunk = (puzzleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/puzzles/${puzzleId}`)
  // console.log("Inside fetchPublicPuzzleByIdThunk, *** puzzleId", puzzleId);
  if (response.ok) {
    const data = await response.json()
    dispatch(fetchPublicPuzzleById(data))
  }
}

export const updateRankingsAndSolvedCounterThunk = (puzzleId, userWin) => async (dispatch) => {
  const response = await csrfFetch(`/api/puzzles/${puzzleId}/ranking/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({userWin})
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(updateRankingsAndSolvedCounter(data))
  }
}

// ************* Reducer ***************** //

const initialState = {
  publicPuzzles: [],
  currentPublicPuzzle: null,
  // Is this the correct initial state?
  userWin: null
}

const publicPuzzlesReducer = (state = initialState, action) => {

  switch(action.type) {
    case FETCH_PUBLIC_PUZZLES:
      return {
        ...state,
        publicPuzzles: action.payload
      }
    case FETCH_PUBLIC_PUZZLE_BY_ID:
      return {
        ...state,
        currentPublicPuzzle: action.payload
      }
    case UPDATE_RANKINGS_AND_SOLVED_COUNTS:
      return {
        ...state,
        userWin: action.payload
      }
      default:
      return state;
  }
}

export default publicPuzzlesReducer
