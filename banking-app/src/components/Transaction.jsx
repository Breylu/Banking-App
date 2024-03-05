function Transaction({ transaction, handleDeleteTransaction, index }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  if (transaction.text.trim() === "") {
    return null;
  }
  if (isNaN(transaction.amount) || Number(transaction.amount) === 0) {
    return null;
  }

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
