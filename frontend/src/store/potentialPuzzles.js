import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const GENERATE_POTENTIAL_PUZZLES =
  "/potentialPuzzles/GENERATE_POTENTIAL_PUZZLES";
export const RECEIVE_KATAGO_ANALYSIS =
  "potentialPuzzles/RECEIVE_KATAGO_ANALYSIS";

// ********** Action Creators ********* //

export const generatePotentialPuzzles = (data) => ({
  type: GENERATE_POTENTIAL_PUZZLES,
  payload: data,
});

export const receiveKataGoAnalysis = (data) => ({
  type: RECEIVE_KATAGO_ANALYSIS,
  payload: data,
});

// ********** Thunks ************ //

export const generatePotentialPuzzlesThunk =
  (sgf_id, sgf_data) => async (dispatch) => {
    // First api call to get the one line json for KataGo
    const response = await csrfFetch(`/api/sgfs/${sgf_id}/katago_json_input`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sgf_data: sgf_data }),
    });

    // Check if the first response is not successful
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error("Error in first endpoint:", errorMessage);
      return; // Exit the function
    }

    // If we reach this point, it means the response was successful
    const data = await response.json();
    console.log("*** data ***", data);
    dispatch(generatePotentialPuzzles(data));

    const actualData = data.one_line_json_string; // Extract the one_line_json_string

    const secondResponse = await csrfFetch("/api/potential_puzzles/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sgf_id: sgf_id,
        sgf_data: sgf_data,
        one_line_json_string: actualData,
      }),
    });

    if (secondResponse.ok) {
      const kataGoData = await secondResponse.json();
      console.log(
        "************* KATAGO DATA ************************",
        kataGoData
      );
      dispatch(receiveKataGoAnalysis(kataGoData));
    } else {
      // Optionally, you can also handle errors from the second API call here
      const secondErrorMessage = await secondResponse.text();
      console.error("Error in second endpoint:", secondErrorMessage);
    }
  };
const initialState = {
  katagoJsonOutput: null,
  sgfThumbnail: null, // for storing the sgfThumbnail in the redux store
};

const potentialPuzzlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_POTENTIAL_PUZZLES:
      return {
        ...state,
        katagoJsonOutput: action.payload,
      };
    case RECEIVE_KATAGO_ANALYSIS:
      return {
        ...state,
        kataGoAnalysis: action.payload,
      };
    default:
      return state;
  }
};

export default potentialPuzzlesReducer;
