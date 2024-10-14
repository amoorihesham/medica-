import { createSlice } from '@reduxjs/toolkit';
import { addCartItem, getCartData } from '../asyncs/cartAsync';

const initialState = {
  cart: null,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else if (existingItem && existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
    addItem: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartData.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
