import React from "react";

const LadderPage5 = () => {
  return (
    <div className="main-content">
      <h2>Ladder Breaker: Example 1</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              The net is almost always better than laddering the opponent
              because the opponent could play a ladder breaker.
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705968179/Tutorial-images/Puzzles_1_2024-01-22_d5kwxk.png"
              alt="Ladder puzzle 1"
            />
            <p>
              Black's move is a{" "}
              <span className="important-text">ladder breaker</span>. Scroll
              down to see why this matters.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705968180/Tutorial-images/Puzzles_3_2024-01-22_sd841f.png"
              alt="Ladder puzzle 2"
            />
            <p>
              Black can now escape with the single stone since the ladder is
              broken. Meaning if white responds to black's move at 1, then black
              can escape.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705968179/Tutorial-images/Puzzles_2_2024-01-22_jhc0ig.png"
              alt="Ladder puzzle 3"
            />
            <p>
              If white captures the black stone to avoid letting the stone
              escape, black can follow up with an additional move on the bottom
              side of the board, putting pressure on white's single corner
              stone.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705968180/Tutorial-images/Puzzles_4_2024-01-22_rxgzyp.png"
              alt="Ladder puzzle 4"
            />
            <p>
              If white has an extra stone here, white can then net with move 4,
              meaning that even though black's move at 1 is a ladder breaker,
              white can still net the black stone, so white can definitely
              afford to play at 2 or somewhere else without worrying about black
              saving the stone.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705968534/Tutorial-images/Puzzles_6_2024-01-22_rufvrs.png"
              alt="Ladder puzzle 5"
            />
            <p>
              In this case, even though white can ladder black, white should
              choose to net the black stones instead of laddering them to avoid
              giving black a ladder breaker (free move) at the bottom of the
              board.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadderPage5;
