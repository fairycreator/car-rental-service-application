import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'api_url',
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
  //   'auth/registerUser',
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
  //   'auth/loginUser',
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
