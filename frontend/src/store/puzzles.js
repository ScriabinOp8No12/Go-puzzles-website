import { csrfFetch } from "./csrf"

// ************* Action Type ***************** //

// Get all public puzzles for landing page / home page
const GET_PUBLIC_PUZZLES = "puzzles/GET_PUBLIC_PUZZLES"


// ************* Action Creators ***************** //
export const getPuzzles = (puzzles) => ({
  type: GET_PUBLIC_PUZZLES,
  puzzles
})


// ************* Thunks ***************** //



// ************* Reducer ***************** //
