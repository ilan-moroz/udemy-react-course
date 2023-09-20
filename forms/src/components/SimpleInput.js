import React from "react";

const SimpleInput = () => {
  // const nameRef = React.useRef();
  // name input
  const [nameInput, setNameInput] = React.useState("");
  const [nameInputTouched, setNmeInputTouched] = React.useState(false);
  const nameInputIsValid = nameInput.trim() !== "";
  const nameInputIsInvalid = !nameInputIsValid && nameInputTouched;

  // mail input
  const [emailInput, setEmailInput] = React.useState("");
  const [emailInputTouched, seEmailInputTouched] = React.useState(false);
  const emailInputIsValid =
    emailInput.trim() !== "" && emailInput.includes("@");
  const emailInputIsInvalid = !emailInputIsValid && emailInputTouched;

  const formIsValid = nameInputIsValid && emailInputIsValid ? true : false;

  const nameInputChangeHandler = e => {
    setNameInput(e.target.value);
  };

  const emailInputChangeHandler = e => {
    setEmailInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setNmeInputTouched(true);

    if (!nameInputIsValid && !emailInputIsValid) return;

    // const refInput = nameRef.current.value;
    // console.log(
    //   "🚀 ~ file: SimpleInput.js:20 ~ onSubmit ~ refInput:",
    //   refInput
    // );
    // nameRef.current.value = ""; =>not ideal,don`t manipulate the dom
    setNameInput("");
    setNmeInputTouched(false);
    setEmailInput("");
    seEmailInputTouched(false);
  };

  const inputBlur = e => {
    if (e.target.id === "name") {
      setNmeInputTouched(true);
    } else if (e.target.id === "email") {
      seEmailInputTouched(true);
    }
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailInputIsInvalid
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
          onBlur={inputBlur}
          // ref={nameRef}
          value={nameInput}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter your name</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={inputBlur}
          value={emailInput}
        />
        {emailInputIsInvalid && (
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
