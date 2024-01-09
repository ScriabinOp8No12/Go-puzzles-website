import React from "react";

const ReadingPage3 = () => {
  return (
    <div className="main-content">
      <h2>Reading: Solution to example 1</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              Here's the full sequence right before the capture, if you want
              extra practice, you can go back to the previous page and see if
              you can visualize this sequence.
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704836785/Tutorial-images/Puzzles_2_2024-01-09_asxmm1.png"
              alt="Reading puzzle 1"
            />
            <p>Diagram 1: White gets captured at 5 on black's next move. </p>
            <p>Black pushes at 1 to cut or separate the 3 white stones from the H7 stone. White tries to connect back to the H7 stone with the move at 2. </p>
            <p>Black puts white in atari by playing at 3, forcing white to connect at 4 to save the 3 white stones. But then black captures at 5! </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage3;
