export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFulfilledGetStatistics = (state, { payload }) => {
  state.items = payload;
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
