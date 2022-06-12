import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../data/productSlice';
import categoriesSlice from '../data/categoriesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    categories: categoriesSlice,
  },
});
