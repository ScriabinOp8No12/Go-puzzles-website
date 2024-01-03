import React from "react";

const MoreRulesPage5 = () => {
  return (
    <div className="main-content">
      <h2>More Rules and Strategy: Game Ending Condition</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">

          <ul className="spaced-list">
              <li>
              The game ends when both players agree, which is typically done by both players saying the word <span className="important-text">pass</span>.
              </li>
              <li>
              Even if your opponent already captured your stones, this does not affect whether or not you are allowed to play in that spot.
              </li>

            </ul>


          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704252864/Tutorial-images/Puzzles_11_2024-01-02_qp9wqa.png"
              alt="Game ending condition 1"
            />
            <p>
              Diagram 1: Black just played G5 and captured the white stone at F5.  Notice how white could just play F5 and capture the G5 black stone.
              This would never end.  The ko rule is that white must play somewhere else on the board first, before they are allowed to take the ko back.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704173273/Tutorial-images/Puzzles_9_2024-01-01_bttass.png"
              alt="Ko 2"
            />
            <p>
              Diagram 2: White could play at 1, if black responds at 2, white can then take the ko back with 3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreRulesPage5;
