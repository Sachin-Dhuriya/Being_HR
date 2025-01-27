import React from 'react';
import './OtherNomination.css'
import { Link } from 'react-router-dom';

function OtherNomination() {
  return (
    <div>
      <form id="nominateForm" action="/submitnomination" method="POST">
        <h1>Nominate Someone Else</h1>
        <div className="form-step active" id="step1">
         

          <label htmlFor="nomineeFullName">Nominee's Full Name:</label>
          <input type="text" id="nomineeFullName" name="fullName" required />

          <label htmlFor="nomineeEmail">Nominee's Email:</label>
          <input type="email" id="nomineeEmail" name="email" required />

          <label htmlFor="nomineeLinkedIn">Nominee's LinkedIn URL:</label>
          <input type="url" id="nomineeLinkedIn" name="linkedIn" required />

          <label htmlFor="nomineePhone">Nominee's Phone Number:</label>
          <input type="number" id="nomineePhone" name="phone" required />

          <label htmlFor="nomineeCompany">Nominee's Current Company:</label>
          <input type="text" id="nomineeCompany" name="company" required />

          <label htmlFor="nomineeJobTitle">Nominee's Job Title:</label>
          <input type="text" id="nomineeJobTitle" name="jobTitle" required />

          <label htmlFor="nominateCategory">Nominate for Category:</label>
          <select id="nominateCategory" name="category" defaultValue="" required>
            <option value="" disabled>
              Select a category
            </option>
            <option value="Top TA Leader">Top TA Leader</option>
            <option value="Best DEI Advocate">Best DEI Advocate</option>
            <option value="Best Leadership Recruiter">Best Leadership Recruiter</option>
            <option value="Best Tech Recruiter">Best Tech Recruiter</option>
          </select>

          <div className="form-navigation">
           <Link to="/othernm">   
              Next
            </Link>
          </div>
        </div>

      </form>
    </div>
  );
}

export default OtherNomination;
