import { configureStore } from '@reduxjs/toolkit';
import { monthStatisticsReducer } from './dashboardStatisticsSlice';

export const store = configureStore({
  reducer: {
    monthStatistics: monthStatisticsReducer,
  },
});

