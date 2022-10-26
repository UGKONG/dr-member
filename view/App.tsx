import _React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { StoreState } from "../lib/store";
import { useSelector } from "react-redux";

export default function App() {
  const navigate = useNavigate();
  const loginUser = useSelector((x: StoreState) => x?.loginUser);

  // 로그인 체크
  const loginCheck = (): void => {
    if (!loginUser) navigate("/login");
  };

  useEffect(loginCheck, [loginUser]);

  return (
    <>
      {loginUser && <Header />}
      <Routes>
        {loginUser ? (
          <>
            <Route path="/" element={<Main />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
      {loginUser && <Menu />}
    </>
  );
}
