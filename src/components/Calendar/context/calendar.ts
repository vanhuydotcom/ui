import React, { useContext } from "react";
import { ECalendarType, ECalendarStyle } from "../types";

export type TCalendarContext = {
  type?: ECalendarType;
  currentDate: Date;
  calendarStyle?: ECalendarStyle;
  pickerType?: ECalendarStyle;
  minDate?: Date | null;
  maxDate?: Date | null;
  selectedDates: Date[] | null;
  handleDatesClick: (date: Date) => void;
};

export const initCalendarState: TCalendarContext = {
  type: ECalendarType.date,
  calendarStyle: ECalendarStyle.single,
  currentDate: new Date(),
  minDate: null,
  maxDate: null,
  selectedDates: null,
  handleDatesClick: () => {},
};

const CalendarContext =
  React.createContext<TCalendarContext>(initCalendarState);

const useCalendar = () => useContext(CalendarContext);

export { useCalendar, CalendarContext };
