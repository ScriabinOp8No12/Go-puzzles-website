import React from "react";

const ReadingPage4 = () => {
  return (
    <div className="main-content">
      <h2>Reading: Example 2 with solution</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>Black can save the 3 marked stones, how do they do it?</li>
            <li>Knowing the puzzle is solvable is a big hint. In real games, no one will tell you if it's solvable.</li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705523832/Tutorial-images/Puzzle_1_2024-01-17_rivfwq.png"
              alt="Reading puzzle 1"
            />
            <p>
              <span className="important-text">Scroll down</span> to see the answer and variations
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705612555/Tutorial-images/Puzzle_3_2024-01-17_ufozw6.png"
              alt="Reading puzzle 2"
            />
            <p>
              <span className="important-text">Answer:</span> Black has 2
              liberties, while white only has 1 liberty, which means white will
              get captured. Black therefore connects up to the left side E2
              group and saves the 3 black stones!
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705524362/Tutorial-images/Puzzle_5_2024-01-17_pnahpy.png"
              alt="Reading puzzle 3"
            />
            <p>
              <span className="important-text">Failure:</span> If black ataris
              from 3 instead, black is now dead even though it's black's turn
              and black and white both have 2 liberties. The issue is if black
              plays A, white can capture at B. If black starts at C, white can
              capture at D. That means black needs to first play B, but then
              white can play D and black will get captured first.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705523833/Tutorial-images/Puzzle_2_2024-01-17_sptqlf.png"
              alt="Reading puzzle 4"
            />
            <p>
              <span className="important-text">Failure:</span> Black cuts this
              way instead, but is unable to capture white before dying. Black
              has 1 liberty while white has 2 liberties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage4;
