import React, { useState } from 'react';
import './Search.css';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Trigger the search action in the parent component
    onSearch(query);
    setQuery(''); // Clear the input after searching
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search activity by keyword or date..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
