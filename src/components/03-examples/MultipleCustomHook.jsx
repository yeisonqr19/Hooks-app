import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

const MultipleCustomHook = () => {
  const url = `https://www.breakingbadapi.com/api/quotes/1`;
  const resp = useFetch(url);
  const { data } = resp;

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      <div className="alert alert-info">Loading...</div>
    </>
  );
};

export default MultipleCustomHook;
