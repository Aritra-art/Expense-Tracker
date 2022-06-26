import Expenses from "./components/Expenses";
import { useState } from "react";
import NewExpense from "./components/ExpenseInput/NewExpense";
import Heading from "./components/Heading";

const dummyExpense = [
  {
    id: "i1",
    title: "Car Insurance",
    amount: "2499.00",
    date: new Date(2021, 6, 7),
  },
  {
    id: "i2",
    title: "Computer Desk",
    amount: "1450.00",
    date: new Date(2020, 4, 22),
  },
  {
    id: "i3",
    title: "Shopping",
    amount: "3659.00",
    date: new Date(2021, 1, 2),
  },
  { id: "i4", title: "Cycle", amount: "7450.00", date: new Date(2020, 9, 10) },
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
      <Heading />
      <NewExpense onEnteredUserData={enteredUserDataHandler} />
      <Expenses expenseData={expense} />
    </div>
  );
}
export default App;
