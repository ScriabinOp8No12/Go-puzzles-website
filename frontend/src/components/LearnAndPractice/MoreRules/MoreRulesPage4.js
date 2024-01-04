import React from "react";

const MoreRulesPage4 = () => {
  return (
    <div className="main-content">
      <h2>More Rules: Ko</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              A <span className="important-text">ko</span> is a situation where
              both players can capture the opponent's single stone, but the
              opponent could capture a single stone right back, causing an
              infinite loop.
            </li>
            <li>
              To deal with this potential never ending situation, the rule is
              that when one player takes the ko, the opponent is not allowed to
              take the ko back, until they've played somewhere else on the board
              first.
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704173141/Tutorial-images/Puzzles_8_2024-01-01_fxmckr.png"
              alt="Ko 1"
            />
            <p>
              Diagram 1: Black just played G5 and captured the white stone at
              F5. Notice how white could just play F5 and capture the G5 black
              stone. This would never end. The ko rule is that white must play
              somewhere else on the board first, before they are allowed to take
              the ko back.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704173273/Tutorial-images/Puzzles_9_2024-01-01_bttass.png"
              alt="Ko 2"
            />
            <p>
              Diagram 2: White could play at 1, if black responds at 2, white
              can then take the ko back with 3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreRulesPage4;
