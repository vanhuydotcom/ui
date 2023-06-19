import { months } from "../../const";
import { useCalendar } from "../../context/calendar";
import { CalendarGrid, CalendarItem } from "../../styles.css";
import { ECalendarType } from "../../types";
import { handleActiveItem } from "../../utils/calendar";

interface IProps {
  currentDate: Date;
}

export default function MonthPanel({ currentDate }: IProps) {
  const { selectedDates, handleDatesClick, minDate, maxDate } = useCalendar();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate?.getMonth();

  const getNewSeletedDates = () => {
    let selectedMoths: Date[] = [];
    if (!selectedDates || selectedDates?.length < 1) {
      selectedMoths = [new Date(currentYear, currentMonth, 1)];
      return selectedMoths;
    }
    const selectedStartYear = selectedDates[0]?.getFullYear();
    const selectedStartMonth = selectedDates[0]?.getMonth();
    const selectedEndYear = selectedDates[1]?.getFullYear();
    const selectedEndMonth = selectedDates[1]?.getMonth();

    const selectdStartMonths = new Date(
      selectedStartYear,
      selectedStartMonth,
      1
    );
    const selectdEndMonths = new Date(selectedEndYear, selectedEndMonth, 1);
    selectedMoths = [selectdStartMonths, selectdEndMonths];
    return selectedMoths;
  };

  return (
    <CalendarGrid type={ECalendarType.month}>
      {months.map((item, _) => {
        const month = new Date(currentYear, item.id, 1);
        const { isActiveEnd, isActiveStart, isInRangeActive } =
          handleActiveItem(getNewSeletedDates(), month);
        const isDisabled =
          (maxDate && month > maxDate) || (minDate && month < minDate);

        return (
          <CalendarItem
            key={item.id}
            type={ECalendarType.month}
            active={isActiveEnd || isActiveStart ? 1 : 0}
            inRangeActive={isInRangeActive ? 1 : 0}
            disable={isDisabled ? 1 : 0}
            onClick={() => handleDatesClick(month)}
          >
            {item.sortName}
          </CalendarItem>
        );
      })}
    </CalendarGrid>
  );
}
