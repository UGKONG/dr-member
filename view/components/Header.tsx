import _React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuOn = (): void => {
    dispatch({ type: "isMenu", payload: true });
  };

  const mainGo = (): void => {
    navigate("/");
  };

  const noticeGo = (): void => {
    navigate("/myInfo");
  };

  return (
    <Container>
      <Btn onClick={menuOn}>
        <MenuIcon />
      </Btn>
      <Logo onClick={mainGo}>
        <LogoText>Dr. Care Union</LogoText>
      </Logo>
      <Btn onClick={noticeGo}>
        <UserIcon />
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
  min-width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled(Btn)`
  width: 100%;
`;
const LogoText = styled.h1`
  font-size: 20px;
  color: #1f6f43;
`;
const MenuIcon = styled(HiMenuAlt2).attrs(() => ({}))`
  color: #207a48;
  font-size: 30px;
`;
const UserIcon = styled(FaUser).attrs(() => ({}))`
  color: #338f5c;
  font-size: 20px;
  border: 1px solid #ddd;
  border-radius: 100px;
  padding: 5px;
  min-width: 34px;
  min-height: 34px;
  max-width: 34px;
  max-height: 34px;
`;
