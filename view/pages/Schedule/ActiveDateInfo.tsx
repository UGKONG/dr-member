import _React, { useMemo } from "react";
import styled from "styled-components";

const dayStringList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
interface Props {
  activeDate: string;
  count: { total: number; psn: number; grp: number };
}
export default function ActiveDateInfo({ activeDate, count }: Props) {
  type DateData = { dateNum: number; dayString: string };
  const dateData = useMemo<DateData>(() => {
    let date = new Date(activeDate);
    let dateNum = date?.getDate();
    let dayString = dayStringList[date?.getDay()];
    return { dateNum, dayString };
  }, [activeDate]);

  const choiceDateKo = useMemo(() => {
    let [y, m, d] = activeDate?.split("-");
    let result = `${y}년 ${m}월 ${d}일`;
    return result;
  }, [activeDate]);

  return (
    <Container>
      <Left>
        <DateNum>{dateData?.dateNum}</DateNum>
        <Day>{dateData?.dayString}</Day>
      </Left>
      <Right>
        <DateInfo>선택일: {choiceDateKo}</DateInfo>
        <OtherInfo>
          개인수업: {count?.psn}개 / 그룹수업: {count?.grp}개
        </OtherInfo>
      </Right>
    </Container>
  );
}

const Container = styled.article`
  height: 50px;
  display: flex;
  margin-bottom: 10px;
`;
const Left = styled.div`
  width: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #555;
  line-height: 18px;
`;
const DateNum = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
const Day = styled.p`
  font-size: 12px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5px;
`;
const DateInfo = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #555;
  letter-spacing: 1px;
`;
const OtherInfo = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #555;
  letter-spacing: 1px;
`;
