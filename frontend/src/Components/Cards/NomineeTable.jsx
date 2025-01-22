import React from 'react';
import NomineeRow from './NomineeRow';
import './NomineeTable.css';

const NomineeTable = ({ nominees }) => {
  return (
    <table className="nominee-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Nominee</th>
          <th>Category</th>
          <th>Company</th>
          <th>Community Votes</th>
          <th>Jury Votes</th>
          <th>Total Score</th>
        </tr>
      </thead>
      <tbody>
        {nominees.map((nominee, index) => (
          // Pass index + 1 as the rank to NomineeRow
          <NomineeRow key={index} rank={index + 1} {...nominee} />
        ))}
      </tbody>
    </table>
  );
};

export default NomineeTable;
