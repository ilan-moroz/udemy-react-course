import React from "react";

const SimpleInput = props => {
  const [inputName, setInputName] = React.useState("");
  const [validInput, setValidInput] = React.useState(false);
  const [inputTouched, setInputTouched] = React.useState(false);

  const nameRef = React.useRef();

  const inputChangeHandler = e => {
    setInputName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setInputTouched(true);
    if (inputName.trim() === "") {
      setValidInput(false);
      return;
    }
    setValidInput(true);
    console.log(
      "🚀 ~ file: SimpleInput.js:5 ~ SimpleInput ~ inputName:",
      inputName
    );
    const refInput = nameRef.current.value;
    console.log(
      "🚀 ~ file: SimpleInput.js:20 ~ onSubmit ~ refInput:",
      refInput
    );
    // nameRef.current.value = ""; =>not ideal,don`t manipulate the dom
    setInputName("");
  };

  const nameInputIsInvalid = !validInput && inputTouched;

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
          ref={nameRef}
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
