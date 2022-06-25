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

  return (
    <div className="expenses">
      <ExpensesFilter
        onFilterDate={expenseFilter}
        onChangeFilter={changeFilterHandler}
      />
      {filteredExpenses.map(expenseDataHandler)}
    </div>
  );
}
export default Expenses;
