import { useState } from "react";

export default function partListMemo() {
  const [list, setList] = useState([
    { id: 1, title: "어깨 불균형" },
    { id: 2, title: "목 불균형" },
    { id: 8, title: "전방경사" },
    { id: 4, title: "후방경사" },
    { id: 10, title: "굽은등" },
    { id: 6, title: "평편등" },
  ]);

  return list;
}
