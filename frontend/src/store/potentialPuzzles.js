import { csrfFetch } from "./csrf";

// *********** Action types *********** //

export const GENERATE_POTENTIAL_PUZZLES =
  "/potentialPuzzles/GENERATE_POTENTIAL_PUZZLES";

export const RECEIVE_KATAGO_ANALYSIS =
  "potentialPuzzles/RECEIVE_KATAGO_ANALYSIS";

export const INJECT_COMMENTS_AND_MUTATE_SGF_STRING =
  "/potentialPuzzles/INJECT_COMMENTS_AND_MUTATE_SGF_STRING";

export const FETCH_ALL_POTENTIAL_PUZZLES =
  "/potential_puzzles/FETCH_ALL_POTENTIAL_PUZZLES";

export const FETCH_POTENTIAL_PUZZLES_BY_SGF_ID =
  "/potential_puzzles/FETCH_POTENTIAL_PUZZLES_BY_SGF_ID";

export const SAVE_POTENTIAL_PUZZLE = "/potentialPuzzles/SAVE_POTENTIAL_PUZZLE";

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

export const fetchAllPotentialPuzzles = (data) => ({
  type: FETCH_ALL_POTENTIAL_PUZZLES,
  payload: data,
});

export const fetchAllPotentialPuzzlesBySgfId = (data) => ({
  type: FETCH_POTENTIAL_PUZZLES_BY_SGF_ID,
  payload: data,
});

export const savePotentialPuzzle = (data) => ({
  type: SAVE_POTENTIAL_PUZZLE,
  payload: data,
})

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

    // If we reach this point, it means the 1st response was successful (convert sgf to one line json for KataGo AI engine)
    const data = await response.json();
    dispatch(generatePotentialPuzzles(data));

    // ******* Manually change below boolean to use production external VM, or test locally with localhost ******* //
    const useExternalVM = false;
    const VM_ENDPOINT = useExternalVM ? "https://vm.go-puzzles.com/potential_puzzles/generate" : "/api/potential_puzzles/generate"

    const secondResponse = await csrfFetch(
      VM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sgf_id: sgf_id,
          sgf_data: sgf_data,
          one_line_json_string: data,
        }),
      }
    );

    // Check if the second response is not successful
    if (!secondResponse.ok) {
      const errorMessage = await secondResponse.text();
      console.error("Error in second endpoint:", errorMessage);
      return;
    }
    // If we reach this point, it means the 2nd response was successful, so we run the KataGo Analysis Engine
    const kataGoData = await secondResponse.json();
    dispatch(receiveKataGoAnalysis(kataGoData));

    // Store the Google Cloud VM response output into our database, don't do this when testing locally because our route to /api/potential_puzzles/generate already stores to our database
    if (useExternalVM) {
    const databaseResponse = await csrfFetch(
      "/api/potential_puzzles/store_vm_results",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(kataGoData),
      }
    );

    if (!databaseResponse.ok) {
      const errorMessage = await databaseResponse.text();
      console.error("Error storing VM results:", errorMessage);
      return;
    }
  }

    // Prepare data for the third API call based on the second response, sgf_data needs to not have \n to match postman request, but katago_json_output does have \n in postman
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
      `/api/potential_puzzles/${sgf_id}/clean_sgf_add_comments`,
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

export const fetchAllPotentialPuzzlesThunk = () => async (dispatch) => {
  const response = await csrfFetch(`/api/potential_puzzles`);

  if (response.ok) {
    const data = await response.json();
    dispatch(fetchAllPotentialPuzzles(data.PotentialPuzzles)); // Structure looks like this in the response: {"PotentialPuzzles": [{ "sgf_id": 22, <placeholder>
  }
};

export const fetchAllPotentialPuzzlesBySgfIdThunk =
  (sgfId) => async (dispatch) => {
    const response = await csrfFetch(`/api/potential_puzzles/${sgfId}`);
    if (response.ok) {
      const data = await response.json();
      dispatch(fetchAllPotentialPuzzlesBySgfId(data));
    }
  };

export const savePotentialPuzzleThunk = (sgfId, moveNumber) => async (dispatch) => {

  const response = await csrfFetch("/api/puzzles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({sgf_id: sgfId, move_number: moveNumber})

  })
  if (response.ok) {
    const data = await response.json();
    dispatch(savePotentialPuzzle(data))
  }
}

// ************* Reducer ***************** //

const initialState = {
  katagoJsonOutput: null,
  potentialPuzzles: [],
  currentSgfPotentialPuzzle: null,
  savePotentialPuzzle: null,
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
      };
    case FETCH_ALL_POTENTIAL_PUZZLES:
      return {
        ...state,
        potentialPuzzles: action.payload,
      };
    case FETCH_POTENTIAL_PUZZLES_BY_SGF_ID:
      return {
        ...state,
        currentSgfPotentialPuzzle: action.payload,
      };
    case SAVE_POTENTIAL_PUZZLE:
      return {
        ...state,
        savedPotentialPuzzle: action.payload,
      }
    default:
      return state;
  }
};

export default potentialPuzzlesReducer;
