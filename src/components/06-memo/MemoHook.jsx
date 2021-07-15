import React, { useState, useMemo } from "react";
import useCounter from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
import { procesoPesado } from "../../helpers/procesoPesado";
export const MemoHook = () => {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true);

  const memoProcesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <hr />
      <h3>
        Counter: <small>{counter}</small>
      </h3>

      <p>{memoProcesado}</p>

      <hr />

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
