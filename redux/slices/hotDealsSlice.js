import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotDealsProducts: [],
  isLoading: false,
  error: null,
};
const hotDealsSlice = createSlice({
  name: 'hot-deals-products',
  initialState,
  reducers: {
    setProductsList: (state, action) => {
      state.hotDealsProducts = action.payload;
    },
  },
});

export const { setProductsList } = hotDealsSlice.actions;
export default hotDealsSlice.reducer;
