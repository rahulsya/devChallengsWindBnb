import React from "react";
import items from "../data/stays.json";

export const StaysContext = React.createContext();

const initalState = {
  items,
  shortedItems: items,
  city: "",
  guest: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error();
  }
};

export const StaysContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initalState);

  return (
    <StaysContext.Provider value={{ state, dispatch }}>
      {children}
    </StaysContext.Provider>
  );
};
