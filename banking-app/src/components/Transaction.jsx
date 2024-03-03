import { useContext } from "react";
import { TransactionContext } from "../context/TransactionProvider";

function Transaction() {
  const transaction = useContext(TransactionContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign} €{Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn">✖</button>
      </li>
    </>
  );
}
export default Transaction;
