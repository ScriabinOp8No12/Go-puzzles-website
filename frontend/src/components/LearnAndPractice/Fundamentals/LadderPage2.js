import React from "react";

const LadderPage2 = () => {
  return (
    <div className="main-content">
      <h2>Ladders: Example 2 with solution</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              Can black save the single black stone when there's an extra black
              stone at G7?
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691459/Tutorial-images/Puzzles_10_2024-01-19_pqvoil.png"
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
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691457/Tutorial-images/Puzzles_3_2024-01-19_rywryb.png"
              alt="Ladder puzzle 2"
            />
            <p>
              <span className="important-text">Answer:</span> Black can save the
              black stone, as the ladder gets broken now since black connects to
              the stone.
              <br />
              <br />
              <span className="important-text">Takeaway:</span> If the stones
              getting laddered end up at any point with more than 2 liberties,
              the ladder no longer works and the stones escape (99% of the
              time). This is because if the stones get to more than 2 liberties,
              they can no longer be put into atari, which results in the
              opponent having lots of cuts and double ataris (A, B, C, and D are all examples of double ataris)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadderPage2;
