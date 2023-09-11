import { csrfFetch } from "./csrf"

// ************* Action Type ***************** //

// Get all public puzzles for landing page / home page
const GET_PUBLIC_PUZZLES = "puzzles/GET_PUBLIC_PUZZLES"

// ************* Action Creators ***************** //
export const getPublicPuzzles = (puzzles) => ({
  type: GET_PUBLIC_PUZZLES,
  puzzles
})

// ************* Thunks ***************** //

export const getPublicPuzzlesThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/puzzles")

  if (response.ok) {
    const data = await response.json()
    dispatch(getPublicPuzzles(data.puzzles))
  }
}

// ************* Reducer ***************** //

const initialState = {
  publicPuzzles: []
}

const publicPuzzlesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PUBLIC_PUZZLES:
      return {
        ...state,
        publicPuzzles: action.payload
      }
      default:
      return state;
  }
}

export default publicPuzzlesReducer
