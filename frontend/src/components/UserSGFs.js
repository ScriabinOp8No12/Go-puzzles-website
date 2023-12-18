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
  const [errorNotification, setErrorNotification] = useState(null);
  const [puzzleGenerationSuccess, setPuzzleGenerationSuccess] = useState(null);

  // Refetch the all sgfs thunk (rerender) when the user logs in after they weren't logged in before
  // Combines the logic with the original fetchAllSgfs when component mounts, this fixes the original issue
  // Where we would briefly see a large red error message on the screen where the browser would show a 401 unauthorized error
  // since this fetch request was triggering on the component mounting regardless of if the user was logged in or not
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
      setPuzzleGenerationSuccess(sgf.id);
      setTimeout(() => setPuzzleGenerationSuccess(null), 1900);
      setIsLoading(""); // Reset immediately only on success
      setCurrentSgfId(null); // Reset immediately only on success
    } catch (error) {
      setErrorNotification(sgf.id);
      setTimeout(() => {
        setErrorNotification(sgf.id); // Set error notification immediately
        setIsLoading("");
        setCurrentSgfId(null); // Reset after 1.9 seconds to ensure we don't see "generating..." for a fraction of a second after the error disappears
      }, 1900);
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
        setSuccessNotification('Success!');
      setTimeout(() => {
        setSuccessNotification(null); // Clear the success notification after 2 seconds
      }, 2000);
      } catch (error) {
        setUploadError("Invalid SGF!");
        // Clear the error after 2 seconds
        setTimeout(() => {
          setUploadError("");
        }, 2000);
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


    // Function that grabs true or false from redux store for hasPotentialPuzzle on an SGF
    const hasPotentialPuzzle = (sgfId) => {
      const sgf = userSGFs.find(sgf => sgf.id === sgfId); // find specific sgf by sgf_id
      return sgf ? sgf.hasPotentialPuzzle : false; // return true or false, based on hasPotentialPuzzle value
    }


  return (
    <div className="outer-wrapper">
      <div className="upload-sgf-button">
        {/* Display upload error */}
        {uploadError && <div className="upload-error">{uploadError}</div>}

        {/* Display uploading text */}
        {isLoading === "UPLOADING" && (
          <div className="uploading-sgf">Uploading...</div>
        ) }
         {/* Display success message */}
      {successNotification && (
        <div className="upload-success">Successfully uploaded SGF!</div>
      )}

        <label className="button-hover">
          Upload SGF
          <input type="file" accept=".sgf" onChange={handleFileChange} />
        </label>
{/* {isLoading && <div className="loading-spinner">Uploading...</div>} */}
<div className="generate-puzzles-feature-text"> The <span className="important-text">generate puzzles</span> feature is available between <span className="important-text">11am and 1pm Mountain Time</span> daily. </div>
      </div>
      <div className="user-sgf-table">
        {sortedSGFs &&
          sortedSGFs.map((sgf, index) => (
            <div className="uploaded-sgf-thumbnail" key={index}>
              <div className="message-placeholder">
                {!error &&
                  isLoading === "GENERATING_PUZZLES" &&
                  currentSgfId === sgf.id && (
                    <div className="generating-text">Generating...</div>
                  )}
                {!error && puzzleGenerationSuccess === sgf.id && (
                  <div className="success-notification">
                    Success! Go to Potential Puzzles
                  </div>
                )}
                {errorNotification === sgf.id && (
                  // <div className="error-notification">{error}</div>
                  <div className="error-notification">Failed to Generate Potential Puzzles</div>
                )}
              </div>
              <img
              className="button-hover"
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
                      // className={`create-puzzles-button button-hover`}
                      className={`create-puzzles-button button-hover ${hasPotentialPuzzle(sgf.id) ? 'disabled-button' : ''}`}
                      onClick={() => handleGeneratePuzzles(sgf)}
                      disabled={ hasPotentialPuzzle(sgf.id) || isLoading === "GENERATING_PUZZLES"}
                      // disabled={sgfGenerated || isLoading === "GENERATING_PUZZLES"}
                    >
                      Generate Puzzles!
                    </button>
                    <button
                      className="pencil-icon button-hover"
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
