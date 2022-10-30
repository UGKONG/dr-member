import _React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useMonthSpan } from "../../../lib/utils";
import { SetState } from "../../../types";
import CalendarDateItem from "./CalendarDateItem";

interface Props {
  activeDate: string;
  setActiveDate: SetState<string>;
  dateViewType: "M" | "W";
  setDateViewType: SetState<"M" | "W">;
}
export default function CalendarDateList({
  activeDate,
  setActiveDate,
  dateViewType,
  setDateViewType,
}: Props) {
  type MonthData = { dateList: Array<number>; startDay: number; date: string };
  const monthData = useMemo<MonthData>(() => {
    let currentDate = new Date(activeDate);
    let { dateCount, startDay, date } = useMonthSpan(currentDate);

    let dateList: Array<number> = [];
    for (let i = 1; i <= dateCount; i++) {
      dateList?.push(i);
    }
    return { dateList, startDay, date };
  }, [activeDate]);

  const viewTypeText = useMemo<"접기" | "열기">(() => {
    return dateViewType === "M" ? "접기" : "열기";
  }, [dateViewType]);

  const viewTypeChange = (): void => {
    setDateViewType((prev) => (prev === "M" ? "W" : "M"));
  };

  return (
    <Container>
      <DateList dateViewType={dateViewType}>
        {monthData?.dateList?.map((item) => (
          <CalendarDateItem
            key={item}
            startDay={monthData?.startDay}
            year={monthData?.date?.split("-")[0]}
            month={monthData?.date?.split("-")[1]}
            date={item < 10 ? "0" + item : String(item)}
            activeDate={activeDate}
            setActiveDate={setActiveDate}
            dateViewType={dateViewType}
          />
        ))}
      </DateList>
      <ViewTypeChangeBtn onClick={viewTypeChange}>
        <ViewTypeChangeContents>
          <ViewTypeText>{viewTypeText}</ViewTypeText>
        </ViewTypeChangeContents>
      </ViewTypeChangeBtn>
    </Container>
  );
}

const Container = styled.article``;
type DateListProps = { dateViewType: "M" | "W" };
const DateList = styled.div<DateListProps>`
  display: flex;
  flex-wrap: ${(x) => (x?.dateViewType === "M" ? "wrap" : "unset")};
  overflow: auto;
  transition: 0.3s;
`;
const ViewTypeChangeBtn = styled.button`
  width: 100%;
  padding: 10px 0 20px;
`;
const ViewTypeChangeContents = styled.div`
  width: 100%;
  height: 20px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  background-image: linear-gradient(#eeeeee00, #eeeeee);
`;
const ViewTypeText = styled.p`
  font-size: 10px;
  color: #999;
  letter-spacing: 2px;
`;
