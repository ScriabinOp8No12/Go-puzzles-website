import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import * as sessionActions from "./store/session";
import { closeModal } from "./store/modal"; // import closeModal action so we can close the modal with a click outside the modal
import Navigation from "./components/Navigation";
import UserSGFs from "./components/UserSGFs";


function App() {
  // dispatch is used to send actions to the store and trigger them
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const modalComponent = useSelector((state) => state.modal.modalComponent);
  const history = useHistory();

  // function to close modal (wrap with useCallback to avoid rerending / warning in terminal)
  const handleCloseModal = useCallback(() => {
    // send the closeModal() function to the store to update the state
    // reducers then handle these actions to produce a new state
    dispatch(closeModal());
  }, [dispatch]);

  // useEffect() performs side effects in function components, dependency array is used to determine when the effect should run!
  // if any value inside the dependency array changes between renders, the effect will run again
  // Close modal when user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // check if the click event (e.target) occurred inside an element with the class modal
      // the .closest method traverses the Element and its parents (heads towards root of document)
      // until it finds a node that matches the provided selector string, it returns null if no element exists,
      // however, if the click did not occur inside the modal, the handleCloseModal function gets called
      if (modalComponent && !e.target.closest(".modal")) {
        handleCloseModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [modalComponent, handleCloseModal]);

  // Close modal when user navigates to a different page
  useEffect(() => {
    // use useHistory() hook to listen for changes in the navigation history, when user navigates to a different page, this triggers, causing the modal to close
    return history.listen(() => {
      handleCloseModal();
    });
  }, [history, handleCloseModal]);

  // Restore the user's session if they are logged in
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* Render the Navigation component, passing in the isLoaded state */}
      <Navigation isLoaded={isLoaded} />
      {/* If modalComponent is not null, render a div with class "modal-overlay" (this is the background behind the modal that's more grey colored) */}
      {modalComponent && <div className="modal-overlay"></div>}
      {/* render the modalComponent if it's not null */}
      {modalComponent}
      {/* If isLoaded is true, render the Switch component from react-router-dom, which is used to render different components based on the current URL */}
      {isLoaded && (
        <Switch>
          {/* <Route exact path="/" /> */}
          <Route path="/sgfs" component={UserSGFs} />
        </Switch>
      )}
    </>
  );
}

export default App;
