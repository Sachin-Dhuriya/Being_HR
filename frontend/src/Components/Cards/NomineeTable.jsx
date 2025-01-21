// NomineeTable.js
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
          <NomineeRow key={index} {...nominee} />
        ))}
      </tbody>
    </table>
  );
};

export default NomineeTable;
