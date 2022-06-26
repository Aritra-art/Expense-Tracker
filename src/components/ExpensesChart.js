import Chart from "./Chart/Chart";

const ExpensesChart = (props) => {
  const datapoints = [
    { label: "Jan", value: "0" },
    { label: "Feb", value: "0" },
    { label: "Mar", value: "0" },
    { label: "Apr", value: "0" },
    { label: "May", value: "0" },
    { label: "Jun", value: "0" },
    { label: "Jul", value: "0" },
    { label: "Aug", value: "0" },
    { label: "Sept", value: "0" },
    { label: "Oct", value: "0" },
    { label: "Nov", value: "0" },
    { label: "Dec", value: "0" },
  ];
  for (const expense of props.filteredExpenses) {
    const expenseMonth = expense.date.getMonth(); // This is the index value we are getting
    datapoints[expenseMonth].value += expense.amount; // Matching with the index value
  }

  return <Chart datapoints={datapoints} />;
};

export default ExpensesChart;
