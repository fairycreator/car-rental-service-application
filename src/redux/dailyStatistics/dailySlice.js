import { createSlice } from '@reduxjs/toolkit';
import { getDailyWater, addWater, deleteWater } from './dailyOperations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleGetDailyWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedWater.value = action.payload.waterIntakeRecord.value;
  state.consumedWater._id = action.payload.waterIntakeRecord._id;
};

const handleAddWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedWater.value = action.payload.water.value;
  state.consumedWater._id = action.payload.water._id;
};

const handleDeleteWaterFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;

  state.consumedWater = {
    value: 0,
    _id: '',
  };
};

const initialState = {
  consumedWater: {
    value: 0,
    _id: '',
  },
  isLoading: false,
  error: null,
};

const dailyWaterStatisticsSlice = createSlice({
  name: 'dailyWaterStatistics',
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getDailyWater.pending, handlePending)
      .addCase(getDailyWater.fulfilled, handleGetDailyWaterFulfilled)
      .addCase(getDailyWater.rejected, handleRejected)
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, handleAddWaterFulfilled)
      .addCase(addWater.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, handleDeleteWaterFulfilled)
      .addCase(deleteWater.rejected, handleRejected),
});

export const dailyWaterStatisticsReducer = dailyWaterStatisticsSlice.reducer;
