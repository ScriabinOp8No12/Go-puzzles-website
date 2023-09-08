import moment from "moment-timezone";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSgfByIdThunk } from "../store/sgfs";
import { closeModal } from "../store/modal";
import "./styles/EditSgfModal.css";

const EditSgfModal = ({ sgfId }) => {
  const dispatch = useDispatch();
  const currentSgf = useSelector((state) => state.sgfs.currentSgf);

  // ***** Initialize form state with all expected fields ****** //
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

  //  ******** Form errors ********** //
  const [formErrors, setFormErrors] = useState({});

  // ***************** Ranking fields 30k-1k, 1d/1p-9d/9p ************************* //
  const kRanks = Array.from({ length: 30 }, (_, i) => `${30 - i}k`);
  const dRanks = Array.from({ length: 9 }, (_, i) => `${i + 1}d`);
  const pRanks = Array.from({ length: 9 }, (_, i) => `${i + 1}p`);

  const rankOptions = [...kRanks, ...dRanks, ...pRanks];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = moment(sgfDetails.game_date).format("YYYY-MM-DD");
    const payload = { ...sgfDetails, game_date: formattedDate };

    try {
      await dispatch(editSgfByIdThunk(sgfId, payload));
      dispatch(closeModal());
    } catch (error) {
      // Catch errors if dispatch fails
      const data = await error.json();
      if (data && data.errors) {
        setFormErrors(data.errors);
      }
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

  // If we type 20.2, it'll switch it back to 20
  const handleKomiChange = (e) => {
    let value = e.target.value;
    if (!/^(\d+(\.5)?)?$/.test(value)) {
      return; // exit the function if the value does not match the pattern
    }
    setSgfDetails((prevDetails) => ({ ...prevDetails, komi: value }));
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <form
        onSubmit={handleSubmit}
        className="edit-modal-form"
        onClick={handleFormClick}
      >
        <label>
          SGF Name:
          <input
            name="sgf_name"
            value={sgfDetails.sgf_name || ""}
            onChange={handleChange}
          />
          {formErrors.sgf_name && <div className="edit-sgf-errors">{formErrors.sgf_name[0]}</div>}
        </label>
        {/* Group black player and black rank side by side */}
        <div className="sgf-related-fields">
          <label className="player-label">
            Black Player:
            <input
              name="black_player"
              value={sgfDetails.black_player || ""}
              onChange={handleChange}
            />
             {formErrors.black_player && <div className="edit-sgf-errors">{formErrors.black_player[0]}</div>}
          </label>
          <label className="rank-label">
            Rank:
            <select
              name="black_rank"
              value={sgfDetails.black_rank || ""}
              onChange={handleChange}
            >
              {rankOptions.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </select>
          </label>
        </div>
        {/* Group white player and white rank side by side */}
        <div className="sgf-related-fields">
          <label className="player-label">
            White Player:
            <input
              name="white_player"
              value={sgfDetails.white_player || ""}
              onChange={handleChange}
            />
            {formErrors.white_player && <div className="edit-sgf-errors">{formErrors.white_player[0]}</div>}
          </label>
          <label className="rank-label">
            Rank:
            <select
              name="white_rank"
              value={sgfDetails.white_rank || ""}
              onChange={handleChange}
            >
              {rankOptions.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </select>
          </label>
        </div>
        {/* Group komi and result side by side*/}
        <div className="sgf-related-fields-komi-result">
          <label>
            Komi:
            <input
              name="komi"
              type="number"
              step="0.5"
              value={sgfDetails.komi || ""}
              onChange={handleKomiChange}
            />
          </label>
          <label>
            Result:
            <input
              name="result"
              value={sgfDetails.result || ""}
              onChange={handleChange}
            />
            {formErrors.result && <div className="edit-sgf-errors">{formErrors.result[0]}</div>}
          </label>
        </div>
        <label className="game-date-label">
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
