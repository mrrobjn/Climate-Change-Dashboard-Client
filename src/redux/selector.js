import { createSelector } from "@reduxjs/toolkit";
export const climateDataFormSelector = (state) => {
  return state;
};

export const climateDataForm = createSelector(
  climateDataFormSelector,
  (state) => {
    return state.climateDataForm;
  }
);
