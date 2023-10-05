import { configureStore } from "@reduxjs/toolkit";
import climateDataFormSlice from "./slides/ClimateDataFormSlice";

const store = configureStore({
    reducer: {
        climateDataForm: climateDataFormSlice
    }
});

export default store;
