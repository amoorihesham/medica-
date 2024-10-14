import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import allProductsReducer from './slices/allProductsSlice';
import topProductsReducer from './slices/topProductsSlice';
import hotDealsProductsReducer from './slices/hotDealsSlice';
import partnersReducer from './slices/partnersSlice';
import cartReducer from './slices/cartSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductsReducer,
    topProducts: topProductsReducer,
    hotDeals: hotDealsProductsReducer,
    partners: partnersReducer,
    cart: cartReducer,
  },
});

export default store;
