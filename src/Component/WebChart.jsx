import React, { useEffect, useState, useRef } from 'react';
import * as echart from 'echarts';

function WebChart() {
  const chartRef = useRef(null); // Ref to the chart container

  const [data, setData] = useState({
    categories: ['Burger', 'Pizza', 'Tibs', 'Shiro', 'Sandwich', 'Firfir'],
    amounts: [3500, 3400, 3400, 2323, 1332, 5423],
    timeFrames: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
    selectedTimeFrame: 'Weekly', // Default selected time frame
  });

  useEffect(() => {
    const chart = echart.init(chartRef.current);

    chart.setOption({
      legend: {
        data: ['TopCategories'],
      },
      radar: {
        shape: 'circle',
        indicator: data.categories.map((category) => ({ name: category, max: 6000 })), // Adjust max value as needed
      },
      series: [
        {
          name: 'Top Categories',
          type: 'radar',
          data: [
            {
              value: data.amounts,
              label: {
                show: true,
                formatter: (params) => `${params.value} $`, // Display amount at each data point
              },
              areaStyle: {
                color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#6CD8E6', // Start color
                  },
                  {
                    offset: 1,
                    color: '#197BBD', // End color
                  },
                ]),
              },
            },
          ],
        },
      ],
    });

    // Resize the chart when the window size changes
    const resizeChart = () => {
      chart.resize();
    };

    window.addEventListener('resize', resizeChart);
    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, [data]);

  const handleTimeFrameChange = (timeFrame) => {
    // Update data based on selected time frame
    switch (timeFrame) {
      case 'Daily':
        setData({ ...data, amounts: [3400, 3300, 3600, 3100, 3500, 3700], selectedTimeFrame: timeFrame });
        break;
      case 'Weekly':
        setData({ ...data, amounts: [3200, 3100, 3300, 2500, 2800, 2900], selectedTimeFrame: timeFrame });
        break;
      case 'Monthly':
        setData({ ...data, amounts: [4000, 3800, 3900, 4200, 4300, 4100], selectedTimeFrame: timeFrame });
        break;
      case 'Yearly':
        setData({ ...data, amounts: [3000, 3200, 3100, 3300, 3400, 3500], selectedTimeFrame: timeFrame });
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full my-12 bg-white">
      {/* Dropdown for selecting time frame */}
      <div className="flex justify-center items-center mb-4">
        <select
          onChange={(e) => handleTimeFrameChange(e.target.value)}
          value={data.selectedTimeFrame}
          className="p-2 rounded-md border border-gray-300"
        >
          {data.timeFrames.map((frame) => (
            <option key={frame} value={frame}>
              {frame}
            </option>
          ))}
        </select>
      </div>
      {/* Chart */}
      <div ref={chartRef} style={{ minHeight: '300px', width: '100%' }} className="echart bg-white"></div>
    </div>
  );
}

export default WebChart;
