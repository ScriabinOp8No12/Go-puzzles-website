import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal";

function OpenModalMenuItem({ itemText, modalComponent, onItemClick }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(modalComponent));
    if (onItemClick) onItemClick();
  };

  return <li onClick={handleClick}>{itemText}</li>;
}

export default OpenModalMenuItem;
