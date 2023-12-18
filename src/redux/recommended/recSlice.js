import { createSlice } from "@reduxjs/toolkit";
import { fetchRecFoods } from "./recOperations";
import { builders } from "prettier/doc";


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchRecFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const recSlice = createSlice({
    name: 'recommendedFood',
    initialState: {
        items: [],
        isLoading: true,
        error: null,
    },
    extraReducers: builder =>
        builder
            .addCase(fetchRecFoods.pending, handlePending)
            .addCase(fetchRecFoods.fulfilled, handleFetchRecFulfilled)
            .addCase(fetchRecFoods.rejected, handleRejected)
});

export const recReducer = recSlice.reducer;