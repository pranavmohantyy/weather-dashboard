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
    localStorage.setItem('recentCities', JSON.stringify(updatedCities));
    setRecentCities(updatedCities);
  };

  const handleGeolocation = async () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const weather = await getWeather(position.coords.latitude, position.coords.longitude);
        onWeatherUpdate(weather);
        setLoading(false);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={handleSearch} disabled={loading}>Search</button>
      <button onClick={handleGeolocation} disabled={loading}>Use my location</button>
      <div>
        {recentCities.map((recentCity, index) => (
          <button key={index} onClick={() => setCity(recentCity)}>{recentCity}</button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
