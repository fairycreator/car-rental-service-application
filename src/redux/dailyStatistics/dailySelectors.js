export const selectIsLoading = (state) => state.dailyWaterStatistics.isLoading;
export const selectError = (state) => state.dailyWaterStatistics.error;
export const selectConsumedWaterValue = (state) =>
  state.dailyWaterStatistics.consumedWater.value;
export const selectConsumedWaterId = (state) =>
  state.dailyWaterStatistics.consumedWater._id;
