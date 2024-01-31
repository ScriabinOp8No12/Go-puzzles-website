import React from "react";

const CutsPage1 = () => {
  return (
    <div className="main-content">
      <h2>Fundamentals: Cuts</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              Cuts are one of the most fun thing to do in this game, by cutting
              your opponent off, they are much easier to attack as they have
              less liberties and eyes! 😊
            </li>
            <li>
              You need to be careful when cutting though, you generally don't
              want to pick a bad fight.
            </li>
            <li>
              Because stones are only ever connected by a straight line, most
              cuts involve cutting stones off diagonally.
            </li>
            <li>
              The{" "}
              <a
                href="https://senseis.xmp.net/?CrossCut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="important-text">cross-cut</span>
              </a>{" "}
              below is one of the most common ways to cut.
            </li>
          </ul>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1706666620/Tutorial-images/Puzzles_1_2024-01-30_pi0dsu.png"
              alt="Cross cut 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutsPage1;
