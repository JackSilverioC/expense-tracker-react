import { PropTypes } from "prop-types";
import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();

export const UseGlobalState = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};

const initialState = {
  transactions: []
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = JSON.parse(localStorage.getItem("transactions"));
    if (localData === null) return initialState;
    return localData.transactions.length === 0 ? initialState : localData;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </Context.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired
};
