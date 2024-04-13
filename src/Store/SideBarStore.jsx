import { createSlice } from "@reduxjs/toolkit";


const initialState = { showSideBar: false };

const SideBarSlice = createSlice({
  name: "sideBar",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.showSideBar = !state.showSideBar;
    },
  },
});


export const sideBarAction = SideBarSlice.actions;
export const sideBarReducer = SideBarSlice.reducer;
export default SideBarSlice;