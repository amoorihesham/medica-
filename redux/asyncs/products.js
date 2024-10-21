import { api } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsAsync = createAsyncThunk(
  'products/get-all',
  async (_, { rejectedWithValue }) => {
    try {
      let { data } = await api.post('/items', {
        allItems: 1,
        hotDeal: 0,
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
