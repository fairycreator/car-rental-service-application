import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';

import { recReducer } from './recomendedFoods/recSlice';

import { dailyWaterStatisticsReducer } from './dailyWaterStatistics/waterSlice';

import { monthStatisticsReducer } from './monthStatistics/dashboardStatisticsSlice';
import { dailyStatisticsFoodReducer } from './dailyFoodStatistics/foodSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),

    recommendedFoods: recReducer,

    dailyWaterStatistics: dailyWaterStatisticsReducer,

    monthStatistics: monthStatisticsReducer,
    dailyStatisticsFood: dailyStatisticsFoodReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
