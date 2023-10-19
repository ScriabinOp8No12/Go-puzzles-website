import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { openModal } from "../store/modal";
import { fetchAllUserPuzzlesThunk } from "../store/userPuzzles";
import "./styles/UserPuzzles.css";

const UserPuzzles = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const userPuzzles = useSelector((state) => state.userPuzzles.userPuzzles);

  useEffect(() => {
    dispatch(fetchAllUserPuzzlesThunk())
  }, [dispatch])

  return (
    <div className="outer-wrapper">
      {userPuzzles && userPuzzles.length > 0 && (
      <h1 className="your-puzzles-header-title">Your Puzzles: Click on the thumbnails to review your saved puzzles!</h1>
      )}
    {/* classNames are all "public-puzzle" to keep the same formatting, but should make the classNames consistent so they make sense */}
    <div className="public-puzzle-table">
        {userPuzzles &&
          userPuzzles.map((userPuzzle, index) => (
            <div className="public-puzzle-thumbnail" key={index}>
              <img
                src={userPuzzle.Puzzle.thumbnail}
                alt={`Puzzle ${userPuzzle.Puzzle.id}`}
                // Changed get /puzzles endpoint to id: puzzle.id instead of puzzle_id as the column name
                onClick={() => history.push(`/user_puzzles/${userPuzzle.Puzzle.id}`)}
                style={{ cursor: "pointer" }}
              />
              {/* <div className="puzzle-details">
                  <div className = "puzzle-category">Category: {puzzle.category}</div>
                  <div className = "puzzle-rank">Rank: {puzzle.difficulty}</div>
                  <button className="public-puzzles-pencil-icon" onClick={() => openEditModal(puzzle.id)}>✏️</button>
                  <SuspendPublicPuzzleModal puzzleId={puzzle.id} />
              </div> */}
            </div>
          ))}
      </div>
    </div>

  )
}

export default UserPuzzles;
