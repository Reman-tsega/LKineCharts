import React from "react";
import { Outlet } from "react-router";
// import SideBar from "./Sidebar/SideBar";

import { useSelector } from "react-redux";
import SideBar from "./SideBar/SideBar";

function PrimaryLayout() {
  const showSideBar = useSelector((state) => state.SideBar.showSideBar);
  // const userType = "Admin"
  // const userType = "Company";
  return (
    <div className={`flex gap-0 w-[100vw] h-full  m-0`}>
      <div
      id="step-1"
        className={`${
          showSideBar == true ? "w-[20vw]" : "w-[10vw]"
        } flex     left-0 h-[100vh] overflow-auto`}
      >
        <SideBar /> 
      </div>

      <div
        className={`${
          showSideBar == true ? "" : ""
        } flex  flex-1  h-[100vh] `}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default PrimaryLayout;
