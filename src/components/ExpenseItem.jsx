import { formatDateToLocaleString } from "../helpers";

const ExpenseItem = ({ expense }) => {
  return (
    <>
      <td>{expense.name}</td>
      <td>{expense.amount}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
    </>
  );
};

export default ExpenseItem;