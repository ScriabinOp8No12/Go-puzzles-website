import React from "react";
import "./styles/AboutMe.css";

const ExternalResources = () => {
  return (
    <div className="about-me-outer-container">
      <h1 className="about-me-h1">External Resources</h1>
      <p className="about-me-paragraph-text">
      </p>

      <p className="about-me-paragraph-text">
        For Go terminology:{" "}
        <a
          href="https://senseis.xmp.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Sensei's Library
        </a>
      </p>

      <p className="about-me-paragraph-text">
        Go Servers:{" "}
        <a
          href="https://online-go.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          OGS
        </a>,
        <a
          href="https://www.gokgs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          KGS
        </a>,
        <a
          href="https://pandanet-igs.com/communities/pandanet"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          IGS
        </a>
      </p>
    </div>
  );
};

export default ExternalResources;
