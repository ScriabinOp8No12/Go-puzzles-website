import React, { useEffect, useRef } from "react";
import { cutsCountingPuzzles } from "../GliftPuzzles/CutsCountingPuzzles";

import "../../../lib/glift";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const CutsCountingPuzzles = () => {
  const gliftInstance = useRef(null);

  useEffect(() => {
    const instance = glift.create({
      sgfCollection: cutsCountingPuzzles,
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
    <div className="glift-container">
      <div id="gliftContainer"></div>
    </div>
  );
};

export default CutsCountingPuzzles;
