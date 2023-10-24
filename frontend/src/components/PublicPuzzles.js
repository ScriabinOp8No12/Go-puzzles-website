import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
import { openModal } from "../store/modal";
import { fetchPublicPuzzleByIdThunk, fetchPublicPuzzlesThunk } from "../store/publicPuzzles";
import EditPublicPuzzleModal from "./EditPublicPuzzleModal";
import SuspendPublicPuzzleModal from "./SuspendPublicPuzzleModal";
import "./styles/PublicPuzzles.css";

const PublicPuzzles = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // state.slicename.property (state.reducer.publicPuzzles array)
  const publicPuzzles = useSelector((state) => state.puzzles.publicPuzzles);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({}); // Key-value pairs for filters

  // Edit sgf modal
  const openEditModal = async (puzzleId) => {
    await dispatch(fetchPublicPuzzleByIdThunk(puzzleId));
    dispatch(openModal(<EditPublicPuzzleModal puzzleId={puzzleId} />));
  };

  // Grabbing the public puzzles
  useEffect(() => {
    dispatch(fetchPublicPuzzlesThunk());
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
          <label>Filter Puzzles</label>
        </div>
        {showFilter && (
          <div className="filter-dropdown">
            <label>
              {/* Placeholders for now, have one button at end to actually filter,
            NO NEED to have it change after each box getting checked*/}
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
              <img
                src={puzzle.thumbnail}
                alt={`Puzzle ${index}`}
                // Changed get /puzzles endpoint to id: puzzle.id instead of puzzle_id as the column name
                onClick={() => history.push(`/public-puzzles/${puzzle.id}`)}
                style={{ cursor: "pointer" }}
              />
              <div className="puzzle-details">
                  <div className = "puzzle-category">Category: {puzzle.category}</div>
                  <div className = "puzzle-rank">Rank: {puzzle.difficulty}</div>
                  <button className="public-puzzles-pencil-icon" onClick={() => openEditModal(puzzle.id)} title="Edit public puzzle">✏️</button>
                  <SuspendPublicPuzzleModal puzzleId={puzzle.id} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PublicPuzzles;
