import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Jurey from './Components/Jurey/Jurey';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import SelfNomination from './Components/Nomination/SelfNomination';
import OtherNomination from './Components/Header/OtherNomination';
import Nomination from './Components/NominateModal/Nomination';
import Nominationforself from './Components/Header/Nominationforself';
// import OtherNm from './Components/Header/OtherNm';
// import Nominationforself2 from './Components/Header/Nominationforself2';
import RefreshHandler from './Components/Login/RefreshHandler';
import Dashboard from './Components/Login/Dashboard';
import NotFound from './Components/Login/NotFound';
import Login from './Components/Login/Login';

const Routers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem('user-info');
    setIsAuthenticated(!!userInfo);
  }, []);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <GoogleOAuthProvider clientId="303111951344-pi8po3lfhh2u8cq8ller9iejeohhut79.apps.googleusercontent.com">
      <div className="main-body">
        <Header />
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/jurey" element={<Jurey />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/nomination" element={<Nomination />} />
          {/* <Route path="/othernm" element={<OtherNm />} /> */}
          <Route path="/othernomination" element={<OtherNomination />} />
          <Route path="/nominationforself" element={<Nominationforself />} />
          {/* <Route path="/nomination2" element={<Nominationforself2 />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Routers;
