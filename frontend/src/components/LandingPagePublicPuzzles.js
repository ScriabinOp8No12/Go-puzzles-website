import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
import { getPublicPuzzlesThunk } from "../store/publicPuzzles";
import "./styles/LandingPage.css";

const PublicPuzzles = () => {
  const dispatch = useDispatch();
  // state.slicename.property (state.reducer.publicPuzzles array)
  const publicPuzzles = useSelector((state) => state.puzzles.publicPuzzles);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({}); // Key-value pairs for filters

  useEffect(() => {
    dispatch(getPublicPuzzlesThunk());
  }, [dispatch]);

  // **** Filter block below **** //
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters({
      ...selectedFilters,
      [name]: checked,
    });
  };

  // To implement the filter, modify the useEffect to re-fetch puzzles based on the currently selected filters in selectedFilters state.
  // Add a dependency array to useEffect to re-fetch puzzles whenever selectedFilters changes.
  // Debounce this re-fetching operation to avoid unnecessary API calls.

  // **** Filter block above **** //

  return (
    <div className="outer-wrapper">
      <div className="filter-wrapper">
      <div className="filter-public-puzzles" onClick={toggleFilter}>
        <label>
          Filter Puzzles
        </label>
      </div>
      {showFilter && (
        <div className="filter-dropdown">
          <label>
            <input
              type="checkbox"
              name="filter1"
              checked={selectedFilters["filter1"] || false}
              onChange={handleCheckboxChange}
            />
            Filter 1
          </label>
          <label>
            <input
              type="checkbox"
              name="filter2"
              checked={selectedFilters["filter2"] || false}
              onChange={handleCheckboxChange}
            />
            Filter 2
          </label>
          {/* Add more filters here */}
        </div>

      )}
      </div>
    <div className="public-puzzle-table">
      {publicPuzzles &&
        publicPuzzles.map((puzzle, index) => (
          <div className="public-puzzle-thumbnail" key={index}>
            <img src={puzzle.thumbnail} alt={`Puzzle ${index}`} />
          </div>
        ))}
    </div>
    </div>
  );
}

export default PublicPuzzles;