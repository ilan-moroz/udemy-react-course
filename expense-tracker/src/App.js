import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

function App() {
  const [expenses, setExpenses] = React.useState([]);

  const addExpenseHandler = expense => {
    if (expense.title !== "" && expense.amount !== "" && expense.date !== "")
      setExpenses(prev => [...prev, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
