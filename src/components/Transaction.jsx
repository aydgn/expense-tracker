import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  // Render sign according to the transaction type
  const sign = transaction.amount < 0 ? "" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
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
