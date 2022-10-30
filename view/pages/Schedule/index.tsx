import _React, { useEffect, useState } from "react";
import { useAxios, useDate } from "../../../lib/utils";
import Container from "../../components/Container";
import Calendar from "./Calendar";
import ScheduleList from "./ScheduleList";
import tempData from "../../data.json";
import type { Schedule } from "../../../types";

export default function Schedule() {
  const [activeDate, setActiveDate] = useState<string>(
    useDate(new Date(), false)
  );
  const [scheduleList, setScheduleList] = useState<Array<Schedule>>([]);

  const getSchedule = (): void => {
    let form = {
      task: "getSchedule",
      START_DATE: activeDate,
      END_DATE: activeDate,
    };
    // useAxios.post("/flow_controller.php", form).then(({ data }) => {
    //   setScheduleList(data);
    // });
    setScheduleList(tempData?.scheduleList);
  };

  useEffect(getSchedule, [activeDate]);

  return (
    <Container>
      <Calendar activeDate={activeDate} setActiveDate={setActiveDate} />
      <ScheduleList activeDate={activeDate} scheduleList={scheduleList} />
    </Container>
  );
}
