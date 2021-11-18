import { useState } from "react";

const SmallComponent = ({ setNumber }) => {
  // console.log(props);

  return (
    <>
      <button onClick={() => setNumber((x) => x + 1)}>+1</button>
      <button onClick={() => setNumber((x) => x - 1)}>-1</button>
    </>
  );
};

const Component = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      {/* <input></input>
      <input></input> */}
      <div>{number}</div>
      <SmallComponent setNumber={setNumber} />
    </div>
  );
};

export default Component;
