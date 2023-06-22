import { useEffect, useRef, useState } from "react";
import Calendar from "../../Calendar";
import {
  CalendarWrap,
  Icon,
  InputDate,
  InputWrap,
  PickerContainer,
} from "../styles.css";
import { datetimeFormat, formatDateFromDDMMYYY } from "@/utils/dateTimeFormat";
import { TCalendarRef } from "../../Calendar/types";
import { CalendarIcon } from "../../Icons/Calendar";
import { IDatePickerProps } from "../type";
import { REGEXP_DDMMYYYY } from "../const";

export default function DatePicker({
  defaultDate,
  onChange,
  min,
  max,
  type,
  pickerType,
  calendarStyle,
}: IDatePickerProps) {
  const [date, setDate] = useState(defaultDate);
  const [inputValue, setInputValue] = useState("");
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const regex = REGEXP_DDMMYYYY;

  const calendarRef = useRef<TCalendarRef>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickCalendar = (dates: Date[]) => {
    const date = dates[0];
    // setIsShowCalendar(false);
    const dateString = datetimeFormat(date);
    setInputValue(dateString);
    setDate(date);
    onChange && onChange(date);
  };

  const validate = () => {
    if (!inputValue || !regex.test(inputValue)) {
      setInputValue("");
      setDate(null);
      onChange && onChange(null);
    }
  };

  const handleChangeInput = (value: string) => {
    setInputValue(value);
    if (regex.test(value) && calendarRef.current && inputRef.current) {
      const date = formatDateFromDDMMYYY(value);
      calendarRef.current.onPicker(date);
      setTimeout(() => inputRef.current?.blur(), 100);
    }
    if (value === "" && calendarRef.current) {
      calendarRef.current.onPicker(null);
    }
  };

  const onShowCalendar = () => {
    setIsShowCalendar(!isShowCalendar);
  };

  useEffect(() => {
    if (date) {
      const value = datetimeFormat(date);
      setInputValue(value);
    }
  }, [date]);
  return (
    <PickerContainer>
      <InputWrap>
        <Icon onClick={onShowCalendar} absolute={1}>
          <CalendarIcon />
        </Icon>
        <InputDate
          ref={inputRef}
          type="text"
          value={inputValue}
          onBlur={validate}
          onFocus={() => setIsShowCalendar(true)}
          onChange={(e) => handleChangeInput(e.target.value ?? "")}
          placeholder="dd/mm/yyy"
        />
      </InputWrap>
      <CalendarWrap show={isShowCalendar ? 1 : 0}>
        {isShowCalendar && (
          <Calendar
            ref={calendarRef}
            initDates={date ? [date] : null}
            min={min}
            max={max}
            type={type}
            pickerType={pickerType}
            calendarStyle={calendarStyle}
            handleDateClick={handleClickCalendar}
          />
        )}
      </CalendarWrap>
    </PickerContainer>
  );
}
