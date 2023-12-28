import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthy-life-backend-b6ck.onrender.com/api/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getDailyWater = createAsyncThunk(
  'dailyWaterStatistics/getDailyWater',
  async (_, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      setAuthHeader(token);
      const response = await axios.get('/user/water-intake');
      if (response.data.waterIntakeRecord === null) {
        return {
          waterIntakeRecord: {
            value: 0,
            _id: '',
          },
        };
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'dailyWaterStatistics/addWater',
  async (water, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      setAuthHeader(token);
      const response = await axios.post('/user/water-intake', water);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'dailyWaterStatistics/deleteWater',
  async (_id, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      setAuthHeader(token);
      const response = await axios.delete('/user/water-intake', {
        data: { _id },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
