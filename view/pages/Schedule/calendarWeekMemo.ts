import { useMemo } from "react";

interface Lang {
  ko: string;
  en: string;
}
export default function calendarWeekMemo(): Array<Lang> {
  const memo = useMemo<Array<Lang>>(
    () => [
      { ko: "일", en: "Sun" },
      { ko: "월", en: "Mon" },
      { ko: "화", en: "Tue" },
      { ko: "수", en: "Wed" },
      { ko: "목", en: "Thu" },
      { ko: "금", en: "Fri" },
      { ko: "토", en: "Sat" },
    ],
    []
  );

  return memo;
}
