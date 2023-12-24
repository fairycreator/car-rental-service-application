export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilledGetMonthStatistics = (state, { payload }) => {
  state.calories = payload.caloriesMonth;
  state.water = payload.waterMonth;
  state.weight = payload.weightMonth;
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// export const handleStatisticsLogoutFulfilled = (state) => {
//   state.calories = [];
//   state.water = [];
//   state.weight = [];
//   state.isLoading = false;
//   state.error = '';
// };
