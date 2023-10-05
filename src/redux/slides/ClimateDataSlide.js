import { createSlice } from "@reduxjs/toolkit";

export const climateDataReducer = createSlice({
  name: "climateData",
  initialState: {
    hourly_units: {
      time: "",
    },
    daily_units: {
      time: "",
    },
    hourly: {
      time: [],
    },
  },
  reducers: {
   
  },
});
