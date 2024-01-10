import React from "react";

const MoreRulesPage1 = () => {
  return (
    <div className="main-content">
      <h2>More Rules: Illegal Moves</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              A move is illegal if the move you are placing has{" "}
              <span className="important-text">0 liberties</span>, and is{" "}
              <span className="important-text">not</span> capturing anything.
            </li>
            <li>
              Even if your opponent already captured your stones, this does not
              affect whether or not you are allowed to play in that spot.
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1699466950/Tutorial-images/more-rules-1_qpbyyd.png"
              alt="Illegal moves 1"
            />
            <p>
              Black is <span className="important-text">not</span> allowed to
              play at either of the marked spots because black would have 0
              liberties and isn't capturing anything. The marked square is
              likely an eye, which we will discuss in the next section.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1699466263/Tutorial-images/more-rules-2_wvsgky.png"
              alt="Illegal moves 2"
            />
            <p>
              Black is <span className="important-text">allowed </span>to play
              at the marked spot because although black has 0 liberties, they
              would be capturing white's group (white also has 0 liberties).
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1699466263/Tutorial-images/more-rules-3_jgmmx9.png"
              alt="Illegal moves 3"
            />
            <p>
              Even if white just played at A and captured 3 black stones, black
              can still play at any of the marked triangles because the black
              stone would have more than 0 liberties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreRulesPage1;
