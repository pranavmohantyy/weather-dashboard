import React from 'react';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';
import TemperatureChart from './TemperatureChart';
import WindDirection from './WindDirection';

function convertTemperature(temp, isCelsius) {
  return isCelsius ? temp : (temp * 9/5) + 32;
}

function CurrentWeather({ data, isCelsius }) {
  const { temperature, feels_like, humidity, windspeed, winddirection, weathercode, uv_index, air_quality } = data.current_weather;
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
      <p>{temperature}°{isCelsius ? 'C' : 'F'} - {weatherIcons[weathercode]}</p>
      <p>Feels like: {convertTemperature(feels_like, isCelsius).toFixed(1)}°{isCelsius ? 'C' : 'F'}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {windspeed} {winddirection}°</p>
      <WindDirection degrees={winddirection} />
      {uv_index && <p>UV Index: {uv_index}</p>}
      {air_quality && <p>Air Quality: {air_quality}</p>}
      <HourlyForecast hourly={data.hourly} isCelsius={isCelsius} />
      <WeeklyForecast weekly={data.weekly} isCelsius={isCelsius} />
      <TemperatureChart hourly={data.hourly} />
    </div>
  );
}

export default CurrentWeather;