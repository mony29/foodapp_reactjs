import { useState } from "react";

export default function Counter() {
  // init value count=0
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    // count = count + 1;  because const, we cannot increase directly, then use setCount
    // setCount(count + 1);
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function handleIncrementBy() {
    setIncrementBy(incrementBy + 1);
  }

  function handleDecrementBy() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h2>Count value is: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>We are increasing the value by : {incrementBy}</h2>
      <button onClick={handleIncrementBy}>Increment</button>
      <button onClick={handleDecrementBy}>Decrement</button>
    </div>
  );
}
