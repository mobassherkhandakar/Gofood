import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header/>
      <div className="min-h-[calc(100vh-60px)]">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
