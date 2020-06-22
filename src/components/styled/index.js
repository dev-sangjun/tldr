import styled from "styled-components";

export const Header = styled.header`
  font-size: 1.2em;
  font-weight: bold;
`;

export const Content = styled.p`
  font-size: 1em;
  white-space: pre-wrap;
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

export const TextArea = styled.textarea`
  background-color: #f4f5f7;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.8em;
  padding: 0.5rem 0.75rem;
  resize: none;
  &:focus {
    outline: none;
  }
`;
export const Submit = styled.button.attrs({ type: "submit" })`
  border: none;
  border-radius: 0.25rem;
  font-size: 0.8em;
  padding: 0.5rem 0.75rem;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.25rem;
  font-size: 0.8em;
  padding: 0.5rem 0.75rem;
  &:focus {
    outline: none;
  }
`;

export const Card = styled.div`
  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
`;
