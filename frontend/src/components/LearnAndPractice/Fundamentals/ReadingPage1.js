import React from "react";

const ReadingPage1 = () => {
  return (
    <div className="main-content">
      <h2>Fundamentals: Reading</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>
              Do you like seeing into the future? I sure do. Let's learn what
              reading is and why it makes Go such an incredible game! 😊
            </li>
            <li>
              Reading is visualizing or picturing what would happen if certain
              moves were played. Because we can't take back moves once they are
              placed on the board, reading is arguably the most important skill
              to have in this game.
            </li>
            <li>Let's look at a few examples on the next page.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage1;
