import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Cards/Card';
import { SearchContext } from '../Header/SearchContext';
import './home.css';

function Home() {
  const { searchTerm } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        console.log(response.data); // Check the structure of the data here
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const filteredData = data.filter((item) =>
    (item?.fullName || '').toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (loading) return <div>Loading...</div>; // Display loading state
  if (error) return <div>{error}</div>; // Display error message

  return (
    <div>
      <div className="grid">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              nominationType={item.nominationType}
              fullName={item.fullName}
              company={item.company}
              jobTitle={item.jobTitle}
              category={item.category}
              votes={item.votes}
              peerFullName={item.peerFullName}
              whyFit={item.whyFit}
              linkedIn={item.linkedIn}
              phone={item.phone}
            />
          ))
        ) : (
          <div>No data found</div> // Display message when no data is available
        )}
      </div>
    </div>
  );
}

export default Home;
