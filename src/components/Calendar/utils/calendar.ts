export const handleActiveItem = (selectedDates: Date[] | null, date: Date) => {
  const isSelectedStart = selectedDates && selectedDates.length > 0;
  const isSelectedEnd = selectedDates && selectedDates.length > 1;

  const isActiveStart =
    isSelectedStart && date.toDateString() === selectedDates[0]?.toDateString();
  const isActiveEnd =
    isSelectedEnd && date.toDateString() === selectedDates[1]?.toDateString();

  let isInRangeActive = null;
  if (isSelectedStart && isSelectedEnd) {
    isInRangeActive = selectedDates[0] < date && date < selectedDates[1];
  }
  return { isActiveStart, isActiveEnd, isInRangeActive };
};
