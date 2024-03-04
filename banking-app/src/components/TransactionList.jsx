import { useContext } from "react";
import { TransactionsContext } from "../App";
import { TransactionContext } from "../context/TransactionProvider";
import Transaction from "./Transaction";

function TransactionList(props) {
  const { transactions, setTransactions } = useContext(TransactionsContext);

  const handleDeleteTransaction = (index) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* {transactions.map((transaction, index) => (
          <TransactionContext.Provider
            key={index}
            value={transaction}
            handleDeleteTransaction={handleDeleteTransaction}
            index={index}
          >
            {props.children}
          </TransactionContext.Provider>
        ))} */}
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
