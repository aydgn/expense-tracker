import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  // Get the current balance from the context
  const { transactions, moneyFormatter } = useContext(GlobalContext);

  // Return the balance
  const amounts = transactions.map(transaction => transaction.amount);

  // Get the sum of all the transaction amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      {/* div with two classname, one for css one for jsx */}
      <div className="balance">
        <label className={total > 0 ? "plus" : "minus"} htmlFor="text">
          {moneyFormatter(total)}
        </label>
      </div>
    </>
  );
};
