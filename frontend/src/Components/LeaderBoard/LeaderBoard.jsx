import React, { useState } from 'react';
import './LeaderBoard.css';
import NomineeTable from '../Cards/NomineeTable';

const nomineesData = [
  { rank: '🏆', name: 'Jasprit Bumra', title: 'Lead TA Specialist', category: 'Best Leadership Recruiter', company: '247hire', communityVotes: '261', juryVotes: '0', totalScore: '2610' },
  { rank: '🥈', name: 'Travis Head', title: 'Lead Tech Recruiter', category: 'Best Leadership Recruiter', company: 'Elastic Technologies India', communityVotes: '147', juryVotes: '0', totalScore: '1470' },
  { rank: '🥉', name: 'Pat Cummins', title: 'Talent Acquisition Manager', category: 'Best Leadership Recruiter', company: 'Aspire Systems', communityVotes: '44', juryVotes: '0', totalScore: '440' },
  { rank: '#4', name: 'Rohit Sharma', title: 'Lead TA Specialist', category: 'Best Leadership Recruiter', company: '247hire', communityVotes: '261', juryVotes: '0', totalScore: '2610' },
  { rank: '#5', name: 'Glen Maxiwell', title: 'Lead Tech Recruiter', category: 'Best Leadership Recruiter', company: 'Elastic Technologies India', communityVotes: '147', juryVotes: '0', totalScore: '1470' },
  { rank: '#6', name: 'Mitchal Stark', title: 'Talent Acquisition Manager', category: 'Best Leadership Recruiter', company: 'Aspire Systems', communityVotes: '44', juryVotes: '0', totalScore: '440' },
  { rank: '#7', name: 'Jose Merciline', title: 'Lead TA Specialist', category: 'Best Leadership Recruiter', company: '247hire', communityVotes: '261', juryVotes: '0', totalScore: '2610' },
  { rank: '#8', name: 'Rashid Khan', title: 'Lead Tech Recruiter', category: 'Best Leadership Recruiter', company: 'Elastic Technologies India', communityVotes: '147', juryVotes: '0', totalScore: '1470' },
  { rank: '#9', name: 'Akel Hosein', title: 'Talent Acquisition Manager', category: 'Best Leadership Recruiter', company: 'Aspire Systems', communityVotes: '44', juryVotes: '0', totalScore: '440' },
  { rank: '#10', name: 'Jose Merciline', title: 'Lead TA Specialist', category: 'Best Leadership Recruiter', company: '247hire', communityVotes: '261', juryVotes: '0', totalScore: '2610' },
  { rank: '#11', name: 'Phil Salt', title: 'Lead Tech Recruiter', category: 'Best Leadership Recruiter', company: 'Elastic Technologies India', communityVotes: '147', juryVotes: '0', totalScore: '1470' },
  { rank: '#12', name: 'Travis Head', title: 'Talent Acquisition Manager', category: 'Best Leadership Recruiter', company: 'Aspire Systems', communityVotes: '44', juryVotes: '0', totalScore: '440' },
];

function LeaderBoard() {
  const [searchQuery, setSearchQuery] = useState(''); // Add state for search query

  // Filter nominees based on the search query
  const filteredNominees = nomineesData.filter((nominee) => 
    nominee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    nominee.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                     {filteredNominees} {/* Pass filtered nominees */}
    </div>
  );
}

export default LeaderBoard;
