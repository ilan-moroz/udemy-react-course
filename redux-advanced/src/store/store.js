// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";

// Combining all the reducers in the application
const reducers = {
  ui: uiSlice,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
