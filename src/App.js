import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import './index.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = JSON.parse(localStorage.getItem('isDarkMode'));
    if (storedMode !== null) {
      setIsDarkMode(storedMode);
    }
  }, []);

  const handleWeatherUpdate = (data) => {
    setWeatherData(data);
  };

  const toggleUnits = () => {
    setIsCelsius(!isCelsius);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}> 
      <h1>Weather Dashboard</h1>
      <SearchBar onWeatherUpdate={handleWeatherUpdate} />
      <button onClick={toggleUnits}>Toggle °C/°F</button>
      <button onClick={toggleDarkMode}>Toggle Dark/Light Mode</button>
      {weatherData && <CurrentWeather data={weatherData} isCelsius={isCelsius} />}
    </div>
  );
}

export default App;
