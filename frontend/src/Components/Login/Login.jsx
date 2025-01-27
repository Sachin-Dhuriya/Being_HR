import React from 'react';
import { Linkedin } from 'lucide-react';
import './Login.css';

const Login = () => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">Sign In</h1>
        <p className="signin-description">Sign in quickly using LinkedIn to get started.</p>

        <button
          onClick={() => {
            // Handle LinkedIn sign-in logic here
            alert('Sign in with LinkedIn');
          }}
          className="linkedin-button"
        >
          <Linkedin className="linkedin-icon" />
          Sign in with LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Login;
