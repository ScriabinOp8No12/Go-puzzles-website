import React from "react";

const CutsPage4 = () => {
  return (
    <div className="main-content">
      <h2>Fundamentals: Dealing with cuts 3</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>Here's another example of a common cut pattern near the edge of the board.</li>
          </ul>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1707106246/Tutorial-images/Puzzles_1_2024-02-04_jfymeu.png"
              alt="Cut 1"
            />
            <p>
              Which stones are weaker here? Scroll down to see variations and the answer.
            </p>
          </div>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1707106247/Tutorial-images/Puzzles_2_2024-02-04_zbormb.png"
              alt="Cut 2"
            />
            <p>
              Big mistake: black shouldn't atari this way, as black is forced to connect at 3, then white 4 kills the H5 cutting stone and black falls apart.

            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1707185668/Tutorial-images/Puzzles_1_2024-02-05_xpu3xc.png"
              alt="Cut 3"
            />
            <p>
              Black extends the weaker stone, but white runs away anyways and black's 2 stones are still split.  This is not optimal for black. Back should go into "sacrifice mode", and give up the weaker stone.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1707185668/Tutorial-images/Puzzles_2_2024-02-05_gaihwn.png"
              alt="Cut 4"
            />
            <p>
              Black ataris and sacrifices the single black stone, forming a large wall and moyo (large area) on the left side of the board!  Black is happy with the result.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutsPage4;
