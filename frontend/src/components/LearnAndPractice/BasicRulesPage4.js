import React, { useEffect, useRef} from "react";

import "../../lib/glift";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const BasicRulesPage4 = () => {


  return (
    <div className="tutorial-puzzle-page">
      <h2>Basic Rules: Placing Stones & Surrounding Territory 4</h2>
      <p>If you said that it's a tie, great job! Both players have 29 points</p>
      <img
        src="/learn-and-practice-images/basic-rules-6.png"
        alt="basic-rules-6"
      />

    </div>
  );
};

export default BasicRulesPage4;
