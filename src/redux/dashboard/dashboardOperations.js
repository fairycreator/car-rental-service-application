import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//test
axios.defaults.baseURL = 'https://658346b34d1ee97c6bcdc353.mockapi.io';


export const getMonthStatistics = createAsyncThunk(
  'monthStatistics/getMonthStatistics',
  async (queryMonth, thuncAPI) => {
    try {
      const response = await axios.get('/statistics', {
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
