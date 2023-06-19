import { styled } from "styled-components";

const INPUT_HEIGHT = 44;

export const Input = styled.input`
  width: 100%;
  height: ${INPUT_HEIGHT}px;
  border-radius: 6px;
  padding: 4px 8px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #333;
  font-size: 1rem;
`;

export const InputDate = styled.input`
  width: 100%;
  height: ${INPUT_HEIGHT}px;
  border-radius: 6px;
  padding: 4px 8px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  /* &::placeholder {
    color: #fff;
  } */
`;
