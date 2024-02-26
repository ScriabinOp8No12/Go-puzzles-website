import React from "react";

const CountingPage3 = () => {
  return (
    <div className="main-content">
      <h2>Counting: Practice estimating</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>In the below game, try to visualize some rectangles to count the number of points each player has.
            </li>
          </ul>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1708915282/Tutorial-images/Puzzles_1_2024-02-25_b0lscr.png"
              alt="Estimating 1"
            />
            <p>
            <span className="important-text">Scroll down</span> to see a possible way to estimate the score.
            </p>

          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1708915521/Tutorial-images/Puzzles_1_2024-02-25_-_Copy_f8y4y9.png"
              alt="Estimating 2"
            />
            <p>
              The game is fairly close, black has roughly <span className="important-text">20 points</span>, and white has roughly <span className="important-text">22 points</span> (12 + 10), but if white has komi, white will definitely win this game.
              <br></br>
              <br></br>
              On the next page, we will look at how to count points when there are dead stones / prisoners in the territory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingPage3;
