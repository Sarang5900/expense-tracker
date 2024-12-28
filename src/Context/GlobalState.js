import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial text
const initailState = {
  transactions: [
    { id: 1, text: "Transaction 1", amount: -20 },
    { id: 2, text: "Transaction 2", amount: 200 },
    { id: 3, text: "Transaction 3", amount: -10 },
    { id: 4, text: "Transaction 4", amount: 400 },
  ],
};

// create context
export const GlobalContext = createContext(initailState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initailState);

  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider value={
      { 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
