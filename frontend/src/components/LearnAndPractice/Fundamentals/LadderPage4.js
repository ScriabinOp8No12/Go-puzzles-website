import React from "react";

const LadderPage4 = () => {
  return (
    <div className="main-content">
      <h2>Nets: Example 1 with solution</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              Black won't be able to save the single black stone, despite having a wall in the top right.
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705867602/Tutorial-images/Puzzles_1_2024-01-21_egrzrr.png"
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
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691458/Tutorial-images/Puzzles_8_2024-01-19_vtyqg7.png"
              alt="Ladder puzzle 2"
            />
            <p>
              <span className="important-text">Failure:</span> Black can not be laddered this way.

            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691457/Tutorial-images/Puzzles_7_2024-01-19_jmsvq5.png"
              alt="Ladder puzzle 3"
            />
            <p>
              <span className="important-text">Failure:</span> Black still escapes.

            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1705691458/Tutorial-images/Puzzles_9_2024-01-19_pvnvnk.png"
              alt="Ladder puzzle 4"
            />
            <p>
              <span className="important-text">Answer: </span> Black gets net and dies, move 2 is the "net" by white. Playing at the triangle captures the 4 black stones. Even if black started at 5 instead of 3, white could play at the triangle and the same result would occur.


            <br />
              <br />
              <span className="important-text">Takeaway:</span> Even if you don't have the ladder to kill the opponent, sometimes the net will work, so it's important to read (predict/visualize the future) out the sequence.
              Also, nets are almost always better than laddering the opponent, because the opponent doesn't have a free ladder breaker (see next page).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadderPage4;
