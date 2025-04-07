import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles_log.css";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To get the current path
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login/register form
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // Set the form based on the current route
    if (location.pathname === "/register") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [location.pathname]); // Re-run the effect when the location changes

  const handleRegister = (event) => {
    // Prevent the form from submitting and causing a page reload
    event.preventDefault();
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        erabiltzaile: username,
        pasahitza: password,
        email: email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        navigate("/home"); // Redirect to home after successful registration
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleLogin = (event) => {
    // Prevent the form from submitting and causing a page reload
    event.preventDefault();

    fetch("http://localhost:3001/users/login", {
      method: "POST", // Changed from GET to POST for login
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        erabiltzaile: username,
        pasahitza: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        navigate("/home"); // Redirect to home after successful login
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="container_log">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => navigate("/login")} // Navigate to the login path
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => navigate("/register")} // Navigate to the register path
          >
            Register
          </button>
        </div>
        {isLogin ? (
          <form className="form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="form" onSubmit={handleRegister}>
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
