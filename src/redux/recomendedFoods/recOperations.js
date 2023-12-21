import axios from 'axios'; 
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
 baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api/'
  
});




export const fetchRecFoods = createAsyncThunk(
  'recommendedFood/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('recommended-ood');
     
      return response.data;
      

    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
     
  }
);

