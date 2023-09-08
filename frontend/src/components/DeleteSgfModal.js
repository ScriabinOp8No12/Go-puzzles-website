import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSgfByIdThunk } from "../store/sgfs";
import "./styles/DeleteSgf.css"

const DeleteSgfModal = ({ sgfId }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false); // Initially set to false

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSgfByIdThunk(sgfId))
      .then(() => {
        setShowModal(false); // Close the modal on successful deletion
      })
      .catch((error) => {
        console.error("Failed to delete sgf:", error);
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
      <div className="deleteSgfButton">
        <button className="trashcan-icon" onClick={() => setShowModal(true)}>
        <i className="fa fa-trash" style={{color: '#000000'}}></i>
        </button>
      </div>
      {showModal && (
        <div className={`modal-overlay ${showModal ? "activeOverlay" : ""}`}>
          <div className="deleteModal" ref={modalRef}>
            <form className="delete-modal-form">
              <h1 className="deleteText">Confirm Delete</h1>
              <p className="deleteConfirmation">Are you sure you want to delete this SGF?</p>
              <button className="deleteButton" onClick={(e) => handleDelete(e)}>
                Yes (Delete SGF)
              </button>
              <button
                className="cancelButton"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(false);
                }}
              >
                No (Keep SGF)
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteSgfModal;
