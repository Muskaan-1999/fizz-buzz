import { useState } from "react";

function Counter() {
  const [count, updateCount] = useState(0);
  let inputStyle1 = {
    color: "blue"
  };
  let inputStyle2 = {
    color: "red"
  };
  let inputStyle3 = {
    color: "green"
  };

  function increment() {
    updateCount(count + 1);
  }

  function decrement() {
    updateCount(count - 1);
  }

  return (
    <div>
      <h3
        style={
          count % 15 === 0 && count !== 0
            ? inputStyle1
            : count % 3 === 0 && count !== 0
            ? inputStyle2
            : count % 5 === 0 && count !== 0
            ? inputStyle3
            : {}
        }
      >
        {""}
        <h1> {count}</h1>
      </h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>
        {count % 15 === 0 && count !== 0
          ? "FizzBuzz"
          : count % 3 === 0 && count !== 0
          ? "Fizz"
          : count % 5 === 0 && count !== 0
          ? "Buzz"
          : "count"}
      </h2>
    </div>
  );
}

export default Counter;
