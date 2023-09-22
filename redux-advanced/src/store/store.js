// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";

// Combining all the reducers in the application
const reducers = {
  ui: uiSlice,
  cart: cartSlice,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
