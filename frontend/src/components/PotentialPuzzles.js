import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAllPotentialPuzzlesThunk } from "../store/potentialPuzzles";
import "./styles/PotentialPuzzles.css";

// import moment from "moment-timezone";

const PotentialPuzzles = () => {

  const dispatch = useDispatch();
  const userPotentialPuzzles = useSelector((state) => state.potentialPuzzles.potentialPuzzles)
  const history = useHistory();
    useEffect(() => {
      dispatch(fetchAllPotentialPuzzlesThunk())
}, [dispatch])

console.log("user potential puzzles state:", userPotentialPuzzles)
  return (
    <div className="outer-wrapper">
      <div className="user-sgf-table">
        {userPotentialPuzzles &&
          userPotentialPuzzles.map((potentialPuzzle, index) => (

            <div className="uploaded-sgf-thumbnail" key={index}>
              <img
                src={potentialPuzzle["Sgf.thumbnail"]}
                alt={`SGF Thumbnail ${index + 1}`}
                title={`SGF Thumbnail ${index + 1}`}
                // Change the url path to sgfs/sgf.id when we click on the thumbnail
                onClick={() => history.push(`/potential_puzzles/${potentialPuzzle.sgf_id}`)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PotentialPuzzles;
