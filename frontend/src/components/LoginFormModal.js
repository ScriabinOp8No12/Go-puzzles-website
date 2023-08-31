import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { closeModal } from "../store/modal";
import * as sessionActions from "../store/session";
import "./styles/LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => {
        dispatch(closeModal());
        history.push("/"); // Redirect user to home page after successful login
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const handleDemoLogin = () => {
    const demoCredential = "test1@gmail.com";
    const demoPassword = "password";

    return dispatch(
      sessionActions.login({
        credential: demoCredential,
        password: demoPassword,
      })
    )
      .then(() => {
        dispatch(closeModal());
      })
      .catch(async (res) => {
        const data = await res.json();
        // console.log(data);
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    // add modal className to this LoginFormModal as well as the SignupFormModal
    <div className="modal">
      <form className="login-form-modal" onSubmit={handleSubmit}>
        <h1 className="loginText">Log In</h1>
        {errors.credential && (
          <div className="errorMessage">
            <p>{errors.credential}</p>
          </div>
        )}
        <label className="usernameLabel">
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
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
        <button
          type="submit"
          className={`loginButton ${
            credential.length < 4 || password.length < 6 ? "disabledButton" : ""
          }`}
          disabled={credential.length < 4 || password.length < 6}
        >
          Log In
        </button>
        <button onClick={handleDemoLogin} className="demoLoginButton">
          Demo User
        </button>
      </form>
    </div>
  );
}

export default LoginFormModal;
