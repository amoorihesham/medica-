import { createSlice } from '@reduxjs/toolkit';
import { getHotDealsAsync } from '../asyncs/hotDeals';

const initialState = {
  hotDeals: [],
  isLoading: false,
  error: null,
};
const hotDealsSlice = createSlice({
  name: 'hot-deals-products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotDealsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHotDealsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hotDeals = action.payload;
      })
      .addCase(getHotDealsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default hotDealsSlice.reducer;
