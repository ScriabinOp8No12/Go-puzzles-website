import React from "react";

const CountingPage2 = () => {
  return (
    <div className="main-content">
      <h2>Counting: Estimating with boxes and comparing territory</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>Sometimes you'll need to get a general idea of how many points each player has and where the points are.
            In these cases, it's often best to estimate the score
            </li>
            <li>1. You can visualize rectangles / squares for each side to quickly get a sense of the territory surrounded.</li>
            <li>2. You can also compare territory with your opponent's territory, to see who has more or less.</li>
          </ul>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1708632575/Tutorial-images/Puzzles_1_2024-02-22_whczlw.png"
              alt="Estimating 1"
            />
            <p>
              In this diagram, we've drawn some rectangles that roughly capture the bulk of each player's territory.  It's not perfect, but it's a fast way to get a sense of the territory each player has surrounded.

              <br></br>
              <br></br>
            <span className="important-text">Scroll down</span> to see a way to compare territory using a similar method.
            </p>

          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1708632773/Tutorial-images/Puzzles_2_2024-02-22_ckfghq.png"
              alt="Estimating 2"
            />
            <p>
              Notice how these two areas are roughly the same <span className="important-text">(5 by 4 for 20 points each)</span>.  By comparing territory this way, we can clearly see that black has much more territory because that single top right corner is already equivalent to what white has in total.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingPage2;
