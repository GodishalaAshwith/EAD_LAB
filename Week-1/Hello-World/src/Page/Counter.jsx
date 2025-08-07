import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-10 text-center max-w-md w-full text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome to React App!</h1>
        <p className="text-lg mb-6">
          You clicked <span className="font-semibold text-yellow-300">{count}</span> times!
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-xl"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Counter;
