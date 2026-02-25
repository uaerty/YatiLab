import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Default route: show Login unless authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <App />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        {/* Register page */}
        <Route path="/register" element={<Register />} />
        {/* App route (protected) */}
        <Route
          path="/app"
          element={isAuthenticated ? <App /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default Main;
