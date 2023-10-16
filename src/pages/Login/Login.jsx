import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import "./Login.css";
import { isAuthenticated } from "../../security/AuthService";

const Login = () => {
  const { login } = useAuth();
  const [loginError, setLoginError] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (isAuthenticated(formData)) {
      document.querySelector(`.${ev.target.parentNode.className}`).classList.add("transition")
      setTimeout(() => {
        login(formData);
      }, 500)
    } else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 3000);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">LOG IN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="username-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="user-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="username-ipt"
          />
        </div>

        <div className="password-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="password-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
          </svg>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="password-ipt"
          />
        </div>
        <p className="error-msg">
          {loginError ? "Invalid username or password" : null}
        </p>
        <button disabled={!formData.username||!formData.password} className="submit-btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
