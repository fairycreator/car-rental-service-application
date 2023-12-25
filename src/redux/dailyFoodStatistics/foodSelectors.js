export const selectIsLoading = (state) => state.dailyStatisticsFood.isLoading;
export const selectError = (state) => state.dailyStatisticsFood.error;
export const selectBreakfast = (state) =>
  state.dailyStatisticsFood.consumedFood.breakfast;
export const selectLunch = (state) =>
  state.dailyStatisticsFood.consumedFood.lunch;
export const selectDinner = (state) =>
  state.dailyStatisticsFood.consumedFood.dinner;
export const selectSnack = (state) =>
  state.dailyStatisticsFood.consumedFood.snack;
export const selectOpen = (state) => state.dailyStatisticsFood.isOpen;
export const selectTotalCalories = (state) =>
  state.dailyStatisticsFood.consumedFood.totalCalories;
export const selectTotalCarbs = (state) =>
  state.dailyStatisticsFood.consumedFood.totalCarbs;
export const selectTotalProtein = (state) =>
  state.dailyStatisticsFood.consumedFood.totalProtein;
export const selectTotalFat = (state) =>
  state.dailyStatisticsFood.consumedFood.totalFat;
