import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = cartSlice.actions;
export default cartSlice.reducer;
