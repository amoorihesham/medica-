import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';

export const getSubCategoriesAsync = createAsyncThunk(
  'subCategories/get-all',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await api.get('/sub-category');
      return data?.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
