// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

// Combining all the reducers in the application
const reducers = {
  counter: counterSlice,
  auth: authSlice,
};

const store = configureStore({
  reducer: reducers,
});

export default store;

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };

//     case "increase":
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };

//     case "decrement":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };

//     case "toggle":
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;
