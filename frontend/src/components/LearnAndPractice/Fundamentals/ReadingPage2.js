import React from "react";

const ReadingPage2 = () => {
  return (
    <div className="main-content">
      <h2>Reading: Example 1</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              In the diagram below, can black capture the 3 white stones? By
              considering various different starting moves and follow up moves,
              you are looking into the future!
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704778107/Tutorial-images/Puzzles_1_2024-01-08_ogpxfe.png"
              alt="Reading puzzle 1"
            />
            <p>
              <span className="important-text">H6 J6 J4 J5 J7 </span> captures
              the 3 white stones! If you could visualize that without putting
              stones on the board, you are very good at reading / visualizing!
              If you couldn't visualize it, don't worry, we will walk through
              that sequence on the next page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage2;
