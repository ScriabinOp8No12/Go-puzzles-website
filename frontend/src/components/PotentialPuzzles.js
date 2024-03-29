import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAllPotentialPuzzlesThunk } from "../store/potentialPuzzles";
import "./styles/PotentialPuzzles.css";
import moment from "moment-timezone";

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

  const sortedPotentialPuzzles = userPotentialPuzzles.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split(" ")[0].split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // Get the local timezone offset in minutes
  const localTimezoneOffsetMinutes = new Date().getTimezoneOffset();

  // Convert the offset to hours (it could be a decimal)
  const localTimezoneOffsetHours = -localTimezoneOffsetMinutes / 60;

  // console.log("userPotentialPuzzles: ", userPotentialPuzzles)

  return (
    <div className="outer-wrapper">
      {userPotentialPuzzles && userPotentialPuzzles.length > 0 && (
      <h1 className="header-title">Potential Puzzles: Click on the thumbnail to try the AI generated puzzles!</h1>
    )}
      <div className="user-potential-puzzle-table">
        {/* Have unique classname here to style slightly differently compared to sgf page*/}
        {sortedPotentialPuzzles &&
          sortedPotentialPuzzles.map((potentialPuzzle, index) => (
            <div className="uploaded-sgf-thumbnail" key={index}>
              {/* Have unique classname here? */}
              <img className="button-hover"
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
                <span className="date-text">{formatDate(potentialPuzzle.createdAt)}</span>
                <span className="important-text">{countsBySgfId[potentialPuzzle.sgf_id]} Puzzles</span>
              </div>
              {/* sgf_name and game_date */}
              <div className="potential-puzzle-sgf-name">
                {potentialPuzzle["Sgf.sgf_name"]}
              </div>
              <div className="potential-puzzle-game-date">
                      Game Date:
                      {/* We are UTC - 6 in Mountain Time, so we need to subtract NEGATIVE 6 to add 6 hours to the UTC 18 hour time to get time 0 UTC which matches the backend */}
                      {" " +
                        moment
                          .utc(potentialPuzzle["Sgf.game_date"])
                          .subtract(localTimezoneOffsetHours, "hours")
                          .format("YYYY-MM-DD")}
                    </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PotentialPuzzles;
