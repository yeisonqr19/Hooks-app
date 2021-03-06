import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../02-useEffect/effects.css";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((num) => {
    setCounter((item) => item + num);
  }, [setCounter]);

  return (
    <div>
      <h1>UseCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
