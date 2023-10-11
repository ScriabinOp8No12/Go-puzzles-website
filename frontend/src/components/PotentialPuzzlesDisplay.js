import React, { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./styles/PotentialPuzzlesDisplay.css";
import "../lib/glift";
import { fetchAllPotentialPuzzlesBySgfIdThunk } from "../store/potentialPuzzles";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const PotentialPuzzlesDisplay = () => {
  const { sgf_id: currentSgfId } = useParams();
  const dispatch = useDispatch();
  const [currentPuzzle, setCurrentPuzzle] = useState(null);

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

  const handleSaveClick = () => {
    if (currentPuzzle) {
      console.log('Saving puzzle with move_number:', currentPuzzle.move_number, 'and sgf_id:', currentSgfId);
    }
  };

  return (
    <div>
      <div id="gliftContainer"></div>
      <button class="saveCurrentPuzzle" onClick={handleSaveClick}>Save Current Puzzle</button>
    </div>
  );
};

export default PotentialPuzzlesDisplay;
