import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { openModal } from "../store/modal";
import { fetchPublicPuzzleByIdThunk, fetchPublicPuzzlesThunk, fetchFilteredPuzzlesThunk } from "../store/publicPuzzles";
import EditPublicPuzzleModal from "./EditPublicPuzzleModal";
import SuspendPublicPuzzleModal from "./SuspendPublicPuzzleModal";
import FilterPublicPuzzleModal from "./FilterPublicPuzzleModal";
import NavigationButton from "./LearnAndPractice/NavigationButton";
import "./styles/PublicPuzzles.css";

const PublicPuzzles = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const publicPuzzles = useSelector((state) => state.puzzles.publicPuzzles);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [offset, setOffset] = useState(0);
  const LIMIT = 3; // Number of puzzles per page

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
    const page = parseInt(queryParams.get('page')); // get the page for pagination
    const filtersFromURL = {};
    queryParams.forEach((value, key) => {
      if (key !== 'page') {
        filtersFromURL[key] = value;
      }
    });
    if (page) {
      setOffset((page - 1) * LIMIT);
  }
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
    // console.log("Fetching puzzles with offset:", offset);
    const filtersWithPagination = { ...selectedFilters, limit: LIMIT, offset}
    // Check if filters are applied, if they are, then fetch the filtered puzzles
    if (Object.keys(selectedFilters).length) {
      dispatch(fetchFilteredPuzzlesThunk(filtersWithPagination));
    } else {
      // Otherwise simply fetch all the public puzzles
      dispatch(fetchPublicPuzzlesThunk(filtersWithPagination));
    }
  }, [dispatch, selectedFilters, offset]);

  // Handle when user clicks the back button or navigates to a different page number, we need to rerender the page
  useEffect(() => {
    const queryParams = new URLSearchParams(history.location.search);
    const page = parseInt(queryParams.get('page')) || 1; // Default to page 1 if not specified
    setOffset((page - 1) * LIMIT);
  }, [history.location.search]); // Depend on the URL search string

  const handleNextPageClick = () => {
    setOffset(prevOffset => {
      const newOffset = prevOffset + LIMIT;
        history.push(`/public-puzzles?page=${newOffset / LIMIT + 1}`);
        // console.log("Current offset:", prevOffset, "New offset:", prevOffset + LIMIT);
        return newOffset;
    });
};

// Determine if the 'Next Page' button should be shown
const showNextPageButton = publicPuzzles.length === LIMIT;
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
      {showNextPageButton && <NavigationButton onClick={handleNextPageClick} />}
    </div>
  );
};

export default PublicPuzzles;
