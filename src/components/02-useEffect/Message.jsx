import React, { useState, useEffect } from "react";

const Message = () => {
  const [cords, setCords] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = cords;

  useEffect(() => {
    const mouseMove = (e) => {
      const cords = {
        x: e.x,
        y: e.y,
      };
      setCords(cords);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>
        Coordenadas: X:{x}, Y:{y}
      </h3>
    </div>
  );
};

export default Message;
