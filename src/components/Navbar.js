import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { openModal, setUser } from "../reducers";
import { LoginForm } from "../components";

const Navbar = props => {
  const { className } = props;
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  const onLogin = () => {
    if (user) {
      if (window.confirm("Are you sure you want to log out?")) {
        dispatch(setUser(null));
        localStorage.setItem("tldr/token", null);
      }
    } else dispatch(openModal(<LoginForm />));
  };
  return (
    <div className={className}>
      <Logo>TL;DR</Logo>
      <NavItems>
        <li className="btn" onClick={onLogin}>
          {user ? "Logout" : "Login"}
        </li>
      </NavItems>
    </div>
  );
};

const Logo = styled.header`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2em;
  font-weight: bold;
  user-select: none;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
`;

export default styled(Navbar)`
  position: relative;
  z-index: 2;
  padding: 1rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
