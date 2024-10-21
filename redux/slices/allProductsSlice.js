import { createSlice } from '@reduxjs/toolkit';
import { getProductsAsync } from '../asyncs/products';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};
const allProductsSlice = createSlice({
  name: 'all-products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default allProductsSlice.reducer;
