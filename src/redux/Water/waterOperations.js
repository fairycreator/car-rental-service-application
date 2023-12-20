import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api/',
});

export const getCurrentWater = createAsyncThunk(
  'water/getCurrentWater',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('user/current');
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
      const response = await axios.post('user/current/water', water);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
