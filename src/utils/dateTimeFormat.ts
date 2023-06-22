import { REGEXP_DDMMYYYY } from "@/components/DatePicker/const";

function formatDateFromDDMMYYY(value: string): Date | null {
  if (!REGEXP_DDMMYYYY.test(value)) return null;

  const [day, month, year] = value.split("/");
  const formattedDateString = `${month}/${day}/${year}`;
  const date = new Date(formattedDateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  return date;
}

function datetimeFormat(
  date: Date,
  locale?: string,
  options?: Intl.DateTimeFormatOptions
): string {
  const newDate = date;
  const formatter = new Intl.DateTimeFormat(
    locale ?? "vi-VN",
    options ?? { dateStyle: "short" }
  );
  return formatter.format(newDate);
}

export { datetimeFormat, formatDateFromDDMMYYY };
