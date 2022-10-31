import _React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Lang } from "../../../types";
import calendarHeaderMemo, { YmType } from "./calendarHeaderMemo";

interface Props {
  activeDate: string;
  setActiveDate: Dispatch<SetStateAction<string>>;
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
}
export default function CalendarHeader({
  activeDate,
  setActiveDate,
  lang,
  setLang,
}: Props) {
  // 현재 년월 표시, 양쪽 월 표시
  const ymStatus = calendarHeaderMemo(activeDate);

  // 양쪽 월 클릭
  const monthClick = ({ year, month }: YmType): void => {
    setActiveDate(year?.ko + "-" + month?.ko + "-" + "01");
  };

  // 언어 변경
  const langChange = () => {
    setLang((prev) => (prev === "en" ? "ko" : "en"));
  };

  return (
    <Container>
      <SideMonth onClick={() => monthClick(ymStatus?.prev)}>
        {ymStatus?.prev?.month[lang]}
        {lang === "ko" ? "월" : ""}
      </SideMonth>
      <NowMonth onClick={langChange}>
        {ymStatus?.now?.year[lang]}
        {lang === "ko" ? "년 " : ". "}
        {ymStatus?.now?.month[lang]}
        {lang === "ko" ? "월" : ""}
      </NowMonth>
      <SideMonth onClick={() => monthClick(ymStatus?.next)}>
        {ymStatus?.next?.month[lang]}
        {lang === "ko" ? "월" : ""}
      </SideMonth>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderBtn = styled.button`
  font-weight: 700;
  font-size: 16px;
  color: #31915c;
  padding: 0 0 10px;
`;
const NowMonth = styled(HeaderBtn)``;
const SideMonth = styled(HeaderBtn)`
  font-size: 12px;
  font-weight: 500;
  color: #76c79b;
  padding: 0 10px 10px;
`;
