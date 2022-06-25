import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState("2020");

  const changeFilterHandler = (filteredDate) => {
    setExpenseFilter(filteredDate);
    console.log(expenseFilter);
  };
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

  const filteredExpenses = props.expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseFilter;
  });

  let expensesContent = <p>No Expenses Found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expenseDataHandler);
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        onFilterDate={expenseFilter}
        onChangeFilter={changeFilterHandler}
      />
      {expensesContent}
    </div>
  );
}
export default Expenses;
