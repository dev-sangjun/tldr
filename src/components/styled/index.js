import styled from "styled-components";

export const Header = styled.header`
  font-size: 1.2em;
  font-weight: bold;
`;

export const TextField = styled.input`
  background-color: #f4f5f7;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.8em;
  padding: 0.5rem 0.75rem;
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.input.attrs({ type: "submit" })`
  border: none;
  border-radius: 0.25rem;
  font-size: 0.8em;
  padding: 0.5rem 0.75rem;
  &:focus {
    outline: none;
  }
`;
