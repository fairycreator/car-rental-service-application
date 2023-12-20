import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api/',
});

// export const getCurrentStatistics = createAsyncThunk(
//   'dailyStatistics/getCurrent',
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get('/user/current');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const addWater = createAsyncThunk(
  'dailyStatistics/addWater',
  async (water, thunkAPI) => {
    try {
      const response = await instance.post('/user/water-intake', water);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'dailyStatistics/deleteWater',
  async (_id, thunkAPI) => {
    try {
      const response = await instance.delete('/user/water-intake', _id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
