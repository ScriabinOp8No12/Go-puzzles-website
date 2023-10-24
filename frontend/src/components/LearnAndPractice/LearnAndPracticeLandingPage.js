// LearnAndPracticeLandingPage.js

import React from 'react';
import './styles/LearnAndPracticeLandingPage.css';

const LearnAndPracticeLandingPage = () => {
  return (
    <div className="learn-and-practice-landing-page-container">
      {/* Left Sidebar */}
      <div className="left-nav-bar">
        <h1>Interactive Tutorials</h1>
        <div className="nav-section">
          <h2>Basic Rules:</h2>
          <p>Placing and capturing stones, counting liberties, and surrounding territory</p>
        </div>
        <div className="nav-section">
          <h2>More Rules and Strategy:</h2>
          <p>Illegal moves, eyes, ko, seki, determining when the game ends, and basic strategy</p>
        </div>
        <div className="nav-section">
          <h2>Puzzles on Rules:</h2>
          <p>Puzzle set 1</p>
          <p>Puzzle set 2</p>
        </div>
        <div className="nav-section">
          <h2>Fundamentals</h2>
          <p>Reading</p>
        </div>
        <div className="nav-section">
          <h2>Puzzles on Fundamentals</h2>
          <p>Puzzle set 1</p>
        </div>
        <div className="nav-section">
          <h2>External Resources</h2>
          <p>Sensei's library</p>
          <p>Go servers</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Basic Rules: Placing Stones and Goal of the Game</h2>
        <div className="content-section">
          {/* Text on the left half */}
          <div className="text-section">
            <p>Text here</p>
          </div>

          {/* Images on the right half */}
          <div className="image-section">
            <img src="your-image-url-here" alt="example" />
            <p>Text for images</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAndPracticeLandingPage;
