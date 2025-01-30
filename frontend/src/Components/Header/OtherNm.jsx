import React from 'react'
import './OtherNm.css'

function OtherNm() {
  return (
    <div>
         <form id="nominateForm" action="/submitnomination" method="POST">
       <div className="form-step" id="step2">
          <label htmlFor="yourFullName">Your Full Name:</label>
          <input type="text" id="yourFullName" name="peerFullName" required />

          <label htmlFor="yourEmail">Your Email:</label>
          <input type="email" id="yourEmail" name="peerEmail" required />

          <label htmlFor="yourLinkedIn">Your LinkedIn URL:</label>
          <input type="url" id="yourLinkedIn" name="peerLinkedIn" required />

          <label htmlFor="yourPhone">Your Phone Number:</label>
          <input type="number" id="yourPhone" name="peerPhone" required />

          <label htmlFor="yourCompany">Your Current Company:</label>
          <input type="text" id="yourCompany" name="peerCompany" required />

          <label htmlFor="yourJobTitle">Your Job Title:</label>
          <input type="text" id="yourJobTitle" name="peerJobTitle" required />

          <label htmlFor="relationWithNominee">Your Relation with Nominee:</label>
          <select id="relationWithNominee" name="relation" defaultValue="" required>
            <option value="" disabled>
              Select a category
            </option>
            <option value="Colleague">Colleague</option>
            <option value="Manager">Manager</option>
            <option value="Stake Holder">Stake Holder</option>
          </select>
          <button type="submit" className="submit-btn-self">
              Submit
            </button>

             <div className='change-page'>
                <p>Wan't to Nominate Yourself? <a href="/nominationforself">Click here!</a></p>
                
             </div>
        </div>
        </form>
    </div>
  )
}

export default OtherNm
