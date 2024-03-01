import React from "react";

const CountingPage5 = () => {
  return (
    <div className="main-content">
      <h2>Counting: Counting dead stones part 2</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>Let's practice counting when there are dead stones / prisoners!
            </li>
          </ul>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1709267502/Tutorial-images/Puzzles_4_2024-02-29_cyrx9f.png"
              alt="Counting 1"
            />
            <p>
            How many points do each player have?  Who won (assume white gets 0.5 points of komi)?
            <br></br>
            <br></br>
            <span className="important-text">Scroll down</span> to see the answer.
            </p>

          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1709267742/Tutorial-images/Puzzles_6_2024-02-29_ghz0tf.png"
              alt="Counting 2"
            />
            <p>
              <span className="important-text">White wins 30 to 27!</span>
              <br>
              </br>
              <br>
              </br>
              White has 3 black prisoners, so 3 times 2 is 6, and has a 5 by 3 area in the bottom left for 15 more, and 9 more empty points in the top left.  White therefore has 6 + 15 + 9 = 30 points.
              <br>
              </br>
              <br>
              </br>
              Black has 6 white prisoners, so 6 times 2 is 12, and 15 more empty points.  Black therefore has 12 + 15 = 27 points.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingPage5;
