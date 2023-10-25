import React from "react";
import "./styles/LearnAndPracticeIndex.css";

const LearnAndPracticeBasicRules = () => {
  return (
    <div className="learn-and-practice-container">
      {/* Left Sidebar */}
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

      {/* Main Content */}
      <div className="main-content">
        <h2>Basic Rules: Placing Stones & Surrounding Territory</h2>
        <div className="content-section">
          {/* Text section on the left half, images / diagrams on the right half */}
          <div className="content-text-section">
            <p>
              Welcome to the interactive tutorials for the game of Go! Go is the
              best game in the world (I’m definitely not biased). 😊
            </p>

            <p>
              As you start learning the rules and progressing through the ranks,
              you’ll start to admire the beauty and depth of the game. You’ll
              also realize how much smarter you are than your friends who play
              chess or checkers. 😉{" "}
            </p>
            <p className="how-to-play-go-text">How to play Go:</p>
            <ul className="spaced-list">
              <li>
                Go is almost always a 2 player game, where each player takes
                turns placing stones on the board.
              </li>
              <li>
                The player with the black stones typically plays first, and the
                player with the white stones plays next.
              </li>
              <li>
                Stones are placed on the intersections (where 2 lines meet) and
                not in the squares.
              </li>
              <li>
                The goal of the game is to surround territory, which is the
                number of intersections that you have surrounded.
              </li>
              <li>
                The player with the most territory at the end of the game wins!
              </li>
            </ul>
          </div>

          {/* Images on the right half */}
          <div className="content-image-section">
            <img src="/learn-and-practice-images/basic-rules-1.png" alt="basic-rules-1" />
            <p>Text for basic rule 1</p>
            {/* <img src="/learn-and-practice-images/basic-rules-1.png" alt="basic-rules-1" />
            <p>Text for basic rule 2</p>
            <img src="/learn-and-practice-images/basic-rules-1.png" alt="basic-rules-1" />
            <p>Text for basic rule 3</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAndPracticeBasicRules;
