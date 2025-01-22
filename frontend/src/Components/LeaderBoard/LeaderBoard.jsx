// LeaderBoard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LeaderBoard.css';
import NomineeTable from '../Cards/NomineeTable';

function LeaderBoard() {
  const [nomineesData, setNomineesData] = useState([]);  // State to store fetched data
  const [searchQuery, setSearchQuery] = useState('');  // State for search query

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/leaderboard'); // Assuming your API endpoint is '/leaderboard'
        setNomineesData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchNominees();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Filter nominees based on the search query
  const filteredNominees = nomineesData.filter((nominee) => 
    nominee.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nominee.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nominee.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle input change and update search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="app">
      <div className="header">
        <div> 
          <button>All Categories</button>
          <input 
            type="text" 
            placeholder="Search nominees..." 
            value={searchQuery}
            onChange={handleSearchChange} // Update state when user types
          />
        </div>
        <div className="category-buttons">
          <button>Best Tech Recruiter</button>
          <button>Best GTM/ Business Recruiter</button>
          <button>Best Leadership Recruiter</button>
          <button>Top TA Leader</button>
          <button>Candidate Experience & Ops Pro</button>
          <button>Best Employer Branding Champion</button>
          <button>Best DEI Advocate</button>
          <button>Best Referral Champion</button>
        </div>
      </div>
      <NomineeTable nominees={filteredNominees} /> {/* Pass filtered nominees */}
    </div>
  );
}

export default LeaderBoard;
