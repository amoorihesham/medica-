import { createSlice } from '@reduxjs/toolkit';
import { getTopProductsAsync } from '../asyncs/topProducts';

const initialState = {
  topProducts: [],
  isLoading: false,
  error: null,
};
const topProductsSlice = createSlice({
  name: 'top-products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopProductsAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getTopProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topProducts = action.payload;
      })
      .addCase(getTopProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default topProductsSlice.reducer;
