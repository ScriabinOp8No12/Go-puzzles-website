import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/modal";
import CloseButton from "./CloseModalButton";
import "./styles/FilterPublicPuzzleModal.css";

// Pass in handleFilterChange function (onApplyFilter) from PublicPuzzles.js component (parent)
// So that this component (filter modal) can communicate back with the parent by utilizing this function
const FilterPublicPuzzleModal = ({ onApplyFilter }) => {
  const dispatch = useDispatch();

  // Initialize filter states
  const [filterState, setFilterState] = useState({
    min_rank: 1000,
    max_rank: 2000,
    min_move_number: 0,
    max_move_number: 250,
    category: "",
    board_size: "",
  });

  // State for filter validation errors
  const [validationErrors, setValidationErrors] = useState({});

  const validateInputs = () => {
    let errors = {};
    const minRank = parseInt(filterState.min_rank, 10);
  const maxRank = parseInt(filterState.max_rank, 10);

  if (isNaN(minRank) || minRank < 0 || minRank > 5000) {
    errors.min_rank = "Min rank must be between 0 and 5000";
  }
  if (isNaN(maxRank) || maxRank < 0 || maxRank > 5000) {
    errors.max_rank = "Max rank must be between 0 and 5000";
  }
  if (!isNaN(minRank) && !isNaN(maxRank) && minRank >= maxRank) {
    errors.rank = "Min rank cannot be greater than or equal to max rank";
  }
    // Other validations

    return errors;
  };

  const categories = [
    "Reading",
    "Judgment",
    "Direction",
    "Life and Death",
    "Capturing Race",
    "Ladder/Net",
    "Other",
  ];

  // Handle changes in filter inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Ensure only numbers are set for custom range fields
    if (name === "custom_range_lower" || name === "custom_range_upper") {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue)) {
        setFilterState({ ...filterState, [name]: parsedValue });
      } else if (value === "") {
        setFilterState({ ...filterState, [name]: "" });
      }
    } else {
      setFilterState({ ...filterState, [name]: value });
    }
  };

  // Handle applying filters, and performs action affecting the parent component (sending info back to parent)
  const handleApplyFilters = () => {
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      onApplyFilter(filterState);
      dispatch(closeModal());
    } else {
      setValidationErrors(errors);
    }
  };

  // Reset the form and close the modal
  const handleOverlayClick = () => {
    dispatch(closeModal());
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      {/* Use same styling from edit modal form */}
      <div className="filter-form" onClick={handleFormClick}>
        <CloseButton onClick={() => dispatch(closeModal())} />
        {validationErrors.rank && (
          <div className="filter-errors">{validationErrors.rank}</div>
        )}
        {validationErrors.min_rank && (
          <div className="filter-errors">{validationErrors.min_rank}</div>
        )}
        {validationErrors.max_rank && (
              <div className="filter-errors">{validationErrors.max_rank}</div>
            )}
        {/* Container for Min and Max Rank */}
        <div className="slider-description">
          <p>Select Rank (difficulty) Range</p>
        </div>
        <div className="rank-move-fields">
          <div className="rank-move-field">
            <label>
              Min Rank: {filterState.min_rank}
              <input
                type="range"
                name="min_rank"
                min="100"
                max="4900"
                step="100"
                value={filterState.min_rank}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="rank-move-field">
            <label>
              Max Rank: {filterState.max_rank}
              <input
                type="range"
                name="max_rank"
                min="100"
                max="5000"
                step="100"
                value={filterState.max_rank}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="slider-description">
          <p className="select-move-range">Select Move Number Range</p>
        </div>
        <div className="rank-move-fields">
          <div className="rank-move-field">
            <label>
              Min Move: {filterState.min_move_number}
              <input
                type="range"
                name="min_move_number"
                min="0"
                max="250"
                step="25"
                value={filterState.min_move_number}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="rank-move-field">
            <label>
              Max Move: {filterState.max_move_number}
              <input
                type="range"
                name="max_move_number"
                min="0"
                max="250"
                step="25"
                value={filterState.max_move_number}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        {/* We will want these 2 side by side?  Or have a clickable thing to open it */}
        {/* <label>
          Custom minimum move number:
          <input
            type="number"
            name="custom_range_lower"
            value={filterState.custom_range_lower}
            onChange={handleChange}
          />
        </label>
        <label>
        Custom maximum move number:
          <input
            type="number"
            name="custom_range_upper"
            value={filterState.custom_range_upper}
            onChange={handleChange}
          />
        </label> */}

        <label>
          Category:
          <select
            name="category"
            value={filterState.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Board Size:
          <select
            name="board_size"
            value={filterState.board_size}
            onChange={handleChange}
          >
            <option value="">Select Board Size</option>{" "}
            {/* Optional: Placeholder option */}
            <option value="9">9</option>
            <option value="13">13</option>
            <option value="19">19</option>
          </select>
        </label>
        <button className="apply-filters button-hover" onClick={handleApplyFilters}>Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterPublicPuzzleModal;
