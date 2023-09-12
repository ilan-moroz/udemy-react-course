import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((expense, i) => (
        <ExpenseItem expense={expense} key={i} />
      ))}
    </Card>
  );
};

export default Expenses;
