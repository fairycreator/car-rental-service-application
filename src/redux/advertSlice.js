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
    advertsList(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const { advertsList } = advertSlice.actions;
