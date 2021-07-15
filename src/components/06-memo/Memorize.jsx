import React, { useState } from "react";
import "../02-useEffect/effects.css";
import useCounter from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(1);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <h3> Counter: {<Small value={counter} />}</h3>

      <button
        className="btn btn-dark"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>

      <button
        className="btn btn-primary ms-2"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
