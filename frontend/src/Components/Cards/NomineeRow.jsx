import React from 'react';
import './NomineeRow.css';

const NomineeRow = ({ rank, fullName, title, category, company, votes, juryVotes, totalScore }) => {
  // Determine the emoji based on rank
  const getRankEmoji = (rank) => {
    if (rank === 1) {
      return '🏆 #1';  // Winner cup for rank 1
    } else if (rank === 2) {
      return '🥈 #2';  // Silver medal for rank 2
    } else if (rank === 3) {
      return '🥉 #3';  // Bronze medal for rank 3
    }
    return `#${rank}`;  // Default format for other ranks
  };

  return (
    <tr className="nominee-row">
      <td className="rank">{getRankEmoji(rank)}</td>
      <td>
        <div className="nominee-info">
          <span className="nominee-name">{fullName}</span>
          <span className="nominee-title">{title}</span>
        </div>
      </td>
      <td>{category}</td>
      <td>{company}</td>
      <td><div id='num'>{votes}</div></td>
      <td><div id='juryvotes'>{juryVotes || 0}</div></td>
      <td><div id='totalscore'>{votes + (juryVotes || 0)}</div></td>
    </tr>
  );
};

export default NomineeRow;
