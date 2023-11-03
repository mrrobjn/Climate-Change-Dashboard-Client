import { configureStore } from "@reduxjs/toolkit";
import climateDataFormSlice from "./slides/ClimateDataFormSlice";
import dataSummarySlice from "./slides/DataSummarySlice";
import VisualizeFormSlice from "./slides/VisualizeFormSlice";

const store = configureStore({
  reducer: {
    climateDataForm: climateDataFormSlice,
    dataSummary: dataSummarySlice,
    visualizeForm: VisualizeFormSlice,
  },
});

export default store;
