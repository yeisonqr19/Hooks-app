import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a Generar Fuck :(");
  
  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => {
          increment(5);
        }}
      >
        Increment
      </button>

      <button className="btn btn-primary ms-3">show/Hide</button>
    </>
  );
});
