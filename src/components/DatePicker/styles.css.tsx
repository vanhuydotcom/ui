import { styled } from "styled-components";

export const PickerContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
