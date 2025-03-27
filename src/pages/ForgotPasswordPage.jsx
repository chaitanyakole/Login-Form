import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage.css";
import webbgImage from "../assets/webbgImage.png";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate password reset process
    try {
      // In a real app, this would be an API call
      setMessage("Password reset link sent to your email");
      setError("");

      // Optional: Redirect after some time
      setTimeout(() => {
        navigate("/login");
      }, 3000); // We given 3 seconds delay for redirecting to login page
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div
      className="forgot-password-container"
      style={{
        backgroundImage: `url(${webbgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h2>Forgot Password</h2>

        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

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

        <button type="submit">Send Reset Link</button>
        <div className="back-to-login">
          <a href="/login">Back to Login</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
