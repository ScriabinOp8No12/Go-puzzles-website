import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "../styles/Navigation.css";

// Pass isLoaded in as props from the parent (App.js), no need to set this up in Redux store, because
// we only need this property in our Navigation component (doesn't need global state management)
function Navigation({ isLoaded }) {
  // useSelector for grabbing slice of state from session store, syntax is state.session because our reducer is "session (see stores/index.js)" and our state is "user" as we can see in store/session in the reducer's state
  const sessionUser = useSelector((state) => state.session.user);
  // Controls visibility state of menu, like the "Upload / View Game Records" button
  const [showMenu, setShowMenu] = useState(false);
  // Get information about the current URL, can determine which path the user is on
  const location = useLocation();
  // Checks if current path is /sgfs
  const isActive = location.pathname === "/sgfs";
  const isPotentialPuzzlesActive = location.pathname === "/potential-puzzles";
  const isPublicPuzzlesActive = location.pathname === "/public-puzzles";
  const isUserPuzzlesActive = location.pathname === "/your-puzzles"
  const isLearnAndPracticeActive = location.pathname === "/learn_and-practice"

  return (
    // Return "navbar navbar-expanded" className if showMenu state is true, and defaults to navbar otherwise, this controls CSS styling
    <div className={`navbar ${showMenu ? "navbar-expanded" : ""}`}>
      <div>
        {/* NavLink component is always rendered, it takes us to the home page when we click the image */}
        <NavLink exact to="/">
          <img src="/turtle-logo.jpg" alt="turtle-logo" className="logo" />
        </NavLink>
      </div>
      {isLoaded && (
        <div className="navigation-container">
          {/* Learn & Practice -> Change class name?? */}
          {sessionUser && (
            <div className="potential-puzzles-button-wrapper">
              <div
                className={`potential-puzzles-button ${
                  isLearnAndPracticeActive ? "active" : ""
                }`}
              >
                {sessionUser && (
                  <NavLink
                    to="/learn-and-practice"
                    className={`potential-puzzles-button-menu ${showMenu}`}
                  >
                    Learn & Practice
                  </NavLink>
                )}
              </div>
            </div>
          )}
          {/* Your puzzles -> Change class name?? */}
          {sessionUser && (
            <div className="potential-puzzles-button-wrapper">
              <div
                className={`potential-puzzles-button ${
                  isUserPuzzlesActive ? "active" : ""
                }`}
              >
                {sessionUser && (
                  <NavLink
                    to="/your-puzzles"
                    className={`potential-puzzles-button-menu ${showMenu}`}
                  >
                    Your Puzzles
                  </NavLink>
                )}
              </div>
            </div>
          )}
          {/* Public Puzzles button -> Change class name????? */}
          {sessionUser && (
            <div className="potential-puzzles-button-wrapper">
              <div
                className={`potential-puzzles-button ${
                  isPublicPuzzlesActive ? "active" : ""
                }`}
              >
                {sessionUser && (
                  <NavLink
                    to="/public-puzzles"
                    className={`potential-puzzles-button-menu ${showMenu}`}
                  >
                    Public Puzzles
                  </NavLink>
                )}
              </div>
            </div>
          )}
          {/* Potential Puzzles button */}
          {sessionUser && (
            <div className="potential-puzzles-button-wrapper">
              <div
                className={`potential-puzzles-button ${
                  isPotentialPuzzlesActive ? "active" : ""
                }`}
              >
                {sessionUser && (
                  <NavLink
                    to="/potential-puzzles"
                    className={`potential-puzzles-button-menu ${showMenu}`}
                  >
                    Potential Puzzles
                  </NavLink>
                )}
              </div>
            </div>
          )}
          {/* Upload / View Game Records button */}
          {sessionUser && (
            <div className="game-records-button-wrapper">
              {/* Checks if isActive is true, then it sets the className to "active" for styling, otherwise gets the default "game-records-button" className */}
              <div
                className={`game-records-button ${isActive ? "active" : ""}`}
              >
                {sessionUser && (
                  <NavLink
                    to="/sgfs"
                    className={`game-records-button-menu ${showMenu}`}
                  >
                    Upload & View Game Records
                  </NavLink>
                )}
              </div>
            </div>
          )}

          <ProfileButton
            user={sessionUser}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </div>
      )}
    </div>
  );
}

export default Navigation;
