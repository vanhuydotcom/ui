import { useCalendar } from "../context/calendar";
import { ECalendarType } from "../types";
import DatePanel from "./panel/datePanel";
import MonthPanel from "./panel/monthPanel";

export default function CalendarPanel() {
  const { currentDate, type } = useCalendar();

  const renderPanel = () => {
    switch (type) {
      case ECalendarType.month:
        return <MonthPanel currentDate={currentDate} />;
      default:
        return <DatePanel currentDate={currentDate} />;
    }
  };

  return renderPanel();
}
