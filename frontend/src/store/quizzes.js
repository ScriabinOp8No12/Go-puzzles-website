import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const UPLOAD_QUIZ = "/sgfs/UPLOAD_QUIZ";

// ********** Action Creators ********* //

export const uploadQuiz = (data) => ({
  type: UPLOAD_QUIZ,
  payload: data,
});

// ********** Thunks ************ //

// Post request to /api/sgfs for adding an SGF to user's database
export const uploadQuizThunk = (quiz_data, quiz_id) => async (dispatch) => {
  const response = await csrfFetch(`/api/quizzes/${quiz_id}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quiz_data),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(uploadQuiz(data));
  }
};

// ************ Reducer **************** //

// An object that defines the initial values for Redux state properties
const initialState = {
  quiz: null
};

// we handle actions in the reducer, and update the state based on the action type
const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_QUIZ:
      return {
        ...state,
        quiz: action.payload,
      };
    default:
      return state;
  }
};

export default quizReducer;
