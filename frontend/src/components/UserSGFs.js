import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSgfsThunk, uploadSgfThunk } from '../store/sgfs';
import { useHistory } from 'react-router-dom';
import "./styles/UserSGFs.css"

const UserSGFs = () => {
  const dispatch = useDispatch();
  const userSGFs = useSelector(state => state.sgfs.userSGFs);
  const history = useHistory()

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
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="outer-wrapper">
      <div className="upload-sgf-button">
        <label>
          Upload SGF
          <input type="file" accept=".sgf" onChange={handleFileChange} />
        </label>
      </div>
      <div className="user-sgf-table">
        {sortedSGFs && sortedSGFs.map((sgf, index) => (
          <div className="uploaded-sgf-thumbnail" key={index}>
            <img src={sgf.thumbnail} alt="SGF Thumbnail" onClick={() => history.push(`/sgfs/${sgf.id}`)} style={{ cursor: 'pointer' }}/>
            <div className="sgf-details">
              {sgf.createdAt && sgf.createdAt !== '?' && <div>Uploaded: {formatDate(sgf.createdAt)}</div>}
              {sgf.sgf_name && sgf.sgf_name !== '?' && <div>{sgf.sgf_name}</div>}
              {sgf.game_date && sgf.game_date !== '?' && <div>Game Date: {formatDate(sgf.game_date)}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSGFs;
