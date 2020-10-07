import React from "react";
import items from "../data/stays.json";
import { FILTER_DATA, TOOGLE_FILTER } from "./action";

export const StaysContext = React.createContext();

const initalState = {
  items,
  shortedItems: items,
  city: "",
  child: 0,
  adult: 0,
  guest: 0,

  toggleFilter: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case FILTER_DATA:
      const { location, adult, child, guest } = action;
      let tempItems = [...state.items];
      if (location !== "") {
        tempItems = tempItems.filter((item) => item.city === location);
      }
      if (guest !== 0) {
        tempItems = tempItems.filter((item) => guest <= item.maxGuests);
      }

      return {
        ...state,
        city: location,
        adult: adult,
        child: child,
        guest: guest,
        shortedItems: tempItems,
      };
    case TOOGLE_FILTER:
      return { ...state, toggleFilter: !state.toggleFilter };
    default:
      return state;
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
