import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
// import { selectUserToken } from '../auth/authSelectors';

export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api',
});

// export const getDailyStatistics = createAsyncThunk(
//   'dailyStatistics/getCurrent',
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get('/user/dailyStatistics');
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
      const { token } = thunkAPI.getState().auth;
      instance.defaults.headers['Authorization'] = `Bearer ${token}`;
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
      const { token } = thunkAPI.getState().auth;
      instance.defaults.headers['Authorization'] = `Bearer ${token}`;
      const response = await instance.delete('/user/water-intake', {
        data: { _id },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
