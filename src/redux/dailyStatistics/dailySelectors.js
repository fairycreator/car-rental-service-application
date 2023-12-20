export const selectIsLoading = (state) => state.dailyStatistics.isLoading;
export const selectError = (state) => state.dailyStatistics.error;
export const selectConsumedWaterValue = (state) =>
  state.dailyStatistics.consumedWater.value;
export const selectConsumedWaterId = (state) =>
  state.dailyStatistics.consumedWater._id;
// export const selectConsumedFood = state => state.dailyStatistics.consumedFood;
export const selectBreakfast = (state) =>
  state.dailyStatistics.consumedFood.breakfast;
export const selectLunch = (state) => state.dailyStatistics.consumedFood.lunch;
export const selectDinner = (state) =>
  state.dailyStatistics.consumedFood.dinner;
export const selectSnack = (state) => state.dailyStatistics.consumedFood.snack;
