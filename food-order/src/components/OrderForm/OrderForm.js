import React from "react";
import useInput from "../../hooks/useInput";
import "./OrderForm.css";

const OrderForm = props => {
  const {
    hasError: fullNameError,
    inputValue: fullNameInput,
    inputChangeHandler: setFullNameInput,
    inputBlur: fullNameBlurHandler,
    inputValid: fullNameIsValid,
    reset: resetFullNameInput,
  } = useInput(value => value.trim() !== "");

  const {
    hasError: addressError,
    inputValue: addressInput,
    inputChangeHandler: setAddressInput,
    inputBlur: addressBlurHandler,
    inputValid: addressIsValid,
    reset: resetAddressInput,
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
    fullNameIsValid && addressIsValid && emailIsValid ? true : false;

  const firstNameInputChangeHandler = e => {
    setFullNameInput(e.target.value);
  };

  const lastNameInputChangeHandler = e => {
    setAddressInput(e.target.value);
  };

  const emailInputChangeHandler = e => {
    setEmailInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    resetFullNameInput();
    resetAddressInput();
    resetEmailInput();
  };

  const firstNameInputClasses = !fullNameError
    ? "form-control"
    : "form-control invalid";
  const lastNameInputClasses = !addressError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSubmit}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">Full name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameInputChangeHandler}
            onBlur={fullNameBlurHandler}
            value={fullNameInput}
          />
          {fullNameError && (
            <p className="error-text">Please enter your full name</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Full address</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameInputChangeHandler}
            onBlur={addressBlurHandler}
            value={addressInput}
          />
          {addressError && (
            <p className="error-text">Please enter your full address </p>
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
        <button disabled={!formIsValid}>Checkout</button>
      </div>
    </form>
  );
};

export default OrderForm;
