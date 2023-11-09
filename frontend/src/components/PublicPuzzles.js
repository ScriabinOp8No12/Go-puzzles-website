import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
import { openModal } from "../store/modal";
import { fetchPublicPuzzleByIdThunk, fetchPublicPuzzlesThunk, fetchFilteredPuzzlesThunk } from "../store/publicPuzzles";
import EditPublicPuzzleModal from "./EditPublicPuzzleModal";
import SuspendPublicPuzzleModal from "./SuspendPublicPuzzleModal";
import FilterPublicPuzzleModal from "./FilterPublicPuzzleModal";
import "./styles/PublicPuzzles.css";

const PublicPuzzles = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const publicPuzzles = useSelector((state) => state.puzzles.publicPuzzles);
  const [selectedFilters, setSelectedFilters] = useState({});

  // Edit sgf modal
  const openEditModal = async (puzzleId) => {
    await dispatch(fetchPublicPuzzleByIdThunk(puzzleId));
    dispatch(openModal(<EditPublicPuzzleModal puzzleId={puzzleId} />));
  };

  // **** Filter block below **** //
  const toggleFilter = () => {
    dispatch(openModal(<FilterPublicPuzzleModal onApplyFilter={handleFilterChange} />));
  };

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
    // Construct a query string from newFilters
  const queryString = new URLSearchParams(newFilters).toString();
  history.push(`?${queryString}`);
  };

  // Grabbing the public puzzles and selected filters
  useEffect(() => {
    // Check if filters are applied
    if (Object.keys(selectedFilters).length) {
      // If filters are applied, fetch filtered puzzles
      dispatch(fetchFilteredPuzzlesThunk(selectedFilters));
    } else {
      // If no filters are applied, fetch all public puzzles
      dispatch(fetchPublicPuzzlesThunk());
    }
  }, [dispatch, selectedFilters]);

  // **** Filter block above **** //

  return (
    <div className="outer-wrapper">
      <div className="filter-wrapper">
        <div className="filter-public-puzzles" onClick={toggleFilter}>
          <label>Filter Puzzles</label>
        </div>
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
