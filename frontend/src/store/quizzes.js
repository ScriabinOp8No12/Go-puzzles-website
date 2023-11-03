import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const UPLOAD_QUIZ = "/quizzes/UPLOAD_QUIZ";
export const GET_QUIZ_COMPLETION_STATUS = "/quizzes/GET_QUIZ_COMPLETION_STATUS";
// ********** Action Creators ********* //

export const uploadQuiz = (data) => ({
  type: UPLOAD_QUIZ,
  payload: data,
});

export const getQuizCompletionStatus = (data) => ({
  type: GET_QUIZ_COMPLETION_STATUS,
  payload: data,
});

// ********** Thunks ************ //

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

export const fetchQuizCompletionStatusThunk = (quizId) => async (dispatch) => {
  const response = await fetch(`/api/quizzes/${quizId}/hasAttempted`);
  const data = await response.json();
  if (response.ok) {
    dispatch(getQuizCompletionStatus(data.hasAttempted)); // only pass in hasAttempted for now, maybe later we will need other stuff from the data, in which case we would pass in "data" instead of "data.hasAttempted"
  }
};

// ************ Reducer **************** //

// An object that defines the initial values for Redux state properties
const initialState = {
  quiz: null,
  hasAttempted: false,
};

// we handle actions in the reducer, and update the state based on the action type
const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_QUIZ:
      return {
        ...state,
        quiz: action.payload,
      };
    case GET_QUIZ_COMPLETION_STATUS: // Handle the new action type
      return {
        ...state,
        hasAttempted: action.payload,
      };
    default:
      return state;
  }
};

export default quizReducer;
