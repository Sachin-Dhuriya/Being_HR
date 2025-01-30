import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtherNomination.css';

function OtherNomination() {
  const [formData, setFormData] = useState({
    nominationType: 'Peer',
    fullName: '',
    email: '',
    linkedIn: '',
    phone: '',
    company: '',
    jobTitle: '',
    category: '',
    peerFullName: '',
    peerEmail: '',
    peerLinkedIn: '',
    peerPhone: '',
    peerCompany: '',
    peerJobTitle: '',
    relation: '',
  });

  const [currentStep, setCurrentStep] = useState(1); // Step tracker
  const [showPopup, setShowPopup] = useState(false); // State to show popup after submission
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      // Validate Step 1 before moving to Step 2
      if (
        formData.fullName &&
        formData.email &&
        formData.linkedIn &&
        formData.phone &&
        formData.company &&
        formData.jobTitle &&
        formData.category
      ) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        alert('Please fill in all the required fields in Step 1');
      }
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/nominate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true); // Show success popup
        setTimeout(() => {
          navigate('/'); // Redirect to homepage after 3 seconds
        }, 2000); // 2-second delay before redirect
      } else {
        const data = await response.json();
        alert(data.errors);
      }
    } catch (error) {
      console.error('Error submitting nomination:', error);
      alert('Error submitting nomination');
    }
  };

  return (
    <div className="nomination-container">
      <h1 className="title">Nominate Someone Else</h1>

      <form id="nominateForm" onSubmit={handleSubmit}>
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="form-step" id="step1">
            <label htmlFor="self">Peer</label>
            <input
              type="radio"
              id="self"
              name="nominationType"
              value="Peer"
              onChange={handleChange}
              checked
            />
            <label htmlFor="fullName">Nominee's Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Nominee's Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="linkedIn">Nominee's LinkedIn URL:</label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Nominee's Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="company">Nominee's Current Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />

            <label htmlFor="jobTitle">Nominee's Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />

            <label htmlFor="category">Nominate for Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Top TA Leader">Top TA Leader</option>
              <option value="Best DEI Advocate">Best DEI Advocate</option>
              <option value="Best Leadership Recruiter">Best Leadership Recruiter</option>
              <option value="Best Tech Recruiter">Best Tech Recruiter</option>
              <option value="Best GTM/Business Recruiter">Best GTM/Business Recruiter</option>
              <option value="Candidate Experience & Ops Pro">Candidate Experience & Ops Pro</option>
              <option value="Best Employer Branding Champion">Best Employer Branding Champion</option>
              <option value="Best Referral Champion">Best Referral Champion</option>
            </select>

            {/* New Nomination Type Field */}

            <div className="form-navigation">
              <button type="button" onClick={nextStep} className="btn-next">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="form-step" id="step2">
            <label htmlFor="peerFullName">Your Full Name:</label>
            <input
              type="text"
              id="peerFullName"
              name="peerFullName"
              value={formData.peerFullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="peerEmail">Your Email:</label>
            <input
              type="email"
              id="peerEmail"
              name="peerEmail"
              value={formData.peerEmail}
              onChange={handleChange}
              required
            />

            <label htmlFor="peerLinkedIn">Your LinkedIn URL:</label>
            <input
              type="url"
              id="peerLinkedIn"
              name="peerLinkedIn"
              value={formData.peerLinkedIn}
              onChange={handleChange}
              required
            />

            <label htmlFor="peerPhone">Your Phone Number:</label>
            <input
              type="tel"
              id="peerPhone"
              name="peerPhone"
              value={formData.peerPhone}
              onChange={handleChange}
              required
            />

            <label htmlFor="peerCompany">Your Current Company:</label>
            <input
              type="text"
              id="peerCompany"
              name="peerCompany"
              value={formData.peerCompany}
              onChange={handleChange}
              required
            />

            <label htmlFor="peerJobTitle">Your Job Title:</label>
            <input
              type="text"
              id="peerJobTitle"
              name="peerJobTitle"
              value={formData.peerJobTitle}
              onChange={handleChange}
              required
            />

            <label htmlFor="relation">Your Relation with Nominee:</label>
            <select
              id="relation"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a relation
              </option>
              <option value="Colleague">Colleague</option>
              <option value="Manager">Manager</option>
              <option value="Stake Holder">Stake Holder</option>
            </select>

            <div className="form-navigation">
              <button type="button" onClick={prevStep} className="btn-prev">
                Previous
              </button>
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Success Pop-up */}
      {showPopup && (
        <div className="n-popup">
          <div className="n-popup-content">
            <h2>Nomination Submitted Successfully</h2>
            <p>You will be redirected to the home page shortly...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtherNomination;
