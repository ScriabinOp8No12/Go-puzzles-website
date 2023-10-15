import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllSgfsThunk,
  fetchSgfByIdThunk,
  uploadSgfThunk,
} from "../store/sgfs";
import { generatePotentialPuzzlesThunk } from "../store/potentialPuzzles";
import { openModal } from "../store/modal";
import { useHistory } from "react-router-dom";
import DeleteSgfModal from "./DeleteSgfModal";
import EditSgfModal from "./EditSgfModal";
import "./styles/UserSGFs.css";
import moment from "moment-timezone";

const UserSGFs = () => {
  const dispatch = useDispatch();
  const userSGFs = useSelector((state) => state.sgfs.userSGFs);
  const error = useSelector((state) => state.potentialPuzzles.error); // get errors from redux store state
  const history = useHistory();
  const [uploadError, setUploadError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [currentSgfId, setCurrentSgfId] = useState(null);
  const [successNotification, setSuccessNotification] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(fetchAllSgfsThunk());
  }, [dispatch]);

  // Edit sgf modal
  const openEditModal = async (sgfId) => {
    await dispatch(fetchSgfByIdThunk(sgfId));
    dispatch(openModal(<EditSgfModal sgfId={sgfId} />));
  };

  const handleGeneratePuzzles = async (sgf) => {
    setIsLoading("GENERATING_PUZZLES");
    setCurrentSgfId(sgf.id);
    try {
      await dispatch(generatePotentialPuzzlesThunk(sgf.id, sgf.sgf_data));
      setSuccessNotification(sgf.id);
      setTimeout(() => setSuccessNotification(null), 2900);
      setIsLoading(""); // Reset immediately only on success
      setCurrentSgfId(null); // Reset immediately only on success
    } catch (error) {
      setTimeout(() => {
        setIsLoading("");
        setCurrentSgfId(null);  // Reset after 2.9 seconds to ensure we don't see "generating..." for a fraction of a second after the error disappears
      }, 2900);
    }
  };

  const handleFileChange = async (e) => {
    setUploadError("");
    setIsLoading("UPLOADING"); // Set isLoading to true when upload starts

    const file = e.target.files[0];
    if (!file) {
      setIsLoading(""); // Reset isLoading if no file is selected
      // Handle the case where no file is selected or the upload is cancelled.
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
        // Clear the error after 3 seconds
        setTimeout(() => {
          setUploadError("");
        }, 3000);
      }
      setIsLoading(""); // Reset isLoading when upload is complete or error occurs
    };

    reader.readAsText(file);
  };

  const sortedSGFs = userSGFs.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split(" ")[0].split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // Get the local timezone offset in minutes
  const localTimezoneOffsetMinutes = new Date().getTimezoneOffset();

  // Convert the offset to hours (it could be a decimal)
  const localTimezoneOffsetHours = -localTimezoneOffsetMinutes / 60;

  // console.log("*****************", localTimezoneOffsetHours)

  return (
    <div className="outer-wrapper">
      <div className="upload-sgf-button">
        <label>
          Upload SGF
          <input type="file" accept=".sgf" onChange={handleFileChange} />
        </label>
        {/* Display upload error */}
        {uploadError && <div className="upload-error">{uploadError}</div>}

        {/* Display uploading text */}
        {isLoading === "UPLOADING" && (
          <div className="uploading-sgf">Uploading...</div>
        )}
        {/* {isLoading && <div className="loading-spinner">Uploading...</div>} */}
      </div>
      <div className="user-sgf-table">
        {sortedSGFs &&
          sortedSGFs.map((sgf, index) => (
            <div className="uploaded-sgf-thumbnail" key={index}>
              <div className="message-placeholder">
              {!error && isLoading === "GENERATING_PUZZLES" &&
                currentSgfId === sgf.id && (
                  <div className="generating-text">Generating...</div>
                )}
              {!error && successNotification === sgf.id && (
                <div className="success-notification">
                  Success! Go to Potential Puzzles
                </div>
              )}
              {error && currentSgfId === sgf.id && (
              <div className="error-notification">{error}</div>
            )}
            </div>
              <img
                src={sgf.thumbnail}
                alt="SGF Thumbnail"
                title={sgf.sgf_name}
                // Change the url path to sgfs/sgf.id when we click on the thumbnail
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
                      onClick={() => handleGeneratePuzzles(sgf)}
                      disabled={isLoading === "GENERATING_PUZZLES"}
                    >
                      Generate Puzzles!
                    </button>
                    <button
                      className="pencil-icon"
                      title="Edit SGF"
                      onClick={() => openEditModal(sgf.id)}
                    >
                      ✏️
                    </button>

                    <DeleteSgfModal sgfId={sgf.id} />
                  </div>
                )}
                {sgf.sgf_name &&
                  sgf.sgf_name !== "? vs ?" &&
                  sgf.sgf_name !== "?" &&
                  sgf.sgf_name.trim() !== "" && (
                    <div className="sgf-page-sgf-name">{sgf.sgf_name}</div>
                  )}
                {/* If a blank date, or ? value, or invalid date is entered (see Invalid date in DB) then don't render the date at all */}
                {sgf.game_date &&
                  sgf.game_date !== "?" &&
                  sgf.game_date !== "Invalid date" &&
                  sgf.game_date.trim() !== "" && (
                    <div>
                      Game Date:
                      {/* We are UTC - 6 in Mountain Time, so we need to subtract NEGATIVE 6 to add 6 hours to the UTC 18 hour time to get time 0 UTC which matches the backend */}
                      {" " +
                        moment
                          .utc(sgf.game_date)
                          .subtract(localTimezoneOffsetHours, "hours")
                          .format("YYYY-MM-DD")}
                    </div>
                  )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserSGFs;
