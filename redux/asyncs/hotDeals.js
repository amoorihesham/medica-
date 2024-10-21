import { api } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getHotDealsAsync = createAsyncThunk(
  'hot-deals/get-all',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await api.post('/items', {
        allItems: 0,
        hotDeal: 1,
        topProducts: 0,
        category_id: 0,
        sub_category_id: 0,
        brand_id: 0,
        vendor_id: 0,
      });
      return data?.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
