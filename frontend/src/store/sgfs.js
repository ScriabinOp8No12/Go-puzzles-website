import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const UPLOAD_SGF = "/sgfs/UPLOAD_SGF";
export const FETCH_ALL_SGFS = "/sgfs/FETCH_ALL_SGFS";
export const FETCH_SGF_BY_ID = "sgfs/FETCH_SGF_BY_ID";
export const DELETE_SGF_BY_ID = "/sgfs/DELETE_SGF_BY_ID";

// ********** Action Creators ********* //

export const uploadSgf = (data) => ({
  type: UPLOAD_SGF,
  payload: data,
});

export const fetchAllSgfs = (data) => ({
  type: FETCH_ALL_SGFS,
  payload: data,
});

export const fetchSgfByIdAction = (data) => ({
  type: FETCH_SGF_BY_ID,
  payload: data,
});

export const deleteSgfById = (sgfId) => ({
  type: DELETE_SGF_BY_ID,
  payload: sgfId,
});

// ********** Thunks ************ //

// Post request to /api/sgfs for adding an SGF to user's database
export const uploadSgfThunk = (sgf_data) => async (dispatch) => {
  const response = await csrfFetch("/api/sgfs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sgf_data),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(uploadSgf(data));
  }
};

// Get request to /api/sgfs for retrieving / displaying all the SGFs the user has in the database
export const fetchAllSgfsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/sgfs");

  if (response.ok) {
    const data = await response.json();
    dispatch(fetchAllSgfs(data.SGFs));
  }
};

// Get request to get one sgf by id (load the sgf the user clicked)
export const fetchSgfByIdThunk = (sgfId) => async (dispatch) => {
  const response = await csrfFetch(`/api/sgfs/${sgfId}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(fetchSgfByIdAction(data));
  }
};

export const deleteSgfByIdThunk = (sgfId) => async (dispatch) => {
  const response = await csrfFetch(`/api/sgfs/${sgfId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteSgfById(sgfId));
  }
};

// ************ Reducer **************** //

// An object that defines the initial values for Redux state properties
const initialState = {
  userSGFs: [], // an array property because our backend stores an array of SGFs
  currentSgf: null, // a single value property, initialized to null because no SGF is selected initially
};

// we handle actions in the reducer, and update the state based on the action type
const sgfReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_SGF:
      // define how the state should change based on the action type, we update specific properties or arrays within the state
      return {
        ...state, // create shallow copy of the current state before making updates to it, this ensures immutability
        userSGFs: [...state.userSGFs, action.payload], // adds action.payload (the new uploaded SGF) to the existing SGFs
      };
    case FETCH_ALL_SGFS:
      return {
        ...state,
        userSGFs: action.payload, // replaces content of userSGFs with data from action.payload, which is an array of SGFs
      };
    case FETCH_SGF_BY_ID:
      return {
        ...state,
        currentSgf: action.payload, // effectively updating the selected SGF from null to the new SGF
      };
    case DELETE_SGF_BY_ID:
      return {
        ...state,
        userSGFs: state.userSGFs.filter((sgf) => sgf.id !== action.payload), // filters userSGFs array to remove the SGF with an id matching the one in the action.payload
      };
    default:
      return state; // return current state if no action matches
  }
};

export default sgfReducer;
