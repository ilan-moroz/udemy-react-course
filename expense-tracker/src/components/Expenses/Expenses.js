import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = props => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, i) => (
        <ExpenseItem expense={expense} key={i} />
      ))}
    </Card>
  );
};

export default Expenses;
