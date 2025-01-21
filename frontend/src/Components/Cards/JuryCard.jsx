import React from 'react';
import './JuryCard.css';

const JuryCard = ({ img, name, position, companyName, juryDesc, linkedin }) => {
  return (
    <div className="jury-card">
      <div className="jury-card-header">
        <img src={img} alt={name} className="jury-profile-pic" />
        <div className="jury-header-text">
          <h2 className="jury-name">{name}</h2>
          <h3 className="jury-position">{position}</h3>
          <h4 className="jury-company">{companyName}</h4>
        </div>
      </div>
      <p className="jury-description">{juryDesc}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <button className="jury-view-profile">View Profile</button>
      </a>
    </div>
  );
};

export default JuryCard;
