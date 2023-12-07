import { createSlice } from "@reduxjs/toolkit";

export const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    favorites: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.favorites.indexOf(id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(id);
      }
    },
    // other reducers
  },
});

export const { toggleFavorite } = advertsSlice.actions;

export default advertsSlice.reducer;
