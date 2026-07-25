import React from 'react';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';
import TemperatureChart from './TemperatureChart';

function CurrentWeather({ data }) {
  const { temperature, feels_like, humidity, windspeed, weathercode } = data.current_weather;
  const weatherIcons = {
    0: '☀️',
    1: '🌤️',
    2: '☁️',
    3: '🌧️',
    4: '🌩️'
  };

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Feels Like: {feels_like}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {windspeed} m/s</p>
      <p>Condition: {weatherIcons[weathercode] || 'N/A'}</p>
      <TemperatureChart hourly={data.hourly} />
      <HourlyForecast hourly={data.hourly} />
    </div>
  );
}

export default CurrentWeather;