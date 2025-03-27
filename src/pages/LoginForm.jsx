import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import webbgImage from "../assets/webbgImage.png";

const LoginForm = () => {
  // State variables to manage email, password, errors, and loading status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // Function to check if email is in correct format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.toLowerCase());
  };

  // Function to check if password meets security standards
  const isValidPassword = (password) => {
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordPattern.test(password);
  };

  // Form submission handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous error message
    setLoading(true); // Start the loading process

    // Check if email is valid
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Check if password is valid
    if (!isValidPassword(password)) {
      setError(
        "Password must be at least 8 characters long, with at least one special character letter, one lowercase letter, and one number."
      );
      setLoading(false);
      return;
    }

    try {
      // Simulate a login delay (for demo purposes)
      // We can write here apis for authentication, but now I am just using localstorage and setting a flag in localstorage.

      await new Promise((resolve) => setTimeout(resolve, 1500)); // By doing this we can simulate a delay in the login process.
      // If successful, set "isAuthenticated" flag in localStorage
      localStorage.setItem("isAuthenticated", "true"); // setted flage in localstorage
      // navigate("/dashboard"); // We can redirect to dashboard but I am just show alert message
      alert("Login successful!");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false); // End the loading process
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${webbgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form onSubmit={handleLogin} className="login-form">
        <div className="logo-container">
          <img
            src="https://skurelabs.com/wp-content/uploads/2024/11/Skurelabs.png"
            alt="Company logo"
            className="logo"
            width={"60%"}
          />
        </div>
        <h2>Login to Your Account</h2>
        {error && <div className="error-message">{error}</div>}
        {/* Display error message if any */}
        {/* Email input field  */}
        <div className="form-group">
          <label htmlFor="email" style={{ color: "white" }}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        {/* Password input field */}
        <div className="form-group">
          <label htmlFor="password" style={{ color: "white" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {/* Remember Me checkbox and Forgot Password link */}
        <div className="form-actions">
          <div className="remember-forgot">
            <a href="/forgot-password" style={{ color: "white" }}>
              Forgot your password?
            </a>
          </div>
        </div>
        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className={loading ? "loading" : ""}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {/* Link for new users to sign up */}
        <div>
          Don't have an account? <a>Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
