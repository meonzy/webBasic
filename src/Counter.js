// import React, { useState } from "react";
import React from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>{number}</div>
      <div>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default Counter;
