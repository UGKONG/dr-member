import _React, { useState } from "react";
import { Menu } from "../../types";

export default function menuListMemo() {
  const [menuList] = useState<Menu[]>([
    { path: "/", name: "홈", isLine: false },
    { path: null, name: "서비스", isLine: true },
    { path: "/class", name: "수업 스케줄", isLine: false },
    { path: "/reservation", name: "나의 예약", isLine: false },
    { path: "/health", name: "건강 관리", isLine: false },
    { path: "/voucher", name: "보유 이용권", isLine: false },
    { path: "/myInfo", name: "나의 정보", isLine: false },
    { path: "/plan", name: "오늘의 운동플랜", isLine: false },
    { path: null, name: "소통", isLine: true },
    { path: "/notice", name: "공지사항", isLine: false },
    { path: "/help", name: "고객센터", isLine: false },
  ]);

  return menuList;
}
