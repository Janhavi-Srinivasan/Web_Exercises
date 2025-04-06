
import React, { useState, useReducer } from "react";  
const initialState = { count: 0 };
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const CounterUsingReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count (useReducer): {state.count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default CounterUsingReducer;
