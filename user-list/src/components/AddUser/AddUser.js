import Button from "../Button/Button";
import classes from "./AddUser.module.css";
import React from "react";

const INITIAL_STATE = {
  userName: "",
  age: "",
};

const AddUser = props => {
  const [formData, setFormData] = React.useState(INITIAL_STATE);

  const inputChangedHandler = (input, value) => {
    setFormData(prev => {
      return { ...prev, [input]: value };
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    props.setUsers(prev => [...prev, formData]);
    formResetHandler();
  };

  const formResetHandler = () => {
    setFormData(INITIAL_STATE);
  };

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={formData.userName}
            onChange={e => inputChangedHandler("userName", e.target.value)}
            required
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
            required
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
  );
};

export default AddUser;
