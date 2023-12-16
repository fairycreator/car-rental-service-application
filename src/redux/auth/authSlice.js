import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './authOperations';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  authenticated: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      // signup
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
        state.error = null;
      })
      // signin
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
        state.isLoggedIn = true;
        state.error = null;
      }),
});

export const authReducer = authSlice.reducer;
