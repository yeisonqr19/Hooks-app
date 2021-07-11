import React from "react";
import useCounter from "../../hooks/useCounter";
import "./counter.css";

const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />

      <button className="btn btn-danger" onClick={() => decrement(2)}>
        -1
      </button>

      <button className="btn btn-dark" onClick={reset}>
        Reset
      </button>

      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
