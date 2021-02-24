import * as React from "react";
import {data} from "./data"
let ContextOne = React.createContext();

let initialState = {
 data: data
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "filter":
      return {...state, data:action.payload };
    case "currency":
      return { ...state, data:action.payload};
    default:
      return { ...state };
  }
};

function ContextOneProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  // [B]
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer };
