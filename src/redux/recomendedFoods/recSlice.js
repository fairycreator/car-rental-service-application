import { createSlice } from "@reduxjs/toolkit";
import { fetchRecFoods } from "./recOperations";

const recomendedFoods = [{ name: '', amount: 0, img: '', calories: 0 }];

const initialState = {
  recomendedFoods,
  isLoading: false,
  error: null,
};

const recSlice = createSlice({
  name: 'recommendedFood',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecFoods.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecFoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recomendedFoods = action.payload;
      })
      .addCase(fetchRecFoods.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const recReducer = recSlice.reducer;