import React from "react";
import { Card,Typography } from "antd";
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti";
import { FcBearish } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { AiOutlineGold } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useSelector } from "react-redux";

const CustomCard = ({ title, icon, amount, percentage }) => {
  // Determine the icon for bullish and bearish trends
  const TrendIcon = percentage >= 0 ? TiArrowUpOutline : TiArrowDownOutline;
  const trendColor = percentage >= 0 ? "green" : "red";
  const showSideBar = useSelector(state=>state.SideBar.showSideBar)
  // const target7 = useSelector(state=> state.classNames.name[6])
  // const target8 = useSelector(state => state.classNames.name[7])

  return (
    <div  className="site-card-border-less-wrapper  items-center align-middle mx-auto">
      
      
      <Card id="step-0" className={`${showSideBar == true ? "min-w-56 md:min-w-48 lg:md:min-w-52 max-w-64":"min-w-64 md:min-w-48 lg:md:min-w-56 max-w-64"} my-0 lg:my-4  p-0 `}>
        <div className="flex  items-center align-middle ">
          {icon}
        <Typography.Title className="ml-1" level={4}>{title}</Typography.Title>
          
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <span className="ml-2 Title-lg ">{amount}</span> */}
            <Typography.Title className="ml-2" level={3}>{amount}</Typography.Title>
          </div>
          <div className="flex items-center px-2 rounded-md border bg-blue-200 border-blue-600">
            <span className="ml-2">
              {percentage >= 0 ? <FcBullish /> : <FcBearish />}
            </span>
            <span>{percentage}%</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CustomCard;
