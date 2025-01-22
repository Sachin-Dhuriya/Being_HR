// NomineeRow.js
import React from 'react';
import './NomineeRow.css';

const NomineeRow = ({ rank, fullName, title, category, company, votes, juryVotes, totalScore }) => {
  return (
    <tr className="nominee-row">
      <td className="rank">{rank}</td>
      <td>
        <div className="nominee-info">
          <span className="nominee-name">{fullName}</span>
          <span className="nominee-title">{title}</span>
        </div>
      </td>
      <td>{category}</td>
      <td>{company}</td>
      
      <td > <div id='num'>{votes}</div></td>
      <td ><div id='juryvotes'> {juryVotes || 0}</div></td>
      <td ><div id='totalscore'> {votes + (juryVotes || 0)}</div></td>
     
    </tr>
  );
};

export default NomineeRow;
