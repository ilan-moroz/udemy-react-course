import React from "react";

const SimpleInput = () => {
  const [inputName, setInputName] = React.useState("");
  const [inputTouched, setInputTouched] = React.useState(false);
  // const nameRef = React.useRef();

  const inputIsValid = inputName.trim() !== "";
  const nameInputIsInvalid = !inputIsValid && inputTouched;

  const inputChangeHandler = e => {
    setInputName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setInputTouched(true);

    if (!inputIsValid) return;

    console.log(
      "🚀 ~ file: SimpleInput.js:5 ~ SimpleInput ~ inputName:",
      inputName
    );
    // const refInput = nameRef.current.value;
    // console.log(
    //   "🚀 ~ file: SimpleInput.js:20 ~ onSubmit ~ refInput:",
    //   refInput
    // );
    // nameRef.current.value = ""; =>not ideal,don`t manipulate the dom
    setInputName("");
    setInputTouched(false);
  };

  const inputBlur = e => {
    setInputTouched(true);
  };

  const inputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSubmit}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlur}
          // ref={nameRef}
          value={inputName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter your name</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
