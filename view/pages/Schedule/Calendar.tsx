import _React, { useState } from "react";
import styled from "styled-components";
import { Lang, SetState } from "../../../types";
import CalendarHeader from "./CalendarHeader";
import CalendarWeek from "./CalendarWeek";
import CalendarDateList from "./CalendarDateList";

interface Props {
  activeDate: string;
  setActiveDate: SetState<string>;
}
export default function Calendar({ activeDate, setActiveDate }: Props) {
  // 언어 옵션
  const [lang, setLang] = useState<Lang>("ko");
  const [dateViewType, setDateViewType] = useState<"M" | "W">("M");

  return (
    <Container>
      <CalendarHeader
        activeDate={activeDate}
        setActiveDate={setActiveDate}
        lang={lang}
        setLang={setLang}
      />
      <Body>
        {dateViewType === "M" && <CalendarWeek lang={lang} />}
        <CalendarDateList
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          dateViewType={dateViewType}
          setDateViewType={setDateViewType}
        />
      </Body>
    </Container>
  );
}

const Container = styled.section``;
const Body = styled.article``;
