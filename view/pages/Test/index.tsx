import _React, {
  ChangeEvent,
  useMemo,
  useState,
  useTransition,
  useDeferredValue,
} from "react";
import styled from "styled-components";
import Container from "../../components/Container";

const list = new Array(1000).fill("hello");

export default function Test() {
  const [value, setValue] = useState("");
  const valueLazy = useDeferredValue(value);

  const valueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e?.target?.value);
  };

  return (
    <Container>
      <input type="text" value={value} onChange={valueChange} />

      <br />
      <br />
      <ul>
        {list?.map((item, i) => (
          <li key={i}>{valueLazy}</li>
        ))}
      </ul>
    </Container>
  );
}
