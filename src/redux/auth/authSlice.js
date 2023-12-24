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
  token: '',
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
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      // signin
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      // logout
      .addCase(logOut.fulfilled, (state) => {
        state.userData = { ...defaultUserData };
        state.token = '';
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      // forgotPassword
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.error = action.payload;
      })
      // refreshUser
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      // updateUser
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userData.name = action.payload.name;
        state.userData.gender = action.payload.gender;
        state.userData.age = action.payload.age;
        state.userData.avatar = action.payload.avatar;
        state.userData.activityLevel = action.payload.activityLevel;
        state.userData.height = action.payload.height;
        state.userData.weight = action.payload.weight;
        state.userData.waterRate = action.payload.waterRate;
        state.userData.BMRRate = action.payload.BMRRate;
        state.userData.proteinRate = action.payload.proteinRate;
        state.userData.fatRate = action.payload.fatRate;
        state.userData.carbsRate = action.payload.carbsRate;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      // updateGoal
      .addCase(updateGoal.fulfilled, (state, action) => {
        state.userData.goal = action.payload.user.goal;
        state.userData.proteinRate = action.payload.user.proteinRate;
        state.userData.fatRate = action.payload.user.fatRate;
        state.userData.carbsRate = action.payload.user.carbsRate;
        state.error = null;
      })
      .addCase(updateGoal.rejected, (state, action) => {
        state.error = action.payload;
      })
      // updatewWeight
      .addCase(updateWeight.fulfilled, (state, action) => {
        state.userData.weight = action.payload.user.weight;
        state.userData.BMRRate = action.payload.user.BMRRate;
        state.userData.waterRate = action.payload.user.waterRate;
        state.userData.proteinRate = action.payload.user.proteinRate;
        state.userData.fatRate = action.payload.user.fatRate;
        state.userData.carbsRate = action.payload.user.carbsRate;
        state.error = null;
      })
      .addCase(updateWeight.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
