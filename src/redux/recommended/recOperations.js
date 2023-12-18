import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRecFood } from '../../api/recommendedApi';

export const fetchRecFoods = createAsyncThunk(
    'recommendedFood/fetchAll',
    async (_, thunkApi) => {
        try {
            const recommendedFoods = await getRecFood();
            return recommendedFoods;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
  }
)