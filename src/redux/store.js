import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice';
import pizzasSlice from './pizzasSlice';


export const store = configureStore({
  reducer: {
    filterSlice, pizzasSlice
  },
})