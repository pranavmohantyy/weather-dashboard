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
    setLoading(false);
    const updatedCities = [...new Set([city, ...recentCities])].slice(0, 5);
    setRecentCities(updatedCities);
    localStorage.setItem('recentCities', JSON.stringify(updatedCities));
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search city" />
      <button onClick={handleSearch} disabled={loading}>{loading ? 'Loading...' : 'Search'}</button>
      <ul>
        {recentCities.map((c, index) => (
          <li key={index} onClick={() => setCity(c)}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;