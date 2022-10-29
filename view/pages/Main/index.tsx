import _React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Notice } from "../../../types";
import Container from "../../components/Container";
import NoticeItem from "../Notice/NoticeItem";
import MainWidget from "./MainWidget";
import SubWidget from "./SubWidget";
import serviceWidgetListMemo from "./serviceWidgetListMemo";
import myInfoWidgetListMemo from "./myInfoWidgetListMemo";
import jsonData from "../../data.json";

export default function Main() {
  const serviceList = serviceWidgetListMemo();
  const myInfoList = myInfoWidgetListMemo();
  const [noticeList, setNoticeList] = useState<Array<Notice>>([]);

  const getNoticeList = (): void => {
    const data = jsonData?.noticeList;
    setNoticeList(data);
  };

  useEffect(getNoticeList, []);

  return (
    <Container>
      <MainTitle>체형측정</MainTitle>
      <MainWidget imgName="health.jpg" path="/health" />

      <MainTitle>서비스</MainTitle>
      <WidgetList>
        {serviceList?.map((item) => (
          <SubWidget key={item?.path} data={item} />
        ))}
      </WidgetList>

      <MainTitle>정보</MainTitle>
      <WidgetList>
        {myInfoList?.map((item) => (
          <SubWidget key={item?.path} data={item} />
        ))}
      </WidgetList>
    </Container>
  );
}

export const MainTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 1px;
  margin-top: 40px;

  &:first-of-type {
    margin-top: 0;
  }
`;
const WidgetList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
