import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';

export const getBannersAsync = createAsyncThunk(
  'banners/get-all',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await api.get('/banners');
      return data?.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
