import _React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Notice } from "../../../types";
import Container from "../../components/Container";
import NoticeItem from "../Notice/NoticeItem";
import MainWidget from "./MainWidget";
import SubWidget from "./SubWidget";
import subWidgetListMemo from "./subWidgetListMemo";
import jsonData from "../../data.json";

export default function Main() {
  const widgetList = subWidgetListMemo();
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
        {widgetList?.map((item) => (
          <SubWidget key={item?.path} data={item} />
        ))}
      </WidgetList>

      <MainTitle>공지사항</MainTitle>
      <NoticeList>
        {noticeList?.map((item) => (
          <NoticeItem key={item?.NOTICE_SQ} data={item} />
        ))}
      </NoticeList>
    </Container>
  );
}

const MainTitle = styled.h2`
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
const NoticeList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 400px;
  overflow: auto;
`;
