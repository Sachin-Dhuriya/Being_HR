import React, { useState } from 'react';
import './Card.css';

const Card = ({ nominationType, fullName, company, jobTitle, category, votes, peerFullName,linkedIn }) => {
    const [voteCount, setVoteCount] = useState(votes);
    const [voted, setVoted] = useState(false);

    const handleVote = () => {
        if (!voted) {
            setVoteCount(voteCount + 1);
            setVoted(true);
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
          <span className="status-badge">{category}</span> <br></br><br></br>
          <span className="votes">
            <b id="votes-<%= nom._id %>">{voteCount}</b> <i className="icon">👍</i> votes
          </span>
          <span className="jury">Jury Score: <b>0</b></span>
        </div>
        <div className="buttons">
            <a className="linkedin-link" target="_blank" href={linkedIn}> <button className="profile-btn">LinkedIn Profile</button></a>
            <button className="vote-btn" data-id="<%= nom._id %>">👍 Vote</button>
        </div>
        <hr></hr><br />
        <p className="nomination">Nominated by {peerFullName}</p>
      </div>
    );
};

export default Card;
