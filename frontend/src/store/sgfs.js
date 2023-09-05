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
    // console.log("API Response OK:", data); // Debugging line
    dispatch(uploadSgf(data));
  }
};

// Get request to /api/sgfs for retrieving / displaying all the SGFs the user has in the database
export const fetchAllSgfsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/sgfs", {});

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

const initialState = {
  userSGFs: [],
  currentSgf: null,
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
    case FETCH_SGF_BY_ID:
      console.log("New currentSgf:", action.payload); // Debugging line
      return {
        ...state,
        currentSgf: action.payload,
      };
    case DELETE_SGF_BY_ID:
      return {
        ...state,
        userSGFs: state.userSGFs.filter((sgf) => sgf.id !== action.payload),
      };
    default:
      return state;
  }
};

export default sgfReducer;
