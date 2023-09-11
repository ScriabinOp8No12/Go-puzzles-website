import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPublicPuzzlesThunk } from "../store/publicPuzzles";
import "./styles/LandingPage.css";

function PublicPuzzles() {
  const dispatch = useDispatch();
  // We need dispatch to trigger the dispatch to render the puzzle thumbnails
  // We need useSelector for getting the slice of state from the redux store
  // We will need to use useState() to track and change states of Public Puzzles
  // We will need a useEffect hook to keep track of changes to the puzzle information (as admin when editing)
  // We can use useHistory the same way we used it after clicking on the SGF Thumbnail in UserSGFs.js component
  // We will need to format the "html" in the return portion, have some functions here that dispatch the glift rendering
  // On click stuff out here
  // Need a useState() and/or useEffect() for the filter feature?

  return ("hello")


}

export default PublicPuzzles
