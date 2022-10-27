import _React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { StoreState } from "../../lib/store";
import { OrNull, User } from "../../types";

interface Props {
  children: any;
}
export default function Container(props: Props) {
  const loginUser = useSelector((x: StoreState) => x?.loginUser);

  return (
    <Main loginUser={loginUser} {...props}>
      {props?.children}
    </Main>
  );
}

type MainProps = { loginUser: OrNull<User> };
const Main = styled.main<MainProps>`
  width: 100%;
  height: ${(x) => (x?.loginUser ? "calc(100% - 70px)" : "100%")};
  overflow: auto;
  padding: 10px 20px 20px;
`;
