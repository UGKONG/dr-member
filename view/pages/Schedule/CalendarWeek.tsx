import _React from "react";
import styled from "styled-components";
import { Lang } from "../../../types";
import calendarWeekMemo from "./calendarWeekMemo";

interface Props {
  lang: Lang;
}
export default function CalendarWeek({ lang }: Props) {
  // 요일 리스트
  const weekList = calendarWeekMemo();

  return (
    <Container>
      {weekList?.map((item, idx) => (
        <Week key={idx} day={item[lang]}>
          {item[lang] ?? "-"}
        </Week>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
type WeekType = { day: string };
const Week = styled.p<WeekType>`
  flex: 1;
  height: 30px;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(x) =>
    x?.day === "토" ? "#00f" : x?.day === "일" ? "#f00" : "#666666"};
`;
