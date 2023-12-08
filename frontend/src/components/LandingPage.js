import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import OpenModalMenuItem from "../components/Navigation/OpenModalMenuItem";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import * as sessionActions from "../store/session";
import "./styles/LandingPage.css";

const LandingPage = () => {
  const user = useSelector((state) => state.session.user);
  const history = useHistory()
  const dispatch = useDispatch()
  const handleDemoLoginClick = () => {
    const demoCredential = "test2@gmail.com";
    const demoPassword = "password";

    dispatch(sessionActions.login({
      credential: demoCredential,
      password: demoPassword
    }));
  };
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
                  className="landing-page-signup-button"
                  modalComponent={<SignupFormModal />}
                />
                or
                <OpenModalMenuItem
                  itemText="login"
                  className="landing-page-login-button"
                  modalComponent={<LoginFormModal />}
                />
                to use this website. Or
                <button onClick={handleDemoLoginClick} className="demo-login-button-home-page button-hover">
        Demo Log In
      </button>
              </h2>
            </>
          )}
        </div>
        <div className="landing-page-2nd-container">
          {/* Two-Column Layout for Buttons Starts Here */}
          <div className="inner-flexbox">
            {/* Left column */}
            <div className="landing-page-columns">
              <h2><span className="important-text">New to the game?</span></h2>
              <button className="button-hover" onClick={goToBasicRules}>Basic rules</button>
              <button className="button-hover">More rules & strategy</button>
              <button className="button-hover">Reading</button>
              <button className="button-hover">Puzzles</button>
              <button className="button-hover">External Resources</button>
            </div>

            {/* Right column */}
            <div className="landing-page-columns">
              <h2><span className="important-text">Improve your fundamentals</span></h2>
              <button className="button-hover">Ladders & Nets</button>
              <button className="button-hover">Cuts & weaknesses</button>
              <button className="button-hover">Direction of Play</button>
              <button className="button-hover">Judgment</button>
              <button className="button-hover">Life & Death</button>
              <button className="button-hover">Puzzles</button>
            </div>
          </div>
          {/* End of Two-Column Layout for Buttons */}
        </div>
      </div>
      {/* Right Column */}
      <div className="landing-page-right-column">
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977720/Tutorial-images/landing-page-public-puzzle-image_dyxtpr.png"
            alt="Public puzzle"
            className="landing-image button-hover"
          />
          <p className="landing-text">
            Attempt puzzles from the <span className="important-text">Public Puzzles</span> page. Filter puzzles by
            category, rank, and game state.
          </p>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977721/Tutorial-images/landing-page-upload-sgf-image_clkttk.png"
            alt="Upload SGF"
            className="landing-image button-hover"
          />
          <div className="landing-text-group">
    <p className="landing-text">Generate your own puzzles!</p>
    <p className="landing-text">Step 1: Click Upload SGF from the <span className="important-text">Upload & View Game Records</span> page.</p>
    <p className="landing-text spaced-text">Step 2: Click Generate Puzzles</p>
  </div>
        </div>
        <div className="image-text-container">
          <img
            src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977722/Tutorial-images/landing-page-potential-puzzle-image_fwsyn7.png"
            alt="Potential puzzle"
            className="landing-image button-hover"
          />
          <p className="landing-text">
          Step 3: Navigate to <span className="important-text">Potential Puzzles</span> to try the generated puzzles
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
