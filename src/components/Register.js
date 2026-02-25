import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
    department: "",
  });

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.password ||
      !formData.repeatPassword ||
      !formData.email ||
      !formData.department
    ) {
      setMessage("All fields are required.");
      setMessageType("danger");
      return;
    }
    if (formData.password !== formData.repeatPassword) {
      setMessage("Passwords do not match.");
      setMessageType("danger");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`, formData);
      setMessage(response.data.message || "Registration successful!");
      setMessageType("success");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed.");
      setMessageType("danger");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card card shadow">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Register</h3>

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
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Department</label>
              <input
                type="text"
                name="department"
                className="form-control"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Repeat Password</label>
              <input
                type="password"
                name="repeatPassword"
                className="form-control"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
