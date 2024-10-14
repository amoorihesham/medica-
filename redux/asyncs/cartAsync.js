import { apiCart } from '@/utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCartData = createAsyncThunk('cart/get-data', async (userToken, thunkApi) => {
  try {
    const { data } = await apiCart.get('/all-item-cart', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return data?.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const addCartItem = createAsyncThunk(
  'cart/add-item',
  async ({ userToken, item_id, store_id, quantity }, thunkApi) => {
    try {
      const { data } = await apiCart.post(
        '/add-item',
        { item_id, store_id, quantity },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(data?.data);
      // return data?.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
