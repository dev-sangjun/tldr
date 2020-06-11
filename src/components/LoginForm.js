import React from "react";
import styled from "styled-components";
import { Header, TextField, Submit } from "./styled";
const LoginForm = props => {
  const { className } = props;
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className={className}>
      <Header className="header">Login</Header>
      <form className="login-form" onSubmit={onSubmit}>
        <TextField className="text-input" placeholder="Username" />
        <TextField
          className="text-input"
          type="password"
          placeholder="Password"
        />
        <Submit className="submit-btn btn" value="Login" />
      </form>
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
`;
