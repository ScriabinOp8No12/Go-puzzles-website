import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSgfByIdThunk } from "../store/sgfs";

const EditSgfModal = ({ sgfId }) => {
  const dispatch = useDispatch();
  const [sgfDetails, setSgfDetails] = useState({});
  const currentSgf = useSelector((state) => state.sgfs.currentSgf);
  // const currentSgf = useSelector((state) => state.someObject?.currentSgf);

  useEffect(() => {
    if (currentSgf) {
      console.log("Current SGF from Redux:", currentSgf);
      setSgfDetails(currentSgf);
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
      {/* Your input fields here */}
      <input name="someField" value={sgfDetails.someField || ""} onChange={handleChange} />
      {/* Add other input fields as needed */}
      <button type="submit">Update</button>
    </form>
  );
};

export default EditSgfModal;
