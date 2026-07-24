import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherUpdate = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar onWeatherUpdate={handleWeatherUpdate} />
      {weatherData && <CurrentWeather data={weatherData} />}
    </div>
  );
}

export default App;
