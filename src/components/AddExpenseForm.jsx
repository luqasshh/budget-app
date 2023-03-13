import { CurrencyDollarIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add new{" "}
        <span className="accent">
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense" className="newExpense">
              Expense name
            </label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g. Coffee"
              ref={focusRef}
              required
            />
            <div className="grid-xs">
              <label htmlFor="newExpenseAmount">Amount</label>
              <input
                type="number"
                step="0.01"
                inputMode="decimal"
                name="newExpenseAmount"
                id="newExpenseAmount"
                placeholder="e.g. $10"
                required
              />
            </div>
            <div className="grid-xs">
              <label htmlFor="newExpenseBudget">Budget Category</label>
              <select
                name="newExpenseBudget"
                id="newExpenseBudget"
                required
                hidden={budgets.length === 1}
              >
                {budgets
                  .sort((a, b) => a.createdAt > b.createdAt)
                  .map((budget) => {
                    return (
                      <option key={budget.id} value={budget.id}>
                        {budget.name}
                      </option>
                    );
                  })}
              </select>
              <input type="hidden" name="_action" value="createExpense" />
            </div>
            <button className="btn btn--dark" disabled={isSubmitting}>
              {isSubmitting ? (
                <span>Adding expense...</span>
              ) : (
                <>
                  <span>Add expense</span>
                  <PlusCircleIcon width={20} />
                </>
              )}
            </button>
          </div>
        </div>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
