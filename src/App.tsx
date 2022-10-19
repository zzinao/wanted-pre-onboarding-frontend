import React from "react";
import Auth from "./pages/Auth";
import TodoMain from "./pages/TodoMain";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/todo" element={<TodoMain />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
};
export default App;