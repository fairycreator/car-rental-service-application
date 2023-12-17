import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const instanse = axios.create({
  baseURL: '',
});

export const getStatisticsForDashboard = createAsyncThunk(
  'statistics/getStatistics',
  async (_, thuncAPI) => {
    try {
      const response = await instanse.get('/statistics');
      return response.data;
    } catch (error) {
      return thuncAPI.rejectWithValue(error.message);
    }
  }
);