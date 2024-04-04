import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, lineChartActions } from '../Store/LineChartSlice';
import { useTheme } from '../Store/Context/ThemContext';
import FilterHandler from './FilterHandler';

const LineChart = () => {
  const { darkMode, toggleTheme } = useTheme();  // Use custom hook to access theme context
  const dispatch = useDispatch(); // Get dispatch function from Redux
  const {
    data,
    categories,
    series,
    filterYear,
    filterSource,
    toggleValues,
  } = useSelector((state) => state.lineChart);
  const { data: fetchedData, status: dataStatus } = useSelector((state) => state.lineChart);

  const generateCategories = (filteredData) => {
    if(filterYear=="since2020"){
      const years =[ 2020, 2021, 2022,2023, 2024]
      return years;
    }
    const categories = [];
    const monthSet = new Set();

    filteredData.forEach((item) => {
      const dateParts = item.date.split('-');
      const month = dateParts[1];
      if (!monthSet.has(month)) {
        monthSet.add(month);
        categories.push(month);
      }
    });

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return categories.map((month) => monthNames[parseInt(month) - 1]).reverse();
  };

  const generateSeries = (filteredData, toggleValues) => {
    return Object.keys(toggleValues)
    .filter((key) => toggleValues[key])
    .map((key) => ({
      name: key.toUpperCase(),
      data: filteredData.map((item) => item.values[key]),
    }));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (dataStatus === 'succeeded') {
      let filtered;
      if (filterYear === "last12Months") {
        const currentDate = new Date();
        const twelveMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 11, 1);
        filtered = fetchedData.filter(
          item =>
            new Date(item.date) >= twelveMonthsAgo &&
            item.source === filterSource
        );
      } else if (filterYear === "since2020") {
        const since2020 = new Date(2020, 0, 1);
        filtered = fetchedData.filter(
          item =>
            new Date(item.date) >= since2020 &&
            item.source === filterSource
        );
        const years = Array.from({ length: new Date().getFullYear() - since2020.getFullYear() + 1 }, (_, i) => since2020.getFullYear() + i);
        dispatch(lineChartActions.setCategories(years));
      } else {
        filtered = fetchedData.filter(
          item =>
            new Date(item.date).getFullYear() === parseInt(filterYear) &&
            item.source === filterSource
        );
      }
      console.log(filtered);
      dispatch(lineChartActions.setFilteredData(filtered));

      const newCategories = generateCategories(filtered);
      dispatch(lineChartActions.setCategories(newCategories));

      const newSeries = generateSeries(filtered, toggleValues);
      dispatch(lineChartActions.setSeries(newSeries));
    }
  }, [fetchedData, dataStatus, filterYear, filterSource, toggleValues, dispatch]);

  const handleToggle = (key) => {
    dispatch(
      lineChartActions.setToggleValues({
        ...toggleValues,
        [key]: !toggleValues[key],
      })
    );
  };


  return (
    <div className={`px-4 md:px-20 lg:px-32 items-center w-full mb-12 ${darkMode ? 'bg-black' : 'bg-white'} text-${darkMode ? 'white' : 'black'} transition-all duration-500 ease-in-out`}>

      <FilterHandler />
      <div>
        {Object.keys(toggleValues).map((key, i) => (
          <button
            key={i}
            style={{
              width:"70px",
              background: toggleValues[key] ? '#3b82f6' : '#ccc',
              border: 'none',
              borderRadius: '4px',
              padding: '5px',
              margin: '5px',
              color: darkMode ? '#fff' : '#333', // Text color based on dark mode
            }}
            onClick={() => handleToggle(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>
      <Chart
        options={{
          chart: {
            height: 300,
            width: '100%', // Full width for responsiveness
            type: 'line',
            toolbar: {
              show: true,
            },
            style: {
                colors: darkMode ? '#fff' : '#000', // Y-axis label text color based on dark mode
                background: darkMode? '#000':'#fff',
              },
          },
          markers: {
            size: 0,
          },
          
          colors: ['#3b82f6', '#177743', '#4b4f4d', '#f59e0b', '#f00', '#b21375'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
            width: 3,
          },
          xaxis: {
            categories: categories,
            labels: {
              formatter: function (value) {
                return value; // Adjust label formatting if needed
              },
              style: {
                colors: darkMode ? '#fff' : '#000', // X-axis label text color based on dark mode
                fontSize: '12px', // Adjust font size of x-axis labels
                fontFamily: 'Arial, sans-serif', // Adjust font family of x-axis labels
                fontWeight: 400, // Adjust font weight of x-axis labels
                // Add any other styling properties you need for x-axis labels
              },
            },
            axisTicks: {
              show: true, // Display axis ticks for better alignment
            },
            axisBorder: {
              show: true, // Display axis border for better alignment
            },
          },
          yaxis: {
            title: {
              text: '% Value',
              
            },
            tickAmount: 5,
            labels: {
              formatter: function (value) {
                return value + '%';
              },
              style: {
                colors: darkMode ? '#fff' : '#000', // Y-axis label text color based on dark mode
                background: darkMode? '#fff':'#000',
              },

            },
            style: {
                colors: darkMode ? '#fff' : '#000', // Y-axis label text color based on dark mode
                background: darkMode? '#000':'#fff',
              },
          },
          tooltip: {
            enabled: true,
            x: {
              formatter: function (value) {
                return value;
              },
              style: {
                colors: darkMode ? '#fff' : '#000', // Y-axis label text color based on dark mode
                background: darkMode? '#000':'#fff',
              },
            },
            style: {
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              background: darkMode ? '#000' : '#fff', // Tooltip background color based on dark mode
              color: darkMode ? '#fff' : '#000', // Tooltip text color based on dark mode
              border: darkMode ? '1px solid #fff' : '1px solid #333', // Tooltip border color based on dark mode
              height: '48px',
              width: '48px',
              borderRadius: '10px', // Tooltip border-radius
              textAlign: 'center',
              padding: '8px',
            },
          },
        }}
        series={series}
        type="line"
        height={300}
        width="100%" // Full width for responsiveness
      />

    </div>
  );
};

export default LineChart;
