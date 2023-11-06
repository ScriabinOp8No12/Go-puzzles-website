import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editPublicPuzzlesByIdThunk,
  fetchPublicPuzzlesThunk,
} from "../store/publicPuzzles";
import { closeModal } from "../store/modal";
import CloseButton from "./CloseModalButton";
import "./styles/EditPublicPuzzleModal.css";

// Verify this is getting right props
const EditPublicPuzzleModal = ({ puzzleId }) => {
  const dispatch = useDispatch();
  const currentPublicPuzzle = useSelector(
    (state) => state.puzzles.currentPublicPuzzle
  );

  // console.log("currentPublicPuzzle useSelector:", currentPublicPuzzle)

  // ***** Initialize public puzzle form state with all expected fields ****** //

  const [puzzleDetails, setPuzzleDetails] = useState({
    category: "",
    difficulty: "",
    description: "",
  });

  //  ******** Form errors ********** //

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // console.log("currentPublicPuzzle in useEffect: ", currentPublicPuzzle);
    if (currentPublicPuzzle) {
      setPuzzleDetails({
        ...currentPublicPuzzle,
      });
    }
  }, [currentPublicPuzzle]);

  // console.log("puzzleDetails: ", puzzleDetails)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...puzzleDetails };

    // Try to dispatch / trigger the action for editing the specified public puzzle by id
    try {
      await dispatch(editPublicPuzzlesByIdThunk(puzzleId, payload));
      dispatch(closeModal());
      // ** slightly not optimized, could create a new thunk that only fetches one public puzzle?
      // Fetch the entire list of Puzzles again, React is smart enough to only rerender the changed current public puzzle, so it's still quick
      dispatch(fetchPublicPuzzlesThunk());
    } catch (error) {
      if (error.json) {
        const data = await error.json();
        if (data && data.errors) {
          setFormErrors(data.errors);
        }
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPuzzleDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleOverlayClick = () => {
    dispatch(closeModal()); // Reset the form and close the modal
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <form
        onSubmit={handleSubmit}
        className="edit-modal-form"
        onClick={handleFormClick}
      >
        <CloseButton onClick={() => dispatch(closeModal())} />

        <label>
          Category:
          <select
            name="category"
            value={puzzleDetails.category || ""}
            onChange={handleChange}
            className="category-public-puzzle"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Reading">Reading</option>
            <option value="Judgment">Judgment</option>
            <option value="Direction">Direction</option>
            <option value="Life and Death">Life and Death</option>
            <option value="Capturing Race">Capturing Race</option>
            <option value="Ladder/Net">Ladder/Net</option>
            <option value="Other">Other</option>
          </select>
          {formErrors.category && (
            <div className="edit-puzzle-errors">{formErrors.category[0]}</div>
          )}
        </label>

        <label className="public-puzzle-rank">
          Rank:
          <input
            name="difficulty"
            type="number"
            value={puzzleDetails.difficulty || ""}
            onChange={handleChange}
          />
          {formErrors.difficulty && (
            <div className="edit-difficulty-errors">
              {formErrors.difficulty[0]}
            </div>
          )}
        </label>
        <label className="public-puzzle-description">
          Description:
          <input
            name="description"
            value={puzzleDetails.description || ""}
            onChange={handleChange}
          />
          {formErrors.description && (
            <div className="edit-description-errors">
              {formErrors.description[0]}
            </div>
          )}
        </label>

        <button className="updateButton" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPublicPuzzleModal;
