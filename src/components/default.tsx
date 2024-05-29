"use client";
import { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducer = (
  { count }: { count: number },
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "i":
      return { count: count + action.payload };
    case "d":
      return { count: count - action.payload };
    case "r":
      return { count: 0 };
    default:
      return { count: count };
  }
};

export default function CounterONE() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      ={count.count}
      <button
        className="bg-black text-white p-4 rounded-xl"
        onClick={() => {
          dispatch({ type: "i", payload: 10 });
        }}
      >
        increment
      </button>
      <button
        className="bg-black text-white p-4 rounded-xl"
        onClick={() => {
          dispatch({ type: "d", payload: 10 });
        }}
      >
        decrement
      </button>
      <button
        className="bg-black text-white p-4 rounded-xl"
        onClick={() => {
          alert("do you want to reset the value");
          dispatch({ type: "r", payload: 0 });
        }}
      >
        reset
      </button>
    </>
  );
}
