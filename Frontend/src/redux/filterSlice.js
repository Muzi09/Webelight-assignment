
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'None',
  price: 'None',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setCategory, setPrice } = filterSlice.actions;

export default filterSlice.reducer;
