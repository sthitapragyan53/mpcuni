import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const regNo = e.target[0].value;
    const password = e.target[1].value;

    // Demo Admin Login
    if (regNo === "admin" && password === "admin") {
      alert("Admin Login Successful");
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account Created (demo)");
  };

  return (
    <div className="container">
      <div className="glass-box">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="VIT Logo" className="university-logo" />
        </div>

        <h1 className="title">VIT University</h1>

        {isLogin ? (
          <form onSubmit={handleLogin} className="fade-in">
            <h2>Student Login</h2>

            <input
              type="text"
              placeholder="Registration Number"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <button type="submit">Login</button>

            <p>
              Don't have an account?{" "}
              <span onClick={toggleForm}>Create Account</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="fade-in">
            <h2>Create Account</h2>

            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Registration Number" required />
            <input type="text" placeholder="Branch" required />
            <input type="number" placeholder="Current Year" required />

            <button type="submit">Sign Up</button>

            <p>
              Already have an account?{" "}
              <span onClick={toggleForm}>Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;