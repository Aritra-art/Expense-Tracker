import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState("2020");

  const changeFilterHandler = (filteredDate) => {
    setExpenseFilter(filteredDate);
    console.log(expenseFilter);
  };

  const filteredExpenses = props.expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseFilter;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        onFilterDate={expenseFilter}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </div>
  );
}
export default Expenses;
