import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles/PotentialPuzzles.css";

// import moment from "moment-timezone";

const PotentialPuzzles = () => {
  // const userSGFs = useSelector((state) => state.sgfs.userSGFs);
  const sgfThumbnails = useSelector((state) => state.potentialPuzzles.sgfThumbnails);
  // console.log("sgfThumbnails! ", sgfThumbnails)
  const sgfId = useSelector((state) => state.sgfs.sgf_id)
  console.log("sgfId: ", sgfId)
  const history = useHistory();

  return (
    <div className="outer-wrapper">
      <div className="user-sgf-table">
        {sgfThumbnails &&
          sgfThumbnails.map((thumbnail, index) => (

            <div className="uploaded-sgf-thumbnail" key={index}>
              <img
                src={thumbnail}
                alt={`SGF Thumbnail ${index + 1}`}
                title={`SGF Thumbnail ${index + 1}`}
                // Change the url path to sgfs/sgf.id when we click on the thumbnail
                onClick={() => history.push(`/potential_puzzles/${sgfId}`)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PotentialPuzzles;
