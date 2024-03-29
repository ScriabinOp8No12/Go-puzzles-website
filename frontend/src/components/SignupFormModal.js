import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/modal";
import * as sessionActions from "../store/session";
import CloseButton from "./CloseModalButton";
import "./styles/SignupForm.css";


function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      dispatch(
        sessionActions.signup({
          email,
          username,
          password,
        })
      )
        .then(() => {
          dispatch(closeModal());
        })
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    } else {
      setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }
  };

  return (
    // <div className="modal-overlay" onClick={handleClose}>
    <div className="modal">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="signupText">Sign Up</h1>
        {/* Add close button component*/}
        <CloseButton onClick={() => dispatch(closeModal())} />

        <div className="errorMessage">
          {Object.keys(errors).map((key, index) => (
            <p key={index}>{errors[key]}</p>
          ))}
        </div>

        <label className="emailLabel">
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="emailField"
          />
        </label>
        <label className="userNameLabel">
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="usernameField"
          />
        </label>
        <label className="passwordLabel">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="passwordField"
          />
        </label>
        <label className="confirmPasswordLabel">
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="confirmPasswordField"
          />
        </label>
        <button
          type="submit"
          className={`signupButton ${
            username.length < 4 ||
            password.length < 6 ||
            password !== confirmPassword ||
            confirmPassword.length === 0 ||
            email.length === 0

              ? "disabledButton"
              : ""
          }`}
          disabled={
            username.length < 4 ||
            password.length < 6 ||
            password !== confirmPassword ||
            confirmPassword.length === 0 ||
            email.length === 0
          }
        >
          Sign Up
        </button>
      </form>
    </div>
    // </div>
  );
}

export default SignupFormModal;
