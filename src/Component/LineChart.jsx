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
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
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
      const filtered = data.filter(
        (item) =>
          new Date(item.date).getFullYear() === filterYear &&
          item.source === filterSource
      );
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
    <div className={`px-32 items-center w-full mb-12 ${darkMode ? 'bg-black' : 'bg-white'} text-${darkMode ? 'white' : 'black'} transition-all duration-500 ease-in-out`}>

      <FilterHandler />
      <div>
        {Object.keys(toggleValues).map((key, i) => (
          <button
            key={i}
            style={{
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
          },
          markers: {
            size: 0,
          },
          colors: ['#3b82f6', '#f59e0b', '#10b981', '#f472b6', '#60a5fa', '#d97706'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
            width: 3,
          },
          xaxis: {
            categories: categories,
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
            },
          },
          tooltip: {
            enabled: true,
            x: {
              formatter: function (value) {
                return value;
              },
            },
            style: {
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              background: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#333',
              border: darkMode ? '5px solid #fff' : '1px solid #333',
              height: '48px',
              width: '48px',
              borderRadius: '50%',
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
