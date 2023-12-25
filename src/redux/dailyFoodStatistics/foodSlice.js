import { createSlice } from '@reduxjs/toolkit';
import { addFood, deleteFood, getFood } from './foodOperations';

const handlePending = (state) => {
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddFoodFullfiled = (state, action) => {
  state.isLoading = false;
  state.error = null;

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
  if (action.payload) {
  

    // if (action.payload.breakfast.length > 0) {
    state.consumedFood.breakfast = action.payload[0].breakfast;
    // }
    // if (action.payload.dinner.length > 0) {
    state.consumedFood.dinner = action.payload[0].dinner;
    // }
    // if (action.payload.lunch.length > 0) {
    state.consumedFood.lunch = action.payload[0].lunch;
    // }
    // if (action.payload.snack.length > 0) {
    state.consumedFood.snack = action.payload[0].snack;
    // }
  }
};

const deleteHandlerFullfilled = (state, action) => {
  const type = action.meta.arg.typeFood;
  if (action.payload.message) {
    state.consumedFood[type] = [];
  } else {
    state.error = action.payload.message;
  }
};

const consumedFood = {
  totalCalories: 0,
  totalCarbs: 0,
  totalProtein: 0,
  totalFat: 0,
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
};

const initialState = {
  consumedFood,
 
};

const dailyStatisticsFoodSlice = createSlice({
  name: 'dailyStatisticsFood',
  initialState,

  extraReducers: (builder) =>
    builder

      .addCase(addFood.fulfilled, handleAddFoodFullfiled)
      .addCase(getFood.fulfilled, handeGetFoodFullfiled)
      .addCase(getFood.rejected, handleRejected)
      .addCase(deleteFood.fulfilled, deleteHandlerFullfilled),
});

export const dailyStatisticsFoodReducer = dailyStatisticsFoodSlice.reducer;
