import { useEffect, useContext } from "react";
import { TransactionsContext } from "../App";

function Transaction({ transaction, handleDeleteTransaction, index }) {
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

  // useEffect(() => {
  //   localStorage.setItem(index, JSON.stringify(transactions));
  // }, [transactions, index]);

  // useEffect(() => {
  //   setTransactions(() => {
  //     const savedTransactions = localStorage.getItem(index);
  //     return savedTransactions ? JSON.parse(savedTransactions) : [];
  //   });
  // }, []);

  if (transaction.text.trim() === "") {
    return null;
  }
  if (isNaN(transaction.amount) || Number(transaction.amount) === 0) {
    return null;
  }

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign} €{Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => handleDeleteTransaction(index)}
        >
          ✖
        </button>
      </li>
    </>
  );
}

export default Transaction;
