const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };

    case "decrement":
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterSub = () => {
  const latestState = store.getState();
  console.log(
    "🚀 ~ file: redux-demo.js:13 ~ counterSub ~ latestState:",
    latestState
  );
};

store.subscribe(counterSub);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
