import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartLine,
  FaMoneyBill,
  FaEnvelope,
  FaChartBar,
  FaFileInvoice,
  FaCubes,
  FaFileAlt,
  FaCog,
  FaQuestionCircle,
  FaCommentAlt,
} from "react-icons/fa";
import { IoIosAnalytics } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { sideBarAction } from "../../Store/SideBarStore";
import Logo from "../Header/Logo";
import { BiMenu } from "react-icons/bi";

function SideBar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const showSideBar = useSelector((state) => state.SideBar.showSideBar);



  const toggleSideBar = () => {
    dispatch(sideBarAction.toggle());
  };
  useEffect(() => {
    if (window.innerWidth > "400px") {
      dispatch(sideBarAction.toggle());
    }
  }, []);   

  return (
    <>
      {
        <>
          <div
            onClick={toggleSideBar}
            className={`${
              showSideBar == true ? "w-full sm:w-0" : "w-0 hidden"
            } z-[1000] block sm:hidden fixed top-0 left-0 w-screen h-screen bg-black opacity-50`}
          ></div>
          <aside
            className={`  ${
              showSideBar == true
                ? "w-2/3 sm:w-full"
                : "w-0 hidden sm:block sm:w-auto"
            }  z-[1000] fixed top-0 bottom-0
        left-0 h-screen bg-white  px-4 py-8 sm:static sm:translate-x-0 sm:block 
        transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-between">
              {showSideBar && <Logo />}
              {/* Mobile View */}
              <div className="">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                  onClick={toggleSideBar}
                >
                  <BiMenu className="text-4xl text-24  " />
                </button>
              </div>
            </div>

             {/* General Category */}
            <div className="mb-2">
              <h2
                className={`${
                  showSideBar ? "bloack" : "block sm:hidden"
                } text-lg font-semibold`}
              >
                General
              </h2>
              <ul className="py-2">
                <NavItem
                  to="/dashboard"
                  icon={<FaChartLine />}
                  label="Dashboard"
                  isActive={location.pathname === "/dashboard"}
                />
                <NavItem
                  to="/dashboard/transactions"
                  icon={<FaMoneyBill />}
                  label="Transactions"
                  isActive={location.pathname === "/dashboard/transactions"}
                />
                <NavItem
                  to="/dashboard/messages"
                  icon={<FaEnvelope />}
                  label="Messages"
                  isActive={location.pathname === "/dashboard/messages"}
                />
                <NavItem
                  to="/dashboard/notification"
                  icon={<IoIosNotificationsOutline />}
                  label="Notifications"
                  isActive={location.pathname === "/dashboard/notification"}
                />
              </ul>
              <hr className="my-2 border-t border-gray-300" />
            </div>

            {/* Tools Category */}
            <div className="mb-2">
              <h2
                className={`${
                  showSideBar ? "bloack" : "block sm:hidden"
                } text-lg font-semibold`}
              >
                Tools
              </h2>

              <ul>
                <NavItem
                  to="/dashboard/analytics"
                  icon={<IoIosAnalytics />}
                  label="Analytics"
                  isActive={location.pathname === "/dashboard/analytics"}
                />
                <NavItem
                  to="/dashboard/invoices"
                  icon={<FaFileInvoice />}
                  label="Invoices"
                  isActive={location.pathname === "/dashboard/invoices"}
                />
                <NavItem
                  to="/dashboard/products"
                  icon={<FaCubes />}
                  label="Products"
                  isActive={location.pathname === "/dashboard/products"}
                />
                <NavItem
                  to="/dashboard/reports"
                  icon={<FaFileAlt />}
                  label="Reports"
                  isActive={location.pathname === "/dashboard/reports"}
                />
              </ul>
              <hr className="my-2 border-t border-gray-300" />
            </div>

            {/* Support Category */}
            <div className="mb-2">
              <h2
                className={`${
                  showSideBar ? "bloack" : "block sm:hidden"
                } text-lg font-semibold`}
              >
                Support
              </h2>

              <ul>
                <NavItem
                  to="/dashboard/settings"
                  icon={<IoSettingsOutline />}
                  label="Settings"
                  isActive={location.pathname === "/dashboard/settings"}
                />
                <NavItem
                  to="/dashboard/help-center"
                  icon={<AiOutlineQuestionCircle />}
                  label="Help Center"
                  isActive={location.pathname === "/dashboard/help-center"}
                />
                <NavItem
                  to="/dashboard/feedback"
                  icon={<VscFeedback />}
                  label="Feedback"
                  isActive={location.pathname === "/dashboard/feedback"}
                />
              </ul>
            </div>
          </aside>
        </>
      }
    </>
  );
}

const NavItem = ({ to, icon, label, isActive }) => {
  const dispatch = useDispatch();
  const showSideBar = useSelector((state) => state.SideBar.showSideBar);

  const toggleSideBar = () => {
    dispatch(sideBarAction.toggle());
  };
  return (
    <div
      className={`flex ${
        showSideBar ? "items-center" : "items-start "
      } rounded-sm py-2 px-4 w-full `}
    >
      <Link to={to} className={`ml-2 flex gap-2 ${isActive ? "bg-gray-300 px-2 md:px-4 p-1 md:py-2" : ""}`}>
        <div className="">{icon}</div>
        <div className={`${showSideBar == true ? "block" : "block sm:hidden"}`}>
          {label}
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
