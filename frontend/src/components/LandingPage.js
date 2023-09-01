import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPuzzles } from "../store/puzzles"; // Import fetchPuzzles thunk
import "./styles/LandingPage.css";


function Puzzles() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.spots); // Getting all spots from store

  // Fetching spots when component mounts
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  return (
    <div className="containerDiv">

        return (
          {/* Linking to detail page for each spot */}
          <Link to={`/spots/${spot.id}`} key={spot.id} className="spotLink">

              {/* Display image if it exists */}
              <div className="previewImage">
                {spot.previewImage && (
                  <img src={spot.previewImage} alt={spot.name} />
                )}
              </div>

          </Link>
        );
    </div>
  );
}

export default Spots;
