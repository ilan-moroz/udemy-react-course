import React from "react";
import useInput from "../hooks/useInput";

const BasicForm = props => {
  const {
    hasError: firstNameError,
    inputValue: firstNameInput,
    inputChangeHandler: setFirstNameInput,
    inputBlur: firstNameBlurHandler,
    inputValid: firstNameIsValid,
    reset: resetFirstNameInput,
  } = useInput(value => value.trim() !== "");

  const {
    hasError: lastNameError,
    inputValue: lastNameInput,
    inputChangeHandler: setLAstNameInput,
    inputBlur: lastNameBlurHandler,
    inputValid: lastNameIsValid,
    reset: resetLastNameInput,
  } = useInput(value => value.trim() !== "");

  const {
    hasError: emailError,
    inputValue: emailInput,
    inputChangeHandler: setEmailInput,
    inputBlur: emailBlurHandler,
    inputValid: emailIsValid,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== "" && value.includes("@"));

  const formIsValid =
    firstNameIsValid && lastNameIsValid && emailIsValid ? true : false;

  const firstNameInputChangeHandler = e => {
    setFirstNameInput(e.target.value);
  };

  const lastNameInputChangeHandler = e => {
    setLAstNameInput(e.target.value);
  };

  const emailInputChangeHandler = e => {
    setEmailInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = !firstNameError
    ? "form-control"
    : "form-control invalid";
  const lastNameInputClasses = !lastNameError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSubmit}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameInput}
          />
          {firstNameError && (
            <p className="error-text">Please enter your first name</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameInput}
          />
          {lastNameError && (
            <p className="error-text">Please enter your last name</p>
          )}
        </div>
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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
