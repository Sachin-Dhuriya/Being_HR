import React, { useContext } from 'react';
import { SearchContext } from '../Header/SearchContext';

function SearchBar() {
  const { setSearchTerm } = useContext(SearchContext);

  return (
    <input
      type="text"
      placeholder="Search by Name....."
      className="w-full p-2 rounded border"
      style={{
        color: "white",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.05)",
        width: "450px",
        borderRadius: "25px",
      }}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
