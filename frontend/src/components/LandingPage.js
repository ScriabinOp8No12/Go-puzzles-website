import React from "react";
import { useSelector } from "react-redux";
import OpenModalMenuItem from "../components/Navigation/OpenModalMenuItem";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import "./styles/LandingPage.css";

const LandingPage = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <div className="go-container">
      {/* Left Column */}
      <div className="landing-page-left-column">
        <div className="landing-page-1st-container">
          <div className="landing-page-header-section">
            <h1 className="landing-page-h1">Welcome to go-puzzles.com!</h1>
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
              <button>Basic rules</button>
              <button>Scoring</button>
              <button>More rules & strategy</button>
              <button>Reading</button>
              <button>Puzzles on rules</button>
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
              <button>Puzzles on fundamentals</button>
            </div>
          </div>
          {/* Two-Column Layout for Buttons Ends Here */}
        </div>
      </div>
      {/* Right Column */}
      <div className="landing-page-right-column"></div>
    </div>
  );
};

export default LandingPage;