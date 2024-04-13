import React, { useState } from "react";
import CustomCard from "./CustomCard";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import WebChart from "./WebChart";
import TransactionChart from "./TransactionChart";
import { useSelector } from "react-redux";
import LineCharts from "./LineCharts";
import LineChart from "./LineChart";

const Dashboard = () => {
  const showSideBar = useSelector((state) => state.SideBar.showSideBar);

  // Array of card data
  const [cardTimeFrame, setCardTimeFrame] = useState("Today");
  const cardData = [
    {
      title: "Total Income",
      icon: <FaCalendarCheck />,
      amount: 245,
      percentage: 0.12,
    },
    {
      title: "Total Revenue",
      icon: <IoPeople />,
      amount: 245,
      percentage: 0.12,
    },
    {
      title: "Product Sold",
      icon: <AiOutlineDollar />,
      amount: 245,
      percentage: 0.12,
    },
    {
      title: "Customers",
      icon: <MdOutlineProductionQuantityLimits />,
      amount: 245,
      percentage: -0.19,
    },
  ];

  const onFilterCard = (timeFrame) => {
    setCardTimeFrame(timeFrame);
  };
  

  return (
    <div
      className={`   h-full bg-[#E8E8E8] `}
    >
      {/* Add dashboard content */}

      {/* title */}
      <p className="itmes-center mx-auto w-8 font-bold ">{cardTimeFrame}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            icon={card.icon}
            amount={card.amount}
            percentage={card.percentage}
          />
        ))}
      </div>

      {/* graphs */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-2 md:px-4">
        <div className="col-span-1 md:col-span-2  w-full">
          {/* Graph 1 */}
          <LineCharts />
        </div>
        <div className="col-span-1 md:col-span-1  w-full">
          {/* Graph 2 (displayed horizontally for desktop view) */}
          <WebChart />
        </div>
      </div>

      {/* table and map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-2 md:px-4 ">
        <div className="col-span-1 md:col-span-2  w-full">
          {/* Graph 1 */}
          {/* <TransactionChart /> */}
        </div>
        <div className="col-span-1 md:col-span-1  w-full mt-[-100px] md:mt-0">
          {/* Graph 2 (displayed horizontally for desktop view) */}
        </div>
      </div>
          <LineChart/>
    </div>
  );
};

export default Dashboard;
