import React from "react";

const BasicRulesPage2 = () => {
  return (
    <div className="main-content">
      <h2>Basic Rules: Placing Stones & Surrounding Territory 2</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <p>
            If you answered 4 points for each group (A, B, and C), you are
            correct! Nice job. 😀 Notice how you needed 4 stones to surround 4
            points with group C, 6 stones to surround 4 points with group B, and
            8 stones to surround 4 points with group A.
          </p>

          <p>
          <span className="takeaway">Takeaway:</span> We want to surround the corners first, then the sides, then the center.
          </p>

          <p>
            On the next page, we will practice scoring a game to see who won.  And then we will move on to learning about
            capturing stones, one of the most fun parts of this game!
          </p>
        </div>
        {/* Image(s) on the right half */}
        <div className="diagram-container">
          <div className="image-text-wrap">
          <img
            src="/learn-and-practice-images/basic-rules-4.png"
            alt="basic-rules-4"
          />
          <p className="long-diagram-explanation">
            Diagram 1: Each black group above is surrounding 4 points of
            territory (marked with triangles). Remember that each point of
            territory is where there is an intersection.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BasicRulesPage2;
