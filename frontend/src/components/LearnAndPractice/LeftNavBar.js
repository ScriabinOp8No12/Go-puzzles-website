import React from 'react';
import { useHistory } from 'react-router-dom';

const LeftNavBar = () => {

  const history = useHistory()

  const navigateToBasicRules1 = () => {
    history.push('/learn-and-practice/basic-rules/1')
  }

  const navigateToBasicRules6 = () => {
    history.push('/learn-and-practice/basic-rules/6')
  }

  return (
    <div className="left-nav-bar">
      <h1 className="interactive-tutorial-text">Interactive Tutorials</h1>
      <div className="nav-section">
        <h2>Basic Rules</h2>
        <ul className="small-spaced-list">
          <li onClick={navigateToBasicRules1}>Placing stones & surrounding territory</li>
          <li onClick={navigateToBasicRules6}>Counting liberties and capturing stones</li>
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
