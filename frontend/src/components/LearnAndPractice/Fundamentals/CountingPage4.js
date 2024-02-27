import React from "react";

const CountingPage4 = () => {
  return (
    <div className="main-content">
      <h2>Counting: Counting dead stones</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <ul className="spaced-list">
            <li>In the below game, notice there are some dead stones in white's territory, so how do we count this?
            </li>
          </ul>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1708994007/Tutorial-images/Puzzles_1_2024-02-26_wkqy3a.png"
              alt="Counting 1"
            />
            <p>
            The 2 marked black stones are dead, how do we count white's territory?
            <br></br>
            <br></br>
            <span className="important-text">Scroll down</span> to see the most common way to count this.
            </p>

          </div>
          <div className="content-image-section">
            <img
              className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1708994714/Tutorial-images/Puzzles_3_2024-02-26_jbhcgk.png"
              alt="Counting 2"
            />
            <p>
              You can simply take the number of prisoners (dead stones), and <span className="important-text">double them</span>, since there are 2 dead black stones, we can do 2 times 2 = 4.  White therefore has a total of <span className="important-text">26 points</span>!
              <br></br>
              <br></br>
              The reason we double them is that at the end of the game, we take prisoners and put them into the opponent's territory.
              When we take the 2 prisoners off, our territory is now 2 points larger.  However, we also reduce our opponent's territory by 2 (the same amount).  So that's why for each dead stone
              in our own territory, we double it.
              <br></br>
              <br></br>
              We will practice this way of counting on the next page!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountingPage4;
