import React from "react";

const ReadingPage5 = () => {
  return (
    <div className="main-content">
      <h2>Reading: Example 3 with solution</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>Can black capture the 2 marked white stones?</li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705612925/Tutorial-images/Puzzles_1_2024-01-18_fh6i4k.png"
              alt="Reading puzzle 1"
            />
            <p>
              <span className="important-text">Scroll down</span> to see the answer and variations
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705612925/Tutorial-images/Puzzles_2_2024-01-18_n3rxqb.png"
              alt="Reading puzzle 2"
            />
            <p>
              <span className="important-text">Answer:</span> Black can continue to atari white (keep white at 1 liberty) in this pattern. This is called a ladder. White gets captured when black plays at the triangle.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705612925/Tutorial-images/Puzzles_3_2024-01-18_om1yep.png"
              alt="Reading puzzle 3"
            />
            <p>
              <span className="important-text">Failure:</span> If black ataris
              from this way instead, white connects to the top stones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage5;
