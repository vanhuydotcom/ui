export enum ECalendarType {
  date = "date",
  month = "month",
  year = "year",
}

export enum ECalendarStyle {
  single = "single",
  range = "range",
}

export interface ICalendarProps {
  initDates?: Date[] | null;
  type?: ECalendarType;
  pickerType?: ECalendarStyle;
  calendarStyle?: ECalendarStyle;
  min?: Date | null;
  max?: Date | null;
  handleDateClick(dates: Date[] | null): void;
}

export type TCalendarRef = {
  onPicker(date: Date | null): void;
};
