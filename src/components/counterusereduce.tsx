"use client";

import { useReducer } from "react";
type id = {
  type: "increment" | "decrement";
  payload: number;
};
type reset = {
  type: "reset";
};
const initialState = { count: 0 };
const reducer = (
  {
    count,
  }: {
    count: number;
  },
  action: id | reset
) => {
  switch (action.type) {
    case "increment":
      console.log(count);
      return { count: count + action.payload };
    case "decrement":
      return { count: count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return { count: count };
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count:{state?.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
