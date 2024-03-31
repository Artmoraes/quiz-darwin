import React from "react";
import Body from "./components/body/body";
import Quiz from "./components/quiz/quiz";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/html" element={<Quiz subject="HTML" />} />
      <Route path="/css" element={<Quiz subject="CSS" />} />
      <Route path="/javascript" element={<Quiz subject="JavaScript" />} />
      <Route path="/accessibility" element={<Quiz subject="Accessibility" />} />
    </Routes>
  );
};

export default App;
