import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//test
axios.defaults.baseURL = 'https://658346b34d1ee97c6bcdc353.mockapi.io';


export const getMonthStatistics = createAsyncThunk(
  'monthStatistics/getMonthStatistics',
  async (body, thuncAPI) => {
    try {
      const response = await axios.get('/statistics', body);
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);
