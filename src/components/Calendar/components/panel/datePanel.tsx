import { daysInWeek } from "../../const";
import { useCalendar } from "../../context/calendar";
import { CalendarItem, CalendarGrid } from "../../styles.css";
import { handleActiveItem } from "../../utils/calendar";

interface IProps {
  currentDate: Date;
}

export default function DatePanel({ currentDate }: IProps) {
  const { selectedDates, handleDatesClick, minDate, maxDate } = useCalendar();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  const calendarGrid: JSX.Element[] = [];

  const handleClickItem = (day: Date) => {
    handleDatesClick(day);
  };

  // Fill the preceding days of the current month
  for (let i = 0; i < firstDayOfWeek; i++) {
    const day = new Date(currentYear, currentMonth, -firstDayOfWeek + i + 1);
    const { isActiveStart, isActiveEnd, isInRangeActive } = handleActiveItem(
      selectedDates,
      day
    );
    const isDisabled = minDate && day < minDate;
    calendarGrid.push(
      <CalendarItem
        key={`${currentMonth - 1}-${i}`}
        active={isActiveStart || isActiveEnd ? 1 : 0}
        inRangeActive={isInRangeActive ? 1 : 0}
        disable={isDisabled ? 1 : 0}
        blur={1}
        onClick={() => handleClickItem(day)}
      >
        {day.getDate()}
      </CalendarItem>
    );
  }

  // Fill the days of the current month

  for (let i = 1; i <= daysInMonth; i++) {
    const day = new Date(currentYear, currentMonth, i);
    const { isActiveStart, isActiveEnd, isInRangeActive } = handleActiveItem(
      selectedDates,
      day
    );
    const isDisabled = (maxDate && day > maxDate) || (minDate && day < minDate);
    calendarGrid.push(
      <CalendarItem
        key={`${currentMonth}-${i}`}
        active={isActiveStart || isActiveEnd ? 1 : 0}
        inRangeActive={isInRangeActive ? 1 : 0}
        disable={isDisabled ? 1 : 0}
        onClick={() => handleClickItem(day)}
      >
        {i}
      </CalendarItem>
    );
  }

  // Fill the remaining days of the calendar grid
  const lastDayOfWeek = lastDayOfMonth.getDay();
  for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
    const day = new Date(currentYear, currentMonth + 1, i);
    const { isActiveStart, isActiveEnd, isInRangeActive } = handleActiveItem(
      selectedDates,
      day
    );
    const isDisabled = maxDate && day > maxDate;
    calendarGrid.push(
      <CalendarItem
        key={`day-${daysInMonth + i}`}
        active={isActiveStart || isActiveEnd ? 1 : 0}
        inRangeActive={isInRangeActive ? 1 : 0}
        disable={isDisabled ? 1 : 0}
        blur={1}
        onClick={() => handleClickItem(day)}
      >
        {day.getDate()}
      </CalendarItem>
    );
  }

  return (
    <CalendarGrid>
      {daysInWeek.map((item) => (
        <CalendarItem key={item} disable={0}>
          {item}
        </CalendarItem>
      ))}
      {calendarGrid.map((elm) => elm)}
    </CalendarGrid>
  );
}
