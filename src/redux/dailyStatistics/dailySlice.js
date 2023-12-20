import { createSlice } from '@reduxjs/toolkit';
// import { getCurrentStatistics, addWater, deleteWater } from './dailyOperations';
import { addWater, deleteWater } from './dailyOperations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// const handleGetCurrentFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.consumedFood = action.payload;
// };

const handleAddWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedWater.value = action.payload.result.value;
  state.consumedWater._id = action.payload.result._id;
};

const handleDeleteWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const idToDelete = action.payload.result._id;
  if (state.dailyStatistics.consumedWater._id === idToDelete) {
    state.dailyStatistics.consumedWater = { value: 0, id: '' };
  }
};

const consumedFood = {
  breakfast: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  lunch: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  dinner: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  snack: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
};

const initialState = {
  consumedWater: {
    value: 0,
    _id: '',
  },
  consumedFood,
  isLoading: false,
  error: null,
};

const dailyStatisticsSlice = createSlice({
  name: 'dailyStatistics',
  initialState,

  extraReducers: (builder) =>
    builder
      // .addCase(getCurrentStatistics.pending, handlePending)
      // .addCase(getCurrentStatistics.fulfilled, handleGetCurrentFulfilled)
      // .addCase(getCurrentStatistics.rejected, handleRejected)
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, handleAddWaterFulfilled)
      .addCase(addWater.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, handleDeleteWaterFulfilled)
      .addCase(deleteWater.rejected, handleRejected),
});

export const dailyStatisticsReducer = dailyStatisticsSlice.reducer;
