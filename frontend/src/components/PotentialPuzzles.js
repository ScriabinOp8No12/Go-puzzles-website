import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAllPotentialPuzzlesThunk } from "../store/potentialPuzzles";
import "./styles/PotentialPuzzles.css";
// import moment from "moment-timezone";

const PotentialPuzzles = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userPotentialPuzzles = useSelector(
    (state) => state.potentialPuzzles.potentialPuzzles
  );
  const countsBySgfId = useSelector(
    (state) => state.potentialPuzzles.countsBySgfId
  );

  useEffect(() => {
    dispatch(fetchAllPotentialPuzzlesThunk());
  }, [dispatch]);

  return (
    <div className="outer-wrapper">
      {userPotentialPuzzles && userPotentialPuzzles.length > 0 && (
      <h1 className="header-title">Potential Puzzles: Click on the thumbnail to try the AI generated puzzles!</h1>
    )}
      <div className="user-potential-puzzle-table">
        {/* Have unique classname here to style slightly differently compared to sgf page*/}
        {userPotentialPuzzles &&
          userPotentialPuzzles.map((potentialPuzzle, index) => (
            <div className="uploaded-sgf-thumbnail" key={index}>
              {/* Have unique classname here? */}
              <img
                src={potentialPuzzle["Sgf.thumbnail"]} // since the property is Sgf DOT thumbnail, we have to use square brackets
                alt={`SGF Thumbnail ${index + 1}`}
                title={`Potential Puzzles ${index + 1}`}
                // Change the url path to potential_puzzles/sgf.id when we click on the thumbnail
                onClick={() =>
                  history.push(`/potential-puzzles/${potentialPuzzle.sgf_id}`)
                }
                style={{ cursor: "pointer" }}
              />
              <div className="count-value">
                {countsBySgfId[potentialPuzzle.sgf_id]} Puzzles Found
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PotentialPuzzles;
