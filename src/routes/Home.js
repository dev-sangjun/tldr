import React from "react";
import styled from "styled-components";
import { Sidebar } from "../components";

const Home = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Sidebar />
    </div>
  );
};

export default styled(Home)`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
