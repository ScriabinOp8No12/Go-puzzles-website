import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSgfsThunk, uploadSgfThunk } from '../store/sgfs';
import "./styles/UserSGFs.css"

const UserSGFs = () => {
  const dispatch = useDispatch();
  const userSGFs = useSelector(state => state.sgfs.userSGFs);

  useEffect(() => {
    dispatch(fetchAllSgfsThunk());
  }, [dispatch]);


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

  const sortedSGFs = userSGFs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <div className="upload-button">
        <input type="file" accept=".sgf" onChange={handleFileChange} />
      </div>
      <div className="user-sgf-table">
        {sortedSGFs && sortedSGFs.map((sgf, index) => (
          <div className="uploaded-sgf-thumbnail" key={index}>
            <img src={sgf.thumbnail} alt="SGF Thumbnail"  />
          </div>
        ))}
      </div>
    </div>
  );

};

export default UserSGFs;
