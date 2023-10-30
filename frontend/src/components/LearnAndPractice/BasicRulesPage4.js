import React, { useEffect, useRef} from "react";

import "../../lib/glift";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const BasicRulesPage4 = () => {


  return (
    <div className="tutorial-puzzle-page">
      <h2>Basic Rules: Placing Stones & Surrounding Territory 4</h2>
      <p>If you said that it's a <span className="important-text">tie</span>, great job! Both players have 29 points.
      In the below diagram, each smaller circle represents a surrounded point of territory.</p>
      <p> <span className="important-text">Terminology: </span>
      White wins all ties, due to <span className="important-text">komi</span>. Since white usually goes second, white gets at least 0.5 points of komi.
      Most of the time you will see that white gets 6.5 or 7.5 komi to offset black's first move. </p>
      <p>Can you think of a faster or more efficient way to figure out who won instead of counting each individual point? Hint: Use math we learned from school 🤣</p>
      <img
        src="/learn-and-practice-images/basic-rules-6.png"
        alt="basic-rules-6"
      />

    </div>
  );
};

export default BasicRulesPage4;
