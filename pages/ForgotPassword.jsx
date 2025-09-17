import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email} ✅`);
  };

  return (
    <AuthLayout>
      <form className="auth-form" onSubmit={handleReset}>
        <h2>Forgot Password</h2>
        <p>Enter your email to receive a password reset link.</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary">
          Send Reset Link
        </button>

        <p className="switch-page">
          Remembered? <Link to="/login">Back to login</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
