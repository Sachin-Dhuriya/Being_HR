import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nominationforself.css';

function Nominationforself() {
  const [formData, setFormData] = useState({
    nominationType: 'Self',
    fullName: '',
    email: '',
    linkedIn: '',
    phone: '',
    company: '',
    jobTitle: '',
    category: '',
    whyFit: '',
    ideas: ''
  });

  const [currentStep, setCurrentStep] = useState(1); // Track the current step (1 for Step 1, 2 for Step 2)
  const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility
  const navigate = useNavigate(); // For navigation after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      // Validate Step 1 before moving to Step 2
      if (formData.nominationType && formData.fullName && formData.email && formData.linkedIn && formData.phone && formData.company && formData.jobTitle && formData.category) {
        setCurrentStep(2);
      } else {
        alert('Please fill in all the required fields in Step 1');
      }
    }
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
        setShowPopup(true); // Show the success pop-up
        setTimeout(() => {
          navigate('/'); // Redirect to home page after 3 seconds
        }, 2000); // Redirect after 2 seconds (time to view the pop-up)
      } else {
        const data = await response.json();
        alert('Error: ' + data.errors); // Handle error display
      }
    } catch (error) {
      console.error('Error submitting nomination:', error);
      alert('Error submitting nomination');
    }
  };

  return (
    <div className="nomination-container">
      <h1 className="title">Nominate Yourself</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="form-step" id="step1">
            <label htmlFor="self">Self</label>
            <input
              type="radio"
              id="self"
              name="nominationType"
              value="Self"
              onChange={handleChange}
              checked={formData.nominationType === 'Self'}
            />

            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="linkedIn">LinkedIn URL:</label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="company">Current Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />

            <label htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />

            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a category</option>
              <option value="Top TA Leader">Top TA Leader</option>
              <option value="Best DEI Advocate">Best DEI Advocate</option>
              <option value="Best Leadership Recruiter">Best Leadership Recruiter</option>
              <option value="Best Tech Recruiter">Best Tech Recruiter</option>
              <option value="Best GTM/Business Recruiter">Best GTM/Business Recruiter</option>
              <option value="Candidate Experience & Ops Pro">Candidate Experience & Ops Pro</option>
              <option value="Best Employer Branding Champion">Best Employer Branding Champion</option>
              <option value="Best Referral Champion">Best Referral Champion</option>
            </select>

            <div className="form-navigation">
              <button type="button" className="btn-next" onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="form-step" id="step2">
            <label htmlFor="whyFit">
              What previous experience or achievements make you stand out for this category?
            </label>
            <textarea
              id="whyFit"
              name="whyFit"
              rows="5"
              value={formData.whyFit}
              onChange={handleChange}
              required
            />

            <label htmlFor="ideas">
              What innovative ideas or improvements would you propose for this category? (Optional)
            </label>
            <textarea
              id="ideas"
              name="ideas"
              rows="5"
              value={formData.ideas}
              onChange={handleChange}
            />

            <div className="form-navigation">
              <button type="button" className="btn" onClick={() => setCurrentStep(1)}>Previous</button>
              <button type="submit" className="btn btn-submit">Submit</button>
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

export default Nominationforself;
