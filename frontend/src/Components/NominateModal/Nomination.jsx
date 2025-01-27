import React from 'react';
import './Nomination.css';
import { Link } from 'react-router-dom';

function Nomination() {
  return (
    <div className="nomination-container">
      <h1 className="title">Nomination Portal</h1>
      <p className="description">
        Choose an option below to proceed with the nomination.
      </p>
       <div className="button-container">
       <Link to="/nominationforself"> <button className="nomination-button self-nomination">
          Self Nomination
        </button>
        </Link>
         <Link to="/othernomination"> <button className="nomination-button nominate-other"> 
          Nominate Other
        </button> </Link>
      </div>
    </div>
  );
}

export default Nomination;
