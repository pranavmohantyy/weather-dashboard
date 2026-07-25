import React from 'react';

function convertTemperature(temp, isCelsius) {
  return isCelsius ? temp : (temp * 9/5) + 32;
}

function WeeklyForecast({ weekly, isCelsius }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>7-Day Forecast</h3>
      {weekly.map((day, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
          <span>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}</span>
          <span>{convertTemperature(day.high, isCelsius).toFixed(1)}°{isCelsius ? 'C' : 'F'} / {convertTemperature(day.low, isCelsius).toFixed(1)}°{isCelsius ? 'C' : 'F'}</span>
        </div>
      ))}
    </div>
  );
}

export default WeeklyForecast;
