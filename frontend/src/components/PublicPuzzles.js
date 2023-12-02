import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { openModal } from "../store/modal";
import {
  fetchPublicPuzzleByIdThunk,
  fetchPublicPuzzlesThunk,
  fetchFilteredPuzzlesThunk,
} from "../store/publicPuzzles";
import EditPublicPuzzleModal from "./EditPublicPuzzleModal";
import SuspendPublicPuzzleModal from "./SuspendPublicPuzzleModal";
import FilterPublicPuzzleModal from "./FilterPublicPuzzleModal";
import NextPageButton from "./Navigation/NextPageButton";
import PreviousPageButton from "./Navigation/PreviousPageButton";
import "./styles/PublicPuzzles.css";

const PublicPuzzles = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const publicPuzzles = useSelector((state) => state.puzzles.publicPuzzles);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [offset, setOffset] = useState(0);
  const LIMIT = 20; // Number of puzzles per page

  // Edit sgf modal
  const openEditModal = async (puzzleId) => {
    await dispatch(fetchPublicPuzzleByIdThunk(puzzleId));
    dispatch(openModal(<EditPublicPuzzleModal puzzleId={puzzleId} />));
  };

  // **** Filter block below (limit/offset + filter by puzzle type) **** //

  // Initializing filters from URL, this is also good for when we use the back button and want to render the same filters!
  // Note: Since limit and offset are not set in this useEffect, applying new filters *SHOULD* reset the view to the first page of results, regardless of the current page number (which is intended)
  useEffect(() => {
    // Extract query parameters from URL
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page")); // get the page for pagination
    const filtersFromURL = {};
    // Typically forEach when used on arrays is in the order (key, value), but now we are
    // using URLSearchParams (query string stuff) which is in (value, key) order
    queryParams.forEach((value, key) => {
      if (key !== "page") {
        filtersFromURL[key] = value; // Add each query parameter to filtersFromURL, except for 'page' which is for pagination
      }
    });
    // If a page number is present in the URL, calculate the offset for pagination
    if (page) {
      setOffset((page - 1) * LIMIT);
    }
    // Set the filters from URL as initial state
    setSelectedFilters(filtersFromURL);
  }, [location.search]);

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
    // Construct a query string from newFilters
    const queryString = new URLSearchParams(newFilters).toString();
    history.push(`?${queryString}`);
  };

  const toggleFilter = () => {
    // Open filter modal and pass in callback handleFilterChange
    // Our filter public puzzle modal now has access to the url values from the handleFilterChange function
    dispatch(
      openModal(<FilterPublicPuzzleModal onApplyFilter={handleFilterChange} />)
    );
  };

  // This rerenders the page when any of the filters, offset change or when the component mounts
  useEffect(() => {
    const filtersWithPagination = { ...selectedFilters, limit: LIMIT, offset };
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
    // const queryParams = new URLSearchParams(history.location.search);
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page")) || 1; // Default to page 1 if not specified
    setOffset((page - 1) * LIMIT);
  }, [location]); // Depend on the URL search string
// }, [history.location.search]); // Depend on the URL search string

  const handleNextPageClick = () => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset + LIMIT;
      history.push(`/public-puzzles?page=${newOffset / LIMIT + 1}`);
      return newOffset;
    });
  };

  const handlePreviousPageClick = () => {
    setOffset((prevOffset) => {
      // Ensure that the offset does not go below 0
      const newOffset = Math.max(0, prevOffset - LIMIT);
      history.push(`/public-puzzles?page=${newOffset / LIMIT + 1}`);
      return newOffset;
    });
  };

  // Only show the 'Next Page' button if the amount of puzzles being shown is not equal to the limit (meaning there will be more pages of puzzles)
  const showNextPageButton = publicPuzzles.length === LIMIT;
  // Only show the 'Previous Page' button if we are not on the first page
  const showPreviousPageButton = offset > 0;
  // **** Filter block above **** //

  return (
    <div className="outer-wrapper" >
      <div className="filter-wrapper">
        <div className="filter-public-puzzles" onClick={toggleFilter}>
          <label className="button-hover">Filter Puzzles</label>
        </div>
      </div>
      <div className="public-puzzle-table">
        {publicPuzzles && publicPuzzles.length > 0 ? (
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
                <div className="puzzle-category">
                  Category: {puzzle.category}
                </div>
                <div className="puzzle-rank">Rank: {puzzle.difficulty}</div>
                <button
                  className="public-puzzles-pencil-icon button-hover"
                  onClick={() => openEditModal(puzzle.id)}
                  title="Edit public puzzle"
                >
                  ✏️
                </button>
                <SuspendPublicPuzzleModal puzzleId={puzzle.id} />
              </div>
            </div>
          ))
        ) : (
          <div className="no-puzzles-message">No puzzles found!</div>
        )}
      </div>
      {showNextPageButton && <NextPageButton onClick={handleNextPageClick} />}
      {showPreviousPageButton && (
        <PreviousPageButton onClick={handlePreviousPageClick} />
      )}
    </div>
  );
};

export default PublicPuzzles;
