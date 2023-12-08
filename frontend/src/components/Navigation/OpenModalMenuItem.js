import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal";

function OpenModalMenuItem({ itemText, modalComponent, onItemClick }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(modalComponent));
    if (onItemClick) onItemClick();
  };

  // Determine className based on li text for rendering the login and signup buttons
  const className = itemText === "login" || itemText === "Log in" ? "landing-page-login-button" : "landing-page-signup-button"
  return <li className={className} onClick={handleClick}>{itemText}</li>;
}

export default OpenModalMenuItem;
