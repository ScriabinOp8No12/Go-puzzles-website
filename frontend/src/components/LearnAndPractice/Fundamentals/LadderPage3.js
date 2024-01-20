import React from "react";

const LadderPage3 = () => {
  return (
    <div className="main-content">
      <h2>Ladders: Example 3 with solution</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              Can black save the single black stone when there's an extra black
              stone at H6?
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691458/Tutorial-images/Puzzles_4_2024-01-19_k81hlt.png"
              alt="Reading puzzle 1"
            />
            <p>
              <span className="important-text">Scroll down</span> to see the
              answer and variations
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691457/Tutorial-images/Puzzles_5_2024-01-19_ei6cix.png"
              alt="Reading puzzle 2"
            />
            <p>
              <span className="important-text">Answer:</span> Black can save the
              black stone, as the ladder gets broken. If white goes B, black goes A and connects up to the H6 stone.
              Also, if white went A instead, black extending to B results in black having 3 liberties, which means the ladder is broken!

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadderPage3;
