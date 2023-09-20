import { csrfFetch } from "./csrf";

// ************* Action Type ***************** //

// Get all public puzzles for landing page / home page
const FETCH_PUBLIC_PUZZLES = "puzzles/FETCH_PUBLIC_PUZZLES";
const FETCH_PUBLIC_PUZZLE_BY_ID = "puzzles/FETCH_PUBLIC_PUZZLE_BY_ID";
const UPDATE_RANKINGS_AND_SOLVED_COUNTS =
  "puzzles/UPDATE_RANKINGS_AND_SOLVED_COUNTS";
const EDIT_PUBLIC_PUZZLE_BY_ID = "/puzzles/EDIT_PUBLIC_PUZZLE_BY_ID";
const SUSPEND_PUBLIC_PUZZLE_BY_ID = "/puzzles/SUSPEND_PUBLIC_PUZZLE_BY_ID"

// ************* Action Creators ***************** //
export const fetchPublicPuzzles = (puzzles) => ({
  type: FETCH_PUBLIC_PUZZLES,
  payload: puzzles,
});

export const fetchPublicPuzzleById = (puzzle) => ({
  type: FETCH_PUBLIC_PUZZLE_BY_ID,
  payload: puzzle,
});

export const updateRankingsAndSolvedCounter = (ranking) => ({
  type: UPDATE_RANKINGS_AND_SOLVED_COUNTS,
  payload: ranking,
});

export const editPublicPuzzleById = (updatedPuzzle) => {
  return {
  type: EDIT_PUBLIC_PUZZLE_BY_ID,
  payload: updatedPuzzle,
  }
};

export const suspendPublicPuzzleById = (puzzleId) => ({
  type: SUSPEND_PUBLIC_PUZZLE_BY_ID,
  payload: puzzleId
})


// ************* Thunks ***************** //

export const fetchPublicPuzzlesThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/puzzles");

  if (response.ok) {
    const data = await response.json();
    // console.log("public puzzle thunk data: ", data);
    dispatch(fetchPublicPuzzles(data.puzzles));
  }
};

export const fetchPublicPuzzleByIdThunk = (puzzleId) => async (dispatch) => {
  const response = await csrfFetch(`/api/puzzles/${puzzleId}`);
  // console.log("Inside fetchPublicPuzzleByIdThunk, *** puzzleId", puzzleId);
  if (response.ok) {
    const data = await response.json();
    dispatch(fetchPublicPuzzleById(data));
  }
};

export const updateRankingsAndSolvedCounterThunk =
  (puzzleId, userWin) => async (dispatch) => {
    const response = await csrfFetch(
      `/api/puzzles/${puzzleId}/ranking/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userWin }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      // console.log("Thunk data: ", data)
      dispatch(updateRankingsAndSolvedCounter(data));
    }
  };

export const editPublicPuzzlesByIdThunk =
  (puzzleId, puzzleDetails) => async (dispatch) => {
    const response = await csrfFetch(`/api/puzzles/${puzzleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(puzzleDetails),
    });
    const updatedPuzzle = await response.json();
    if (response.ok) {
      dispatch(editPublicPuzzleById(updatedPuzzle));
      return updatedPuzzle;
    }
  };

  export const suspendPublicPuzzleByIdThunk = (puzzleId) => async (dispatch) => {
    const response = await csrfFetch(`api/puzzles/${puzzleId}`, {
      method: "DELETE",
    })
    if (response.ok) {
      dispatch(suspendPublicPuzzleById(puzzleId))
    }
  }

// ************* Reducer ***************** //

const initialState = {
  publicPuzzles: [],
  currentPublicPuzzle: null,
  userWin: null,
};

const publicPuzzlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PUBLIC_PUZZLES:
      return {
        ...state,
        publicPuzzles: action.payload,
      };
    case FETCH_PUBLIC_PUZZLE_BY_ID:
      return {
        ...state,
        currentPublicPuzzle: action.payload,
      };
    case UPDATE_RANKINGS_AND_SOLVED_COUNTS:
      return {
        ...state,
        userWin: action.payload,
      };
    case EDIT_PUBLIC_PUZZLE_BY_ID:
      return {
        ...state,
        publicPuzzles: state.publicPuzzles.map((puzzle) =>
          puzzle.id === action.payload.id ? action.payload : puzzle
        ),
        // Change state of currentPublicPuzzle
        currentPublicPuzzle:
          state.currentPublicPuzzle &&
          state.currentPublicPuzzle.id === action.payload.id
            ? action.payload
            : state.currentPublicPuzzle,
      };
    case SUSPEND_PUBLIC_PUZZLE_BY_ID:
      return {
        ...state,
        publicPuzzles: state.publicPuzzles.filter((puzzle) => puzzle.id !== action.payload)
      }
    default:
      return state;
  }
};

export default publicPuzzlesReducer;
