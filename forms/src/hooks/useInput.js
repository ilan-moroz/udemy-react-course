import React from "react";

const useInput = validateValue => {
  const [inputValue, setInputValue] = React.useState("");
  const [InputTouched, setInputTouched] = React.useState(false);

  const inputValid = validateValue(inputValue);
  const hasError = !inputValid && InputTouched;

  const inputChangeHandler = value => {
    setInputValue(value);
  };

  const inputBlur = () => {
    setInputTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputTouched("");
  };

  return {
    inputValue,
    hasError,
    inputValid,
    inputChangeHandler,
    inputBlur,
    reset,
  };
};

export default useInput;
