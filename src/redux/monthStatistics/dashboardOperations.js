import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthy-life-backend-b6ck.onrender.com/api/user';


export const getMonthStatistics = createAsyncThunk(
  'monthStatistics/getMonthStatistics',
  async (queryMonth, thuncAPI) => {
    try {
      const response = await axios.get('/statistics', {
        params: {
          queryMonth: queryMonth,
        },
      });
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);
