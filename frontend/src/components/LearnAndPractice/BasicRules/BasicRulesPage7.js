import React, { useEffect, useRef } from "react";
import { capturingPuzzles } from "../GliftPuzzles/CapturingPuzzles";

import "../../../lib/glift";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const BasicRulesPage7 = () => {
  const gliftInstance = useRef(null);

  useEffect(() => {
    const instance = glift.create({
      sgfCollection: capturingPuzzles,
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

export default BasicRulesPage7;
