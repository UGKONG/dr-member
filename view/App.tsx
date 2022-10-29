import _React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "../lib/store";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Schedule from "./pages/Schedule";
import Reservation from "./pages/Reservation";
import Health from "./pages/Health";
import Voucher from "./pages/Voucher";
import MyInfo from "./pages/MyInfo";
import Plan from "./pages/Plan";
import Notice from "./pages/Notice";
import Help from "./pages/Help";
import Checkin from "./pages/Checkin";
import UseVoucher from "./pages/UseVoucher";
import Modal from "./components/Modal";
import CenterInfo from "./pages/CenterInfo";

export default function App() {
  const navigate = useNavigate();
  const loginUser = useSelector((x: StoreState) => x?.loginUser);
  const modalData = useSelector((x: StoreState) => x?.modalData);

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
            <Route path="/class" element={<Schedule />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/health" element={<Health />} />
            <Route path="/voucher" element={<Voucher />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/help" element={<Help />} />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/useVoucher" element={<UseVoucher />} />
            <Route path="/myInfo" element={<MyInfo />} />
            <Route path="/centerInfo" element={<CenterInfo />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
      {loginUser && <Menu />}
      {<Modal />}
    </>
  );
}
