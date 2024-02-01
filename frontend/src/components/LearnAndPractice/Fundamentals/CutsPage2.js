import React from "react";

const CutsPage2 = () => {
  return (
    <div className="main-content">
      <h2>Fundamentals: Dealing with cuts</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              One of the famous proverbs is: "Play towards weakness, and away
              from strength". This is especially true when your groups are cut.
            </li>
            <li>
              Given that you want to save the group, you should consider
              protecting the weaker group, not the stronger one.
            </li>
            <li>
              In most cross cut situations when we get cut, we want to extend rather than atari,
              but this can vary greatly.
            </li>
          </ul>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1706751201/Tutorial-images/Puzzles_1_2024-01-31_rkanbh.png"
              alt="Cut 1"
            />
            <p>
              Oh no, white has just cut us, which group is weaker (A or B)?  Scroll down to see the answer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutsPage2;
