import { createContext, useContext, useMemo } from "react";
import { TransactionsContext } from "../App";

export const TransactionContext = createContext();

export const TransactionProvider = () => {
  const transactions = useContext(TransactionsContext);

  const mappedTransactions = useMemo(
    () =>
      transactions.map((transaction, index) => ({ ...transaction, id: index })),
    [transactions]
  );

  return (
    <TransactionContext.Provider value={mappedTransactions}>
      {children}
    </TransactionContext.Provider>
  );
};
