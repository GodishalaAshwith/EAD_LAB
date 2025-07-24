import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HelloWorld from "./Page/Hello_World";
import Counter from "./Page/Counter";
import Home from "./Page/Home";
import MappingList from "./Page/MappingList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello_world" element={<HelloWorld />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/mapping_list" element={<MappingList />} />
      </Routes>
    </Router>
  );
}

export default App;
