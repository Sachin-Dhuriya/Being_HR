import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Cards/Card';
import { SearchContext } from '../Header/SearchContext';
import './home.css';

function Home() {
  const { searchTerm } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    (item?.fullName || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVoteUpdate = (id, updatedVotes) => {
    setData(prevData =>
      prevData.map(item =>
        item._id === id ? { ...item, votes: updatedVotes } : item
      )
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="grid">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              _id={item._id}
              nominationType={item.nominationType}
              fullName={item.fullName}
              company={item.company}
              jobTitle={item.jobTitle}
              category={item.category}
              votes={item.votes}
              peerFullName={item.peerFullName}
              linkedIn={item.linkedIn}
              onVote={handleVoteUpdate} // Pass the vote update handler here
            />
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Home;
