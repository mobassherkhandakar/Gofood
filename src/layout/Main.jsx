import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Header />
      <ToastContainer/>
      <div className="min-h-[calc(100vh-60px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
