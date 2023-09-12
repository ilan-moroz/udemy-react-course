import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React from "react";

const ExpenseItem = props => {
  // const [title, setTitle] = React.useState(props.expense.title);

  // const changeTitle = () => {
  //   setTitle(prompt("enter new title"));
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">&#8362;{props.expense.amount}</div>
      </div>
      {/* <button onClick={changeTitle}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
