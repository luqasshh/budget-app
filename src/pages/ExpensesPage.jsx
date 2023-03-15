import { useLoaderData } from "react-router-dom";
import ExpensesTable from "../components/ExpensesTable";
import { fetchData } from "../helpers";

// loader
export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();
  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <ExpensesTable expenses={expenses} />
        </div>
      ) : (
        <p>No expenses to show</p>
      )}
    </div>
  );
};

export default ExpensesPage;
