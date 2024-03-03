import { createContext, useState } from "react";
import ExpenseCalculator from "./components/ExpenseCalculator";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Transaction from "./components/Transaction";

export const TransactionsContext = createContext();
export const ExpenseContext = createContext();

function App() {
  const [transactions, setTransactions] = useState([]);

  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    const amount = Number(transaction.amount);

    if (amount > 0) {
      income += amount;
    } else {
      expense += amount;
    }
  });

  return (
    <div className="container">
      <ExpenseContext.Provider value={{ income, expense }}>
        <ExpenseCalculator />
      </ExpenseContext.Provider>
      <TransactionsContext.Provider value={transactions}>
        <TransactionList>
          <Transaction />
        </TransactionList>
        <AddTransaction setTransactions={setTransactions} />
      </TransactionsContext.Provider>
    </div>
  );
}
export default App;
