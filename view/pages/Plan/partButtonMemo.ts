import { useState } from "react";

export default function partButtonMemo() {
  const [list, setList] = useState([
    { id: 1, title: "써클링" },
    { id: 2, title: "보수" },
    { id: 3, title: "밴드" },
    { id: 4, title: "맨몸운동" },
  ]);

  return list;
}
