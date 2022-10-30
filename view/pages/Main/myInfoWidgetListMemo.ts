import _React, { useMemo } from "react";
import { BsPersonCheckFill, BsShieldFillCheck } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";

export interface SubWidgetList {
  title: string;
  subTitle?: string;
  icon: any;
  color: string;
  path: string;
}

export default function myInfoWidgetListMemo() {
  const memo = useMemo<SubWidgetList[]>(
    () => [
      {
        title: "공지사항",
        subTitle: "신규 소식을 늦지 않게 접하세요",
        icon: FaBell,
        color: "#3c9924",
        path: "/notice",
      },
      {
        title: "이용권 사용내역",
        subTitle: "자주 사용한 수업을 알아보세요",
        icon: TbListDetails,
        color: "#cc596a",
        path: "/useVoucher",
      },
      {
        title: "출결 내역",
        subTitle: "나의 출석율을 높여보세요",
        icon: BsPersonCheckFill,
        color: "#b522ba",
        path: "/checkin",
      },
      {
        title: "내정보",
        subTitle: "나의 보안을 높여주세요",
        icon: BsShieldFillCheck,
        color: "#b96613",
        path: "/myInfo",
      },
      {
        title: "센터정보",
        subTitle: "내가 속한 센터를 알아보세요",
        icon: RiHomeHeartFill,
        color: "#b99d13",
        path: "/centerInfo",
      },
    ],
    []
  );

  return memo;
}
