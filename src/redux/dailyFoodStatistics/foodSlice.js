import { createSlice } from '@reduxjs/toolkit';
import { addFood, getFood } from './foodOperations';
// import { addFood, getFood } from '../dailyStatisticsWater/waterOperations';
// import { getCurrentStatistics } from './dailyOperations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddFoodFullfiled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  // state.consumedFood.breakfast = action.payload.breakfast;
  // state.consumedFood.dinner = action.payload.dinner;
  // state.consumedFood.lunch = action.payload.lunch;
  // state.consumedFood.snack = action.payload.snack;

  switch (action.meta.arg.typeFood) {
    case 'breakfast':
      state.consumedFood.breakfast = action.payload.breakfast;
      break;
    case 'dinner':
      state.consumedFood.dinner = action.payload.dinner;
      break;
    case 'lunch':
      state.consumedFood.lunch = action.payload.lunch;
      break;
    case 'snack':
      state.consumedFood.snack = action.payload.snack;
      break;
    default:
      break;
  }
};

const handeGetFoodFullfiled = (state, action) => {
  if (action.payload.length) {
    state.isLoading = false;
    state.error = null;
    // state.consumedFood.breakfast = action.payload[0].breakfast;
    // state.consumedFood.dinner = action.payload[0].dinner;
    // state.consumedFood.lunch = action.payload[0].lunch;
    // state.consumedFood.snack = action.payload[0].snack;
    if (action.payload[0].breakfast.length > 0) {
      state.consumedFood.breakfast = action.payload[0].breakfast;
    }
    if (action.payload[0].dinner.length > 0) {
      state.consumedFood.dinner = action.payload[0].dinner;
    }
    if (action.payload[0].lunch.length > 0) {
      state.consumedFood.lunch = action.payload[0].lunch;
    }
    if (action.payload[0].snack.length > 0) {
      state.consumedFood.snack = action.payload[0].snack;
    }
  } else {
    return;
  }
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

const dailyStatisticsFoodSlice = createSlice({
  name: 'dailyStatisticsFood',
  initialState,

  extraReducers: (builder) =>
    builder
      // .addCase(getCurrentStatistics.pending, handlePending)
      // .addCase(getCurrentStatistics.fulfilled, handleGetCurrentFulfilled)
      // .addCase(getCurrentStatistics.rejected, handleRejected)
      //   .addCase(addFood.pending, handlePending)
      .addCase(addFood.fulfilled, handleAddFoodFullfiled)
      //   .addCase(addFood.rejected, handleRejected)
      .addCase(getFood.pending, handlePending)
      .addCase(getFood.fulfilled, handeGetFoodFullfiled)
      .addCase(getFood.rejected, handleRejected),
});

export const dailyStatisticsFoodReducer = dailyStatisticsFoodSlice.reducer;
