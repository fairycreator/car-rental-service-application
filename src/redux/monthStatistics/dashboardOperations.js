import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthy-life-backend-b6ck.onrender.com/api/user';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODNmYmY4MzJlNmUzN2EwZmYyMDczYyIsImlhdCI6MTcwMzE0ODUzNiwiZXhwIjoyMDE4NzI0NTM2fQ.pjD5xg6406AEQvTOvMBOeg7p3DTHs1w6a0WVZ7iZ5Gc';

export const getMonthStatistics = createAsyncThunk(
  'monthStatistics/getMonthStatistics',
  async (queryMonth, thuncAPI) => {
    try {
      const response = await axios.get('/statistics', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
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
