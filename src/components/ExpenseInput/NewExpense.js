import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const cancelEditHandler = () => {
    setIsEdit(false);
  };

  const startEditHandler = () => {
    setIsEdit(true);
  };
  const saveExpenseDataHandler = (userData) => {
    const expenseData = {
      ...userData,
      id: Math.random().toString(),
    };
    props.onEnteredUserData(expenseData);
    setIsEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit === true && (
        <button onClick={startEditHandler}>Add New Expense</button>
      )}
      {isEdit === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
