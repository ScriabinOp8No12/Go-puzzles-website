import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "../styles/Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === '/sgfs';

  return (
    <div className={`navbar ${showMenu ? "navbar-expanded" : ""}`}>
      <div>
        <NavLink exact to="/">
          <img src="/turtle-logo.jpg" alt="turtle-logo" className="logo" />
        </NavLink>
      </div>
      {isLoaded && (
        <div className="navigation-container">
          {sessionUser && (
            <div className="game-records-button-wrapper">
              <div className={`game-records-button ${isActive ? 'active' : ''}`}>
                {sessionUser && (
                  <NavLink
                    to="/sgfs"
                    className={`game-records-button-menu ${showMenu}`}
                  >
                    Upload / View Game Records
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
