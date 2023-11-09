import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/modal';
import CloseButton from "./CloseModalButton";
// import './styles/FilterPublicPuzzleModal.css';

const FilterPublicPuzzleModal = ({ onApplyFilter }) => {
  const dispatch = useDispatch();

  // Initialize filter states
  const [filterState, setFilterState] = useState({
    category: '',
    minRank: '',
    maxRank: '',
    // other filter states
  });

  // Handle changes in filter inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterState({ ...filterState, [name]: value });
  };

  // Handle applying filters
  const handleApplyFilters = () => {
    onApplyFilter(filterState);
    dispatch(closeModal());
  };

  // Handle closing the modal
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
          Category:
          <select
            name="category"
            value={filterState.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {/* List of categories */}
          </select>
        </label>

        <label>
          Min Rank:
          <input
            type="number"
            name="minRank"
            value={filterState.minRank}
            onChange={handleChange}
          />
        </label>

        <label>
          Max Rank:
          <input
            type="number"
            name="maxRank"
            value={filterState.maxRank}
            onChange={handleChange}
          />
        </label>

        {/* Other filters here */}

        <button onClick={handleApplyFilters}>Apply Filters</button>
        {/* <button onClick={() => dispatch(closeModal())}>Close</button> */}
      </div>
    </div>
  );
};

export default FilterPublicPuzzleModal;
