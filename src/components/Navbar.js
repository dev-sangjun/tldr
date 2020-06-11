import React from "react";
import styled from "styled-components";

const Navbar = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Logo>TL;DR</Logo>
    </div>
  );
};

const Logo = styled.span`
  font-size: 1.2em;
`;

export default styled(Navbar)`
  padding: 1rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
`;
