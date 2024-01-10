import React from "react";

const BasicRulesPage2 = () => {
  return (
    <div className="main-content">
      <h2>Basic Rules: Placing Stones & Surrounding Territory 2</h2>
      <div className="content-section">
        <div className="content-text-section">
          <p>
            If you answered 4 points for each group (A, B, and C), you are
            correct! Nice job. 😀 Notice how you needed 4 stones to surround 4
            points with group C, 6 stones to surround 4 points with group B, and
            8 stones to surround 4 points with group A.
          </p>

          <p>
            <span className="important-text">Takeaway:</span> We want to
            surround the corners first, then the sides, then the center.
          </p>

          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698978159/Tutorial-images/basic-rules-4_ceflum.png"
              alt="Surrounding territory 4"
            />
            <p className="long-diagram-explanation">
              Each black group is surrounding 4 points of territory (marked with
              triangles). Remember that each point of territory is where there
              is an intersection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicRulesPage2;
