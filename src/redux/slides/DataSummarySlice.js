import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  summary: {
    name: "",
    file_name: "",
    dataset_description: "",
    fields: [],
    field_names: [],
  },
  goals: [],
  path: "",
};
const dataSummarySlice = createSlice({
  name: "dataSummary",
  initialState,
  reducers: {
    getSummary: (state, action) => {
      state.summary = action.payload.summary;
      state.goals = action.payload.goals;
      state.path = action.payload.path;
    },
    resetSummary: () => initialState,
  },
});

export const { getSummary, resetSummary } = dataSummarySlice.actions;

export default dataSummarySlice.reducer;
