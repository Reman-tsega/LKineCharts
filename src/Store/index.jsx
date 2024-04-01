import { configureStore } from '@reduxjs/toolkit';
import { lineChartReducer } from './LineChartSlice';
// import lineChartReducer from './lineChartSlice';


const store = configureStore({
  reducer: {
    lineChart: lineChartReducer,
  },
});

export default store;
