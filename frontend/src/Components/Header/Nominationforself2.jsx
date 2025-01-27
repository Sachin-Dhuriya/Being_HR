import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nominationforself2.css';

function Nominationforself2() {
  const [formData, setFormData] = useState({
    whyFit: '',
    ideas: '',
  });

  const navigate = useNavigate(); // for navigation after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have the first part of the form data already available (maybe passed down or in local state)
    const nominationData = {
      ...formData, // Merging second form data with the first part's data
    };

    try {
      const response = await fetch('http://localhost:5000/nominate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nominationData),
      });

      if (response.ok) {
        // Redirect to a success page or show a success message
        navigate('/thankyou'); // Redirect to a thank you or success page
      } else {
        const data = await response.json();
        alert('Error: ' + data.message); // Handle error display
      }
    } catch (error) {
      console.error('Error submitting nomination:', error);
      alert('Error submitting nomination');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Step 2 */}
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
            <Link to="/nominationforself">
              <button type="button" className="btn" id="prevStep2">
                Previous
              </button>
            </Link>
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Nominationforself2;
