import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the new CSS file

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('user-info');
    if (data) {
      setUserInfo(JSON.parse(data));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user-info');
    navigate('/login');
  };

  if (!userInfo) {
    return <h2 className="loading-text">Loading...</h2>;
  }

  return (
    <div className='profile-main'>
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        <div className="profile-section">
          <img src={userInfo.image} alt={userInfo.name} className="profile-avatar" />
          <h1 className="profile-name">Hello, {userInfo.name} 👋</h1>
          <p className="profile-email">{userInfo.email}</p>
        </div>

        <div className="dashboard-actions">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
