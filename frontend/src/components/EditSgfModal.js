import moment from "moment-timezone";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSgfByIdThunk } from "../store/sgfs";
import { closeModal } from "../store/modal";
import "./styles/EditSgfModal.css";

const EditSgfModal = ({ sgfId }) => {
  const dispatch = useDispatch();
  const currentSgf = useSelector((state) => state.sgfs.currentSgf);

  // Initialize form state with all expected fields.
  const [sgfDetails, setSgfDetails] = useState({
    sgf_name: "",
    black_player: "",
    white_player: "",
    black_rank: "",
    white_rank: "",
    game_date: "",
    komi: "",
    result: "",
  });

  //  ************************ Code below still off by 1 day ****************
  // Was React DatePicker the package I installed?  Maybe that's the one to try

  useEffect(() => {
    if (currentSgf) {
      console.log("Current SGF from Redux:", currentSgf);

      setSgfDetails({
        ...currentSgf,
        game_date: moment(currentSgf.game_date).format("YYYY-MM-DD"),
      });
    }
  }, [currentSgf]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = moment(sgfDetails.game_date).format("YYYY-MM-DD");
    const payload = { ...sgfDetails, game_date: formattedDate };
    const success = dispatch(editSgfByIdThunk(sgfId, payload));
    if (success) {
      dispatch(closeModal()); // close the modal on successful form submission
    }
  };

  // *********************** Code above still off by 1 day *****************

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSgfDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleOverlayClick = () => {
    dispatch(closeModal()); // Reset the form and close the modal
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      {" "}
      {/* Use modal class */}
      <form
        onSubmit={handleSubmit}
        className="edit-modal-form"
        onClick={handleFormClick}
      >
        {/* <form onSubmit={handleSubmit} className="modal"> */}
        <label>
          SGF Name:
          <input
            name="sgf_name"
            value={sgfDetails.sgf_name || ""}
            onChange={handleChange}
          />
        </label>
        {/* Group black player and black rank side by side */}
        <div className="sgf-related-fields">
          <label>
            Black Player:
            <input
              name="black_player"
              value={sgfDetails.black_player || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Black Rank:
            <input
              name="black_rank"
              value={sgfDetails.black_rank || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* Group white player and white rank side by side */}
        <div className="sgf-related-fields">
          <label>
            White Player:
            <input
              name="white_player"
              value={sgfDetails.white_player || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            White Rank:
            <input
              name="white_rank"
              value={sgfDetails.white_rank || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* Group komi and result */}
        <div className="sgf-related-fields">
          <label>
            Komi:
            <input
              name="komi"
              value={sgfDetails.komi || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Result:
            <input
              name="result"
              value={sgfDetails.result || ""}
              onChange={handleChange}
            />
          </label>
          </div>
        <label>
          Game Date:
          <input
            type="date"
            name="game_date"
            value={sgfDetails.game_date || ""}
            onChange={handleChange}
          />
        </label>

        <button className="updateButton" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditSgfModal;
