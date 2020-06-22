import React from "react";
import styled from "styled-components";
import { Hero } from "../components";

const Public = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Hero text="TL;DR. Make it concise." />
    </div>
  );
};

export default styled(Public)`
  height: 100%;
  overflow: hidden;
`;
