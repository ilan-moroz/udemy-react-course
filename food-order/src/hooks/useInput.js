import React from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };

    case "BLUR":
      return { isTouched: true, value: state.value };

    case "RESET":
      return { value: "", isTouched: false };

    default:
      return initialState;
  }
};

const useInput = validateValue => {
  const [inputState, dispatch] = React.useReducer(
    inputStateReducer,
    initialState
  );

  const inputValid = validateValue(inputState.value);
  const hasError = !inputValid && inputState.isTouched;

  const inputChangeHandler = value => {
    dispatch({ type: "INPUT", value: value });
  };

  const inputBlur = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    inputValue: inputState.value,
    hasError,
    inputValid,
    inputChangeHandler,
    inputBlur,
    reset,
  };
};

export default useInput;
