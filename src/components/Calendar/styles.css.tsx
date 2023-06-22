import { css, styled } from "styled-components";
import { isDate } from "util/types";
import { ECalendarType } from "./types";

export const CalendarContainer = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow: hidden;
  max-width: max-content;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #828282;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding: 8px 0 16px 0;
  border-bottom: 1px solid #f2f2f2;
`;

export const CalendarFooter = styled.div`
  width: 100%;
  padding: 9px 0;
  text-align: center;
  span {
    cursor: pointer;
    color: #005aff;
    &:hover,
    &:focus {
      color: #0047cc;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarGrid = styled.div<{ type?: ECalendarType }>`
  display: grid;
  grid-gap: 10px 0;
  ${({ type }) => {
    switch (type) {
      case ECalendarType.month:
        return css`
          grid-template-columns: repeat(3, 1fr);
        `;

      default:
        return css`
          grid-template-columns: repeat(7, 1fr);
        `;
    }
  }}
`;

export const CalendarItemWrap = styled.div`
  &:nth-child(7n + 1) {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    overflow: hidden;
  }
  &:nth-child(7n) {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
    overflow: hidden;
  }
`;

export const CalendarItem = styled.div<{
  type?: ECalendarType;
  active?: 0 | 1;
  inRangeActive?: 0 | 1;
  blur?: 0 | 1;
  disable?: 0 | 1;
  visible?: 0 | 1;
  start?: 0 | 1;
  end?: 0 | 1;
  pickerRange?: 0 | 1;
  today?: 0 | 1;
  fullRange?: 0 | 1;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  cursor: pointer;
  color: #333333;
  transition: initial 0.25s ease-in;
  ${({ type }) => {
    switch (type) {
      case ECalendarType.month:
        return css`
          width: 84px;
        `;

      default:
        return css`
          width: 42px;
        `;
    }
  }}

  ${({ pickerRange }) =>
    pickerRange
      ? css`
          border-radius: 100% !important;
        `
      : undefined}
  ${({ start, fullRange }) =>
    start
      ? css`
          border-top-left-radius: 50% !important;
          border-bottom-left-radius: 50% !important;
          border-top-right-radius: ${fullRange ? "0" : "50%"}!important;
          border-bottom-right-radius: ${fullRange ? "0" : "50%"}!important;
        `
      : undefined}
${({ end }) =>
    end
      ? css`
          border-top-right-radius: 50% !important;
          border-bottom-right-radius: 50% !important;
        `
      : undefined}


${({ disable }) =>
    disable
      ? css`
          cursor: none;
          pointer-events: none !important;
          user-select: none !important;
          opacity: 0.4;
        `
      : undefined}
${({ active }) =>
    active
      ? css`
          background-color: #eff5ff;
          color: #fff;
        `
      : undefined}
     ${({ inRangeActive }) =>
    inRangeActive
      ? css`
          background-color: #eff5ff !important;
          border-radius: unset;
          border: unset !important;
          transition: initial 0.25s ease-in;
        `
      : undefined}
${({ blur }) =>
    blur
      ? css`
          opacity: 0.4;
        `
      : undefined}
     ${({ visible }) =>
    visible
      ? css`
          opacity: 0;
          visibility: hidden;
          pointer-events: none !important;
          user-select: none !important;
        `
      : undefined}

    span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ type }) =>
      type === ECalendarType.month ? "6px" : " 50%"};
    &:hover {
      background: #cfe0ff;
      border: 1px solid #005aff !important;
      color: #005aff !important;
      border-radius: ${({ type }) =>
        type === ECalendarType.month ? "6px" : " 50%"};
    }

    ${({ active }) =>
      active
        ? css`
            background-color: #007bff !important;
            color: #fff !important;
          `
        : undefined};
    ${({ inRangeActive }) =>
      inRangeActive
        ? css`
            color: #616161 !important;
            border-radius: unset;
            border: unset !important;
          `
        : undefined}
    ${({ today }) =>
      today
        ? css`
            border: 1px solid #4d8cff;
            color: #005aff;
            border-radius: 50%;
          `
        : undefined}
  }
`;

export const RangeCalendar = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  gap: 24px;
`;

export const ContentWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
3;
