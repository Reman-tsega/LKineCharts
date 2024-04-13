import React from "react";
import { Outlet } from "react-router";
import Header from "./Header/Header";
import { useSelector } from "react-redux";
// import SideBar from "./Sidebar/SideBar";
// import SideBar from "./SideBar/SideBar";


function PageLayout() {
  const showSideBar = useSelector((state) => state.SideBar.showSideBar);
  return (
    <div className={`${showSideBar == true ? "w-[100vw] lg:w-[80vw] " : "w-[100vw] lg:w-[90vw]"}  overflow-scroll`}>
      <div id="step-1" className="">
      <Header />
      </div>
      <div className="">

      <Outlet />
      </div>
    </div>
  );
}

export default PageLayout;
