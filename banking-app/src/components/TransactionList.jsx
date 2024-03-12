import { useContext, useEffect } from "react";
import { TransactionsContext } from "../App";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions, setTransactions } = useContext(TransactionsContext);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, [setTransactions]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleDeleteTransaction = (index) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            transaction={transaction}
            index={index}
            handleDeleteTransaction={handleDeleteTransaction}
          />
        ))}
      </ul>
    </>
  );
}
export default TransactionList;
