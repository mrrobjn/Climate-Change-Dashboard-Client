import { createSlice } from "@reduxjs/toolkit";
import { convertISOToYYYYMMDD } from "../../utility/convertISO";
const initialState = {
  currentLocation: {
    name: "",
    latitude: "",
    longitude: "",
    country: "",
  },
  hourly: [],
  daily: [],
  startDate: convertISOToYYYYMMDD(new Date),
  endDate: convertISOToYYYYMMDD(new Date),
};
const climateDataFormSlice = createSlice({
  name: "climateDataForm",
  initialState,
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
    resetState: () => initialState,
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
  resetState,
} = climateDataFormSlice.actions;

export default climateDataFormSlice.reducer;
