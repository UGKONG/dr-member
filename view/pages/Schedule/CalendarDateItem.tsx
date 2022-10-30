import _React, { useMemo } from "react";
import styled from "styled-components";
import { useDate } from "../../../lib/utils";
import { SetState } from "../../../types";

const dayList = ["일", "월", "화", "수", "목", "금", "토"];
interface Props {
  year: string;
  month: string;
  date: string;
  startDay: number;
  activeDate: string;
  setActiveDate: SetState<string>;
  dateViewType: "M" | "W";
}
export default function CalendarDateItem({
  year,
  month,
  date,
  startDay,
  activeDate,
  setActiveDate,
  dateViewType,
}: Props) {
  // 보기 타입이 주단위 일때
  const isWeekView = useMemo<boolean>(() => {
    return dateViewType === "W";
  }, [dateViewType]);

  // 전체 일자 (YYYY-MM-DD)
  type FullDate = { date: string; day: string };
  const fullDate = useMemo<FullDate>(() => {
    let dateString: string = year + "-" + month + "-" + date;
    let dateObj: Date = new Date(dateString);
    let day: number = dateObj?.getDay();
    return { date: useDate(dateObj, false), day: dayList[day] };
  }, [activeDate]);

  // 날짜 클릭
  const dateClick = (): void => {
    setActiveDate(fullDate?.date);
  };

  // 현재 날짜 Active
  const isActive = useMemo<boolean>(() => {
    return activeDate === fullDate?.date;
  }, [activeDate, fullDate]);

  return (
    <Container isWeekView={isWeekView} startDay={startDay} onClick={dateClick}>
      {isWeekView && <DayString day={fullDate?.day}>{fullDate?.day}</DayString>}
      <DateNum day={fullDate?.day} className={isActive ? "active" : ""}>
        {Number(date)}
      </DateNum>
      <DotList>{/* <Dot /> */}</DotList>
    </Container>
  );
}

type ContainerProps = { startDay: number; isWeekView: boolean };
const Container = styled.article<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  min-width: calc(100% / 7);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  &:first-of-type {
    margin-left: ${(x) =>
      x?.isWeekView ? 0 : "calc(100% / 7 * " + x?.startDay + ")"};
  }
`;
type WeekType = { day: string };
const DayString = styled.p<WeekType>`
  font-size: 13px;
  font-weight: 500;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(x) =>
    x?.day === "토" ? "#00f" : x?.day === "일" ? "#f00" : "#666666"};
`;
const DateNum = styled.div<WeekType>`
  min-width: 30px;
  min-height: 30px;
  max-width: 30px;
  max-height: 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 28px;
  color: ${(x) =>
    x?.day === "토" ? "#00f" : x?.day === "일" ? "#f00" : "#666666"};
  &.active {
    background-color: #398000a2;
    color: #fff;
  }
`;
const DotList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 16px;
  max-height: 16px;
`;
const Dot = styled.li`
  background-color: #fa4444;
  min-width: 4px;
  min-height: 4px;
  max-width: 4px;
  max-height: 4px;
  border-radius: 10px;
`;
