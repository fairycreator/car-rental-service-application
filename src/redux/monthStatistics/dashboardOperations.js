import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthy-life-backend-b6ck.onrender.com/api/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getMonthStatistics = createAsyncThunk(
  'monthStatistics/getMonthStatistics',
  async (queryMonth, thuncAPI) => {
    try {
      const { token } = thuncAPI.getState().auth;
      console.log(token);
      setAuthHeader(token);
      const response = await axios.get('user/statistics', {
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
