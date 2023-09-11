import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
import { getPublicPuzzlesThunk } from "../store/publicPuzzles";
import "./styles/LandingPage.css";

const PublicPuzzles = () => {
  const dispatch = useDispatch();
  // state.slicename.property (state.reducer.publicPuzzles array)
  const publicPuzzles = useSelector((state) => state.puzzles.publicPuzzles);

  useEffect(() => {
    dispatch(getPublicPuzzlesThunk());
  }, [dispatch]);

  return (
    <div>
      {publicPuzzles &&
        publicPuzzles.map((puzzle, index) => (
          <div className="public-puzzle-thumbnail" key={index}>
            <img src={puzzle.thumbnail} alt={`Puzzle ${index}`} />
          </div>
        ))}
    </div>
  );
}

export default PublicPuzzles;
