import _React, { useMemo } from "react";
import styled from "styled-components";
import type { Schedule } from "../../../types";

type ScheduleType = "PSN" | "GRP";
type ScheduleTypeText = "개인레슨" | "그룹레슨";
interface Props {
  data: Schedule;
}
export default function ScheduleItem({ data }: Props) {
  const scheduleType = useMemo<ScheduleType>(() => {
    return data?.SCHEDULE_TYPE === 1 ? "PSN" : "GRP";
  }, [data?.SCHEDULE_TYPE]);

  const scheduleTypeText = useMemo<ScheduleTypeText>(() => {
    return data?.SCHEDULE_TYPE === 1 ? "개인레슨" : "그룹레슨";
  }, [data?.SCHEDULE_TYPE]);

  type Time = { start: string; end: string };
  const time = useMemo<Time>(() => {
    let start = data?.SCHEDULE_START?.split(" ")[1]?.slice(0, 5);
    let end = data?.SCHEDULE_END?.split(" ")[1]?.slice(0, 5);
    return { start, end };
  }, [data?.SCHEDULE_START, data?.SCHEDULE_END]);

  const isFull = useMemo<boolean>(() => {
    let isPSN = scheduleType === "PSN";
    let countValidate = data?.SCHEDULE_COUNT <= data?.RESERVATION_COUNT;

    if (isPSN) {
      if (countValidate) return true;
      return false;
    } else {
      let waitCountValidate =
        data?.SCHEDULE_WAIT_COUNT <= data?.RESERVATION_WAIT_COUNT;
      if (countValidate && waitCountValidate) return true;
      return false;
    }
  }, [
    scheduleType,
    data?.SCHEDULE_COUNT,
    data?.RESERVATION_COUNT,
    data?.SCHEDULE_WAIT_COUNT,
    data?.RESERVATION_WAIT_COUNT,
  ]);

  return (
    <Container scheduleType={scheduleType}>
      <Header>
        <HeaderText>{scheduleTypeText}</HeaderText>
        <HeaderText>강사명: {data?.TEACHER_NAME}</HeaderText>
      </Header>
      <ScheduleName>{data?.SCHEDULE_TITLE}</ScheduleName>
      <Text>
        시간: {time?.start} ~ {time?.end}
      </Text>
      {scheduleType === "PSN" ? (
        <></>
      ) : (
        <>
          <Text>
            예약인원: {data?.RESERVATION_COUNT}/{data?.SCHEDULE_COUNT}명
          </Text>
          <Text>
            대기인원: {data?.RESERVATION_WAIT_COUNT}/{data?.SCHEDULE_WAIT_COUNT}
            명
          </Text>
        </>
      )}

      {isFull && <FullDiv>인원마감</FullDiv>}
    </Container>
  );
}

type ContainerProps = { scheduleType: ScheduleType };
const Container = styled.button<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  color: #fff;
  word-break: break-all;
  border-radius: 6px;
  margin-bottom: 8px;
  background-color: ${(x) =>
    x?.scheduleType === "PSN" ? "#6083e2" : "#cfab28"};
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderText = styled.p`
  font-size: 10px;
  color: #eee;
`;
const ScheduleName = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
const Text = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
`;
const FullDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000040;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
`;
