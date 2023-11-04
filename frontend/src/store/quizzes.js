import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const UPLOAD_QUIZ = "/quizzes/UPLOAD_QUIZ";
export const FETCH_QUIZ_COMPLETION_STATUS = "/quizzes/GET_QUIZ_COMPLETION_STATUS";
export const FETCH_QUIZ_SCORE = "quizzes/FETCH_"
// ********** Action Creators ********* //

export const uploadQuiz = (data) => ({
  type: UPLOAD_QUIZ,
  payload: data,
});

export const fetchQuizCompletionStatus = (data) => ({
  type: FETCH_QUIZ_COMPLETION_STATUS,
  payload: data,
});

export const fetchQuizScore = (data) => ({
  type: FETCH_QUIZ_SCORE,
  payload: data,
})

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
    // return { ok: true, data }; // Return this response data for chaining on a thunk for the quiz form to fetch answers
  }
};

export const fetchQuizCompletionStatusThunk = (quizId) => async (dispatch) => {
  const response = await fetch(`/api/quizzes/${quizId}/hasAttempted`);
  const data = await response.json();
  if (response.ok) {
    dispatch(fetchQuizCompletionStatus(data.hasAttempted)); // only pass in hasAttempted for now, maybe later we will need other stuff from the data, in which case we would pass in "data" instead of "data.hasAttempted"
  }
};

export const fetchQuizScoreThunk = (quizId) => async (dispatch) => {
  const response = await fetch(`/api/quizzes/${quizId}/score`)
  const data = await response.json();
  if(response.ok) {
    dispatch(fetchQuizScore(data))
  }
}

// ************ Reducer **************** //

const initialState = {
  quiz: null,
  hasAttempted: false,
  score: null,
};

// we handle actions in the reducer, and update the state based on the action type
const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_QUIZ:
      return {
        ...state,
        quiz: action.payload,
        hasAttempted: true,
        score: action.payload.score,
      };
    case FETCH_QUIZ_COMPLETION_STATUS: // Handle the new action type
      return {
        ...state,
        hasAttempted: action.payload,
      };
    case FETCH_QUIZ_SCORE:
    return {
      ...state,
      score: action.payload
    }
    default:
      return state;
  }
};

export default quizReducer;
