import { useState } from "react";

function AddTransaction({ setTransactions }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  function handleAddTransaction() {
    const newTransaction = { text: text, amount: amount };
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
    setText("");
    setAmount("");
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <br />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br /> (negative - expense, positive - income)
        </label>
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
        <button className="btn" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </div>
    </>
  );
}
export default AddTransaction;
