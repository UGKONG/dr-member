import { useMemo } from "react";
import { useDate } from "../../../lib/utils";

interface Lang {
  ko: string;
  en: string;
}
export interface YmType {
  year: Lang;
  month: Lang;
}
interface YmStatus {
  prev: YmType;
  now: YmType;
  next: YmType;
}
const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augus",
  "September",
  "October",
  "Novembe",
  "December",
];
export default function calendarHeaderMemo(activeDate: string): YmStatus {
  const memo = useMemo<YmStatus>(() => {
    let date = new Date(activeDate);
    date.setDate(1);

    date.setMonth(date.getMonth() - 1);
    let [prevY, prevM] = useDate(date, false)?.split("-");
    let prev = {
      year: { ko: prevY, en: prevY },
      month: { ko: prevM, en: monthList[Number(prevM) - 1]?.slice(0, 3) },
    };

    date.setMonth(date.getMonth() + 1);
    let [nowY, nowM] = useDate(date, false)?.split("-");
    let now = {
      year: { ko: nowY, en: nowY },
      month: { ko: nowM, en: monthList[Number(nowM) - 1] },
    };

    date.setMonth(date.getMonth() + 1);
    let [nextY, nextM] = useDate(date, false)?.split("-");
    let next = {
      year: { ko: nextY, en: nextY },
      month: { ko: nextM, en: monthList[Number(nextM) - 1]?.slice(0, 3) },
    };

    return { prev, now, next };
  }, [activeDate]);

  return memo;
}
