import { createSlice } from "@reduxjs/toolkit";

const initialState = { make: "", mileageFrom: 0, mileageTo: 0, rentalPrice: 0 };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },

    clearFilter: () => {
      return initialState;
    },
  },
});
export const { setFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
