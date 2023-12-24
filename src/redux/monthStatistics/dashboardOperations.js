import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api/user',
});

export const getMonthStatistics = createAsyncThunk(
  'monthStatistics/getMonthStatistics',
  async (queryMonth, thuncAPI) => {
    try {
        const { token } = thuncAPI.getState().auth;
        instance.defaults.headers['Authorization'] = `Bearer ${token}`;
      const response = await instance.get('/statistics', {
        params: {
          queryMonth: queryMonth,
        },
      });
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);
