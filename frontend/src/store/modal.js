// action creators (open and close the modal)
const OPEN_MODAL = "modal/openModal";
const CLOSE_MODAL = "modal/closeModal";

// Action creator for opening the modal, takes a React components as the payload (data)
export const openModal = (modalComponent) => {
  return {
    type: OPEN_MODAL, // action type
    payload: modalComponent, // React component to render inside the modal
  };
};

// Action creator for closing the model, we don't need a payload (data) for this
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

// Set the modal's initialState to null, meaning the modal is closed by default
const initialState = { modalComponent: null };

// Reducer function for handling modal state, set the starting state to default to the initialState value above
// Reducer functions take the current state and action as arguments, and returns a new state!
// They are pure functions so same input always gives the same output, and it does NOT modify any outside variables
const modalReducer = (state = initialState, action) => {
  // if the action type exists and
  switch (action.type) {
    // when the action type matches OPEN_MODAL, return a new state object with modalComponent set to the provided React component (found in the action.payload)
    case OPEN_MODAL:
      return { modalComponent: action.payload };
    // if action type matches CLOSE_MODAL, then return a new state object with modelComponent set to null, which is the same as closing the modal
    case CLOSE_MODAL:
      return { modalComponent: null };
    // if action type doesn't match any of the types, then return the current state unchanged.
    // this ensures that unrecognized actions don't alter the state
    default:
      return state;
  }
};

export default modalReducer;
