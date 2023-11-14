import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { suspendPublicPuzzleByIdThunk } from "../store/publicPuzzles";
import "./styles/SuspendPublicPuzzleModal.css"

const SuspendPublicPuzzleModal = ({ puzzleId }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false); // Initially set to false

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(suspendPublicPuzzleByIdThunk(puzzleId))
      .then(() => {
        setShowModal(false); // Close the modal on successful deletion
      })
      .catch((error) => {
        console.error("Failed to delete public puzzle:", error);
      });
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="suspendPublicPuzzleButton">
        <button className="suspend-puzzle-trashcan-icon button-hover" onClick={() => setShowModal(true)} title="Suspend public puzzle">
        <i className="fa fa-trash" style={{color: '#000000'}}></i>
        </button>
      </div>
      {showModal && (
        <div className={`modal-overlay ${showModal ? "activeOverlay" : ""}`}>
          <div className="deleteModal" ref={modalRef}>
            <form className="delete-modal-form">
              <h1 className="deleteText">Confirm Delete</h1>
              <p className="deleteConfirmation">Are you sure you want to suspend this Puzzle?</p>
              <button className="deleteButton" onClick={(e) => handleDelete(e)}>
                Yes (Suspend Puzzle)
              </button>
              <button
                className="cancelButton"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(false);
                }}
              >
                No (Keep Puzzle)
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SuspendPublicPuzzleModal;
