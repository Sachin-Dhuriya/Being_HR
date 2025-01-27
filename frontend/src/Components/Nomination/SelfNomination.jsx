import React, { useState } from 'react';
import axios from 'axios';

function SelfNomination() {
  const [formData, setFormData] = useState({
    nominationType: '',
    fullName: '',
    email: '',
    linkedIn: '',
    phone: '',
    company: '',
    jobTitle: '',
    whyFit: '',
    ideas: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/nominate', formData);
      alert('Nomination submitted successfully');
    } catch (error) {
      console.error('Error submitting nomination', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Part 1 */}
        <input 
          type="radio" 
          name="nominationType" 
          value={formData.nominationType} 
          onChange={handleChange}
          checked/>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="url"
        name="linkedIn"
        value={formData.linkedIn}
        onChange={handleChange}
        placeholder="LinkedIn URL"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Current Company"
        required
      />
      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
        required
      />

      {/* Part 2 */}
      <textarea
        name="whyFit"
        value={formData.whyFit}
        onChange={handleChange}
        placeholder="What previous experience or achievements make you stand out for this category?"
        rows="5"
        required
      />
      <textarea
        name="ideas"
        value={formData.ideas}
        onChange={handleChange}
        placeholder="What innovative ideas or improvements would you propose for this category?"
        rows="5"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SelfNomination;
