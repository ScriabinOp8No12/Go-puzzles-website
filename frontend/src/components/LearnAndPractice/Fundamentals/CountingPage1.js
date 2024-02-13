import React from "react";

const CountingPage1 = () => {
  return (
    <div className="main-content">
      <h2>Counting: Adjusting strategy based on who's winning!</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>Other than reading (visualizing the different variations/sequences), counting is arguably the next most important skill in Go!</li>
            <li>By counting the current score, and knowing who's winning or losing and by how much, we can make better decisions to improve our odds of winning.</li>
          </ul>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1707858913/Tutorial-images/Puzzles_1_2024-02-13_tqvrji.png"
              alt="Counting 1"
            />
            <p>
              Before deciding on your move, let's figure out who's winning!  If you count the score and know you are winning, you can afford to play safer. Whereas if you are losing, you might as well play aggressively/recklessly because even if you get killed, you were going to lose anyways.
              <br></br>
              <br></br>
            <span className="important-text">Scroll down</span> to see the answer and variations.
            </p>

          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1707858914/Tutorial-images/Puzzles_3_2024-02-13_xidxbl.png"
              alt="Counting 2"
            />
            <p>
              Here's roughly the amount of territory each player has.  The bottom side <span className="important-text">E2 area</span> is still up for grabs, so we won't give those points to either player.  <span className="important-text">Black is winning by a lot </span>(roughly 33 to 11, even if white has 5.5 komi, black is still up comfortably). With this in mind, what do you think is the best move for black to secure the victory?
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1707858915/Tutorial-images/Puzzles_4_2024-02-13_hwayqh.png"
              alt="Counting 3"
            />
            <p>
              <span className="important-text">Answer:</span> A very defensive move like this is perfect, as it guarantees white will have a harder time invading the top right, giving black a near <span className="important-text">100% chance</span> to win this game.
              In theory, E2 would be the best move, however, from the standpoint of winning the game, G7 should result in the highest chance of winning the game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingPage1;
