import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload]
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload._id)
    },
    emptyCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer