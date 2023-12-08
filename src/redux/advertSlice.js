import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

export const advertSlice = createSlice({
  name: "Cars",
  initialState: {
    items: [],
    isLoading: false,
    isError: "",
  },
  reducers: {
    carsList(state) {
      state.items = [];
    },
  },
  extraReducers: {
    [fetchCars.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, ...action.payload];
    },
    [fetchCars.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});
export const { carsList } = advertSlice.actions;
