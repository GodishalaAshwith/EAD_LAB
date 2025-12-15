import React, { useState, useEffect } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    console.log("Component rendered or updated");
  });

  // Runs only once (on component mount)
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h3>useEffect Demo</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );

}