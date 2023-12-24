import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api',
});

export const addFood = createAsyncThunk(
  'dailyStatisticsFood/addFood',
  async (food, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;

    const response = await instance.post('/user/food-intake', food);
    return response.data;
  }
);

export const getFood = createAsyncThunk(
  'dailyStatisticsFood/getFood',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
    const response = await instance.get('/user/food-intake');
    return response.data;
  }
);
