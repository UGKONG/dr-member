import _React from "react";
import styled from "styled-components";
import type { Schedule } from "../../../types";
import ScheduleItem from "./ScheduleItem";

interface Props {
  hour: string;
  scheduleList: Array<Schedule>;
}
export default function ScheduleTimeItem({ hour, scheduleList }: Props) {
  return (
    <Container>
      <Left>{hour}:00</Left>
      <Right>
        {scheduleList?.map((item) => (
          <ScheduleItem key={item?.SCHEDULE_ID} data={item} />
        ))}
      </Right>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
`;
const Left = styled.div`
  width: 40px;
  font-size: 12px;
  color: #666666;
`;
const Right = styled.div`
  flex: 1;
  border-top: 1px solid #ddd;
  margin-top: 10px;
  padding: 10px 0;
`;
