import React, { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles/PotentialPuzzlesDisplay.css";
import "../lib/glift";
import { fetchAllPotentialPuzzlesBySgfIdThunk } from "../store/potentialPuzzles";
import { savePotentialPuzzleThunk } from "../store/potentialPuzzles";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const PotentialPuzzlesDisplay = () => {
  const { sgf_id: currentSgfId } = useParams();
  const dispatch = useDispatch();
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [saveError, setSaveError] = useState(null);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const potentialPuzzlesData = useSelector(
    (state) => state.potentialPuzzles.currentSgfPotentialPuzzle
  );
  // No need to rerender our react component when the glift internal state changes
  // like when we add stones to the board, or when we use the left and right arrows (chevron-left and chevron-right)
  const gliftInstance = useRef(null);
  // console.log(gliftInstance)

  useEffect(() => {
    dispatch(fetchAllPotentialPuzzlesBySgfIdThunk(currentSgfId));
  }, [dispatch, currentSgfId]);

  const updateCurrentPuzzle = () => {
    // Access the "current" property of the glift instance, the sgfColIndex property of the gliftInstance keeps track of which sgf array index we are on,
    // this changes when we use the right and left arrows (chevron-right and chevron-left) to keep track of which puzzle we are on!
    const currentSgfIndex = gliftInstance.current.sgfColIndex;
    // console.log("currentSgfIndex", currentSgfIndex)
    const currentSgf = gliftInstance.current.sgfCollection[currentSgfIndex].sgfString;
    const puzzle = potentialPuzzlesData.find(p => p.sgf_data === currentSgf);
    setCurrentPuzzle(puzzle);
  };

  useEffect(() => {
    if (potentialPuzzlesData) {
      const sgfCollection = potentialPuzzlesData.map(puzzle => ({
        sgfString: puzzle.sgf_data,
        initialPosition: puzzle.move_number - 1,
        problemConditions: { C: ["CORRECT"] },
        widgetType: "STANDARD_PROBLEM"
      }));

      // Backup the default actions
      const defaultNextSgf = glift.api.iconActionDefaults['chevron-right'].click;
      const defaultPrevSgf = glift.api.iconActionDefaults['chevron-left'].click;

      // Overwrite the default actions
      glift.api.iconActionDefaults['chevron-right'].click = function(event, widget, icon, iconBar) {
        defaultNextSgf(event, widget, icon, iconBar);
        updateCurrentPuzzle();
      };

      glift.api.iconActionDefaults['chevron-left'].click = function(event, widget, icon, iconBar) {
        defaultPrevSgf(event, widget, icon, iconBar);
        updateCurrentPuzzle();
      };

      const instance = glift.create({
        sgfCollection,
        divId: "gliftContainer",
        display: {
          drawBoardCoords: true,
          disableZoomForMobile: true
        }
      });

      gliftInstance.current = instance;

      // Initially set the current puzzle
      updateCurrentPuzzle();

      // Clean up the glift instance
      return () => {
        instance.destroy();
        // Restore Glift's default behavior upon unmounting
        glift.api.iconActionDefaults['chevron-right'].click = defaultNextSgf;
        glift.api.iconActionDefaults['chevron-left'].click = defaultPrevSgf;
      };
    }
  }, [potentialPuzzlesData]);

  const handleSaveClick = async () => {
    setIsLoading(true);
    if (currentPuzzle) {
      try {
        await dispatch(savePotentialPuzzleThunk(currentSgfId, currentPuzzle.move_number));
        setSaveSuccessMessage("Puzzle saved successfully!");
        setTimeout(() => {
          setSaveSuccessMessage(null);
        }, 3000);
      } catch (error) {
        setSaveError("Puzzle already saved or failed!");
        // Clear the error after 3 seconds
        setTimeout(() => {
          setSaveError(null);
        }, 3000);
      }
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div id="gliftContainer"></div>

      {isLoading &&
        <div style={{ display: 'inline-block', alignItems: 'center' }}>
          <div className="loading-spinner"></div>
          <span className="saving-text">Saving...</span>
        </div>
      }

      {saveError && <div className="save-error">{saveError}</div>}
      {saveSuccessMessage && <div className="save-success">{saveSuccessMessage}</div>}

      <button className="saveCurrentPuzzle" onClick={handleSaveClick}>Save Puzzle</button>
    </div>
  );


};

export default PotentialPuzzlesDisplay;
