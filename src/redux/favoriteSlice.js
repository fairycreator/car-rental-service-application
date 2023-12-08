import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritCar: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      state.favoritCar.push(action.payload);
    },
    deleteFavoritCar: (state, action) => {
      state.favoritCar = state.favoritCar.filter(
        (car) => car.id !== action.payload
      );
    },
    deleteAllFavoriteCars: (state) => {
      state.favoritCar = [];
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavoriteCar, deleteAllFavoriteCars, deleteFavoritCar } =
  favoriteSlice.actions;
