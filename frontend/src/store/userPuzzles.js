import { csrfFetch } from "./csrf";

// ************* Action Type ***************** //

// Get all user puzzles
const FETCH_ALL_USER_PUZZLES = "puzzles/FETCH_ALL_PUBLIC_PUZZLES";
const FETCH_USER_PUZZLE_BY_ID = "puzzles/FETCH_PUBLIC_PUZZLE_BY_ID";

// ************* Action Creators ***************** //

export const fetchAllUserPuzzles = (puzzles) => ({
  type: FETCH_ALL_USER_PUZZLES,
  payload: puzzles,
});

export const fetchUserPuzzleById = (puzzleId) => ({
  type: FETCH_USER_PUZZLE_BY_ID,
  payload: puzzleId
})

// **************** THUNKS ******************* //

export const fetchAllUserPuzzlesThunk = () => async (dispatch) => {
  const response = await csrfFetch(`/api/user_puzzles`);

  if (response.ok) {
    const data = await response.json();
    // Pass in entire data object, since we are also including the count in the response now. This used to be: data.PotentialPuzzles
    dispatch(fetchAllUserPuzzles(data));
  }
};

export const fetchUserPuzzleByIdThunk = () => async (dispatch) => {
  const response = await csrfFetch(`/api/user_puzzles/ `)
}


// ************** REDUCER ********************* //

const initialState = {
  userPuzzles: []
};

const userPuzzlesReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_ALL_USER_PUZZLES:
      return {
        ...state,
        userPuzzles: action.payload, // the postman output is just a regular array with a comma separate series of objects inside it
      };
    case FETCH_USER_PUZZLE_BY_ID:
      return {
        ...state,
        // currentSgfPotentialPuzzle: action.payload,
      };
    default:
      return state;
  }
};

export default userPuzzlesReducer;
