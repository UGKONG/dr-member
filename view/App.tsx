import _React, { useEffect, useMemo } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "../lib/store";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Login from "./pages/Login";
import pageListMemo from "./pageListMemo";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const loginUser = useSelector((x: StoreState) => x?.loginUser);
  const pageList = pageListMemo();

  // 현재 페이지 경로
  const path = useMemo(() => location.pathname, [location]);

  // 로그인 체크
  const loginCheck = (): void => {
    if (!loginUser) navigate("/login");
  };

  useEffect(loginCheck, [loginUser]);

  return (
    <>
      {path !== "/login" && loginUser && <Header />}
      <Routes>
        {pageList?.map((item) => (
          <Route
            key={item?.path}
            path={item?.path}
            element={<item.component />}
          />
        ))}
      </Routes>
      <Menu />
      <Modal />
    </>
  );
}
