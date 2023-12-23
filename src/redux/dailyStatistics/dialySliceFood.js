import { createSlice } from '@reduxjs/toolkit';
import { addFood } from './dailyOperations';
// import { getCurrentStatistics } from './dailyOperations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log(action.payload);
};

const handleAddFoodFullfiled = (state, action) => {
  console.log('action: ', action);
  state.isLoading = false;
  state.error = null;
  state.consumedFood.breakfast = [...action.payload.breakfast];
  state.consumedFood.dinner = [...action.payload.dinner];
  state.consumedFood.lunch = [...action.payload.lunch];
  state.consumedFood.snack = [...action.payload.snack];
};

// const handleDeleteWaterFulfilled = (state) => {
//   state.isLoading = false;
//   state.error = null;

//   state.consumedWater = {
//     value: 0,
//     _id: '',
//   };
// };

const consumedFood = {
  totalCalories: 0,
  totalCarbs: 0,
  totalProtein: 0,
  totalFat: 0,
  breakfast: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  lunch: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  dinner: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
  snack: [{ name: '', carbs: 0, protein: 0, fat: 0, calories: 0 }],
};

const initialState = {
  consumedFood,
  isLoading: false,
  error: null,
};

const dailyStatisticsSliceFood = createSlice({
  name: 'dailyStatisticsFood',
  initialState,

  extraReducers: (builder) =>
    builder
      // .addCase(getCurrentStatistics.pending, handlePending)
      // .addCase(getCurrentStatistics.fulfilled, handleGetCurrentFulfilled)
      // .addCase(getCurrentStatistics.rejected, handleRejected)
      .addCase(addFood.pending, handlePending)
      .addCase(addFood.fulfilled, handleAddFoodFullfiled)
      .addCase(addFood.rejected, handleRejected),
  //   .addCase(deleteWater.pending, handlePending)
  //   .addCase(deleteWater.fulfilled, handleDeleteWaterFulfilled)
  //   .addCase(deleteWater.rejected, handleRejected),
});

export const dailyStatisticsReducerFood = dailyStatisticsSliceFood.reducer;
