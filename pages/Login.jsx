import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa"
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@onehost.com" && password === "123456") {
      alert("Login successful ✅");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <AuthLayout>
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Welcome back</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="form-options">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" className="btn-primary">
          Log in
        </button>

        <div className="divider">OR</div>
        
        <div className="buttons">
            <button
            type="button"
            className="btn-outline"
            onClick={() => console.log("Google login")}
            >
            <FaGoogle />
            </button>
            <button
            type="button"
            className="btn-outline"
            onClick={() => console.log("GitHub login")}
            >
            <FaGithub />
            </button>
        </div>

        <p className="switch-page">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
