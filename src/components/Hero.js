import React from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";
const Hero = props => {
  const { className, text } = props;
  const lorem = new LoremIpsum();
  return (
    <div className={className}>
      <p className="bg-text">{lorem.generateWords(1000)}</p>
      <header className="hero-header">{text}</header>
    </div>
  );
};

export default styled(Hero)`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: linear-gradient(135deg, #feb692, #ea5455);
  padding: 1rem;
  overflow: hidden;
  .bg-text {
    opacity: 0.3;
    transform: rotate(15deg) scale(1.5);
    user-select: none;
  }
  .hero-header {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-size: 3em;
    color: white;
    font-weight: bold;
  }
`;
