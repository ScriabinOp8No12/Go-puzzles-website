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
  const isSgfsActive = location.pathname.startsWith("/sgfs");
  const isPotentialPuzzlesActive =
    location.pathname.startsWith("/potential-puzzles");
  const isPublicPuzzlesActive = location.pathname.startsWith("/public-puzzles");
  const isUserPuzzlesActive = location.pathname.startsWith("/your-puzzles");
  const isLearnAndPracticeActive = location.pathname.startsWith(
    "/learn-and-practice"
  );

  return (
    // Return "navbar navbar-expanded" className if showMenu state is true, and defaults to navbar otherwise, this controls CSS styling
    <div className={`navbar ${showMenu ? "navbar-expanded" : ""}`}>
      <div>
        {/* NavLink component is always rendered, it takes us to the home page when we click the image */}
        <NavLink exact to="/">
          <img
            src="/turtle-logo.jpg"
            alt="turtle-logo"
            className="logo button-hover"
          />
        </NavLink>
      </div>

      {isLoaded && (
        <div className="navigation-container">
          {/* Add more navbar buttons here within the navigation container*/}
          {sessionUser && (
            <div className="navbar-button-wrapper">
              <div
                className={`navbar-button button-hover${
                  isLearnAndPracticeActive ? "active" : ""
                }`}
              >
                {/* Learn & Practice */}
                {sessionUser && (
                  <NavLink
                    to="/learn-and-practice/basic-rules/1"
                    className={`navbar-button-text ${showMenu}`}
                    isActive={() => isLearnAndPracticeActive}
                  >
                    Learn & Practice
                  </NavLink>
                )}
              </div>
            </div>
          )}
          {sessionUser && (
            <div className="navbar-button-wrapper">
              <div
                className={`navbar-button button-hover ${
                  isUserPuzzlesActive ? "active" : ""
                }`}
              >
                {/* Your Puzzles */}
                {sessionUser && (
                  <NavLink
                    to="/your-puzzles"
                    className={`navbar-button-text ${showMenu}`}
                    isActive={() => isUserPuzzlesActive}
                  >
                    Your Puzzles
                  </NavLink>
                )}
              </div>
            </div>
          )}
          {sessionUser && (
            <div className="navbar-button-wrapper">
              <div
                className={`navbar-button button-hover${
                  isPublicPuzzlesActive ? "active" : ""
                }`}
              >
                {/* Public Puzzles */}
                {sessionUser && (
                  <NavLink
                    to="/public-puzzles"
                    className={`navbar-button-text ${showMenu}`}
                    isActive={() => isPublicPuzzlesActive}
                  >
                    Public Puzzles
                  </NavLink>
                )}
              </div>
            </div>
          )}
          {sessionUser && (
            <div className="navbar-button-wrapper">
              <div
                className={`navbar-button button-hover${
                  isPotentialPuzzlesActive ? "active" : ""
                }`}
              >
                {/* Potential Puzzles */}
                {sessionUser && (
                  <NavLink
                    to="/potential-puzzles"
                    className={`navbar-button-text ${showMenu}`}
                    isActive={() => isPotentialPuzzlesActive}
                  >
                    Potential Puzzles
                  </NavLink>
                )}
              </div>
            </div>
          )}
          {sessionUser && (
            <div className="game-records-button-wrapper">
              <div
                className={`navbar-button button-hover${
                  isSgfsActive ? "active" : ""
                }`}
              >
                {/* Upload & View Game Records */}
                {sessionUser && (
                  <NavLink
                    to="/sgfs"
                    className={`navbar-button-text ${showMenu}`}
                    isActive={() => isSgfsActive}
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
