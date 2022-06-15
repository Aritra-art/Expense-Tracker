import Expenses from "./components/Expenses";
import NewExpense from "./components/ExpenseInput/NewExpense";
function App() {
  const expense = [
    {
      title: "Car Insurance",
      amount: "Rs 2499.00",
      date: new Date(2021, 6, 7),
    },
    {
      title: "Computer Desk",
      amount: "Rs 1450.00",
      date: new Date(2020, 4, 22),
    },
    { title: "Shopping", amount: "Rs 3659.00", date: new Date(2021, 1, 2) },
    { title: "Cycle", amount: "Rs 7450.00", date: new Date(2020, 9, 10) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenseData={expense} />
    </div>
  );
}
export default App;
