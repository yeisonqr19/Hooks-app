import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./layoutEffect.css";
import useCounter from "../../hooks/useCounter";

const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const [boxSize, setBoxSize] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBoxSize(pRef.current.getBoundingClientRect());
  }, [quote]);

  const pRef = useRef();

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-end">
        <p ref={pRef} className="mb-3">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Next Quotes
      </button>
    </div>
  );
};

export default LayoutEffect;
