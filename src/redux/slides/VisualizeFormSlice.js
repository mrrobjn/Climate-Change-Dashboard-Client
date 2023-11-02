import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  charts: [],
};
const visualizeFormSlice = createSlice({
  name: "visualizeForm",
  initialState,
  reducers: {
    addChart: (state, action) => {
      state.charts.push(action.payload);
    },
    removeChart: (state, action) => {
      state.charts = state.charts.filter((h, i) => i !== action.payload);
    },
    updateChart: (state, action) => {},
    resetCharts: () => initialState,
  },
});

export const { addChart, removeChart, updateChart, resetCharts } =
  visualizeFormSlice.actions;
export default visualizeFormSlice.reducer;
