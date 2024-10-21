import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import allProductsReducer from './slices/allProductsSlice';
import topProductsReducer from './slices/topProductsSlice';
import hotDealsProductsReducer from './slices/hotDealsSlice';
import partnersReducer from './slices/partnersSlice';
import cartReducer from './slices/cartSlice';
import bannersReducer from './slices/bannersSlice';
import categoriesReducer from './slices/categoriesSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: allProductsReducer,
    topProducts: topProductsReducer,
    hotDeals: hotDealsProductsReducer,
    partners: partnersReducer,
    cart: cartReducer,
    banners: bannersReducer,
    categories: categoriesReducer,
  },
});

export default store;
