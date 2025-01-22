import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LeaderBoard.css';
import NomineeTable from '../Cards/NomineeTable';

function LeaderBoard() {
  const [nomineesData, setNomineesData] = useState([]);  // State to store fetched data
  const [searchQuery, setSearchQuery] = useState('');  // State for search query
  const [selectedCategory, setSelectedCategory] = useState('');  // State to store selected category

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

  // Filter nominees based on the search query and selected category
  const filteredNominees = nomineesData.filter((nominee) => {
    const matchesSearchQuery = 
      nominee.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nominee.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nominee.company.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory ? nominee.category === selectedCategory : true;
    
    return matchesSearchQuery && matchesCategory;
  });

  // Handle input change and update search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle category button click and set the selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);  // Toggle category selection
  };

  return (
    <div className="app">
      <div className="header">
        <div> 
          <button onClick={() => handleCategoryClick('')}>All Categories</button>
          <input 
            type="text" 
            placeholder="Search nominees..." 
            value={searchQuery}
            onChange={handleSearchChange} // Update state when user types
          />
        </div>
        <div className="category-buttons">
          <button onClick={() => handleCategoryClick('Best Tech Recruiter')}>Best Tech Recruiter</button>
          <button onClick={() => handleCategoryClick('Best GTM/Business Recruiter')}>Best GTM/Business Recruiter</button>
          <button onClick={() => handleCategoryClick('Best Leadership Recruiter')}>Best Leadership Recruiter</button>
          <button onClick={() => handleCategoryClick('Top TA Leader')}>Top TA Leader</button>
          <button onClick={() => handleCategoryClick('Candidate Experience & Ops Pro')}>Candidate Experience & Ops Pro</button>
          <button onClick={() => handleCategoryClick('Best Employer Branding Champion')}>Best Employer Branding Champion</button>
          <button onClick={() => handleCategoryClick('Best DEI Advocate')}>Best DEI Advocate</button>
          <button onClick={() => handleCategoryClick('Best Referral Champion')}>Best Referral Champion</button>
        </div>
      </div>
      <NomineeTable nominees={filteredNominees} /> {/* Pass filtered nominees */}
    </div>
  );
}

export default LeaderBoard;
