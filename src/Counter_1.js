import React, { useState } from "react";

const Minus = () => {
  const [number, setNumber] = useState(0);

  // function useState(초기값){
  //   let x=초기값;
  //   return[x,setX]
  // }

  // function plus() {
  //   setNumber(number + 1);
  // }

  function minus() {
    setNumber(number - 1);
  }
  const plus = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <div>{number}</div>
      <div>
        <button onClick={() => setNumber((x) => x - 1)}>-1</button>
        <button onClick={() => setNumber(number + 1)}>+1</button>
      </div>
    </>
  );
};

export default Minus;
