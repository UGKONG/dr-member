import _React from "react";
import styled from "styled-components";
import { Notice } from "../../../types";

interface Props {
  data: Notice;
}
export default function NoticeItem({ data }: Props) {
  return <Container>{data?.NOTICE_TITLE}</Container>;
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
