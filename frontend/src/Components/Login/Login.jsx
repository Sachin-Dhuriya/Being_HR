import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult.access_token) {
        // Fetch user data from Google API
        const userResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${authResult.access_token}` }
        });

        const { email, name, picture } = userResponse.data;
        const userObj = { email, name, image: picture };

        localStorage.setItem('user-info', JSON.stringify(userObj));
        setIsAuthenticated(true);
        navigate('/dashboard');
      } else {
        console.error('Google login failed:', authResult);
      }
    } catch (error) {
      console.error('Error during Google Login:', error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.error('Google Login Error:', error),
  });

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h1 className="signin-title">Sign In</h1>
        <p className="signin-description">Sign in quickly using Google to get started.</p>
        <button onClick={googleLogin} className="Google-button">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
