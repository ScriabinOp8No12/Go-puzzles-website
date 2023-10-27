import React, { useEffect, useRef} from "react";

import "../../lib/glift";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const BasicRulesPage4 = () => {


  return (
    <div className="main-content">
      <h2>Basic Rules: Counting Liberties and Capturing Stones</h2>
      <p>A liberty is any straight line coming off of the stone(s)</p>
      <p>To capture a stone, you must take away all of the stone(s) liberties</p>
      <p>See the diagrams to see how we capture stones</p>

      <div className="glift-wrapper">
      <div id="gliftContainer"></div>
      </div>
    </div>
  );
};

export default BasicRulesPage4;
