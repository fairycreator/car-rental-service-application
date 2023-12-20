import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api/',
});

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
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
      const { data } = await instance.post('auth/signup', dataUser);
      token.set(data.token);

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
      const { data } = await instance.post('auth/signin', dataUser);
      token.set(data.token);

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
    token.clear();
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
      token.set(token);
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
    try {
      const { data } = await instance.put('user/update', dataUser);

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
      const { data } = await instance.put('user/goal', dataUser);

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
      const { data } = await instance.put('user/weight', dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
