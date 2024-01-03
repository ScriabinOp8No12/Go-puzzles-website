import React from "react";

const MoreRulesPage3 = () => {
  return (
    <div className="main-content">
      <h2>More Rules and Strategy: Seki</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              A <span className="important-text">seki</span> occurs when neither
              player has two eyes, yet neither player can kill the other, so
              this means both players are alive.
            </li>
            <li>How can this be? 🤔 Let me show you some examples!</li>
          </ul>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704050415/Tutorial-images/Puzzles_6_2023-12-31_qv1qak.png"
              alt="Seki 1"
            />
            <p>
              Diagram 1: Black and white's groups marked at A and B are{" "}
              <span className="important-text">both alive</span> even though
              neither player has 2 eyes. Whoever places a stone at a triangle
              first gets immediately captured by the opponent at the other
              triangle. Both players can choose to never place a stone at either
              of the triangles, which means both players are just alive.
            </p>
          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1704050415/Tutorial-images/Puzzles_7_2023-12-31_aca7zo.png"
              alt="Seki 2"
            />
            <p>
              Diagram 2: Here's another example of a seki - notice how if either
              player places a stone at the triangle, they can get captured.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreRulesPage3;
