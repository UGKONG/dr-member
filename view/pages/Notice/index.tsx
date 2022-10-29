import _React, { useEffect, useState } from "react";
import { Notice } from "../../../types";
import Container from "../../components/Container";
import NoticeItem from "./NoticeItem";

export default function Notice() {
  const [noticeList, setNoticeList] = useState<Array<Notice>>([]);

  const getNoticeList = (): void => {
    const data = require("../../data.json").noticeList;
    setNoticeList(data);
  };

  useEffect(getNoticeList, []);

  return (
    <Container>
      {noticeList?.map((item) => (
        <NoticeItem key={item?.NOTICE_SQ} data={item} />
      ))}
    </Container>
  );
}
