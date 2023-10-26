import React from 'react';

const LeftNavBar = () => {
  return (
    <div className="left-nav-bar">
      <h1 className="interactive-tutorial-text">Interactive Tutorials</h1>
      <div className="nav-section">
        <h2>Basic Rules</h2>
        <ul className="small-spaced-list">
          <li>Placing stones & surrounding territory</li>
          <li>Counting liberties and capturing stones</li>
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
        <h2>Basic Rules Puzzles</h2>
        <ul className="small-spaced-list">
          <li>Basic Rules Puzzles 1</li>
          <li>Basic Rules Puzzles 2</li>
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
          <li>Terminology</li>
          <li>Sensei's Library</li>
          <li>Go servers</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavBar;