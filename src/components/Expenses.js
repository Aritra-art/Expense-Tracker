import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState("2020");

  const changeFilterHandler = (filteredDate) => {
    setExpenseFilter(filteredDate);
  };
  const expenseDataHandler = (expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        onFilterDate={expenseFilter}
        onChangeFilter={changeFilterHandler}
      />
      {props.expenseData.map(expenseDataHandler)}
    </div>
  );
}
export default Expenses;
