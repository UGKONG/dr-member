import _React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StoreState } from "../../lib/store";
import { Menu } from "../../types";
import menuListMemo from "./menuListMemo";
import MyInfoBox from "./MyInfoBox";

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMenu = useSelector((x: StoreState) => x?.isMenu);
  const menuList = menuListMemo();

  const menuOff = (): void => {
    dispatch({ type: "isMenu", payload: false });
  };

  const menuClick = (path: string | null): void => {
    if (!path) return;
    navigate(path);
    menuOff();
  };

  const logout = (): void => {
    dispatch({ type: "loginUser", payload: null });
    navigate("/login");
    menuOff();
  };

  return (
    <>
      {isMenu && <Background onClick={menuOff} />}
      <Container isMenu={isMenu}>
        <MyInfoBox />
        <MenuBtnContainer>
          {menuList?.map((item, idx) =>
            item?.isLine ? (
              <Line key={idx}>{item?.name}</Line>
            ) : (
              <MenuBtn key={idx} onClick={() => menuClick(item?.path)}>
                <span>{item?.name}</span>
              </MenuBtn>
            )
          )}
        </MenuBtnContainer>
        <LogoutBtn onClick={logout} />
      </Container>
    </>
  );
}

const Background = styled.div`
  background-color: #00000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
type ContainerProps = { isMenu: boolean };
const Container = styled.section`
  position: fixed;
  top: 0;
  left: ${(x: ContainerProps) => (x?.isMenu ? 0 : -60)}%;
  width: 60%;
  height: 100%;
  transition: 0.3s;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 0 10px 10000px
    ${(x: ContainerProps) => (x?.isMenu ? "#00000040" : "#00000000")};
`;
const MenuBtnContainer = styled.ul`
  flex: 1;
  margin-bottom: 10px;
  overflow: auto;
`;
const MenuBtn = styled.li`
  padding: 10px;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  text-indent: 10px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
  &:active {
    background-color: #efefef;
  }
`;
const Line = styled.li`
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  color: #333333;
  margin-top: 20px;
  margin-bottom: 10px;
  user-select: none;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    margin-left: 10px;
    background-color: #ddd;
  }
`;
const LogoutBtn = styled.button`
  height: 40px;
  font-size: 14px;
  color: #777;
  border-top: 1px solid #ddd;
  &::before {
    content: "로그아웃";
  }
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
    color: #333;
  }
`;
