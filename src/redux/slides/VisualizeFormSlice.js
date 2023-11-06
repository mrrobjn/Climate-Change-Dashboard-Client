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
    updateChart: (state, action) => {
      const { index, base64 } = action.payload;
      state.charts[index].base64 = base64;
    },
    resetCharts: () => initialState,
    addChartImgUrl: (state, action) => {
      const { index, chartURL } = action.payload;
      state.charts[index].chartURL = chartURL;
      state.charts[index].base64 = "";
    },
    updateDesc:(state,action)=>{
      const { index, desc } = action.payload;
      state.charts[index].desc = desc;
    },
  },
});

export const {
  addChart,
  removeChart,
  updateChart,
  resetCharts,
  addChartImgUrl,
  updateDesc
} = visualizeFormSlice.actions;
export default visualizeFormSlice.reducer;
