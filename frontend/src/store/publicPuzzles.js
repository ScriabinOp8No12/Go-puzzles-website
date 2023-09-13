import { csrfFetch } from "./csrf"

// ************* Action Type ***************** //

// Get all public puzzles for landing page / home page
const FETCH_PUBLIC_PUZZLES = "puzzles/FETCH_PUBLIC_PUZZLES"
const FETCH_PUBLIC_PUZZLE_BY_ID = "puzzles/FETCH_PUBLIC_PUZZLE_BY_ID"

// ************* Action Creators ***************** //
export const fetchPublicPuzzles = (puzzles) => ({
  type: FETCH_PUBLIC_PUZZLES,
  payload: puzzles
})

export const fetchPublicPuzzleById = (puzzle) => ({
  type: FETCH_PUBLIC_PUZZLE_BY_ID,
  payload: puzzle
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

// ************* Reducer ***************** //

const initialState = {
  publicPuzzles: [],
  currentPublicPuzzle: null
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
      default:
      return state;
  }
}

export default publicPuzzlesReducer
