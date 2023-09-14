import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import classes from "./AddUser.module.css";
import React from "react";

const INITIAL_STATE = {
  userName: "",
  age: "",
};

const AddUser = props => {
  const [formData, setFormData] = React.useState(INITIAL_STATE);
  const [isError, SetIsError] = React.useState(false);

  const inputChangedHandler = (input, value) => {
    setFormData(prev => {
      return { ...prev, [input]: value };
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (formData.userName === "" && formData.age === "") {
      SetIsError(true);
      return;
    }
    props.setUsers(prev => [...prev, formData]);
    formResetHandler();
  };

  const formResetHandler = () => {
    setFormData(INITIAL_STATE);
  };

  const removeErrorHandler = () => {
    SetIsError(false);
  };

  return (
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
            <input
              id="username"
              type="text"
              value={formData.userName}
              onChange={e => inputChangedHandler("userName", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              min="1"
              step="1"
              value={formData.age}
              onChange={e => inputChangedHandler("age", e.target.value)}
            />
          </p>
        </div>
        <div className={classes.actions}>
          <Button type={"submit"}>Add User</Button>
          <Button type={"button"} onClick={formResetHandler}>
            Reset
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddUser;
