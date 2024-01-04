import React from "react";

const MoreRulesPage2 = () => {
  return (
    <div className="main-content">
      <h2>More Rules: Eyes</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
        <ul className="spaced-list">
            <li>
            An <span className="important-text">eye</span> is any spot where the
            opponent is not allowed to play (an illegal move), since they would
            have 0 liberties when they play there. Read more about eyes <a href="https://senseis.xmp.net/?RecognizingAnEye" target="_blank" rel="noopener noreferrer">here</a>.
            </li>
            <li>For a group of stones to be alive and unkillable, it must have{" "}
            <span className="important-text">at least 2 eyes</span> (there is an
            exception, which we will discuss in the next section). Most living
            groups will have a lot more than 2 eyes.</li>
            <li>
            A group with one eye is not alive, because the opponent could place
            a stone at that location as their last move to capture the group.
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704049259/Tutorial-images/Puzzles_1_2023-12-31_yqvc0b.png"
              alt="2 eyes 1"
            />
            <p>
              Diagram 1: Black is <span className="important-text">alive</span>{" "}
              with 2 eyes. White is not allowed to place a stone at either of
              the marked triangles. And because you can only place one stone at
              a time in Go, this black group can not be killed. 😄
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704049260/Tutorial-images/Puzzles_3_2023-12-31_eqejjj.png"
              alt="2 eyes 2"
            />
            <p>
              Diagram 2: Black is <span className="important-text">dead</span>{" "}
              because they only have 1 eye, or one spot where the opponent is
              "not" allowed to play. However, white is allowed to place a stone
              at the triangle if it's capturing the opponent, which in this case
              it is.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704049260/Tutorial-images/Puzzles_2_2023-12-31_kv748v.png"
              alt="2 eyes 3"
            />
            <p>
              Diagram 3: Black is <span className="important-text">alive</span>{" "}
              with two eyes, if white tries to place a stone at one of the
              triangles, black can immediately capture the stone. Because of
              this, black does not need to place any more stones and is still
              alive with 2 eyes!
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704049260/Tutorial-images/Puzzles_4_2023-12-31_yy54ru.png"
              alt="2 eyes 4"
            />
            <p>
              Diagram 4: Black is <span className="important-text">alive</span>{" "}
              with more than two eyes, if white tries to place stones inside
              black's territory, they will quickly get captured. When you are
              just starting out, you may need to experiment to see why this is
              the case!
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704049260/Tutorial-images/Puzzles_5_2023-12-31_q4nths.png"
              alt="2 eyes 5"
            />
            <p>
              Diagram 5: Black is <span className="important-text">alive</span>.
              Most groups at the end of the game will look something like this,
              where you don't visably see the 2 eyes yet, but there's enough
              space to make two eyes if needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreRulesPage2;
