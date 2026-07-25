import React from 'react';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';
import TemperatureChart from './TemperatureChart';

function convertTemperature(temp, isCelsius) {
  return isCelsius ? temp : (temp * 9/5) + 32;
}

function CurrentWeather({ data, isCelsius }) {
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
      <p>Temperature: {convertTemperature(temperature, isCelsius).toFixed(1)}°{isCelsius ? 'C' : 'F'}</p>
      <p>Feels Like: {convertTemperature(feels_like, isCelsius).toFixed(1)}°{isCelsius ? 'C' : 'F'}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {isCelsius ? windspeed : windspeed * 2.237} {isCelsius ? 'm/s' : 'mph'}</p>
      <HourlyForecast hourly={data.hourly} />
      <WeeklyForecast weekly={data.weekly} />
      <TemperatureChart hourly={data.hourly} />
    </div>
  );
}

export default CurrentWeather;
