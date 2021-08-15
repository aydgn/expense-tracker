import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, moneyFormatter } = useContext(GlobalContext);

  // Render sign according to the transaction type
  const sign = transaction.amount < 0 ? "" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span className="transaction">
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
        title="Delete transaction"
      >
        ✖
      </button>
    </li>
  );
};
