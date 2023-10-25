import React from "react";
import "./styles/LearnAndPracticeIndex.css";

const LearnAndPracticeBasicRules = () => {
  return (
    <div className="learn-and-practice-container">
      {/* Left Sidebar */}
      <div className="left-nav-bar">
        <h1 className="interactive-tutorial-text">Interactive Tutorials</h1>
        <div className="nav-section">
          <h2>Basic Rules:</h2>
          <ul>
            <li>
              Placing stones & surrounding territory
            </li>
            <li>
              Counting liberties and capturing stones
              </li>
          </ul>

        </div>
        <div className="nav-section">
          <h2>More Rules and Strategy:</h2>
          <p>
            Illegal moves, eyes, ko, seki, determining when the game ends, and
            basic strategy
          </p>
        </div>
        <div className="nav-section">
          <h2>Puzzles on Rules:</h2>
          <p>Puzzle set 1</p>
          <p>Puzzle set 2</p>
        </div>
        <div className="nav-section">
          <h2>Fundamentals</h2>
          <p>Reading</p>
          <p>Ladders & Nets</p>
          <p>Cuts</p>
          <p>Direction of Play</p>
          <p>Judgment</p>
          <p>Life & Death</p>
          <p>Sente & Gote</p>
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
        <h2>Basic Rules: Placing Stones & Surrounding Territory</h2>
        <div className="content-section">
          {/* Text section on the left half, images / diagrams on the right half */}
          <div className="content-text-section">
            <p>
              Welcome to the basic rules interactive tutorial for the game of
              Go! Go is the best game in the world (I’m definitely not biased).
              😊{" "}
            </p>

            <p>
              {" "}
              As you start learning the rules and progressing through the ranks,
              you’ll start to admire the beauty and depth of the game. You’ll
              also realize how much smarter you are than your friends who play
              chess or checkers. 😉{" "}
            </p>

            <ul>
              How to play Go:
              <li>
                {" "}
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
            <img src="your-image-url-here" alt="example" />
            <p>Text for images</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAndPracticeBasicRules;
