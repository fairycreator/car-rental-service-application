export const selectstatisticsForDashboard = (state) =>
  state.statisticsForDashboard.items;
export const selectIsLoading = (state) => state.statisticsForDashboard.isLoading;
export const selectError = (state) => state.statisticsForDashboard.error;