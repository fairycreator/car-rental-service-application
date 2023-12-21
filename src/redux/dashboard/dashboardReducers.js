export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilledGetMonthStatistics = (state, { payload }) => {
  state.calories = payload[0].statistics.calories;
  state.water = payload[0].statistics.water;
  state.weight = payload[0].statistics.weight;
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// export const handleStatisticsLogoutFulfilled = (state) => {
//   state.items = [];
//   state.isLoading = false;
//   state.error = '';
// };
