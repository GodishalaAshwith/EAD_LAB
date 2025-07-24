import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-600">
      <div className="text-center bg-white/20 backdrop-blur-md p-12 rounded-lg shadow-xl text-white max-w-lg w-full">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to the Home Page!
        </h1>
        <p className="text-lg mb-6">
          This is a beautifully styled homepage built with Tailwind CSS.
        </p>
        <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full shadow-md transition duration-200 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
