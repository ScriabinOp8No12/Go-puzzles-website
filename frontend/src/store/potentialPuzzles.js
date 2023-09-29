import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const GENERATE_POTENTIAL_PUZZLES = "/potentialPuzzles/GENERATE_POTENTIAL_PUZZLES";

// ********** Action Creators ********* //

export const generatePotentialPuzzles = (data) => ({
  type: GENERATE_POTENTIAL_PUZZLES,
  payload: data
})

// ********** Thunks ************ //

export const generatePotentialPuzzlesThunk = (sgfId, sgf_data) => async (dispatch) => {
  const response = await csrfFetch(`/api/sgfs/${sgfId}/katago_json_input`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  body: JSON.stringify({sgf_data})
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(generatePotentialPuzzles(data))
  }

  // within the above if block, chain the katago potential puzzles endpoint,
  // then chain on the clean sgf and add comments to sgf endpoint (which also returns the sgf.thumbnail)
}

const initialState = {
  katagoJsonOutput: null,
  // other properties
};

const potentialPuzzlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_POTENTIAL_PUZZLES:
      return {
        ...state,
        katagoJsonOutput: action.payload
      };
    default:
      return state;
  }
};

export default potentialPuzzlesReducer;
