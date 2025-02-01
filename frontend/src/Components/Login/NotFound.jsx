import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <h2>404 - Page Not Found</h2>
      <button onClick={() => navigate('/')}>Go to Login</button>
    </>
  );
}

export default NotFound;
