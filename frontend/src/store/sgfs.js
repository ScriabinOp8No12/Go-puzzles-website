import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const UPLOAD_SGF = "/sgfs/UPLOAD_SGF";
export const FETCH_ALL_SGFS = "/sgfs/FETCH_ALL_SGFS"

// ********** Action Creators ********* //

export const uploadSgf = (data) => ({
  type: UPLOAD_SGF,
  payload: data,
});

export const fetchAllSgfs = (data) => ({
  type: FETCH_ALL_SGFS,
  payload: data
})

// ********** Thunks ************ //

// Post request to /api/sgfs for adding an SGF to user's database
export const uploadSgfThunk = (sgf_data) => async (dispatch) => {
  try {
    const response = await csrfFetch("/api/sgfs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sgf_data),
    });

    if (response.ok) {
      const data = await response.json();
      // console.log("API Response OK:", data); // Debugging line
      dispatch(uploadSgf(data));
    } else {
      // console.log("API Response Not OK:", response.status, response.statusText); // Debugging line
    }
  } catch (error) {
    console.error("Error fetching SGF:", error);
  }
};

// Get request to /api/sgfs for retrieving / displaying all the SGFs the user has in the database
export const fetchAllSgfsThunk = () => async (dispatch) => {
  try {
    const response = await csrfFetch("/api/sgfs", {
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(fetchAllSgfs(data.SGFs));
    } else {
      // Handle error
    }
  } catch (error) {
    console.error("Error fetching all SGFs:", error);
  }
};

// ************ Reducer **************** //

const initialState = {
  userSGFs: [],
};

const sgfReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_SGF:
      return {
        ...state,
        userSGFs: [...state.userSGFs, action.payload],
      };
    case FETCH_ALL_SGFS:
      return {
        ...state,
        userSGFs: action.payload,
      };
    default:
      return state;
  }
};

export default sgfReducer;
