import moment from 'moment-timezone';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSgfByIdThunk } from "../store/sgfs";

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

  useEffect(() => {
    if (currentSgf) {
      console.log("Current SGF from Redux:", currentSgf);
      // Format the date into YYYY-MM-DD but also use moment.js to format it as local time so we don't get an off by one day
      const localDate = moment.utc(currentSgf.game_date).local().format('YYYY-MM-DD');
    setSgfDetails({ ...currentSgf, game_date: localDate });
    }
  }, [currentSgf]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editSgfByIdThunk(sgfId, sgfDetails));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSgfDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="modal">
      <label>
        SGF Name:
        <input
          name="sgf_name"
          value={sgfDetails.sgf_name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Black Player:
        <input
          name="black_player"
          value={sgfDetails.black_player || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        White Player:
        <input
          name="white_player"
          value={sgfDetails.white_player || ""}
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
      <label>
        White Rank:
        <input
          name="white_rank"
          value={sgfDetails.white_rank || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Game Date:
        <input
          type="date"
          name="game_date"
          value={sgfDetails.game_date || ""}
          onChange={handleChange}
        />
      </label>
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
      <button type="submit">Update</button>
    </form>
  );
};

export default EditSgfModal;
