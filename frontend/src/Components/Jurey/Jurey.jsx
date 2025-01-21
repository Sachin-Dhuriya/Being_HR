import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import JuryCard from '../Cards/JuryCard';
import './Jurey.css';

function Jurey() {
  const [juryData, setJuryData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend using axios
    const fetchJuryData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jury');
        setJuryData(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching jury data:', error);
      }
    };

    fetchJuryData();
  }, []);

  return (
    <div className="app-juery">
      <h1 className="juery-heading">Meet Our Jury</h1>
      <div className="jury-container">
        {juryData.map((jury, index) => (
          <JuryCard key={index} {...jury} />
        ))}
      </div>
    </div>
  );
}

export default Jurey;
