import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadSgfThunk } from '../store/sgfs';
import "./styles/UserSGFs.css"

const UserSGFs = () => {
  const dispatch = useDispatch();
  const userSGF = useSelector(state => state.sgfs.userSGF);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const sgf_data = {
        "sgf_data": [event.target.result]
      };
      dispatch(uploadSgfThunk(sgf_data));
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".sgf" onChange={handleFileChange} />
      {userSGF && (
        <div className="uploaded-sgf-thumbnail">
          <img src={userSGF.thumbnail} alt="SGF Thumbnail" />
        </div>
      )}
    </div>
  );
};

export default UserSGFs;
