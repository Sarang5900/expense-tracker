import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000) + 1,
      text,
      amount: Number(amount), 
    };

    console.log(newTransaction);

    addTransaction(newTransaction);

    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text here..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount<br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter Amount..."
            required
          />
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </>
  );
};
