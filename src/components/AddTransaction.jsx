import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  // States
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("0");

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
              (<b>negative</b> amount for
              <span className="minus"> expenses</span>)
            </i>
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="-250"
          />
        </div>
        <button

          className="btn"
          // if amount is greater than zero, make backgroundColor #2ecc71, if it is less than zero make it #e74c3c, if it is equal to zero make it #f1c40f
          style={{
            backgroundColor: amount > 0 ? "#2ecc71" : amount < 0 ? "#e74c3c" : "",
          }}
        >
          {amount > 0 ? "Addding Income" : amount < 0 ? "Adding Expense" : "Add"}
        </button>
      </form>
    </>
  );
};
