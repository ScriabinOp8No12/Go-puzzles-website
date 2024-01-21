import React from "react";

const LadderPage1 = () => {
  return (
    <div className="main-content">
      <h2>Ladders: Example 1 with solution</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>Can black save the single black stone?</li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691455/Tutorial-images/Puzzles_1_2024-01-19_cfspyc.png"
              alt="Ladder puzzle 1"
            />
            <p>
              <span className="important-text">Scroll down</span> to see the
              answer and variations
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691456/Tutorial-images/Puzzles_2_2024-01-19_jkqzri.png"
              alt="Ladder puzzle 2"
            />
            <p>
              <span className="important-text">Answer:</span> Black can NOT save
              the black stone, as it gets "laddered" to the edge of the board! Note: white could have placed move 16 at 17 instead and black would still get captured.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadderPage1;
