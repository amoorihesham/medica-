import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  isLoading: false,
  error: null,
};
const allProductsSlice = createSlice({
  name: 'all-products',
  initialState,
  reducers: {
    setProductsList: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setProductsList } = allProductsSlice.actions;
export default allProductsSlice.reducer;
