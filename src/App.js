// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationTracker from './NavigationTracker';
import Dashboard from './pages/dashboard';
import Home from './pages/home/Home';
import Login_reg from './pages/log_reg/login_reg';
import TestListPage from './pages/viewTests/TestListPage';
import JsonUpload from './pages/jsonUpload/jsonUpload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login_reg />} />
        <Route path="/home" element={<Home />} />
        <Route path="/testList" element={<TestListPage />} />
        <Route path="/jsonUpload" element={<JsonUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
