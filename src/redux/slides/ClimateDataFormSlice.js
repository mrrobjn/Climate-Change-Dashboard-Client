import { createSlice } from "@reduxjs/toolkit";

const climateDataFormSlice = createSlice({
  name: "climateDataForm",
  initialState: {
    currentLocation: {
      name: "",
      latitude: "",
      longitude: "",
      country: "",
    },
    hourly: [],
    daily: [],
    startDate: "",
    endDate: "",
  },
  reducers: {
    getLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    addHourly: (state, action) => {
      state.hourly.push(action.payload);
    },
    deleteHourly: (state, action) => {
      state.hourly = state.hourly.filter((h) => h !== action.payload);
    },
    addDaily: (state, action) => {
      state.daily.push(action.payload);
    },
    deleteDaily: (state, action) => {
      state.daily = state.daily.filter((h) => h !== action.payload);
    },
    addStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    addEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const {
  getLocation,
  addHourly,
  deleteHourly,
  addDaily,
  deleteDaily,
  addEndDate,
  addStartDate,
} = climateDataFormSlice.actions;

export default climateDataFormSlice.reducer;
