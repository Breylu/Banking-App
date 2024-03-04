function Transaction({ transaction, handleDeleteTransaction, index }) {
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
