import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
// import Wrapper from "../helpers/Wrapper";
import classes from "./AddUser.module.css";
import React from "react";

const AddUser = props => {
  const [isError, SetIsError] = React.useState(false);

  const nameInputRef = React.useRef();
  const ageInputRef = React.useRef();

  const handleFormSubmit = e => {
    e.preventDefault();
    const inputName = nameInputRef.current.value;
    const inputAge = ageInputRef.current.value;
    if (inputName === "" && inputAge === "") {
      SetIsError(true);
      return;
    }
    const formData = {
      userName: inputName,
      age: inputAge,
    };
    props.setUsers(prev => [...prev, formData]);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const removeErrorHandler = () => {
    SetIsError(false);
  };

  return (
    // <Wrapper>
    <>
      {isError && (
        <ErrorModal
          title="Invalid input"
          msg="Please enter a valid name and age (non-empty values)!"
          onClick={removeErrorHandler}
        />
      )}
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef} />
          </p>
          <p>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" min="1" step="1" ref={ageInputRef} />
          </p>
        </div>
        <div className={classes.actions}>
          <Button type={"submit"}>Add User</Button>
          <Button type={"reset"}>Reset</Button>
        </div>
      </form>
      {/* </Wrapper> */}
    </>
  );
};

export default AddUser;
