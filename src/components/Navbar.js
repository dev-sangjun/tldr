import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "../reducers";
import { LoginForm } from "../components";

const Navbar = props => {
  const { className } = props;
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(openModal(<LoginForm />));
  };
  return (
    <div className={className}>
      <Logo>TL;DR</Logo>
      <NavItems>
        <li className="btn" onClick={onLogin}>
          Login
        </li>
      </NavItems>
    </div>
  );
};

const Logo = styled.header`
  font-size: 1.2em;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
`;

export default styled(Navbar)`
  padding: 1rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
