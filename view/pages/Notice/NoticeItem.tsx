import _React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ModalData, Notice } from "../../../types";

interface Props {
  data: Notice;
}
export default function NoticeItem({ data }: Props) {
  const dispatch = useDispatch();

  const noticeClick = (): void => {
    const sendData: ModalData = {
      title: data?.NOTICE_TITLE,
      subTitle: "공지사항",
      jsx: <span>{data?.NOTICE_CONTENTS}</span>,
    };
    dispatch({
      type: "modalData",
      payload: sendData,
    });
  };

  return <Container onClick={noticeClick}>{data?.NOTICE_TITLE}</Container>;
}

const Container = styled.section`
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border-radius: 6px;
  box-shadow: 0 1px 3px #00000010;
  font-size: 13px;
  color: #555;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;
