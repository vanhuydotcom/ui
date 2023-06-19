import { styled } from "styled-components";

const BUTTON_HEIGHT = 32;

export const Button = styled.button<{ width?: number }>`
  width: ${({ width }) => width ?? "auto"}px;
  height: ${BUTTON_HEIGHT}px;
  padding: 0 8px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;
