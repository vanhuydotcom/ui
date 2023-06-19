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
  padding: 24px 16px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarGrid = styled.div<{ type?: ECalendarType }>`
  display: grid;
  padding: 16px;
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
export const CalendarItem = styled.div<{
  type?: ECalendarType;
  active?: 0 | 1;
  inRangeActive?: 0 | 1;
  blur?: 0 | 1;
  disable?: 0 | 1;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
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
  cursor: pointer;
  color: #333333;
  border-radius: 6px;
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
          background-color: #007bff;
          color: #fff;
        `
      : undefined}
       ${({ inRangeActive }) =>
    inRangeActive
      ? css`
          background-color: rgba(0, 123, 255, 0.4);
          color: #fff;
          border-radius: unset;
        `
      : undefined}
  ${({ blur }) =>
    blur
      ? css`
          opacity: 0;
          pointer-events: none !important;
          user-select: none !important;
        `
      : undefined}
`;

export const RangeCalendar = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

export const ContentWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
