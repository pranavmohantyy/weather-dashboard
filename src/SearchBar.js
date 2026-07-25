import React, { useState, useEffect } from 'react';
import { getCoords, getWeather } from './api';

function SearchBar({ onWeatherUpdate }) {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [recentCities, setRecentCities] = useState([]);

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem('recentCities')) || [];
    setRecentCities(storedCities);
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    const coords = await getCoords(city);
    const weather = await getWeather(coords[0].latitude, coords[0].longitude);
    onWeatherUpdate(weather);
    updateRecentCities(city);
    setLoading(false);
  };

  const updateRecentCities = (city) => {
    const updatedCities = [city, ...recentCities.filter(c => c !== city)].slice(0, 5);
    setRecentCities(updatedCities);
    localStorage.setItem('recentCities', JSON.stringify(updatedCities));
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch} disabled={loading}>Search</button>
      <div>
        {recentCities.map((c, index) => (
          <button key={index} onClick={() => handleRecentSearch(c)}>{c}</button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
