import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import OpenModalMenuItem from "../components/Navigation/OpenModalMenuItem";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import "./styles/LandingPage.css";

const LandingPage = () => {
  const user = useSelector((state) => state.session.user);
  const history = useHistory()

  const goToBasicRules = () => {
    history.push("/learn-and-practice/basic-rules/1");
  };

  return (
    <div className="go-container">
      {/* Left Column */}
      <div className="landing-page-left-column">
        <div className="landing-page-1st-container">
          <div className="landing-page-header-section">
            <h1 className="landing-page-h1"><span className="important-text">Welcome to go-puzzles.com!</span></h1>
          </div>
          <h2 className="landing-page-slogan">
            The best place on the web to level up your Go skills with full board
            puzzles
          </h2>
          <h2 className="landing-page-purpose-statement">
            Solve and generate puzzles, and learn from interactive tutorials!
          </h2>
          {!user && (
            <>
              <h2 className="landing-page-signup-login-button">
                Please
                <OpenModalMenuItem
                  itemText="signup"
                  modalComponent={<SignupFormModal />}
                />
                or
                <OpenModalMenuItem
                  itemText="login"
                  modalComponent={<LoginFormModal />}
                />
                to use this website
              </h2>
            </>
          )}
        </div>
        <div className="landing-page-2nd-container">
          {/* Two-Column Layout for Buttons Starts Here */}
          <div className="inner-flexbox">
            {/* Left column */}
            <div className="landing-page-columns">
              <h2>New to the game?</h2>
              <button onClick={goToBasicRules}>Basic rules</button>
              <button>More rules & strategy</button>
              <button>Reading</button>
              <button>Puzzles</button>
              <button>External Resources</button>
            </div>

            {/* Right column */}
            <div className="landing-page-columns">
              <h2>Improve your fundamentals</h2>
              <button>Ladders & Nets</button>
              <button>Cuts & weaknesses</button>
              <button>Direction of Play</button>
              <button>Judgment</button>
              <button>Life & Death</button>
              <button>Puzzles</button>
            </div>
          </div>
          {/* End of Two-Column Layout for Buttons */}
        </div>
      </div>
      {/* Right Column */}
      <div className="landing-page-right-column">
        <div className="image-text-container">
          <img
            src="landing-page-images/landing-page-public-puzzle-image.png"
            alt="Public puzzle"
            className="landing-image"
          />
          <p className="landing-text">
            Attempt puzzles from the Public Puzzles page. Filter puzzles by
            category, rank, and game state.
          </p>
        </div>
        <div className="image-text-container">
          <img
            src="landing-page-images/landing-page-upload-sgf-image.png"
            alt="Upload SGF"
            className="landing-image"
          />
          <div className="landing-text-group">
    <p className="landing-text">Generate your own puzzles!</p>
    <p className="landing-text">Step 1: Click Upload SGF from the Upload & View Game Records page.</p>
    <p className="landing-text spaced-text">Step 2: Click Generate Puzzles</p>
  </div>
        </div>
        <div className="image-text-container">
          <img
            src="landing-page-images/landing-page-potential-puzzle-image.png"
            alt="Public puzzle"
            className="landing-image"
          />
          <p className="landing-text">
          Step 3: Navigate to Potential Puzzles to try the generated puzzles
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
