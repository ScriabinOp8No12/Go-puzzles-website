import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/modal";
import CloseButton from "./CloseModalButton";
// import './styles/FilterPublicPuzzleModal.css';

// Pass in handleFilterChange function (onApplyFilter) from PublicPuzzles.js component (parent)
// So that this component (filter modal) can communicate back with the parent by utilizing this function
const FilterPublicPuzzleModal = ({ onApplyFilter }) => {
  const dispatch = useDispatch();

  // Initialize filter states
  const [filterState, setFilterState] = useState({
    min_rank: "",
    max_rank: "",
    min_move_number: "",
    max_move_number: "",
    category: "",
    board_size: "",
  });

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
    setFilterState({ ...filterState, [name]: value });
  };

  // Handle applying filters, and performs action affecting the parent component (sending info back to parent)
  const handleApplyFilters = () => {
    onApplyFilter(filterState);
    dispatch(closeModal());
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
      <div className="edit-modal-form" onClick={handleFormClick}>
        <CloseButton onClick={() => dispatch(closeModal())} />
        <label>
          Minimum Rank:
          <input
            type="number"
            name="min_rank"
            value={filterState.min_rank}
            onChange={handleChange}
          />
        </label>
        <label>
          Maximum Rank:
          <input
            type="number"
            name="max_rank"
            value={filterState.max_rank}
            onChange={handleChange}
          />
        </label>
        <label>
          Minimum Move Number:
          <input
            type="number"
            name="min_move_number"
            value={filterState.min_move_number}
            onChange={handleChange}
          />
        </label>
        <label>
          Maximum Move Number:
          <input
            type="number"
            name="max_move_number"
            value={filterState.max_move_number}
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
          <input
            type="number"
            name="board_size"
            value={filterState.board_size}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterPublicPuzzleModal;
