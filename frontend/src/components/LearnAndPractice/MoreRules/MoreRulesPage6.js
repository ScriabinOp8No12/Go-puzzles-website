import React, { useEffect, useRef } from "react";
import { moreRulesPuzzles } from "../GliftPuzzles/MoreRulesPuzzles";

import "../../../lib/glift";
/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const MoreRulesPage6 = () => {
  const gliftInstance = useRef(null);

  useEffect(() => {
    const instance = glift.create({
      sgfCollection: moreRulesPuzzles,
      divId: "gliftContainer",
      display: {
        drawBoardCoords: true,
        disableZoomForMobile: true,
      },
    });

    gliftInstance.current = instance;

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div id="gliftContainer"></div>
  );
};

export default MoreRulesPage6;
