import dayjs from "dayjs";

export function nowDate() {
  const today = new Date();
  const date = dayjs(today).format("YYYY-MM-DD");
  return date;
}

nowDate();
