
import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    addToPurchaseHistory: (state, action) => {
      state.push(action.payload);
    },
    emptyPurchaseHistory: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addToPurchaseHistory, emptyPurchaseHistory } = historySlice.actions;

export default historySlice.reducer;
