import { createSelector } from "@reduxjs/toolkit";
export const climateDataFormSelector = (state) => {
  return state;
};
export const dataSummarySelector = (state) => {
  return state;
};
export const visualizeFormSelector = (state) => {
  return state;
};

export const climateDataForm = createSelector(
  climateDataFormSelector,
  (state) => {
    return state.climateDataForm;
  }
);
export const dataSummary = createSelector(dataSummarySelector, (state) => {
  return state.dataSummary;
});
export const visualizeForm = createSelector(visualizeFormSelector, (state) => {
  return state.visualizeForm;
});
