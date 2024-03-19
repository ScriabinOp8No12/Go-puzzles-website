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
  const publicPuzzles = useSelector((state) => state.puzzles.publicPuzzles); // this naming convention is confusing, our store's name is publicPuzzles, but in our index.js for our store, we are aliasing the reducer as 'puzzles' instead...
  const user = useSelector((state) => state.session.user);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [offset, setOffset] = useState(0);
  const LIMIT = 20; // Number of puzzles per page

  // Edit sgf modal
  const openEditModal = async (puzzleId) => {
    await dispatch(fetchPublicPuzzleByIdThunk(puzzleId));
    dispatch(openModal(<EditPublicPuzzleModal puzzleId={puzzleId} />));
  };

  // **** Filter block below (limit/offset + filter by puzzle type) **** //
  // **** BUGS 3/19/2024: If we repeatedly apply the Filter, the sort order is different, something is wrong here. Need to check backend logic and
  // pagination as well.  Also, should probably store the last filter string into local storage so logging back in or going back to it loads the last filtered results
  // Initializing filters from URL, this is also good for when we use the back button and want to render the same filters!
  // Note: Since limit and offset are not set in this useEffect, applying new filters *SHOULD* reset the view to the first page of results, regardless of the current page number (which is intended)
  useEffect(() => {
    // Extract query parameters from URL
    const queryParams = new URLSearchParams(location.search);
    let page = parseInt(queryParams.get("page")); // get the page for pagination
    const filtersFromURL = {};
    // Typically forEach when used on arrays is in the order (key, value), but now we are
    // using URLSearchParams (query string stuff) which is in (value, key) order
    queryParams.forEach((value, key) => {
      if (key !== "page") {
        filtersFromURL[key] = value; // Add each query parameter to filtersFromURL, except for 'page' which is for pagination
      }
    });

    if (!page) {
      page = 1;
    }
    const newOffset = (page - 1) * LIMIT;

    // Set filters and offset based on URL
    setSelectedFilters(filtersFromURL);
    setOffset(newOffset);
    // Construct filter with pagination for data fetching
    const filtersWithPagination = {
      ...filtersFromURL,
      limit: LIMIT,
      offset: newOffset,
    };

    // Fetch data based on the updated state
    if (Object.keys(filtersFromURL).length) {
      dispatch(fetchFilteredPuzzlesThunk(filtersWithPagination));
    } else {
      dispatch(fetchPublicPuzzlesThunk(filtersWithPagination));
    }
  }, [location.search, dispatch]);

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
    <div className="outer-wrapper">
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
                {user.isAdmin && (<><button
                  className="public-puzzles-pencil-icon button-hover"
                  onClick={() => openEditModal(puzzle.id)}
                  title="Edit public puzzle"
                >
                  ✏️
                </button>
                <SuspendPublicPuzzleModal puzzleId={puzzle.id} />
                </>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-puzzles-message">No puzzles found!</div>
        )}
      </div>
      <div className="button-container glift-puzzle-layout">
        {showPreviousPageButton && (
          <PreviousPageButton onClick={handlePreviousPageClick} />
        )}
        {showNextPageButton && <NextPageButton onClick={handleNextPageClick} />}
      </div>
    </div>
  );
};

export default PublicPuzzles;
