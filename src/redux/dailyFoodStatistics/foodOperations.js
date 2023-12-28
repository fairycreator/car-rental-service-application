import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthy-life-backend-b6ck.onrender.com/api/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addFood = createAsyncThunk(
  'dailyStatisticsFood/addFood',
  async (food, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    setAuthHeader(token);
    const response = await axios.post('/user/food-intake', food);
    return response.data;
  }
);

export const getFood = createAsyncThunk(
  'dailyStatisticsFood/getFood',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    setAuthHeader(token);
    const response = await axios.get('/user/food-intake');
    return response.data;
  }
);

export const deleteFood = createAsyncThunk(
  'dailyStatisticsFood/deleteFood',
  async (foodType, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    setAuthHeader(token);
    const response = await axios.delete(`/user/food-intake`, {
      data: { ...foodType },
    });
    return response.data;
  }
);

export const updateFood = createAsyncThunk(
  'dailyStatisticsFood/updateFood',
  async ({ id, food }, thunkAPI) => {
    console.log(id);
    console.log(food);
    const { token } = thunkAPI.getState().auth;
    setAuthHeader(token);

    const response = await axios.put(`/user/food-intake/${id}`, { ...food });
    return response.data;
  }
);
