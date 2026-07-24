import React, { useState } from 'react';

function SearchBar() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    // Simulate loading state
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default SearchBar;