import { useState } from "react";
import { CalendarContext, TCalendarContext } from "./context/calendar";
import { ECalendarStyle, ECalendarType, ICalendarProps } from "./types";
import { CalendarContainer, CalendarFooter } from "./styles.css";
import HeaderCalendar from "./components/header";
import CalendarRangePanel from "./components/rangePanel";
import CalendarPanel from "./components/panel";

export default function Calendar({
  initDates,
  type = ECalendarType.date,
  pickerType = ECalendarStyle.single,
  calendarStyle = ECalendarStyle.single,
  min,
  max,
  handleDateClick,
}: ICalendarProps) {
  const [currentDate, setCurrentDate] = useState<Date>(
    (initDates && initDates[0]) ?? new Date()
  );
  const [selectedDates, setSelectedDates] = useState<Date[]>(initDates ?? []);
  const today = new Date();

  const handleClick = (date: Date) => {
    const selectedStartMonth = date.getMonth();

    switch (pickerType) {
      case ECalendarStyle.range:
        const datesRange = selectedDates;
        const startDate = datesRange[0];
        const endDate = datesRange[1];

        if ((!endDate && date > startDate) || date > endDate) {
          setSelectedDates([startDate, date]);
          handleDateClick([startDate, date]);
        } else if (!endDate && date < startDate) {
          setSelectedDates([date, startDate]);
          handleDateClick([date, startDate]);
        } else if (datesRange && datesRange.length > 1 && date < startDate) {
          setSelectedDates([date, endDate]);
          handleDateClick([date, endDate]);
        } else {
          setSelectedDates([date]);
          handleDateClick([date]);
        }

        break;

      default:
        if (selectedStartMonth !== currentDate.getMonth()) {
          setCurrentDate(date);
        }
        handleDateClick([date]);
        setSelectedDates([date]);
        break;
    }
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const currentMonth = prevDate?.getMonth();
      const currentYear = prevDate?.getFullYear();
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      return new Date(nextYear, nextMonth, 1);
    });
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const currentMonth = prevDate.getMonth();
      const currentYear = prevDate.getFullYear();
      const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      return new Date(previousYear, previousMonth, 1);
    });
  };

  const goToNextYear = () => {
    setCurrentDate((prevDate) => {
      const nextYear = prevDate?.getFullYear() + 1;
      const currentMonth = prevDate.getMonth();
      return new Date(nextYear, currentMonth, 1);
    });
  };

  const goToPreviousYear = () => {
    setCurrentDate((prevDate) => {
      const previousYear = prevDate?.getFullYear() - 1;
      const currentMonth = prevDate.getMonth();
      return new Date(previousYear, currentMonth, 1);
    });
  };

  const contextValue: TCalendarContext = {
    type: type,
    minDate: min,
    maxDate: max,
    calendarStyle: calendarStyle,
    pickerType: pickerType,
    currentDate: currentDate,
    selectedDates: selectedDates,
    handleDatesClick: handleClick,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      <CalendarContainer>
        <HeaderCalendar
          onClickNext={goToNextMonth}
          onClickPrev={goToPreviousMonth}
          onClickSupperNext={goToNextYear}
          onClickSupperPrev={goToPreviousYear}
        />
        {calendarStyle === ECalendarStyle.range ? (
          <CalendarRangePanel />
        ) : (
          <CalendarPanel />
        )}
        {today.toDateString() === selectedDates[0]?.toDateString() &&
        calendarStyle === ECalendarStyle.range ? null : (
          <CalendarFooter>
            <span
              onClick={() => {
                setSelectedDates([today]);
                setCurrentDate(today);
                handleClick(today);
              }}
            >
              Today
            </span>
          </CalendarFooter>
        )}
      </CalendarContainer>
    </CalendarContext.Provider>
  );
}
