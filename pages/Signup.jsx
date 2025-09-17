import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa"
import AuthLayout from "../components/AuthLayout";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the terms");
      return;
    }
    alert(`Account created for ${email} ✅`);
  };

  return (
    <AuthLayout>
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Create Account</h2>
        <p>You’re moments away from launching a blazing fast SSD Cloud Server.</p>

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

        <label className="checkbox">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to the Terms of Service and
          Privacy Policy.
        </label>

        <button type="submit" className="btn-primary">
          Create free account
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
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signup;
