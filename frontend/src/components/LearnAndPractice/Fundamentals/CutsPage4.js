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
              However, there really isn't a good way to handle this, so black should just go into "sacrifice mode", and give up the weaker stone.
            </p>
          </div>
          {/* <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1706918841/Tutorial-images/Puzzles_2_2024-02-02_kcnpqq.png"
              alt="Cut 3"
            />
            <p>
              This is one of the most costly mistakes when dealing with cuts.
              This atari is really bad as black now has the option to cut at A
              (along with the cut at B), both of which white can not handle.
              <br></br>
              <br></br>
              The atari that doesn't fix the cut problem is usually bad, notice
              how after the move at 1, white still owes a move at B to protect
              the cut. This causes problems as black's move at A would kill our
              2 other cutting stones!
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1706919670/Tutorial-images/Puzzles_7_2024-02-02_s5h6me.png"
              alt="Cut 4"
            />
            <p>
              If white connects the bottom stone to defend against that cut,
              white will die to the other cut when black plays at the triangle.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1706918841/Tutorial-images/Puzzles_4_2024-02-02_ksgej2.png"
              alt="Cut 5"
            />
            <p>
              {" "}
              <span className="important-text">Answer:</span> a simple extension
              from the weaker group makes it really easy to handle this
              situation!
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1706919462/Tutorial-images/Puzzles_5_2024-02-02_lmqpoa.png"
              alt="Cut 6"
            />
            <p>
              {" "}
              <span className="important-text">Answer variation:</span> Because
              white calmly extended, black's cut at 2 doesn't work as that stone
              will get easily captured.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CutsPage4;
