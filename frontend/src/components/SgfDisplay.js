import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { fetchSgfByIdThunk } from '../store/sgfs'; // Replace with your actual import
import "./styles/SgfDisplay.css"

const SgfDisplay = () => {
  const { sgf_id } = useParams();
  const dispatch = useDispatch();
  const sgfData = useSelector(state => state.sgfs.currentSgf); // Replace with your actual selector
  const boardRef = useRef(null);
  // const history = useHistory();

  useEffect(() => {
    dispatch(fetchSgfByIdThunk(sgf_id));
  }, [dispatch, sgf_id]);

  useEffect(() => {
    if (sgfData && boardRef.current) {
      new window.WGo.BasicPlayer(boardRef.current, {
        sgf: sgfData.sgf_data, // Replace with actual SGF data field
      });
    }
  }, [sgfData]);

  // const handleBackClick = () => {
  //   history.goBack(); // Navigate back to the previous page
  // };

  return (
    // This line below in renderSGF.html properly sizes it and shrinks properly when we drop the width and height
    // <div id="player" style="width: 60%; height: 60%;"></div>
  <div className="sgf-display-container">
    <div ref={boardRef} style={{ width: "50%", height: "70%"}}></div>
    {/* <button className="back-button-single-sgf-page" onClick={handleBackClick}>Back</button> */}
  </div>
  );
};

export default SgfDisplay;
