import { createSlice } from '@reduxjs/toolkit';
import { getCurrentStatistics, addWater, deleteWater } from './dailyOperations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleGetCurrentFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedFood = action.payload;
};

const handleAddWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedWater = action.payload.result.value;
};

const handleDeleteWaterFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
  state.consumedWater = 0;
};

const consumedFood = {
  breakfast: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  lunch: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  dinner: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  snack: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
};

const initialState = {
  consumedWater: 0,
  consumedFood,
  isLoading: false,
  error: null,
};

const dailyStatisticsSlice = createSlice({
  name: 'dailyStatistics',
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getCurrentStatistics.pending, handlePending)
      .addCase(getCurrentStatistics.fulfilled, handleGetCurrentFulfilled)
      .addCase(getCurrentStatistics.rejected, handleRejected)
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, handleAddWaterFulfilled)
      .addCase(addWater.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, handleDeleteWaterFulfilled)
      .addCase(deleteWater.rejected, handleRejected),
});

export const dailyStatisticsReducer = dailyStatisticsSlice.reducer;
