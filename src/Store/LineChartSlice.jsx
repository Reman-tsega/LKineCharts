import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('lineChart/fetchData', async () => {
    const response = await fetch(
      'https://graphic-portal.com/api/-Ns4Y6W9ApHcBTBEzu9S/payload/public/-NsNham4iKudej0xLINo/-NsNhi7ANB5ZktQHydB2?updated=0'
    );
    const jsonData = await response.json();
    return jsonData.data.values;        
  });

const initialState = {
  data: [],
  filteredData: [],
  categories: [], // x-axis 
  series: [],
  filterYear: 2022,
  filterSource: 'insa',
  toggleValues: {
    afd: true,
    bsw: true,
    cdu_csu: true,
    fdp: true,
    gruene: true,
    linke: true,
  },
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
};

export const lineChartSlice = createSlice({
  name: 'lineChart',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSeries: (state, action) => {
      state.series = action.payload;
    },
    setFilterYear: (state, action) => {
      state.filterYear = action.payload;
    },
    setFilterSource: (state, action) => {
      state.filterSource = action.payload;
    },
    setToggleValues: (state, action) => {
      state.toggleValues = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },

});


export const lineChartReducer = lineChartSlice.reducer;
export const lineChartActions = lineChartSlice.actions;
export default lineChartSlice.reducer;
