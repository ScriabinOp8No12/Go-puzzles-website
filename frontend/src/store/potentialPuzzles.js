import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const GENERATE_POTENTIAL_PUZZLES =
  "/potentialPuzzles/GENERATE_POTENTIAL_PUZZLES";
export const RECEIVE_KATAGO_ANALYSIS =
  "potentialPuzzles/RECEIVE_KATAGO_ANALYSIS";
export const INJECT_COMMENTS_AND_MUTATE_SGF_STRING =
  "/potentialPuzzles/INJECT_COMMENTS_AND_MUTATE_SGF_STRING";

// ********** Action Creators ********* //

export const generatePotentialPuzzles = (data) => ({
  type: GENERATE_POTENTIAL_PUZZLES,
  payload: data,
});

export const receiveKataGoAnalysis = (data) => ({
  type: RECEIVE_KATAGO_ANALYSIS,
  payload: data,
});

export const injectCommentsAndMutateSgfStrings = (data) => ({
  type: INJECT_COMMENTS_AND_MUTATE_SGF_STRING,
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
      return;
    }

    // if (!response.ok) {
    //   return "Failed to create input for KataGo";
    // }

    // If we reach this point, it means the 1st response was successful (convert sgf to one line json for KataGo AI engine)
    const data = await response.json();
    dispatch(generatePotentialPuzzles(data));

    const secondResponse = await csrfFetch("/api/potential_puzzles/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sgf_id: sgf_id,
        sgf_data: sgf_data,
        one_line_json_string: data,
      }),
    });

    // Check if the second response is not successful (run katago analysis)
    if (!secondResponse.ok) {
      const errorMessage = await response.text();
      console.error("Error in second endpoint:", errorMessage);
      return;
    }
    // If we reach this point, it means the 2nd response was successful
    const kataGoData = await secondResponse.json();
    dispatch(receiveKataGoAnalysis(kataGoData));

    // Prepare data for the third API call based on the second response
    // sgf_data needs to not have \n to match postman request, but katago_json_output does have \n in postman

    const sanitizedSgfData = kataGoData.createdPuzzles[0].sgf_data.replace(
      /\n/g,
      " "
    );

    // Prepare data for the third API call based on the second response
    const thirdEndpointData = {
      sgf_data: sanitizedSgfData,
      katago_json_output: JSON.stringify(kataGoData),
    };

    const thirdResponse = await csrfFetch(
      `/api/potential_puzzles/${sgf_id}/clean_sgf_add_comments_add_thumbnail`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(thirdEndpointData),
      }
    );

    // Check if the third response is not successful
    if (!thirdResponse.ok) {
      const errorMessage = await thirdResponse.text();
      console.error("Error in third endpoint:", errorMessage);
      return;
    }

    // If we reach this point, it means the 3rd response was successful
    const thirdEndpointResult = await thirdResponse.json();
    dispatch(injectCommentsAndMutateSgfStrings(thirdEndpointResult));
  };

// ************* Reducer ***************** //

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
    case INJECT_COMMENTS_AND_MUTATE_SGF_STRING:
      return {
        ...state,
        injectedCommentsAndMutatedSgf: action.payload,
        sgfThumbnail: action.payload.sgfThumbnail // Also add the thumbnail into the state
      };
    default:
      return state;
  }
};

export default potentialPuzzlesReducer;
