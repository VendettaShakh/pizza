import { configureStore, createSlice } from '@reduxjs/toolkit'
import filterSlice from './filterSlice';
import pizzasSlice from './pizzasSlice';
import cartSlice from './cartSlice';



export const store = configureStore({
  reducer: {
    filterSlice, pizzasSlice, cartSlice
  },
})