import React, { useState } from 'react';

function SearchBar({ onWeatherUpdate }) {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const coords = await getCoords(city);
    const weather = await getWeather(coords[0].latitude, coords[0].longitude);
    onWeatherUpdate(weather);
    setLoading(false);
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
