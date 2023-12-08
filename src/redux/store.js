import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { advertSlice } from "./advertSlice";
import { filterReducer } from "./filterSlice";
import { favoriteReducer } from "./favoriteSlice";

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favoritCar"],
};

export const store = configureStore({
  reducer: {
    cars: advertSlice.reducer,
    filter: filterReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
