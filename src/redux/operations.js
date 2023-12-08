import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6571f0ebd61ba6fcc014072c.mockapi.io/",
});

export const fetchCars = createAsyncThunk(
  "adverts/fetchCars",
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}`, {
        params: {
          limit,
        },
      });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
