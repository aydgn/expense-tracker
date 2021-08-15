import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  // States
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // Context
  const { addTransaction } = useContext(GlobalContext);

  // Function to add transaction
  const onSubmit = e => {
    // Prevent default form submit
    e.preventDefault();

    // add transaction if text and amount are not empty
    if (text && amount) {
      const newTransaction = {
        id: Date.now(),
        text,
        amount: Number(amount),
      };
      addTransaction(newTransaction);
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Rent"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            <i>
              (<b>negative</b> for <span className="minus">expense</span>,
              <b> positive</b> for <span className="plus">income</span>)
            </i>
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="-250"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
