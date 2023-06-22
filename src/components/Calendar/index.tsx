import { useImperativeHandle, useState } from "react";
import { CalendarContext, TCalendarContext } from "./context/calendar";
import {
  ECalendarStyle,
  ECalendarType,
  ICalendarProps,
  TCalendarRef,
} from "./types";
import { CalendarContainer, CalendarFooter } from "./styles.css";
import HeaderCalendar from "./components/header";
import CalendarRangePanel from "./components/rangePanel";
import CalendarPanel from "./components/panel";
import React from "react";

const Calendar = React.forwardRef(function CalendarComponent(
  {
    initDates,
    type = ECalendarType.date,
    pickerType = ECalendarStyle.single,
    calendarStyle = ECalendarStyle.single,
    min,
    max,
    handleDateClick,
  }: ICalendarProps,
  ref: React.ForwardedRef<TCalendarRef>
) {
  const [currentDate, setCurrentDate] = useState<Date>(
    (initDates && initDates[0]) ?? new Date()
  );
  const [selectedDates, setSelectedDates] = useState<Date[]>(initDates ?? []);
  const today = new Date();

  const onPicker = (date: Date | null) => {
    if (!date) {
      setCurrentDate(new Date());
      setSelectedDates([]);
      return;
    }

    const selectedStartMonth = date.getMonth();
    const selectedStartYear = date.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    if (
      selectedStartMonth !== currentMonth ||
      selectedStartYear !== currentYear
    ) {
      setCurrentDate(date);
    }

    const datesRange = selectedDates;
    const startDate = datesRange[0];
    const endDate = datesRange[1];
    switch (pickerType) {
      case ECalendarStyle.range:
        if ((!endDate && date > startDate) || date > endDate) {
          handleDateClick([startDate, date]);
          setSelectedDates([startDate, date]);
        } else if (!endDate && date < startDate) {
          handleDateClick([date, startDate]);
          setSelectedDates([date, startDate]);
        } else if (datesRange && datesRange.length > 1 && date < startDate) {
          handleDateClick([date, endDate]);
          setSelectedDates([date, endDate]);
        } else {
          handleDateClick([date]);
          setSelectedDates([date]);
        }

        break;

      default:
        handleDateClick([date]);
        setSelectedDates([date]);
        break;
    }
  };

  useImperativeHandle(ref, () => ({ onPicker }));

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
    handleDatesClick: onPicker,
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
        {today.toDateString() === selectedDates[0]?.toDateString() ||
        calendarStyle === ECalendarStyle.range ? null : (
          <CalendarFooter>
            <span
              onClick={() => {
                setSelectedDates([today]);
                setCurrentDate(today);
                onPicker(today);
              }}
            >
              Today
            </span>
          </CalendarFooter>
        )}
      </CalendarContainer>
    </CalendarContext.Provider>
  );
});

export default Calendar;
