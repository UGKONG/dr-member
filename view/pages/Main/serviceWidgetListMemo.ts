import _React, { useMemo } from "react";
import { BsCalendar3, BsCalendarRange } from "react-icons/bs";
import { IoBody } from "react-icons/io5";
import { AiOutlineIdcard } from "react-icons/ai";
import { MdChecklist } from "react-icons/md";

export interface SubWidgetList {
  title: string;
  subTitle?: string;
  icon: any;
  color: string;
  path: string;
}

export default function serviceWidgetListMemo() {
  const memo = useMemo<SubWidgetList[]>(
    () => [
      {
        title: "수업 스케줄",
        subTitle: "수업을 보다 빠르게 예약하세요",
        icon: BsCalendar3,
        color: "#256af5",
        path: "/class",
      },
      {
        title: "예약 관리",
        subTitle: "잊지말고 나의 예약 정보를 확인하세요",
        icon: BsCalendarRange,
        color: "#f5776e",
        path: "/reservation",
      },
      {
        title: "건강 관리",
        subTitle: "뒤틀린 체형 이제 바로잡으세요",
        icon: IoBody,
        color: "#13b985",
        path: "/health",
      },
      {
        title: "보유 이용권",
        subTitle: "지금 바로 사용하세요",
        icon: AiOutlineIdcard,
        color: "#776cf5",
        path: "/voucher",
      },
      {
        title: "오늘의 운동플랜",
        subTitle: "하나하나 따라해보세요",
        icon: MdChecklist,
        color: "#f5b03e",
        path: "/plan",
      },
    ],
    []
  );

  return memo;
}
