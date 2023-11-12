import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/modal";
import CloseButton from "./CloseModalButton";
import './styles/FilterPublicPuzzleModal.css';

// Pass in handleFilterChange function (onApplyFilter) from PublicPuzzles.js component (parent)
// So that this component (filter modal) can communicate back with the parent by utilizing this function
const FilterPublicPuzzleModal = ({ onApplyFilter }) => {
  const dispatch = useDispatch();

  // Initialize filter states
  const [filterState, setFilterState] = useState({
    min_rank: "",
    max_rank: "",
    min_move_number: 0,
    max_move_number: 250,
    category: "",
    board_size: "",
  });

  // State for filter validation errors
  const [validationErrors, setValidationErrors] = useState({});

  const validateInputs = () => {
    let errors = {};
    if (filterState.min_rank < 0 || filterState.min_rank > 5000) {
      errors.min_rank = "Min rank must be between 0 and 5000";
    }
    if (filterState.max_rank < 0 || filterState.max_rank > 5000) {
      errors.max_rank = "Max rank must be between 0 and 5000";
    }
    if (filterState.min_rank === filterState.max_rank) {
      errors.rank = "Min rank cannot equal max rank";
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
    if (name === 'custom_range_lower' || name === 'custom_range_upper') {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue)) {
        setFilterState({ ...filterState, [name]: parsedValue });
      } else if (value === '') {
        setFilterState({ ...filterState, [name]: '' });
      }
    } else {
    setFilterState({ ...filterState, [name]: Number(value) });
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
        {validationErrors.rank && <div className="filter-errors">{validationErrors.rank}</div>}
        {validationErrors.min_rank && <div className="filter-errors">{validationErrors.min_rank}</div>}
        <label>
          Min Rank:
          <input
            type="number"
            name="min_rank"
            value={filterState.min_rank}
            onChange={handleChange}
            min="0"
            max="5000"
          />
        </label>
        {validationErrors.max_rank && <div className="filter-errors">{validationErrors.max_rank}</div>}
        <label>
          Max Rank:
          <input
            type="number"
            name="max_rank"
            value={filterState.max_rank}
            onChange={handleChange}
          />
        </label>
        <div className="slider-description">
          <p>Select a Move Number Range for Puzzles</p>
        </div>
        <label>
        Minimum Move Number: {filterState.min_move_number}
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
        <label>
        Maximum Move Number: {filterState.max_move_number}
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

{/* We will want these 2 side by side?  Or have a clickable thing to open it */}
        <label>
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
        </label>

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
          <option value="">Select Board Size</option> {/* Optional: Placeholder option */}
          <option value="9">9</option>
          <option value="13">13</option>
          <option value="19">19</option>
        </select>
        </label>
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterPublicPuzzleModal;
