import { createSlice } from '@reduxjs/toolkit';
import { getMonthStatistics } from './dashboardOperations';
import {
  handlePending,
  handleRejected,
  handleFulfilledGetMonthStatistics,
} from './dashboardReducers';

// import { logOut } from './auth/authOperations';

const monthStatisticsInitialState = {
  colories: [],
  water: [],
  weight: [],
  isLoading: false,
  error: null,
};

const monthStatisticsSlice = createSlice({
  name: 'monthStatistics',
  initialState: monthStatisticsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMonthStatistics.pending, handlePending)
      .addCase(getMonthStatistics.fulfilled, handleFulfilledGetMonthStatistics)
      .addCase(getMonthStatistics.rejected, handleRejected);
    //   .addCase(logOut.fulfilled, handleStatisticsLogoutFulfilled)
  },
});

export const monthStatisticsReducer = monthStatisticsSlice.reducer;
