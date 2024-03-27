import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './index.css';
import App from './App';
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@asgardeo/auth-react";
import config from "./config.json";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider config={config}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
