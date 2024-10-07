import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partners: [],
  isLoading: false,
  error: null,
};
const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    setPartnersList: (state, action) => {
      state.partners = action.payload;
    },
  },
});

export const { setPartnersList } = partnersSlice.actions;
export default partnersSlice.reducer;
