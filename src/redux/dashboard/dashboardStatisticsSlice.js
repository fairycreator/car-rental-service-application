import { createSlice } from '@reduxjs/toolkit';
import { getStatisticsForDashboard } from './dashboardOperations';
import { handleFulfilledGetStatistics, handlePending, handleRejected } from './dashboardReducers';
// import { logOut } from './auth/authOperations';

const dashboardStatisticsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const dashboardStatisticsSlice = createSlice({
  name: 'statisticsForDashboard',
  initialState: dashboardStatisticsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStatisticsForDashboard.pending, handlePending)
      .addCase(
        getStatisticsForDashboard.fulfilled,
        handleFulfilledGetStatistics
      )
      .addCase(getStatisticsForDashboard.rejected, handleRejected);
    //   .addCase(logOut.fulfilled, handleStatisticsLogoutFulfilled)
  },
});

export const dashboardStatisticsReducer = dashboardStatisticsSlice.reducer;
