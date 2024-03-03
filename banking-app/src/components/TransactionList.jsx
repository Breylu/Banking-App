import { useContext } from "react";
import { TransactionsContext } from "../App";
import { TransactionContext } from "../context/TransactionProvider";

function TransactionList(props) {
  const transactions = useContext(TransactionsContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, index) => (
          <TransactionContext.Provider key={index} value={transaction}>
            {props.children}
          </TransactionContext.Provider>
        ))}
      </ul>
    </>
  );
}
export default TransactionList;
