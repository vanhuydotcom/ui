import { css, keyframes, styled } from "styled-components";
import { Input } from "../Input/styles.css";

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
export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const InputDate = styled(Input)`
  padding-left: 44px;
`;

export const Icon = styled.div<{ absolute?: 0 | 1 }>`
  position: ${({ absolute }) => (absolute ? "absolute" : "static")};
  cursor: pointer;
  overflow: hidden;
  height: 100%;
  padding: 10px 12px;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const CalendarWrap = styled.div<{ show: 0 | 1 }>`
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 2;
  transition: max-height 0.25s ease;
  overflow: hidden;
  ${({ show }) =>
    show
      ? css`
          max-height: 600px;
          transition: max-height 0.25s ease;
        `
      : css`
          max-height: 0;
          transition: max-height 0.25s ease;
        `}
`;

export const InputRange = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: #fff;
  border-radius: 6px;
  span {
    color: #888;
  }
`;
