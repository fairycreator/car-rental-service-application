import axios from 'axios'; 
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api/',
});




export const fetchRecFoods = createAsyncThunk(
    'recommendedFood/fetchAll',
    async (_, thunkApi) => {
        try {
            const {items} = await instance.get('recommended-food');
            return items;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
  }
)