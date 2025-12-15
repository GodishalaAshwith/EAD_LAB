import React, { useState } from "react";

function Calc() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div>
      <h3>Simple Calculator</h3>

      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={e => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={e => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>
        Add
      </button>

      <button onClick={() => setResult(Number(num1) - Number(num2))}>
        Subtract
      </button>

      <button onClick={() => setResult(Number(num1) * Number(num2))}>
        Multiply
      </button>

      <button onClick={() => setResult(Number(num1) / Number(num2))}>
        Divide
      </button>

      <h4>Result: {result}</h4>
    </div>
  );
}

export default Calc;
