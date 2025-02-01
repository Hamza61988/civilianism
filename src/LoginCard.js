import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./LoginCard.css"; // Custom styles

const LoginCard = ({ onClose }) => {
  return (
    <div className="login-backdrop">
      <div className="login-card">
        <button className="btn-close" onClick={onClose}>✖</button>
        <h2 className="mb-4">Login</h2>
        <input type="email" className="form-control" placeholder="Email" />
        <input type="password" className="form-control" placeholder="Password" />
        <button className="btn btn-yellow mt-3">Login</button>
        <p className="signup-text">
          New here? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
