import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const handleWeatherUpdate = (data) => {
    setWeatherData(data);
  };

  const toggleUnits = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar onWeatherUpdate={handleWeatherUpdate} />
      <button onClick={toggleUnits}>Toggle °C/°F</button>
      {weatherData && <CurrentWeather data={weatherData} isCelsius={isCelsius} />}
    </div>
  );
}

export default App;
