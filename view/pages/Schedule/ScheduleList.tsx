import _React, { useMemo } from "react";
import styled from "styled-components";
import { Schedule } from "../../../types";
import { MainTitle } from "../Main";
import ActiveDateInfo from "./ActiveDateInfo";
import ScheduleTimeItem from "./ScheduleTimeItem";

interface Props {
  activeDate: string;
  scheduleList: Array<Schedule>;
}
export default function ScheduleList({ activeDate, scheduleList }: Props) {
  type Count = { total: number; psn: number; grp: number };
  const count = useMemo<Count>(() => {
    let total = scheduleList?.length;
    let psn = scheduleList?.filter((x) => x?.SCHEDULE_TYPE === 1)?.length;
    let grp = scheduleList?.filter((x) => x?.SCHEDULE_TYPE === 2)?.length;
    return { total, psn, grp };
  }, [scheduleList]);

  // 스케줄 리스트를 시간 별로 분리
  const scheduleTimeGroup = useMemo<Array<string>>(() => {
    let startTimeList: Array<string> = scheduleList?.map((x) =>
      x?.SCHEDULE_START?.split(" ")[1]?.slice(0, 2)
    );
    let hourList = [...new Set(startTimeList)];
    return hourList;
  }, [scheduleList]);

  // 해당 시간 때의 스케줄 리스트 찾기
  const findScheduleList = (hour: string): Array<Schedule> => {
    let find = scheduleList?.filter((x) => {
      let time = x?.SCHEDULE_START?.split(" ")[1];
      return time?.split(":")[0] === hour;
    });
    return find;
  };

  return (
    <Container>
      <MainTitle>수업 리스트</MainTitle>
      <ActiveDateInfo activeDate={activeDate} count={count} />
      <List>
        {count?.total === 0 ? (
          <li>해당일에 수업이 없습니다.</li>
        ) : (
          scheduleTimeGroup?.map((hour) => (
            <ScheduleTimeItem
              key={hour}
              hour={hour}
              scheduleList={findScheduleList(hour)}
            />
          ))
        )}
      </List>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
`;
const List = styled.ul`
  flex: 1;
  overflow: auto;
`;
