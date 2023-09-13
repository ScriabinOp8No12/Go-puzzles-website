import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { fetchSgfByIdThunk } from '../store/sgfs';
import "./styles/SgfDisplay.css"

const SgfDisplay = () => {
  const { sgf_id } = useParams();
  const dispatch = useDispatch();
  const sgfData = useSelector(state => state.sgfs.currentSgf);
  // useRef here is to persist the reference to the div across re-renders so that the Go board can be correctly initialized and manipulated
  const boardRef = useRef(null);

  useEffect(() => {
    dispatch(fetchSgfByIdThunk(sgf_id));
  }, [dispatch, sgf_id]);

  useEffect(() => {
    if (sgfData && boardRef.current) {
      new window.WGo.BasicPlayer(boardRef.current, {
        sgf: sgfData.sgf_data,
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
