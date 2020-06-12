import React from "react";
import styled from "styled-components";

const Public = props => {
  const { className } = props;
  return <div className={className}>Public</div>;
};

export default styled(Public)``;
