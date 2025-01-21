import React, { useState } from 'react';
import axios from 'axios';

function SelfNomination() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedInURL: '',
    phoneNumber: '',
    currentCompany: '',
    jobTitle: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/nominations', formData);
      alert('Nomination submitted successfully');
    } catch (error) {
      console.error('Error submitting nomination', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="url" name="linkedInURL" value={formData.linkedInURL} onChange={handleChange} placeholder="LinkedIn URL" />
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input type="text" name="currentCompany" value={formData.currentCompany} onChange={handleChange} placeholder="Current Company" required />
      <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SelfNomination;
