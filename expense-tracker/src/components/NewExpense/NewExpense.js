import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const saveExpenseDataHandler = newExpenseData => {
    const newExpense = { ...newExpenseData, id: Math.random().toString() };
    props.onAddExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
