import _React from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuOn = (): void => {
    dispatch({ type: "isMenu", payload: true });
  };

  return (
    <Container>
      <Btn onClick={menuOn}>
        <MenuIcon />
      </Btn>
      <Btn style={{ width: "unset" }} onClick={() => navigate("/")}>
        <Logo>Dr. Care Union</Logo>
      </Btn>
      <Btn>
        <NoticeIcon />
      </Btn>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Btn = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h1`
  font-size: 24px;
  color: #1f6f43;
`;
const MenuIcon = styled(BiMenu).attrs(() => ({}))`
  color: #207a48;
  font-size: 40px;
`;
const NoticeIcon = styled(FaBell).attrs(() => ({}))`
  color: #fdca64;
  font-size: 24px;
`;
