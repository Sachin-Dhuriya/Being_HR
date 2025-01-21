import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import SearchBar from './SearchBar';
import { SearchContext } from './SearchContext';
import './Header.css';

function Header() {
  const { setSearchTerm } = useContext(SearchContext);

  return (
    <nav className="header-nava">
      <div className="navbar-blocka">
       
        <img src="https://th.bing.com/th/id/OIP.zBP4k2t6S0PHscpdEE47qAAAAA?w=172&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7" className='header-icon' alt="" />
        <Timer deadline="2025-01-20T23:59:00" />
      </div>
      <div className="searchbara">
        <SearchBar onSearch={(term) => setSearchTerm(term)} />
      </div>
      <div className="header-linksa">
        <Link to="/leaderboard" className="header-linka">Leaderboard</Link>
        <Link to="/jurey" className="header-linka">Jurey</Link>
        <Link to="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=512982533492-mjp24qege6fjg7opc3jc2q7a3osotjkc.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Frecfiesta-c0ab5.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDlfTwUIg2YRi4_osmMlaVmquOaV1gKQGDM_4t4sb7zhZ0Ynm4OScW3Lcyull1qEiSZpvwYogJQovOiqcTagUfI_nxFNTUQfx1BKn50P3r110tgeIoexzj8q_HGz4Y6fRRSHbWcJiGmnZZaEfL7aqiAw_LSVI7h2khzTpztumk1WW7R87i_HyyG41myRsgJGQsRXn2ZM7M1G7WC_QKAXzU2yDkDTq0fHxFEgLtS3tmHGgqfx525DIvrLMu6KI7SVgP8qthdgL1xvCvXRjFxLmrCaFh3WdZhB3V9LwINv3efSkXJ_C8zGUf7xh9M3qAzIbxrDGesWLw&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&prompt=select_account&context_uri=https%3A%2F%2Fawards.recfiesta.com&service=lso&o2v=1&ddm=1&flowName=GeneralOAuthFlow" className="header-button">Sign In with Google</Link>
      </div>
    </nav>
  );
}

export default Header;