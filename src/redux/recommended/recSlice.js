import { createSlice } from "@reduxjs/toolkit";
import { fetchRecFoods } from "./recOperations";



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
        recomendedFoods : [{  name: '', amount: 0, img: '', calories: 0 }],
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