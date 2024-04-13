import { configureStore } from '@reduxjs/toolkit';
import { lineChartReducer } from './LineChartSlice';
// import lineChartReducer from './lineChartSlice';
import { sideBarReducer } from './SideBarStore';

const store = configureStore({
  reducer: {
    lineChart: lineChartReducer,
    SideBar: sideBarReducer,
  },
});

export default store;
