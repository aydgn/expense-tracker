import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

export const Balance = () => {
  // Get the current balance from the context
  const { transactions } = useContext(GlobalContext);

  // Return the balance
  const amounts = transactions.map(transaction => transaction.amount);

  // Get the sum of all the transaction amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h2>{moneyFormatter(total)}</h2>
    </>
  );
};
