import { HTMLInputTypeAttribute, useState } from "react";
import Calendar from "../Calendar";
import { InputDate } from "../Input/styles.css";
import { PickerContainer } from "./styles.css";

export default function DatePicker() {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>("text");
  const handleClickCalendar = (dates: Date[]) => {
    console.log(dates, "date when click calendar");
  };

  return (
    <PickerContainer>
      <InputDate
        type={inputType}
        onChange={(e) => console.log(e.target.value)}
        onFocus={() => setInputType("date")}
        onBlur={() => setInputType("text")}
        placeholder="DD/MM/YYY"
      />
      <Calendar handleDateClick={handleClickCalendar} />
    </PickerContainer>
  );
}
