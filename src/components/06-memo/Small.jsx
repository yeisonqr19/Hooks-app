import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a LLamar :(");

  return <small>{value}</small>;
});
