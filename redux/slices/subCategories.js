import { createSlice } from '@reduxjs/toolkit';
import { getSubCategoriesAsync } from '../asyncs/subCategories';

const initialState = {
  subCategories: [],
  isLoading: false,
  error: null,
};

const subCategoriesSlice = createSlice({
  name: 'subcategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubCategoriesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubCategoriesAsync.fulfilled, (state, action) => {
        state.isLoading = true;
        state.subCategories = action.payload;
      })
      .addCase(getSubCategoriesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default subCategoriesSlice.reducer;
