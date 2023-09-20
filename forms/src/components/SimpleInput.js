import React from "react";
import useInput from "../hooks/useInput";

const SimpleInput = () => {
  // const nameRef = React.useRef();
  // name input
  const {
    hasError: nameError,
    inputValue: nameInput,
    inputChangeHandler: setNameInput,
    inputBlur: nameBlurHandler,
    inputValid: nameIsValid,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== "");

  // mail input
  const {
    hasError: emailError,
    inputValue: emailInput,
    inputChangeHandler: setEmailInput,
    inputBlur: emailBlurHandler,
    inputValid: emailIsValid,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== "" && value.includes("@"));

  const formIsValid = nameIsValid && emailIsValid ? true : false;

  const nameInputChangeHandler = e => {
    setNameInput(e.target.value);
  };

  const emailInputChangeHandler = e => {
    setEmailInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!nameIsValid && !emailIsValid) return;

    // const refInput = nameRef.current.value;
    // console.log(
    //   "🚀 ~ file: SimpleInput.js:20 ~ onSubmit ~ refInput:",
    //   refInput
    // );
    // nameRef.current.value = ""; =>not ideal,don`t manipulate the dom
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = !nameError ? "form-control" : "form-control invalid";
  const emailInputClasses = !emailError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
          // ref={nameRef}
          value={nameInput}
        />
        {nameError && <p className="error-text">Please enter your name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailError && (
          <p className="error-text">Please enter a valid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
