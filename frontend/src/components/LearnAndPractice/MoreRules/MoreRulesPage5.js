import React from "react";

const MoreRulesPage5 = () => {
  return (
    <div className="main-content">
      <h2>More Rules: Game Ending Condition</h2>
      <div className="content-section">
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              The game ends when both players agree, which is typically done by
              both players saying the word{" "}
              <span className="important-text">pass</span> (one after another).
            </li>
            <li>
              Saying pass is equivalent to saying "I don't think there's
              anything left to play, so I won't play anything, and now it's your
              turn."
            </li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704252864/Tutorial-images/Puzzles_11_2024-01-02_qp9wqa.png"
              alt="Game ending condition 1"
            />
            <p>
              This game is not over yet. Notice how the space{" "}
              <span className="important-text">between</span> black and white
              are still open. The game is usually over when black and white are
              touching everywhere, except for where they have territory. This is
              pretty confusing at first, but the more you play, the more it will
              make sense.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704252864/Tutorial-images/Puzzles_10_2024-01-02_h4nc3c.png"
              alt="Game ending condition 2"
            />
            <p>
              The game is almost over now, but there are still a few spots left
              to play on the E and F line. Most of these are worth 0 points, and
              the term we use in Japanese is{" "}
              <span className="important-text">dame</span> to describe these
              spots. F7 for white is actually{" "}
              <span className="important-text">sente</span> meaning black must
              respond at G8 otherwise if white went there afterwards, the 3
              black stones would die. Sente is a move that results in the player
              making the move to keep initiative, meaning after the opponent
              responds, they can go somewhere else.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704252865/Tutorial-images/Puzzles_12_2024-01-02_xssec8.png"
              alt="Game ending condition 3"
            />
            <p>
              Now the game is over! Notice how all the black and white stones
              are touching anywhere between the two players. All that's left is
              for the players to say "pass" (one after another), you can choose
              to not play on your turn by saying pass. Once both players say
              pass, the game goes into the counting / scoring phase to see who
              won!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreRulesPage5;
