import React, { useEffect, useRef } from "react";
import { readingLadderPuzzles } from "../GliftPuzzles/ReadingLadderPuzzles";

import "../../../lib/glift";

/* global glift */ // For informing ESLint that glift is a global object, otherwise it gets mad, real mad, even though everything still works once we close the giant red screen

const ReadingLadderPuzzles = () => {
  const gliftInstance = useRef(null);

  useEffect(() => {
    const instance = glift.create({
      sgfCollection: readingLadderPuzzles,
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

export default ReadingLadderPuzzles;
