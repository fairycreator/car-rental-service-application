import { createSlice } from '@reduxjs/toolkit';
import { getCurrentWater, addWater } from '../Water/waterOperations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleGetCurrentWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.value = action.payload;
};
const handleAddWaterFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.value += action.payload;
};

const contactsSlice = createSlice({
  name: 'water',
  initialState: {
    value: 0,
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getCurrentWater.pending, handlePending)
      .addCase(getCurrentWater.fulfilled, handleGetCurrentWaterFulfilled)
      .addCase(getCurrentWater.rejected, handleRejected)
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, handleAddWaterFulfilled)
      .addCase(addWater.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
