import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('user-info');
    if (data) {
      setIsAuthenticated(true);
      if ( location.pathname === '/login') {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
}

export default RefreshHandler;
