import _React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Container from "../../components/Container";
import type { Schedule } from "../../../types";

export default function Reservation() {
  const location = useLocation();
  const clickSchedule: Schedule = location?.state?.clickSchedule;

  // Clean
  useEffect(
    () => () => {
      location.state = {};
    },
    []
  );

  return (
    <Container>
      예약
      <br />
      <br />
      클릭한 스케줄
      <br />
      {JSON.stringify(clickSchedule)}
    </Container>
  );
}
