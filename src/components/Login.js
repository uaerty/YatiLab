import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token; // backend should return JWT
        localStorage.setItem("jwt", token); // store token
        setIsAuthenticated(true);
        setMessage("Login successful!");
        setMessageType("success");
        navigate("/app");
      }
    } catch (error) {
      setMessage("You are not registered. Please register.");
      setMessageType("danger");
      navigate("/register");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card card shadow">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>

          {message && (
            <div className={`alert alert-${messageType}`} role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <button className="btn btn-link" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
