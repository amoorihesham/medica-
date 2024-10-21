import { createSlice } from '@reduxjs/toolkit';
import { getPartnersAsync } from '../asyncs/partners';

const initialState = {
  partners: [],
  isLoading: false,
  error: null,
};
const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPartnersAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPartnersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.partners = action.payload;
      })
      .addCase(getPartnersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default partnersSlice.reducer;
