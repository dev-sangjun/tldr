import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .btn {
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
  .bold {
    font-weight: bold
  }
`;
