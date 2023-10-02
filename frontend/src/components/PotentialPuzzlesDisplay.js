import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { useParams} from 'react-router-dom';
import "./styles/PotentialPuzzlesDisplay.css";
import "../lib/glift";
import { fetchAllPotentialPuzzlesBySgfIdThunk } from "../store/potentialPuzzles";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const PotentialPuzzlesDisplay = () => {
  const { sgf_id } = useParams();
  const dispatch = useDispatch();

  // Fetch the data from the Redux store
  const potentialPuzzlesData = useSelector(state => state.potentialPuzzles.currentSgfPotentialPuzzle);

  useEffect(() => {
    dispatch(fetchAllPotentialPuzzlesBySgfIdThunk(sgf_id));
  }, [dispatch, sgf_id]);

  // Map the data from the store to the sgfCollection format
  // Ensure it's only called if the potentialPuzzlesdata is not null or not undefined
  useEffect(() => {
    const sgfCollection = potentialPuzzlesData ? potentialPuzzlesData.map(puzzle => ({
      sgfString: puzzle.sgf_data,
      // Go one move before the mistake "move_number", so the user can try the puzzle
      initialPosition: puzzle.move_number -1,
      problemConditions: {
        C: ["CORRECT"],
      },
      widgetType: "STANDARD_PROBLEM",
    })) : [];

      if (sgfCollection.length > 0) {
        glift.create({
          sgfCollection,
          divId: "gliftContainer",
        });
    }
  }, [potentialPuzzlesData])

  return <div id="gliftContainer"></div>;
};

export default PotentialPuzzlesDisplay;
