import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./filterSlice"
import cartReducer from './cartSlice'
import historyReducer from "./historySlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    history: historyReducer,
  },
})

export default store