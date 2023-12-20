import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOut,
  forgotPassword,
  refreshUser,
  updateUser,
  updateGoal,
  updateWeight,
} from './authOperations';

const defaultUserData = {
  name: '',
  email: '',
  goal: '',
  gender: '',
  age: null,
  height: null,
  weight: null,
  activityLevel: null,
  avatar: '',
  waterRate: null,
  BMRRate: null,
  proteinRate: null,
  fatRate: null,
  carbsRate: null,
};

const initialState = {
  userData: { ...defaultUserData },
  token: null,
  error: null,
  isLoading: false,
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
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // signin
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // logout
      .addCase(logOut.fulfilled, (state) => {
        state.userData = { ...defaultUserData };
        state.token = null;
        state.isLoggedIn = false;
      })
      // forgotPassword
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoggedIn = false;
      })
      // refreshUser
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      // updateUser
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      // updateGoal
      .addCase(updateGoal.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      // updatewWeight
      .addCase(updateWeight.fulfilled, (state, action) => {
        state.userData = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
