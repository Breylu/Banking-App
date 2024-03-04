import { useContext } from "react";
import { ExpenseContext } from "../App";

function ExpenseCalculator() {
  const { income, expense } = useContext(ExpenseContext);
  // const expense = useContext(ExpenseContext);

  let balance = income + expense;

  const isNegative = balance < 0;

  function displayBalance() {
    if (isNegative) {
      return `-€${Math.abs(balance)}`;
    }
    return `€${balance}`;
  }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <h4>Your Balance</h4>
      <h1 id="balance">{displayBalance()}</h1>

      <div className="Income-expense-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+€{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-€{Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  );
}
export default ExpenseCalculator;
