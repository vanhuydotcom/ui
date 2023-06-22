import { ICalendarProps } from "../Calendar/types";

type TCalenDar = Omit<ICalendarProps, "handleDateClick">;

export interface IDatePickerProps extends TCalenDar {
  defaultDate: Date | null;
  onChange?: (value: Date | null) => void;
}
export interface IRangePickerProps extends TCalenDar {
  defaultDates: Date[] | null;
  onChange?: (values: Date[] | null) => void;
}
