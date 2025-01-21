// NomineeRow.js
import React from 'react';
import './NomineeRow.css';

const NomineeRow = ({ rank, name, title, category, company, communityVotes, juryVotes, totalScore }) => {
  return (
    <tr className="nominee-row">
      <td className="rank">{rank}</td>
      <td>
        <div className="nominee-info">
          <span className="nominee-name">{name}</span>
          <span className="nominee-title">{title}</span>
        </div>
      </td>
      <td>{category}</td>
      <td>{company}</td>
      
      <td > <div id='num'>{communityVotes}</div></td>
      <td ><div id='juryvotes'> {juryVotes}</div></td>
      <td ><div id='totalscore'> {totalScore}</div></td>
     
    </tr>
  );
};

export default NomineeRow;
