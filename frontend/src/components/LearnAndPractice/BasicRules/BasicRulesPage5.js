import React from "react";

const BasicRulesPage5 = () => {
  return (
    <div className="tutorial-puzzle-page">
      <h2>Basic Rules: Placing Stones & Surrounding Territory 5</h2>
      <p>
        Since this is the 9 by 9 board (there are 9 intersections vertically and
        horizontally), we know that black has 9 times 3 points in the red
        rectangle highlighted below. Black also has 2 more points at F1 and F2,
        so black has as total of 27 + 2 = 29 points.
      </p>
      <p>
        We can then move the 2 white stones at C4 and C5 over to the right to
        simplify white's territory to make it easier to count. Once you
        visualize those 2 white stones shifted over to D4 and D5, white now also
        has 9 times 3 points, with 2 extra points at D8 and D9. The shape is a
        reflection of black's territory!
      </p>
      <p>
        <span className="important-text">Takeaway: </span>We can count territory
        by using multiplication, and we can simplify the territory by shifting
        stones to the edges to make the shape easier to count. If you play in
        person, you may notice players shift the stones to the border during the
        counting phase of the game to make it easier to count. Please be careful
        not to shift the boundaries otherwise the amount of territory will also
        be changed, and you could be accused of cheating.
      </p>

      <img
        className="button-hover"
        src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977664/Tutorial-images/basic-rules-7_sr8fqj.png"
        alt="Who won the game 3"
      />
    </div>
  );
};

export default BasicRulesPage5;
