import React from "react";

const names = [
  { firstname: "John", lastname: "Doe" },
  { firstname: "Jane", lastname: "Smith" },
  { firstname: "Alice", lastname: "Johnson" },
  { firstname: "Bob", lastname: "Williams" },
];

const MappingList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg text-white max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Name List</h2>
        <ul className="space-y-3">
          {names.map((person, index) => (
            <li
              key={index}
              className="bg-white/20 rounded-md px-4 py-2 shadow hover:bg-white/30 transition"
            >
              {person.firstname} {person.lastname}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MappingList;
