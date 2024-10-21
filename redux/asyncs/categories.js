import { api } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCategoriesAsync = createAsyncThunk(
  'categories/get-all',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await api.get('/category');
      return data?.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
