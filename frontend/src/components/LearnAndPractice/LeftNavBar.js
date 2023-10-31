import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const LeftNavBar = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateToBasicRules1 = () => {
    history.push("/learn-and-practice/basic-rules/1");
  };

  const navigateToBasicRules6 = () => {
    history.push("/learn-and-practice/basic-rules/6");
  };

  const navigateToBasicRules7 = () => {
    history.push("/learn-and-practice/basic-rules/7");
  };

  // Determines if the current URL contains any of the specified path segments.
  // Accepts either a single string or an array of strings.
  // Returns true if a match is found, otherwise returns false.

  const isActive = (paths) => {
    if (Array.isArray(paths)) {
      return paths.some((path) => location.pathname.includes(path));
    } else if (typeof paths === "string") {
      return location.pathname.includes(paths);
    }
    return false;
  };

  return (
    <div className="left-nav-bar">
      <h1 className="interactive-tutorial-text">Interactive Tutorials</h1>
      <div className="nav-section">
        <h2>Basic Rules</h2>
        <ul className="small-spaced-list">
          <li
            onClick={navigateToBasicRules1}
            className={isActive(["/1", "/2", "/3", "/4", "/5"]) ? "active" : ""}
          >
            Placing stones & surrounding territory
          </li>
          <li
            onClick={navigateToBasicRules6}
            className={isActive("/6") ? "active" : ""}
          >
            Counting liberties and capturing stones
          </li>
          <li
            onClick={navigateToBasicRules7}
            className={isActive("/7") ? "active" : ""}
          >
            Capturing Puzzles
          </li>
          <li>Basic Rules Quiz</li>
          <li>Terminology</li>
        </ul>
      </div>
      <div className="nav-section">
        <h2>More Rules and Strategy</h2>
        <ul className="small-spaced-list">
          <li>Illegal moves</li>
          <li>Eyes</li>
          <li>Seki</li>
          <li>Ko</li>
          <li>Game ending condition</li>
          <li>Strategy</li>
        </ul>
      </div>
      <div className="nav-section">
        <h2>Rules & Strategy Puzzles</h2>
        <ul className="small-spaced-list">
          <li>Rules & Strategy Puzzles 1</li>
          <li>Rules & Strategy Puzzles 2</li>
        </ul>
      </div>
      <div className="nav-section">
        <h2>Fundamentals</h2>
        <ul className="small-spaced-list">
          <li>Reading</li>
          <li>Ladders & Nets</li>
          <li>Cuts</li>
          <li>Counting</li>
          <li>Direction of Play</li>
          <li>Judgment</li>
          <li>Life & Death</li>
          <li>Sente & Gote</li>
        </ul>
      </div>
      <div className="nav-section">
        <h2>Fundamentals Puzzles</h2>
        <ul className="small-spaced-list">
          <li>Fundamentals Puzzles 1</li>
          <li>Fundamentals Puzzles 2</li>
        </ul>
      </div>
      <div className="nav-section">
        <h2>Resources</h2>
        <ul className="small-spaced-list">
          <li>Sensei's Library</li>
          <li>Go servers</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavBar;
