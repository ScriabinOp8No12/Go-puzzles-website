import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "../styles/Navigation.css";

function ProfileButton({ user, showMenu, setShowMenu }) {
  const dispatch = useDispatch();
  // const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu, setShowMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push("/");
  };

  // add a conditional class logged-in and not-logged-in which we can use to
  // style the menu items differently based on whether the user is logged in or not
  const ulClassName =
    "profile-dropdown" +
    (showMenu ? "" : " hidden") +
    (user ? " logged-in" : " not-logged-in");

  // Redirecting user to current spots function
  const redirectToCurrentSpots = () => {
    history.push("/spots/current");
  };

  const profileButtonClass = `profile-button${
    showMenu ? " dropdown-active" : ""
  }`;

  return (
    // Container for icon + menu, we will use a flexbox to align them side by side and in the top right of the screen
    <div className="navigation-container">
      {/* Add a class to the profile button */}
      <button className={profileButtonClass} onClick={openMenu}>
        <i className="fas fa-bars hamburger-icon" />
        <i className="fas fa-user-circle" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>Hello {user.firstName}</li>
            <li>{user.email}</li>
            <li className="li-manage-spots-button">
              <button
                className="redirectCurrentSpotsButton"
                onClick={redirectToCurrentSpots}
              >
                Manage Spots
              </button>
            </li>
            <li>
              <button className="logout-button" onClick={logout}>
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <OpenModalMenuItem
              itemText="Sign up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
            <OpenModalMenuItem
              itemText="Log in"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
          </>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;
