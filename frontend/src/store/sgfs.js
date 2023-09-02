import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const UPLOAD_SGF = "/sgfs/UPLOAD_SGF";

// ********** Action Creators ********* //

export const uploadSgf = (data) => ({
  type: UPLOAD_SGF,
  payload: data,
});

// ********** Thunks ************ //

export const uploadSgfThunk = (sgf_data) => async (dispatch) => {
  try {
    const response = await csrfFetch("/api/sgfs/current", {
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
    console.error("Error fetching SGF current:", error);
  }
};

// ************ Reducer **************** //

const initialState = {
  userSGF: null,
};

const sgfReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_SGF:
      return {
        ...state,
        userSGF: action.payload,
      };
    default:
      return state;
  }
};

export default sgfReducer;
