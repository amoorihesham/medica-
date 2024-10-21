import { api } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPartnersAsync = createAsyncThunk(
  'partners/get-all',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await api.get('/brand');
      return data?.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
