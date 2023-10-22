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
        <div className="landing-page-header-section">
          <h1 className="landing-page-h1">Welcome to go-puzzles.com!</h1>
          <img
            src="/turtle-logo.jpg"
            alt="Landing Page Turtle Logo"
            className="landing-page-turtle-logo-h1"
          />
        </div>
        <h2 className="landing-page-slogan">
          The best place on the web to level up your Go skills with full board
          puzzles
        </h2>
        {!user && (
          <>
            <h2 className="landing-page-signup-login-button">
              Please
              <OpenModalMenuItem
                itemText=" signup"
                modalComponent={<SignupFormModal />}
              />
              or
              <OpenModalMenuItem
                itemText=" login"
                modalComponent={<LoginFormModal />}
              />
              to use this website
            </h2>
          </>
        )}

        <h2>
          Try puzzles at Public Puzzles, and upload games to generate puzzles
        </h2>
      </div>
      {/* Right Column */}
      <div className="landing-page-right-column"></div>
    </div>
  );
};

export default LandingPage;
