import { Button } from "@/components/Button/styles.css";
import { ButtonGroup, CalendarHeader, ContentWrap } from "../styles.css";
import {
  ArrowLeft,
  ArrowRight,
  DoubleArrowLeft,
  DoubleArrowRight,
} from "@/components/Icons/Arrow";
import { ECalendarStyle, ECalendarType } from "../types";
import { useCalendar } from "../context/calendar";

interface IProps {
  onClickNext(): void;
  onClickPrev(): void;
  onClickSupperNext(): void;
  onClickSupperPrev(): void;
}

export default function HeaderCalendar({
  onClickNext,
  onClickPrev,
  onClickSupperNext,
  onClickSupperPrev,
}: IProps) {
  const { currentDate, type, calendarStyle } = useCalendar();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const newDate = new Date(currentYear, currentMonth + 1, 1);

  const renderTitleSingleCalendar = () => {
    switch (type) {
      case ECalendarType.month:
        return <span>{currentDate?.getFullYear()}</span>;

      default:
        return (
          <span>
            {currentDate?.toLocaleString("en", {
              month: "short",
              year: "numeric",
            }) ?? ""}
          </span>
        );
    }
  };
  const renderTitleRangeCalendar = () => {
    switch (type) {
      case ECalendarType.month:
        return (
          <ContentWrap>
            <span>{currentDate?.getFullYear()}</span>
            <span>{currentDate?.getFullYear() + 1}</span>
          </ContentWrap>
        );

      default:
        return (
          <ContentWrap>
            <span>
              {currentDate?.toLocaleDateString("en", {
                month: "short",
                year: "numeric",
              }) ?? ""}
            </span>
            <span></span>
            <span>
              {newDate?.toLocaleDateString("en", {
                month: "short",
                year: "numeric",
              }) ?? ""}
            </span>
          </ContentWrap>
        );
    }
  };

  return (
    <CalendarHeader>
      <ButtonGroup>
        <Button onClick={onClickSupperPrev}>
          <DoubleArrowLeft />
        </Button>
        {type === ECalendarType.date && (
          <Button onClick={onClickPrev}>
            <ArrowLeft />
          </Button>
        )}
      </ButtonGroup>
      {calendarStyle === ECalendarStyle.single
        ? renderTitleSingleCalendar()
        : renderTitleRangeCalendar()}
      <ButtonGroup>
        {type === ECalendarType.date && (
          <Button onClick={onClickNext}>
            <ArrowRight />
          </Button>
        )}

        <Button onClick={onClickSupperNext}>
          <DoubleArrowRight />
        </Button>
      </ButtonGroup>
    </CalendarHeader>
  );
}
