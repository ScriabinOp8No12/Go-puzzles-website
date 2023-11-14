import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
          [...userPuzzles].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((userPuzzle, index) => (
            <div className="public-puzzle-thumbnail" key={index}>
              <img className="button-hover"
                src={userPuzzle.Puzzle.thumbnail}
                alt={`Puzzle ${userPuzzle.Puzzle.id}`}
                // Changed get /puzzles endpoint to id: puzzle.id instead of puzzle_id as the column name
                onClick={() => history.push(`/your-puzzles/${userPuzzle.Puzzle.id}`)}
                style={{ cursor: "pointer" }}
              />
              {/* Fix className? */}
              <div className="puzzle-details">Created: {new Date(userPuzzle.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default UserPuzzles;
