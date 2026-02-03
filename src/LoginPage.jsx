import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image-side"></div>
        <div className="login-form-side">
          <h2>Welcome to Login Page</h2>
          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter you Email here" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter you Password here" />
            </div>
            <button type="submit" className="login-btn">Log In</button>
          </form>
          <p className="footer-text">
            Back to the Public Dashboard? <Link to="/">click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;