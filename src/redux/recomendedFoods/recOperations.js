import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthy-life-backend-b6ck.onrender.com/api/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchRecFoods = createAsyncThunk(
  'recommendedFood/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      setAuthHeader(token);
      const response = await axios.get('recommended-food');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
