import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

  // Initializing filters from URL, good for when we use the back button and want to render the same filters!
  useEffect(() => {
    // Extract query parameters from URL
    const queryParams = new URLSearchParams(history.location.search);
    const filtersFromURL = {};
    queryParams.forEach((value, key) => {
      filtersFromURL[key] = value;
    });

    // Set the filters from URL as initial state
    setSelectedFilters(filtersFromURL);
  }, [history]);

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
    // Construct a query string from newFilters
  const queryString = new URLSearchParams(newFilters).toString();
  history.push(`?${queryString}`);
  };

  const toggleFilter = () => {
    // Open filter modal and pass in callback handleFilterChange
    // Our filter public puzzle modal now has access to the url values from teh handleFilterChange function
    dispatch(openModal(<FilterPublicPuzzleModal onApplyFilter={handleFilterChange} />));
  };

  useEffect(() => {
    // Check if filters are applied, if they are, then fetch the filtered puzzles
    if (Object.keys(selectedFilters).length) {
      dispatch(fetchFilteredPuzzlesThunk(selectedFilters));
    } else {
      // Otherwise simply fetch all the public puzzles
      dispatch(fetchPublicPuzzlesThunk());
    }
  }, [dispatch, selectedFilters]);

  // **** Filter block above **** //

  return (
    <div className="outer-wrapper">
      <div className="filter-wrapper">
        <div className="filter-public-puzzles" onClick={toggleFilter}>
          <label className="button-hover">Filter Puzzles</label>
        </div>
      </div>
      <div className="public-puzzle-table">
        {publicPuzzles &&
          publicPuzzles.map((puzzle, index) => (
            <div className="public-puzzle-thumbnail" key={index}>
              <img
              className="button-hover"
                src={puzzle.thumbnail}
                alt={`Puzzle ${index}`}
                onClick={() => history.push(`/public-puzzles/${puzzle.id}`)}
                style={{ cursor: "pointer" }}
              />
              <div className="puzzle-details">
                  <div className = "puzzle-category">Category: {puzzle.category}</div>
                  <div className = "puzzle-rank">Rank: {puzzle.difficulty}</div>
                  <button className="public-puzzles-pencil-icon button-hover" onClick={() => openEditModal(puzzle.id)} title="Edit public puzzle">✏️</button>
                  <SuspendPublicPuzzleModal puzzleId={puzzle.id} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PublicPuzzles;
