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

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleRegisterLoginFulfield = (state, action) => {
  state.userData = action.payload.user;
  state.token = action.payload.token;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const handleLogoutFulfield = (state) => {
  state.userData = { ...defaultUserData };
  state.isLoading = false;
  state.token = '';
  state.isLoggedIn = false;
  state.error = null;
};

const handleForgotPasswordFulfield = (state) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = null;
};

const handleRefreshUserFulfield = (state, action) => {
  state.userData = action.payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

const handleUpdateUserFulfield = (state, action) => {
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
  state.isLoading = false;
  state.error = null;
};

const handleUpdateGoalFulfield = (state, action) => {
  state.userData.goal = action.payload.user.goal;
  state.userData.proteinRate = action.payload.user.proteinRate;
  state.userData.fatRate = action.payload.user.fatRate;
  state.userData.carbsRate = action.payload.user.carbsRate;
  state.isLoading = false;
  state.error = null;
};

const handleUpdateWeightFulfield = (state, action) => {
  state.userData.weight = action.payload.user.weight;
  state.userData.BMRRate = action.payload.user.BMRRate;
  state.userData.waterRate = action.payload.user.waterRate;
  state.userData.proteinRate = action.payload.user.proteinRate;
  state.userData.fatRate = action.payload.user.fatRate;
  state.userData.carbsRate = action.payload.user.carbsRate;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      // signup
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, handleRegisterLoginFulfield)
      .addCase(registerUser.rejected, handleRejected)
      // signin
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, handleRegisterLoginFulfield)
      .addCase(loginUser.rejected, handleRejected)
      // logout
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogoutFulfield)
      .addCase(logOut.rejected, handleRejected)
      // forgotPassword
      .addCase(forgotPassword.pending, handlePending)
      .addCase(forgotPassword.fulfilled, handleForgotPasswordFulfield)
      .addCase(forgotPassword.rejected, handleRejected)
      // refreshUser
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfield)
      .addCase(refreshUser.rejected, handleRejected)
      // updateUser
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, handleUpdateUserFulfield)
      .addCase(updateUser.rejected, handleRejected)
      // updateGoal
      .addCase(updateGoal.pending, handlePending)
      .addCase(updateGoal.fulfilled, handleUpdateGoalFulfield)
      .addCase(updateGoal.rejected, handleRejected)
      // updatewWeight
      .addCase(updateWeight.pending, handlePending)
      .addCase(updateWeight.fulfilled, handleUpdateWeightFulfield)
      .addCase(updateWeight.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
