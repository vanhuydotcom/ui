import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Calendar from "../../Calendar";
import {
  CalendarWrap,
  Icon,
  InputDate,
  InputRange,
  InputWrap,
  PickerContainer,
} from "../styles.css";
import { datetimeFormat, formatDateFromDDMMYYY } from "@/utils/dateTimeFormat";
import { TCalendarRef } from "../../Calendar/types";
import { CalendarIcon } from "../../Icons/Calendar";
import { IDatePickerProps, IRangePickerProps } from "../type";
import { REGEXP_DDMMYYYY } from "../const";
import { Input } from "@/components/Input/styles.css";

export default function RangePicker({
  defaultDates,
  onChange,
  min,
  max,
  type,
  pickerType,
  calendarStyle,
}: IRangePickerProps) {
  const [dates, setDates] = useState(defaultDates);
  const [startValue, setStartValue] = useState<string>("");
  const [endValue, setEndValue] = useState<string>("");

  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const regex = REGEXP_DDMMYYYY;

  const calendarRef = useRef<TCalendarRef>(null);
  const inputStartRef = useRef<HTMLInputElement>(null);
  const inputEndRef = useRef<HTMLInputElement>(null);

  const handleClickCalendar = (dates: Date[]) => {
    setDates(dates);
    const startDate = datetimeFormat(dates[0]);
    const endDate = datetimeFormat(dates[1]);

    setStartValue(startDate);
    setEndValue(endDate);

    onChange && onChange(dates);
    if (dates && dates.length > 1) {
      setIsShowCalendar(false);
    }
  };

  const validate = (value: string) => {
    if (!regex.test(value) || !value) {
      setStartValue("");
      setEndValue("");
      onChange && onChange(null);
    }
  };

  const handleChangeInputStart = (value: string) => {
    setStartValue(value);
    if (regex.test(value) && calendarRef.current) {
      const date = formatDateFromDDMMYYY(value);
      calendarRef.current.onPicker(date);
      setTimeout(() => inputEndRef.current?.focus(), 100);
    }
    if (!value && calendarRef.current) {
      setEndValue("");
      calendarRef.current.onPicker(null);
    }
  };
  const handleChangeInputEnd = (value: string) => {
    setEndValue(value);
    if (regex.test(value) && calendarRef.current) {
      const date = formatDateFromDDMMYYY(value);
      calendarRef.current.onPicker(date);
      setTimeout(() => inputEndRef.current?.blur(), 100);
    }
    if (!value && calendarRef.current) {
      calendarRef.current.onPicker(null);
    }
  };

  const onShowCalendar = () => {
    setIsShowCalendar(!isShowCalendar);
  };

  useEffect(() => {
    if (dates) {
      const startDate = dates.length > 0 ? datetimeFormat(dates[0]) : "";
      const endDate = dates.length > 1 ? datetimeFormat(dates[1]) : "";
      setStartValue(startDate);
      setEndValue(endDate);
    }
  }, [dates]);

  return (
    <PickerContainer>
      <InputRange>
        <Icon onClick={onShowCalendar}>
          <CalendarIcon />
        </Icon>
        <Input
          ref={inputStartRef}
          type="text"
          value={startValue}
          onBlur={() => validate(startValue)}
          onFocus={() => setIsShowCalendar(true)}
          onChange={(e) => handleChangeInputStart(e.target.value ?? "")}
          placeholder="DD/MM/YYY"
        />
        <span>-</span>
        <Input
          ref={inputEndRef}
          type="text"
          value={endValue ?? ""}
          disabled={!startValue || !!endValue}
          onBlur={() => validate(endValue)}
          onFocus={() => setIsShowCalendar(true)}
          onChange={(e) => handleChangeInputEnd(e.target.value ?? "")}
          placeholder="DD/MM/YYY"
        />
      </InputRange>
      <CalendarWrap show={isShowCalendar ? 1 : 0}>
        {isShowCalendar && (
          <Calendar
            ref={calendarRef}
            initDates={dates}
            pickerType={pickerType}
            calendarStyle={calendarStyle}
            min={min}
            max={max}
            type={type}
            handleDateClick={handleClickCalendar}
          />
        )}
      </CalendarWrap>
    </PickerContainer>
  );
}
