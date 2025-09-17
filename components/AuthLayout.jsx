import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-left">{children}</div>

      <div className="auth-right">
        <div className="brand">
          <h1 className="brand-logo">ONEHOST</h1>
        </div>
        <div className="auth-footer">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
