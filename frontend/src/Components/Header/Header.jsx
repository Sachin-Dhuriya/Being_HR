import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import SearchBar from './SearchBar';
import { SearchContext } from './SearchContext';
import './Header.css';

function Header() {
  const { setSearchTerm } = useContext(SearchContext);
  const [user, setUser] = useState(null);

  // Load user info from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user-info'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user-info');
    setUser(null); // Reset user state
  };

  return (
    <nav className="header-nav">
      <div className="navbar-block">
        <img src="https://th.bing.com/th/id/OIP.zBP4k2t6S0PHscpdEE47qAAAAA?w=172&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7" className='header-icon' alt="Logo" />
        <Timer deadline="2025-01-20T23:59:00" />
      </div>

      <div className="searchbar">
        <SearchBar onSearch={(term) => setSearchTerm(term)} />
      </div>

      <div className="header-links">
        <Link to="/" className="header-link">Nomination</Link>
        <Link to="/leaderboard" className="header-link">Leaderboard</Link>
        <Link to="/jurey" className="header-link">Jurey</Link>
        <Link to="/nomination" className="header-linka">+📣 Nominate</Link>

        {/* Show Profile if Logged In, Otherwise Show Sign In */}
        {user ? (
          <div className="user-profile">
         <Link to="/dashboard"> <img src={user.image} alt="User" className="user-avatar" />  </Link> 
            {/* <span className="user-name">{user.name}</span>
            <button onClick={handleLogout} className="logout-button">Logout</button> */}
          </div>
        ) : (
          <Link to="/login" className="header-button">Sign In</Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
