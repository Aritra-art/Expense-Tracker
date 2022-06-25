import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  const expenseDataHandler = (expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  };

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map(expenseDataHandler)}
    </ul>
  );
};
export default ExpensesList;
