import { useCalendar } from "../context/calendar";
import { RangeCalendar } from "../styles.css";
import { ECalendarType } from "../types";
import DatePanel from "./panel/datePanel";
import MonthPanel from "./panel/monthPanel";

export default function CalendarRangePanel() {
  const { currentDate, type } = useCalendar();
  const currentMonth = currentDate.getMonth();
  const crrentYear = currentDate.getFullYear();
  const nextMonth = currentMonth + 1;
  const nextYear = crrentYear + 1;
  const newMonth = new Date(crrentYear, nextMonth);
  const newYear = new Date(nextYear, currentMonth);

  const renderPanel = () => {
    switch (type) {
      case ECalendarType.month:
        return (
          <RangeCalendar>
            <MonthPanel currentDate={currentDate} />
            <MonthPanel currentDate={newYear} />
          </RangeCalendar>
        );

      default:
        return (
          <RangeCalendar>
            <DatePanel currentDate={currentDate} />
            <DatePanel currentDate={newMonth} />
          </RangeCalendar>
        );
    }
  };

  return renderPanel();
}
