import React from 'react';
import OpenModalMenuItem from "../components/Navigation/OpenModalMenuItem";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";

const UnauthorizedMessage = () => {

  return <div className="unauthorized-centered-message">
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
</div>
};

export default UnauthorizedMessage;
