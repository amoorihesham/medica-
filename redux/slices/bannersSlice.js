import { createSlice } from '@reduxjs/toolkit';
import { getBannersAsync } from '../asyncs/banners';

const initialState = {
  banners: [],
  isLoading: false,
  error: null,
};

const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBannersAsync.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getBannersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.banners = action.payload;
      })
      .addCase(getBannersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default bannersSlice.reducer;
