import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL:  'https://healthy-life-backend-b6ck.onrender.com/api/',
});
// 
export const fetchRecFoods = createAsyncThunk(
  'recommendedFood/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      instance.defaults.headers['Authorization'] = `Bearer ${token}`;
      const response = await instance.get('recommended-food');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
