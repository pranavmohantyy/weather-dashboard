import React from 'react';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';

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
      <p>Condition: {weatherIcons[weathercode] || '🌈'}</p>
      <HourlyForecast hourly={data.hourly} />
      <WeeklyForecast weekly={data.daily} />
    </div>
  );
}

export default CurrentWeather;
