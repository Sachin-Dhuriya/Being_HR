import React, { useState } from 'react';
import axios from 'axios';  // Import axios for making HTTP requests
import './Card.css';

const Card = ({ _id, nominationType, fullName, company, jobTitle, category, votes, peerFullName, linkedIn, onVote }) => {
  const [voteCount, setVoteCount] = useState(votes); // Initialize with the current vote count

  const handleVote = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/vote/${_id}`);
      setVoteCount(response.data.votes); // Update the vote count in the UI with the response
      if (onVote) {
        onVote(_id, response.data.votes); // Pass the updated votes back to parent
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  return (
    <div className="card">
      <div className="header">
        <h2>{fullName}</h2>
        <div className="badges">
          <span className="badge">{nominationType}</span>
        </div>
      </div>
      <p className="subtitle">{company} • {jobTitle}</p>
      <div className="status">
        <span className="status-badge">{category}</span> <br /><br />
        <span className="votes">
          <b>{voteCount}</b> <i className="icon">👍</i> votes
        </span>
        <span className="jury">Jury Score: <b>0</b></span>
      </div>
      <div className="buttons">
        <a className="linkedin-link" target="_blank" href={linkedIn}>
          <button className="profile-btn">LinkedIn Profile</button>
        </a>
        <button className="vote-btn" onClick={handleVote}>👍 Vote</button>
      </div>
      <hr /> <br />
      <p className="nomination">Nominated by {peerFullName}</p>
    </div>
  );
};


export default Card;
