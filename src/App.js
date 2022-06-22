import Expenses from "./components/Expenses";
import { useState } from "react";
import NewExpense from "./components/ExpenseInput/NewExpense";

const dummyExpense = [
  {
    title: "Car Insurance",
    amount: "2499.00",
    date: new Date(2021, 6, 7),
  },
  {
    title: "Computer Desk",
    amount: "1450.00",
    date: new Date(2020, 4, 22),
  },
  { title: "Shopping", amount: "3659.00", date: new Date(2021, 1, 2) },
  { title: "Cycle", amount: "7450.00", date: new Date(2020, 9, 10) },
];

function App() {
  const [expense, setExpenses] = useState(dummyExpense);

  const enteredUserDataHandler = function (enteredUserData) {
    setExpenses((prevExpenses) => {
      return [enteredUserData, ...prevExpenses];
    });
    console.log(enteredUserData);
  };

  return (
    <div>
      <NewExpense onEnteredUserData={enteredUserDataHandler} />
      <Expenses expenseData={expense} />
    </div>
  );
}
export default App;
