import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSgfsThunk, uploadSgfThunk } from "../store/sgfs";
import { openModal } from "../store/modal";
import { useHistory } from "react-router-dom";
import DeleteSgfModal from "./DeleteSgfModal";
import EditSgfModal from "./EditSgfModal";
import "./styles/UserSGFs.css";

const UserSGFs = () => {
  const dispatch = useDispatch();
  const userSGFs = useSelector((state) => state.sgfs.userSGFs);
  const history = useHistory();
  const [uploadError, setUploadError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Edit sgf modal
  const openEditModal = (sgfId) => {
    dispatch(openModal(<EditSgfModal sgfId={sgfId} />));
  };

  useEffect(() => {
    dispatch(fetchAllSgfsThunk());
  }, [dispatch]);

  const handleFileChange = async (e) => {
    setUploadError("");
    setIsLoading(true); // Set isLoading to true when upload starts

    const file = e.target.files[0];
    if (!file) {
      setIsLoading(false); // Reset isLoading if no file is selected
      // Handle the case where no file is selected or the upload is canceled.
      return;
    }

    // Reset file input value so the same file can trigger the onChange event again
    e.target.value = null;
    const reader = new FileReader();

    reader.onload = async function (event) {
      const sgf_data = {
        sgf_data: [event.target.result],
      };

      try {
        await dispatch(uploadSgfThunk(sgf_data));
      } catch (error) {
        setUploadError("Invalid SGF!");
        // Clear the error after 4 seconds
        setTimeout(() => {
          setUploadError("");
        }, 4000);
      }
      setIsLoading(false); // Reset isLoading when upload is complete or error occurs
    };

    reader.readAsText(file);
  };

  const sortedSGFs = userSGFs.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  return (
    <div className="outer-wrapper">
      <div className="upload-sgf-button">
        <label>
          Upload SGF
          <input type="file" accept=".sgf" onChange={handleFileChange} />
        </label>
        {/* Display upload error */}
        {uploadError && <div className="upload-error">{uploadError}</div>}
        {/* Display spinner */}
        {isLoading && <div className="uploading-sgf">Uploading...</div>}
      </div>
      <div className="user-sgf-table">
        {sortedSGFs &&
          sortedSGFs.map((sgf, index) => (
            <div className="uploaded-sgf-thumbnail" key={index}>
              <img
                src={sgf.thumbnail}
                alt="SGF Thumbnail"
                title={sgf.sgf_name}
                onClick={() => history.push(`/sgfs/${sgf.id}`)}
                style={{ cursor: "pointer" }}
              />
              <div className="sgf-details">
                {sgf.updatedAt && sgf.updatedAt !== "?" && (
                  <div className="sgf-details-top-row">
                    <div className="sgf-updated-at">
                      {formatDate(sgf.updatedAt)}
                    </div>
                    <button
                      className="create-puzzles-button"
                      onClick={() => alert("Feature coming soon")}
                    >
                      Create Puzzles!
                    </button>
                    <button className="pencil-icon" onClick={() => openEditModal(sgf.id)} >✏️</button>
                    {/* <button className="trashcan-icon"></button> */}
                    <DeleteSgfModal sgfId={sgf.id} />
                  </div>
                )}
                {sgf.sgf_name &&
                  sgf.sgf_name !== "? vs ?" &&
                  sgf.sgf_name.trim() !== "" && (
                    <div className="sgf-page-sgf-name">{sgf.sgf_name}</div>
                  )}
                {/* If a blank date, or ? value, or invalid date is entered (see Invalid date in DB) then don't render the date at all */}
                {sgf.game_date &&
                  sgf.game_date !== "?" &&
                  sgf.game_date !== "Invalid date" &&
                  sgf.game_date.trim() !== "" && (
                    <div>Game Date: {formatDate(sgf.game_date)}</div>
                  )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserSGFs;
