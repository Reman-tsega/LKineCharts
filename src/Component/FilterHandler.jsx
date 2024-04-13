import React from 'react';
import { lineChartActions } from '../Store/LineChartSlice';
import { useTheme } from '../Store/Context/ThemContext';
import { useDispatch, useSelector } from 'react-redux';

function FilterHandler() {
  const { darkMode, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const { filterYear, filterSource } = useSelector((state) => state.lineChart);

  const handleFilterYearChange = (e) => {
    dispatch(lineChartActions.setFilterYear(e.target.value));
  };

  const handleFilterSourceChange = (e) => {
    dispatch(lineChartActions.setFilterSource(e.target.value));
  };

  return (
    <div className={` p-4 rounded-md shadow-md mb-4 text-${darkMode ? 'white' : 'black'}`}>
      {/* <div className="flex justify-end mb-4">
        <label htmlFor="darkModeToggle" className="inline-flex items-center cursor-pointer mr-4">
          <span className="mr-2">Dark Mode</span>
          <input
            type="checkbox"
            id="darkModeToggle"
            className={`form-checkbox h-5 w-5 text-${darkMode ? 'white' : 'blue-500'} transition duration-150 ease-in-out`}
            checked={darkMode}
            onChange={toggleTheme}
          />
        </label>
      </div> */}
      <div className="flex items-center mb-4">
        <label htmlFor="filterYear" className={` ${darkMode ? 'text-white' : 'text-black'}`}>Filter Year:</label>
        <select
          id="filterYear"
          value={filterYear}
          onChange={handleFilterYearChange}
        //   className="form-select"
          className={` ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}
        >
          {/* Options for filter year */}
          <option className={` ${darkMode ? 'text-white' : 'text-black'}`} value="last12Months">Last 12 Months</option>
          <option className={` ${darkMode ? 'text-white' : 'text-black'}`} value="since2020">Since 2020</option>
          <option className={` ${darkMode ? 'text-white' : 'text-black'}`} value={2024}>2024</option>
          <option className={` ${darkMode ? 'text-white' : 'text-black'}`} value={2023}>2023</option>
          <option className={` ${darkMode ? 'text-white' : 'text-black'}`} value={2022}>2022</option>
          <option className={` ${darkMode ? 'text-white' : 'text-black'}`} value={2021}>2021</option>
        </select>
      </div>
      <div className="flex items-center">
        <label htmlFor="filterSource" className="mr-2">Filter Source:</label>
        <select
          id="filterSource"
          value={filterSource}
          onChange={handleFilterSourceChange}
          className={` ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}

        >
          <option value="forsa">Forsa</option>
          <option value="insa">Insa</option>
          <option value="kantar">Kantar</option>
          <option value="infra">Infra</option>
          <option value="fgw">Fgw</option>
          {/* Options for filter source */}
        </select>
      </div>
    </div>
  );
}

export default FilterHandler;
