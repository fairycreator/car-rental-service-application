import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api/',
});

export const getCurrentWater = createAsyncThunk(
  'water/getCurrentWater',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/user/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (water, thunkAPI) => {
    try {
      const response = await instance.post('/user/water-intake', water);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearWater = createAsyncThunk(
  'water/clearWater',
  async (thunkAPI) => {
    try {
      await instance.delete('/user/water-intake');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
