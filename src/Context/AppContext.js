import * as React from "react";
import { data } from "./data";
let ContextOne = React.createContext();

let initialState = {
  data: data,
  currency: "USD",
  init: data,
  filter: {
    price: [0, 0],
    rating: 0,
    category: null,
  },
  err: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        data: initialState.data,
        currency: initialState.currency,
        filter:  initialState.filter,
        err: action.err | null,
      };
    case "filter":
      return {
        ...state,
        data: action.payload,
        currency: action.currency,
        filter:  state.filter,
        err: action.err | null,
      };
      case "combination":
        return {
          ...state,
          filter: action.filter,
          err: action.err | null,
        };
    case "currency":
      return {
        ...state,
        currency: action.currency,
        err: action.err | null,
      };
    default:
      return { ...state };
  }
};

function ContextOneProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;
export { ContextOne, ContextOneProvider, ContextOneConsumer };
