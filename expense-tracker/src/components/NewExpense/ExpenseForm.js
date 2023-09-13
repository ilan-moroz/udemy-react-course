import "./ExpenseForm.css";
import React from "react";

const ExpenseForm = props => {
  const [formData, setFormData] = React.useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = e => {
    setFormData(prev => {
      return { ...prev, title: e.target.value };
    });
  };

  const amountChangeHandler = e => {
    setFormData(prev => {
      return { ...prev, amount: e.target.value };
    });
  };

  const dateChangeHandler = e => {
    setFormData(prev => {
      return { ...prev, date: e.target.value };
    });
  };

  const submitHandler = e => {
    e.preventDefault();

    const newExpenseData = {
      title: formData.title,
      amount: +formData.amount,
      date: new Date(formData.date),
    };

    props.onSaveExpenseData(newExpenseData);

    setFormData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={formData.title}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min=".01"
            step=".01"
            onChange={amountChangeHandler}
            value={formData.amount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-01-01"
            onChange={dateChangeHandler}
            value={formData.date}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
