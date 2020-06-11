import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Header, TextField, Submit } from "./styled";
import { login } from "../api";

const LoginForm = props => {
  const { className } = props;
  const [loginMode, setLoginMode] = useState(true);
  const username = useRef(),
    email = useRef(),
    password = useRef();
  const onSubmit = async e => {
    e.preventDefault();
    // login user
    try {
      const user = await login(username.current.value, password.current.value);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const onModeClick = e => {
    setLoginMode(!loginMode);
  };
  return (
    <div className={className}>
      <Header className="header">{loginMode ? "Login" : "Sign Up"}</Header>
      <form className="login-form" onSubmit={onSubmit}>
        <TextField
          className="text-input"
          name="username"
          placeholder="Username"
          ref={username}
        />
        {!loginMode && (
          <TextField className="text-input" placeholder="Email" ref={email} />
        )}
        <TextField
          className="text-input"
          name="password"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <Submit
          className="submit-btn btn"
          value={loginMode ? "Login" : "Sign Up"}
        />
      </form>
      <div className="btm-container">
        <span className="mode-label">
          {loginMode ? "Not" : "Already"} registered?
        </span>
        <span className="btn" onClick={onModeClick}>
          {loginMode ? "Sign Up" : "Login"}
        </span>
      </div>
    </div>
  );
};

export default styled(LoginForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    margin-bottom: 1rem;
  }
  .login-form {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    .text-input {
      width: 100%;
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .submit-btn {
      width: 100%;
      color: white;
      background-color: #767676;
      box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
    }
  }
  .btm-container {
    display: flex;
    justify-content: center;
    .mode-label {
      margin-right: 1rem;
      color: gray;
    }
  }
`;
