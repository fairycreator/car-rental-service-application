export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilledGetMonthStatistics = (state, { payload }) => {
  state.calories = payload[0].caloriesMonth;
  state.water = payload[0].waterMonth;
  state.weight = payload[0].weightMonth;
  console.log('state.calories ', state.calories);
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
