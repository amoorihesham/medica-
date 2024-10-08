import { createSlice } from '@reduxjs/toolkit';
import { authRegister } from '../asyncs/authAsync';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.clear();
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, (state) => (state.isLoading = true))
      .addCase(authRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
