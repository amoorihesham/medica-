import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topProducts: [],
  isLoading: false,
  error: null,
};
const topProductsSlice = createSlice({
  name: 'top-products',
  initialState,
  reducers: {
    setProductsList: (state, action) => {
      state.topProducts = action.payload;
    },
  },
});

export const { setProductsList } = topProductsSlice.actions;
export default topProductsSlice.reducer;
