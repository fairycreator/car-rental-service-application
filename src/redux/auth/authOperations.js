import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthy-life-backend-b6ck.onrender.com/api/';

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const handleError = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const registerUser = createAsyncThunk(
  'auth/signup',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('auth/signup', dataUser);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/signin',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('auth/signin', dataUser);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/signout');
    clearAuthHeader();
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (dataUser, thunkAPI) => {
    try {
      await axios.post('auth/forgot-password', dataUser);

      console.log('Password send');
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.get('user/current');
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update-profile',
  async (dataUser, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.put('user/update', dataUser, config);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const updateGoal = createAsyncThunk(
  'auth/update-goal',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.put('user/goal', dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const updateWeight = createAsyncThunk(
  'auth/update-weight',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('user/weight', dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
