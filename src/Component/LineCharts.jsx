import React, { useState } from "react";
import Chart from "react-apexcharts";

function LineCharts() {
  const initialData = {
    series: [
      {
        name: "Total Income",
        data: [120, 210, 150, 290, 180, 250, 200], // Sample data for Total Income
      },
      {
        name: "Total Delivery",
        data: [20, 30, 25, 40, 35, 28, 30], // Sample data for Total Delivery
      },
    ],
    options: {
      chart: {
        height: 300,
        width: "100%", // Set chart width to 100% for responsiveness
        type: "line", // Change chart type to line for better visualization
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 3,
      },
      colors: ["#3b82f6", "#f59e0b"], // Custom colors for the lines
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        categories: ['Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Sample categories (months)
      },
      yaxis: {
        title: {
          text: "Amount",
        },
      },
      tooltip: {
        x: {
          format: "dd",
        },
    },
      
    },
  };

  const [data, setData] = useState(initialData);

  const handleFilterChange = (filter) => {
    // Update chart data based on the selected filter
    switch (filter) {
      case "day":
        // Update data for daily timeframe (sample data)
        setData({
          ...initialData,
          series: [
            {
              name: "Total Income",
              data: [100, 150, 120, 180, 130,100, 150, 120, 180, 130, 160, 140], // Sample data for Total Income for a day
            },
            {
              name: "Total Delivery",
              data: [15, 20, 18, 22, 17, 25, 20,18, 22, 17, 25, 20], // Sample data for Total Delivery for a day
            },
          ],
          options: {
            ...initialData.options,
          xaxis: {
            categories: ['1am', '3am', '5am', '7am', '9am', '11am', '1pm','3pm','5pm','7pm','9pm','11pm'], // Sample categories (months)
          },
        },
          
        });
        break;
      case "week":
        // Update data for weekly timeframe (sample data)
        setData({
          ...initialData,
          series: [
            {
              name: "Total Income",
              data: [700, 800, 750, 850, 820, 780, 790], // Sample data for Total Income for a week
            },
            {
              name: "Total Delivery",
              data: [220, 130, 315, 140, 135, 125, 430], // Sample data for Total Delivery for a week
            },
          ],
          options: {
            ...initialData.options,
          xaxis: {
            categories: ['Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Sample categories (months)
          },
        },
          tooltip: {
            x: {
              format: "dd",
            },
        }
        });
        break;
      case "month":
        // Update data for monthly timeframe (sample data)
        setData({
          ...initialData,
          series: [
            {
              name: "Total Income",
              data: [2500, 2800, 2600, 3000], // Sample data for Total Income for a month
            },
            {
              name: "Total Delivery",
              data: [400, 750, 420, 480], // Sample data for Total Delivery for a month
            },
          ],
          
          options: {
            ...initialData.options,
            xaxis: {
              categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Update x-axis for week filter
            },
          },
          tooltip: {
            x: {
              format: "MMM",
            },
          },
        });
        break;
      case "year":
        // Update data for yearly timeframe (sample data)
        setData({
          ...initialData,
          series: [
            {
              name: "Total Income",
              data: [30000, 32000, 31000, 34000, 33000, 35000, 34500], // Sample data for Total Income for a year
            },
            {
              name: "Total Delivery",
              data: [4500, 4800, 4600, 5000, 4900, 4700, 4800], // Sample data for Total Delivery for a year
            },
          ],
          options: {
            ...initialData.options,
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],  // Update x-axis for week filter
            },
          },
          tooltip: {
            x: {
              format: "yy",
            },
          },
        });
        break;
      default:
        setData(initialData); // Reset to initial data if no filter selected
        break;
    }
  };

  return (
    <div className="w-full my-12 bg-white">
      {/* Dropdown for selecting time frame */}
      <div className="flex justify-center items-center mb-4">
        <select
          onChange={(e) => handleFilterChange(e.target.value)}
          className="p-2 rounded-md border border-gray-300"
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      {/* Chart */}
      <Chart
        options={data.options}
        series={data.series}
        type={data.options.chart.type}
        height={data.options.chart.height}
        width={data.options.chart.width}
      />
    </div>
  );
}

export default LineCharts;
