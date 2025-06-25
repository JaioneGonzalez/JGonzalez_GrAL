// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home/Home";
import Login_reg from "./pages/log_reg/login_reg";
import JsonUpload from "./pages/jsonUpload/jsonUpload";
import ReplayPage from "./pages/replay/replay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login_reg />} />
        <Route path="/register" element={<Login_reg />} />
        <Route path="/" element={<Login_reg />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jsonUpload" element={<JsonUpload />} />
        <Route path="/replay" element={<ReplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
